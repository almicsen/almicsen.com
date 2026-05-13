import { MediaWrapper } from "@/components/media/media-wrapper";
import { PageShell } from "@/components/layout/page-shell";
import { getPublicMediaItemsByKind } from "@/lib/cms/service";

export default function VideoMediaPage() {
  const videoItems = getPublicMediaItemsByKind("VIDEO");

  return (
    <PageShell
      eyebrow="Media"
      title="A video wrapper for embeds and external files."
      description="This is a site-native shell for video links and embeds, not a streaming or transcoding engine."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {videoItems.length} video source
        </div>
      }
    >
      <div className="grid gap-6">
        {videoItems.map((item) => (
          <MediaWrapper item={item} key={item.slug} />
        ))}
      </div>
    </PageShell>
  );
}
