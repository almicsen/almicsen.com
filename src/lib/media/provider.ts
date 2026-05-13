import type { MediaItem } from "@/lib/cms/types";

export type MediaProvider = {
  name: string;
  label: string;
  resolve(item: MediaItem): ResolvedMediaSource;
  canUpload: boolean;
  storageStatus: "external-only" | "planned";
};

export type ResolvedMediaSource = {
  providerName: string;
  providerLabel: string;
  publicUrl: string;
  embedUrl?: string;
  canEmbed: boolean;
  canUpload: boolean;
  storageStatus: MediaProvider["storageStatus"];
  storageNote: string;
};

export const externalMediaProvider: MediaProvider = {
  name: "external-url",
  label: "External URL",
  canUpload: false,
  storageStatus: "external-only",
  resolve(item) {
    const embedUrl = item.embedUrl ?? (item.kind === "PDF" ? item.url : undefined);

    return {
      providerName: externalMediaProvider.name,
      providerLabel: item.provider || externalMediaProvider.label,
      publicUrl: item.url,
      embedUrl,
      canEmbed: Boolean(embedUrl),
      canUpload: externalMediaProvider.canUpload,
      storageStatus: externalMediaProvider.storageStatus,
      storageNote:
        "V1 resolves public external URLs only. Uploads, private media, Blob storage, and transcoding are intentionally deferred.",
    };
  },
};

export const plannedBlobMediaProvider: MediaProvider = {
  name: "vercel-blob-planned",
  label: "Vercel Blob planned",
  canUpload: false,
  storageStatus: "planned",
  resolve(item) {
    return {
      providerName: plannedBlobMediaProvider.name,
      providerLabel: plannedBlobMediaProvider.label,
      publicUrl: item.url,
      embedUrl: item.embedUrl,
      canEmbed: Boolean(item.embedUrl),
      canUpload: plannedBlobMediaProvider.canUpload,
      storageStatus: plannedBlobMediaProvider.storageStatus,
      storageNote:
        "This provider is a future extension point. It is not connected to paid storage or upload flows yet.",
    };
  },
};

export function resolveMediaSource(item: MediaItem) {
  return externalMediaProvider.resolve(item);
}
