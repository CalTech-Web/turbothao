import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailPolishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="4" width="12" height="8" rx="2" />
      <path d="M20 12L18 38C18 40 20 42 24 42C28 42 30 40 30 38L28 12" />
      <path d="M22 20L26 20" opacity="0.4" />
      <path d="M21 28L27 28" opacity="0.3" />
    </svg>
  );
}

function WaxStripIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8C14 8 16 4 24 4C32 4 34 8 34 8L36 20L32 22L28 20L24 22L20 20L16 22L12 20L14 8Z" />
      <path d="M12 20L10 36C10 40 16 44 24 44C32 44 38 40 38 36L36 20" />
      <path d="M18 30L30 30" opacity="0.3" />
      <path d="M16 36L32 36" opacity="0.3" />
    </svg>
  );
}

function LashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="28" rx="16" ry="10" />
      <circle cx="24" cy="28" r="5" />
      <circle cx="24" cy="28" r="2" fill="currentColor" opacity="0.3" />
      <path d="M10 24C8 18 10 12 12 10" />
      <path d="M14 22C13 16 14 10 17 7" />
      <path d="M18 20C18 14 20 8 22 6" />
      <path d="M24 18C24 12 25 6 26 5" />
      <path d="M30 20C30 14 28 8 26 6" />
      <path d="M34 22C35 16 34 10 31 7" />
      <path d="M38 24C40 18 38 12 36 10" />
    </svg>
  );
}

function DiamondHandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 44L16 24C16 20 18 16 24 16C30 16 32 20 32 24L32 44" />
      <path d="M16 32L32 32" opacity="0.3" />
      <path d="M24 4L28 10L24 16L20 10Z" />
      <path d="M20 10L28 10" opacity="0.4" />
      <path d="M10 22L14 24" opacity="0.3" />
      <path d="M38 22L34 24" opacity="0.3" />
      <circle cx="10" cy="16" r="1.5" opacity="0.2" />
      <circle cx="38" cy="16" r="1.5" opacity="0.2" />
    </svg>
  );
}

const iconMap = {
  paintbrush: NailPolishIcon,
  scissors: WaxStripIcon,
  eye: LashIcon,
  heart: DiamondHandIcon,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-dots-light opacity-50" />
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-rose-gold/5 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-champagne/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What We Do"
          subtitle="Exceptional Beauty, Tailored for You"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-rose-gold to-gold-accent transition-all duration-300 group-hover:h-1.5" />

                {/* Background decorative shape */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]">
                  <Icon className="h-32 w-32" />
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-champagne/50 transition-all duration-300 group-hover:from-rose-gold group-hover:to-rose-gold-light group-hover:shadow-md">
                    <Icon className="h-8 w-8 text-rose-gold transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-gray">
                    {service.description}
                  </p>

                  {/* Step indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-xs font-bold text-rose-gold/40">0{index + 1}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-rose-gold/20 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
