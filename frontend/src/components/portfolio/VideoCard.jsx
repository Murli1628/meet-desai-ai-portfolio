import { Play } from "lucide-react";

export const VideoCard = ({ src, caption, testId }) => (
  <figure
    data-testid={testId}
    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
  >
    <div className="relative overflow-hidden bg-slate-900">
      <video
        src={src}
        controls
        preload="metadata"
        playsInline
        className="aspect-video w-full object-cover"
      />
    </div>
    <figcaption className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-500">
      <Play className="h-3 w-3 text-slate-400" />
      {caption}
    </figcaption>
  </figure>
);
