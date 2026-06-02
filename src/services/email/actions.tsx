"use server";

import * as React from "react";
import { headers } from "next/headers";
import { ContactFormSchema, NewsletterSchema } from "./validation";
import { sendTransactionalEmail } from "./resend";
import ContactEmail from "./templates/contact";
import ConfirmationEmail from "./templates/confirmation";
import NewsletterEmail from "./templates/newsletter";
import AlertEmail from "./templates/alert";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "info@restyletiling.com";
const senderEmail = process.env.NEXT_PUBLIC_SENDER_EMAIL || "no-reply@restyletiling.com";

export interface ContactFormState {
  success: boolean;
  errors?: Record<string, string>;
  error?: string;
}

export interface NewsletterState {
  success: boolean;
  errors?: Record<string, string>;
  error?: string;
}

/**
 * Server Action to handle Contact Form Submission
 */
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    };

    // 1. Zod Validation
    const validationResult = ContactFormSchema.safeParse(rawData);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        errors: Object.fromEntries(
          Object.entries(fieldErrors).map(([key, val]) => [key, val ? val[0] : ""])
        ),
      };
    }

    const data = validationResult.data;

    // 2. Audit logging
    const headerList = await headers();
    const userAgent = headerList.get("user-agent") || "unknown";
    const clientIp = headerList.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    console.log(`[Form Submission Log] IP: ${clientIp} | User-Agent: ${userAgent} | Submission: ${data.email}`);

    // 3. Dispatch Admin Alert Email
    const adminEmailResult = await sendTransactionalEmail({
      to: adminEmail,
      replyTo: data.email,
      from: senderEmail,
      subject: `New Tiling Inquiry: ${data.name} - ${data.projectType}`,
      react: (
        <ContactEmail
          name={data.name}
          email={data.email}
          phone={data.phone}
          projectType={data.projectType}
          message={data.message}
        />
      ),
    });

    // 4. Dispatch Client Confirmation Receipt
    const clientEmailResult = await sendTransactionalEmail({
      to: data.email,
      replyTo: adminEmail,
      from: senderEmail,
      subject: "Enquiry Received - Restyle Wall & Floor Tiling",
      react: (
        <ConfirmationEmail
          name={data.name}
          projectType={data.projectType}
        />
      ),
    });

    if (!adminEmailResult.success || !clientEmailResult.success) {
      // Trigger silent system alert
      await sendTransactionalEmail({
        to: adminEmail,
        from: senderEmail,
        subject: "[SYSTEM ALERT] Email Dispatch Failed",
        react: (
          <AlertEmail
            alertTitle="Transactional Email Failure"
            alertDetails={`Admin email sent: ${adminEmailResult.success ? "YES" : "NO"} (${adminEmailResult.error || ""})\nClient confirmation sent: ${clientEmailResult.success ? "YES" : "NO"} (${clientEmailResult.error || ""})`}
            severity="high"
          />
        ),
      });

      return {
        success: false,
        error: "We processed your enquiry, but had trouble sending confirmation emails. We will contact you shortly.",
        errors: {},
      };
    }

    return {
      success: true,
      errors: {},
      error: "",
    };
  } catch (error: any) {
    console.error("Critical error in submitContactForm action:", error);
    return {
      success: false,
      error: "An unexpected server error occurred. Please try again later.",
      errors: {},
    };
  }
}

/**
 * Server Action to handle Newsletter Subscription Form
 */
export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  try {
    const rawEmail = formData.get("email");

    // 1. Zod Validation
    const validationResult = NewsletterSchema.safeParse({ email: rawEmail });
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        errors: {
          email: fieldErrors.email ? fieldErrors.email[0] : "Invalid email address.",
        },
      };
    }

    const { email } = validationResult.data;

    // 2. Dispatch Confirmation Email
    const result = await sendTransactionalEmail({
      to: email,
      replyTo: adminEmail,
      from: senderEmail,
      subject: "Newsletter Subscription Confirmed - Restyle Tiling",
      react: <NewsletterEmail email={email} />,
    });

    if (!result.success) {
      return {
        success: false,
        error: "Could not process your newsletter subscription. Please try again later.",
        errors: {},
      };
    }

    return {
      success: true,
      errors: {},
      error: "",
    };
  } catch (error: any) {
    console.error("Critical error in subscribeToNewsletter action:", error);
    return {
      success: false,
      error: "An unexpected server error occurred. Please try again later.",
      errors: {},
    };
  }
}
