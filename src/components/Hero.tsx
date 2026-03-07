import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-plum via-rose-gold to-champagne opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(183,110,121,0.3),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="animate-fade-up mb-4 text-lg font-light tracking-widest uppercase text-white/80">
          Welcome to
        </p>
        <h1 className="animate-fade-up font-heading text-5xl font-bold text-white md:text-7xl lg:text-8xl">
          {BUSINESS_INFO.tagline}
        </h1>
        <p className="animate-fade-up-delay mt-6 text-xl font-light text-white/90 md:text-2xl">
          {BUSINESS_INFO.headline}
        </p>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          {BUSINESS_INFO.description}
        </p>
        <div className="animate-fade-up-delay-2 mt-10">
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-deep-plum transition-all duration-300 hover:bg-champagne hover:shadow-lg hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soft-white to-transparent" />
    </section>
  );
}
