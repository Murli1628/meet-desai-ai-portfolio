# PRD — Meet Desai AI Portfolio

## Original Problem Statement
Build a polished, modern, recruiter-facing personal portfolio website for Meet Desai, focused on Generative AI, AI Enablement, Project Coordination, and Operations. Source of truth: uploaded PDF "Meet Desai AI Portfolio Master". Target roles: AI Enablement Coordinator, AI Adoption Coordinator, AI Project Coordinator, Generative AI Operations, AI Training/User Enablement, AI Customer Success, early-career AI roles. Positioning: operations/project coordination professional who actively experiments with AI tools — NOT an "AI Expert/Engineer". Design: clean, sophisticated, minimal, light background with navy accents, restrained animation, consulting-portfolio + AI case-study feel. No invented metrics, clients, certifications, contact info, or fake media.

## Architecture
- Static single-page React app (frontend only; no backend/db needed for v1)
- React 19 + Tailwind + Framer Motion + lucide-react
- Components in `/app/frontend/src/components/portfolio/`
- Contact/resume placeholders centralized in `/app/frontend/src/siteConfig.js`
- Real project images extracted from the source PDF, optimized to JPG, served from `/app/frontend/public/assets/`

## User Personas
- Recruiters/hiring managers at consulting, tech, enterprise companies (2–3 min scan)
- Meet Desai (site owner, updates placeholders/media later)

## Core Requirements (static)
- Hero: name, headline, supporting statement, intro, 2 CTAs, LinkedIn/email placeholders
- 3 featured case studies (Property Walkthrough, Reference-to-Image, AI Avatar & Voice Clone) with Challenge → Tools → Approach → Testing → Outcome → Iteration → Learning
- "How I Work With AI" 7-step workflow section
- Categorized AI toolkit (tool + how used, no logo wall)
- Additional experiments (Suno, Claude critical evaluation, Emergent prototyping)
- "Currently Exploring" (not "Expertise")
- Professional foundation + education
- Contact with placeholders; location Mississauga, Ontario, Canada
- Sticky nav: Home | Projects | AI Toolkit | How I Work | About | Contact + Resume button
- Subtle interactions only; fully responsive; real PDF images preserved; media placeholders labeled clearly

## Implemented
- 2026-07 (v1): Full landing page — Hero, 3 case studies with real PDF imagery, draggable before/after compare slider, expandable "What I Learned" (avatar project), 7-step dark process section, 9-category toolkit grid, additional experiments, currently exploring, professional foundation, contact with placeholders, sticky glass navbar with mobile menu. All content verbatim-faithful to the PDF. Verified on desktop + mobile via screenshots; compare slider and accordion interaction tested.
- 2026-07 (v1.1): Added 3 real generated walkthrough videos (user-supplied MP4s) to Project 01 video slots; one labelled placeholder remains for a future clip. Verified all 3 video files serve and render with players.
- 2026-07 (v1.2): Added 4 real HeyGen avatar performance clips (user-supplied MP4s) to Project 03, replacing both placeholders; videos render at natural aspect to avoid cropping faces. Verified all 4 files serve and render with players.
- 2026-07 (v1.3): Wired real contact details from user-supplied resume — email (meetdesai9928@gmail.com), LinkedIn (linkedin.com/in/meetdesai28). Note: resume lists Etobicoke ON; site keeps Mississauga per original brief pending user confirmation.
- 2026-07 (v1.4): Swapped resume to user-supplied PDF (Meet_Desai_Resume.pdf); hero CTA, nav Resume button, and contact row all verified pointing to the PDF. Old .docx removed.
- 2026-07 (v1.5): Location updated to Etobicoke, Ontario, Canada per user confirmation (matches resume). Verified on live site.
- 2026-07 (v1.6): Added user-supplied Suno AI track "From Silence to Forever" as an inline audio player in the AI Music Creation experiment card; card text updated to credit Claude-assisted lyrics/style direction (user-stated). Emergent card now notes the portfolio site itself was built with Emergent (user-stated). Verified audio serves and player renders with correct duration.
- 2026-07 (v1.7): Recruiter-style proofread pass over all rendered site text. Fixes: added "AI Operations" keyword to contact role list; polished Process step 1 wording ("before opening any tool"); distinguished the two living-room walkthrough captions as attempt 1 / attempt 2. All other copy confirmed faithful to source PDF. Verified via live-site text assertions.
- 2026-07 (v1.8): Added 4th user-supplied walkthrough video (living room attempt 3) filling the last placeholder slot; Project 01 now shows a full 2x2 grid of 4 real generated walkthroughs, ordered living room attempts 1-3 then living room & kitchen. Placeholder fully removed. Verified live.

## Backlog
- P0: Add real contact details (email, LinkedIn, resume PDF) in siteConfig.js
- P0: Add generated walkthrough videos + HeyGen clips when available (placeholders ready)
- P1: Upload remaining 8 property photos (PDF referenced 12; 4 embedded) and 3rd walkthrough attempt
- P2: Scroll progress indicator in nav; downloadable PDF version of portfolio

## Next Tasks
1. Collect email/LinkedIn/resume from user and wire into siteConfig.js
2. Add real video media when supplied by user
3. Optional: SEO meta/OG image polish
