import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { ScoreSpreadViewer } from "@/components/scoresync/score-spread-viewer";
import { Button, buttonVariants } from "@/components/ui/button";
import type { ScoreMedia, ScoreNodeFrame, ScoreSpread } from "@/lib/scoresync/types";

export function ScorePdfViewer({
  activeFrame,
  currentSpread,
  onNextSpread,
  onPreviousSpread,
  score,
  spreads,
}: {
  activeFrame?: ScoreNodeFrame;
  currentSpread: ScoreSpread;
  onNextSpread: () => void;
  onPreviousSpread: () => void;
  score: ScoreMedia;
  spreads: ScoreSpread[];
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card p-3">
        <div className="font-mono text-xs text-muted-foreground">
          Spread {currentSpread.index + 1} of {spreads.length}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={onPreviousSpread} size="sm" type="button" variant="outline">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </Button>
          <Button onClick={onNextSpread} size="sm" type="button" variant="outline">
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          {score.allowExternalOpen && score.scorePdfUrl ? (
            <a
              className={buttonVariants({ variant: "accent", size: "sm" })}
              href={score.scorePdfUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open PDF
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
      <ScoreSpreadViewer activeFrame={activeFrame} score={score} spread={currentSpread} />
    </div>
  );
}
