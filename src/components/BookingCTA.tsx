import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";

export default function BookingCTA() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/cta-bg.webp"
                alt="Nail art at TurboThao Nails and Spa"
                width={600}
                height={500}
                className="h-[350px] w-full object-cover md:h-[420px]"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent-pink/20" />
          </div>

          {/* Right - Content */}
          <div>
            <p className="font-script text-5xl text-accent-pink md:text-6xl">
              Treat Yourself
            </p>
            <p className="mt-1 text-sm font-semibold tracking-[0.15em] uppercase text-accent-pink/60">
              Book Your Appointment Today
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl">
              Ready for Your Next Pampering Session?
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-px w-12 bg-accent-pink/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-accent-pink/40" />
              <div className="h-px w-12 bg-accent-pink/30" />
            </div>
            <p className="mt-5 text-base italic leading-relaxed text-text-secondary">
              Indulge in a relaxing experience at TurboThao Nails and Spa. From
              stunning nail art to rejuvenating spa treatments, our expert team
              is ready to make you look and feel your absolute best.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent-pink px-10 py-4 text-center text-base font-semibold text-white shadow-[0_4px_15px_rgba(242,4,115,0.3)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_6px_20px_rgba(242,4,115,0.4)]"
              >
                Book Appointment
              </a>
              <a
                href="/our-services"
                className="inline-block rounded-full border-2 border-accent-pink/30 px-10 py-4 text-center text-base font-semibold text-text-secondary transition-all duration-300 hover:border-accent-pink hover:text-accent-pink"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
