import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { ArrowDown, Download, MoveUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Magnetic } from "./Magnetic";
import { profile } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const chips = [
  { label: "DATA", className: "-left-4 top-14 lg:-left-10", delay: 0 },
  { label: "ANALYTICS", className: "-right-3 top-[38%] lg:-right-8", delay: 0.8 },
  { label: "BUSINESS", className: "bottom-10 left-6 lg:-left-6", delay: 1.6 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.6 });
  const py = useSpring(my, { stiffness: 50, damping: 20, mass: 0.6 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    my.set(((e.clientY - r.top) / Math.max(r.height, 1) - 0.5) * 12);
  };

  return (
    <section id="top" ref={ref} onMouseMove={onMouseMove} className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ y: gridY }}
        className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-cobalt/10 blur-[120px]"
      />

      <div className="relative mx-auto flex min-h-[90svh] max-w-7xl items-center px-6 pb-16 pt-28 lg:px-10 lg:pt-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={reduce ? undefined : container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div variants={item} className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-cobalt-soft" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-cobalt-soft">
                {profile.tagline}
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-mist"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(3.2rem,9vw,7.2rem)] leading-[0.92] tracking-tight"
            >
              ARPITA
              <br />
              <span className="text-outline">NAIR</span>
              <span className="text-cobalt">.</span>
            </motion.h1>

            <motion.div variants={item} className="mt-6 space-y-1.5">
              <p className="text-base font-medium text-ivory lg:text-lg">{profile.role}</p>
              <p className="text-sm text-mist lg:text-base">
                {profile.positioning[0]}
                <span className="mx-2 text-faint">/</span>
                {profile.positioning[1]}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm leading-relaxed text-mist lg:text-base"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#projects"
                  data-testid="hero-cta-work"
                  className="group inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-cobalt-soft hover:text-ink"
                >
                  Explore My Work
                  <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                data-testid="hero-cta-cv"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt-soft"
              >
                Download CV
                <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-connect"
                className="underline-grow inline-flex items-center gap-1.5 px-1 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-mist hover:text-ivory"
              >
                Let's Connect
                <MoveUpRight size={13} />
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                data-testid="hero-linkedin"
                className="text-faint transition-colors duration-300 hover:text-cobalt-soft"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                data-testid="hero-github"
                className="text-faint transition-colors duration-300 hover:text-cobalt-soft"
              >
                <GithubIcon size={18} />
              </a>
              <span className="h-px w-16 bg-line" aria-hidden="true" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <motion.div style={{ y: portraitY }} className="relative mx-auto max-w-sm lg:max-w-none">
              <motion.div style={{ x: px, y: py }} className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3rem] bg-cobalt/10 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="dot-grid absolute -right-8 -top-8 hidden h-32 w-32 opacity-70 lg:block"
              />
              <div className="relative rounded-2xl rounded-bl-[5rem] rounded-tr-[5rem] border border-line/80 bg-surface p-2.5">
                <img
                  src={profile.portrait}
                  alt="Arpita Nair — professional portrait"
                  data-testid="hero-portrait"
                  className="aspect-square w-full rounded-xl rounded-bl-[4.4rem] rounded-tr-[4.4rem] object-cover object-top"
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2.5 rounded-xl rounded-bl-[4.4rem] rounded-tr-[4.4rem] ring-1 ring-inset ring-ivory/10"
                />
              </div>
              {chips.map((c) => (
                <motion.span
                  key={c.label}
                  aria-hidden="true"
                  animate={reduce ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
                  className={`absolute rounded-md border border-line/80 bg-ink/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-mist backdrop-blur-md ${c.className}`}
                >
                  {c.label}
                </motion.span>
              ))}
              <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                Arpita Nair — B.Tech CSE, LPU
              </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 print:hidden lg:block" aria-hidden="true">
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-faint">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-cobalt-soft to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
