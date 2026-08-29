interface SkillTagProps {
  label: string;
}

export function SkillTag({ label }: SkillTagProps) {
  const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <span
      data-testid={`skill-tag-${slug}`}
      className="cursor-default rounded-md border border-line/70 bg-ink px-3 py-1.5 font-mono text-[11px] tracking-wide text-mist transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt-soft/60 hover:text-ivory"
    >
      {label}
    </span>
  );
}
