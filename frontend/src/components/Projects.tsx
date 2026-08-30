import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { RuleReveal } from "./RuleReveal";
import { SectionHeading } from "./SectionHeading";
import { SkillTag } from "./SkillTag";

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l border-line/70 pl-5 lg:pl-6">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
        {label}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-mist lg:text-base">{text}</p>
    </div>
  );
}

function ProjectCaseStudy({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [50, -50]);

  const liveLinks = project.links.filter((l) => l.href);

  return (
    <article
      ref={ref}
      data-testid={`project-${project.id}`}
      className="relative py-16 lg:py-24"
    >
      <RuleReveal />
      <motion.span
        aria-hidden="true"
        style={{ y: numberY }}
        className={`pointer-events-none absolute -top-4 select-none font-display text-[7rem] leading-none text-surface sm:text-[10rem] lg:-top-10 lg:text-[17rem] ${
          flip ? "left-0" : "right-0"
        }`}
      >
        {project.number}
      </motion.span>

      <div className="relative">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
            <span className="text-cobalt-soft">{project.date}</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
          </div>
          <h3 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-6xl">
            {project.name}
          </h3>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-mist lg:text-lg lg:leading-relaxed">
            {project.tagline}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal
            delay={0.08}
            className={`lg:col-span-4 lg:self-start ${flip ? "lg:order-2" : ""}`}
          >
            <div className="flex flex-col gap-10 lg:sticky lg:top-28">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                  Technology Stack
                </h4>
                <div
                  data-testid={`project-${project.id}-stack`}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.stack.map((s) => (
                    <SkillTag key={s} label={s} />
                  ))}
                </div>
              </div>

              {project.stats.length > 0 && (
                <div data-testid={`project-${project.id}-stats`}>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                    Dataset At A Glance
                  </h4>
                  <dl className="mt-4">
                    {project.stats.map((st) => (
                      <div
                        key={st.label}
                        className="flex items-baseline justify-between gap-4 border-b border-line/50 py-3 first:border-t"
                      >
                        <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                          {st.label}
                        </dt>
                        <dd className="font-display text-xl text-cobalt-soft lg:text-2xl">
                          {st.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {liveLinks.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {liveLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href!}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`project-${project.id}-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-cobalt/60 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt-soft hover:bg-cobalt/15"
                    >
                      {l.label}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <div
            className={`space-y-10 lg:col-span-8 ${
              flip
                ? "lg:order-1 lg:border-r lg:border-line/50 lg:pr-16"
                : "lg:border-l lg:border-line/50 lg:pl-16"
            }`}
          >
            <Reveal delay={0.1}>
              <CaseBlock label="Purpose" text={project.problem} />
            </Reveal>
            <Reveal delay={0.12}>
              <CaseBlock label="What I Built" text={project.built} />
            </Reveal>
            <Reveal delay={0.14}>
              <div className="border-l border-line/70 pl-5 lg:pl-6">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                  Core Features
                </h4>
                <ul
                  data-testid={`project-${project.id}-features`}
                  className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2"
                >
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist">
                      <Plus size={13} className="mt-1 shrink-0 text-cobalt-soft" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <CaseBlock label="Project Learning / Outcome" text={project.learned} />
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="04"
          label="Projects"
          title="PROJECTS THAT TURN IDEAS INTO INSIGHTS."
        />
        <div>
          {projects.map((p, i) => (
            <ProjectCaseStudy key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
        <Reveal>
          <div
            data-testid="next-build"
            className="mt-6 flex flex-col justify-between gap-6 rounded-xl border border-dashed border-line/80 p-10 md:flex-row md:items-center lg:p-14"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft">
                Next Build
              </span>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist lg:text-base">
                Currently expanding my portfolio through practical projects at the intersection of
                analytics, technology and business.
              </p>
            </div>
            <span aria-hidden="true" className="select-none font-display text-6xl text-surface lg:text-8xl">
              03
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
