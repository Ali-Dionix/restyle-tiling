import * as React from "react";
import { Heading, Text, Hr } from "@react-email/components";
import EmailLayout from "./layout";
import { EMAIL_STYLES, BRAND_COLORS } from "../constants";

interface AlertEmailProps {
  alertTitle: string;
  alertDetails: string;
  severity: "low" | "medium" | "high" | "critical";
}

const severityColors = {
  low: BRAND_COLORS.blue,
  medium: BRAND_COLORS.orange,
  high: "#E53E3E", // red
  critical: "#C53030", // dark red
};

export const AlertEmail: React.FC<AlertEmailProps> = ({
  alertTitle,
  alertDetails,
  severity,
}) => {
  return (
    <EmailLayout previewText={`[ALERT - ${severity.toUpperCase()}] ${alertTitle}`}>
      <Heading style={{ ...EMAIL_STYLES.heading, color: severityColors[severity] }}>
        System Alert: {alertTitle}
      </Heading>
      
      <Text style={EMAIL_STYLES.paragraph}>
        This is an automated system notification from the Restyle Tiling production platform.
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Text style={EMAIL_STYLES.label}>Severity Level</Text>
      <Text style={{ 
        ...EMAIL_STYLES.value, 
        fontWeight: "bold",
        color: BRAND_COLORS.white,
        backgroundColor: severityColors[severity],
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "4px",
      }}>
        {severity.toUpperCase()}
      </Text>

      <Text style={{ ...EMAIL_STYLES.label, marginTop: "16px" }}>Alert Details</Text>
      <Text style={{ ...EMAIL_STYLES.value, whiteSpace: "pre-wrap" as const, fontFamily: "monospace" }}>
        {alertDetails}
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Text style={{ ...EMAIL_STYLES.paragraph, fontSize: "12px", color: BRAND_COLORS.greyDark }}>
        Timestamp: {new Date().toISOString()} | Environment: {process.env.NODE_ENV}
      </Text>
    </EmailLayout>
  );
};

export default AlertEmail;
