import { ScoreSyncViewer } from "@/components/scoresync/score-sync-viewer";
import { PageShell } from "@/components/layout/page-shell";
import { getPublicScoreMediaItems } from "@/lib/cms/service";
import { isFeatureEnabled } from "@/lib/feature-flags/flags";

export default function ScoreSyncMediaPage() {
  const isEnabled = isFeatureEnabled("media.scoreSync");
  const scoreItems = isEnabled ? getPublicScoreMediaItems() : [];

  return (
    <PageShell
      eyebrow="Media"
      title="ScoreSync Framework"
      description="Reusable score/PDF viewing with audio timeline simulation and manual Node Frames. V1 supports PDF-style pages, not automatic note detection from plain PDFs."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {scoreItems.length} score source
        </div>
      }
    >
      <div className="space-y-6">
        {scoreItems.map((item) =>
          item.score ? <ScoreSyncViewer key={item.slug} score={item.score} /> : null,
        )}
        {scoreItems.length === 0 ? (
          <div className="quiet-panel rounded-lg border p-5 text-sm text-muted-foreground">
            ScoreSync is disabled or no public score media exists.
          </div>
        ) : null}
      </div>
    </PageShell>
  );
}
