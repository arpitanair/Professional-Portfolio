import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14 lg:mb-20">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span
            data-testid={`section-label-${index}`}
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft"
          >
            {index} / {label}
          </span>
          <span className="h-px flex-1 bg-line/70" aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist lg:text-base">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
