# Bartr Design System

This file describes the design system behind the Bartr landing page and team page. It matches the code in `app/globals.css` and `components/landing/`. Use it to brief designers, to review new screens, and to decide what belongs on the site.

## 1. Visual theme and atmosphere

Bright, product-led, and precise. The page reads like a clean neighborhood map with real app screens on it: pale sky fields, navy type, one saturated blue, and phones that show what the product actually does. The mood is confident and trustworthy. Nothing is decorative for its own sake.

**Design read:** consumer marketplace landing page for first-time visitors in Lagos, with a confident product-led language, a large grotesk display, real app screens, one saturated brand blue, and restrained motion that always means something (the "nearby" field, the sticky story).

**Dials:**

| Dial | Value | Meaning here |
|---|---|---|
| DESIGN_VARIANCE | 7 | Offset hero, asymmetric bento and stat layouts, never chaotic |
| MOTION_INTENSITY | 6 | Entry sequence, ring pulse, scroll reveals, sticky story; all motivated |
| VISUAL_DENSITY | 3 | Generous space, one idea per block |

**Inspiration:** patterns seen on Dribbble's landing-page, marketplace, and fintech pages: oversized sans headlines with an image set inside the words, product screens on pale fields, dark panels with a single bright accent, and bento grids of tinted tiles. We took the patterns, not any specific shot. Every component was written for Bartr.

## 2. Color palette and roles

Brand tokens come from the existing brand kit in the README. Surfaces are tinted, never pure black or pure white.

| Token | Hex | Role |
|---|---|---|
| `--color-blue` | `#0067f5` | The only accent. Primary buttons, the highlighted word in the headline, map markers, check icons |
| `--color-blue-press` | `#0056d6` | Primary button hover |
| `--color-navy` | `#0a2e65` | All headings and body emphasis, dark panels, the header wordmark color |
| `--color-navy-deep` | `#071f45` | Modal backdrop tint |
| `--color-sky` | `#e1f6ff` | Chips, the customer panel, the hero field, bento tile E |
| `--color-mint` | `#ecfbec` | Insight card (middle), bento tile B, vendor icon and vendor details |
| `--color-blush` | `#fff0f4` | Insight card (lower), bento tile D |
| `--color-sand` | `#f4f4ed` | Bento tile F, with a dotted texture; the third How step |
| `--color-butter` | `#ffffee` | FAQ section background, the one warm tint |
| `--color-canvas` | `#f6f8fc` | Page background and option cards |
| `--color-surface` | `#fcfdff` | Cards, header pill, modal panel, team cards |
| `--color-ink-soft` | `#4f5d75` | Body copy and captions |
| `--color-line` | `rgb(10 46 101 / 0.12)` | Hairlines and card borders |
| `--color-on-navy` | `#fcfdff` | Text on navy and on blue |
| `--color-on-navy-soft` | `rgb(252 253 255 / 0.8)` | Secondary text on navy |
| `--color-sky-on-navy` | `#8fc4ff` | Check icons inside the navy vendor panel |

**Contrast (approximate, WCAG AA for body text):** white on blue about 4.9:1; navy on canvas about 12:1; ink soft on canvas about 6.8:1; navy on sky above 10:1.

**Rules**

- One accent (blue). Sky, mint, blush, and sand are surfaces only. Never use a tint as text color.
- Navy is the only text color. Do not add grays from another hue family.
- Gradients appear only as the radial "nearby" glow (hero field, CTA band). No gradient text. No neon glow.
- Shadows are tinted navy, never black.

## 3. Typography

**Family:** Space Grotesk, loaded with `next/font/google` (variable weight, subsets `latin` and `latin-ext`). Chosen because it is the README's own placeholder typeface, it is a distinctive grotesk, and it includes the Naira sign (₦, U+20A6). We checked the font file: the latin-ext subset contains ₦. Geist, Geist Mono, and Outfit do not contain ₦, and Geist is not in Next 14.2.15's Google font list, so they were rejected. Inter is not used.

