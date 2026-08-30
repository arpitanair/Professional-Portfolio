import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { RuleReveal } from "./RuleReveal";
import { SectionHeading } from "./SectionHeading";
import { SkillTag } from "./SkillTag";

function SkillGroupRow({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string[];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04}>
      <div
        data-testid={`skill-group-${index}`}
        className="group relative grid gap-5 py-6 md:grid-cols-12 md:items-baseline md:gap-8 lg:py-8"
      >
        <RuleReveal />
        <span className="font-mono text-[11px] tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-cobalt-soft md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-2xl leading-snug text-ivory transition-transform duration-300 group-hover:translate-x-1 md:col-span-4">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 md:col-span-7">
          {skills.map((s) => (
            <SkillTag key={s} label={s} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line/50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="Toolkit"
          title="SKILLS & TOOLKIT"
          description="A modular view of the tools and disciplines I work with — organized by craft, not by percentages."
        />
        <div data-testid="skills-list" className="border-b border-line/50">
          {skillGroups.map((g, gi) => (
            <SkillGroupRow key={g.title} title={g.title} skills={g.skills} index={gi} />
          ))}
        </div>
      </div>
    </section>
  );
}
