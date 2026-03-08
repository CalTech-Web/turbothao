interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  scriptText?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  scriptText,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {scriptText && (
        <p className="font-script text-5xl text-accent-pink md:text-7xl">{scriptText}</p>
      )}
      {subtitle && (
        <p className="mb-3 text-sm italic tracking-wide text-accent-pink">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`mt-6 flex items-center gap-4 ${centered ? "justify-center" : "justify-start"}`}>
        <div className="h-px w-12 bg-accent-pink/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent-pink/40" />
        <div className="h-px w-12 bg-accent-pink/30" />
      </div>
    </div>
  );
}
