import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const EXPERIENCE = [
  "Customer / user support in high-volume environments",
  "Cross-functional coordination",
  "Documentation and operational problem solving",
  "Training and support for team members",
  "Managing multiple priorities",
];

const EDUCATION = [
  "Post-Graduate Diploma in Project Management — Algoma University",
  "Bachelor of Engineering — Textile Processing Engineering, The Maharaja Sayajirao University of Baroda",
];

export const About = () => (
  <section id="about" data-testid="about-section" className="border-t border-slate-200 bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        index="04"
        kicker="About"
        title="Professional Foundation"
        testId="about-heading"
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-base leading-relaxed text-slate-600">
            Nearly three years of experience in high-volume operations — work built
            on coordination, clear communication, and solving problems for real
            users:
          </p>
          <ul className="mt-6 space-y-3.5" data-testid="about-experience-list">
            {EXPERIENCE.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-slate-700">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <GraduationCap className="h-4 w-4" />
              Education
            </p>
            <ul className="space-y-3" data-testid="about-education-list">
              {EDUCATION.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-medium text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex items-start">
          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10" data-testid="about-ai-connection">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Why AI enablement
            </p>
            <p className="font-display mt-4 text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              The combination of operations experience, project coordination, user
              support, and hands-on AI experimentation creates a foundation for
              roles focused on practical AI adoption and user enablement.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              I do not simply generate content with AI. I test AI tools against
              requirements, evaluate what works and what fails, refine the workflow,
              and learn how the technology can be applied more effectively for real
              users.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
