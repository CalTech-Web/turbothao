import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function NailPolishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="4" width="12" height="8" rx="2" />
      <path d="M20 12L18 38C18 40 20 42 24 42C28 42 30 40 30 38L28 12" />
      <path d="M22 20L26 20" opacity="0.3" />
      <path d="M21 28L27 28" opacity="0.2" />
    </svg>
  );
}

function WaxStripIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8C14 8 16 4 24 4C32 4 34 8 34 8L36 20L12 20Z" />
      <path d="M12 20L10 36C10 40 16 44 24 44C32 44 38 40 38 36L36 20" />
      <path d="M18 30L30 30" opacity="0.2" />
    </svg>
  );
}

function LashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="28" rx="16" ry="10" />
      <circle cx="24" cy="28" r="5" />
      <circle cx="24" cy="28" r="2" fill="currentColor" opacity="0.15" />
      <path d="M10 24C8 18 10 12 12 10" />
      <path d="M14 22C13 16 14 10 17 7" />
      <path d="M18 20C18 14 20 8 22 6" />
      <path d="M24 18C24 12 25 6 26 5" />
      <path d="M30 20C30 14 28 8 26 6" />
      <path d="M34 22C35 16 34 10 31 7" />
      <path d="M38 24C40 18 38 12 36 10" />
    </svg>
  );
}

function DiamondHandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 44L16 24C16 20 18 16 24 16C30 16 32 20 32 24L32 44" />
      <path d="M24 4L28 10L24 16L20 10Z" />
      <path d="M20 10L28 10" opacity="0.3" />
    </svg>
  );
}

const iconMap = {
  paintbrush: NailPolishIcon,
  scissors: WaxStripIcon,
  eye: LashIcon,
  heart: DiamondHandIcon,
};

export default function Services() {
  return (
    <section id="services" className="bg-primary py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What We Do"
          subtitle="Exceptional Beauty, Tailored for You"
          scriptText="our lounge"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-[0_6px_15px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-pink/10 transition-all duration-500 group-hover:bg-accent-pink/20">
                  <Icon className="h-7 w-7 text-accent-pink" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm italic leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-accent-pink px-10 py-4 text-sm font-medium text-white shadow-[2px_2px_5px_0px_rgba(21,63,33,0.2)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_15px_25px_-7px_rgba(0,0,0,0.1)]"
          >
            Request An Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
