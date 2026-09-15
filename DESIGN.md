---
name: Diana Montero, LCSW — Therapy Practice Website
description: A warm illustrated "welcome room" landing page for a bilingual New Jersey therapy practice.
colors:
  warm-cream: "#FCF7EE"
  cream-tint: "#F6EBD9"
  cream-deep: "#EFDFC3"
  sage-mist: "#EAEFE3"
  sage-pale: "#DCE4D3"
  sage-soft: "#C2D0B5"
  sage-mid: "#9EB18C"
  sage: "#7C9068"
  sage-deep: "#5F7350"
  sage-forest: "#485838"
  sage-forest-deep: "#39452C"
  sage-night: "#28311F"
  lavender-pale: "#E8DCE9"
  lavender-soft: "#D6C0DA"
  dusty-lavender: "#BFA0C7"
  mauve: "#A480AE"
  terracotta-light: "#DB8E5C"
  terracotta: "#C97441"
  terracotta-deep: "#AD5C2E"
  terracotta-night: "#8C4823"
  butter: "#F0D98C"
  butter-deep: "#E3C15A"
  warm-ink: "#3E3226"
  warm-ink-soft: "#544537"
  warm-ink-deep: "#2B221A"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  pill: "9999px"
  soft: "1.5rem"
  organic: "5rem"
spacing:
  section-y: "5rem"
  section-y-lg: "6rem"
  container: "72rem"
  gutter: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-night}"
  tag-featured:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
---

# Design System: Diana Montero, LCSW — Therapy Practice Website

## Overview

**Creative North Star: "The Warm Illustrated Welcome Room"**

This is a therapist's landing page built as the digital equivalent of walking into a warm, safe therapy office — never a clinical brochure, never a sterile SaaS hero. Botanical linework, a hand-tinted full-palette color system, and Diana's real photo carry the trust-building work that a stock-photo grid or an icon-card grid usually attempts and fails at. The booking CTA is reachable in one glance from the first viewport, not buried under credentials — because for a visitor who is anxious or overwhelmed, friction is the enemy.

The palette and feel (creamy, sage, lavender, pastel, cartoon accents, warm and welcoming) were pinned directly by the client and executed at full commitment rather than softened toward a generic "wellness site" cream-and-serif default. Color is used at page scale: whole sections change hue (cream → sage → dark forest sage → terracotta), not accents scattered over a single neutral ground.

**Key Characteristics:**
- Full-palette color strategy committed at section/page scale, not a restrained neutral-plus-accent scheme.
- Hand-authored flat SVG botanical line art (leaf icons, an organic blob photo frame with a bold swoosh accent) instead of stock iconography or emoji.
- Cormorant Garamond serif display paired with DM Sans for a warm-but-legible voice.
- No uniform icon-plus-heading-plus-text card grids; information (specialties, "who I work with") is composed as flowing typographic statements and organic tag clusters instead.
- A hero photo in a flowing hand-drawn frame, paired with a direct "Book Now" button, is the hero's centerpiece — reachable at first glance, one click to Headway, no fake availability UI standing in for a real scheduling backend.
- Motion is pervasive by deliberate choice (scroll reveals, staggered tag pop-ins, floating trust badges, hover lifts) rather than the single-moment restraint of a typical marketing page — the client asked for the site to feel interactive and alive. First-load hero motion is intentionally paced slowly (headline → paragraph → CTA → links → photo, each on its own delay) rather than fading in as one block, so the interactivity actually reads on arrival.
- A whimsical layer of hand-drawn doodle marks (sparkles, dots, a squiggle) and colorful pastel annotation tags with speech-bubble pointer tails — inspired by a client-supplied reference — is scattered lightly across every section, adding personality without turning into clutter or replacing the botanical language.

## Colors

The palette reads as a garden at golden hour: warm cream grounds, full sage greens, a dusty lavender/mauve counter-accent, and terracotta reserved for action and emphasis.

### Primary
- **Warm Terracotta** (`#AD5C2E`, token `terracotta-deep`): every call-to-action button, the final booking section's full-bleed background, and the top-tier specialty tags. This is the only color that means "act here."

