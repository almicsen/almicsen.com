# Deployment Notes

Target production domain: `almicsen.com`

Vercel project name: `almicsen-web`

Do not add the custom domain until the owner explicitly asks for that phase.

## Current V1 Shape

The public site is deployable without paid services because v1 uses typed mock CMS data. Real
database persistence, OAuth sign-in, uploads, private media, and checkout are scaffolded but not
active production dependencies.

## Vercel Settings

- Framework preset: Next.js
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: Vercel default
- Node/package manager: use the lockfile, `pnpm-lock.yaml`

Do not enable paid services, buy a domain, add payment methods, or attach the custom domain in this
phase.

## Environment Variables

Safe v1 preview deployments can build with the variables left blank because public rendering uses
mock data and real auth is not active.

Required later:

- `DATABASE_URL`: required when Prisma is wired to a real PostgreSQL database.
- `NEXTAUTH_SECRET`: required before production Auth.js sessions are used.
- `NEXTAUTH_URL`: should match the deployed site URL when production auth is active.

Optional until configured:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `DISCORD_CLIENT_ID`
- `DISCORD_CLIENT_SECRET`
- `ALMICSEN_OWNER_EMAIL`

Local-only:

- `ALMICSEN_ENABLE_DEV_AUTH`
- `ALMICSEN_DEV_AUTH_ROLE`

Keep `ALMICSEN_ENABLE_DEV_AUTH` disabled in Vercel production.

## SEO And Indexing

The app includes:

- Root metadata for title, description, canonical URL, OpenGraph, and Twitter card data.
- A generated `opengraph-image` route with original placeholder art and no owner photos.
- `robots.txt` allowing public routes and disallowing `/admin` and `/api`.
- `sitemap.xml` for public routes plus public project/writing detail pages.
- Admin layout metadata set to noindex/nofollow.

## Auth And Admin State

Auth.js route handlers, providers, roles, and session shaping are scaffolded. Admin pages use role
checks and fail closed unless an allowed session exists. The current admin CMS is not a production
editing backend yet; writes are intentionally disabled until database-backed CRUD is added.

## Media And ScoreSync State

Media v1 supports external links, PDF/video display wrappers, provider metadata, and a future
storage abstraction. It does not use GitHub or Telegram as long-term storage.

ScoreSync v1 supports mock PDF/audio score media, manual Node Frames, project/shop references, and
admin placeholders. MusicXML/OSMD, MEI/Verovio, real waveform editing, uploads, streaming, and
automatic note-level sync are deferred.

## Pre-Deploy Checks

Run before pushing/deploying:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Also confirm no real `.env` files, secrets, `.next`, `node_modules`, logs, or macOS `._*` sidecar
files are staged.
