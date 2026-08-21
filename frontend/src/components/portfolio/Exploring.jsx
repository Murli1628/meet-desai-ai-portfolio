import { Compass } from "lucide-react";
import { Reveal } from "./Reveal";

const TOPICS = [
  "AI Agents",
  "Workflow Automation",
  "Prompt Libraries",
  "Enterprise AI Adoption",
  "User Enablement",
  "AI Evaluation",
  "Responsible AI Use",
];

export const Exploring = () => (
  <section data-testid="exploring-section" className="border-t border-slate-200 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal className="max-w-3xl">
        <div className="flex items-center gap-3">
          <Compass className="h-4 w-4 text-slate-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Active learning areas
          </p>
        </div>
        <h2
          data-testid="exploring-heading"
          className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Currently Exploring
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-600">
          Areas I am actively learning about and experimenting with — approached with
          curiosity and structure, not claimed as professional mastery.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-3" data-testid="exploring-topics">
          {TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-900"
            >
              {topic}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
