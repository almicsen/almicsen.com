"use client";

import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export function ScoreAudioPlayer({
  currentTimeMs,
  durationMs,
  onTimeChange,
}: {
  currentTimeMs: number;
  durationMs: number;
  onTimeChange: (nextTimeMs: number) => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const nextTimeMs = Math.min(durationMs, currentTimeMs + 250);

      onTimeChange(nextTimeMs);

      if (nextTimeMs >= durationMs) {
        setIsPlaying(false);
      }
    }, 250);

    return () => window.clearInterval(intervalId);
  }, [currentTimeMs, durationMs, isPlaying, onTimeChange]);

  return (
    <div className="rounded-lg border bg-card p-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          aria-label={isPlaying ? "Pause score timeline" : "Play score timeline"}
          onClick={() => setIsPlaying((current) => !current)}
          size="icon"
          type="button"
          variant="accent"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
        <Button
          aria-label="Restart score timeline"
          onClick={() => {
            setIsPlaying(false);
            onTimeChange(0);
          }}
          size="icon"
          type="button"
          variant="outline"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
        </Button>
        <div className="min-w-24 font-mono text-sm text-muted-foreground">
          {formatTime(currentTimeMs)} / {formatTime(durationMs)}
        </div>
        <input
          aria-label="Score timeline"
          className="min-w-48 flex-1 accent-[hsl(var(--accent))]"
          max={durationMs}
          min={0}
          onChange={(event) => onTimeChange(Number(event.target.value))}
          type="range"
          value={currentTimeMs}
        />
      </div>
    </div>
  );
}