### Secondary
- **Deep Sage** (`#485838`, token `sage-forest`) and **Sage Night** (`#28311F`, token `sage-night`): sage owns the trust strip, the "How I can help" section's full-bleed dark background, and the insurance band. It is the practice's credibility color — calm, grounded, natural.

### Tertiary
- **Dusty Lavender** (`#BFA0C7`, token `dusty-lavender`): a quieter counter-accent used behind the About photo panel and in the hero's secondary decorative blur. It keeps the palette from reading as purely "therapy-office earth tones" and carries the client's explicitly requested lavender/pastel note.
- **Butter** (`#F0D98C`, token `butter`): the fourth pastel, added specifically for the whimsical annotation layer — one of the three hero badge backgrounds, and the fill color for most scattered sparkle marks. Never used for body text or large fields; it's a small-accent color only.

### Neutral
- **Warm Cream** (`#FCF7EE`, token `warm-cream`): the base ground for the hero, About, and "who I work with" sections, and all reversed text on dark/saturated sections.
- **Warm Ink** (`#3E3226`, token `warm-ink`): body text. A warm near-black, never pure gray or pure black.
- **Warm Ink Deep** (`#2B221A`, token `warm-ink-deep`): the footer background.

### Named Rules
**The One Action Color Rule.** Terracotta is reserved exclusively for booking actions and the featured-specialty tags. It never appears as a passive decorative accent — every terracotta element is either clickable or marking the practice's top specialties.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)

**Character:** A literary, warm serif for headlines against a clean, friendly geometric sans for body copy — confident enough to carry credibility, soft enough to never feel clinical. Fonts are self-hosted via `@fontsource` (latin + latin-ext subsets, covering English and Spanish diacritics) rather than loaded from a font CDN.

### Hierarchy
- **Display** (500 weight, `clamp(2rem, 5vw, 3.75rem)`, line-height 1.05, tracking -0.04em): hero headline and major section headings, always Cormorant Garamond.
- **Headline** (500 weight, 1.875–2.25rem): sub-section headings ("About Diana", "Approaches I draw from").
- **Body** (400 weight, 1.125–1.25rem, line-height 1.6–1.75): paragraph copy, capped near 65–75ch measure.
- **Label** (500 weight, 0.75–0.875rem, uppercase, tracked): the small credential labels in the About section's detail grid (Training / License / Experience / Languages).

### Named Rules
**The Serif-Never-Runs-Small Rule.** Cormorant Garamond is never set below ~1.25rem; at small sizes its light contrast strokes lose legibility, so labels and fine print always fall back to DM Sans.

## Layout

A single scrolling page inside a `max-w-6xl` (72rem) container with consistent `px-6`/`sm:px-8` gutters. Section vertical rhythm runs `py-16`–`py-24`, tightening on mobile. The hero and About sections use an asymmetric two-column grid (content column wider than the image column) rather than a centered 50/50 split, so the page never falls into generic hero-card symmetry. "How I can help" and "I work with…" abandon the grid entirely in favor of flowing, wrapped compositions (tag clusters, a single large typographic sentence) sized by content rather than a fixed card unit.

Responsive behavior: two-column sections collapse to single-column above `lg`; in the hero, the photo frame stacks below the headline/CTA/quick-links column. The header is sticky with a translucent cream backdrop-blur so the booking CTA stays reachable while scrolling.

The site has two routes (`react-router-dom`): `/` (the page described here) and `/terms-and-conditions` (a plain-prose legal page — Read-mode register, not Persuade: no botanical accents or color-block sections, just the same type system on a single cream background, because comprehension outranks expression there).

## Elevation & Depth

Mostly flat, tonal color changes carry the section rhythm rather than shadows. Two soft, warm-tinted shadows exist for elements that need to visually lift off their background: the primary photo and CTA buttons.

### Shadow Vocabulary
- **`soft`** (`0 18px 40px -20px rgba(43,34,26,0.35)`): the hero photo and both CTA buttons — a diffuse, warm-toned lift.
- **`card`** (`0 10px 30px -12px rgba(43,34,26,0.25)`): the header CTA, the About photo panel, and the floating credential chip — a tighter, closer shadow for smaller elements.

