import * as React from "react";
import { Heading, Text, Hr } from "@react-email/components";
import EmailLayout from "./layout";
import { EMAIL_STYLES } from "../constants";

interface QuoteEmailProps {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  areaSize?: string;
  tileType?: string;
  timeline?: string;
  message: string;
}

export const QuoteEmail: React.FC<QuoteEmailProps> = ({
  name,
  email,
  phone,
  projectType,
  areaSize,
  tileType,
  timeline,
  message,
}) => {
  return (
    <EmailLayout previewText={`New Quote Request from ${name} - ${projectType}`}>
      <Heading style={EMAIL_STYLES.heading}>New Tiling Quote Request</Heading>
      <Text style={EMAIL_STYLES.paragraph}>
        Hello, you have received a detailed quote request from the website.
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Text style={EMAIL_STYLES.label}>Contact Information</Text>
      <Text style={EMAIL_STYLES.value}>
        <strong>Name:</strong> {name}
        <br />
        <strong>Phone:</strong> {phone}
        <br />
        <strong>Email:</strong> {email}
      </Text>

      <Text style={EMAIL_STYLES.label}>Project Scope</Text>
      <Text style={EMAIL_STYLES.value}>
        <strong>Project Type:</strong> {projectType}
        {areaSize && (
          <>
            <br />
            <strong>Estimated Area Size:</strong> {areaSize}
          </>
        )}
        {tileType && (
          <>
            <br />
            <strong>Preferred Tile Type:</strong> {tileType}
          </>
        )}
        {timeline && (
          <>
            <br />
            <strong>Preferred Timeline:</strong> {timeline}
          </>
        )}
      </Text>

      <Text style={EMAIL_STYLES.label}>Details & Requirements</Text>
      <Text style={{ ...EMAIL_STYLES.value, whiteSpace: "pre-wrap" as const }}>
        {message || "No project details provided."}
      </Text>
    </EmailLayout>
  );
};

export default QuoteEmail;
