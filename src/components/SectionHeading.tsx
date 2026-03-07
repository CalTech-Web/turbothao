interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="mb-4 text-[10px] font-medium tracking-[0.4em] uppercase text-rose-gold/70">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl font-medium tracking-[0.04em] text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`mt-6 flex items-center gap-4 ${centered ? "justify-center" : "justify-start"}`}>
        <div className="h-px w-12 bg-rose-gold/20" />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0L5.2 2.8L8 4L5.2 5.2L4 8L2.8 5.2L0 4L2.8 2.8Z" fill="var(--color-rose-gold)" opacity="0.3" />
        </svg>
        <div className="h-px w-12 bg-rose-gold/20" />
      </div>
    </div>
  );
}
