import { SERVICE_DETAILS } from "@/lib/constants";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ServiceDetails() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Our Full Menu"
          subtitle="Explore Our Services"
        />

        <div className="space-y-16">
          {SERVICE_DETAILS.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className={`rounded-2xl p-8 md:p-12 ${
                index % 2 === 0 ? "bg-cream" : "bg-champagne/50"
              }`}
            >
              <h3 className="mb-8 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                {category.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-white/80 px-4 py-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                  >
                    <Check className="h-5 w-5 shrink-0 text-rose-gold" />
                    <span className="text-charcoal">{item}</span>
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
