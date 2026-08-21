import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { WorkflowSteps } from "./WorkflowSteps";
import { VideoCard } from "./VideoCard";
import { Chip } from "./Chip";

const CRITERIA = [
  "Natural lip-sync",
  "Stable head movement",
  "Natural eye contact",
  "Recognizable voice similarity",
  "Non-robotic delivery",
  "Emotional progression",
  "Cinematic framing",
];

export const ProjectAvatar = () => {
  const [open, setOpen] = useState(false);

  return (
    <article
      data-testid="project-avatar"
      className="border-t border-slate-200 py-20 sm:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl font-bold text-slate-200">03</span>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-semibold text-white">
                ChatGPT Work + HeyGen
              </span>
              <span className="rounded-full border border-slate-300 px-3.5 py-1 text-xs font-semibold text-slate-600">
                Experimental / In Development
              </span>
            </div>
          </div>
          <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            AI Avatar &amp; Voice Clone
          </h3>
          <p className="mt-1.5 text-base font-medium text-slate-500">
            Short-Film Performance Experiment
          </p>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Objective
              </p>
              <p className="mt-2">
                Explore whether an AI avatar and cloned voice could deliver a short
                cinematic performance with believable speech, eye contact,
                expression, and emotional progression.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Process
              </p>
              <p className="mt-2">
                Developed the short-film concept and performance direction in ChatGPT
                Work, connected the workflow with HeyGen, created and tested a
                digital avatar and cloned voice, and generated short performance
                clips for evaluation.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Evaluation criteria
            </p>
            <div className="flex flex-wrap gap-2" data-testid="avatar-criteria">
              {CRITERIA.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Workflow
            </p>
            <WorkflowSteps
              testId="avatar-workflow"
              steps={[
                "Concept",
                "Digital Avatar & Voice",
                "Performance Instructions",
                "Generation",
                "Evaluation",
                "Iteration",
              ]}
            />
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Generated performance clips
            </p>
            <div className="grid items-start gap-4 sm:grid-cols-2">
              <VideoCard
                testId="avatar-video-1"
                src="/assets/avatar-cinematic-v1.mp4"
                caption="Cinematic performance test — v1"
                natural
              />
              <VideoCard
                testId="avatar-video-2"
                src="/assets/avatar-gujarati-vav.mp4"
                caption="Gujarati Vav cinematic test — 11s"
                natural
              />
              <VideoCard
                testId="avatar-video-3"
                src="/assets/avatar-murli-lipsync.mp4"
                caption="Shree Murli — precision lip-sync test"
                natural
              />
              <VideoCard
                testId="avatar-video-4"
                src="/assets/avatar-murli-test.mp4"
                caption="Shree Murli — private test v1"
                natural
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpen(!open)}
                data-testid="avatar-learnings-toggle"
                aria-expanded={open}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50"
              >
                <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                  What I Learned
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>
              <div
                data-testid="avatar-learnings-content"
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 border-t border-slate-100 px-6 py-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                    <p>
                      Some generations did not consistently achieve the intended
                      lip-sync, eye contact, head orientation, expression, or
                      performance direction. Weak lip-sync, unnatural eye contact,
                      expression mismatches, and results that did not fully follow
                      the intended direction were all documented — not hidden.
                    </p>
                    <p>
                      These limitations are the point of the experiment: they show
                      how the tool behaves against clear acceptance criteria, and
                      where human evaluation and iteration are still required.
                    </p>
                    <p className="rounded-xl bg-slate-900 p-4 font-medium text-white">
                      Successful AI adoption requires more than access to a tool —
                      it requires clear requirements, user-focused testing, feedback,
                      and iteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
};
