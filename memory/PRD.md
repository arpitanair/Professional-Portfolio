# PRD — Arpita Nair Portfolio Website

## Original Problem Statement
Build a complete, production-quality personal portfolio website for Arpita Nair (B.Tech CSE, Data Science & ML, Lovely Professional University; aspiring Business Analyst). Three purposes: academic submission, recruiter/internship portfolio, long-term personal brand. Design concept: "MIDNIGHT EDITORIAL × DATA INTELLIGENCE" — dark-first, editorial typography, analytical visual language. Hard rules: use the real uploaded photo and CV PDF; never fabricate achievements, stats, employment, or capabilities.

## Architecture
- Frontend: Vite + React 19 + Tailwind CSS v4 + motion (framer-motion) + lucide-react. Single-page scrolling portfolio.
- Backend: FastAPI template retained (not required by the portfolio; no DB usage).
- Content: centralized in `src/data/portfolio.ts` — all personal content editable from one file.
- Assets: `/frontend/public/assets/` — `Arpita_Nair_CV.pdf` (real CV), `arpita-portrait.jpg` (real photo), `resume-preview.png` (rendered page 1), `projects/` and `certs/` folders for future screenshots/certificates.
- Components: Navigation, Hero, Snapshot, About, Education, Skills, Projects (CaseStudy + MockupFrame + ShotSlot), Experience, Learning (CertificationCard), BeyondClassroom, Direction, Resume, Contact, Footer, Reveal, SectionHeading, SkillTag, BrandIcons.

## User Personas
- University evaluators reviewing academic submission screenshots.
- Recruiters / internship coordinators scanning projects and resume.
- Arpita herself maintaining content via the data file and asset folders.

## Core Requirements (static)
Real photo + real CV only; no fabricated content; dark midnight navy + cobalt + subtle rose palette; Playfair/Inter/JetBrains Mono; fully responsive (desktop/laptop/tablet/mobile) with no horizontal overflow; floating glass nav with active-section highlighting; smooth scroll; reduced-motion support; SEO/OG metadata; AN monogram favicon; VIEW CV opens PDF in new tab, DOWNLOAD CV downloads it.

## Implemented (2026-08-29)
- Full single-page portfolio: Hero (asymmetric, real portrait in editorial frame, parallax, floating DATA/ANALYTICS/BUSINESS chips, dot-grid bg, 3 CTAs wired), Professional Snapshot bento (program, specialization, LPU, CGPA 8.02, direction), About editorial statement, Education timeline (LPU 8.02 / 94% / 95%), Skills grouped bento (6 groups, no % bars), two immersive case studies (BizGuard.AI, Netflix Strategic Insights Platform with real 8,807-title stats and real GitHub link, alternating layouts, browser-mockup frames with upload placeholders, tilt + spotlight), NEXT BUILD slot, Deloitte Forage job-simulation experience (clearly labeled simulation), Learning Log (2 real certificates with image/credential slots), Beyond the Classroom, Direction typographic flow, Resume section (real PDF, page-1 preview, view/download), Contact (Email/LinkedIn/GitHub large links, mailto), minimal footer.
- Micro-interactions: scroll progress bar, glass nav on scroll, active-section dots, staggered reveals, underline-grow links, floating chips, magnetic-feel CTAs, project tilt/spotlight.
- Verified: desktop 1920/1440, tablet 768, mobile 390 — no horizontal overflow; mobile full-screen menu works; CV serves as application/pdf; portrait loads; all anchor links work.

## Backlog
- P0: User to add real dashboard screenshots (drop files into `/assets/projects/bizguard-*.png`, `/assets/projects/netflix-*.png`) and certificate images (`/assets/certs/*.png`); add BizGuard GitHub/live URLs and certificate credential links in `src/data/portfolio.ts`.
- P1: Netflix live demo URL if deployed; OG image absolute URL once domain is final.
- P2: Optional contact form with Resend backend; blog/writing section; case-study detail pages.

## Next Tasks
1. Collect BizGuard.AI + Netflix dashboard screenshots and certificate images from the user.
2. Wire real project/credential URLs into `portfolio.ts`.
3. Optional: Resend-powered contact form.
