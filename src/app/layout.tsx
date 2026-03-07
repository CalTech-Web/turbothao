import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TurboThao Nails and Spa | Nail Care, Waxing & Eyelash Extensions in Glendale AZ",
  description:
    "Experience where beauty meets precision and relaxation at TurboThao Nails and Spa in Glendale, AZ. Expert nail artistry, waxing, eyelash extensions, manicures, pedicures, and spa treatments.",
  keywords: [
    "nail salon Glendale AZ",
    "waxing Glendale",
    "eyelash extensions Glendale",
    "manicure pedicure Glendale AZ",
    "TurboThao Nails",
    "nail art Glendale",
    "spa Glendale AZ",
  ],
  openGraph: {
    title: "TurboThao Nails and Spa",
    description:
      "Nail care, waxing, and eyelash extensions in Glendale AZ. Where beauty meets precision and relaxation.",
    url: "https://turbothao.vercel.app",
    siteName: "TurboThao Nails and Spa",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "TurboThao Nails and Spa",
  description:
    "Expert nail care, waxing, and eyelash extensions in Glendale, AZ.",
  url: "https://turbothao.vercel.app",
  telephone: "(602) 441-3887",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5930 W Greenway Ave, Suite 9",
    addressLocality: "Glendale",
    addressRegion: "AZ",
    postalCode: "85306",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
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
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
