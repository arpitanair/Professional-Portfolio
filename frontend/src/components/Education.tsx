import { education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="02" label="Education" title="ACADEMIC FOUNDATION" />
        <div>
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.05}>
              <article
                data-testid={`education-item-${i}`}
                className="group grid gap-6 border-t border-line/60 py-10 transition-colors duration-500 last:border-b hover:border-cobalt/40 md:grid-cols-12 md:gap-8 lg:py-14"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-sm tracking-[0.2em] text-cobalt-soft">
                    {e.years}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-2xl leading-snug text-ivory lg:text-3xl">
                    {e.institution}
                  </h3>
                  <div className="mt-3 space-y-1">
                    {e.lines.map((l) => (
                      <p key={l} className="text-sm text-mist lg:text-base">
                        {l}
                      </p>
                    ))}
                  </div>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    {e.location}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    {e.scoreLabel}
                  </p>
                  <p className="mt-2 font-display text-4xl text-ivory transition-colors duration-500 group-hover:text-cobalt-soft lg:text-5xl">
                    {e.score}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
