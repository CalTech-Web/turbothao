import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailPolishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="4" width="12" height="8" rx="2" />
      <path d="M20 12L18 38C18 40 20 42 24 42C28 42 30 40 30 38L28 12" />
      <path d="M22 20L26 20" opacity="0.3" />
      <path d="M21 28L27 28" opacity="0.2" />
    </svg>
  );
}

function WaxStripIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8C14 8 16 4 24 4C32 4 34 8 34 8L36 20L12 20Z" />
      <path d="M12 20L10 36C10 40 16 44 24 44C32 44 38 40 38 36L36 20" />
      <path d="M18 30L30 30" opacity="0.2" />
    </svg>
  );
}

function LashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="28" rx="16" ry="10" />
      <circle cx="24" cy="28" r="5" />
      <circle cx="24" cy="28" r="2" fill="currentColor" opacity="0.15" />
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
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="services" className="relative bg-primary py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,105,180,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What We Do"
          subtitle="Exceptional Beauty, Tailored for You"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group relative border border-border bg-surface p-8 transition-all duration-500 hover:border-border-hover overflow-hidden"
              >
                {/* Background watermark */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
                  <Icon className="h-36 w-36" />
                </div>

                <div className="relative">
                  <span className="mb-6 block text-[10px] font-medium tracking-[0.3em] text-text-muted">
                    0{index + 1}
                  </span>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center border border-border transition-all duration-500 group-hover:border-rose-gold/30 group-hover:bg-rose-gold-glow">
                    <Icon className="h-7 w-7 text-rose-gold/60 transition-colors duration-500 group-hover:text-rose-gold" />
                  </div>
                  <h3 className="mb-3 font-heading text-lg tracking-[0.03em] text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
