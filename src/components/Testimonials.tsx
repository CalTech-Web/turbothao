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
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 25C8 25 8 18 14 14" />
      <path d="M14 14C10 18 8 22 8 25C8 28 10 30 13 30C16 30 18 28 18 25C18 22 16 20 13 20" />
      <path d="M22 25C22 25 22 18 28 14" />
      <path d="M28 14C24 18 22 22 22 25C22 28 24 30 27 30C30 30 32 28 32 25C32 22 30 20 27 20" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-blush/50 py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 animate-pulse-soft">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.06">
          <path d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25Z" fill="var(--color-rose-gold)" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse-soft" style={{ animationDelay: '2s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.06">
          <path d="M20 2L23 17L38 20L23 23L20 38L17 23L2 20L17 17Z" fill="var(--color-rose-gold)" />
        </svg>
      </div>

      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full rotate-180">
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 15 1440 30V60H0V30Z" fill="var(--color-soft-white)" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden"
            >
              {/* Accent gradient top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-gold via-gold-accent to-rose-gold-light" />

              {/* Background quote watermark */}
              <div className="absolute -bottom-2 -right-2 opacity-[0.04]">
                <QuoteIcon className="h-24 w-24" />
              </div>

              <div className="relative">
                <QuoteIcon className="mb-4 h-10 w-10 text-rose-gold/25" />

                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>

                <p className="mb-6 leading-relaxed text-warm-gray italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-gold to-rose-gold-light text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-charcoal">
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
