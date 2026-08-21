import { Reveal } from "./Reveal";
import { WorkflowSteps } from "./WorkflowSteps";
import { CompareSlider } from "./CompareSlider";
import { Chip } from "./Chip";

const SKILLS = [
  "Reference consistency",
  "Prompt specification",
  "Visual transformation",
  "Environment control",
  "Iterative editing",
  "Output evaluation",
];

const EXPERIMENTS = [
  "Reference portrait as the visual anchor",
  "Hyper-realistic 3D / CGI portrait styling",
  "Studio-style portrait variation",
  "1/7-scale commercial figurine concept",
  "Packaging and indoor desk environment generation",
  "Targeted correction and refinement",
];

export const ProjectReference = () => (
  <article
    data-testid="project-reference-image"
    className="border-t border-slate-200 py-20 sm:py-24"
  >
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div className="order-2 space-y-8 lg:order-1">
        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Reference → Generated comparison
          </p>
          <CompareSlider
            before="/assets/portrait-reference.jpg"
            after="/assets/portrait-forest.jpg"
            beforeLabel="Reference portrait"
            afterLabel="Generated variation"
          />
          <p className="mt-3 text-xs text-slate-400">
            Drag to compare — original reference portrait against a generated
            studio-style variation in a new environment.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Figurine concept — packaging &amp; environment
          </p>
          <div className="grid grid-cols-2 gap-4" data-testid="figurine-grid">
            <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="overflow-hidden">
                <img
                  src="/assets/figurine-packaging.jpg"
                  alt="1/7-scale figurine concept with generated packaging"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-2.5 text-xs font-medium text-slate-500">
                Figurine + packaging generation
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="overflow-hidden">
                <img
                  src="/assets/figurine-desk.jpg"
                  alt="Figurine concept in a generated desk environment"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-2.5 text-xs font-medium text-slate-500">
                Desk environment variation
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6" data-testid="reference-iteration-example">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Iteration example
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              When an unwanted model-related text element appeared in a generated
              image, I issued a focused correction rather than rebuilding the entire
              concept — testing targeted editability and instruction adherence.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="order-1 lg:order-2">
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-bold text-slate-200">02</span>
          <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-semibold text-white">
            Gemini / Nano Banana
          </span>
        </div>
        <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Reference-to-Image Generation &amp; Iterative Visual Refinement
        </h3>

        <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Objective
            </p>
            <p className="mt-2">
              Test how a reference portrait could be transformed into different
              visual formats while preserving recognizable characteristics and
              following detailed creative constraints.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experiments
            </p>
            <ul className="space-y-2.5" data-testid="reference-experiments-list">
              {EXPERIMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Workflow
          </p>
          <WorkflowSteps
            testId="reference-workflow"
            steps={[
              "Reference Image",
              "Structured Prompt",
              "Generation",
              "Visual Evaluation",
              "Targeted Correction",
              "Refined Output",
            ]}
          />
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Skills demonstrated
          </p>
          <div className="flex flex-wrap gap-2" data-testid="reference-skills">
            {SKILLS.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </article>
);
