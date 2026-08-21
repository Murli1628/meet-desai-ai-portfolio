import { ArrowDown, FileText, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, PLACEHOLDER } from "../../siteConfig";

const FOCUS_AREAS = [
  "AI Enablement",
  "Multimodal AI",
  "Prompt Iteration",
  "Output Evaluation",
  "Feature Testing",
  "Practical Use Cases",
];

export const Hero = () => (
  <section id="home" data-testid="hero-section" className="relative overflow-hidden">
    <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20">
      <div>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Portfolio — Generative AI &amp; AI Enablement
          </p>
          <h1
            data-testid="hero-name"
            className="font-display mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Meet Desai
          </h1>
          <p
            data-testid="hero-headline"
            className="font-display mt-5 text-xl font-medium tracking-tight text-slate-800 sm:text-2xl"
          >
            Generative AI <span className="text-slate-300">|</span> AI Enablement{" "}
            <span className="text-slate-300">|</span> Project &amp; Operations
            Coordination
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Hands-on exploration of practical AI applications across text, image,
            video, audio, and AI-assisted workflows.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            I approach AI as an iterative system: define the goal, develop the prompt,
            generate, evaluate against requirements, identify gaps or hallucinations,
            refine, and document what changed. My background in operations and project
            coordination shapes a user-focused approach to testing emerging technology.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700"
            >
              Explore AI Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.resumeUrl || "#contact"}
              data-testid="hero-cta-resume"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span
              data-testid="hero-linkedin-placeholder"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4 text-slate-400" />
              {CONTACT.linkedin ? (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-700 underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              ) : (
                <span>LinkedIn — {PLACEHOLDER.linkedin}</span>
              )}
            </span>
            <span
              data-testid="hero-email-placeholder"
              className="inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4 text-slate-400" />
              {CONTACT.email ? (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-medium text-slate-700 underline-offset-4 hover:underline"
                >
                  {CONTACT.email}
                </a>
              ) : (
                <span>Email — {PLACEHOLDER.email}</span>
              )}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-2" data-testid="hero-focus-areas">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <img
            src="/assets/portrait-reference.jpg"
            alt="Meet Desai"
            data-testid="hero-portrait"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
        <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Hands-on AI experimentation portfolio
        </p>
      </Reveal>
    </div>
  </section>
);
