import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

// Initialize Resend. If no API key is provided, we will operate in "logging-only fallback" mode
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

if (!resend) {
  console.warn(
    "⚠️ RESEND_API_KEY is not defined. Email service will run in fallback logging mode."
  );
}

interface SendEmailParams {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
  replyTo?: string;
  from?: string;
}

/**
 * Retries an asynchronous function with exponential backoff.
 */
async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    console.error(`Email sending failed. Retrying in ${delay}ms... (${retries} attempts left). Error:`, error);
    await new Promise((resolve) => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}

/**
 * Core email sender with automatic retry logic, environment checks, and strict logging.
 */
export async function sendTransactionalEmail({
  to,
  subject,
  react,
  replyTo,
  from,
}: SendEmailParams): Promise<{ success: boolean; id?: string; error?: string }> {
  const defaultFrom = process.env.NEXT_PUBLIC_SENDER_EMAIL || "no-reply@restyletiling.com";
  const finalFrom = from || defaultFrom;
  const recipient = Array.isArray(to) ? to.join(", ") : to;

  // 1. Logging Fallback Mode (Local Dev / CI / Empty API Key)
  if (!resend) {
    console.log("==========================================");
    console.log(`✉️ MOCK EMAIL DISPATCHED`);
    console.log(`FROM:     ${finalFrom}`);
    console.log(`TO:       ${recipient}`);
    console.log(`REPLY-TO: ${replyTo || "N/A"}`);
    console.log(`SUBJECT:  ${subject}`);
    console.log(`CONTENT:  React component rendered to log.`);
    console.log("==========================================");
    
    return {
      success: true,
      id: `mock-email-id-${Date.now()}`,
    };
  }

  // 2. Production Mail Dispatch with Retries
  try {
    const response = await retry(async () => {
      const { data, error } = await resend.emails.send({
        from: finalFrom,
        to,
        subject,
        react,
        replyTo,
      });

      if (error) {
        throw new Error(error.message || "Failed to send email via Resend");
      }

      return data;
    });

    console.log(`✅ Email sent successfully. Message ID: ${response?.id}`);
    
    return {
      success: true,
      id: response?.id,
    };
  } catch (error: any) {
    console.error(`❌ Permanent failure sending email to ${recipient}:`, error);
    return {
      success: false,
      error: error.message || "An unknown error occurred during email transmission.",
    };
  }
}
