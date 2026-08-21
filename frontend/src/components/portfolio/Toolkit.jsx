import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  {
    title: "AI Assistants & Prompting",
    tools: ["ChatGPT", "Claude"],
    use: "Ideation, prompt development, refinement, structured analysis.",
  },
  {
    title: "Image Generation & Editing",
    tools: ["Gemini / Nano Banana"],
    use: "Reference-based generation, visual transformation, iterative editing.",
  },
  {
    title: "Video & Multimodal AI",
    tools: ["Google Flow / Gemini Omni Flash"],
    use: "Image-to-video generation and property walkthrough experimentation.",
  },
  {
    title: "Avatar & AI Video",
    tools: ["HeyGen"],
    use: "Digital avatar, voice clone, and performance experimentation.",
  },
  {
    title: "Creative AI Video",
    tools: ["Higgsfield"],
    use: "Image and video generation experimentation.",
  },
  {
    title: "AI Music & Audio",
    tools: ["Suno AI"],
    use: "Concept development, lyrics/style direction, and AI-assisted music creation.",
  },
  {
    title: "AI-Assisted Building & Prototyping",
    tools: ["Emergent"],
    use: "Application prototypes and AI-assisted workflow experimentation.",
  },
  {
    title: "AI-Assisted Career Workflow",
    tools: ["AIApply"],
    use: "AI-assisted job application workflow.",
  },
  {
    title: "Project & Productivity",
    tools: ["Jira", "Smartsheet", "Microsoft Office", "Google Workspace"],
    use: "Planning, tracking, documentation, and productivity.",
  },
];

export const Toolkit = () => (
  <section id="toolkit" data-testid="toolkit-section" className="py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        index="02"
        kicker="AI Toolkit"
        title="Tools I Have Worked With — and How"
        description="Not a logo wall. Each tool is listed with the way it has actually been used in the experiments on this site."
        testId="toolkit-heading"
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="toolkit-grid">
        {CATEGORIES.map((cat, i) => (
          <Reveal
            key={cat.title}
            delay={(i % 3) * 0.08}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {cat.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-display text-lg font-bold tracking-tight text-slate-900"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{cat.use}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
