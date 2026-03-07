import { SERVICE_DETAILS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const categoryDecorators: Record<string, string> = {
  "nail-services": "M12 3C11 3 9 5 9 10C9 15 10 20 12 21C14 20 15 15 15 10C15 5 13 3 12 3Z",
  "manicure-pedicure": "M8 22V12C8 10 9 8 12 8C15 8 16 10 16 12V22",
  "eyelash-eyebrow": "M4 12C4 12 8 6 12 6C16 6 20 12 20 12",
  "waxing": "M7 4C7 4 8 2 12 2C16 2 17 4 17 4L18 10L6 10Z",
  "spa-enhancements": "M6 20C6 20 7 10 15 5C15 5 17 14 9 20",
};

export default function ServiceDetails() {
  return (
    <section className="relative bg-primary-light py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/8 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Our Full Menu"
          subtitle="Explore Our Services"
        />

        <div className="space-y-8">
          {SERVICE_DETAILS.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="border border-border bg-surface p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-10 w-10 items-center justify-center border border-border">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth="1" stroke="var(--color-rose-gold)" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <path d={categoryDecorators[category.id] || categoryDecorators["nail-services"]} />
                  </svg>
                </div>
                <h3 className="font-heading text-xl tracking-[0.04em] text-text-primary md:text-2xl">
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 border border-transparent bg-primary-light px-5 py-3.5 transition-all duration-300 hover:border-border hover:bg-surface-light"
                  >
                    <svg className="h-3 w-3 shrink-0" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1L7.2 4.8L11 6L7.2 7.2L6 11L4.8 7.2L1 6L4.8 4.8Z" fill="var(--color-rose-gold)" opacity="0.3" />
                    </svg>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
