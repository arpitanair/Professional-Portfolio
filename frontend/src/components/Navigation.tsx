import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        data-testid="scroll-progress"
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-cobalt"
        style={reduce ? undefined : { scaleX: progress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-line/60 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#top"
            data-testid="nav-logo"
            className="font-mono text-sm tracking-[0.3em] text-ivory"
          >
            AN<span className="text-cobalt-soft">.</span>
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 rounded-full bg-cobalt-soft transition-opacity duration-300 ${
                    active === l.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                <a
                  href={`#${l.id}`}
                  data-testid={`nav-link-${l.id}`}
                  className={`underline-grow font-mono text-[11px] uppercase tracking-[0.18em] ${
                    active === l.id ? "underline-on text-ivory" : "text-mist hover:text-ivory"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            data-testid="nav-menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="p-2 text-ivory lg:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-mono text-sm tracking-[0.3em] text-ivory">
                AN<span className="text-cobalt-soft">.</span>
              </span>
              <button
                data-testid="nav-menu-close"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-ivory"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.id}`}
                  initial={reduce ? false : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4 }}
                  className="group flex items-baseline gap-4 border-b border-line/50 py-4"
                >
                  <span className="font-mono text-[10px] text-faint">0{i + 1}</span>
                  <span className="font-display text-3xl text-ivory transition-colors duration-300 group-hover:text-cobalt-soft">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="flex gap-6 px-8 pb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="mobile-linkedin" className="hover:text-ivory">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" data-testid="mobile-github" className="hover:text-ivory">
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} data-testid="mobile-email" className="hover:text-ivory">
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
