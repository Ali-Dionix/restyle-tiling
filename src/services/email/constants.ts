/**
 * Email design system constants matching the Restyle Tiling brand
 */
export const BRAND_COLORS = {
  navy: "#092B4F",
  navyLight: "#0e3a6b",
  blue: "#2F86B7",
  blueLight: "#3a9ad0",
  orange: "#F47B20",
  orangeLight: "#f59543",
  light: "#F7FAFC",
  lightAlt: "#EDF2F7",
  dark: "#1a202c",
  grey: "#A3A3A3",
  greyDark: "#6b7280",
  white: "#FFFFFF",
};

export const EMAIL_STYLES = {
  main: {
    backgroundColor: BRAND_COLORS.light,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
  },
  card: {
    backgroundColor: BRAND_COLORS.white,
    border: `1px solid ${BRAND_COLORS.lightAlt}`,
    borderRadius: "8px",
    padding: "32px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
  },
  logo: {
    margin: "0 auto 24px",
    display: "block",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: BRAND_COLORS.navy,
    margin: "0 0 16px",
    lineHeight: "1.3",
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: BRAND_COLORS.dark,
    margin: "0 0 16px",
  },
  label: {
    fontSize: "12px",
    fontWeight: "700",
    color: BRAND_COLORS.navy,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    margin: "0 0 4px",
    display: "block",
  },
  value: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: BRAND_COLORS.dark,
    backgroundColor: BRAND_COLORS.light,
    padding: "10px 14px",
    borderRadius: "6px",
    margin: "0 0 16px",
  },
  button: {
    backgroundColor: BRAND_COLORS.orange,
    borderRadius: "6px",
    color: BRAND_COLORS.white,
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px 24px",
    margin: "24px auto 0",
  },
  footer: {
    fontSize: "12px",
    lineHeight: "1.5",
    color: BRAND_COLORS.greyDark,
    textAlign: "center" as const,
    marginTop: "24px",
  },
  hr: {
    borderColor: BRAND_COLORS.lightAlt,
    margin: "24px 0",
  },
};