**No serif.** Emphasis comes from color and weight, not italics (Space Grotesk has no italic in this build).

| Role | Size (clamp) | Weight | Line height | Tracking | Class |
|---|---|---|---|---|---|
| Hero headline | `2.75rem` to `4.25rem` (4.4vw) | 600 | 0.98 | -0.05em | `.display` |
| Page title (team) | `2.75rem` to `5.25rem` (6.2vw) | 600 | 0.98 | -0.05em | `.h1` |
| Section headline | `2.25rem` to `3.75rem` (4.6vw) | 600 | 1.02 | -0.035em | `.h2` |
| Card headline | `1.375rem` to `1.75rem` (2.2vw) | 600 | 1.15 | -0.025em | `.h3` |
| Lead paragraph | `1.0625rem` to `1.25rem` (1.5vw) | 400 | 1.55 | normal | `.lead` |
| Body | `1rem` | 400 | 1.6 | normal | default |
| Stat numeral | `5.5rem` to `10.5rem` (14vw) | 600 | 0.82 | -0.07em | `.problem-stat` |
| Bento quote | `1.75rem` to `2.9rem` (3.4vw) | 600 | 1.08 | -0.035em | `.tile-quote` |
| Source and caption | `0.875rem` | 400 | 1.6 | normal | `.source` |

**Rules**

- Sentence case everywhere. No all-caps labels.
- Body copy runs at most 62 characters per line (`.body-copy`). Leads run at most 34rem.
- Prices and figures use `font-variant-numeric: tabular-nums` (`.spread-label`).
- Emphasis word in a headline: blue (`.accent`), same weight.

## 4. Component stylings

**Header (`SiteHeader`).** A sticky floating pill, 4rem tall, blurred surface, hairline border, navy-tinted shadow. Wordmark left, four links center (How it works, Our story, FAQ, Team), one small primary button right. Links hide below 860px; the header compacts below 520px so the button fits.

**Buttons (`.btn`).** Pill shape, minimum height 3rem, 1.5rem horizontal padding, semibold label that never wraps. Variants:

- `primary`: blue fill, white label. Hover moves to blue-press and lifts 1px. Press scales to 0.98.
- `light`: surface fill, navy label. Used on the navy CTA band.
- `ghost`: transparent with hairline border, navy label.
- `ghost-light`: transparent with a light border, for dark surfaces.
- `sm`: 2.5rem height, used in the header.

Arrows nudge 3px on hover. Focus rings are a 3px blue outline with a 3px offset.

**Arrow badge (`.btn-badge`).** A translucent circle around the arrow in the primary button. The hero eyebrow chip was removed, so the hero opens on the headline.

**Hero stage (`HeroStage`).** A 1 : 1.08 field with a sky radial glow and a hairline border, 40px radius. Three concentric rings, a radar sweep that turns once every six seconds, and five vendor blips on the rings that light up as the sweep passes them. Four category icons (phone, scissors, car, bolt) ping in time with the sweep. One real phone screenshot at 46% of the field width sits on top, rotated -3 degrees. The stage is decorative (`aria-hidden`) because the headline already says what the product does.

**Rolling service word (`.roll-word`).** A sky pill inside the headline that takes the place of "someone": "There's always a nail tech nearby who can." Four service words take turns, three seconds each, with a crossfade over a 12-second loop. The first word is the one read aloud. The others are hidden from assistive technology, so the sentence reads cleanly. Under reduced motion it shows the first word only. The real screens stay in the stage and the How section.

**Ticker (`Ticker`).** The only marquee on the page. A navy band with seven service names separated by hairline rules. It scrolls at 40 seconds per loop, pauses on hover, and becomes a scrollable row under reduced motion.

**Problem block (`Problem`).** A large "9 in 10" numeral with its caption and source line, a research paragraph, a price-spread diagram, and three insight cards.

