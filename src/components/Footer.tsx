import { BUSINESS_INFO, CONTACT_INFO, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-sm tracking-[0.15em] uppercase text-text-primary">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs leading-relaxed text-text-muted">
              Located in Glendale, AZ, TurboThao Nails and Spa offers expert
              nail care, waxing, and rejuvenating spa treatments tailored to
              your needs.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-xs tracking-[0.15em] uppercase text-text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-text-muted transition-colors hover:text-rose-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-xs tracking-[0.15em] uppercase text-text-primary">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs text-text-muted">
              <p>{CONTACT_INFO.address}</p>
              <a
                href={CONTACT_INFO.phoneLink}
                className="block transition-colors hover:text-rose-gold"
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

      <div className="border-t border-border py-6">
        <p className="text-center text-[10px] tracking-[0.2em] uppercase text-text-muted">
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
