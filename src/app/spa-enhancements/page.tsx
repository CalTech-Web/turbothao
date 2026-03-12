import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Spa Enhancements | TurboThao Nails and Spa",
  description: "Elevate your relaxation with luxurious spa enhancements in Glendale, AZ.",
  alternates: {
    canonical: "https://turbothao.vercel.app/spa-enhancements",
  },
  openGraph: {
    title: "Spa Enhancements | TurboThao Nails and Spa",
    description: "Elevate your relaxation with luxurious spa enhancements in Glendale, AZ.",
    url: "https://turbothao.vercel.app/spa-enhancements",
    images: [{ url: "https://turbothao.vercel.app/images/heroes/spa-enhancements.jpg", alt: "Spa Enhancements at TurboThao Nails and Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Enhancements | TurboThao Nails and Spa",
    description: "Elevate your relaxation with luxurious spa enhancements in Glendale, AZ.",
    images: ["https://turbothao.vercel.app/images/heroes/spa-enhancements.jpg"],
  },
};

export default function SpaEnhancementsPage() {
  return (
    <ServicePageLayout
      title="Spa Enhancements"
      subtitle="Elevate your relaxation with luxurious add-ons"
      heroImage="/images/heroes/spa-enhancements.jpg"
      description="Our spa enhancements are designed to elevate your salon experience to a whole new level of relaxation. From soothing foot massages to revitalizing treatments, these luxurious add-ons complement any of our core services and help you unwind completely. Treat yourself to the ultimate pampering experience."
      services={[
        "Foot Massage",
        "Hand Massage",
        "Hot Stone Add-On",
        "Aromatherapy Add-On",
        "Collagen Hand Treatment",
        "Sugar Scrub",
      ]}
      benefits={[
        "Deep relaxation and stress reduction",
        "Improved skin hydration and nourishment",
        "Better circulation and tension relief",
        "Enhanced salon experience with premium add-ons",
        "Rejuvenated, refreshed feeling after every visit",
      ]}
    />
  );
}
