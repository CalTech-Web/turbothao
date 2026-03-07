import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-primary py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(198,137,138,0.04),transparent_60%)]" />

      {/* Decorative accents */}
      <svg className="absolute top-20 left-10 opacity-[0.04] animate-pulse-soft" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 3L23 17L37 20L23 23L20 37L17 23L3 20L17 17Z" fill="var(--color-rose-gold)" />
      </svg>
      <svg className="absolute bottom-16 right-12 opacity-[0.04] animate-pulse-soft" width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ animationDelay: '2s' }}>
        <path d="M15 2L17 13L28 15L17 17L15 28L13 17L2 15L13 13Z" fill="var(--color-rose-gold)" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative border border-border bg-surface p-8 transition-all duration-500 hover:border-border-hover overflow-hidden"
            >
              {/* Quote mark */}
              <svg className="mb-6 h-8 w-8 text-rose-gold/15" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 25C8 25 8 18 14 14" />
                <path d="M14 14C10 18 8 22 8 25C8 28 10 30 13 30C16 30 18 28 18 25C18 22 16 20 13 20" />
                <path d="M22 25C22 25 22 18 28 14" />
                <path d="M28 14C24 18 22 22 22 25C22 28 24 30 27 30C30 30 32 28 32 25C32 22 30 20 27 20" />
              </svg>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="var(--color-gold)" strokeWidth="0">
                    <path d="M8 1.2L9.8 5.7L14.8 6.1L11.1 9.2L12.3 14L8 11.4L3.7 14L4.9 9.2L1.2 6.1L6.2 5.7Z" />
                  </svg>
                ))}
              </div>

              <p className="mb-8 text-sm leading-relaxed text-text-secondary italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-rose-gold/20 font-heading text-xs text-rose-gold/70">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-sm tracking-[0.05em] text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] tracking-wider text-text-muted uppercase">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
