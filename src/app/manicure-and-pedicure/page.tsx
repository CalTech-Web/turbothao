import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Manicure & Pedicure | TurboThao Nails and Spa",
  description: "Professional manicure and pedicure services emphasizing nail health and skin nourishment in Glendale, AZ.",
  alternates: {
    canonical: "https://turbothao.vercel.app/manicure-and-pedicure",
  },
  openGraph: {
    title: "Manicure & Pedicure | TurboThao Nails and Spa",
    description: "Professional manicure and pedicure services in Glendale, AZ. Nail health, skin nourishment & relaxation.",
    url: "https://turbothao.vercel.app/manicure-and-pedicure",
    images: [{ url: "https://turbothao.vercel.app/images/heroes/manicure-pedicure.jpg", alt: "Manicure & Pedicure at TurboThao Nails and Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manicure & Pedicure | TurboThao Nails and Spa",
    description: "Professional manicure and pedicure services in Glendale, AZ. Nail health, skin nourishment & relaxation.",
    images: ["https://turbothao.vercel.app/images/heroes/manicure-pedicure.jpg"],
  },
};

export default function ManicurePedicurePage() {
  return (
    <ServicePageLayout
      title="Manicure & Pedicure"
      subtitle="Expert nail care for beautiful hands and feet"
      heroImage="/images/heroes/manicure-pedicure.jpg"
      description="Our manicure and pedicure services are designed to pamper your hands and feet while promoting nail health and skin nourishment. From classic treatments to deluxe spa experiences, each service includes careful attention to cuticle care, nail shaping, and moisturizing to leave your nails looking and feeling their best."
      services={[
        "Classic Manicure",
        "Classic Pedicure",
        "Deluxe Manicure",
        "Deluxe Pedicure",
        "Callus Removal",
        "Polish Changes",
        "French Manicure",
        "Paraffin Treatment",
      ]}
      benefits={[
        "Improved circulation and blood flow",
        "Prevention of nail damage and infections",
        "Deep moisturizing for softer, healthier skin",
        "Relaxing self-care experience",
        "Professional nail shaping and cuticle care",
      ]}
    />
  );
}
