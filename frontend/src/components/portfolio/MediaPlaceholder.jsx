import { Play } from "lucide-react";

export const MediaPlaceholder = ({ label, testId }) => (
  <div
    data-testid={testId}
    className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center transition-colors duration-300 hover:border-slate-400"
  >
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500">
      <Play className="h-4 w-4" />
    </span>
    <p className="text-sm font-medium text-slate-600">{label}</p>
  </div>
);
