import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pb-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left Content */}
          <div className="animate-fade-up">
            <p className="mb-2 text-sm italic tracking-wide text-text-muted">
              welcome to
            </p>
            <h1 className="font-script text-[70px] leading-[0.9] text-accent-pink sm:text-[90px] md:text-[110px] lg:text-[128px]">
              {BUSINESS_INFO.tagline}
            </h1>
            <p className="mt-6 text-lg italic leading-relaxed text-text-secondary md:text-xl">
              {BUSINESS_INFO.headline}
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted">
              {BUSINESS_INFO.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-block rounded-full bg-accent-pink px-10 py-4 text-center text-sm font-medium text-white shadow-[2px_2px_5px_0px_rgba(21,63,33,0.2)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_15px_25px_-7px_rgba(0,0,0,0.1)]"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-block rounded-full border-2 border-text-muted/30 px-10 py-4 text-center text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent-pink hover:text-accent-pink"
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
                className="h-[400px] w-full object-cover md:h-[550px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
