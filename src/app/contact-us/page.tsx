import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | TurboThao Nails and Spa",
  description: "Get in touch with TurboThao Nails and Spa in Glendale, AZ.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden pt-[80px]">
        <Image
          src="/images/heroes/contact-us.jpg"
          alt="Contact TurboThao Nails and Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg italic text-white/80">We&apos;d love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-primary-soft p-8">
                <h3 className="font-heading text-xl font-bold text-text-primary">Our Location</h3>
                <p className="mt-3 text-base italic text-text-secondary">{CONTACT_INFO.address}</p>
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-pink hover:text-accent-pink-light transition-colors"
                >
                  Get Directions
                  <svg className="h-4 w-4" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 6H10M7 3L10 6L7 9" /></svg>
                </a>
              </div>

              <div className="rounded-2xl bg-primary-soft p-8">
                <h3 className="font-heading text-xl font-bold text-text-primary">Phone</h3>
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="mt-3 block text-base italic text-text-secondary transition-colors hover:text-accent-pink"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="rounded-2xl bg-primary-soft p-8">
                <h3 className="font-heading text-xl font-bold text-text-primary">Email</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="mt-3 block text-base italic text-text-secondary transition-colors hover:text-accent-pink"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="rounded-2xl bg-primary-soft p-8">
                <h3 className="font-heading text-xl font-bold text-text-primary">Business Hours</h3>
                <div className="mt-3 space-y-2">
                  {CONTACT_INFO.hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-base">
                      <span className="italic text-text-secondary">{h.days}</span>
                      <span className={h.time === "Closed" ? "font-medium text-accent-pink" : "text-text-primary"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form + Map */}
            <div className="space-y-8">
              <ContactForm />
              <div className="overflow-hidden rounded-2xl shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.7!2d-112.185!3d33.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5930+W+Greenway+Ave+Suite+9+Glendale+AZ+85306!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TurboThao Nails and Spa Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
