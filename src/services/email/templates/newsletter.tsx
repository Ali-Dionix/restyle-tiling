import * as React from "react";
import { Heading, Text, Hr, Link } from "@react-email/components";
import EmailLayout from "./layout";
import { EMAIL_STYLES, BRAND_COLORS } from "../constants";

interface NewsletterEmailProps {
  email: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.restyletiling.com";

export const NewsletterEmail: React.FC<NewsletterEmailProps> = ({
  email,
}) => {
  return (
    <EmailLayout previewText="Newsletter Subscription Confirmed - Restyle Tiling">
      <Heading style={EMAIL_STYLES.heading}>Subscription Confirmed!</Heading>
      <Text style={EMAIL_STYLES.paragraph}>
        Thank you for subscribing to the Restyle Wall & Floor Tiling newsletter.
      </Text>
      <Text style={EMAIL_STYLES.paragraph}>
        We are thrilled to have you join our community. From now on, you'll receive occasional updates including:
      </Text>
      
      <Text style={EMAIL_STYLES.paragraph}>
        - 💡 Professional tiling maintenance tips (how to clean grout, prevent mould, seal stone tiles).
        <br />
        - 📸 Showcase of our latest projects (bathroom remodels, bespoke kitchen splashbacks, large format floors).
        <br />
        - 🛠️ Material recommendations and tiling guides.
      </Text>

      <Hr style={EMAIL_STYLES.hr} />

      <Text style={EMAIL_STYLES.paragraph}>
        Your email address (<strong>{email}</strong>) is safely registered. You can unsubscribe at any time using the link at the bottom of our emails.
      </Text>

      <Text style={EMAIL_STYLES.paragraph}>
        Visit our website at{" "}
        <Link href={baseUrl} style={{ color: BRAND_COLORS.blue, fontWeight: "600" }}>
          www.restyletiling.com
        </Link>{" "}
        to browse our service catalog or view our gallery.
      </Text>

      <Text style={{ ...EMAIL_STYLES.paragraph, fontStyle: "italic", marginTop: "20px" }}>
        Best regards,
        <br />
        <strong>Restyle Wall & Floor Tiling Team</strong>
      </Text>
    </EmailLayout>
  );
};

export default NewsletterEmail;
