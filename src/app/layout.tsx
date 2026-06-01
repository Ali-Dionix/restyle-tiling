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
  title: "Restyle Wall & Floor Tiling | Professional Tiling Services",
  description:
    "Restyle Wall & Floor Tiling provides high-quality wall and floor tiling services for bathrooms, kitchens, floors, and interior spaces. Clean workmanship, precise finishing, and reliable service.",
  keywords:
    "wall tiling, floor tiling, bathroom tiling, kitchen tiling, tiling services, UK tiling contractor, tile installation, grout finishing",
  openGraph: {
    title: "Restyle Wall & Floor Tiling | Professional Tiling Services",
    description:
      "High-quality tiling solutions for bathrooms, kitchens, floors, and interior spaces. Clean workmanship, precise finishing, and reliable service from start to finish.",
    url: "https://restyletiling.co.uk",
    siteName: "Restyle Wall & Floor Tiling",
    type: "website",
    locale: "en_GB",
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
