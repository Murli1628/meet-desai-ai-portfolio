import { ArrowRight } from "lucide-react";

export const WorkflowSteps = ({ steps, testId }) => (
  <ol
    data-testid={testId}
    className="flex flex-wrap items-center gap-y-3"
    aria-label="Workflow"
  >
    {steps.map((step, i) => (
      <li key={step} className="flex items-center">
        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 sm:text-sm">
          {step}
        </span>
        {i < steps.length - 1 && (
          <ArrowRight className="mx-2 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
        )}
      </li>
    ))}
  </ol>
);
