Demo 8 — Creative Portfolio (Case Studies) “Studio Portfolio”

Astro 5.x demo focused on: showreel-quality case studies → enquiry form submissions.

1) Brand concept + positioning

Brand name (demo): Studio Portfolio
Tagline options (pick one):

“Design that ships. Work that performs.”

“Editorial craft. Commercial results.”

“A small studio for big-brand clarity.”

Primary CTA: Get a quote
Secondary CTA: View work
Trust cues: Perth suburb locations on case studies, service list, testimonials, “typical timeline” block, simple process.

2) Style direction (proper selection)
Editorial / magazine-like system

This demo should feel like:

A print magazine layout (columns, strong grid, generous margins)

Bold typography hierarchy (headline → dek → body → captions)

Image-first storytelling with crisp captions and restrained motion

Theme

Light theme (paper-like background)

High contrast text (near-black)

Single accent color used with discipline (links, underline, badges, data highlights)

Visual personality

Confident, minimal, premium

“No template vibe”: avoid stocky hero blocks, avoid giant gradients, avoid generic icon rows.

3) Design tokens (concrete choices)
Color palette (exact hex)

Background (paper): #FAF7F2

Surface (cards): #FFFFFF

Text (ink): #121212

Muted text: #5A5A5A

Rule lines / borders: #E6E0D8

Accent (choose 1):

Option A (classic editorial red): #D72638

Option B (studio cobalt): #1D4ED8

Option C (creative emerald): #0F766E

Use accent ONLY for: links, hover states, selected filters, small badges, key metrics, and one CTA style.

Typography (Google fonts recommended)

Headings (editorial serif): Fraunces (600–700)
Body/UI sans: Inter (400–600)
Optional display (for hero only): Archivo (700) or keep Fraunces for consistency.

Hierarchy

H1: 56–72px (clamped) / tight leading

H2: 32–40px

H3: 22–26px

Body: 16–18px

Captions: 13–14px (muted)

Overline / kicker: 12px uppercase, letterspacing 0.12em

Grid + layout rules

Max width: 1120px

Desktop grid: 12 columns, 24px gutter

Use editorial offsets:

hero text column: 5/12

hero image column: 7/12

case study body: 8/12 with margin notes/captions in 4/12

Spacing + radius

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72

Border radius: 8px (images/cards), 999px for pills

Shadows: none or very subtle (editorial prefers rules and spacing over shadows)

Motion (tasteful, fast)

150–220ms ease for UI interactions

350–500ms for section reveals

Use subtle:

fade up 8–12px

image “reveal” mask (clip-path or transform)

underline animations on links

Respect prefers-reduced-motion

4) Navigation + IA (site structure)

Top nav (minimal):

Work

Services

About (optional but recommended)

Contact (button)

Footer (local trust):

“Perth, WA” + email/phone

Areas served: “Fremantle • Subiaco • Mount Lawley • Victoria Park • Cottesloe”

ABN placeholder (optional)

Social links

5) Page-by-page design spec
A) / Home (editorial landing)

Goal: hook + show best work + drive enquiry.

1) Hero (split grid)

Left:

Kicker: “Perth creative studio”

H1: “Case studies that look beautiful — and convert.”

Dek: 1–2 lines explaining what you do

CTAs: Get a quote (primary), View work (secondary)

Micro trust: “Web • Branding • Photo • Content” as a compact list

Right:

Featured project image (high impact)

Caption below like a magazine: Client — Service — Outcome metric

Design choice:
Use a thin rule line under the hero, like a magazine section divider.

2) Featured Work (3 cards)

“Editor’s picks” style heading

Cards: large image, category pill, title, 1-line outcome

Hover: image slightly zoom + accent underline on title

3) Services (not generic)

Present as editorial list instead of icons:

Web Design

Brand Identity

Food/Product Photography

Content Systems

Each item: short description + “See how” link jumping to relevant case study filter.

4) Process (Problem → Approach → Result preview)

A 3-step horizontal editorial strip:

Discover

Build

Launch
Each step: 2 lines max, with a thin top border.

5) Metrics strip (proof)

Use 3–4 metric blocks:

“+38% enquiries”

“3.1s → 1.2s load time”

“12-week launch”
These are mock but consistent.

6) Testimonial (big quote)

One large quote, with client name + suburb + project

7) CTA band

Simple, high contrast:

“Ready to build something sharp?”

Button: Get a quote

Secondary: Email link

B) /work/ Portfolio index (filter + editorial list)

Goal: browse by category, land on case studies.

Layout: magazine list + grid hybrid

Top: page title + small intro

Filters row (pills):

All

Web

Branding

Photography

Content

Sorting (optional): Latest / Most impactful

List pattern (recommended)

Alternate layout rows:

Row 1: Image left / text right

Row 2: Text left / image right

Add a thin rule line between rows

Include: client, category, suburb, year, 1-line result metric

