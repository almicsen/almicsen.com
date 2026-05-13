import { Badge } from "@/components/ui/badge";
import { resolveScoreEngine } from "@/lib/scoresync/engines";
import type { ScoreMedia } from "@/lib/scoresync/types";

export function ScoreEngineSwitcher({ score }: { score: ScoreMedia }) {
  const engine = resolveScoreEngine(score);

  return (
    <div className="quiet-panel rounded-lg border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={engine.ready ? "accent" : "secondary"}>{engine.name}</Badge>
        <Badge variant="outline">{score.scoreLayoutMode.toLowerCase().replaceAll("_", " ")}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">{engine.description}</p>
    </div>
  );
}
