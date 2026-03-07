import { SERVICES } from "@/lib/constants";
import { Paintbrush, Scissors, Eye, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

const iconMap = {
  paintbrush: Paintbrush,
  scissors: Scissors,
  eye: Eye,
  heart: Heart,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What We Do"
          subtitle="Exceptional Beauty, Tailored for You"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-rose-gold to-rose-gold-light transition-all duration-300 group-hover:h-1.5" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blush transition-colors duration-300 group-hover:bg-rose-gold">
                  <Icon className="h-7 w-7 text-rose-gold transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-gray">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
