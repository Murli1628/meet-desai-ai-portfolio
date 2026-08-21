import { Music, MessageSquareText, Blocks } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const EXPERIMENTS = [
  {
    icon: Music,
    title: "AI Music Creation — Suno AI",
    text: "Explored AI-assisted song creation through concept development, lyrics and style-direction prompts developed with Claude, and generation in Suno AI.",
    audio: {
      src: "/assets/from-silence-to-forever.mp3",
      caption: "From Silence to Forever — generated track",
    },
    testId: "experiment-suno",
  },
  {
    icon: MessageSquareText,
    title: "LLM Analysis & Critical Evaluation — Claude",
    text: "Tested Claude on a multi-image qualitative analysis task and critically reviewed the resulting structured scoring and recommendations.",
    points: [
      "Subjectivity in generated judgments",
      "Unsupported assumptions in confident-looking outputs",
      "The importance of human evaluation",
      "The difference between generated judgment and evidence-based conclusions",
    ],
    testId: "experiment-claude",
  },
  {
    icon: Blocks,
    title: "AI-Assisted Prototyping — Emergent",
    text: "Experimented with AI-assisted application and workflow prototyping — this portfolio site itself was built with Emergent.",
    testId: "experiment-emergent",
  },
];

export const Experiments = () => (
  <section data-testid="experiments-section" className="border-t border-slate-200 bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        index="03"
        kicker="Additional AI Experiments"
        title="Smaller Experiments, Same Discipline"
        testId="experiments-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {EXPERIMENTS.map((exp, i) => (
          <Reveal
            key={exp.title}
            delay={i * 0.08}
            className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white">
              <exp.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display mt-5 text-lg font-bold tracking-tight text-slate-900">
              {exp.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{exp.text}</p>
            {exp.points && (
              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {exp.audio && (
              <div
                data-testid="experiment-suno-audio"
                className="mt-5 rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="mb-2.5 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <exp.icon className="h-3.5 w-3.5 text-slate-400" />
                  {exp.audio.caption}
                </p>
                <audio controls preload="metadata" className="w-full">
                  <source src={exp.audio.src} type="audio/mpeg" />
                </audio>
              </div>
            )}
            <div data-testid={exp.testId} className="sr-only" />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-500">
          The Claude evaluation example is included to demonstrate critical review of
          AI output — subjectivity, unsupported assumptions, and the gap between
          confident-looking generation and evidence-based conclusions — not the
          assessment content itself.
        </p>
      </Reveal>
    </div>
  </section>
);
