import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const serviceCards = [
  {
    title: "Nail Services",
    image: "/images/services/nail-services.jpg",
    icon: "/images/icons/nail-services.webp",
    href: "/nail-services",
  },
  {
    title: "Manicure & Pedicure",
    image: "/images/services/manicure-pedicure.jpg",
    icon: "/images/icons/manicure-pedicure.webp",
    href: "/manicure-and-pedicure",
  },
  {
    title: "Eyelash & Eyebrow",
    image: "/images/services/eyelash-eyebrow.jpg",
    icon: "/images/icons/eyelash-eyebrow.webp",
    href: "/eyelash-and-eyebrow-services",
  },
  {
    title: "Waxing Services",
    image: "/images/services/waxing.jpg",
    icon: "/images/icons/waxing.webp",
    href: "/waxing-services",
  },
  {
    title: "Spa Enhancements",
    image: "/images/services/spa-enhancements.jpg",
    icon: "/images/icons/spa-enhancements.webp",
    href: "/spa-enhancements",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What We Do"
          subtitle="Exceptional Beauty, Tailored for You"
          scriptText="our lounge"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Pink gradient hover overlay */}
                <div className="absolute inset-0 flex items-end justify-center pb-5 bg-gradient-to-t from-[rgba(242,4,115,0.72)] via-[rgba(242,4,115,0.2)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="translate-y-3 transform rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-accent-pink transition-transform duration-500 group-hover:translate-y-0">
                    View Services →
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5">
                <Image src={service.icon} alt={`${service.title} icon`} width={32} height={32} className="h-8 w-8" />
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
