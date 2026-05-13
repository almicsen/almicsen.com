# Almicsen Codex Handoff

## How to use this file

Use this in two steps:

1. Run **Codex Prompt 0** first.
   - This creates `AGENTS.md`, `README.md`, and roadmap/design docs.
   - This gives Codex durable project instructions before the real build.

2. Run **Codex Prompt 1** second.
   - This creates the actual v1 app foundation.

After that, run the follow-up prompts one at a time.

---

# Core decisions

Domain: `almicsen.com`
GitHub repo: `almicsen-web`
App name: `Almicsen`
Primary public identity: `almicsen`
Secondary identity: `Alan Michaelsen`, used in About/business-safe sections only.

The site is a personal web platform, not a basic portfolio.

It should eventually support:

- Public personal website
- About page
- Projects
- Creative work
- Writing/blog system
- Shop with external seller links
- Admin CMS
- Login/accounts
- Roles and permissions
- Feature flags
- Friend-only features
- Friend-created homepages later
- Easter eggs
- Future ecommerce
- Future paywalls
- Future media storage
- Custom PDF viewer
- Custom video wrapper/player

Version 1 should get the site online quickly, while creating a clean foundation for the bigger platform later.

---

# Recommended repo

Create a new GitHub repo:

almicsen-web

Recommended repo description:

Personal platform for almicsen: portfolio, writing, projects, shop links, admin CMS, and friend-only experiments.

Make the repo private at first.

---

# Recommended stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Prisma
- PostgreSQL-ready schema
- Auth.js / NextAuth-compatible auth architecture
- Vercel deployment

The app should be deployable to Vercel.

Do not require paid services for version 1.

---

# Visual direction

The site should be:

- Dark-mode-first
- Premium
- Clean
- Personal
- Cinematic
- Slightly futuristic
- Slightly nostalgic internet
- Business-safe by default
- Not generic
- Not fake corporate
- Not obviously AI-generated

Design inspiration:

- Apple-like spacing, polish, restraint, and premium feel
- Google-like usability and clarity
- Futuristic glass/3D accents
- Dark cinematic atmosphere
- Nostalgic internet touches, but controlled and tasteful

Avoid:

- Generic SaaS landing-page look
- Fake startup copy
- Fake testimonials
- Random stock images
- Overused AI-template gradients
- “Unlock your potential”
- “Transform your workflow”
- “Seamless experience”
- Any copy that sounds like a generic AI portfolio template

No photos of the owner by default.

---

# Homepage copy

Use this prominently:

I build creative digital things, but this site ain’t one of them.

Supporting line:

Projects, writing, experiments, and the occasional questionable Easter egg.

Tone:

- Personal
- Sharp
- Slightly funny
- Still polished enough that business people can see it

---

# Identity rules

Primary identity:

almicsen

Use `Alan Michaelsen` only in:

- About page
- Business-safe sections
- Resume-style areas
- Admin/site metadata if needed

Do not make Alan Michaelsen the dominant homepage brand unless explicitly changed later.

Do not expose:

- Exact location
- Contact email on launch
- Too much personal info
- Personal stories by default unless deliberately published

Region can be vague later if needed.

---

# Version 1 scope

Version 1 should include:

1. Public homepage
2. About page
3. Projects page
4. Creative Work page
5. Writing page
6. Blog page
7. Shop page
8. Friends / Corner of Friends placeholder page
9. Admin dashboard shell
10. Protected `/admin` route
11. Placeholder admin pages for:
   - Projects
   - Writing
   - Shop
   - Users/Roles
   - Feature Flags
   - Site Settings
12. Role/auth scaffolding
13. CMS-ready schema
14. Feature flag scaffolding
15. External-link shop products
16. External media link support
17. Custom-looking PDF viewer wrapper
18. Custom-looking video wrapper
19. EM Easter egg: “Boop the Fat Fingers”
20. README
21. AGENTS.md
22. docs/ROADMAP.md
23. docs/DESIGN_DIRECTION.md
24. docs/PHASES.md

Version 1 should not include:

- Real checkout
- Stripe payments
- Taxes
- Order management
- Refund handling
- Full friend homepage builder
- Public friend-generated pages
- Real paywalls
- Full video upload/transcoding/streaming engine
- Paid APIs
- Telegram storage
- GitHub as a long-term media storage system

---

# Roles

Initial role model:

OWNER
ADMIN
EDITOR
FRIEND
MEMBER
PUBLIC/GUEST

Role meaning:

- Owner: full control
- Admin: trusted helper
- Editor: can manage content but not users/settings
- Friend: gets friend features later
- Member: normal logged-in account
- Public/Guest: no account

---

# Auth requirements

Version 1 should scaffold auth but does not need to fully complete every provider immediately.

Future sign-in methods:

- Email/password
- Magic link
- Google
- Discord

Discord should eventually be linkable to an existing account.

Admin routes must be protected or at least structured so protection is easy to enforce.

Do not hardcode credentials.

Do not commit secrets.

