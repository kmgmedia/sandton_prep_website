import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import {
  sendEmail,
  bookingFormTemplate,
  autoResponderTemplate,
} from "@/lib/email";
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

    // Insert into database
    const { data: dbData, error: dbError } = await supabaseAdmin
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
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save booking. Please try again." },
        { status: 500 }
      );
    }

    // Send notification email to school
    const schoolEmail =
      process.env.SCHOOL_ADMISSIONS_EMAIL || process.env.SCHOOL_EMAIL;
    if (schoolEmail) {
      const notificationResult = await sendEmail({
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
      });

      if (!notificationResult.success) {
        console.error(
          "Failed to send notification email:",
          notificationResult.error
        );
        // Don't fail the request if email fails - data is already saved
      }
    }

    // Send auto-responder to user
    const autoResponderResult = await sendEmail({
      to: sanitizedData.email,
      subject: "Visit Booking Confirmation - Sandton Prep",
      html: autoResponderTemplate(
        `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        "booking"
      ),
    });

    if (!autoResponderResult.success) {
      console.error(
        "Failed to send auto-responder:",
        autoResponderResult.error
      );
      // Don't fail the request if auto-responder fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Visit booking submitted successfully",
        submissionId: dbData.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking form API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
