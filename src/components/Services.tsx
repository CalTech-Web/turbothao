import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailPolishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="4" width="12" height="8" rx="2" />
      <path d="M20 12L18 38C18 40 20 42 24 42C28 42 30 40 30 38L28 12" />
      <path d="M22 20L26 20" opacity="0.3" />
      <path d="M21 28L27 28" opacity="0.2" />
    </svg>
  );
}

function WaxStripIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8C14 8 16 4 24 4C32 4 34 8 34 8L36 20L12 20Z" />
      <path d="M12 20L10 36C10 40 16 44 24 44C32 44 38 40 38 36L36 20" />
      <path d="M18 30L30 30" opacity="0.2" />
    </svg>
  );
}

function LashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="28" rx="16" ry="10" />
      <circle cx="24" cy="28" r="5" />
      <circle cx="24" cy="28" r="2" fill="currentColor" opacity="0.2" />
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
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 44L16 24C16 20 18 16 24 16C30 16 32 20 32 24L32 44" />
      <path d="M24 4L28 10L24 16L20 10Z" />
      <path d="M20 10L28 10" opacity="0.3" />
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
    <section id="services" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots-light" />

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
                className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-rose-gold/8 hover:border-rose-gold/15"
              >
                {/* Background watermark */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
                  <Icon className="h-32 w-32" />
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-gold/15 transition-all duration-300 group-hover:bg-rose-gold group-hover:border-rose-gold">
                    <Icon className="h-8 w-8 text-rose-gold transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-gray">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-xs font-medium text-rose-gold/30">0{index + 1}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-rose-gold/10 to-transparent" />
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
