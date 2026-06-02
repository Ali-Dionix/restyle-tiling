import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  email: z
    .string()
    .min(5, "Email is too short")
    .max(254, "Email must not exceed 254 characters")
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(8, "Phone number must be at least 8 characters")
    .max(20, "Phone number must not exceed 20 characters")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number")
    .trim(),
  projectType: z
    .string()
    .min(1, "Please select a project type")
    .trim(),
  message: z
    .string()
    .min(5, "Please describe your project in at least 5 characters")
    .max(2000, "Message cannot exceed 2000 characters")
    .trim(),
});

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(5, "Email is too short")
    .max(254, "Email must not exceed 254 characters")
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
});
