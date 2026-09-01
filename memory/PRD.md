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


## Update — June 2026 (Fork session)
- Projects section rewritten as text-first editorial case studies: removed all screenshot mockups, browser frames and image placeholders. Each project now shows large faded number, title, category, date, one-line description, Problem/Purpose, What I Built, Key Features, Technology Stack, What I Learned/Outcome, and buttons only for real URLs (Netflix GitHub live; BizGuard links appear when user supplies URLs in src/data/portfolio.ts).
- Certifications (Learning Log) redesigned as a numbered editorial credential list: number, date/issuer label, title, topic pills, credential link only if real URL exists. No image placeholders remain.
- Data model updated in src/data/portfolio.ts (Project: problem/built/features/stack/learned/stats/links; certificates: topics array, no image field).
- Verified via screenshots: desktop + mobile, no horizontal overflow.

### Remaining backlog
- P2: Add real GitHub/Live Demo URLs for BizGuard.AI and Live Demo for Netflix when provided (src/data/portfolio.ts links).
- P2: Add credential URLs for both certifications when provided (credentialUrl fields).
- P3: Functional backend contact form (currently mailto by user instruction).


## Update — June 2026: Full premium refinement (tested 13/13 pass, iteration_1.json)
- Nav renamed: WORK→PROJECTS (#projects), LEARNING→CERTIFICATIONS (#certifications); active link = blue dot + persistent underline; mobile overlay now solid bg-ink.
- Chapter numbering: 01 About, 02 Education, 03 Toolkit, 04 Projects, 05 Experience, 06 Certifications, 07 Resume, 08 Contact. Direction is unnumbered interstitial.
- Hero: "Explore My Work" magnetic CTA (→#projects), cursor-reactive portrait parallax, kept ARPITA/NAIR. identity.
- New components: Magnetic.tsx, Cursor.tsx (desktop-only minimal ring, reduced-motion aware), RuleReveal.tsx (animated hairline dividers).
- Skills: editorial numbered rows (no cards). Experience: editorial layout (card removed). Resume: text-first (mockup/preview removed), View/Download buttons + mono meta list. Contact: "LET'S TURN DATA INTO DECISIONS." heading.
- Projects: faded numbers now scroll-parallax; blocks renamed Purpose / What I Built / Core Features / Project Learning-Outcome.
- Extracted reusable data-driven components: ProjectCaseStudy, CertificationItem, EducationItem, ExperienceItem, SkillGroupRow.
- Removed dead assets (resume-preview.png, certs/, projects/).
- Testing agent: frontend 100% pass — anchors, CTAs, PDF 200, mobile 390/768 no overflow, no placeholder text, reduced-motion verified.

### Backlog (unchanged)
- P2: BizGuard GitHub/Live URLs, Netflix Live URL (portfolio.ts links)
- P2: Credential URLs for both certifications
- P3: Backend contact form (currently mailto links only, per user's no-fake-form rule)


## Update — June 2026: Compact sizing pass (screenshot-friendly)
- Section vertical padding reduced ~22% (py-24/36 -> py-16/28; Contact/Direction py-28/40 -> py-20/32)
- Headings reduced ~12%: SectionHeading h2 one step down; hero clamp 3.6-8.5rem -> 3.2-7.2rem; contact clamp -> 2.3-6.2rem; about/direction statements trimmed
- Rows/gaps tightened: education/cert/skill rows, project case studies, experience, resume buttons, snapshot cells, beyond cards, hero min-h-svh -> 90svh
- No content, structure, colors or animations changed. Verified: no overflow at 1920/390, hero fits one viewport, total page height ~10.3k px


## Update — June 2026: Print/PDF stylesheet
- Added @media print block in index.css: white paper background, dark text, cobalt accents kept, outlined NAIR. preserved via print-specific text-stroke, faded numbers become light watermarks
- Hidden in print: nav header, scroll progress, custom cursor, noise/dot-grid decor, scroll hint (print:hidden on Hero)
- Forced opacity/transform reset so Framer Motion reveals are always visible on paper; animations/transitions disabled
- Page-break rules: each numbered section (main > section[id]:not(#top)) starts on a new page; articles/dl/ul avoid splitting (project case studies allowed to flow); SectionHeading uses break-inside-avoid; min-h overrides removed in print
- Verified with headless Chromium PDF export: 13 pages, each chapter on its own page, no orphan pages


## Update — Sep 2026: Profile photo replaced
- New 1:1 professional photo (user-uploaded) saved as /assets/arpita-portrait-2026.jpg (optimized 107KB JPG)
- Hero img aspect changed 3/4 -> square to match new photo without cropping the face; frame/border/chips/styling unchanged
- Old portrait files removed; verified desktop + mobile


## Update — Sep 2026: Security audit + fixes (verified by testing agent, 12/12 pass)
- Audit verdict: visitor-facing site safe (no XSS sinks, all target=_blank have rel=noreferrer, no secrets in bundle)
- SEC-001 (MEDIUM) fixed: removed unauthenticated POST/GET /api/status boilerplate endpoints; backend now exposes only GET /api/ health -> {"status":"ok"} (404 verified on public URL)
- SEC-002 (LOW) fixed: CORS allow_credentials=False, allow_methods=["GET"] (credentials header confirmed absent at edge and app layer)
- Regression suite: /app/backend/tests/test_security_fixes.py (pytest). Frontend smoke passed, zero /api calls from site.
- Remaining (informational, user decision): CV PDF contains phone number (intentional public CV); platform edge controls security headers/CORS header rewriting; unused Mongo import kept intentionally (platform template)
- NOTE: fixes require a redeploy to take effect on the live deployed app