Use environment variables.

---

# CMS requirements

CMS should eventually support:

## Projects

Project fields should support:

- Title
- Subtitle
- Description
- Long writeup
- Tags
- Categories
- Date
- Status
- Featured flag
- Visibility
- Image URLs
- Video embed URLs
- PDF/document URLs
- GitHub links
- Credits/collaborators
- External links

Project visibility states:

DRAFT
PUBLISHED
PRIVATE
UNLISTED
FRIEND_ONLY
ADMIN_ONLY

Project statuses can include:

IDEA
IN_PROGRESS
PAUSED
SHIPPED
ARCHIVED

## Writing / Blog

Writing should feel like a personal Substack-style area.

Support:

- Title
- Subtitle/dek
- Body
- Category
- Tags
- Series/chapter structure
- Drafts
- Published posts
- Private posts
- Unlisted posts
- Friend-only posts
- Future friend-authored posts
- Content flags/warnings later if needed

Not everything should be shown at once. Users should be able to filter/select categories.

## Shop

Shop should support:

- Product title
- Subtitle
- Description
- Images
- Price display if known
- External purchase URL
- Seller/platform name
- Product status
- Visibility
- Tags/categories
- Featured flag

Version 1 shop behavior:

- No real payments.
- No checkout.
- No cart.
- Product cards live on the site.
- Buy button sends users to an external site.
- Clearly say when the user is leaving for a third-party seller.

Example button text:

Buy externally

Example warning/helper text:

This opens a third-party seller. Checkout is handled off-site.

Future ecommerce should be planned but not built yet.

---

# Media requirements

Version 1 media should support:

- External image URLs
- External video embeds
- External PDF/document links
- GitHub links for code
- YouTube/Vimeo-style embeds if used
- A custom-looking PDF viewer wrapper
- A custom-looking video wrapper/player

Do not build:

- Full upload system yet
- Full video transcoding
- Adaptive streaming
- Paid video hosting
- Telegram storage
- GitHub as long-term media storage

Prepare abstraction for later storage providers such as:

- Vercel Blob
- Supabase Storage
- UploadThing
- S3-compatible storage

GitHub can be used for small project files/code, but not as a media CDN.

Telegram should not be used for storage.

---

# Friend features

Future friend features should include:

- Friend role/flair
- Manually approved friend accounts only
- Friend homepage creation request
- Owner approval before anything public
- Friend-specific themes
- Friend-specific pages
- Friend-only private posts/files
- Friend-specific Easter eggs
- Moderation queue

No public users should create friend pages.

Only users who:

1. Have an account
2. Are manually approved
3. Have the Friend role/flair

should eventually be able to create friend homepages.

Friend page creation should be opt-in and owner-approved.

---

# Easter egg: Boop the Fat Fingers

First Easter egg:

Boop the Fat Fingers

Origin:

A friend, EM, responded to the idea of having a feature on the site with something like:

uhh one where theres a tab that u can boop freddy fat fingers

Public implementation should be legally safer.

Rules:

- Do not use Five Nights at Freddy’s art.
- Do not use official FNaF names in public UI.
- Do not use official character names.
- Do not use official logos.
- Do not copy official character designs.
- Do not use screenshots.
- Do not imply endorsement or affiliation.
- Make it an original retro/arcade-style mini-widget.
- It can have a silly button interaction.
- It can have a boop counter.
- It can have a small animation.
- It can have funny microcopy.
- It should be charming, harmless, and friend-facing.
- It should not overpower the professional side of the site.
- It should be controlled by feature flags.

Feature flag options should eventually allow:

- Public
- Disabled
- Friend-only
- Hidden/secret URL

Suggested public wording:

Boop the Fat Fingers

Suggested microcopy:

A tiny corner of the site dedicated to questionable button accuracy.

---

# Feature flags

Feature flags should support:

- Enable/disable pages
- Enable/disable Easter eggs
- Make sections public/private/friend-only later
- Prepare for paywall/login-gated features later

Feature flag fields:

- Key
- Name
- Description
- Enabled
- Visibility
- Created at
- Updated at

Example flags:

easteregg.boopFatFingers
friends.corner
shop.enabled
writing.enabled
projects.enabled
media.pdfViewer
media.videoWrapper

---

# Admin dashboard

Admin dashboard routes:

/admin
/admin/projects
/admin/writing
/admin/shop
/admin/users
/admin/feature-flags
/admin/settings

Admin dashboard should include:

- Sidebar or top navigation
- Clean dashboard cards
- Empty states
- Placeholder actions
- Clear content sections
- Role-aware structure later
- Dark-mode-first design

Admin should not look like a generic default dashboard.

Avoid:

- Clutter
- Fake metrics
- Fake revenue numbers
- Fake users
- Fake corporate analytics

Use honest placeholder states.

Example:

No projects published yet.
Start by adding the work you actually want people to see.

---

# Recommended initial file structure