- Price spread: a 2px rule with two markers, at 20% (₦1,000) and 100% (₦5,000) of a ₦0 to ₦5,000 scale. The figures come from the README research notes. Caption: "Same repair, two prices."
- Insight cards: a blue card spanning two rows on the left, a mint card and a blush card stacked on the right. Each carries a source line ("Heard from a repair technician").

**Color-shifting story (`HowItWorks` and `StepStory`).** The section itself changes color with each step: sky, mint, sand, blush, then brand blue for the final step, where the text turns white. The five steps sit on the left as large display headings: Describe the job, Get matched, Compare and choose, Track the job, Pay and rate. A sticky phone on the right shows the matching real screen, with a 500ms crossfade. The active step is the one whose box spans the viewport's center line, checked on observer events. Inactive steps sit at 34% opacity, and the section background moves over 700ms. Below 900px the sticky phone is replaced by a phone-sized screenshot inside each step.

**Two-sided panels (`TwoSided`).** Two equal panels side by side: customers on sky, vendors on navy. Each has a headline, a short paragraph, and three check items. Below 900px they stack.

**Feature bento (`FeatureBento`).** Six tiles on a four-column grid with 28px radius and 1.25rem gaps.

| Tile | Span | Surface | Message |
|---|---|---|---|
| A | 2 columns, 2 rows | Surface, hairline | Pidgin example quote, "say it the way you'd say it" |
| B | 2 columns | Mint | Fair price ranges |
| C | 1 column | Navy | Ranked, not just nearest |
| D | 1 column | Blush | Trust from real jobs |
| E | 2 columns | Sky | Track it live |
| F | 2 columns | Sand with dot texture | Cash on completion, escrow on the roadmap |

Below 900px the grid becomes one column and the row spans reset.

**Chat FAQ (`Faq`).** Each question is a bubble in a palette tint, in turn: sky, mint, blush, sand. Opening a question shows the answer as a navy reply that rises in from the right. The section sits on butter, the one warm tint. The markup is native `<details>` and `<summary>`, so it works without JavaScript and with the keyboard and screen readers.

**CTA band (`CtaBand`).** A navy panel split in two. On the left: the headline, one lead line, a light primary button, and a ghost-light link to the team page. On the right: the matched list and the rating screen sit on concentric rings. The front phone is rotated and cropped by the panel's bottom edge.

**Footer (`SiteFooter`).** Centered: the logo and tagline, two link columns (Explore, Company) divided by a hairline, a small uppercase copyright line, and an oversized "Bartr" wordmark cropped by the bottom edge. The reference site's newsletter form is not copied, because there is no mailing list yet and a form without a backend would mislead people. There are no company social icons, because no company accounts were supplied.

**Team cards (`app/team/page.tsx`).** Two cards in a two-column grid, stacked on mobile. Each has a 9rem circular avatar with a sky ring, the name, the role in blue, a short note, and optional social links.

**Launch modal (`LaunchModal`).** A dialog over a blurred navy backdrop, opened by any "Launch web app" button. It has two option cards: customers (opens the customer web app in a new tab) and vendors (expands to show the pilot status and two links). Escape and the close button dismiss it. Focus moves into the dialog on open, and body scrolling is locked while it is open.

## 5. Layout principles

- **Container:** maximum 1200px, horizontal gutter `clamp(1.25rem, 4vw, 2.5rem)`.
- **Section rhythm:** vertical padding `clamp(4.5rem, 9vw, 8rem)`. Headlines sit above their content, never beside it.
- **Grids:** CSS grid everywhere. No flexbox percentage math.
- **Breakpoints:** 520px (compact header), 640px (full-width hero and CTA buttons, single-column modal options), 760px (single-column team grid), 860px (header links hidden), 900px (layouts collapse to one column, story becomes a list, bento becomes a list), 1080px (tighter header links).
- **Section families** (no family repeats on the page): hero split, ticker band, stat and tiles, sticky story, two-panel split, bento grid, chat FAQ, CTA band, footer.
- **Mobile:** every multi-column block declares its collapse in the same stylesheet section. No horizontal scroll at 375px (checked).
- **Hero:** headline with a rolling service word (three lines at 1440px), one lead, two buttons. No eyebrow, no text below the buttons.

