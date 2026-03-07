import { CONTACT_INFO } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.68 21 20.36 21 20 21C10.61 21 3 13.39 3 4C3 3.64 3 3.32 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.35 8.05 2.82C8.14 3.36 8.3 3.88 8.52 4.37L6.91 5.98C8.52 8.96 11.04 11.48 14.02 13.09L15.63 11.48C16.12 11.7 16.64 11.86 17.18 11.95C17.65 12.03 18 12.44 18 12.92V16.92" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6V12L16 14" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
      <div className="absolute top-10 right-10 opacity-[0.04]">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="var(--color-rose-gold)" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="var(--color-rose-gold)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading title="Get in Touch" subtitle="Contact Us" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-champagne/50 transition-all group-hover:from-rose-gold/10 group-hover:to-rose-gold/5">
                <MapPinIcon className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-charcoal">
                  Our Location
                </h3>
                <p className="text-warm-gray">{CONTACT_INFO.address}</p>
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-rose-gold hover:text-rose-gold-light transition-colors"
                >
                  Get Directions
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8H13M9 4L13 8L9 12" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-champagne/50 transition-all group-hover:from-rose-gold/10 group-hover:to-rose-gold/5">
                <PhoneIcon className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-charcoal">
                  Phone
                </h3>
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="text-lg text-warm-gray transition-colors hover:text-rose-gold"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-champagne/50 transition-all group-hover:from-rose-gold/10 group-hover:to-rose-gold/5">
                <ClockIcon className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-charcoal">
                  Business Hours
                </h3>
                <div className="space-y-2 mt-2">
                  {CONTACT_INFO.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between gap-4 text-warm-gray"
                    >
                      <span className="font-medium">{h.days}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "font-semibold text-rose-gold"
                            : "text-charcoal"
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-rose-gold/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d-112.185!3d33.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6f9a3e8b7b1b%3A0x0!2zNTkzMCBXIEdyZWVud2F5IEF2ZQ!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TurboThao Nails and Spa Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