almicsen-web/
  app/
    (public)/
      page.tsx
      about/
      projects/
      creative-work/
      writing/
      blog/
      shop/
      friends/
      media/
        pdf/
        video/
    admin/
      page.tsx
      projects/
      writing/
      shop/
      users/
      feature-flags/
      settings/
    api/
      auth/
      feature-flags/
      projects/
      writing/
      shop/
  components/
    layout/
    marketing/
    admin/
    cms/
    media/
    easter-eggs/
    ui/
  lib/
    auth/
    db/
    feature-flags/
    media/
    permissions/
    validators/
  prisma/
    schema.prisma
  docs/
    ROADMAP.md
    DESIGN_DIRECTION.md
    PHASES.md
  public/
    assets/
  AGENTS.md
  README.md

---

# CODEX PROMPT 0: Create durable project instructions first

Paste this into Codex first.

```txt
You are preparing the repository instructions and planning docs for a new full-stack personal web platform called Almicsen.

Repository name: almicsen-web
Target domain: almicsen.com
Primary public identity: almicsen
Secondary identity: Alan Michaelsen, used in About/business-safe sections only.

Before creating files, inspect the repository. If it is empty, create the files below. If any of them already exist, preserve useful content and update them carefully.

Create or update these files:

1. AGENTS.md
2. README.md
3. docs/ROADMAP.md
4. docs/DESIGN_DIRECTION.md
5. docs/PHASES.md

Do not build the application yet. This task is only for durable repo instructions and planning docs.

AGENTS.md must include:

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

## Design principles

- Dark-mode-first.
- Premium, clean, and polished.
- Inspired by Apple-like spacing/clarity, Google-like usability, futuristic glass/3D accents, dark cinematic mood, and small nostalgic internet details.
- Must not look like a generic AI-generated portfolio or SaaS template.
- Avoid fake corporate language.
- Avoid stock-photo filler.
- Avoid unnecessary gradients everywhere.
- Avoid overused AI phrases.
- No owner photos by default.
- Use “almicsen” as the primary public identity.
- Use “Alan Michaelsen” only in About/business-safe contexts unless explicitly changed.

## Tone

Personal, sharp, slightly funny, but still business-safe.

Homepage hero line:

“I build creative digital things, but this site ain’t one of them.”

Supporting line:

“Projects, writing, experiments, and the occasional questionable Easter egg.”

## Architecture principles

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

## Auth and roles

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

## CMS objects

- Projects
- Writing/blog posts
- Shop products
- Media metadata
- Feature flags
- Friend homepage placeholders
- Site settings

## Visibility states

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

## Friend/Easter egg rules

First Easter egg is “Boop the Fat Fingers.”

It is based on a friend’s inside joke.

Public UI must use original assets and wording.

Do not copy or directly reference Five Nights at Freddy’s characters, logos, names, or art.

Feature flags should allow it to be disabled, hidden, or made friend-only later.

## Build expectations

Before major changes:

- Inspect existing files.
- Make a short plan.
- Prefer small, coherent commits/changes.

After changes:

- Run available checks such as lint, typecheck, test, and build.
- Report what passed and what failed.
- Explain important tradeoffs.

## Do not

- Do not overbuild beyond the requested phase.
- Do not introduce paid services unless explicitly approved.
- Do not add large binary assets.
- Do not invent personal details about the owner.
- Do not expose location or contact email by default.
- Do not create public friend-generated pages without owner approval/moderation.

README.md must include:
- Project name
- Purpose
- Tech stack
- Setup instructions
- Environment variables
- Local development commands
- Build commands
- Vercel deployment notes
- What is implemented
- What is scaffolded
- What is future work

Environment variable placeholders:
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

docs/ROADMAP.md must include:

# Almicsen Roadmap

## V1: Public platform foundation

- Public pages
- Personal identity
- Projects
- Writing/blog
- External shop links
- Admin dashboard shell
- Role/auth scaffolding
- Feature flags
- EM Easter egg
- External media support
- Vercel deploy

## V1.5: Real CMS activation

- Fully wired database
- Owner login
- Project CRUD
- Writing CRUD
- Product CRUD
- Feature flag editing
- Media metadata management

## V2: Friend features

- Friend role activation
- Friend homepage requests
- Owner approval flow
- Friend profile pages
- Friend-specific themes
- Friend-only content
- Moderation queue

## V3: Storage and media

- Vercel Blob or equivalent
- Admin-only uploads
- PDF library
- Video library
- Media permissions
- Optional private media

## V4: Monetization

- Paywall feature flags
- Member-only content
- External shop expansion
- Stripe or similar checkout only if needed
- Tax/order/refund planning before launch

## V5: Advanced polish

- More 3D
- More nostalgic internet Easter eggs
- Custom homepage personalization
- Advanced analytics
- Search
- Public API or feed

docs/DESIGN_DIRECTION.md must describe:
- dark cinematic base
- Apple-like premium spacing
- Google-like usability
- futuristic glass/3D accents
- nostalgic internet details
- business-safe but personal tone
- no owner photos
- no generic AI portfolio look
- no fake stock content

docs/PHASES.md must explain:
- Prompt 1: v1 foundation
- Prompt 2: visual polish
- Prompt 3: database/auth/roles
- Prompt 4: admin dashboard
- Prompt 5: CMS rendering
- Prompt 6: media wrappers
- Prompt 7: Easter egg
- Prompt 8: Score Sync Framework
- Prompt 9: Vercel cleanup

After creating/updating the docs, report the files changed and any assumptions made.
```

