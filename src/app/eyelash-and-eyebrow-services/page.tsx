import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Eyelash & Eyebrow Services | TurboThao Nails and Spa",
  description: "Expert eyelash extensions, lifts, tinting, and eyebrow services in Glendale, AZ.",
  alternates: {
    canonical: "https://turbothao.vercel.app/eyelash-and-eyebrow-services",
  },
};

export default function EyelashEyebrowPage() {
  return (
    <ServicePageLayout
      title="Eyelash & Eyebrow Services"
      subtitle="Enhance your natural beauty with expert lash and brow care"
      heroImage="/images/heroes/eyelash-eyebrow.jpg"
      description="Our eyelash and eyebrow services are designed to highlight your natural features with precision and care. From lash extensions that add volume and length to eyebrow shaping that frames your face perfectly, our skilled technicians deliver customized results that enhance your beauty effortlessly."
      services={[
        "Eyelash Extensions",
        "Eyelash Lift & Tint",
        "Eyebrow Shaping",
        "Eyebrow Tinting",
        "Lash Fill",
        "Lash Removal",
      ]}
      benefits={[
        "Long-lasting results that last for weeks",
        "Customizable length, curl, and thickness options",
        "Low-maintenance beauty enhancement",
        "Professional application with premium products",
        "Natural-looking results that complement your features",
      ]}
    />
  );
}
