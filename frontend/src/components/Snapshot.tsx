import { snapshot } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Snapshot() {
  return (
    <section aria-label="Professional snapshot" className="border-y border-line/60 bg-surface/40">
      <div
        data-testid="snapshot-grid"
        className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line/50 md:grid-cols-3 lg:grid-cols-5"
      >
        {snapshot.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-ink">
            <div className="flex h-full flex-col gap-3 p-6 lg:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                {s.label}
              </span>
              <span
                className={`text-sm font-medium leading-snug lg:text-base ${
                  s.highlight ? "font-display text-2xl text-cobalt-soft lg:text-3xl" : "text-ivory"
                }`}
              >
                {s.value}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
