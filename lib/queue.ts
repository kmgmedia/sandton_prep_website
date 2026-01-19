import { sendEmailWithRetry } from "./email";

type EmailJobType = "notification" | "autoresponder";

interface EmailJobData {
  type: EmailJobType;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  submissionId: string;
}

/**
 * Queue an email for sending with retry logic
 * Note: In serverless environments, this sends synchronously.
 * For higher scale, integrate with a dedicated queue service like:
 * - AWS SQS + Lambda
 * - Google Cloud Tasks
 * - RabbitMQ (managed)
 * - Kafka (managed)
 */
export async function queueEmail(
  type: EmailJobType,
  { to, subject, html, replyTo, submissionId }: Omit<EmailJobData, "type">
): Promise<{ success: boolean; jobId?: string; error?: unknown }> {
  try {
    const result = await sendEmailWithRetry(
      { to, subject, html, replyTo },
      3 // Max 3 attempts with exponential backoff
    );

    if (!result.success) {
      console.error(`❌ Email failed: ${type} to ${to}`);
      return { success: false, error: "Email send failed" };
    }

    console.log(`✅ Email sent: ${type} to ${to}`);
    return {
      success: true,
      jobId: `${type}-${submissionId}-${Date.now()}`,
    };
  } catch (error) {
    console.error(`Failed to send ${type} email:`, error);
    return { success: false, error };
  }
}
