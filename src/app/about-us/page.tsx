import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO, BRANDS, BOOKING_URL } from "@/lib/constants";

export const metadata = {
  title: "About Us | TurboThao Nails and Spa",
  description: "Learn about TurboThao Nails and Spa - your premier nail salon in Glendale, AZ.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden pt-[80px]">
        <Image
          src="/images/heroes/about-us.jpg"
          alt="About TurboThao Nails and Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-4 text-lg italic text-white/80">{BUSINESS_INFO.aboutSubtitle}</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-script text-5xl text-accent-pink md:text-7xl">who we are</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl">
            {BUSINESS_INFO.aboutTitle}
          </h2>
          <p className="mt-6 text-base italic leading-relaxed text-text-secondary">
            At TurboThao Nails, we believe that true beauty goes beyond the surface. Our salon is dedicated to providing exceptional nail care, waxing, and spa services that cater to your individual needs. We use only premium products and stay current with the latest techniques to deliver results that exceed your expectations.
          </p>
          <p className="mt-6 text-base italic leading-relaxed text-text-secondary">
            {BUSINESS_INFO.aboutDescription}
          </p>

          <div className="mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent-pink px-10 py-4 text-sm font-medium text-white shadow-[2px_2px_5px_0px_rgba(21,63,33,0.2)] transition-all duration-300 hover:bg-accent-pink-light"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-primary-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-script text-5xl text-accent-pink md:text-7xl">our services</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl">
              What We Offer
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Nail Services", desc: "Nail art, acrylics, gel removal, and custom designs", href: "/nail-services" },
              { title: "Manicure & Pedicure", desc: "Classic and deluxe services, callus removal, polish changes", href: "/manicure-and-pedicure" },
              { title: "Eyelash & Eyebrow", desc: "Extensions, lifts, tinting, and shaping", href: "/eyelash-and-eyebrow-services" },
              { title: "Waxing Services", desc: "Full body, Brazilian, bikini, and facial waxing", href: "/waxing-services" },
              { title: "Spa Enhancements", desc: "Foot massages, hot stone add-ons, and aromatherapy", href: "/spa-enhancements" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl bg-white p-8 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]"
              >
                <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-accent-pink transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm italic text-text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-script text-5xl text-accent-pink md:text-7xl">our brands</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl">
              We Use Only the Best
            </h2>
          </div>
          <div className="mt-10 overflow-hidden">
            <div className="flex animate-marquee w-max">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <div key={`${brand.name}-${i}`} className="flex shrink-0 items-center justify-center" style={{ width: "calc(20vw)", maxWidth: "240px", minWidth: "160px" }}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={200}
                    height={100}
                    className="h-24 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
