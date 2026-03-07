import { BUSINESS_INFO, EXPERTISE } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailArtIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6C22 6 18 10 18 20C18 30 20 40 24 42C28 40 30 30 30 20C30 10 26 6 24 6Z" />
      <path d="M20 14C21 13 23 16 24 18" />
      <path d="M18 22L22 20" opacity="0.4" />
      <circle cx="25" cy="28" r="2" opacity="0.3" />
    </svg>
  );
}

function SpaLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 38C12 38 14 20 30 10C30 10 34 28 18 38" />
      <path d="M12 38C20 30 30 10 30 10" />
      <path d="M18 30C22 26 26 18 28 14" opacity="0.4" />
    </svg>
  );
}

function GlowStarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="about" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(196,137,138,0.04),transparent_70%)]" />

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
                className="group rounded-2xl border border-rose-gold/8 bg-white p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-rose-gold/15"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-rose-gold/15 transition-all duration-300 group-hover:bg-rose-gold group-hover:border-rose-gold">
                  <Icon className="h-10 w-10 text-rose-gold transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
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
