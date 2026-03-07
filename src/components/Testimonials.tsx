import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="var(--color-gold-accent)" strokeWidth="0">
      <path d="M10 1.5L12.3 7.1L18.5 7.6L13.9 11.5L15.4 17.5L10 14.2L4.6 17.5L6.1 11.5L1.5 7.6L7.7 7.1Z" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 25C8 25 8 18 14 14" />
      <path d="M14 14C10 18 8 22 8 25C8 28 10 30 13 30C16 30 18 28 18 25C18 22 16 20 13 20" />
      <path d="M22 25C22 25 22 18 28 14" />
      <path d="M28 14C24 18 22 22 22 25C22 28 24 30 27 30C30 30 32 28 32 25C32 22 30 20 27 20" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-20 left-10 animate-pulse-soft opacity-60">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 3L23 17L37 20L23 23L20 37L17 23L3 20L17 17Z" fill="var(--color-rose-gold)" opacity="0.06" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 animate-pulse-soft opacity-60" style={{ animationDelay: '2s' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 2L17 13L28 15L17 17L15 28L13 17L2 15L13 13Z" fill="var(--color-rose-gold)" opacity="0.06" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl bg-white p-8 border border-rose-gold/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-rose-gold/15 overflow-hidden"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />

              {/* Background quote watermark */}
              <div className="absolute -bottom-2 -right-2 opacity-[0.03]">
                <QuoteIcon className="h-24 w-24" />
              </div>

              <div className="relative">
                <QuoteIcon className="mb-4 h-8 w-8 text-rose-gold/20" />

                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mb-8 leading-relaxed text-warm-gray italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-gold/10 font-heading text-sm font-semibold text-rose-gold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-lg font-semibold text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-warm-gray">Verified Client</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
