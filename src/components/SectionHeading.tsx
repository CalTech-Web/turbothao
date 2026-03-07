interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className={`mb-3 text-xs font-medium tracking-[0.3em] uppercase ${light ? "text-white/50" : "text-rose-gold"}`}>
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading text-4xl font-semibold md:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-5 flex items-center gap-3 ${centered ? "justify-center" : "justify-start"}`}>
        <div className={`h-px w-10 ${light ? "bg-white/20" : "bg-rose-gold/20"}`} />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={light ? "text-white/30" : "text-rose-gold/30"}>
          <path d="M6 0.5L7.5 4.5L11.5 6L7.5 7.5L6 11.5L4.5 7.5L0.5 6L4.5 4.5Z" fill="currentColor" />
        </svg>
        <div className={`h-px w-10 ${light ? "bg-white/20" : "bg-rose-gold/20"}`} />
      </div>
    </div>
  );
}