---

# CODEX PROMPT 1: Build v1 foundation

Run this after Prompt 0.

```txt
You are building the first version of a full-stack personal web platform called Almicsen.

Before coding:
1. Read AGENTS.md.
2. Read README.md.
3. Read docs/ROADMAP.md.
4. Read docs/DESIGN_DIRECTION.md.
5. Read docs/PHASES.md.
6. Inspect the repository.

Repository name: almicsen-web
Target domain: almicsen.com
Primary identity: almicsen
Secondary identity: Alan Michaelsen, used in About/business-safe areas only.

Goal:
Create a modern full-stack Next.js application that can be deployed to Vercel. This is not a generic AI-looking portfolio template. It should feel personal, premium, polished, dark-mode-first, and expandable into a larger platform.

Visual direction:
- Dark cinematic base.
- Clean Apple-like premium spacing and typography.
- Futuristic glass/3D accents, but tasteful.
- Nostalgic internet touches used carefully, not ugly or chaotic by default.
- The site should feel custom, not like a default shadcn/dashboard template or AI-generated landing page.
- No photos of the site owner.
- Avoid fake stock-photo vibes.
- Avoid generic startup SaaS copy.
- Avoid overused AI-template sections such as “Transform your workflow” or “Unlock your potential.”

Homepage tone:
The homepage hero should use this line prominently:
“I build creative digital things, but this site ain’t one of them.”

Add a more polished supporting line below it:
“Projects, writing, experiments, and the occasional questionable Easter egg.”

Build version 1 only. Do not overbuild future features, but design the schema and architecture so they can be added later.

Version 1 must include:
1. Next.js app with TypeScript.
2. Tailwind CSS.
3. shadcn/ui setup.
4. Framer Motion for tasteful animations.
5. App Router.
6. Dark-mode-first layout.
7. Public pages:
   - Home
   - About
   - Projects
   - Creative Work
   - Writing
   - Blog
   - Shop
   - Friends / Corner of Friends
8. Admin area:
   - Protected /admin route
   - Admin dashboard shell
   - Placeholder admin pages for Projects, Writing, Shop, Users/Roles, Feature Flags, and Site Settings
9. Authentication-ready architecture:
   - Use Auth.js / NextAuth-compatible structure if practical.
   - For v1, implement clean auth scaffolding and protected admin routes.
   - Support future providers: email/password, magic link, Google, Discord.
10. Role model:
   - Owner
   - Admin
   - Editor
   - Friend
   - Member
   - Public/Guest
11. CMS-ready data model:
   - Projects
   - Writing/blog posts
   - Shop products with external purchase links
   - Feature flags
   - Friend homepage/profile placeholders
   - Media metadata that can support external URLs now and storage providers later
12. Shop:
   - No real payments in v1.
   - Products are CMS-style cards.
   - Each product can have an external “Buy externally” link.
   - Make it clear when a user is leaving the site for a third-party seller.
13. Projects:
   - Support title, subtitle, description, long writeup, tags, categories, date, status, featured flag, draft/published/private/unlisted visibility, image URLs, video embed URLs, PDF/document URLs, GitHub links, credits/collaborators, and external links.
14. Writing:
   - Should feel like a personal Substack-style area.
   - Support categories, drafts, published posts, private/unlisted flags, and future friend-authored posts.
15. Friend/Easter egg system:
   - Add a first feature-flagged public Easter egg called “Boop the Fat Fingers.”
   - It should be an original retro/arcade-style mini-widget inspired by a friend’s inside joke.
   - Do not use copyrighted Five Nights at Freddy’s art, names, characters, logos, or direct references in the public UI.
   - It can show an original cartoon/retro button or bear-like abstract mascot only if fully original.
   - Feature flag should allow enabling/disabling or making it private later.
16. Media:
   - For v1, support external media links and embeds.
   - Do not use GitHub as a long-term video/PDF/media storage system.
   - Add an abstraction/interface so Vercel Blob or another storage provider can be added later.
   - Build a custom-looking PDF viewer page/wrapper and custom-looking video player wrapper, but do not build a full streaming/transcoding engine yet.
17. Quality:
   - Responsive on mobile, tablet, desktop.
   - Accessible semantic HTML.
   - SEO metadata.
   - Clear loading/empty states.
   - No fake testimonials.
   - No placeholder claims that sound like fake business copy.
   - Use honest placeholder content where needed.
18. Documentation:
   - Update README.md with setup, commands, environment variables, deployment notes, and phase plan.
   - Preserve AGENTS.md.
   - Update docs/ROADMAP.md if needed.

Preferred stack:
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Prisma
- PostgreSQL-ready schema
- Auth.js / NextAuth-compatible auth architecture
- Vercel deployment target

Important:
- Keep v1 realistic and deployable.
- Do not build real ecommerce checkout yet.
- Do not build full friend homepage editor yet.
- Do not build full video transcoding/streaming engine yet.
- Do not require paid APIs for v1.
- Use environment variables for anything sensitive.
- Do not hardcode secrets.
- Use strong TypeScript types.
- Keep the file structure clean and scalable.

Deliverables:
1. Working Next.js project.
2. Public pages listed above.
3. Admin dashboard shell.
4. Database schema or schema draft.
5. Feature flag scaffolding.
6. Role/auth scaffolding.
7. CMS model scaffolding.
8. Updated README.md.
9. Preserved AGENTS.md.
10. Updated docs/ROADMAP.md if needed.

If the repo is empty, initialize the project. If something already exists, preserve useful files and explain choices. After coding, run install/build/lint/typecheck where possible and report what passed or failed.
```

