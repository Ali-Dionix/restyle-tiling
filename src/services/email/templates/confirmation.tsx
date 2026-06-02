import * as React from "react";
import { Heading, Text, Hr, Link } from "@react-email/components";
import EmailLayout from "./layout";
import { EMAIL_STYLES, BRAND_COLORS } from "../constants";

interface ConfirmationEmailProps {
  name: string;
  projectType: string;
}

export const ConfirmationEmail: React.FC<ConfirmationEmailProps> = ({
  name,
  projectType,
}) => {
  return (
    <EmailLayout previewText="Enquiry Received - Restyle Wall & Floor Tiling">
      <Heading style={EMAIL_STYLES.heading}>We've Received Your Enquiry</Heading>
      <Text style={EMAIL_STYLES.paragraph}>Hi {name},</Text>
      <Text style={EMAIL_STYLES.paragraph}>
        Thank you for getting in touch with Restyle Wall & Floor Tiling regarding your{" "}
        <strong>{projectType}</strong> project.
      </Text>
      <Text style={EMAIL_STYLES.paragraph}>
        We have received your details and our team is already reviewing your request. One of our professional tilers will reach out to you within 24 hours to discuss your requirements, provide a free quotation, or schedule a site visit if necessary.
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Heading style={{ ...EMAIL_STYLES.heading, fontSize: "18px" }}>What's Next?</Heading>
      <Text style={EMAIL_STYLES.paragraph}>
        1. <strong>Inquiry Review</strong>: We review your project requirements and size constraints.
        <br />
        2. <strong>Consultation</strong>: We discuss tile selections, substrates, and waterproofing needs.
        <br />
        3. <strong>Free Quote</strong>: We provide a clear, competitive, and transparent price quotation.
      </Text>

      <Text style={{ ...EMAIL_STYLES.paragraph, marginTop: "24px" }}>
        If you have any urgent questions or wish to amend your inquiry, feel free to reply directly to this email or call us at{" "}
        <Link href="tel:+447889890122" style={{ color: BRAND_COLORS.blue, fontWeight: "600" }}>
          +44 7889 890122
        </Link>
        .
      </Text>

      <Text style={{ ...EMAIL_STYLES.paragraph, fontStyle: "italic", marginTop: "20px" }}>
        Best regards,
        <br />
        <strong>Restyle Wall & Floor Tiling Team</strong>
      </Text>
    </EmailLayout>
  );
};

export default ConfirmationEmail;
