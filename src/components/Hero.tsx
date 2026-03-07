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

      {/* Floating decorative elements */}
      <svg className="animate-float absolute top-20 left-[10%] opacity-20" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="1" />
        <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="8" fill="white" fillOpacity="0.3" />
      </svg>

      <svg className="animate-float-reverse absolute top-40 right-[15%] opacity-15" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 5 L45 35 L75 40 L45 45 L40 75 L35 45 L5 40 L35 35 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.1" />
      </svg>

      <svg className="animate-float-slow absolute bottom-40 left-[20%] opacity-20" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d="M25 2 C25 2 35 15 35 25 C35 35 25 48 25 48 C25 48 15 35 15 25 C15 15 25 2 25 2 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.1" />
      </svg>

      <svg className="animate-float absolute right-[8%] bottom-60 opacity-15" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="white" fillOpacity="0.2" />
      </svg>

      {/* Decorative rings */}
      <div className="animate-spin-slow absolute -top-20 -right-20 h-80 w-80 rounded-full border border-white/10" />
      <div className="animate-spin-slow absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/5" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Decorative line above */}
        <div className="animate-fade-up mx-auto mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/60" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/60">
            <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" fill="currentColor" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/60" />
        </div>

        <p className="animate-fade-up mb-4 text-lg font-light tracking-[0.3em] uppercase text-white/80">
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

        {/* Decorative line below description */}
        <div className="animate-fade-up-delay-2 mx-auto mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-white/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
          <div className="h-px w-16 bg-white/30" />
        </div>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-deep-plum transition-all duration-300 hover:bg-champagne hover:shadow-lg hover:scale-105"
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            className="inline-block rounded-full border border-white/40 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="var(--color-soft-white)" />
        </svg>
      </div>
    </section>
  );
}