### Named Rules
**The Warm Shadow Rule.** No shadow uses neutral gray or black at full opacity; every shadow is tinted from `warm-ink-deep` so elevation never reads as cold or corporate.

## Shapes

Two form languages coexist deliberately: soft asymmetric rectangles for photo panels, and one fully organic hand-drawn blob for Diana's About portrait — related hand-drawn languages, kept visually distinct so neither reads as a repeat of the other.

- **Organic blob** (custom SVG path, `rounded.organic` ≈ 5rem equivalent): the About section's large portrait — a fully free-form amoeba shape, the page's most "illustrated" gesture, with one bold swoosh accent drawn overlapping its edge.
- **Asymmetric soft rectangle** (custom SVG path, `src/components/HeroPhotoFrame.tsx`): the hero portrait — a rounded rectangle with one sweeping oversized corner radius (140px on the top-left, 28-90px elsewhere) instead of a uniform rounded rect, so it reads as flowing without becoming a second full blob. Same hand-drawn-frame grammar as the About blob (clipPath mask, 3px stroke, an offset tinted backing shape, one bold swoosh accent overlapping the edge) but its own silhouette and its own accent color (lavender backing + sage swoosh, vs. About's sage backing + terracotta swoosh), so each large photo moment reads as related but not identical.
- **Rounded card** (`rounded-[2rem]`): reserved for a future panel that wants a soft, large-radius surface distinct from both the pill and the blob/frame family; not currently in use (retired along with the booking-calendar card it originally framed).
- **Pill** (`rounded.pill`, 9999px): every button, tag, and floating trust badge — specialties, insurance chips, trust-strip items, modality labels.

## Components

### Buttons
- **Shape:** full pill (9999px radius).
- **Primary:** `terracotta-deep` background, `warm-cream` text, `14px 28px` padding, `soft` shadow; used for every booking CTA (header, hero, final section).
- **Hover / Focus:** background deepens to `terracotta-night`; the element also lifts 2px (`hover:-translate-y-0.5`). Focus is a 2px terracotta outline with 3px offset, applied globally via `:focus-visible`.
- **Reversed variant:** on the terracotta final-CTA section, the button inverts — `warm-cream` background with `terracotta-night` text — so it still reads as the one actionable element against a saturated background.

### Tags / Pills
- **Featured specialty tag:** `terracotta` background at 90% opacity, `warm-cream` text, Cormorant Garamond, varied size and slight rotation per tag for a hand-placed, non-grid feel.
- **Secondary specialty / modality tag:** transparent or `sage-forest-deep` background with a `sage-deep`/`sage-forest` border or fill, small DM Sans label — visually quieter, used for the longer supporting lists.
- **Insurance wordmark:** no chip/border — a full-bleed, continuously auto-scrolling marquee row (`animate-marquee`, 28s linear loop, never pauses on hover, list duplicated for a seamless wrap) of insurer marks, edge-faded via a mask-image gradient. Respects `prefers-reduced-motion` by disabling the animation and making the row horizontally scrollable instead, so the information stays reachable either way. Four insurers (Aetna, Cigna, Oscar, United Healthcare — `src/components/insurer-marks.tsx`) render their real official logo, sourced from Wikimedia/Wikipedia and recolored to `currentColor` so it's monochrome and matches the row's text color exactly. The other four (Carelon Behavioral Health, Horizon BCBS of NJ, Oxford, Quest Behavioral Health) render as a leaf-mark + DM Sans text pairing instead, because no verified official logo source was found for them — deliberate, not an oversight; swap in real marks there if the client supplies official assets.

### Photo Frames (signature components)
Two sibling hand-drawn frame components share one grammar (SVG `clipPath` mask + stroke outline + offset tinted backing shape + one bold swoosh accent overlapping the edge, drawn as a single thick round-capped stroke rather than thin multi-segment lines, so it reads clearly as a shape rather than a stray mark) but never share a silhouette or color recipe, so neither photo moment reads as a repeat of the other:
- **`BlobPhoto`** (About section): the full organic amoeba blob, `terracotta` stroke and swoosh, `sage-soft` offset backing.
- **`HeroPhotoFrame`** (hero): the asymmetric soft rectangle described under Shapes, `terracotta` stroke, `lavender-200` offset backing, sage swoosh growing from the frame's open left edge (positioned clear of the floating trust badges, which occupy the other three corners).

### Navigation
The header is a single sticky bar: practice name (Cormorant Garamond) on the left, one persistent "Book a Consultation" pill button on the right. No multi-item nav menu on the home page — the page has one job below the fold (read, then book), so wayfinding is scroll-based, not menu-based. The header is shared across routes (home and the Terms & Conditions page) via `react-router-dom`; the practice name links to `/`.

### Doodle Marks (`src/components/icons.tsx`)
A small, deliberately-restrained vocabulary of whimsical accents, scattered as `pointer-events-none absolute` decoration near headings and photos across every section, never inside content flow: `SparkleIcon` (a hand-drawn four-point star, the most-used mark), `DotIcon` (a plain filled circle, used singly or in small clusters), `SquiggleIcon` (a loose wavy underline, used under 1-2 short phrases as a hand-drawn emphasis mark, not a universal underline treatment), and `TrianglePointer` (a small solid triangle, used only as the speech-bubble "tail" on annotation tags, never freestanding). Color is drawn from across the full palette (terracotta, lavender, sage, butter) rather than one accent, which is what reads as "colorful" rather than "branded accent repeated." Density stays light — 2-3 marks per section, never enough to compete with the actual content.

### Character Doodles (`src/components/icons.tsx`)
A second, larger tier of the same doodle vocabulary — small hand-drawn line-art people (`FigureRestIcon` seated/calm, `FigureWaveIcon` standing/waving, `FigureDuoIcon` two figures together for couples/family, `FigureStepIcon` mid-stride) drawn in the identical monoline grammar as the botanical marks (1.75px stroke, round caps/joins, `currentColor`), never as filled flat-illustration characters — the client's "cartoon accents" brief realized inside the existing line-art system rather than as a second, clashing illustration style. Sized larger than the sparkle/dot marks (roughly 40px) since a figure needs more silhouette to read, but count toward the same 2-3-marks-per-section density budget — each was placed by swapping out or supplementing an existing mark, never stacked on top of a section already at cap. One figure per section, each tied to that section's meaning: `FigureRestIcon` in "How I can help" (calm), `FigureDuoIcon` in "I work with…" (togetherness), `FigureWaveIcon` in the FAQ (approachability), `FigureStepIcon` in the closing CTA (echoes "the first step").

### Annotation Tags (hero floating badges)
Pastel pill badges (`bg-butter-300` / `bg-lavender-300` / `bg-sage-300`, always `text-ink-800` regardless of background hue for reliable contrast) that float around the hero photo frame with a slow vertical drift and a slight rotation wobble, each carrying a small `TrianglePointer` positioned and rotated to read as a speech-bubble tail pointing back at the frame. Hidden below `sm` — the photo is priority on small screens, and there isn't room for badges to float without overlapping it.

### FAQ (hover-to-reveal)
Bordered rounded rows (`rounded-2xl border`), one question each, with a circular arrow-in-a-circle control on the right. The row's default trigger is **hover** — `onMouseEnter`/`onMouseLeave` set which single row is open — with `onFocus`/`onBlur` mirroring that for keyboard users, and `onClick` as the touch fallback. The click handler always *opens* the row (`setOpenIndex(i)`), never toggles it closed: a real mouse click fires `mouseenter` first, so a toggle-on-click handler would immediately re-close whatever hover had just opened, closing on click was a real bug caught in testing, not a hypothetical. Only one row is open at a time. The answer reveals via a Framer Motion height/opacity expand (0.3s, the site's standard ease-out curve), and the arrow rotates 180° and fills solid terracotta when open.

