import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight, ImagePlus, Plus } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillTag } from "./SkillTag";

function ShotSlot({
  src,
  label,
  ratio = "aspect-video",
  testId,
}: {
  src: string;
  label: string;
  ratio?: string;
  testId: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        data-testid={testId}
        className={`grid ${ratio} w-full place-items-center overflow-hidden bg-ink/70 p-4 text-center`}
      >
        <div className="min-w-0">
          <ImagePlus className="mx-auto mb-2 h-4 w-4 text-faint" aria-hidden="true" />
          <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-faint">
            Screenshot placeholder
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
      alt={label}
      data-testid={testId}
      onError={() => setFailed(true)}
      loading="lazy"
      className={`${ratio} w-full object-cover`}
    />
  );
}

function MockupFrame({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50, on: false });

  const canHover =
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !canHover || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({
      rx: (0.5 - py) * 3,
      ry: (px - 0.5) * 3,
      mx: px * 100,
      my: py * 100,
      on: true,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt((t) => ({ ...t, rx: 0, ry: 0, on: false }))}
      className="relative transition-transform duration-300 ease-out will-change-transform"
      style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-xl transition-opacity duration-300"
        style={{
          opacity: tilt.on ? 1 : 0,
          background: `radial-gradient(260px at ${tilt.mx}% ${tilt.my}%, rgb(127 166 255 / 0.08), transparent 70%)`,
        }}
      />
      <div className="overflow-hidden rounded-xl border border-line/70 bg-surface shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-line/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-cobalt/60" aria-hidden="true" />
          <span className="ml-3 truncate font-mono text-[10px] tracking-wider text-faint">
            {project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app
          </span>
        </div>
        <ShotSlot
          src={project.images.hero}
          label={`${project.name} dashboard screenshot`}
          ratio="aspect-[16/10]"
          testId={`project-${project.id}-hero-shot`}
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {project.images.support.map((s, i) => (
          <div key={s} className="overflow-hidden rounded-lg border border-line/60 bg-surface">
            <ShotSlot
              src={s}
              label={`${project.name} supporting screenshot ${i + 1}`}
              testId={`project-${project.id}-shot-${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectLink({ label, href, id }: { label: string; href: string | null; id: string }) {
  const slug = label.toLowerCase().replace(/\s+/g, "-");
  if (!href) {
    return (
      <span
        data-testid={`project-${id}-link-${slug}`}
        title="Add the URL in src/data/portfolio.ts when available"
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint"
      >
        {label}
        <span className="text-[9px] tracking-normal text-faint/70">[add link]</span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={`project-${id}-link-${slug}`}
      className="group inline-flex items-center gap-2 rounded-full border border-cobalt/60 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt-soft hover:bg-cobalt/15"
    >
      {label}
      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function CaseStudy({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      data-testid={`project-${project.id}`}
      className="relative border-t border-line/50 py-16 lg:py-24"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-4 select-none font-display text-[7rem] leading-none text-surface sm:text-[10rem] lg:-top-10 lg:text-[17rem] ${
          flip ? "left-0" : "right-0"
        }`}
      >
        {project.number}
      </span>
      <div className="relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <MockupFrame project={project} />
        </Reveal>
        <div className={flip ? "lg:order-1" : ""}>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              <span className="text-cobalt-soft">{project.date}</span>
              <span aria-hidden="true">/</span>
              <span>{project.subtitle}</span>
            </div>
            <h3 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
              {project.name}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-mist lg:text-base">
              {project.overview}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
          </Reveal>

          {project.stats.length > 0 && (
            <Reveal delay={0.08}>
              <div
                data-testid={`project-${project.id}-stats`}
                className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line/60 bg-line/50 sm:grid-cols-5"
              >
                {project.stats.map((st) => (
                  <div key={st.label} className="bg-ink p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                      {st.label}
                    </p>
                    <p className="mt-1.5 font-display text-xl text-cobalt-soft lg:text-2xl">
                      {st.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {project.blocks.map((b) => (
                <div key={b.label} className="border-l border-line/70 pl-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-cobalt-soft">
                    {b.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-mist">{b.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {project.features.length > 0 && (
            <Reveal delay={0.12}>
              <ul
                data-testid={`project-${project.id}-features`}
                className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
              >
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist">
                    <Plus size={13} className="mt-1 shrink-0 text-cobalt-soft" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <ProjectLink key={l.label} label={l.label} href={l.href} id={project.id} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="04"
          label="Selected Work"
          title="PROJECTS THAT TURN IDEAS INTO INSIGHTS."
        />
        <div>
          {projects.map((p, i) => (
            <CaseStudy key={p.id} project={p} flip={i % 2 === 1} />
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
