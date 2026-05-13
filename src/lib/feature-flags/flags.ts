import { featureFlags } from "@/lib/cms/mock-data";

export type FeatureFlagKey =
  | "easteregg.boopFatFingers"
  | "friends.corner"
  | "shop.enabled"
  | "writing.enabled"
  | "projects.enabled"
  | "media.pdfViewer"
  | "media.videoWrapper"
  | "media.scoreSync"
  | "media.scoreSync.nodeFrames"
  | "media.scoreSync.externalMuseScore"
  | "media.scoreSync.musicXmlOsmd"
  | "media.scoreSync.meiVerovio";

export function isFeatureEnabled(key: FeatureFlagKey) {
  return featureFlags.some((flag) => flag.key === key && flag.enabled);
}