### Hero Book Now CTA
Inline in the hero's left column, directly under the intro paragraph and above the quick-links — not a separate card. One primary pill button ("Book Now") that links straight out to Headway (`src/config.ts`, `BOOKING_URL`) in a new tab, plus a small reassurance line underneath ("Free consultation — you'll pick your exact time on Headway's secure booking page") that stays honest about the external handoff rather than simulating availability the site doesn't actually have. The hero's photo panel (right column) carries the visual weight; the button carries the action, echoing the left-column-CTA / right-column-photo split from the Sofia Therapy reference the client provided. Three small pill badges (Bilingual EN/ES, Licensed in NJ, 100% Virtual) float around the photo frame instead (see Annotation Tags).

## Motion

Motion is deliberate and site-wide, not a single restrained moment: the hero content rises in on load, staged sequentially (headline → paragraph → Book Now CTA → quick-links → photo, each on its own delay) rather than fading in as one block, so the pacing itself reads as intentional; every section below reveals on scroll (fade/slide, or a staggered pop-in for tag clusters and chip lists); interactive elements (buttons, tags, insurance chips, nav links) get a small hover lift or scale. All easing uses the same signature curve, `cubic-bezier(0.16, 1, 0.3, 1)` (an exponential ease-out), so every reveal — big or small — feels like it belongs to one system.

