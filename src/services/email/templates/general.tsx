import * as React from "react";
import { Heading, Text, Hr } from "@react-email/components";
import EmailLayout from "./layout";
import { EMAIL_STYLES } from "../constants";

interface GeneralEmailProps {
  subject: string;
  message: string;
  name?: string;
}

export const GeneralEmail: React.FC<GeneralEmailProps> = ({
  subject,
  message,
  name,
}) => {
  return (
    <EmailLayout previewText={subject}>
      <Heading style={EMAIL_STYLES.heading}>{subject}</Heading>
      
      {name && <Text style={EMAIL_STYLES.paragraph}>Dear {name},</Text>}
      
      <Text style={{ ...EMAIL_STYLES.paragraph, whiteSpace: "pre-wrap" as const }}>
        {message}
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Text style={{ ...EMAIL_STYLES.paragraph, fontStyle: "italic", fontSize: "14px" }}>
        If you have any questions, feel free to reply directly to this message.
        <br />
        Best regards,
        <br />
        <strong>Restyle Wall & Floor Tiling</strong>
      </Text>
    </EmailLayout>
  );
};

export default GeneralEmail;
