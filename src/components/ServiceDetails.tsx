import { SERVICE_DETAILS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="var(--color-rose-gold)" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C11 3 9 5 9 10C9 15 10 20 12 21C14 20 15 15 15 10C15 5 13 3 12 3Z" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="var(--color-rose-gold)" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22V12C8 10 9 8 12 8C15 8 16 10 16 12V22" />
      <path d="M6 14L8 12" />
      <path d="M18 14L16 12" />
      <circle cx="12" cy="5" r="2" />
    </svg>
  );
}

function LashDetailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="var(--color-rose-gold)" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="14" rx="8" ry="5" />
      <path d="M6 12C5 9 6 6 7 5" />
      <path d="M9 11C9 8 10 5 11 4" />
      <path d="M15 11C15 8 14 5 13 4" />
      <path d="M18 12C19 9 18 6 17 5" />
    </svg>
  );
}

function WaxDetailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="var(--color-rose-gold)" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4C7 4 8 2 12 2C16 2 17 4 17 4L18 10L12 12L6 10Z" />
      <path d="M6 10L5 18C5 20 8 22 12 22C16 22 19 20 19 18L18 10" />
    </svg>
  );
}

function SpaIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="var(--color-rose-gold)" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 20C6 20 7 10 15 5C15 5 17 14 9 20" />
      <path d="M6 20C10 15 15 5 15 5" />
    </svg>
  );
}

const categoryIcons: Record<string, () => React.JSX.Element> = {
  "nail-services": NailIcon,
  "manicure-pedicure": HandIcon,
  "eyelash-eyebrow": LashDetailIcon,
  "waxing": WaxDetailIcon,
  "spa-enhancements": SpaIcon,
};

export default function ServiceDetails() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Our Full Menu"
          subtitle="Explore Our Services"
        />

        <div className="space-y-12">
          {SERVICE_DETAILS.map((category, index) => {
            const CategoryIcon = categoryIcons[category.id] || NailIcon;
            return (
              <div
                key={category.id}
                id={category.id}
                className={`relative rounded-2xl p-8 md:p-12 overflow-hidden ${
                  index % 2 === 0 ? "bg-cream" : "bg-champagne/40"
                }`}
              >
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 opacity-[0.06]">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="35" stroke="var(--color-rose-gold)" strokeWidth="1" />
                    <circle cx="40" cy="40" r="20" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-gold/10">
                    <CategoryIcon />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-xl bg-white/80 px-5 py-4 transition-all duration-200 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush/80 transition-colors group-hover:bg-rose-gold/10">
                        <CategoryIcon />
                      </div>
                      <span className="text-charcoal font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
