# ScoreSync Framework

ScoreSync is Almicsen's reusable score-media framework for sheet-music-style experiences. It is designed to work across projects, creative work, shop previews, writing/blog posts, media pages, and admin CMS editing.

## V1 Support

The v1 framework supports:

- PDF-style score display through native site UI.
- Optional audio/timeline playback.
- Manual Node Frames for page turns, spread turns, callouts, and region highlights.
- AUTO_SCORE_BOOK layout: page 1 alone, then page 2/3, 4/5, and so on.
- Project and shop references to reusable score media.
- Admin scaffolding for score fields and Node Frame editing.

The current demo does not require real score/audio files. It renders mock score pages and simulates audio timing so the framework can be tested without paid storage or upload infrastructure.

## Plain PDF Limitation

A plain PDF does not contain reliable musical timing data. ScoreSync does not promise note-by-note highlighting from a PDF alone.

For PDF + audio, v1 supports page-level, spread-level, and region-level sync using manually created Node Frames.

## Node Frames

A Node Frame is a timed marker that connects an audio time range to a score view action.

Core fields:

- `label`
- `startTimeMs`
- optional `endTimeMs`
- `actionType`
- optional `pageNumber`
- optional `spreadIndex`
- optional `region`
- optional animation fields
- `enabled`

Supported v1 actions include page/spread turns, region highlights, scroll/callout scaffolding, and future custom actions.

## Future Engines

ScoreSync has placeholders for:

- `MUSICXML_OSMD`: future OpenSheetMusicDisplay rendering.
- `MEI_VEROVIO`: future Verovio rendering.
- `EXTERNAL_EMBED`: controlled external iframe fallback.

MusicXML, MIDI, or MEI data can unlock more precise cursor, measure, and note workflows later. Those engines are feature-flagged and not active v1 dependencies.

## MuseScore Fallback

MuseScore embeds may be used only as an optional external embed fallback. ScoreSync does not scrape MuseScore, rely on private APIs, or use MuseScore as the core engine.

If external embed support is activated later, use controlled iframe URLs from approved domains. Do not store or render arbitrary unsafe embed HTML without sanitization.

## Reuse

Projects can reference score media as gallery items. Shop products can reference preview score media and show "Preview score + audio" while keeping checkout external. Writing/blog posts can later embed the same `ScoreSyncViewer` when score media references are added to editorial content.

## Admin Scaffolding

The admin ScoreSync page models:

- score media fields
- preferred render engine
- score layout mode
- permissions
- manual Node Frame fields

Writes are disabled until database-backed CMS editing is activated.
