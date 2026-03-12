import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "5★", label: "Average Rating" },
  { value: "10+", label: "Years of Excellence" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
          scriptText="reviews"
        />

        {/* Social proof stats bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {STATS.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-heading text-2xl font-bold text-accent-pink">{stat.value}</span>
              <span className="text-sm italic text-text-muted">{stat.label}</span>
              {i < STATS.length - 1 && (
                <span className="ml-12 hidden h-4 w-px bg-accent-pink/20 sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group rounded-2xl bg-white p-8 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(242,4,115,0.08)]"
            >
              {/* Quote mark */}
              <svg className="mb-4 h-8 w-8 text-accent-pink/20 transition-colors duration-300 group-hover:text-accent-pink/30" viewBox="0 0 40 40" fill="currentColor">
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

              <p className="mb-6 text-base italic leading-relaxed text-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar with pink gradient border */}
                <div className="shrink-0 rounded-full bg-gradient-to-br from-[#f20473] to-[#f78172] p-[2px] shadow-sm transition-shadow duration-300 group-hover:shadow-[0_0_0_3px_rgba(242,4,115,0.15)]">
                  <div className="overflow-hidden rounded-full bg-white">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs italic text-text-muted">Verified Client</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
