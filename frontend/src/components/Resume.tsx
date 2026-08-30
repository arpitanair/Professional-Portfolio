import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const meta = [
  { label: "Format", value: "PDF" },
  { label: "File", value: profile.resumeFileName },
  { label: "Focus", value: "Data · Analytics · Business" },
];

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 border-t border-line/50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading index="07" label="Resume" title="RESUME / CV" />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-xl text-base leading-relaxed text-mist lg:text-lg">
                A complete overview of my academic background, technical toolkit, projects and
                professional learning — prepared for recruiters, mentors and collaborators.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="resume-view-btn"
                    className="group inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-cobalt-soft hover:text-ink"
                  >
                    View Resume
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </Magnetic>
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  data-testid="resume-download-btn"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt-soft"
                >
                  Download Resume
                  <Download
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-4 lg:col-start-9">
            <dl data-testid="resume-meta" className="border-b border-line/50">
              {meta.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between gap-6 border-t border-line/50 py-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    {m.label}
                  </dt>
                  <dd className="text-right font-mono text-[11px] tracking-[0.1em] text-mist">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
