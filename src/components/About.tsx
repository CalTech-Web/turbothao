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
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={BUSINESS_INFO.aboutTitle}
          subtitle={BUSINESS_INFO.aboutSubtitle}
          scriptText="about us"
        />
        <p className="mx-auto mb-12 max-w-2xl text-center text-base italic leading-relaxed text-text-secondary">
          {BUSINESS_INFO.aboutDescription}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {EXPERTISE.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="group rounded-2xl bg-white p-8 text-center shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-pink/10 transition-all duration-500 group-hover:bg-accent-pink/20">
                  <Icon className="h-8 w-8 text-accent-pink transition-colors duration-500" />
                </div>
                <h3 className="mb-4 font-heading text-lg font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm italic leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
