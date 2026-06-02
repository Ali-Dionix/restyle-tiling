export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface NewsletterPayload {
  email: string;
}

export interface QuoteRequestPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  areaSize?: string;
  tileType?: string;
  timeline?: string;
  message: string;
}

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
