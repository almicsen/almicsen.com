import type { CSSProperties } from "react";
import { Music2 } from "lucide-react";

import { ScoreNodeFrameOverlay } from "@/components/scoresync/score-node-frame-overlay";
import type { ScoreMedia, ScoreNodeFrame, ScoreSpread } from "@/lib/scoresync/types";

export function ScoreSpreadViewer({
  activeFrame,
  score,
  spread,
}: {
  activeFrame?: ScoreNodeFrame;
  score: ScoreMedia;
  spread: ScoreSpread;
}) {
  return (
    <div className="rounded-lg border bg-background p-3 shadow-inner">
      <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase text-muted-foreground">
        <span>{score.scoreLayoutMode.toLowerCase().replaceAll("_", " ")}</span>
        <span>{spread.label}</span>
      </div>
      <div
        className="grid gap-3 md:grid-cols-[repeat(var(--score-pages),minmax(0,1fr))]"
        style={{ "--score-pages": spread.pageNumbers.length } as CSSProperties}
      >
        {spread.pageNumbers.map((pageNumber) => (
          <div
            className="relative min-h-[26rem] overflow-hidden rounded-md border bg-card p-6 shadow-2xl"
            key={pageNumber}
          >
            <div className="flex items-start justify-between border-b pb-4">
              <div>
                <p className="font-mono text-[11px] uppercase text-accent">Page {pageNumber}</p>
                <p className="mt-1 text-sm font-medium">{score.scoreTitle}</p>
              </div>
              <Music2 className="h-6 w-6 text-accent" aria-hidden="true" />
            </div>
            <div className="mt-7 space-y-6">
              {Array.from({ length: 5 }, (_, staffIndex) => (
                <div className="space-y-1" key={staffIndex}>
                  {Array.from({ length: 5 }, (_, lineIndex) => (
                    <span
                      className="block h-px rounded-full bg-muted-foreground/35"
                      key={lineIndex}
                    />
                  ))}
                  <div className="flex gap-3 pt-2">
                    {Array.from({ length: 6 }, (_, noteIndex) => (
                      <span
                        className="h-3 w-3 rounded-full border border-accent/40 bg-accent/15"
                        key={noteIndex}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {activeFrame?.pageNumber === pageNumber ||
            activeFrame?.spreadIndex === spread.index ||
            activeFrame?.actionType === "HIGHLIGHT_REGION" ? (
              <ScoreNodeFrameOverlay activeFrame={activeFrame} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
