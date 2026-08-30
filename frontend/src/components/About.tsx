import { about } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const toneClass: Record<string, string> = {
  cobalt: "text-cobalt-soft",
  ivory: "text-ivory",
  rose: "text-rose",
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span
              data-testid="section-label-01"
              className="shrink-0 font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft"
            >
              01 / About
            </span>
            <span className="h-px flex-1 bg-line/70" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="max-w-5xl font-display text-[clamp(1.9rem,4.6vw,3.7rem)] leading-[1.08] tracking-tight text-mist">
            {about.statement.map((line) => (
              <span key={line.accent} className="block">
                {line.text}
                <em className={`${toneClass[line.tone]} not-italic lg:italic`}>{line.accent}</em>.
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.25em] text-faint">
              Analytics × Technology
              <br />× Business problem-solving
            </p>
          </Reveal>
          <Reveal delay={0.18} className="lg:col-span-7 lg:col-start-6">
            <p data-testid="about-copy" className="text-base leading-relaxed text-mist lg:text-lg">
              {about.copy}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
