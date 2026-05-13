import type { ScoreNodeFrame } from "@/lib/scoresync/types";

export function ScoreNodeFrameOverlay({ activeFrame }: { activeFrame?: ScoreNodeFrame }) {
  if (!activeFrame?.region || !activeFrame.enabled) {
    return null;
  }

  const { region } = activeFrame;
  const unit = region.unit === "PX" ? "px" : "%";

  return (
    <div
      aria-label={activeFrame.label}
      className="pointer-events-none absolute rounded-lg border border-accent/80 bg-accent/20 shadow-[0_0_40px_rgba(98,214,199,0.28)]"
      style={{
        height: `${region.height}${unit}`,
        left: `${region.x}${unit}`,
        top: `${region.y}${unit}`,
        transitionDuration: `${activeFrame.animationDurationMs ?? 240}ms`,
        width: `${region.width}${unit}`,
      }}
    />
  );
}
