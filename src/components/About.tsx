import { BUSINESS_INFO, EXPERTISE } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailArtIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6C22 6 18 10 18 20C18 30 20 40 24 42C28 40 30 30 30 20C30 10 26 6 24 6Z" />
      <path d="M20 14C21 13 23 16 24 18" />
      <path d="M18 22L22 20" />
      <circle cx="25" cy="28" r="2" />
      <path d="M10 16L14 18" opacity="0.4" />
      <path d="M38 16L34 18" opacity="0.4" />
      <path d="M8 26L13 25" opacity="0.3" />
      <path d="M40 26L35 25" opacity="0.3" />
    </svg>
  );
}

function SpaLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 38C12 38 14 20 30 10C30 10 34 28 18 38" />
      <path d="M12 38C20 30 30 10 30 10" />
      <path d="M18 30C22 26 26 18 28 14" opacity="0.4" />
      <circle cx="36" cy="14" r="3" opacity="0.3" />
      <circle cx="40" cy="22" r="2" opacity="0.2" />
      <path d="M8 42L16 36" opacity="0.3" />
    </svg>
  );
}

function GlowStarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8L27 20L38 24L27 28L24 40L21 28L10 24L21 20Z" />
      <circle cx="24" cy="24" r="4" opacity="0.3" />
      <path d="M38 10L36 14L40 12" opacity="0.3" />
      <path d="M10 10L12 14L8 12" opacity="0.3" />
      <path d="M38 38L36 34L40 36" opacity="0.3" />
      <path d="M10 38L12 34L8 36" opacity="0.3" />
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
    <section id="about" className="relative bg-soft-white py-20 md:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-[0.04]">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="var(--color-rose-gold)" strokeWidth="1" />
          <circle cx="150" cy="150" r="100" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="60" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-0 opacity-[0.03] bg-pattern-dots w-60 h-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title={BUSINESS_INFO.aboutTitle}
          subtitle={BUSINESS_INFO.aboutSubtitle}
        />
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-warm-gray">
          {BUSINESS_INFO.aboutDescription}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {EXPERTISE.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-cream p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden"
              >
                {/* Card corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.06]">
                  <svg viewBox="0 0 80 80" fill="none">
                    <path d="M80 0 L80 80 L0 80" stroke="var(--color-rose-gold)" strokeWidth="1" fill="none" />
                    <path d="M80 20 L80 80 L20 80" stroke="var(--color-rose-gold)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blush transition-colors duration-300 group-hover:bg-rose-gold">
                  <Icon className="h-10 w-10 text-rose-gold transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom decorative line */}
                <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
