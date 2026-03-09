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
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Our Full Menu"
          subtitle="Explore Our Services"
          scriptText="services"
        />

        <div className="space-y-8">
          {SERVICE_DETAILS.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="rounded-2xl bg-primary-soft p-8 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.06)] md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-pink/10">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth="1" stroke="var(--color-accent-pink)" strokeLinecap="round" strokeLinejoin="round">
                    <path d={categoryDecorators[category.id] || categoryDecorators["nail-services"]} />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-accent-pink/40" />
                    <span className="text-sm italic text-text-secondary">{item}</span>
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
