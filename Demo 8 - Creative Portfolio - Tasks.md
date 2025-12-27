# Development Tasks - Demo 8 (Creative Portfolio / Case Studies)

Source docs:

- `docs/global prompt.md`
- `creative-portfolio/demo8.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [x] Confirm demo brand name (default: "Studio Portfolio").
- [x] Choose ONE tagline:
  - [ ] "Design that ships. Work that performs."
  - [x] "Editorial craft. Commercial results."
  - [ ] "A small studio for big-brand clarity."
- [x] Confirm primary CTA: "Get a quote".
- [x] Confirm secondary CTA: "View work".
- [x] Confirm trust cues to include site-wide (suburb locations on case studies, services list, testimonials, typical timeline block, simple process).
- [x] Choose ONE accent color (links/badges/selected filters/metrics/one CTA style only):
  - [ ] Editorial Red `#D72638`
  - [ ] Studio Cobalt `#1D4ED8`
  - [x] Creative Emerald `#0F766E`
- [x] Choose fonts (max 2, Google Fonts OK):
  - [x] Headings: Fraunces (600ƒ?"700)
  - [x] Body/UI: Manrope (400-700)
  - [ ] Optional: Archivo (700) for hero only (or keep Fraunces)
- [x] Confirm IA/pages:
  - [x] Home (`/`)
  - [x] Work index (`/work/`)
  - [x] Case study pages (`/work/[slug]/`)
  - [x] Services (`/services/`)
  - [x] Contact (`/contact/`)
  - [x] About (`/about/`) (optional but recommended)
- [x] Confirm case study categories: `web`, `branding`, `photography`, `content`.
- [x] Confirm whether image lightbox is included (optional, keep JS minimal).

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [x] Create a new Astro project (static output, Astro 5.x).
- [x] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [x] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [x] Add/verify npm scripts: `dev`, `build`, `preview`.
- [x] Add `src/assets/images/` placeholder images (home hero, featured work, case study galleries, OG image).

## Phase 2 - Design System (Editorial / Magazine)

- [x] Define base palette (paper system):
  - [x] Background `#FAF7F2`
  - [x] Surface `#FFFFFF`
  - [x] Text `#121212`
  - [x] Muted text `#5A5A5A`
  - [x] Rule lines/borders `#E6E0D8`
- [x] Define typography hierarchy:
  - [x] H1 56ƒ?"72px (clamped), tight leading
  - [x] H2 32ƒ?"40px
  - [x] H3 22ƒ?"26px
  - [x] Body 16ƒ?"18px
  - [x] Captions 13ƒ?"14px (muted)
  - [x] Overline/kicker 12px uppercase, letter-spacing ~0.12em
- [x] Define grid + layout rules:
  - [x] Max width 1120px
  - [x] Desktop grid 12 columns, 24px gutter
  - [x] Editorial offsets (hero text 5/12, hero image 7/12; case study body 8/12 + captions/notes in 4/12)
- [x] Define spacing scale: 4, 8, 12, 16, 24, 32, 48, 72.
- [x] Define radius: 8px (images/cards), 999px (pills).
- [x] Define shadow policy: none or extremely subtle only (prefer rules + spacing).
- [x] Define motion rules:
  - [x] 150ƒ?"220ms for UI hovers/active states
  - [x] 350ƒ?"500ms for section reveals
  - [x] Allowed: fade-up 8ƒ?"12px, subtle image reveal, underline animations
  - [x] Respect `prefers-reduced-motion`

If using Tailwind:

- [ ] Install/configure Tailwind for Astro.
- [ ] Add Tailwind theme tokens (palette, typography, spacing, radii).

If using CSS modules + tokens:

- [x] Create `src/styles/tokens.css` (colors, font families, spacing, radii, rules).
- [x] Create base/global styles (typography defaults, grid/container utilities).

## Phase 3 - Core Layout & Shared Components

- [x] Create `src/layouts/BaseLayout.astro` with:
  - [x] Skip link
  - [x] Minimal header nav: Work, Services, About (optional), Contact (button)
  - [x] Footer with Perth, WA trust block + email/phone + areas served list + socials (+ optional ABN placeholder)
  - [x] Title/meta defaults + per-page overrides
  - [x] OG/Twitter meta placeholders
- [x] Build core components (Astro-friendly, reusable):
  - [x] `HeaderNav.astro`
  - [x] `Footer.astro`
  - [x] `Section.astro` (consistent spacing + optional rule line)
  - [x] `Button.astro` (primary/secondary/text)
  - [x] `CaseStudyCard.astro` (image + meta + hover underline)
  - [x] `FilterPills.astro` (category filters for `/work/`)
  - [x] `StatsStrip.astro` (editorial stat blocks)
  - [x] `TestimonialQuote.astro` (big pull-quote styling)
  - [x] `GalleryGrid.astro` (editorial 2-col / masonry-like)
  - [x] `CTAInline.astro` (small inline CTA)
  - [x] `QuoteForm.astro` (contact form)
- [x] Build case-study page blocks:
  - [x] `CaseStudyHero.astro` (hero media + caption)
  - [x] `CaseStudySidebar.astro` (sticky facts/meta)
  - [x] `CaseStudySection.astro` (Problem / Approach / Result)

## Phase 4 - Content Model (Case Studies)

- [x] Set up Astro Content Collections:
  - [x] Collection name: `caseStudies`
  - [x] Frontmatter fields:
    - [x] `title`, `client`, `category`, `location`, `year`, `servicesProvided`
    - [x] `heroImage`, `galleryImages`
    - [x] `deliverables`
    - [x] `results` (object) and/or `metrics` (array of { label, value, detail })
    - [x] `testimonial` (quote, name, role)
    - [x] `cta` (optional), `featured` (boolean)
    - [x] `seo` (optional title/description)
- [x] Create 9 demo case studies (minimum) across categories:
  - [x] 3 Web (hospitality, services, ecommerce-lite)
  - [x] 2 Branding
  - [x] 2 Photography (food/product)
  - [x] 2 Content/SEO
- [x] Ensure every case study has at least one metric (mock is OK but consistent).
- [x] Use Perth suburbs across case studies (mix): Fremantle, Subiaco, Mount Lawley, Victoria Park, Leederville, Cottesloe, Myaree, Northbridge, Scarborough.

## Phase 5 - Pages (IA + Required Pages)

### Home (`src/pages/index.astro`) (Editorial Landing)

- [x] Hero split grid:
  - [x] Kicker: "Perth creative studio"
  - [x] H1 + dek (1ƒ?"2 lines)
  - [x] CTAs: Get a quote (primary), View work (secondary)
  - [x] Micro trust list (compact): Web ƒ?› Branding ƒ?› Photo ƒ?› Content
  - [x] Featured project image + magazine-style caption (Client ƒ?" Service ƒ?" Outcome metric)
  - [x] Thin rule line under hero (magazine divider)
- [x] Featured work ("Editorƒ?Ts picks"): 3 cards (large image, category pill, title, 1-line outcome).
- [x] Services section as an editorial list (no icon grid) with ƒ?oSee howƒ?? links into filtered work.
- [x] Process strip (3 steps): Discover / Build / Launch with thin top border, 2 lines max each.
- [x] Metrics strip (3ƒ?"4 blocks) with elegant stat styling.
- [x] One big testimonial quote (name + suburb + project).
- [x] CTA band: ƒ?oReady to build something sharp?ƒ?? + Get a quote + email link.

### Work Index (`src/pages/work/index.astro`)

- [x] Intro header + short explanation.
- [x] Filter pills (category) with clear active state (accent underline/pill).
- [x] Hybrid layout (list + grid feel) with:
  - [x] Featured items near top
  - [x] Alternating editorial layouts (avoid uniform template grid only)
- [x] Each card shows: image, category pill, title, short outcome, suburb location.

### Case Study Detail (`src/pages/work/[slug].astro` or equivalent)

- [x] Case study hero:
  - [x] Hero media + caption + client/service/year/location block
  - [x] Sticky sidebar facts (services provided, timeline, location, deliverables)
- [x] Body structure (must-have):
  - [x] The Problem (short paragraphs + constraint bullets)
  - [x] The Approach (strategy + design decisions + readable implementation notes)
  - [x] The Result (metrics displayed as stat blocks: label + value + context line)
- [x] Gallery section (editorial 2-col / masonry-like) with captions + small credit line.
- [x] Deliverables list grouped by category (Brand / Web / Photo / Content).
- [x] Pull-quote testimonial callout.
- [x] Bottom conversion CTA: short form or link to contact + secondary ƒ?oCheck availabilityƒ?? placeholder.

### Services (`src/pages/services/index.astro`)

- [x] Services hero: ƒ?oChoose a service or bundleƒ??.
- [x] Service cards (editorial, not a pricing table):
  - [x] Web Design (optional starting range)
  - [x] Branding
  - [x] Photography
  - [x] Content & SEO
- [x] Bundles section:
  - [x] ƒ?oLaunch Kitƒ?? (brand + 5-page site)
  - [x] ƒ?oHospitality Content Packƒ??
- [x] FAQ (pricing/timelines).
- [x] CTA: Get a quote.

### Contact (`src/pages/contact/index.astro`) (Quote-first)

- [x] Two-column layout on desktop:
  - [x] Left: form
  - [x] Right: ƒ?oWhat happens nextƒ?? + response time + suburb mention
- [x] Form fields:
  - [x] Name
  - [x] Email
  - [x] Phone (optional)
  - [x] Business name
  - [x] Service needed (select)
  - [x] Suburb (select/input)
  - [x] Budget range (select)
  - [x] Timeline (select)
  - [x] Message
- [x] UX rules: clear labels, inline validation, spam-safe honeypot/hidden field, clean success state + next steps.
- [x] Add ƒ?oPrefer email?ƒ?? mailto link.

### About (`src/pages/about.astro`) (Optional but recommended)

- [x] Small studio positioning + principles.
- [x] Process/timeline + trust cues (Perth-based, industries, outcomes focus).

### Required pages from base prompt

- [x] Privacy (`src/pages/privacy.astro`) - simple legal page.

## Phase 6 - SEO & JSON-LD

- [x] Page titles follow a consistent template (per-page + studio name).
- [x] Meta description per page (unique, conversion-focused).
- [x] Canonical URLs set correctly (respecting `site` + `base`).
- [x] OpenGraph: title/description + placeholder OG image.
- [x] Twitter card meta.
- [x] Site-wide JSON-LD:
  - [x] LocalBusiness (Perth, WA) with `areaServed`, optional `telephone`, `sameAs`
  - [x] Organization node linked via `@id` (publisher/creator across pages)
- [x] Case study JSON-LD on `/work/[slug]/` (choose ONE primary type):
  - [x] `CreativeWork` (recommended) OR `Article`
  - [x] Include: headline, description, image, creator/author, datePublished, about (servicesProvided), contentLocation (Perth suburb)
  - [x] If using `Article`: add `mainEntityOfPage`
- [ ] Optional: add `BreadcrumbList` for `/work/` and `/work/[slug]/`.
- [x] Add `robots.txt`.
- [x] Add sitemap (if straightforward) and verify it works with the configured `site`.

## Phase 7 - Accessibility & UX Checks

- [x] One H1 per page; heading order is logical.
- [x] Captions are real text (not baked into images).
- [x] Accent links pass contrast on paper background.
- [x] Keyboard navigation works for filters, cards, and form controls.
- [x] If lightbox exists: keyboard accessible + focus management + ESC close.
- [x] `prefers-reduced-motion` disables reveals and parallax.

## Phase 8 - Performance

- [ ] Target Lighthouse 95+ (mobile).
- [x] Images: responsive sizes, modern formats, lazy-load below the fold.
- [x] Avoid heavy libraries; keep filters static or lightweight.
- [x] Avoid layout shift (set image dimensions / aspect ratios).

## Phase 9 - Deployment & Handoff

- [x] Add build/run instructions (README or `/docs/`):
  - [x] `npm install`
  - [x] `npm run dev`
  - [x] `npm run build`
  - [x] `npm run preview`
- [ ] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [ ] Quick QA pass (ƒ?o"premium"ƒ?? checklist):
  - [ ] Rule lines + spacing (not shadows) drive structure
  - [ ] Captions everywhere (magazine vibe)
  - [ ] One accent color only
  - [ ] Strong testimonial on home + one on each case study
  - [ ] Metrics shown as elegant stat blocks (not counters)
  - [ ] Contact page is clean and conversion-first

## Optional / Bonus

- [x] Add simple lightbox for galleries (keep JS minimal).
- [ ] Prefill contact form via query params (e.g., `?service=web&suburb=subiaco`).
- [ ] Add a ƒ?oTypical timelineƒ?? block and link it from Services and Contact.
- [x] Add a small ƒ?oAvailabilityƒ?? note/CTA (calendar placeholder or mailto).
