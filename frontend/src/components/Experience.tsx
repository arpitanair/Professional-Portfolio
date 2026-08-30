import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { RuleReveal } from "./RuleReveal";
import { SectionHeading } from "./SectionHeading";
import { SkillTag } from "./SkillTag";

function ExperienceItem({ item }: { item: typeof experience }) {
  return (
    <article
      data-testid="experience-deloitte"
      className="relative grid gap-8 py-8 lg:grid-cols-12 lg:gap-14 lg:py-12"
    >
      <RuleReveal />
      <Reveal className="lg:col-span-4">
        <span className="inline-block rounded-full border border-cobalt/40 bg-cobalt/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-cobalt-soft">
          {item.kind}
        </span>
        <h3 className="mt-5 font-display text-3xl leading-tight text-ivory">{item.title}</h3>
        <div className="mt-4 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          <p>{item.provider}</p>
          <p>{item.duration}</p>
          <p>{item.focus}</p>
        </div>
      </Reveal>
      <Reveal delay={0.08} className="lg:col-span-8 lg:border-l lg:border-line/50 lg:pl-16">
        <p className="max-w-2xl text-sm leading-relaxed text-mist lg:text-base">
          {item.description}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {item.tasks.map((t) => (
            <div key={t.label} className="border-l border-cobalt/50 pl-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                {t.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <SkillTag key={s} label={s} />
          ))}
        </div>
      </Reveal>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line/50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="05"
          label="Experience"
          title="APPLIED ANALYTICS IN PRACTICE"
        />
        <div className="border-b border-line/50">
          <ExperienceItem item={experience} />
        </div>
      </div>
    </section>
  );
}
