import SectionHeading from "./SectionHeading";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="6" width="20" height="36" rx="4" />
      <circle cx="24" cy="36" r="2" />
      <path d="M24 16L24 28" />
      <path d="M20 24L24 28L28 24" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="32" height="30" rx="4" />
      <path d="M16 6L16 14" />
      <path d="M32 6L32 14" />
      <path d="M8 18L40 18" />
      <circle cx="18" cy="26" r="2" opacity="0.5" />
      <circle cx="24" cy="26" r="2" />
      <circle cx="30" cy="26" r="2" opacity="0.5" />
      <circle cx="18" cy="34" r="2" opacity="0.5" />
      <circle cx="24" cy="34" r="2" opacity="0.5" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="18" width="32" height="6" rx="2" />
      <rect x="10" y="24" width="28" height="18" rx="2" />
      <path d="M24 18L24 42" />
      <path d="M24 18C24 18 20 10 16 10C12 10 12 14 14 16C16 18 24 18 24 18Z" />
      <path d="M24 18C24 18 28 10 32 10C36 10 36 14 34 16C32 18 24 18 24 18Z" />
      <path d="M16 30L20 30" opacity="0.3" />
      <path d="M28 30L32 30" opacity="0.3" />
    </svg>
  );
}

export default function AppPromo() {
  return (
    <section className="relative bg-gradient-to-br from-deep-plum via-deep-plum to-rose-gold py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-10 left-[5%] animate-float" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 2L23 17L38 20L23 23L20 38L17 23L2 20L17 17Z" fill="white" />
        </svg>
        <svg className="absolute top-20 right-[10%] animate-float-reverse" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-20 left-[15%] animate-float-slow" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 1L18 13L30 15L18 17L15 29L12 17L0 15L12 13Z" fill="white" />
        </svg>
        <svg className="absolute bottom-10 right-[20%] animate-float" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="0.5" />
          <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Large decorative ring */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/5" />
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get $5 Off Your First Service"
          subtitle="Download Our App"
          light
        />

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { Icon: DownloadIcon, step: "1", title: "Download the App", desc: "Available on App Store and Google Play" },
              { Icon: CalendarIcon, step: "2", title: "Book Your Session", desc: "Schedule your appointment easily" },
              { Icon: GiftIcon, step: "3", title: "Enjoy $5 OFF", desc: "Your discount is applied automatically" },
            ].map(({ Icon, step, title, desc }) => (
              <div key={step} className="group text-center">
                <div className="relative mx-auto mb-4">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-accent text-xs font-bold text-white">
                    {step}
                  </span>
                </div>
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-white/60">{desc}</p>
              </div>
            ))}
          </div>

          {/* Connector lines between steps (desktop only) */}
          <div className="hidden md:block absolute top-[52%] left-1/2 -translate-x-1/2 w-[40%]">
            <div className="h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-deep-plum transition-all duration-300 hover:bg-champagne hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-deep-plum transition-all duration-300 hover:bg-champagne hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
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