---

# CODEX PROMPT 2: Foundation polish

```txt
Polish the Almicsen v1 foundation.

Before coding:
- Read AGENTS.md.
- Inspect existing pages/components.

Focus only on:
- Visual refinement
- Better responsive behavior
- More custom-feeling layout
- Dark cinematic atmosphere
- Premium spacing and typography
- Subtle motion with Framer Motion
- Clean navigation
- Better empty states
- Better page intros

Do not add major new backend features in this task.

The site must not feel like a generic AI-generated portfolio or SaaS template.

Keep the homepage line:
“I build creative digital things, but this site ain’t one of them.”

Run lint/typecheck/build and report results.
```

---

# CODEX PROMPT 3: Database, roles, auth scaffolding

```txt
Add database, roles, and auth scaffolding for Almicsen.

Before coding:
- Read AGENTS.md.
- Inspect current auth/db structure.
- Preserve working code.

Use Prisma with a PostgreSQL-ready schema.

Create models/enums for:
- User
- Account/session/auth compatibility if using Auth.js/NextAuth
- Role: OWNER, ADMIN, EDITOR, FRIEND, MEMBER
- Project
- WritingPost
- ShopProduct
- MediaItem
- FeatureFlag
- FriendProfile placeholder
- SiteSetting

Add visibility/status enums:
- DRAFT
- PUBLISHED
- PRIVATE
- UNLISTED
- FRIEND_ONLY
- ADMIN_ONLY

Create permission helper functions in lib/permissions.
Create auth helper structure in lib/auth.
Protect /admin with placeholder auth/role checks, but keep it easy to wire to real providers later.

Do not add real OAuth secrets.
Do not hardcode credentials.
Document required environment variables in README.
Run checks and report results.
```

---

# CODEX PROMPT 4: Admin dashboard shell

```txt
Build the Almicsen admin dashboard shell.

Before coding:
- Read AGENTS.md.
- Inspect current admin routes/components.
- Preserve working code.

Routes:
- /admin
- /admin/projects
- /admin/writing
- /admin/shop
- /admin/users
- /admin/feature-flags
- /admin/settings

Use clean admin navigation.
Make it dark-mode-first but readable.
Do not make it look like a generic default dashboard.
Include empty states and placeholder actions.

The admin should clearly show:
- Projects CMS area
- Writing/blog CMS area
- External shop product CMS area
- User/role management placeholder
- Feature flag controls placeholder
- Site settings placeholder

Do not implement destructive actions yet.
Run checks and report results.
```

---

# CODEX PROMPT 5: CMS models and public rendering

```txt
Implement basic CMS-style CRUD scaffolding or mocked data adapters for:
- Projects
- Writing posts
- Shop products
- Feature flags

Before coding:
- Read AGENTS.md.
- Inspect current data/model/service structure.
- Preserve working code.

If database setup is not fully wired yet, create repository/service functions that can later swap from mock data to Prisma queries.

Public pages should render real structured sample data through those services:
- Projects page shows project cards and details
- Creative Work page groups selected projects/content
- Writing/Blog pages show category filtering and post cards
- Shop page shows external product cards with clear “opens third-party seller” behavior

Project content must support:
- title
- subtitle
- description
- long writeup
- tags
- categories
- date
- status
- featured flag
- visibility
- image URLs
- video embed URLs
- PDF/document URLs
- GitHub links
- credits/collaborators
- external links

Writing content must support:
- title
- subtitle/dek
- category
- tags
- series/chapter-ready structure
- draft/published/private/unlisted/friend-only states
- author field for future friend posts

Do not implement friend authoring yet.
Run checks and report results.
```

---

# CODEX PROMPT 6: Media wrappers

