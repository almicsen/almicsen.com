import Link from "next/link";
import { Music2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { MediaItem } from "@/lib/cms/types";

export function ScoreMediaCard({ item }: { item: MediaItem }) {
  if (!item.score) {
    return null;
  }

  return (
    <div className="quiet-panel rounded-lg border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">Score</Badge>
        <Badge variant="secondary">{item.score.preferredScoreEngine}</Badge>
      </div>
      <h3 className="mt-3 flex items-center gap-2 font-medium">
        <Music2 className="h-4 w-4 text-accent" aria-hidden="true" />
        {item.score.scoreTitle}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {item.score.audioUrl || item.score.showAudioPlayer
          ? "Preview score + audio."
          : "Preview score."}
      </p>
      <Link className={buttonVariants({ variant: "accent", size: "sm" })} href="/media/score-sync">
        Open ScoreSync
      </Link>
    </div>
  );
}
