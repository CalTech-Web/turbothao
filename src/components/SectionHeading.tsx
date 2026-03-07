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
        <p className={`mb-3 text-sm font-semibold tracking-[0.25em] uppercase ${light ? "text-white/60" : "text-rose-gold"}`}>
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {/* Decorative divider */}
      <div className={`mt-5 flex items-center justify-center gap-3 ${centered ? "" : "justify-start"}`}>
        <div className={`h-px w-8 ${light ? "bg-white/30" : "bg-rose-gold/30"}`} />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={light ? "text-white/40" : "text-rose-gold/50"}>
          <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5Z" fill="currentColor" />
        </svg>
        <div className={`h-px w-8 ${light ? "bg-white/30" : "bg-rose-gold/30"}`} />
      </div>
    </div>
  );
}