```txt
Build custom-looking media wrappers for Almicsen.

Before coding:
- Read AGENTS.md.
- Inspect current media routes/components.
- Preserve working code.

Add:
- PDF viewer route/wrapper
- Video player route/wrapper
- Media card component
- MediaItem type/service

V1 should support external URLs and embeds only.
Do not build a full upload/storage/transcoding system.
Do not use GitHub as long-term storage.
Do not use Telegram.
Prepare the code so Vercel Blob or another storage provider can be added later.

The PDF viewer should feel like part of the site, not a browser default link.
The video wrapper should support embedded video URLs and externally hosted files where reasonable.
Include graceful fallbacks and external-open buttons.

Run checks and report results.
```

---

# CODEX PROMPT 7: EM Easter egg

```txt
Add the first Almicsen Easter egg.

Before coding:
- Read AGENTS.md.
- Inspect current friend/easter egg/feature flag code.
- Preserve working code.

Name/internal concept:
“Boop the Fat Fingers”

Purpose:
A friend requested “a tab where you can boop freddy fat fingers.” Public implementation must be original and legally safer.

Rules:
- Do not use Five Nights at Freddy’s names, official character names, official art, logos, screenshots, copied designs, or direct references in public UI.
- Create an original retro/arcade-style mini-widget.
- It can involve a silly oversized-button interaction, boop counter, tiny animation, and funny microcopy.
- Keep it harmless, friend-facing, and optional.
- Add feature flag support so it can be public, disabled, or made friend-only later.
- Put it somewhere discoverable but not overpowering, likely Friends / Corner of Friends or a hidden tab/card.

Make it charming but not embarrassing on a business-safe site.
Run checks and report results.
```

---

CODEX PROMPT 8: ScoreSync Framework

Add a reusable ScoreSync Framework to Almicsen.

Before coding:
1. Read AGENTS.md.
2. Inspect the existing media, CMS, shop, project, writing, admin, and feature flag code.
3. Preserve working code.
4. Do not break the current public pages.
5. Do not run the Vercel deployment cleanup task yet.

Feature name:
ScoreSync Framework

Purpose:
Create a reusable framework for displaying sheet-music-style PDF/media experiences across the site. This should be usable in:
- Projects
- Creative Work
- Shop products
- Writing/blog posts
- Media viewer pages
- Admin CMS

The reference experience is like sheet music product sites where a score/PDF viewer includes an audio player and the score can be followed while audio plays.

Important:
This must be a framework, not a one-off page.

Core concept:
A media item can optionally be marked as a music score. If it is a music score, it can have:
- PDF score file or external PDF URL
- Optional audio file or external audio URL
- Optional MusicXML file or external MusicXML URL
- Optional MIDI file or external MIDI URL
- Optional MuseScore.com embed URL/code as a fallback/reference only
- Score display mode
- Page spread/layout rules
- Node Frames for audio-to-score synchronization

Do not depend on MuseScore.com embeds as the core engine.
MuseScore embeds may be supported only as an optional external embed mode.
The native framework should be built around our own CMS metadata and viewer components.

Research-informed implementation direction:
- For v1 of this framework, support PDF + audio + manual Node Frames.
- Add extension points for MusicXML rendering later using OpenSheetMusicDisplay.
- Add extension points for MEI/SVG rendering later using Verovio.
- Do not fully build real-time note-by-note highlighting unless the required structured score file exists.
- Do not promise note highlighting from a plain PDF alone. A PDF does not contain reliable musical note timing data.
- If only a PDF and audio are supplied, support page-level or region-level sync through manually created Node Frames.
- If MusicXML/MIDI is supplied later, the app can support more precise cursor/note/measure highlighting.

Admin CMS requirements:
Add or extend CMS/admin models and forms so a media item can be configured as a score.

Admin fields for score media:
- isMusicScore: boolean
- scoreTitle
- scoreSubtitle
- composer
- arranger
- instrumentation
- difficulty
- durationLabel
- scorePdfUrl
- audioUrl
- musicXmlUrl
- midiUrl
- externalMuseScoreEmbedUrl
- externalMuseScoreEmbedCode if safe/sanitized
- preferredScoreEngine:
  - PDF_AUDIO
  - MUSICXML_OSMD
  - MEI_VEROVIO
  - EXTERNAL_EMBED
  - MANUAL_ONLY
- scoreLayoutMode:
  - AUTO_SCORE_BOOK
  - SINGLE_PAGE
  - TWO_PAGE_SPREAD
  - CONTINUOUS_SCROLL
  - MANUAL
- firstPageSolo: boolean
- pagesPerSpread after first page
- autoTurnPages: boolean
- showAudioPlayer: boolean
- showPageThumbnails: boolean
- showFullscreenButton: boolean
- showDownloadButton
- downloadPermission:
  - PUBLIC
  - LOGGED_IN
  - FRIEND_ONLY
  - ADMIN_ONLY
  - DISABLED
- allowExternalOpen
- visibility/status fields matching existing CMS visibility system

Default score formatting rule:
If isMusicScore is true and no manual layout override exists:
- Page 1 is displayed alone.
- Then pages are displayed as book spreads:
  - Page 2 on the left, page 3 on the right.
  - Page 4 on the left, page 5 on the right.
  - Continue in that pattern.
