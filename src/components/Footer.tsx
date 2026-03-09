import Link from "next/link";
import { BUSINESS_INFO, CONTACT_INFO, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      {/* Top Section - Beige */}
      <div className="bg-primary py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-heading text-lg font-bold text-text-primary">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-sm italic leading-relaxed text-text-secondary">
                Located in Glendale, AZ, TurboThao Nails and Spa offers expert
                nail care, waxing, and rejuvenating spa treatments tailored to
                your needs.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-heading text-base font-bold text-text-primary">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm italic text-text-secondary transition-colors hover:text-accent-pink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-heading text-base font-bold text-text-primary">
                Contact
              </h4>
              <div className="space-y-3 text-sm italic text-text-secondary">
                <p>{CONTACT_INFO.address}</p>
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="block transition-colors hover:text-accent-pink"
                >
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block transition-colors hover:text-accent-pink"
                >
                  {CONTACT_INFO.email}
                </a>
                <div className="pt-2">
                  {CONTACT_INFO.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Green Overlay */}
      <div className="bg-accent-green-overlay py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6">
          <p className="text-sm font-medium text-text-primary">Follow Us</p>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-text-primary transition-all hover:bg-accent-pink hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href={CONTACT_INFO.social.yelp} target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-text-primary transition-all hover:bg-accent-pink hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.46zm-3.624 5.96a1.073 1.073 0 01-1.54.395 9.194 9.194 0 01-2.78-2.907c-.515-.83.33-1.83 1.28-1.51l4.87 1.64a1.072 1.072 0 01.57 1.527l-2.4.855zm-5.42-1.09l1.248-5.07c.24-.98-1.04-1.59-1.65-.78L7.09 16.02a1.072 1.072 0 00.33 1.572 9.194 9.194 0 003.69 1.322 1.073 1.073 0 001.007-1.45zM10.57 3.96a1.073 1.073 0 00-1.273.848L7.78 12.06c-.2.99.96 1.64 1.66.93l3.56-3.78c.69-.73.06-1.88-.86-1.76l.43-3.49z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="bg-primary py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <p className="text-sm italic text-text-muted">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </p>
          <p className="text-sm italic text-text-muted">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-pink transition-colors hover:text-accent-pink-light"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
