import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Define the Goal", text: "Set a clear objective and acceptance criteria before touching any tool." },
  { n: "02", title: "Develop / Refine the Prompt", text: "Translate the goal into structured, specific instructions." },
  { n: "03", title: "Generate", text: "Produce outputs across one or more tools and settings." },
  { n: "04", title: "Evaluate Against Requirements", text: "Compare results to the original criteria — not just to what looks good." },
  { n: "05", title: "Identify Gaps & Hallucinations", text: "Document where the model changed, invented, or missed details." },
  { n: "06", title: "Iterate", text: "Refine instructions and regenerate based on observed failures." },
  { n: "07", title: "Document Learnings", text: "Record what changed, what worked, and what to test next." },
];

export const Process = () => (
  <section id="process" data-testid="process-section" className="bg-slate-900 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Process
        </p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How I Work With AI
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          A structured, repeatable approach to testing emerging tools — not random
          experimentation. Every project on this site follows the same loop.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-700/60 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 0.06}
            className={`bg-slate-900 p-7 transition-colors duration-300 hover:bg-slate-800/80 ${i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <span className="font-display text-sm font-bold tracking-widest text-sky-300">
              {step.n}
            </span>
            <h3 className="font-display mt-3 text-base font-bold tracking-tight text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
          </Reveal>
        ))}
        <Reveal delay={0.45} className="flex items-center bg-slate-800 p-7">
          <p className="text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-white">The loop repeats</span> until
            the output meets the requirements — or the limitation is clearly
            understood and documented.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
