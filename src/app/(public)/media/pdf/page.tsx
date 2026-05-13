import { MediaWrapper } from "@/components/media/media-wrapper";
import { PageShell } from "@/components/layout/page-shell";
import { getPublicMediaItemsByKind } from "@/lib/cms/service";

export default function PdfMediaPage() {
  const pdfItems = getPublicMediaItemsByKind("PDF");

  return (
    <PageShell
      eyebrow="Media"
      title="A custom-looking PDF wrapper without pretending storage is done."
      description="V1 supports external document links inside a branded shell. Uploads, permissions, and Blob storage stay deferred."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          {pdfItems.length} PDF source
        </div>
      }
    >
      <div className="grid gap-6">
        {pdfItems.map((item) => (
          <MediaWrapper item={item} key={item.slug} />
        ))}
      </div>
    </PageShell>
  );
}
