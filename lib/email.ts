import { Resend } from "resend";
import * as Sentry from "@sentry/nextjs";

// Initialize Resend only if API key is available (for runtime, not build time)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send email with automatic retry on failure
 * Retries up to maxAttempts times with exponential backoff
 */
export async function sendEmailWithRetry(
  params: SendEmailParams,
  maxAttempts: number = 3
) {
  if (!resend) {
    console.error("Resend API key not configured");
    return { success: false, error: "Email service not configured" };
  }

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const data = await resend.emails.send({
        from: `Sandton Prep <${process.env.SCHOOL_EMAIL}>`,
        to: [params.to],
        subject: params.subject,
        html: params.html,
        replyTo: params.replyTo || process.env.SCHOOL_EMAIL,
      });

      return { success: true, data, attempts: attempt };
    } catch (error) {
      const isLastAttempt = attempt === maxAttempts;
      const errorMsg = error instanceof Error ? error.message : String(error);

      if (isLastAttempt) {
        console.error(`Email failed after ${maxAttempts} attempts:`, errorMsg);
        Sentry.captureException(error, {
          tags: { type: "email_failure", to: params.to },
          extra: { attempts: maxAttempts },
        });
        return { success: false, error, attempts: attempt };
      }

      // Exponential backoff: 1s, 2s, 4s
      const delayMs = Math.pow(2, attempt - 1) * 1000;
      console.warn(
        `Email attempt ${attempt}/${maxAttempts} failed. Retrying in ${delayMs}ms...`
      );
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }

  return { success: false, error: "All retry attempts exhausted" };
}

/**
 * Simple send (no retry) - for immediate sending if needed
 */
export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: SendEmailParams) {
  if (!resend) {
    console.error("Resend API key not configured");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const data = await resend.emails.send({
      from: `Sandton Prep <${process.env.SCHOOL_EMAIL}>`,
      to: [to],
      subject,
      html,
      replyTo: replyTo || process.env.SCHOOL_EMAIL,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Email sending failed:", error);
    Sentry.captureException(error, { tags: { type: "email_error", to } });
    return { success: false, error };
  }
}

// Template for contact form submission notification
export function contactFormTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  childAge?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9fafb; padding: 30px; margin-top: 20px; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e40af; }
          .value { margin-left: 10px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #1e40af; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.firstName} ${data.lastName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${data.email}</span>
            </div>
            ${
              data.phone
                ? `
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${data.phone}</span>
            </div>
            `
                : ""
            }
            ${
              data.childAge
                ? `
            <div class="field">
              <span class="label">Child's Age:</span>
              <span class="value">${data.childAge}</span>
            </div>
            `
                : ""
            }
            <div class="message-box">
              <div class="label">Message:</div>
              <p>${data.message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Template for visit booking notification
export function bookingFormTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  childName?: string;
  childAge: string;
  currentSchool?: string;
  preferredDate: string;
  preferredTime: string;
  adultsAttending: number;
  specialRequirements?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9fafb; padding: 30px; margin-top: 20px; border-radius: 8px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 18px; font-weight: bold; color: #1e40af; margin-bottom: 15px; border-bottom: 2px solid #1e40af; padding-bottom: 5px; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-left: 10px; }
          .highlight { background-color: #dbeafe; padding: 15px; border-radius: 4px; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Visit Booking Request</h1>
          </div>
          <div class="content">
            <div class="section">
              <div class="section-title">Parent/Guardian Information</div>
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${data.firstName} ${data.lastName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${data.email}</span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${data.phone}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Child Information</div>
              ${
                data.childName
                  ? `
              <div class="field">
                <span class="label">Child's Name:</span>
                <span class="value">${data.childName}</span>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">Child's Age:</span>
                <span class="value">${data.childAge}</span>
              </div>
              ${
                data.currentSchool
                  ? `
              <div class="field">
                <span class="label">Current School:</span>
                <span class="value">${data.currentSchool}</span>
              </div>
              `
                  : ""
              }
            </div>

            <div class="highlight">
              <div class="section-title">Visit Details</div>
              <div class="field">
                <span class="label">Preferred Date:</span>
                <span class="value">${data.preferredDate}</span>
              </div>
              <div class="field">
                <span class="label">Preferred Time:</span>
                <span class="value">${data.preferredTime}</span>
              </div>
              <div class="field">
                <span class="label">Number of Adults Attending:</span>
                <span class="value">${data.adultsAttending}</span>
              </div>
            </div>

            ${
              data.specialRequirements
                ? `
            <div class="section">
              <div class="section-title">Special Requirements</div>
              <p>${data.specialRequirements.replace(/\n/g, "<br>")}</p>
            </div>
            `
                : ""
            }
          </div>
        </div>
      </body>
    </html>
  `;
}

// Auto-responder template for users who submit forms
export function autoResponderTemplate(
  name: string,
  type: "contact" | "booking"
) {
  const typeText =
    type === "contact" ? "contact inquiry" : "visit booking request";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e40af; color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; background-color: #ffffff; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Sandton Prep</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for your ${typeText}. We have received your message and one of our team members will get back to you within 24-48 hours.</p>
            
            <p>In the meantime, feel free to explore our website to learn more about our curriculum, facilities, and the Sandton Prep experience.</p>
            
            <p>If you have any urgent questions, please don't hesitate to call us at <strong>011 234 5678</strong>.</p>
            
            <p>Warm regards,<br>
            <strong>The Sandton Prep Team</strong></p>
          </div>
          <div class="footer">
            <p>Sandton Preparatory School<br>
            123 Education Lane, Sandton, Johannesburg<br>
            admissions@sandtonprep.co.za | 011 234 5678</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
