import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
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
              </div>
              <div className="flex items-center gap-3 p-5">
                <Image src={service.icon} alt="" width={32} height={32} className="h-8 w-8" />
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-lg rounded-2xl bg-accent-pink px-8 py-10 text-center">
          <h3 className="font-heading text-2xl font-bold text-white">Ready to Book?</h3>
          <p className="mt-3 text-base italic text-white/80">Schedule your appointment today</p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-white px-10 py-3.5 text-base font-semibold text-accent-pink shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all hover:bg-primary-soft hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
