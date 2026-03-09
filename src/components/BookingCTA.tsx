import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Full background image */}
      <Image
        src="/images/cta-bg.webp"
        alt=""
        fill
        className="object-cover"
      />
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-accent-pink/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Script decorative text */}
        <p className="font-script text-5xl text-white/30 md:text-7xl">
          Treat Yourself
        </p>

        {/* Subheading */}
        <p className="mt-2 text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
          Book Your Appointment Today
        </p>

        {/* Main heading */}
        <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Ready for Your Next Pampering Session?
        </h2>

        {/* Decorative divider */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
          <div className="h-px w-12 bg-white/30" />
        </div>

        {/* Paragraph */}
        <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Indulge in a relaxing experience at TurboThao Nails and Spa. From
          stunning nail art to rejuvenating spa treatments, our expert team is
          ready to make you look and feel your absolute best.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-accent-pink shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            Book Appointment
          </a>
          <a
            href="/our-services"
            className="inline-block rounded-full border-2 border-white/40 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
