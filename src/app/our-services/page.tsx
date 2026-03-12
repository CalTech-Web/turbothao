import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import BookingCTA from "@/components/BookingCTA";

export const metadata = {
  title: "Our Services | TurboThao Nails and Spa",
  description: "Explore our full range of nail care, waxing, eyelash, and spa services in Glendale, AZ.",
  alternates: {
    canonical: "https://turbothao.vercel.app/our-services",
  },
};

const services = [
  {
    title: "Nail Services",
    description: "Professional nail care from acrylic full sets and fill-ins to gel nails, nail art, and custom designs. Our expert technicians deliver flawless results every time.",
    image: "/images/services/nail-services.jpg",
    icon: "/images/icons/nail-services.webp",
    href: "/nail-services",
  },
  {
    title: "Manicure & Pedicure",
    description: "Classic and deluxe manicure and pedicure services including callus removal, French manicures, polish changes, and paraffin treatments.",
    image: "/images/services/manicure-pedicure.jpg",
    icon: "/images/icons/manicure-pedicure.webp",
    href: "/manicure-and-pedicure",
  },
  {
    title: "Eyelash & Eyebrow Services",
    description: "Expert eyelash extensions, lifts, tinting, eyebrow shaping, and tinting services that enhance your natural beauty effortlessly.",
    image: "/images/services/eyelash-eyebrow.jpg",
    icon: "/images/icons/eyelash-eyebrow.webp",
    href: "/eyelash-and-eyebrow-services",
  },
  {
    title: "Waxing Services",
    description: "Comprehensive waxing for men and women including Brazilian, bikini, facial, underarm, leg, arm, and full body waxing with premium products.",
    image: "/images/services/waxing.jpg",
    icon: "/images/icons/waxing.webp",
    href: "/waxing-services",
  },
  {
    title: "Spa Enhancements",
    description: "Luxurious add-on services including foot and hand massages, hot stone treatments, aromatherapy, collagen treatments, and sugar scrubs.",
    image: "/images/services/spa-enhancements.jpg",
    icon: "/images/icons/spa-enhancements.webp",
    href: "/spa-enhancements",
  },
];

export default function OurServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden pt-[80px]">
        <Image
          src="/images/heroes/our-services.jpg"
          alt="Our Services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg italic text-white/80">
              Nail care, waxing, and eyelash extensions in Glendale AZ
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.href}
                className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-2xl shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="h-[300px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Image src={service.icon} alt="" width={40} height={40} className="h-10 w-10" />
                    <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-base italic leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href={service.href}
                      className="inline-block rounded-full border-2 border-accent-pink px-8 py-3 text-sm font-semibold text-accent-pink transition-all hover:bg-accent-pink hover:text-white"
                    >
                      Learn More
                    </Link>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-accent-pink px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(242,4,115,0.3)] transition-all hover:bg-accent-pink-light hover:shadow-[0_6px_20px_rgba(242,4,115,0.4)]"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
