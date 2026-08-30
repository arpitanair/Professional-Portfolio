import { ArrowDown } from "lucide-react";
import { direction } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Direction() {
  return (
    <section id="direction" className="scroll-mt-24 border-t border-line/50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-line/70" aria-hidden="true" />
            <span
              data-testid="section-label-direction"
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft"
            >
              Direction
            </span>
            <span className="h-px w-12 bg-line/70" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mx-auto mt-4 flex max-w-md flex-col items-center gap-3">
          {direction.flow.map((word, i) => (
            <Reveal key={word} delay={i * 0.12}>
              <div className="flex flex-col items-center gap-3">
                {i > 0 && (
                  <ArrowDown size={16} className="text-faint" aria-hidden="true" />
                )}
                <span
                  className={`font-mono uppercase tracking-[0.4em] ${
                    i === direction.flow.length - 1
                      ? "text-sm text-cobalt-soft lg:text-base"
                      : "text-xs text-mist lg:text-sm"
                  }`}
                >
                  {word}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <h2 className="mx-auto mt-12 max-w-5xl font-display text-[clamp(1.7rem,4vw,3.2rem)] leading-[1.12] tracking-tight text-ivory">
            {direction.statement}
          </h2>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-mist lg:text-base">
            {direction.copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
