import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  services: string[];
  benefits: string[];
  sidebarImage?: string;
}

const otherServices = [
  { title: "Nail Services", href: "/nail-services" },
  { title: "Manicure & Pedicure", href: "/manicure-and-pedicure" },
  { title: "Eyelash & Eyebrow", href: "/eyelash-and-eyebrow-services" },
  { title: "Waxing Services", href: "/waxing-services" },
  { title: "Spa Enhancements", href: "/spa-enhancements" },
];

export default function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  description,
  services,
  benefits,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden pt-[80px]">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-lg italic text-white/80">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Main Content */}
            <div>
              <p className="text-base italic leading-relaxed text-text-secondary">
                {description}
              </p>

              <h2 className="mt-10 font-heading text-2xl font-bold text-text-primary">
                Our {title}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl bg-primary-soft px-5 py-3.5 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-accent-pink/40" />
                    <span className="text-sm italic text-text-secondary">{service}</span>
                  </div>
                ))}
              </div>

              <h2 className="mt-10 font-heading text-2xl font-bold text-text-primary">
                Benefits
              </h2>
              <ul className="mt-5 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-accent-pink" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base italic text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-accent-pink px-10 py-4 text-sm font-medium text-white shadow-[2px_2px_5px_0px_rgba(21,63,33,0.2)] transition-all duration-300 hover:bg-accent-pink-light"
                >
                  Book This Service
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="rounded-2xl bg-primary-soft p-6">
                <h3 className="mb-4 font-heading text-lg font-bold text-text-primary">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm italic text-text-secondary transition-all hover:bg-white hover:text-accent-pink hover:shadow-sm"
                      >
                        <svg className="h-3 w-3 shrink-0 text-accent-pink" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M4 2L8 6L4 10" />
                        </svg>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-accent-pink p-6 text-center text-white">
                <h3 className="font-heading text-lg font-bold">Ready to Book?</h3>
                <p className="mt-2 text-sm italic text-white/80">
                  Schedule your appointment today
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-accent-pink transition-all hover:bg-primary-soft"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
