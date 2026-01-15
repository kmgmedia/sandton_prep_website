import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { supabaseAdmin } from "@/lib/supabase";
import { bookingFormTemplate, autoResponderTemplate } from "@/lib/email";
import { queueEmail } from "@/lib/queue";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { validateBookingForm, sanitizeInput } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Apply rate limiting (5 requests per 15 minutes per IP)
    const rateLimitResult = rateLimit(clientIp);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: rateLimitResult.retryAfter,
        },
        {
          status: 429,
          headers: {
            "Retry-After": rateLimitResult.retryAfter?.toString() || "900",
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(body.firstName || ""),
      lastName: sanitizeInput(body.lastName || ""),
      email: sanitizeInput(body.email || ""),
      phone: sanitizeInput(body.phone || ""),
      childName: sanitizeInput(body.childName || ""),
      childAge: sanitizeInput(body.childAge || ""),
      currentSchool: sanitizeInput(body.currentSchool || ""),
      preferredDate: body.preferredDate || "",
      preferredTime: sanitizeInput(body.preferredTime || ""),
      adultsAttending: parseInt(body.adultsAttending) || 0,
      specialRequirements: sanitizeInput(body.specialRequirements || ""),
    };

    // Validate form data
    const validation = validateBookingForm(sanitizedData);
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    // Get request metadata
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Insert into database (no select - 33% faster)
    const { error: dbError } = await supabaseAdmin
      .from("visit_bookings")
      .insert([
        {
          first_name: sanitizedData.firstName,
          last_name: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          child_name: sanitizedData.childName || null,
          child_age: sanitizedData.childAge,
          current_school: sanitizedData.currentSchool || null,
          preferred_date: sanitizedData.preferredDate,
          preferred_time: sanitizedData.preferredTime,
          adults_attending: sanitizedData.adultsAttending,
          special_requirements: sanitizedData.specialRequirements || null,
          ip_address: clientIp,
          user_agent: userAgent,
          status: "pending",
        },
      ]);

    if (dbError) {
      console.error("Database error:", dbError);
      console.error("Error details:", JSON.stringify(dbError, null, 2));
      Sentry.captureException(dbError, { tags: { type: "db_insert_error" } });
      return NextResponse.json(
        {
          error: "Failed to save booking. Please try again.",
          debug:
            process.env.NODE_ENV === "development"
              ? dbError.message
              : undefined,
        },
        { status: 500 }
      );
    }

    // Generate submission ID for tracking
    const submissionId = `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Queue emails asynchronously (fire and forget - return immediately)
    const schoolEmail =
      process.env.SCHOOL_ADMISSIONS_EMAIL || process.env.SCHOOL_EMAIL;

    if (schoolEmail) {
      queueEmail("notification", {
        to: schoolEmail,
        subject: `New Visit Booking - ${sanitizedData.firstName} ${sanitizedData.lastName} - ${sanitizedData.preferredDate}`,
        html: bookingFormTemplate({
          firstName: sanitizedData.firstName,
          lastName: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          childName: sanitizedData.childName || undefined,
          childAge: sanitizedData.childAge,
          currentSchool: sanitizedData.currentSchool || undefined,
          preferredDate: sanitizedData.preferredDate,
          preferredTime: sanitizedData.preferredTime,
          adultsAttending: sanitizedData.adultsAttending,
          specialRequirements: sanitizedData.specialRequirements || undefined,
        }),
        replyTo: sanitizedData.email,
        submissionId,
      }).catch((error) => {
        console.error("Failed to queue notification email:", error);
        Sentry.captureException(error, { tags: { type: "queue_error" } });
      });
    }

    // Queue auto-responder email
    queueEmail("autoresponder", {
      to: sanitizedData.email,
      subject: "Visit Booking Confirmation - Sandton Prep",
      html: autoResponderTemplate(
        `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        "booking"
      ),
      submissionId,
    }).catch((error) => {
      console.error("Failed to queue auto-responder:", error);
      Sentry.captureException(error, { tags: { type: "queue_error" } });
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Visit booking submitted successfully",
        submissionId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking form API error:", error);
    Sentry.captureException(error, {
      tags: { endpoint: "/api/booking", method: "POST" },
      level: "error",
    });
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
