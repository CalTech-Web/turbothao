import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-[100px]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,137,138,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-noise" />

      {/* Pulsing glow orb behind content */}
      <div className="animate-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(198,137,138,0.12),transparent_70%)] md:h-[600px] md:w-[600px]" />

      {/* Animated sparkle particles */}
      <div className="animate-sparkle-1 absolute top-[20%] left-[12%] h-1.5 w-1.5 rounded-full bg-rose-gold/40" />
      <div className="animate-sparkle-2 absolute top-[35%] right-[15%] h-1 w-1 rounded-full bg-rose-gold/30" />
      <div className="animate-sparkle-3 absolute top-[65%] left-[20%] h-1 w-1 rounded-full bg-rose-gold/25" />
      <div className="animate-sparkle-4 absolute top-[25%] right-[25%] h-1.5 w-1.5 rounded-full bg-rose-gold/35" />
      <div className="animate-sparkle-5 absolute top-[75%] right-[12%] h-1 w-1 rounded-full bg-rose-gold/30" />
      <div className="animate-sparkle-2 absolute top-[50%] left-[5%] h-0.5 w-0.5 rounded-full bg-rose-gold/40" />
      <div className="animate-sparkle-4 absolute top-[45%] right-[8%] h-0.5 w-0.5 rounded-full bg-rose-gold/35" />
      <div className="animate-sparkle-1 absolute top-[80%] left-[40%] h-1 w-1 rounded-full bg-rose-gold/25" />

      {/* Floating elements */}
      <svg className="animate-float absolute top-24 left-[8%] opacity-[0.08]" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="16" stroke="var(--color-rose-gold)" strokeWidth="0.3" />
      </svg>
      <svg className="animate-float-reverse absolute top-40 right-[10%] opacity-[0.06]" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 5L45 35L75 40L45 45L40 75L35 45L5 40L35 35Z" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>
      <svg className="animate-float-slow absolute bottom-40 left-[15%] opacity-[0.06]" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 2L23 17L38 20L23 23L20 38L17 23L2 20L17 17Z" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>

      {/* Animated rising lines */}
      <div className="animate-rise-1 absolute bottom-0 left-[25%] h-40 w-px bg-gradient-to-t from-rose-gold/20 to-transparent" />
      <div className="animate-rise-2 absolute bottom-0 right-[30%] h-32 w-px bg-gradient-to-t from-rose-gold/15 to-transparent" />
      <div className="animate-rise-3 absolute bottom-0 left-[60%] h-36 w-px bg-gradient-to-t from-rose-gold/10 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 h-32 w-px bg-gradient-to-b from-transparent via-rose-gold/10 to-transparent" />
      <div className="animate-spin-slow absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full border border-rose-gold/[0.04]" />
      <div className="animate-spin-slow absolute -bottom-60 -left-60 h-[700px] w-[700px] rounded-full border border-rose-gold/[0.03]" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      {/* Orbiting ring */}
      <div className="animate-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full border border-rose-gold/[0.06] md:h-[500px] md:w-[500px]">
        <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-rose-gold/40 shadow-[0_0_8px_rgba(198,137,138,0.4)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-up mx-auto mb-10 flex items-center justify-center gap-6">
          <div className="animate-expand-right h-px w-20 bg-gradient-to-r from-transparent to-rose-gold/30" />
          <svg className="animate-pulse-soft" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5Z" fill="var(--color-rose-gold)" opacity="0.4" /></svg>
          <div className="animate-expand-left h-px w-20 bg-gradient-to-l from-transparent to-rose-gold/30" />
        </div>

        <p className="animate-fade-up mb-6 text-xs font-medium tracking-[0.4em] uppercase text-rose-gold/70">
          Welcome to
        </p>
        <h1 className="animate-fade-up font-heading text-shimmer text-5xl font-medium tracking-[0.05em] md:text-7xl lg:text-8xl">
          {BUSINESS_INFO.tagline}
        </h1>
        <p className="animate-fade-up-delay mt-8 text-lg font-light tracking-wide text-text-secondary md:text-xl">
          {BUSINESS_INFO.headline}
        </p>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-muted">
          {BUSINESS_INFO.description}
        </p>

        <div className="animate-fade-up-delay-2 mx-auto mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-rose-gold/15" />
          <div className="animate-pulse-soft h-1 w-1 rounded-full bg-rose-gold/30" />
          <div className="h-px w-16 bg-rose-gold/15" />
        </div>

        <div className="animate-fade-up-delay-2 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group relative inline-block overflow-hidden border border-rose-gold bg-rose-gold px-12 py-4 text-xs font-medium tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-transparent hover:text-rose-gold"
          >
            <span className="animate-btn-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Book Appointment</span>
          </a>
          <a
            href="#services"
            className="inline-block border border-text-muted/30 px-12 py-4 text-xs font-medium tracking-[0.2em] uppercase text-text-secondary transition-all duration-300 hover:border-rose-gold/50 hover:text-rose-gold"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/10 to-transparent" />
    </section>
  );
}
