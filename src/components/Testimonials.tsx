import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-blush/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border-l-4 border-rose-gold bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Quote className="mb-4 h-8 w-8 text-rose-gold/30" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-accent text-gold-accent"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-warm-gray italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-heading text-lg font-bold text-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
