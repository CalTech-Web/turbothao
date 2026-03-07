import { BUSINESS_INFO, CONTACT_INFO, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-deep-plum text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-2xl font-bold">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Located in Glendale, AZ, TurboThao Nails and Spa offers expert
              nail care, waxing, and rejuvenating spa treatments tailored to
              your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-rose-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Contact</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>{CONTACT_INFO.address}</p>
              <a
                href={CONTACT_INFO.phoneLink}
                className="block transition-colors hover:text-rose-gold-light"
              >
                {CONTACT_INFO.phone}
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
