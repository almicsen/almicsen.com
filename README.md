# Almicsen

Personal platform for almicsen: portfolio, writing, projects, shop links, admin CMS scaffolding, and friend-only experiments.

Target domain: `almicsen.com`

## Purpose

Almicsen is planned as a personal web platform, not a basic static portfolio. It should grow into a CMS-driven site with public pages, projects, writing, creative work, external shop links, admin controls, feature flags, friend-only features, and future ecommerce, storage, and paywall support.

The primary public identity is `almicsen`. The secondary identity, `Alan Michaelsen`, should only be used in About, business-safe, resume-style, or admin metadata contexts unless explicitly changed.

## Tech Stack

Planned stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Prisma
- PostgreSQL-ready database
- Auth.js / NextAuth-compatible authentication
- Vercel deployment

## Setup

Install dependencies, create a local environment file, and start the dev server:

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The app is designed for `pnpm` in v1. Keep real secrets out of git.

## Environment Variables

Expected environment variable placeholders are documented in `.env.example`:

```dotenv
# Required when real Prisma persistence is enabled.
DATABASE_URL=

# Required before real Auth.js sessions are used in production.
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Optional provider credentials. Leave blank until the provider is approved/configured.
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

# Optional owner promotion for signed-in accounts. Do not expose this publicly.
ALMICSEN_OWNER_EMAIL=

# Local scaffolding only. Keep disabled in production.
ALMICSEN_ENABLE_DEV_AUTH=
ALMICSEN_DEV_AUTH_ROLE=
```

Do not commit real secrets, credentials, API keys, OAuth secrets, database URLs, or private user data.

Auth notes:

- `ALMICSEN_OWNER_EMAIL` can promote a signed-in Google/Discord account to `OWNER`.
- `ALMICSEN_ENABLE_DEV_AUTH=true` enables the local placeholder admin session outside normal development mode.
- `ALMICSEN_DEV_AUTH_ROLE` can be set to `OWNER`, `ADMIN`, `EDITOR`, `FRIEND`, or `MEMBER` for local role testing.
- Do not put a public contact email in site copy by default.

## Local Development Commands

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm prisma:generate
```

## Build Commands

```bash
pnpm build
```

## Vercel Deployment Notes

The app should be deployable to Vercel as a Next.js project named `almicsen-web`.
Version 1 avoids paid services and keeps integrations optional unless explicitly approved.

Deployment should use environment variables for database, auth, and provider secrets. Future
storage should be designed around providers such as Vercel Blob or another approved storage
service, not GitHub or Telegram as long-term media storage.

For Vercel:

1. Import the repository.
2. Framework preset should auto-detect as Next.js.
3. Install command: `pnpm install`.
4. Build command: `pnpm build`.
5. Output directory: leave as the Vercel default for Next.js.
6. Do not add the custom `almicsen.com` domain yet.
7. Do not enable paid storage, checkout, or media services until the relevant future phase is approved.

Environment behavior for v1:

- The public site can build with mock CMS data and no production secrets.
- `DATABASE_URL` is required when real Prisma persistence is activated.
- `NEXTAUTH_SECRET` and `NEXTAUTH_URL` are required before production auth sessions are used.
- Google/Discord OAuth values are optional until those providers are configured.
- `ALMICSEN_ENABLE_DEV_AUTH` must stay disabled in production.

Deployment details and manual checks live in `docs/DEPLOYMENT.md`.

## Implemented

- Next.js App Router foundation.
- TypeScript configuration.
- Tailwind CSS v4 theme tokens.
- shadcn/ui-style local primitives for buttons, cards, badges, and separators.
- Framer Motion homepage entrance animation.
- Public pages for Home, About, Projects, Creative Work, Writing, Blog, Shop, Friends, PDF media, and Video media.
- Admin route shell with role-aware access checks and pages for dashboard, projects, writing, shop, users/roles, feature flags, and settings.
- API placeholders for projects, writing, shop, feature flags, and Auth.js route handlers.
- Prisma PostgreSQL-ready schema draft.
- Role and permission helpers for admin access, content management, settings, feature flags, friend features, and visibility checks.
- Auth.js / NextAuth-compatible provider scaffolding for Google and Discord, with JWT/session role propagation.
- Feature flag scaffolding.
- Metadata/SEO basics, generated OpenGraph placeholder art, robots, and sitemap routes.
- CMS-style read-only repository adapters and public rendering services.
- Project detail routes plus category-filtered project, writing, blog, and shop listings.
- Creative Work grouping across projects, writing, and media metadata.
- External media provider abstraction.
- Custom PDF and video media wrappers with provider metadata and explicit v1 storage limits.
- ScoreSync framework scaffold for PDF/audio score media, manual Node Frames, project/shop references, and admin placeholders.
- External-link shop behavior with third-party checkout warning.
- Original "Boop the Fat Fingers" mini-widget behind a feature flag.
- Durable project instructions in `AGENTS.md`.
- Roadmap in `docs/ROADMAP.md`.
- Design direction in `docs/DESIGN_DIRECTION.md`.
- Build phases in `docs/PHASES.md`.

## Scaffolded

- Real database persistence. The Prisma schema exists, but v1 public rendering uses typed mock data.
- Real login. Auth.js route/provider structure exists, but OAuth credentials are not configured.
- Admin authorization. `/admin` checks session roles and falls back to explicit development auth only for local scaffolding.
- CMS editing. Admin pages are honest placeholders, not active CRUD screens.
- Media storage. External links and wrappers exist; upload, private permissions, Vercel Blob wiring, and transcoding are deferred.
- ScoreSync engines. PDF/audio/manual Node Frames are scaffolded; MusicXML/OSMD, MEI/Verovio, real audio files, waveform editing, and automatic note-level highlighting are deferred.
- Ecommerce. Shop cards use external seller links only.

## Future Work

- Wire Prisma to a real PostgreSQL database.
- Configure Auth.js providers, set `ALMICSEN_OWNER_EMAIL`, and connect roles to persisted users.
- Replace development auth fallback before any public admin launch.
- Add CRUD for projects, writing, shop products, media metadata, feature flags, and settings.
- Add richer visual polish and responsive QA.
- Add real storage provider integration only after approval.
- Extend ScoreSync with real PDF rendering, audio files, MusicXML/OSMD, MEI/Verovio, and timeline editing when source files exist.
- Plan payments, taxes, order handling, and refunds before any checkout work.
