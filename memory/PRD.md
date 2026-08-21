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

## Backlog
- P0: Add real contact details (email, LinkedIn, resume PDF) in siteConfig.js
- P0: Add generated walkthrough videos + HeyGen clips when available (placeholders ready)
- P1: Upload remaining 8 property photos (PDF referenced 12; 4 embedded) and 3rd walkthrough attempt
- P2: Scroll progress indicator in nav; downloadable PDF version of portfolio

## Next Tasks
1. Collect email/LinkedIn/resume from user and wire into siteConfig.js
2. Add real video media when supplied by user
3. Optional: SEO meta/OG image polish
