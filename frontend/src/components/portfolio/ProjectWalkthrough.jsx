import { Reveal } from "./Reveal";
import { WorkflowSteps } from "./WorkflowSteps";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { VideoCard } from "./VideoCard";
import { Chip } from "./Chip";

const PHOTOS = [
  { src: "/assets/property-exterior.jpg", caption: "Exterior" },
  { src: "/assets/property-living.jpg", caption: "Living space" },
  { src: "/assets/property-kitchen.jpg", caption: "Kitchen" },
  { src: "/assets/property-patio.jpg", caption: "Covered patio" },
];

const CRITERIA = [
  "Spatial consistency",
  "Room continuity",
  "Object preservation",
  "Camera movement",
  "Realism",
  "Instruction adherence",
  "Hallucination control",
];

export const ProjectWalkthrough = () => (
  <article
    data-testid="project-walkthrough"
    className="border-t border-slate-200 py-20 sm:py-24"
  >
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-bold text-slate-200">01</span>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-semibold text-white">
              Google Flow — Gemini Omni Flash
            </span>
            <span className="rounded-full border border-slate-300 px-3.5 py-1 text-xs font-semibold text-slate-600">
              Experimental
            </span>
          </div>
        </div>
        <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          AI Property Walkthrough
        </h3>
        <p className="mt-1.5 text-base font-medium text-slate-500">
          Testing Image-to-Video Generation for Real Estate
        </p>

        <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Objective
            </p>
            <p className="mt-2">
              Explore whether a set of static property photographs could be
              transformed into a convincing walkthrough while preserving the actual
              room layout, furniture, visual details, and sense of continuity.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-slate-900 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              The goal was not simply to produce an attractive AI video.
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              It was to evaluate whether the generated walkthrough remained faithful
              to the actual property — its geometry, spatial relationships, and
              scene continuity.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Method
            </p>
            <p className="mt-2">
              I used the listing photographs as visual references, generated multiple
              short walkthrough attempts, compared the resulting scenes against the
              originals, identified where the model changed or invented spatial
              details, and refined instructions based on observed failures.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Evaluation criteria
          </p>
          <div className="flex flex-wrap gap-2" data-testid="walkthrough-criteria">
            {CRITERIA.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="space-y-8">
        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Source listing photographs
          </p>
          <div className="grid grid-cols-2 gap-4" data-testid="walkthrough-photo-grid">
            {PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={`Property reference — ${photo.caption}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-2.5 text-xs font-medium text-slate-500">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Testing workflow
          </p>
          <WorkflowSteps
            testId="walkthrough-workflow"
            steps={["Reference", "Generation", "Evaluation", "Iteration"]}
          />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Generated walkthrough attempts
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <VideoCard
              testId="walkthrough-video-1"
              src="/assets/walkthrough-living-1.mp4"
              caption="Generated walkthrough attempt 1 — living room"
            />
            <VideoCard
              testId="walkthrough-video-2"
              src="/assets/walkthrough-living-2.mp4"
              caption="Generated walkthrough attempt 2 — living room"
            />
            <VideoCard
              testId="walkthrough-video-3"
              src="/assets/walkthrough-living-kitchen.mp4"
              caption="Generated walkthrough attempt — living room & kitchen"
            />
            <MediaPlaceholder
              testId="walkthrough-video-placeholder-1"
              label="Generated walkthrough example — media to be added"
            />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <blockquote className="rounded-2xl bg-slate-900 p-6 text-white" data-testid="walkthrough-key-learning">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Key learning
            </p>
            <p className="mt-3 text-base leading-relaxed">
              A visually attractive generation is not automatically a faithful
              walkthrough. For a practical real-estate use case, preservation of
              geometry and room relationships matters as much as cinematic quality.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </div>
  </article>
);
