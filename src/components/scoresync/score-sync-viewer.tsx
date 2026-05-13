"use client";

import { useCallback, useMemo, useState } from "react";

import { ScoreAudioPlayer } from "@/components/scoresync/score-audio-player";
import { ScoreEngineSwitcher } from "@/components/scoresync/score-engine-switcher";
import { ScorePdfViewer } from "@/components/scoresync/score-pdf-viewer";
import { Badge } from "@/components/ui/badge";
import { createScoreSpreads, findSpreadIndexForPage } from "@/lib/scoresync/layout";
import type { ScoreMedia, ScoreNodeFrame } from "@/lib/scoresync/types";

function findActiveFrame(nodeFrames: ScoreNodeFrame[], currentTimeMs: number) {
  return nodeFrames
    .filter((frame) => frame.enabled && frame.startTimeMs <= currentTimeMs)
    .filter((frame) => !frame.endTimeMs || frame.endTimeMs >= currentTimeMs)
    .toSorted((first, second) => second.startTimeMs - first.startTimeMs)[0];
}

export function ScoreSyncViewer({ score }: { score: ScoreMedia }) {
  const spreads = useMemo(() => createScoreSpreads(score), [score]);
  const [currentTimeMs, setCurrentTimeMs] = useState(0);
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const activeFrame = useMemo(
    () => findActiveFrame(score.nodeFrames, currentTimeMs),
    [currentTimeMs, score.nodeFrames],
  );

  const syncToFrame = useCallback(
    (frame?: ScoreNodeFrame) => {
      if (!frame || !score.autoTurnPages) {
        return;
      }

      if (typeof frame.spreadIndex === "number") {
        setCurrentSpreadIndex(Math.min(spreads.length - 1, Math.max(0, frame.spreadIndex)));
        return;
      }

      if (frame.pageNumber) {
        setCurrentSpreadIndex(findSpreadIndexForPage(spreads, frame.pageNumber));
      }
    },
    [score.autoTurnPages, spreads],
  );

  const handleTimeChange = useCallback(
    (nextTimeMs: number) => {
      setCurrentTimeMs(nextTimeMs);
      syncToFrame(findActiveFrame(score.nodeFrames, nextTimeMs));
    },
    [score.nodeFrames, syncToFrame],
  );

  const currentSpread = spreads[currentSpreadIndex] ?? spreads[0];

  return (
    <section className="polished-card rounded-lg border p-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">ScoreSync</Badge>
              <Badge>{score.preferredScoreEngine.toLowerCase().replaceAll("_", " ")}</Badge>
              {score.nodeFrames.length > 0 ? (
                <Badge variant="secondary">{score.nodeFrames.length} Node Frames</Badge>
              ) : null}
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">{score.scoreTitle}</h2>
            {score.scoreSubtitle ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{score.scoreSubtitle}</p>
            ) : null}
          </div>
          {score.showAudioPlayer ? (
            <ScoreAudioPlayer
              currentTimeMs={currentTimeMs}
              durationMs={score.durationMs ?? 60000}
              onTimeChange={handleTimeChange}
            />
          ) : null}
          <ScorePdfViewer
            activeFrame={activeFrame}
            currentSpread={currentSpread}
            onNextSpread={() =>
              setCurrentSpreadIndex((index) => Math.min(spreads.length - 1, index + 1))
            }
            onPreviousSpread={() => setCurrentSpreadIndex((index) => Math.max(0, index - 1))}
            score={score}
            spreads={spreads}
          />
        </div>
        <aside className="space-y-4">
          <ScoreEngineSwitcher score={score} />
          <div className="quiet-panel rounded-lg border p-4">
            <h3 className="font-medium">Score metadata</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Composer", score.composer],
                ["Arranger", score.arranger],
                ["Instrumentation", score.instrumentation],
                ["Difficulty", score.difficulty],
                ["Duration", score.durationLabel],
              ].map(([label, value]) =>
                value ? (
                  <div key={label}>
                    <dt className="font-mono text-xs uppercase text-muted-foreground">{label}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ) : null,
              )}
            </dl>
          </div>
          <div className="quiet-panel rounded-lg border p-4">
            <h3 className="font-medium">Node Frames</h3>
            <ol className="mt-4 space-y-2 text-xs text-muted-foreground">
              {score.nodeFrames.map((frame) => (
                <li className={frame.id === activeFrame?.id ? "text-accent" : ""} key={frame.id}>
                  {Math.round(frame.startTimeMs / 1000)}s - {frame.label}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
