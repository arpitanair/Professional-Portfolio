import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillTag } from "./SkillTag";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="Capabilities"
          title="SKILLS & TOOLKIT"
          description="A modular view of the tools and disciplines I work with — organized by craft, not by percentages."
        />
        <div data-testid="skills-grid" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.05}>
              <div
                data-testid={`skill-group-${gi}`}
                className="h-full rounded-xl border border-line/60 bg-surface/50 p-6 transition-colors duration-300 hover:border-cobalt/50 lg:p-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                  {g.title}
                </span>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <SkillTag key={s} label={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
