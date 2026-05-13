import { Clock3, FileMusic, ListPlus, Music2, Settings2 } from "lucide-react";

import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminFieldList } from "@/components/admin/admin-field-list";
import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminSectionCard } from "@/components/admin/admin-section-card";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPublicScoreMediaItems } from "@/lib/cms/service";

export default function AdminScoreSyncPage() {
  const scoreItems = getPublicScoreMediaItems();
  const nodeFrames = scoreItems.flatMap((item) => item.score?.nodeFrames ?? []);

  return (
    <AdminPageShell
      title="ScoreSync"
      description="Score media, PDF/audio settings, and manual Node Frames are scaffolded here. Writes remain disabled until CMS CRUD is activated."
      actions={
        <>
          <Button disabled size="sm" variant="accent">
            New score media
          </Button>
          <Button disabled size="sm" variant="outline">
            Add Node Frame
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          detail="Public score items"
          icon={<FileMusic className="h-4 w-4" aria-hidden="true" />}
          label="Scores"
          value={String(scoreItems.length)}
        />
        <AdminStatCard
          detail="Manual sync markers"
          icon={<Clock3 className="h-4 w-4" aria-hidden="true" />}
          label="Node Frames"
          value={String(nodeFrames.length)}
        />
        <AdminStatCard
          detail="PDF + audio in v1"
          icon={<Music2 className="h-4 w-4" aria-hidden="true" />}
          label="Native engine"
          value="ready"
        />
        <AdminStatCard
          detail="OSMD/Verovio later"
          icon={<Settings2 className="h-4 w-4" aria-hidden="true" />}
          label="Future engines"
          value="flagged"
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminSectionCard
          description="The score media editor should expose these fields when writes are enabled."
          icon={<FileMusic className="h-5 w-5" aria-hidden="true" />}
          title="Score media fields"
          actionLabel="Open score editor disabled"
        >
          <AdminFieldList
            items={[
              "isMusicScore",
              "scoreTitle and scoreSubtitle",
              "composer, arranger, instrumentation, difficulty",
              "durationLabel and durationMs",
              "scorePdfUrl, audioUrl, musicXmlUrl, midiUrl",
              "externalMuseScoreEmbedUrl",
              "preferredScoreEngine",
              "scoreLayoutMode and AUTO_SCORE_BOOK defaults",
              "firstPageSolo and pagesPerSpreadAfterFirst",
              "downloadPermission and allowExternalOpen",
              "visibility/status fields",
            ]}
          />
        </AdminSectionCard>
        <AdminEmptyState
          actionLabel="Save score disabled"
          description="Score writes, uploads, waveform editing, and external embed sanitization stay locked until database-backed CMS editing exists."
          icon={<Music2 className="h-5 w-5 text-accent" aria-hidden="true" />}
          title="Score writes are disabled"
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4">
          {nodeFrames.map((frame) => (
            <Card className="polished-card" key={frame.id}>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={frame.enabled ? "accent" : "secondary"}>
                    {frame.enabled ? "enabled" : "disabled"}
                  </Badge>
                  <Badge variant="outline">{frame.actionType.toLowerCase().replaceAll("_", " ")}</Badge>
                </div>
                <CardTitle className="text-base">{frame.label}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <span>Start: {frame.startTimeMs}ms</span>
                <span>End: {frame.endTimeMs ?? "open"}ms</span>
                <span>Page: {frame.pageNumber ?? "auto"}</span>
                <span>Spread: {frame.spreadIndex ?? "auto"}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <AdminSectionCard
          description="Minimum v1 Node Frame editing can start with structured fields before any waveform or timeline UI exists."
          icon={<ListPlus className="h-5 w-5" aria-hidden="true" />}
          title="Node Frame editor fields"
          actionLabel="Add frame disabled"
        >
          <AdminFieldList
            items={[
              "label",
              "startTimeMs and optional endTimeMs",
              "actionType",
              "pageNumber or spreadIndex",
              "region x/y/width/height/unit",
              "animationDurationMs and easing",
              "enabled",
            ]}
          />
        </AdminSectionCard>
      </div>
    </AdminPageShell>
  );
}
