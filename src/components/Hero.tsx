import Image from "next/image";
import { BUSINESS_INFO, BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary pt-[140px] pb-20 md:pb-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="font-script text-[55px] leading-[0.9] text-accent-pink sm:text-[90px] md:text-[110px] lg:text-[128px]">
              {BUSINESS_INFO.tagline}
            </h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-text-secondary md:text-xl">
              {BUSINESS_INFO.headline}
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted">
              {BUSINESS_INFO.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent-pink px-7 py-3 text-center text-base font-semibold text-white shadow-[0_4px_15px_rgba(242,4,115,0.3)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_6px_20px_rgba(242,4,115,0.4)] sm:px-10 sm:py-4"
              >
                Book Appointment
              </a>
              <a
                href="/our-services"
                className="inline-block rounded-full border-2 border-accent-pink/30 px-7 py-3 text-center text-base font-semibold text-text-secondary transition-all duration-300 hover:border-accent-pink hover:text-accent-pink sm:px-10 sm:py-4"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-up-delay relative">
            <div className="overflow-hidden rounded-t-[200px] rounded-b-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] md:rounded-t-[300px]">
              <Image
                src="/hero-image.jpeg"
                alt="Nail spa services"
                width={600}
                height={700}
                className="h-[350px] w-full object-cover md:h-[550px]"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
