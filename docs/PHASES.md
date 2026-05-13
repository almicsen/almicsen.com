# Almicsen Build Phases

## Prompt 1: V1 Foundation

Create the initial deployable Next.js App Router project with TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, public pages, admin shell routes, auth/role scaffolding, feature flag scaffolding, CMS-ready structure, and Vercel-ready configuration.

Do not overbuild full CMS behavior yet. The goal is a clean platform foundation that can ship.

## Prompt 2: Visual Polish

Refine the public visual system so the site feels premium, dark-mode-first, personal, cinematic, and custom. Improve spacing, typography, motion, page composition, navigation states, and responsive behavior.

Avoid generic AI portfolio styling, fake stock content, and fake corporate sections.

## Prompt 3: Database/Auth/Roles

Wire the database layer, Prisma schema, Auth.js/NextAuth-compatible setup, environment variables, role model, protected route structure, and permission helpers.

Keep secrets in environment variables only.

## Prompt 4: Admin Dashboard

Build the admin dashboard shell into a practical CMS control surface. Add navigation, empty states, placeholder actions, role-aware structure, and pages for projects, writing, shop, users, feature flags, and settings.

Use honest placeholders instead of fake metrics.

## Prompt 5: CMS Rendering

Connect public pages to structured CMS-like data. Render projects, writing/blog posts, shop products, and feature-flag-aware sections from typed data sources or database-backed models depending on the stage of the build.

## Prompt 6: Media Wrappers

Build custom-looking PDF and video wrappers for external media. Support external links and embeds without building full upload, transcoding, adaptive streaming, or storage infrastructure yet.

Prepare clean extension points for Vercel Blob or another storage provider later.

## Prompt 7: Easter Egg

Implement "Boop the Fat Fingers" as an original, legally safer retro/arcade-style mini-widget. It can include a boop counter, small animation, and funny microcopy.

Do not use Five Nights at Freddy's art, names, logos, screenshots, character designs, or endorsement implications.

Feature flags should allow it to be disabled, hidden, public, or friend-only later.

## Prompt 8: ScoreSync Framework

Add reusable score-media scaffolding for PDF/audio score experiences, manual Node Frames, public viewer components, admin score fields, project/shop references, feature flags, and documentation.

Do not build deployment cleanup yet.

## Prompt 9: Vercel Cleanup

Prepare for deployment. Verify build commands, environment variable documentation, Vercel settings, route behavior, metadata, accessibility basics, responsive layout, and production-readiness notes.

Run lint, typecheck, test, and build checks when available. Report what passed and what remains.
