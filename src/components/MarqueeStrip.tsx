const items = [
  "Nail Art",
  "Manicure & Pedicure",
  "Eyelash Extensions",
  "Waxing Services",
  "Spa Treatments",
  "Gel Manicure",
  "Nail Enhancements",
  "Eyebrow Tinting",
  "Hot Stone Add-Ons",
  "Callus Removal",
];

const Diamond = () => (
  <svg
    className="mx-5 h-2.5 w-2.5 shrink-0 text-white/40"
    viewBox="0 0 10 10"
    fill="currentColor"
  >
    <polygon points="5,0 10,5 5,10 0,5" />
  </svg>
);

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden bg-accent-pink py-3.5">
      <div className="flex animate-marquee w-max items-center">
        {repeated.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              {item}
            </span>
            <Diamond />
          </div>
        ))}
      </div>
    </div>
  );
}