On top of that, the background itself is never fully still: every large blur-glow shape drifts slowly (16-22s loops, small x/y/scale range) and every scattered doodle mark uses `src/components/Drift.tsx` — a small wrapper giving it a continuous, gentle float + rotate (4-6.5s loops, varied per instance so nothing moves in lockstep). This is a deliberate ambient-motion layer, referencing a client-supplied inspiration (Healpoint), not incidental — new decorative marks should use `Drift` rather than being left static.

### Named Rules
**The Self-Healing Reveal Rule.** Every scroll-triggered reveal uses Framer Motion's `whileInView` with `{ once: false, amount: 0.1 }` — never `once: true`. A fast scroll (Page Down, a scrollbar drag, a fast trackpad flick) can outrun `once: true`'s one-shot observer and leave real content — a specialty list, the insurance chips, the closing CTA — permanently stuck at `opacity: 0`, because opacity-hidden elements still occupy their layout box, so the failure reads as a blank gap, not an error. `once: false` makes every reveal retrigger on any subsequent pass through the viewport, so it cannot get stuck invisible; the small cost (content can re-fade if the visitor scrolls back past it) is worth the correctness guarantee. Do not "optimize" this back to `once: true` for a cleaner one-shot feel without re-testing a fast scroll from a cold page load.

**The Tight-Leading Mark Rule.** A decorative mark absolutely positioned against an inline `<span>` inside display type (`leading-[1.05]`, `tracking-tightest`) can visually collide with the line above even when its coordinates are "correct" relative to its own span — a small negative `top` offset is enough to intrude into the previous line's row when leading is this tight, which is exactly what happened with the sparkle after "alone" in the hero headline (caught in user review, not caught by inspecting the code). Point marks near tightly-set display text downward (`top-full` off the span's own bottom edge) rather than upward, or verify against a real screenshot, not just coordinate math.

## Do's and Don'ts

### Do:
- **Do** keep terracotta exclusive to actions and top-tier specialty tags (The One Action Color Rule).
- **Do** commit color at section/page scale — a section's background is cream, sage, dark sage-night, or terracotta, never a neutral ground with small accent chips.
- **Do** keep the organic blob photo frame unique to Diana's About portrait; it is the page's one large-photo moment.
- **Do** self-host type via `@fontsource` latin + latin-ext subsets only (this is a bilingual EN/ES site; broader unicode ranges are unused weight).
- **Do** use `once: false` on every `whileInView` reveal (see The Self-Healing Reveal Rule under Motion).
- **Do** keep floating badges (hero) positioned fully outside whatever card or photo they accompany — never overlapping its content.

### Don't:
- **Don't** introduce a uniform icon-plus-heading-plus-text card grid — specialties, care types, and "who I work with" are composed as flowing tag clusters or a single typographic statement instead, by deliberate choice.
- **Don't** add a kicker/eyebrow label above any heading.
- **Don't** use emoji or a generic icon font; all icons are hand-authored SVGs drawn in the botanical/leaf grammar established by the hero.
- **Don't** use gray or black shadows — every shadow is warm-tinted from `warm-ink-deep`.
- **Don't** let doodle marks exceed ~2-3 per section or drift into the content column — they're texture, not decoration competing for attention.
- **Don't** write an FAQ (or any hover-reveal) click handler as a toggle. On a mouse, `mouseenter` always precedes `click`; a toggle-on-click undoes what hover just did. Click handlers on hover-primary components should set state directly (open, not toggle).
