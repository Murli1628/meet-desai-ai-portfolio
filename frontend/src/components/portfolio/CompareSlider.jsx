import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export const CompareSlider = ({
  before,
  after,
  beforeLabel = "Reference",
  afterLabel = "Generated",
}) => {
  const [pos, setPos] = useState(50);

  return (
    <div
      data-testid="image-compare-slider"
      className="relative aspect-[4/5] select-none overflow-hidden rounded-3xl border border-slate-200 bg-white"
    >
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeLabel}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div
        className="absolute inset-y-0 w-0.5 bg-white/90"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white">
        {afterLabel}
      </span>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        data-testid="compare-slider-input"
        aria-label="Compare reference and generated image"
        style={{ touchAction: "pan-y" }}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
};
