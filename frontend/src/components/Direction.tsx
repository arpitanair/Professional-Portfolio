import { ArrowDown } from "lucide-react";
import { direction } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Direction() {
  return (
    <section id="direction" className="scroll-mt-24 border-t border-line/50 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <p
            data-testid="section-label-07"
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft"
          >
            07 / Direction
          </p>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-3">
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
          <h2 className="mx-auto mt-20 max-w-5xl font-display text-[clamp(1.9rem,4.6vw,3.8rem)] leading-[1.12] tracking-tight text-ivory">
            {direction.statement}
          </h2>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-mist lg:text-base">
            {direction.copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
