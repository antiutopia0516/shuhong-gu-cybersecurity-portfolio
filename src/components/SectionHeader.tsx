type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyanSignal">{eyebrow}</p> : null}
      <h1 className="text-3xl font-semibold tracking-normal text-white md:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">{description}</p> : null}
    </div>
  );
}