Micro interaction: hover shows “Read case study →” with accent underline.

C) /work/[slug]/ Case study template (the core)

Goal: storytelling + credibility + conversion.

Hero header

Title

Client + category + suburb + year in a compact meta row

One-sentence outcome (dek)

Hero image full width with caption

Quick facts sidebar (sticky on desktop)

Services provided

Deliverables

Timeline (mock)

CTA button: Get a quote

Body structure (must-have)
1) The Problem

Short paragraphs + bullet constraints

2) The Approach

Strategy

Design decisions

Implementation notes (non-technical, readable)

3) The Result

Metrics displayed as editorial stat blocks:

Metric label + value + short context line

Image gallery

Two modes:

“Editorial gallery” (2-column masonry-like)

Click to lightbox (optional, simple)

Each image: caption + credit line (small)

Deliverables list (clear)

Bulleted with categories:

Brand: logo, palette, type, templates

Web: pages, components, SEO setup

Photo: 30 images, 3 reels

Testimonial (pull quote)

Big quote block styled like magazine callout

Bottom CTA (conversion)

“Want results like this?”

Short form OR link to contact

Secondary: “Check availability” (mailto or calendar placeholder)

D) /services/ (offer clarity)

Goal: convert uncertainty into a quote request.

Structure

Hero: “Choose a service or bundle”

Service cards (editorial):

Web Design (with starting range, optional)

Branding

Photography

Content & SEO

Bundles (most studios win here):

“Launch Kit” (brand + 5-page site)

“Hospitality Content Pack”

FAQ (pricing/timelines)

CTA: Get a quote

Design choice: avoid “pricing table” look; use clean cards + footnotes.

E) /contact/ (quote-first, clean)

Goal: form completion.

Form layout

Two-column on desktop:

Left: form

Right: “What happens next” + response time + suburb mention

Fields

Name

Email

Phone (optional)

Business name

Service needed (select)

Suburb (select / input)

Budget range (select)

Timeline (select)

Message

UX

Inline validation

Success state: clean confirmation + next steps

Add “Prefer email?” + direct mailto

6) Components (Astro-friendly, reusable)

Core

BaseLayout.astro (global nav/footer, SEO defaults)

HeaderNav.astro

Footer.astro

Section.astro (consistent spacing + optional rule line)

Button.astro (primary/secondary/text)

CaseStudyCard.astro (image + meta + hover)

FilterPills.astro

StatsStrip.astro

TestimonialQuote.astro

GalleryGrid.astro

CTAInline.astro

QuoteForm.astro

Case study page blocks

CaseStudyHero.astro

CaseStudySidebar.astro (sticky facts)

CaseStudySection.astro (Problem/Approach/Result)

7) Content model (Astro content collections)
Collection: caseStudies

Frontmatter fields (as requested + practical extras):

title (string)

client (string)

category (enum: web | branding | photography | content)

location (string: Perth suburb)

year (number)

servicesProvided (string[])

heroImage (image)

galleryImages (image[])

deliverables (string[])

results (object)

metrics (array of { label, value, detail })

testimonial (object)

quote, name, role

cta (optional string)

featured (boolean)

seo (object: title/description optional)

Design choice: ensure every case study has at least one metric, even if mock, to train “results thinking”.

8) SEO + JSON-LD requirements (clear implementation targets)
Site-wide

LocalBusiness schema for the studio (Perth, WA)

name, image, url, telephone (optional), areaServed, address (city/region), sameAs

Organization node linked via @id used as publisher/creator across pages

Case studies (/work/[slug]/)

Choose one primary type:

CreativeWork (recommended) or Article (if written like articles)

Include:

headline, description, image

author or creator → Organization

datePublished (use year or mock full date)

about (servicesProvided)

contentLocation (Perth suburb)

If using Article, add mainEntityOfPage

Extra (optional but powerful):

BreadcrumbList for /work/ → /work/slug/

9) Accessibility + performance (editorial but fast)

Images: responsive, modern formats, lazy-load below the fold

Always include captions as plain text (not baked into images)

Ensure color contrast: accent links must pass against paper background

prefers-reduced-motion disables reveals and parallax

Avoid heavy libraries; keep filters static or lightweight

10) Demo content set (suggested)

Create 9 case studies:

3 Web (hospitality, services, ecommerce-lite)

2 Branding (logo + collateral)

2 Photography (food/product)

2 Content/SEO (blog system + local landing pages)

Use Perth suburbs across them:

Fremantle, Subiaco, Mount Lawley, Victoria Park, Leederville, Cottesloe, Myaree, Northbridge, Scarborough

11) “Make it feel premium” checklist (non-negotiables)

Use rule lines + spacing, not shadows

Captions everywhere (magazine vibe)

Alternating layouts on /work/

One accent color only

One strong testimonial on home + one on each case study

Metrics shown as elegant stat blocks (not neon counters)

Contact page is clean and conversion-first