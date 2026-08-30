import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { RuleReveal } from "./RuleReveal";
import { SectionHeading } from "./SectionHeading";

type Certificate = (typeof certificates)[number];

function CertificationItem({ cert, index }: { cert: Certificate; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <article
        data-testid={`certificate-${index}`}
        className="group relative grid gap-6 py-7 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-10"
      >
        <RuleReveal />
        <div className="lg:col-span-2">
          <span
            aria-hidden="true"
            className="select-none font-display text-4xl leading-none text-surface transition-colors duration-300 group-hover:text-cobalt/30 lg:text-6xl"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
            <span className="text-cobalt-soft">{cert.completion}</span>
            <span aria-hidden="true">/</span>
            <span>{cert.issuer}</span>
          </div>
          <h3 className="mt-3 max-w-2xl font-display text-2xl leading-snug text-ivory transition-transform duration-300 group-hover:translate-x-1">
            {cert.name}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {cert.topics.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-mist"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {cert.credentialUrl && (
          <div className="lg:col-span-3 lg:pt-2 lg:text-right">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              data-testid={`certificate-${index}-credential`}
              className="underline-grow inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors duration-300 hover:text-ivory"
            >
              View Credential <ArrowUpRight size={12} />
            </a>
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function Learning() {
  return (
    <section id="certifications" className="scroll-mt-24 border-t border-line/50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="06" label="Certifications" title="CONTINUOUS LEARNING" />
        <div className="border-b border-line/50">
          {certificates.map((c, i) => (
            <CertificationItem key={c.name} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