This should be called AUTO_SCORE_BOOK.

Node Frames:
Create a reusable concept called Node Frames.

A Node Frame is a timed sync marker that connects an audio time range to a score view action.

Node Frame fields:
- id
- scoreMediaId
- label
- startTimeMs
- endTimeMs optional
- actionType:
  - TURN_TO_PAGE
  - TURN_TO_SPREAD
  - HIGHLIGHT_REGION
  - HIGHLIGHT_MEASURE
  - HIGHLIGHT_NOTE_RANGE
  - SCROLL_TO_REGION
  - SHOW_CALLOUT
  - CUSTOM
- pageNumber optional
- spreadIndex optional
- region optional:
  - x
  - y
  - width
  - height
  - unit: PERCENT or PX
- measureStart optional
- measureEnd optional
- noteIds optional array/string
- easing optional
- animationDurationMs optional
- enabled boolean
- createdAt
- updatedAt

Node Frame behavior:
- When audio playback reaches startTimeMs, trigger the action.
- For TURN_TO_PAGE/TURN_TO_SPREAD, animate page turn if autoTurnPages is enabled.
- For HIGHLIGHT_REGION, overlay a tasteful animated highlight on the PDF page/score area.
- For SCROLL_TO_REGION, scroll/pan the viewer to the region.
- For SHOW_CALLOUT, show a temporary label/annotation.
- Do not require note-level data for v1.
- Note-level highlighting should be a future extension when MusicXML/MIDI/MEI data exists.

Admin Node Frame editor:
Build scaffolding for an admin editor.
Minimum v1 editor:
- List Node Frames for a score media item.
- Add/edit/delete Node Frames in a form.
- Fields for label, start time, end time, action type, page/spread, region coordinates, animation duration, enabled.
- Provide a basic preview mode if practical.
- Do not overbuild a full visual timeline editor yet.
- Leave clear TODOs/extension points for waveform/timeline editing later.

Public viewer requirements:
Create reusable components:
- ScoreSyncViewer
- ScorePdfViewer
- ScoreAudioPlayer
- ScoreSpreadViewer
- ScoreNodeFrameOverlay
- ScoreEngineSwitcher or internal engine resolver
- ScoreMediaCard

The viewer should:
- Display score PDF pages.
- Respect AUTO_SCORE_BOOK layout.
- Show first page solo, then two-page spreads.
- Include audio controls if audio exists.
- Trigger Node Frames during playback.
- Support manual page navigation.
- Support thumbnails or compact page nav if practical.
- Support fullscreen if practical.
- Support external open/download permissions based on CMS fields.
- Work on desktop and mobile.
- On mobile, gracefully collapse two-page spreads into readable single-page or swipe mode if needed.
- Have a polished look consistent with Almicsen.
- Avoid generic browser-default PDF styling.
- Avoid ugly iframe-only UI unless used as fallback.

PDF rendering:
Use the best practical approach for the existing project.
If adding a PDF rendering dependency such as react-pdf/pdf.js is reasonable, do it.
If it is too much for this step, create a clean abstraction and fallback viewer, but document the next dependency needed.
Do not break the build.

Audio:
Use native HTML audio or a small controlled wrapper.
Keep it reliable.
Expose currentTime in milliseconds to the Node Frame engine.
Support play/pause/seek.
When seeking, sync the score view to the closest active Node Frame.

MusicXML/OSMD future support:
Add abstraction/interfaces for a future OpenSheetMusicDisplay engine.
Do not fully implement OSMD unless it is straightforward and does not destabilize the app.
Prepare types such as:
- ScoreRenderEngine
- PdfAudioScoreEngine
- MusicXmlOsmdEngine placeholder
- MeiVerovioEngine placeholder
- ExternalEmbedScoreEngine placeholder

MuseScore integration:
Add only an optional external embed field/mode.
Do not scrape MuseScore.
Do not rely on private APIs.
Do not use MuseScore.com as the core engine.
Do not promise custom note highlighting from a MuseScore embed.
If externalMuseScoreEmbedUrl exists and preferredScoreEngine is EXTERNAL_EMBED, display it in a safe embed wrapper if possible.
Sanitize or restrict embed HTML. If safe embed handling is not already available, store the URL only and render a controlled iframe to approved domains.

Shop/project integration:
Allow projects and shop products to reference score media items.
For shop products:
- A product can have preview score media.
- If score media has audio, show “Preview score + audio.”
- Keep checkout external only.
For projects/creative work:
- A project can show score media as part of its media gallery.
- Use the same ScoreSyncViewer.

Data/model work:
Extend the existing Prisma schema or model scaffolding with:
- ScoreMedia or score-specific fields on MediaItem
- NodeFrame
- relationships from Project/ShopProduct/WritingPost to MediaItem/ScoreMedia if appropriate

If the current project is using mock repositories/services:
- Add mock score media data.
- Add mock Node Frames.
- Render a demo score/audio placeholder without requiring real files.

