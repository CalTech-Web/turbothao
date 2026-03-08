import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-[100px]"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,105,180,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-noise" />

      {/* Animated rising lines */}
      <div className="animate-rise-1 absolute bottom-0 left-[25%] h-40 w-px bg-gradient-to-t from-rose-gold/20 to-transparent" />
      <div className="animate-rise-2 absolute bottom-0 right-[30%] h-32 w-px bg-gradient-to-t from-rose-gold/15 to-transparent" />
      <div className="animate-rise-3 absolute bottom-0 left-[60%] h-36 w-px bg-gradient-to-t from-rose-gold/10 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 h-32 w-px bg-gradient-to-b from-transparent via-rose-gold/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-up mx-auto mb-10 flex items-center justify-center gap-6">
          <div className="animate-expand-right h-px w-20 bg-gradient-to-r from-transparent to-rose-gold/30" />
          <svg className="animate-pulse-soft" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5Z" fill="var(--color-rose-gold)" opacity="0.4" /></svg>
          <div className="animate-expand-left h-px w-20 bg-gradient-to-l from-transparent to-rose-gold/30" />
        </div>

        <p className="animate-fade-up mb-6 text-xs font-medium tracking-[0.4em] uppercase text-rose-gold">
          Welcome to
        </p>
        <h1 className="animate-fade-up font-heading text-5xl font-medium tracking-[0.05em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-7xl lg:text-8xl">
          {BUSINESS_INFO.tagline}
        </h1>
        <p className="animate-fade-up-delay mt-8 text-lg tracking-wide text-white/90 md:text-xl">
          {BUSINESS_INFO.headline}
        </p>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
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
