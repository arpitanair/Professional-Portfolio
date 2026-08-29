import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Snapshot } from "@/components/Snapshot";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Learning } from "@/components/Learning";
import { BeyondClassroom } from "@/components/BeyondClassroom";
import { Direction } from "@/components/Direction";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-svh bg-ink text-ivory">
      <div
        aria-hidden="true"
        className="noise-bg pointer-events-none fixed inset-0 z-[5] opacity-[0.04]"
      />
      <Navigation />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Learning />
        <BeyondClassroom />
        <Direction />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
