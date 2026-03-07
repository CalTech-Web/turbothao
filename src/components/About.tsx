import { BUSINESS_INFO, EXPERTISE } from "@/lib/constants";
import { Sparkles, Flower2, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

const iconMap = {
  sparkles: Sparkles,
  flower: Flower2,
  heart: Heart,
};

export default function About() {
  return (
    <section id="about" className="bg-soft-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
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
                className="group rounded-2xl bg-cream p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blush transition-colors duration-300 group-hover:bg-rose-gold">
                  <Icon className="h-8 w-8 text-rose-gold transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-charcoal">
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
