import { MapPin, Phone, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Get in Touch" subtitle="Contact Us" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush">
                <MapPin className="h-6 w-6 text-rose-gold" />
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
                  className="mt-2 inline-block text-sm font-semibold text-rose-gold hover:text-rose-gold-light"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush">
                <Phone className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-charcoal">
                  Phone
                </h3>
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="text-warm-gray transition-colors hover:text-rose-gold"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush">
                <Clock className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-charcoal">
                  Business Hours
                </h3>
                <div className="space-y-1">
                  {CONTACT_INFO.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between gap-4 text-warm-gray"
                    >
                      <span>{h.days}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "font-semibold text-rose-gold"
                            : ""
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
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d-112.185!3d33.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6f9a3e8b7b1b%3A0x0!2zNTkzMCBXIEdyZWVud2F5IEF2ZQ!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
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
