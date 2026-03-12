import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Waxing Services | TurboThao Nails and Spa",
  description: "Smooth, flawless skin with professional waxing services for men and women in Glendale, AZ.",
  alternates: {
    canonical: "https://turbothao.vercel.app/waxing-services",
  },
};

export default function WaxingServicesPage() {
  return (
    <ServicePageLayout
      title="Waxing Services"
      subtitle="Smooth, flawless skin with professional care"
      heroImage="/images/heroes/waxing.jpg"
      description="Our professional waxing services provide smooth, long-lasting results for both men and women. We use premium waxing products that minimize discomfort and prevent irritation, ensuring a comfortable experience every time. From facial waxing to full body treatments, our experienced technicians deliver flawless results."
      services={[
        "Full Body Waxing",
        "Brazilian Wax",
        "Bikini Wax",
        "Underarm Wax",
        "Facial Waxing",
        "Leg Waxing",
        "Arm Waxing",
        "Men's Waxing Services",
      ]}
      benefits={[
        "Long-lasting smooth results that last for weeks",
        "Natural exfoliation for softer, smoother skin",
        "Reduced hair growth over time with regular treatments",
        "Premium products that minimize discomfort",
        "Professional service for both men and women",
      ]}
    />
  );
}
