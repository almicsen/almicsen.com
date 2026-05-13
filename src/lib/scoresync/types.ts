import type { Visibility } from "@/lib/cms/types";

export type ScoreRenderEngine =
  | "PDF_AUDIO"
  | "MUSICXML_OSMD"
  | "MEI_VEROVIO"
  | "EXTERNAL_EMBED"
  | "MANUAL_ONLY";

export type ScoreLayoutMode =
  | "AUTO_SCORE_BOOK"
  | "SINGLE_PAGE"
  | "TWO_PAGE_SPREAD"
  | "CONTINUOUS_SCROLL"
  | "MANUAL";

export type ScoreDownloadPermission =
  | "PUBLIC"
  | "LOGGED_IN"
  | "FRIEND_ONLY"
  | "ADMIN_ONLY"
  | "DISABLED";

export type ScoreNodeFrameActionType =
  | "TURN_TO_PAGE"
  | "TURN_TO_SPREAD"
  | "HIGHLIGHT_REGION"
  | "HIGHLIGHT_MEASURE"
  | "HIGHLIGHT_NOTE_RANGE"
  | "SCROLL_TO_REGION"
  | "SHOW_CALLOUT"
  | "CUSTOM";

export type ScoreRegionUnit = "PERCENT" | "PX";

export type ScoreRegion = {
  x: number;
  y: number;
  width: number;
  height: number;
  unit: ScoreRegionUnit;
};

export type ScoreNodeFrame = {
  id: string;
  scoreMediaId: string;
  label: string;
  startTimeMs: number;
  endTimeMs?: number;
  actionType: ScoreNodeFrameActionType;
  pageNumber?: number;
  spreadIndex?: number;
  region?: ScoreRegion;
  measureStart?: number;
  measureEnd?: number;
  noteIds?: string[];
  easing?: string;
  animationDurationMs?: number;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ScoreMedia = {
  id: string;
  isMusicScore: true;
  scoreTitle: string;
  scoreSubtitle?: string;
  composer?: string;
  arranger?: string;
  instrumentation?: string;
  difficulty?: string;
  durationLabel?: string;
  durationMs?: number;
  pageCount: number;
  scorePdfUrl?: string;
  audioUrl?: string;
  musicXmlUrl?: string;
  midiUrl?: string;
  externalMuseScoreEmbedUrl?: string;
  externalMuseScoreEmbedCode?: string;
  preferredScoreEngine: ScoreRenderEngine;
  scoreLayoutMode: ScoreLayoutMode;
  firstPageSolo: boolean;
  pagesPerSpreadAfterFirst: number;
  autoTurnPages: boolean;
  showAudioPlayer: boolean;
  showPageThumbnails: boolean;
  showFullscreenButton: boolean;
  showDownloadButton: boolean;
  downloadPermission: ScoreDownloadPermission;
  allowExternalOpen: boolean;
  visibility: Visibility;
  nodeFrames: ScoreNodeFrame[];
};

export type ScoreSpread = {
  index: number;
  pageNumbers: number[];
  label: string;
};
