import { CONTACT_INFO } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Get in Touch" subtitle="Contact Us" scriptText="contact" />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="group flex items-start gap-5 rounded-2xl bg-white p-7 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-pink/10">
                <svg className="h-5 w-5 text-accent-pink" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 font-heading text-base font-bold text-text-primary">
                  Our Location
                </h3>
                <p className="text-sm italic text-text-secondary">{CONTACT_INFO.address}</p>
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent-pink hover:text-accent-pink-light transition-colors"
                >
                  Get Directions
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 6H10M7 3L10 6L7 9" /></svg>
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-5 rounded-2xl bg-white p-7 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-pink/10">
                <svg className="h-5 w-5 text-accent-pink" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.68 21 20.36 21 20 21C10.61 21 3 13.39 3 4C3 3.64 3 3.32 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.35 8.05 2.82C8.14 3.36 8.3 3.88 8.52 4.37L6.91 5.98C8.52 8.96 11.04 11.48 14.02 13.09L15.63 11.48C16.12 11.7 16.64 11.86 17.18 11.95C17.65 12.03 18 12.44 18 12.92V16.92" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 font-heading text-base font-bold text-text-primary">
                  Phone
                </h3>
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="text-sm italic text-text-secondary transition-colors hover:text-accent-pink"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-5 rounded-2xl bg-white p-7 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-pink/10">
                <svg className="h-5 w-5 text-accent-pink" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6V12L16 14" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 font-heading text-base font-bold text-text-primary">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {CONTACT_INFO.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-6 text-sm">
                      <span className="italic text-text-secondary">{h.days}</span>
                      <span className={h.time === "Closed" ? "font-medium text-accent-pink" : "text-text-primary"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
