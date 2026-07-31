interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-balance text-muted">{description}</p>
      )}
    </div>
  );
}
