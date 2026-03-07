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
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-rose-gold">
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
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-rose-gold" />
    </div>
  );
}
