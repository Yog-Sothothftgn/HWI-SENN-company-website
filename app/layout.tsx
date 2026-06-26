import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HWI SENN | Omega-3 Fatty Acids Supplier — Fish Oil, Powder & Capsules",
  description:
    "HWI SENN is a US-based Omega-3 fatty acids supplier with a Los Angeles warehouse. We offer bulk fish oil (EPA/DHA), microencapsulated Omega-3 powder, and softgel capsules for nutritional and pharmaceutical brands. US domestic shipping available.",
  keywords: [
    "Omega-3 supplier",
    "fish oil bulk",
    "EPA DHA",
    "omega-3 powder",
    "omega-3 capsules",
    "fish oil supplier USA",
    "bulk omega-3",
    "microencapsulated omega-3",
    "softgel capsules omega-3",
    "omega-3 wholesale",
    "DHA supplement supplier",
    "EPA supplement supplier",
    "Los Angeles omega-3",
    "US omega-3 distributor",
    "HWI SENN",
    "omega-3 fatty acids",
    "nutritional supplement ingredients",
    "pharmaceutical grade fish oil",
  ],
  authors: [{ name: "HWI SENN" }],
  openGraph: {
    title: "HWI SENN | Omega-3 Fatty Acids Supplier",
    description:
      "Bulk fish oil, Omega-3 powder and capsules for nutritional and pharmaceutical brands. LA warehouse, US domestic shipping.",
    url: "https://www.hwisenn.com",
    siteName: "HWI SENN",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.hwisenn.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
