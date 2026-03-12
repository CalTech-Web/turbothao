import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Nail Services | TurboThao Nails and Spa",
  description: "Professional nail care from basic to advanced enhancements in Glendale, AZ.",
  alternates: {
    canonical: "https://turbothao.vercel.app/nail-services",
  },
  openGraph: {
    title: "Nail Services | TurboThao Nails and Spa",
    description: "Professional nail care from basic to advanced enhancements in Glendale, AZ.",
    url: "https://turbothao.vercel.app/nail-services",
    images: [{ url: "https://turbothao.vercel.app/images/heroes/nail-services.jpg", alt: "Nail Services at TurboThao Nails and Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Services | TurboThao Nails and Spa",
    description: "Professional nail care from basic to advanced enhancements in Glendale, AZ.",
    images: ["https://turbothao.vercel.app/images/heroes/nail-services.jpg"],
  },
};

export default function NailServicesPage() {
  return (
    <ServicePageLayout
      title="Nail Services"
      subtitle="Professional nail care from basic to advanced enhancements"
      heroImage="/images/heroes/nail-services.jpg"
      description="At TurboThao Nails and Spa, our nail services go beyond a basic manicure. Whether you're looking for a fresh set of acrylics, gel nails, or custom nail art, our expert technicians use only premium products to ensure long-lasting, beautiful results. We specialize in everything from classic designs to intricate custom work that reflects your unique style."
      services={[
        "Nail Art",
        "Acrylic Full Set",
        "Acrylic Fill-Ins",
        "Nail Repairs",
        "Gel Nail Removal",
        "Dip Powder Nails",
        "Gel Polish Application",
        "Custom Nail Design",
      ]}
      benefits={[
        "Professional nail health maintenance and care",
        "High-quality products for long-lasting results",
        "Customized treatments tailored to your style",
        "Expert technicians with years of experience",
        "Polished, salon-quality appearance every time",
      ]}
    />
  );
}
