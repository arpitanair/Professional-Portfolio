import { useState } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function CertImage({ src, name, testId }: { src: string; name: string; testId: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        data-testid={testId}
        className="grid aspect-[16/9] w-full place-items-center overflow-hidden border border-dashed border-line/80 bg-ink/60 p-4 text-center"
      >
        <div className="min-w-0">
          <Award className="mx-auto mb-2 h-4 w-4 text-faint" aria-hidden="true" />
          <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-faint">
            Certificate image
            <br />
            <span className="break-all normal-case tracking-normal text-faint/70">add file: {src}</span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`${name} certificate`}
      data-testid={testId}
      onError={() => setFailed(true)}
      loading="lazy"
      className="aspect-[16/9] w-full object-cover"
    />
  );
}

export function Learning() {
  return (
    <section id="learning" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="06" label="Learning Log" title="CONTINUOUS LEARNING" />
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <article
                data-testid={`certificate-${i}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line/60 bg-surface/40 transition-colors duration-300 hover:border-cobalt/40"
              >
                <CertImage src={c.image} name={c.name} testId={`certificate-${i}-image`} />
                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    <span className="text-cobalt-soft">{c.completion}</span>
                    <span aria-hidden="true">/</span>
                    <span>{c.category}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-ivory">{c.name}</h3>
                  <p className="mt-2 text-sm text-mist">{c.issuer}</p>
                  <div className="mt-auto pt-6">
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`certificate-${i}-credential`}
                        className="underline-grow inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist hover:text-ivory"
                      >
                        View Credential <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <span
                        data-testid={`certificate-${i}-credential`}
                        className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint"
                      >
                        [add credential link]
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
