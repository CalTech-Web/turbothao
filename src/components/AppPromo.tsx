import SectionHeading from "./SectionHeading";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="6" width="20" height="36" rx="4" />
      <circle cx="24" cy="36" r="2" />
      <path d="M24 16L24 28" />
      <path d="M20 24L24 28L28 24" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="32" height="30" rx="4" />
      <path d="M16 6L16 14" />
      <path d="M32 6L32 14" />
      <path d="M8 18L40 18" />
      <circle cx="24" cy="26" r="2" opacity="0.4" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="18" width="32" height="6" rx="2" />
      <rect x="10" y="24" width="28" height="18" rx="2" />
      <path d="M24 18L24 42" />
      <path d="M24 18C24 18 20 10 16 10C12 10 12 14 14 16C16 18 24 18 24 18Z" />
      <path d="M24 18C24 18 28 10 32 10C36 10 36 14 34 16C32 18 24 18 24 18Z" />
    </svg>
  );
}

export default function AppPromo() {
  return (
    <section className="relative bg-primary-light py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,105,180,0.05),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/8 to-transparent" />

      {/* Floating decorations */}
      <svg className="absolute top-16 left-[6%] opacity-[0.04] animate-float" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 1L18 13L30 15L18 17L15 29L12 17L0 15L12 13Z" fill="var(--color-rose-gold)" />
      </svg>
      <svg className="absolute bottom-20 right-[8%] opacity-[0.04] animate-float-reverse" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get $5 Off Your First Service"
          subtitle="Download Our App"
        />

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { Icon: DownloadIcon, step: "01", title: "Download the App", desc: "Available on App Store and Google Play" },
              { Icon: CalendarIcon, step: "02", title: "Book Your Session", desc: "Schedule your appointment easily" },
              { Icon: GiftIcon, step: "03", title: "Enjoy $5 OFF", desc: "Your discount is applied automatically" },
            ].map(({ Icon, step, title, desc }) => (
              <div key={step} className="group text-center">
                <div className="relative mx-auto mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center border border-border transition-all duration-500 group-hover:border-rose-gold/30 group-hover:bg-rose-gold-glow">
                    <Icon className="h-10 w-10 text-rose-gold/50 transition-colors group-hover:text-rose-gold" />
                  </div>
                  <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center border border-rose-gold/30 bg-primary text-[10px] tracking-wider text-rose-gold/70">
                    {step}
                  </span>
                </div>
                <p className="font-heading text-sm tracking-[0.05em] text-text-primary">{title}</p>
                <p className="mt-2 text-xs text-text-muted">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-rose-gold bg-rose-gold px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase text-primary transition-all duration-300 hover:bg-transparent hover:text-rose-gold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-text-muted/30 px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase text-text-secondary transition-all duration-300 hover:border-rose-gold/50 hover:text-rose-gold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.73c.44.28.96.28 1.44-.02l14.45-8.35-3.3-3.3-12.6 10.13c-.43.38-.43.88.01 1.54zm.62-22.6c-.52.55-.62 1.2-.62 1.63v18.45l11.25-11.24L3.8 1.13zm17.05 9.17l-3.38-1.97-3.66 3.66 3.66 3.66 3.38-1.97c1.15-.67 1.15-2.71 0-3.38zm-5.2-1.18L5.15.51C4.78.28 4.39.17 4.03.17c-.22 0-.44.04-.63.13l12.25 9.82z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
