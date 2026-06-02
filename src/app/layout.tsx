import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.restyletiling.com"),
  title: {
    default: "Restyle Wall & Floor Tiling | Professional Tiling Services",
    template: "%s | Restyle Wall & Floor Tiling",
  },
  description:
    "Restyle Wall & Floor Tiling provides high-quality wall and floor tiling services for bathrooms, kitchens, floors, and interior spaces. Clean workmanship, precise finishing, and reliable service.",
  keywords:
    "wall tiling, floor tiling, bathroom tiling, kitchen tiling, tiling services, UK tiling contractor, tile installation, grout finishing, restyle tiling",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Restyle Wall & Floor Tiling | Professional Tiling Services",
    description:
      "High-quality tiling solutions for bathrooms, kitchens, floors, and interior spaces. Clean workmanship, precise finishing, and reliable service from start to finish.",
    url: "https://www.restyletiling.com",
    siteName: "Restyle Wall & Floor Tiling",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restyle Wall & Floor Tiling | Professional Tiling Services",
    description:
      "High-quality tiling solutions for bathrooms, kitchens, floors, and interior spaces. Clean workmanship and precise finishing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
