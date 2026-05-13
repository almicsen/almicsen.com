import { ExternalLink, FileText, PlaySquare } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MediaItem } from "@/lib/cms/types";
import { resolveMediaSource } from "@/lib/media/provider";

export function MediaWrapper({ item }: { item: MediaItem }) {
  const source = resolveMediaSource(item);
  const isPdf = item.kind === "PDF";
  const isVideo = item.kind === "VIDEO";
  const statusLabel = source.storageStatus.replaceAll("-", " ");

  return (
    <Card className="polished-card overflow-hidden">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{item.kind}</Badge>
          <Badge>{source.providerLabel}</Badge>
          <Badge variant="secondary">{statusLabel}</Badge>
        </div>
        <CardTitle className="flex items-center gap-2">
          {isPdf ? (
            <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
          ) : (
            <PlaySquare className="h-5 w-5 text-accent" aria-hidden="true" />
          )}
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="overflow-hidden rounded-lg border bg-background shadow-inner">
            <div className="flex items-center justify-between border-b bg-secondary/40 px-3 py-2">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
              </div>
              <span className="truncate px-3 font-mono text-[11px] text-muted-foreground">
                {source.providerName}
              </span>
            </div>
            {isVideo && source.embedUrl ? (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full"
                referrerPolicy="strict-origin-when-cross-origin"
                src={source.embedUrl}
                title={item.title}
              />
            ) : null}
            {isPdf ? (
              <div className="min-h-[32rem] bg-[linear-gradient(90deg,transparent_0,transparent_2.4rem,hsl(var(--border))_2.4rem,hsl(var(--border))_2.45rem,transparent_2.45rem)] p-6">
                <div className="mx-auto flex min-h-[28rem] max-w-lg flex-col rounded-md border bg-card p-8 shadow-2xl">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-mono text-xs uppercase text-accent">External PDF</p>
                      <p className="mt-1 text-sm font-medium">{item.title}</p>
                    </div>
                    <FileText className="h-8 w-8 text-accent" aria-hidden="true" />
                  </div>
                  <div className="mt-8 space-y-3">
                    <span className="block h-2 rounded-full bg-muted-foreground/35" />
                    <span className="block h-2 w-10/12 rounded-full bg-muted-foreground/25" />
                    <span className="block h-2 w-11/12 rounded-full bg-muted-foreground/25" />
                    <span className="block h-2 w-7/12 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div className="mt-10 grid flex-1 place-items-center rounded-md border border-dashed bg-secondary/20 p-8 text-center">
                    <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                      Third-party PDFs open from their source URL. This shell avoids broken embeds
                      while keeping the CMS metadata visible.
                    </p>
                  </div>
                  <div className="mt-8 space-y-2">
                    <span className="block h-2 rounded-full bg-muted-foreground/20" />
                    <span className="block h-2 w-8/12 rounded-full bg-muted-foreground/15" />
                  </div>
                </div>
              </div>
            ) : null}
            {!source.embedUrl ? (
              <div className="flex aspect-video flex-col items-center justify-center gap-3 p-6 text-center">
                {isPdf ? (
                  <FileText className="h-10 w-10 text-accent" aria-hidden="true" />
                ) : (
                  <PlaySquare className="h-10 w-10 text-accent" aria-hidden="true" />
                )}
                <p className="max-w-md text-sm text-muted-foreground">
                  This media item is link-only. The wrapper still keeps provider, visibility, and
                  future storage metadata in one place.
                </p>
              </div>
            ) : null}
          </div>
          <div className="quiet-panel rounded-lg border p-4">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase text-muted-foreground">Provider</dt>
                <dd className="mt-1 text-foreground">{source.providerLabel}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted-foreground">Storage</dt>
                <dd className="mt-1 text-foreground">{statusLabel}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted-foreground">Uploads</dt>
                <dd className="mt-1 text-foreground">
                  {source.canUpload ? "Available" : "Not wired in v1"}
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">{source.storageNote}</p>
            <div className="mt-5">
              <a
                className={buttonVariants({ variant: "accent", size: "sm" })}
                href={source.publicUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open source file
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
