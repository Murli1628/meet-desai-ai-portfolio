import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectWalkthrough } from "./ProjectWalkthrough";
import { ProjectReference } from "./ProjectReference";
import { ProjectAvatar } from "./ProjectAvatar";

export const Projects = () => (
  <section id="projects" data-testid="projects-section" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
    <SectionHeading
      index="01"
      kicker="Featured AI Projects"
      title="Case Studies in Applied AI Testing"
      description="Selected case studies show both successful outputs and limitations. The objective is not to present every generation as a success, but to demonstrate how I test, evaluate, and improve AI-assisted workflows."
      testId="projects-heading"
    />
    <ProjectWalkthrough />
    <ProjectReference />
    <ProjectAvatar />
  </section>
);
