import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-display text-xl tracking-tight text-ivory">ARPITA NAIR</p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            {profile.tagline}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            data-testid="footer-linkedin"
            className="text-faint transition-colors duration-300 hover:text-cobalt-soft"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            data-testid="footer-github"
            className="text-faint transition-colors duration-300 hover:text-cobalt-soft"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Arpita Nair"
            data-testid="footer-email"
            className="text-faint transition-colors duration-300 hover:text-cobalt-soft"
          >
            <Mail size={17} />
          </a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
          © 2026 Arpita Nair
        </p>
      </div>
    </footer>
  );
}
