import type { Metadata } from "next";
import { Lora, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nail Salon Glendale AZ | TurboThao Nails & Spa",
  description:
    "Premier nail salon in Glendale, AZ offering nail art, acrylics, waxing, eyelash extensions & spa treatments. Book your appointment today!",
  keywords: [
    "nail salon Glendale AZ",
    "waxing Glendale",
    "eyelash extensions Glendale",
    "manicure pedicure Glendale AZ",
    "TurboThao Nails",
    "nail art Glendale",
    "spa Glendale AZ",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "TurboThao Nails & Spa | Glendale, AZ",
    description:
      "Premier nail salon in Glendale, AZ offering nail art, acrylics, waxing, eyelash extensions & spa treatments.",
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
  description: "Expert nail care, waxing, and eyelash extensions in Glendale, AZ.",
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
      <body className={`${lora.variable} ${mrsSaintDelafield.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
