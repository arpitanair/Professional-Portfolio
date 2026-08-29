import { BookOpen, FolderGit2, LineChart } from "lucide-react";
import { beyond } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const icons = [FolderGit2, BookOpen, LineChart];

export function BeyondClassroom() {
  return (
    <section aria-label="Beyond the classroom" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 flex items-center gap-4">
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft">
              Beyond the Classroom
            </span>
            <span className="h-px flex-1 bg-line/70" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {beyond.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={b.title} delay={i * 0.07}>
                <div
                  data-testid={`beyond-card-${i}`}
                  className="h-full rounded-xl border border-line/60 bg-surface/40 p-7 transition-colors duration-300 hover:border-cobalt/40 lg:p-8"
                >
                  <Icon size={18} className="text-cobalt-soft" aria-hidden="true" />
                  <h3 className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-ivory">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
