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
    "bulk fish oil supplier USA",
    "EPA DHA ethyl ester bulk",
    "fish oil EE 60 70 84 percent",
    "EPA 18 DHA 12 bulk",
    "EPA 33 DHA 22 supplier",
    "EPA 50 DHA 20 bulk",
    "EPA 70 DHA 8 fish oil",
    "EPA 97 ethyl ester",
    "TG rTG fish oil supplier",
    "re-esterified triglyceride omega-3",
    "microencapsulated omega-3 powder supplier",
    "fish oil powder DHA 10 15 20 percent",
    "algae oil DHA powder CWS",
    "omega-3 softgel capsules bulk",
    "omega-3 softgel manufacturer",
    "GOED certified fish oil",
    "USP EP fish oil monograph",
    "FOS qualified omega-3",
    "omega-3 wholesale distributor",
    "omega-3 supplier Los Angeles",
    "omega-3 supplier California",
    "US domestic omega-3 shipping",
    "pharmaceutical grade fish oil",
    "nutritional supplement ingredients supplier",
    "HWI SENN",
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
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "HWI SENN logo" }],
  },
  twitter: {
    card: "summary",
    title: "HWI SENN | Omega-3 Fatty Acids Supplier",
    description:
      "Bulk fish oil, Omega-3 powder and capsules for nutritional and pharmaceutical brands. LA warehouse, US domestic shipping.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://www.hwisenn.com"),
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.hwisenn.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hwisenn.com/#organization",
      "name": "HWI SENN",
      "url": "https://www.hwisenn.com",
      "description": "US-based Omega-3 fatty acids supplier. Bulk fish oil (EPA/DHA ethyl ester, TG, rTG), microencapsulated Omega-3 powder, and softgel capsules for nutritional and pharmaceutical brands.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Santa Ana",
        "addressLocality": "Santa Ana",
        "addressRegion": "CA",
        "postalCode": "92705",
        "addressCountry": "US"
      },
      "areaServed": "US",
      "sameAs": ["https://www.linkedin.com/in/shelley-jiang-1a2b2337/"]
    },
    {
      "@type": "Product",
      "name": "Bulk Fish Oil — EPA/DHA Ethyl Ester Concentrate",
      "description": "Ultra-pure Omega-3 fish oil in ethyl ester (EE) form, 60–70% and 84% concentrate. Available specs: EPA 18/DHA 12, EPA 33/DHA 22, EPA 40/DHA 30, EPA 50/DHA 20, EPA 50/DHA 25, EPA 70/DHA 8, EPA 97% EE. Exceeds USP, EP and GOED monograph standards. FOS-qualified, N₂-protected iron drum, 48/180/190 kg net.",
      "brand": { "@type": "Brand", "name": "HWI SENN" },
      "offers": { "@type": "Offer", "seller": { "@id": "https://www.hwisenn.com/#organization" }, "areaServed": "US", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Product",
      "name": "Omega-3 Fish Oil TG / rTG",
      "description": "Fish oil in triglyceride (TG) and re-esterified triglyceride (rTG) form. Available specs: EPA 18/DHA 12 TG, EPA 33/DHA 22 rTG, EPA 40/DHA 30 rTG, EPA 50/DHA 20 rTG. Bulk supply, custom EPA/DHA ratios on request.",
      "brand": { "@type": "Brand", "name": "HWI SENN" },
      "offers": { "@type": "Offer", "seller": { "@id": "https://www.hwisenn.com/#organization" }, "areaServed": "US", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Product",
      "name": "Microencapsulated Omega-3 Powder",
      "description": "Microencapsulated fish oil and algae oil powder for nutritional supplements. Specs: Fish Oil DHA 10%, 15%, 20%; Fish Oil EPA 8%/DHA 6%, EPA 10%/DHA 8%; Algae Oil DHA 7% CWS, 10% CWS. Standard packing 25 kg/paper bag. Custom assay available.",
      "brand": { "@type": "Brand", "name": "HWI SENN" },
      "offers": { "@type": "Offer", "seller": { "@id": "https://www.hwisenn.com/#organization" }, "areaServed": "US", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Product",
      "name": "Omega-3 Softgel Capsules",
      "description": "Deep-sea derived Omega-3 EPA/DHA softgel capsules. EE, TG and rTG forms. Fish oil and algae oil-based formulations. Custom concentrations, sizes and packaging available for nutritional and pharmaceutical brands.",
      "brand": { "@type": "Brand", "name": "HWI SENN" },
      "offers": { "@type": "Offer", "seller": { "@id": "https://www.hwisenn.com/#organization" }, "areaServed": "US", "availability": "https://schema.org/InStock" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
