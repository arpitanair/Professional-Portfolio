import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const links = [
  {
    label: "Email Me",
    detail: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    detail: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    detail: profile.githubLabel,
    href: profile.github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line/50 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p
            data-testid="section-label-08"
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-cobalt-soft"
          >
            08 / Contact
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-mist">
            Have an opportunity, idea or conversation?
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <h2
            data-testid="contact-heading"
            className="mt-6 font-display text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.98] tracking-tight text-ivory"
          >
            LET'S TURN DATA
            <br />
            INTO <span className="text-outline">DECISIONS</span>
            <span className="text-cobalt">.</span>
          </h2>
        </Reveal>

        <div className="mt-20">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={0.1 + i * 0.06}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                data-testid={`contact-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between gap-6 border-t border-line/60 py-7 transition-colors duration-300 last:border-b hover:border-cobalt/40 lg:py-9"
              >
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-display text-2xl text-ivory transition-colors duration-300 group-hover:text-cobalt-soft sm:text-3xl lg:text-4xl">
                    {l.label}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-faint transition-colors duration-300 group-hover:text-mist">
                    {l.detail}
                  </span>
                </div>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-faint transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cobalt-soft"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
