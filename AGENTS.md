# AGENTS.md

## Project

Project name: Almicsen
Repository: almicsen-web
Target domain: almicsen.com

## Purpose

This is a personal web platform for almicsen. It is not just a static portfolio. It should grow into a CMS-driven personal platform with projects, writing, creative work, external shop links, admin controls, feature flags, friend-only features, and future ecommerce/storage/paywall support.

## Identity

Primary public identity: almicsen

Secondary identity: Alan Michaelsen

Use Alan Michaelsen only in About/business-safe contexts unless explicitly changed.

Do not expose exact location or contact email by default.

No owner photos by default.

## Design Principles

- Dark-mode-first.
- Premium, clean, and polished.
- Inspired by Apple-like spacing/clarity, Google-like usability, futuristic glass/3D accents, dark cinematic mood, and small nostalgic internet details.
- Must not look like a generic AI-generated portfolio or SaaS template.
- Avoid fake corporate language.
- Avoid stock-photo filler.
- Avoid unnecessary gradients everywhere.
- Avoid overused AI phrases.
- No owner photos by default.
- Use "almicsen" as the primary public identity.
- Use "Alan Michaelsen" only in About/business-safe contexts unless explicitly changed.

## Tone

Personal, sharp, slightly funny, but still business-safe.

Homepage hero line:

"I build creative digital things, but this site ain't one of them."

Supporting line:

"Projects, writing, experiments, and the occasional questionable Easter egg."

## Architecture Principles

- Prefer simple, deployable v1 over massive unfinished systems.
- Build clear extension points for future features.
- Keep admin and public code clearly separated.
- Use TypeScript strictly.
- Use accessible semantic markup.
- Keep reusable UI components clean and not over-abstracted.
- Use environment variables for secrets.
- Never hardcode API keys, credentials, tokens, database URLs, OAuth secrets, or private user data.
- Design for Vercel deployment.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Prisma
- PostgreSQL-ready database
- Auth.js / NextAuth-compatible authentication
- Vercel deployment

## Auth and Roles

Initial roles:

- Owner
- Admin
- Editor
- Friend
- Member
- Public/Guest

Future auth providers:

- Email/password
- Magic link
- Google
- Discord

Discord should be linkable to an existing account later.

## CMS Objects

- Projects
- Writing/blog posts
- Shop products
- Media metadata
- Feature flags
- Friend homepage placeholders
- Site settings

## Visibility States

- Draft
- Published
- Private
- Unlisted
- Friend-only
- Admin-only

## Shop

V1 uses external purchase links only.

Do not implement checkout, taxes, order handling, refunds, or payment webhooks yet.

Product cards should clearly warn when a button opens a third-party seller.

Future ecommerce should be planned but not built until explicitly requested.

## Media

V1 supports external links/embeds.

Do not use GitHub as the long-term media storage engine.

Do not use Telegram as storage.

Prepare storage abstraction for Vercel Blob or another provider later.

Build custom PDF/video display wrappers, but do not build full streaming/transcoding infrastructure yet.

## Friend/Easter Egg Rules

First Easter egg is "Boop the Fat Fingers."

It is based on a friend's inside joke.

Public UI must use original assets and wording.

Do not copy or directly reference Five Nights at Freddy's characters, logos, names, or art.

Feature flags should allow it to be disabled, hidden, or made friend-only later.

## Build Expectations

Before major changes:

- Inspect existing files.
- Make a short plan.
- Prefer small, coherent commits/changes.

After changes:

- Run available checks such as lint, typecheck, test, and build.
- Report what passed and what failed.
- Explain important tradeoffs.

## Do Not

- Do not overbuild beyond the requested phase.
- Do not introduce paid services unless explicitly approved.
- Do not add large binary assets.
- Do not invent personal details about the owner.
- Do not expose location or contact email by default.
- Do not create public friend-generated pages without owner approval/moderation.