## 6. Motion and interaction

Motion has a job. Each animation below explains something.

| Motion | What it says | Implementation |
|---|---|---|
| Hero entry (`rise`) | The page is arriving, text first, then the phone | CSS keyframes, 900ms, staggered by child |
| Radar sweep (`sweep`) | Nearby search | CSS, 6s per turn; blips (`blip`) and icon pings (`ping`) follow its angle |
| Phone float (`float`) and icon bob (`bob`) | The product is alive, not static | CSS, 7s and 6s |
| Rolling service word (`word-cycle`) | The breadth of services, inside the headline | CSS, 12s cycle of four words; one still word under reduced motion |
| Ticker (`ticker`) | Breadth of services | CSS, 40s linear, pauses on hover |
| Section reveal (`.reveal`) | Content arrives as you read | CSS scroll-driven `animation-timeline: view()`. Where unsupported, content is simply visible |
| Story steps | Which step you are on | `IntersectionObserver` plus geometry, 500ms crossfade |
| Section color | The mood changes with each step | 700ms background and text color transition |
| FAQ replies | The answer arrives after a question opens | CSS keyframes, 360ms |
| Button and card hover | Affordance | 200ms transform and color transitions |
| Modal | Focus change | 220ms backdrop fade, 280ms panel rise |

**Rules**

- Animate `transform` and `opacity` only.
- No `window.addEventListener('scroll')`. Scroll reactions use `IntersectionObserver` or CSS scroll timelines.
- `prefers-reduced-motion: reduce` shortens every animation to 1ms, stops the ticker and pulses, and shows the ticker as a plain scrollable row.
- `prefers-reduced-transparency: reduce` replaces the blurred header and modal backdrop with solid fills.

## 7. Imagery and icons

**Real screens only.** Every phone shows an actual screen from the app prototype. No hand-built fake interfaces. Screens are used where they explain a step:

| Used for | Screen |
|---|---|
| Hero phone | Map home with nearby vendors |
| CTA band phones | Matched list and rating |
| Describe the job | Request screen with the Pidgin message |
| Get matched | Ranked "Matched for you" list |
| Compare and choose | Vendor profile with typical price |
| Track the job | Live tracking with arrival time |
| Pay and rate | Rating screen |

**Excluded on purpose:** the profile screen (shows personal details), the side menu (personal details), the invite screen (no product claim), and the payments screen (shows escrow as an option, which the site describes as roadmap).

**Alt text:** every phone image describes the screen's content. Decorative images (inline pill, stage phone) use `alt=""` and sit inside `aria-hidden` containers.

**Icons:** lucide-react only (the project already depends on it). Used icons: Check, ArrowRight, ChevronDown, ExternalLink, User, Wrench, X, Smartphone, Scissors, Car, Zap. Lucide has no brand marks, so the three social icons on Akolo's card are the inline SVG paths from the original team page.

**Avatars:** photos in `public/team/` (`akolo-bulus.jpg`, `ayodeji-adesegun.jpg`), shown as 9rem circles with a sky ring and `object-fit: cover`. Use square photos of at least 420px.

## 8. Voice and copy

- Plain, specific, and honest. Short sentences. Name the thing, then say what it does.
- The Pidgin example ("My phone screen cracked, need am fix today") appears only as sample input.
- Numbers come from the research or product spec only: "9 in 10" (NESG 2025), ₦1,000 versus ₦5,000 (interview notes), 10-minute accept window (product spec). No invented ratings, counts, or testimonials.
- Roadmap items are labeled as roadmap. Escrow is "on the roadmap." Android and iOS apps are "coming soon."
- No em dashes or en dashes anywhere in site copy. Use commas, colons, periods, or parentheses.
- No cute or poetic labels, no scroll cues, no "Step 1 / Step 2" labels, no section numbers.

