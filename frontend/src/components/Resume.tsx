import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ResumePreview() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        data-testid="resume-preview"
        className="grid aspect-[1/1.3] w-full place-items-center bg-ink/70 p-6 text-center"
      >
        <div>
          <FileText className="mx-auto mb-3 h-6 w-6 text-faint" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-faint">
            {profile.resumeFileName}
            <br />
            <span className="normal-case tracking-normal text-faint/70">
              add preview: /assets/resume-preview.png
            </span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <img
      src="/assets/resume-preview.png"
      alt="First page preview of Arpita Nair's resume"
      data-testid="resume-preview"
      onError={() => setFailed(true)}
      loading="lazy"
      className="aspect-[1/1.3] w-full object-cover object-top"
    />
  );
}

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="08"
              label="Resume"
              title="MY RESUME"
              description="A concise overview of my education, technical skills, projects and professional learning."
            />
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="resume-view-btn"
                  className="group inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-cobalt-soft hover:text-ink"
                >
                  View CV
                  <ExternalLink size={13} />
                </a>
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  data-testid="resume-download-btn"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt-soft"
                >
                  Download CV
                  <Download size={13} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                File: {profile.resumeUrl} — replace to update
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="resume-preview-link"
              aria-label="Open resume PDF in a new tab"
              className="group mx-auto block max-w-sm"
            >
              <div className="rotate-2 overflow-hidden rounded-lg border border-line/70 bg-surface shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:rotate-0">
                <div className="flex items-center gap-2 border-b border-line/60 px-4 py-2.5">
                  <FileText size={12} className="text-cobalt-soft" aria-hidden="true" />
                  <span className="font-mono text-[10px] tracking-wider text-faint">
                    {profile.resumeFileName}
                  </span>
                </div>
                <ResumePreview />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
