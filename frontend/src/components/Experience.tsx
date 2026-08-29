import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillTag } from "./SkillTag";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="05" label="Professional Exposure" title="APPLIED ANALYTICS IN PRACTICE" />
        <Reveal>
          <article
            data-testid="experience-deloitte"
            className="grid gap-10 rounded-xl border border-line/60 bg-surface/40 p-8 lg:grid-cols-12 lg:p-12"
          >
            <div className="lg:col-span-4">
              <span className="inline-block rounded-full border border-cobalt/40 bg-cobalt/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-cobalt-soft">
                {experience.kind}
              </span>
              <h3 className="mt-5 font-display text-3xl leading-tight text-ivory">
                {experience.title}
              </h3>
              <div className="mt-4 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                <p>{experience.provider}</p>
                <p>{experience.duration}</p>
                <p>{experience.focus}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-sm leading-relaxed text-mist lg:text-base">
                {experience.description}
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {experience.tasks.map((t) => (
                  <div key={t.label} className="border-l border-cobalt/50 pl-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                      {t.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{t.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {experience.skills.map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
