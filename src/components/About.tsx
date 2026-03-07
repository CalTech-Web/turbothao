import { BUSINESS_INFO, EXPERTISE } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailArtIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6C22 6 18 10 18 20C18 30 20 40 24 42C28 40 30 30 30 20C30 10 26 6 24 6Z" />
      <path d="M20 14C21 13 23 16 24 18" opacity="0.5" />
      <path d="M18 22L22 20" opacity="0.3" />
      <circle cx="25" cy="28" r="2" opacity="0.3" />
    </svg>
  );
}

function SpaLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 38C12 38 14 20 30 10C30 10 34 28 18 38" />
      <path d="M12 38C20 30 30 10 30 10" />
      <path d="M18 30C22 26 26 18 28 14" opacity="0.3" />
    </svg>
  );
}

function GlowStarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8L27 20L38 24L27 28L24 40L21 28L10 24L21 20Z" />
      <circle cx="24" cy="24" r="4" opacity="0.2" />
    </svg>
  );
}

const iconMap = {
  sparkles: NailArtIcon,
  flower: SpaLeafIcon,
  heart: GlowStarIcon,
};

export default function About() {
  return (
    <section id="about" className="relative bg-primary-light py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/8 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title={BUSINESS_INFO.aboutTitle}
          subtitle={BUSINESS_INFO.aboutSubtitle}
        />
        <p className="mx-auto mb-20 max-w-2xl text-center text-sm leading-relaxed text-text-secondary">
          {BUSINESS_INFO.aboutDescription}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {EXPERTISE.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group relative border border-border bg-surface p-10 text-center transition-all duration-500 hover:border-border-hover"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-border transition-all duration-500 group-hover:border-rose-gold/30 group-hover:bg-rose-gold-glow">
                  <Icon className="h-10 w-10 text-rose-gold/60 transition-colors duration-500 group-hover:text-rose-gold" />
                </div>
                <h3 className="mb-4 font-heading text-lg tracking-[0.05em] text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
