import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import {
  sendEmail,
  contactFormTemplate,
  autoResponderTemplate,
} from "@/lib/email";
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

    // Insert into database
    const { data: dbData, error: dbError } = await supabaseAdmin
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
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
        { status: 500 }
      );
    }

    // Send notification email to school
    const schoolEmail =
      process.env.SCHOOL_ADMISSIONS_EMAIL || process.env.SCHOOL_EMAIL;
    if (schoolEmail) {
      const notificationResult = await sendEmail({
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
      subject: "Thank you for contacting Sandton Prep",
      html: autoResponderTemplate(
        `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        "contact"
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
        message: "Contact form submitted successfully",
        submissionId: dbData.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
