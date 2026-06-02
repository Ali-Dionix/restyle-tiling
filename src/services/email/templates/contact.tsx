import * as React from "react";
import { Heading, Text, Hr } from "@react-email/components";
import EmailLayout from "./layout";
import { EMAIL_STYLES } from "../constants";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  projectType,
  message,
}) => {
  return (
    <EmailLayout previewText={`New Tiling Enquiry from ${name}`}>
      <Heading style={EMAIL_STYLES.heading}>New Website Enquiry</Heading>
      <Text style={EMAIL_STYLES.paragraph}>
        Hello, you have received a new tiling enquiry from the website contact form.
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Text style={EMAIL_STYLES.label}>Full Name</Text>
      <Text style={EMAIL_STYLES.value}>{name}</Text>

      <Text style={EMAIL_STYLES.label}>Phone Number</Text>
      <Text style={EMAIL_STYLES.value}>{phone}</Text>

      <Text style={EMAIL_STYLES.label}>Email Address</Text>
      <Text style={EMAIL_STYLES.value}>{email}</Text>

      <Text style={EMAIL_STYLES.label}>Project Type</Text>
      <Text style={EMAIL_STYLES.value}>{projectType}</Text>

      <Text style={EMAIL_STYLES.label}>Message / Details</Text>
      <Text style={{ ...EMAIL_STYLES.value, whiteSpace: "pre-wrap" as const }}>
        {message || "No project details provided."}
      </Text>
    </EmailLayout>
  );
};

export default ContactEmail;
