import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary-soft py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
          scriptText="reviews"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-2xl bg-white p-8 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]"
            >
              {/* Quote mark */}
              <svg className="mb-4 h-8 w-8 text-accent-pink/20" viewBox="0 0 40 40" fill="currentColor">
                <path d="M8 25C8 25 8 18 14 14L12 12C4 16 4 26 8 30C10 32 14 32 16 30C18 28 18 24 16 22C14 20 10 20 8 25ZM22 25C22 25 22 18 28 14L26 12C18 16 18 26 22 30C24 32 28 32 30 30C32 28 32 24 30 22C28 20 24 20 22 25Z" />
              </svg>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 16 16" fill="var(--color-accent-pink)" strokeWidth="0">
                    <path d="M8 1.2L9.8 5.7L14.8 6.1L11.1 9.2L12.3 14L8 11.4L3.7 14L4.9 9.2L1.2 6.1L6.2 5.7Z" />
                  </svg>
                ))}
              </div>

              <p className="mb-8 text-base italic leading-relaxed text-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-pink text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs italic text-text-muted">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