If database migrations are used:
- Add migration if appropriate.
- Do not require a live paid database to view the public mock/demo.

Feature flags:
Add feature flags:
- media.scoreSync
- media.scoreSync.nodeFrames
- media.scoreSync.externalMuseScore
- media.scoreSync.musicXmlOsmd
- media.scoreSync.meiVerovio

The first three may be enabled/scaffolded.
The OSMD/Verovio flags should exist but can remain disabled/experimental.

Documentation:
Update README.md and docs as needed.
Add docs/SCORESYNC.md explaining:
- What ScoreSync is
- Supported v1 mode: PDF + audio + manual Node Frames
- Why plain PDFs cannot provide automatic note-level highlighting
- Future MusicXML/OSMD support
- Future MEI/Verovio support
- Optional MuseScore embed fallback
- How Projects/Shop/Writing can reuse ScoreSync
- Admin fields and Node Frame concept
- Known limitations

Quality:
- Keep TypeScript types strong.
- Keep components reusable.
- Keep public and admin components separated where appropriate.
- Do not overbuild.
- Do not introduce paid services.
- Do not break existing routes.
- Run lint/typecheck/build where possible.
- Report what passed and what failed.

Deliverables:
1. ScoreSync data/types/schema scaffolding.
2. Node Frame data/types/schema scaffolding.
3. Reusable public ScoreSync viewer components.
4. Admin score media fields/scaffolding.
5. Admin Node Frame editor scaffolding.
6. Integration points for Projects and Shop.
7. Feature flags.
8. docs/SCORESYNC.md.
9. Updated README/docs if needed.
10. Passing or clearly reported build/lint/typecheck results.

---


# CODEX PROMPT 9: Vercel deployment cleanup, GitHub push, and Vercel project setup

Prepare Almicsen for Vercel deployment.

Before coding:
1. Read AGENTS.md.
2. Inspect current deployment/build setup.
3. Preserve working code.
4. Do not add a custom domain yet.
5. Do not add paid services.
6. Do not expose secrets.
7. Do not commit .env files or private credentials.

Part A: Deployment cleanup

Tasks:
- Verify build works.
- Verify environment variable documentation.
- Add metadata/SEO.
- Add OpenGraph placeholders without fake owner photos.
- Add robots/sitemap basics if appropriate.
- Ensure responsive behavior.
- Ensure no secrets are committed.
- Ensure no paid services are required for v1.
- Ensure README has Vercel deployment steps.
- Ensure database/auth setup is documented clearly, including what is scaffolded vs fully active.
- Ensure ScoreSync is documented clearly, including what is scaffolded vs fully active.
- Ensure feature flags and media/storage limitations are documented.
- Run final lint/typecheck/build checks and report results.

Part B: GitHub push

If the local repository is not already connected to GitHub:
- Check current git status and remotes.
- If there is no remote, stop and tell me exactly what remote URL is needed.
- Do not guess the GitHub remote URL unless it is already visible in the repo or environment.
- Do not create a new GitHub repository unless I explicitly authorize it in this task and the required tools/permissions are available.

If the repository is connected to GitHub:
- Review git status.
- Ensure no secrets or .env files are staged.
- Ensure generated build artifacts that should not be committed are ignored.
- Create a clean commit with a clear message.
- Push to the appropriate branch, likely main.
- If push fails due to authentication or permissions, stop and tell me exactly what permission/login is needed.
- Do not force push unless I explicitly approve it.

Suggested commit message:
“Prepare Almicsen v1 for Vercel deployment”

Part C: Vercel connection

After the GitHub push succeeds, attempt to connect the GitHub repo to Vercel only if browser/computer control is available.

Important browser/computer control instructions:
- If you can control the browser/computer, tell me which browser/app you will use before opening Vercel.
- If you cannot control my Chrome window or an in-app browser, stop before continuing and tell me exactly what permission/plugin/access is missing.
- If permission is needed, ask me to grant the permission before proceeding.
- Do not try to work around missing browser permissions.
- Do not continue pretending Vercel was connected if you cannot actually access it.

Vercel setup behavior:
- Go to Vercel.
- Import the GitHub repository for almicsen-web.
- Use the default Vercel project name unless there is a clear better choice:
  almicsen-web
- Framework should be detected as Next.js.
- Do not add a custom domain yet.
- Do not buy a domain.
- Do not enable paid services.
- Do not add payment methods.
- Do not expose or paste secrets into chat.
- If environment variables are required, tell me exactly which variables are needed and pause for me to provide them manually.
- If the app can deploy without production secrets because some features are scaffolded/mock-only, proceed with safe defaults.
- Start the first Vercel deployment if everything is ready.
- After deployment, report:
  - GitHub push status
  - Vercel import status
  - Deployment URL if created
  - Build status
  - Any missing environment variables
  - Any manual steps still required

Do not add the real almicsen.com domain yet.
That will be a later task.

The first public version should prove:

almicsen.com can exist, look good, feel personal, and not look like AI trash.