## 9. Accessibility

- Heading order: one H1 (hero or team title), H2 per section, H3 per card or step.
- Skip link to `#content` (`.skip-link`), visible on focus.
- FAQ and modal work by keyboard. The modal traps no focus, but focus moves into it on open and Escape closes it.
- Visible focus ring on every interactive element.
- Contrast meets AA for all body text pairs in section 2.
- Motion and transparency preferences are honored.
- Phones are real images with descriptive alt text. Decorative stage elements are hidden from assistive technology.

## 10. Anti-patterns (banned)

- Purple or violet gradients, neon glows, or gradient text.
- Inter as the primary typeface. Serif headlines. Italic emphasis.
- Centered hero with a generic background blob.
- Three equal feature cards in a row. Zig-zag image and text sections more than twice in a row.
- Fake product UI built from divs. Fake testimonials, ratings, or counts.
- Stock photos of people. Logos from unknown brands.
- Emoji as icons. Mixed icon families.
- Scroll cues ("Scroll to explore"), section numbers, "Stage 1 / Step 1" labels.
- Decorative status dots on every row. Locale or time strips.
- Long dividers under every row of a list. Eyebrow labels above every section.
- Em dashes in site copy.

## 11. Implementation map

| File | Purpose |
|---|---|
| `app/globals.css` | Every token and component style, grouped: tokens, base, buttons, header, hero, ticker, problem, story, panels, bento, FAQ, CTA, footer, team, modal, motion, responsive, reduced motion |
| `app/layout.tsx` | Space Grotesk font, metadata, shared header and footer, launch modal provider |
| `app/page.tsx` | Home page section order |
| `app/team/page.tsx` | Team page: two members and their links |
| `components/landing/Hero.tsx` | Hero copy, inline pill, stage |
| `components/landing/Ticker.tsx` | Service ticker |
| `components/landing/Problem.tsx` | Research stat, price spread, insight cards |
| `components/landing/HowItWorks.tsx` | Story copy and screen mapping |
| `components/landing/StepStory.tsx` | Client component for the color-shifting story, its active step, and the section background |
| `components/landing/TwoSided.tsx` | Customer and vendor panels |
| `components/landing/FeatureBento.tsx` | Six-tile bento |
| `components/landing/Faq.tsx` | Chat-style FAQ |
| `components/landing/CtaBand.tsx` | Closing band |
| `components/landing/SiteHeader.tsx`, `SiteFooter.tsx` | Shared chrome |
| `components/landing/LaunchProvider.tsx`, `LaunchButton.tsx`, `LaunchModal.tsx` | Modal state, trigger, and dialog |
| `lib/utils.ts` | `cn()` class-name helper |

## 12. Open items

- **Footer newsletter:** the reference site has an email sign-up. Ours has none until there is a mailing list and a backend to store addresses.
- **Modal focus trap:** Tab can move focus to the page behind the open dialog. Add a focus trap before launch.
- **Naira glyph rendering:** Space Grotesk includes ₦, so the glyph is correct in the font itself. Check it on a low-end Android device before launch.
- **Photography:** the two team photos were copied from the ancyble project. Check that Akolo is happy with the photo before deploying. The site has no vendor photography yet.
- **README design-system section:** it still lists Inter for body text and Space Grotesk as a placeholder. The site now uses Space Grotesk only. Update that section when the team agrees.
- **Unused code:** `components/ui/button.tsx` and the `@radix-ui/react-slot` and `class-variance-authority` dependencies are unused by the new site.
- **Escrow and app status:** the copy says escrow is on the roadmap and mobile apps are coming soon. Update both when that changes.
