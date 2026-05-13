import type { ScoreMedia, ScoreRenderEngine } from "@/lib/scoresync/types";

export type ScoreEngineDefinition = {
  key: ScoreRenderEngine;
  name: string;
  ready: boolean;
  description: string;
};

export const scoreEngines: Record<ScoreRenderEngine, ScoreEngineDefinition> = {
  PDF_AUDIO: {
    key: "PDF_AUDIO",
    name: "PDF + audio",
    ready: true,
    description: "Native v1 engine for PDF-style pages, audio playback, and manual Node Frames.",
  },
  MUSICXML_OSMD: {
    key: "MUSICXML_OSMD",
    name: "MusicXML / OSMD",
    ready: false,
    description: "Future OpenSheetMusicDisplay renderer for measure-level and cursor workflows.",
  },
  MEI_VEROVIO: {
    key: "MEI_VEROVIO",
    name: "MEI / Verovio",
    ready: false,
    description: "Future Verovio renderer for MEI/SVG score rendering.",
  },
  EXTERNAL_EMBED: {
    key: "EXTERNAL_EMBED",
    name: "External embed",
    ready: true,
    description: "Controlled iframe fallback for approved external score embeds.",
  },
  MANUAL_ONLY: {
    key: "MANUAL_ONLY",
    name: "Manual only",
    ready: true,
    description: "Static score display with manual page navigation and no automatic sync.",
  },
};

export function resolveScoreEngine(score: ScoreMedia) {
  return scoreEngines[score.preferredScoreEngine] ?? scoreEngines.PDF_AUDIO;
}
