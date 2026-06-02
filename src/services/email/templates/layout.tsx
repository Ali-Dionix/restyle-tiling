import * as React from "react";
import {
  Html,
  Body,
  Container,
  Head,
  Preview,
  Section,
  Img,
  Link,
  Hr,
  Text,
} from "@react-email/components";
import { EMAIL_STYLES, BRAND_COLORS } from "../constants";

interface EmailLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.restyletiling.com";

export const EmailLayout: React.FC<EmailLayoutProps> = ({
  previewText,
  children,
}) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={EMAIL_STYLES.main}>
        <Container style={EMAIL_STYLES.container}>
          {/* Logo Section */}
          <Section style={{ textAlign: "center", marginBottom: "20px" }}>
            <Img
              src={`${baseUrl}/restyle-logo.png`}
              alt="Restyle Wall & Floor Tiling"
              width="150"
              height="40"
              style={EMAIL_STYLES.logo}
            />
          </Section>

          {/* Core Content Card */}
          <Section style={EMAIL_STYLES.card}>
            {children}
            
            <Hr style={EMAIL_STYLES.hr} />
            
            <Text style={{ ...EMAIL_STYLES.paragraph, fontSize: "13px", color: BRAND_COLORS.greyDark, margin: 0 }}>
              Need to contact us immediately? Call us at{" "}
              <Link href="tel:+447889890122" style={{ color: BRAND_COLORS.blue, fontWeight: "600" }}>
                +44 7889 890122
              </Link>
              .
            </Text>
          </Section>

          {/* Footer Branding */}
          <Section style={EMAIL_STYLES.footer}>
            <Text style={{ margin: "0 0 8px", fontSize: "11px" }}>
              &copy; {new Date().getFullYear()} Restyle Wall & Floor Tiling. All rights reserved.
            </Text>
            <Text style={{ margin: 0, fontSize: "11px" }}>
              This email was sent from{" "}
              <Link href={baseUrl} style={{ color: BRAND_COLORS.blue, textDecoration: "underline" }}>
                www.restyletiling.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailLayout;
