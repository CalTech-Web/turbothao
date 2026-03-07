import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(196,137,138,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(247,240,232,0.5),transparent_60%)]" />

      {/* Floating decorative elements */}
      <svg className="animate-float absolute top-24 left-[8%] opacity-10" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="18" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>

      <svg className="animate-float-reverse absolute top-32 right-[12%] opacity-10" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 5 L45 35 L75 40 L45 45 L40 75 L35 45 L5 40 L35 35 Z" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>

      <svg className="animate-float-slow absolute bottom-40 left-[18%] opacity-10" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>

      <svg className="animate-float absolute right-[6%] bottom-48 opacity-8" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="22" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>

      {/* Decorative thin rings */}
      <div className="animate-spin-slow absolute -top-32 -right-32 h-96 w-96 rounded-full border border-rose-gold/5" />
      <div className="animate-spin-slow absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full border border-rose-gold/[0.03]" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Decorative line above */}
        <div className="animate-fade-up mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold/40" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-rose-gold/50">
            <path d="M7 0.5L8.5 5.5L13.5 7L8.5 8.5L7 13.5L5.5 8.5L0.5 7L5.5 5.5Z" fill="currentColor" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold/40" />
        </div>

        <p className="animate-fade-up mb-4 text-sm font-medium tracking-[0.35em] uppercase text-rose-gold">
          Welcome to
        </p>
        <h1 className="animate-fade-up font-heading text-6xl font-semibold text-charcoal md:text-7xl lg:text-9xl">
          {BUSINESS_INFO.tagline}
        </h1>
        <p className="animate-fade-up-delay mt-8 text-xl font-light text-medium-gray md:text-2xl">
          {BUSINESS_INFO.headline}
        </p>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-warm-gray">
          {BUSINESS_INFO.description}
        </p>

        {/* Decorative divider */}
        <div className="animate-fade-up-delay-2 mx-auto mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-20 bg-rose-gold/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-rose-gold/30" />
          <div className="h-px w-20 bg-rose-gold/20" />
        </div>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-block rounded-full bg-rose-gold px-10 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-rose-gold-dark hover:shadow-lg hover:scale-105"
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            className="inline-block rounded-full border border-charcoal/15 px-10 py-4 text-base font-medium text-charcoal transition-all duration-300 hover:border-rose-gold hover:text-rose-gold"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/15 to-transparent" />
    </section>
  );
}
