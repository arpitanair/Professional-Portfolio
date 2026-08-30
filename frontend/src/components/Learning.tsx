import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Learning() {
  return (
    <section id="learning" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="06" label="Learning Log" title="CONTINUOUS LEARNING" />
        <div className="border-b border-line/50">
          {certificates.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <article
                data-testid={`certificate-${i}`}
                className="group relative grid gap-6 border-t border-line/50 py-10 transition-colors duration-300 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-14"
              >
                <div className="lg:col-span-2">
                  <span
                    aria-hidden="true"
                    className="select-none font-display text-5xl leading-none text-surface transition-colors duration-300 group-hover:text-cobalt/30 lg:text-7xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    <span className="text-cobalt-soft">{c.completion}</span>
                    <span aria-hidden="true">/</span>
                    <span>{c.issuer}</span>
                  </div>
                  <h3 className="mt-4 max-w-2xl font-display text-2xl leading-snug text-ivory transition-transform duration-300 group-hover:translate-x-1 lg:text-3xl">
                    {c.name}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-mist"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {c.credentialUrl && (
                  <div className="lg:col-span-3 lg:pt-2 lg:text-right">
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`certificate-${i}-credential`}
                      className="underline-grow inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors duration-300 hover:text-ivory"
                    >
                      View Credential <ArrowUpRight size={12} />
                    </a>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
