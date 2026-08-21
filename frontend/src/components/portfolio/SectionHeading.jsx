import { Reveal } from "./Reveal";

export const SectionHeading = ({ index, kicker, title, description, testId }) => (
  <Reveal className="max-w-3xl">
    <div className="flex items-baseline gap-4">
      {index && (
        <span className="font-display text-sm font-medium tracking-widest text-slate-400">
          {index}
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {kicker}
      </p>
    </div>
    <h2
      data-testid={testId}
      className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-relaxed text-slate-600">{description}</p>
    )}
  </Reveal>
);
