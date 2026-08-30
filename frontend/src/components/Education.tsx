import { education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { RuleReveal } from "./RuleReveal";
import { SectionHeading } from "./SectionHeading";

type EducationEntry = (typeof education)[number];

function EducationItem({ entry, index }: { entry: EducationEntry; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <article
        data-testid={`education-item-${index}`}
        className="group relative grid gap-6 py-7 md:grid-cols-12 md:gap-8 lg:py-10"
      >
        <RuleReveal />
        <div className="md:col-span-3">
          <span className="font-mono text-sm tracking-[0.2em] text-cobalt-soft">
            {entry.years}
          </span>
        </div>
        <div className="md:col-span-6">
          <h3 className="font-display text-2xl leading-snug text-ivory transition-transform duration-500 group-hover:translate-x-1">
            {entry.institution}
          </h3>
          <div className="mt-3 space-y-1">
            {entry.lines.map((l) => (
              <p key={l} className="text-sm text-mist lg:text-base">
                {l}
              </p>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            {entry.location}
          </p>
        </div>
        <div className="md:col-span-3 md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
            {entry.scoreLabel}
          </p>
          <p className="mt-2 font-display text-3xl text-ivory transition-colors duration-500 group-hover:text-cobalt-soft lg:text-4xl">
            {entry.score}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-line/50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="02" label="Education" title="ACADEMIC FOUNDATION" />
        <div className="border-b border-line/50">
          {education.map((e, i) => (
            <EducationItem key={e.institution} entry={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
