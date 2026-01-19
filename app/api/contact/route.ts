import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { supabaseAdmin } from "@/lib/supabase";
import { contactFormTemplate, autoResponderTemplate } from "@/lib/email";
import { queueEmail } from "@/lib/queue";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { validateContactForm, sanitizeInput } from "@/lib/validation";

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
      childAge: sanitizeInput(body.childAge || ""),
      message: sanitizeInput(body.message || ""),
    };

    // Validate form data
    const validation = validateContactForm(sanitizedData);
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
      .from("contact_submissions")
      .insert([
        {
          first_name: sanitizedData.firstName,
          last_name: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone || null,
          child_age: sanitizedData.childAge || null,
          message: sanitizedData.message,
          ip_address: clientIp,
          user_agent: userAgent,
          status: "new",
        },
      ]);

    if (dbError) {
      console.error("Database error:", dbError);
      Sentry.captureException(dbError, { tags: { type: "db_insert_error" } });
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
        { status: 500 }
      );
    }

    // Generate submission ID for tracking (using timestamp + random)
    const submissionId = `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Queue emails asynchronously (fire and forget - return immediately)
    const schoolEmail =
      process.env.SCHOOL_ADMISSIONS_EMAIL || process.env.SCHOOL_EMAIL;

    if (schoolEmail) {
      queueEmail("notification", {
        to: schoolEmail,
        subject: `New Contact Form Submission - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
        html: contactFormTemplate({
          firstName: sanitizedData.firstName,
          lastName: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone || undefined,
          childAge: sanitizedData.childAge || undefined,
          message: sanitizedData.message,
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
      subject: "Thank you for contacting Sandton Prep",
      html: autoResponderTemplate(
        `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        "contact"
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
        message: "Contact form submitted successfully",
        submissionId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    Sentry.captureException(error, {
      tags: { endpoint: "/api/contact", method: "POST" },
      level: "error",
    });
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
