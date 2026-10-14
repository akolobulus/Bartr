# Bartr Repository Summary

## What Bartr is

Bartr is an AI-matched marketplace for informal-sector services in Nigeria: phone repair, car repair, nails, building, styling, and similar trades. It applies the ride-hailing loop (request, match, accept, complete, rate) to skills instead of drivers.

- A customer describes what they need in text or voice, including Pidgin.
- AI turns the request into a structured job with a category, urgency, and suggested price range.
- The platform ranks nearby vendors by rating, response speed, and price fit, not just distance.
- Both sides rate each other afterward, building a portable trust record.

The problem comes from field interviews at Computer Village, Ikeja. Vendors said they couldn't find customers without spending heavily on ads, had no trust signal, and faced chaotic pricing. Existing platforms such as LinkedIn, Upwork, and Fiverr are built for remote, CV-based work and don't fit in-person trades.

The planned MVP is a single-location pilot with two to three service categories and cash-on-completion payment. Today the product is an interactive prototype with a live landing page, and it has no app store listing yet.

## What this repository is

This repo is the **Bartr landing page**: a Next.js 14 App Router project deployed at bartrr.vercel.app. It also holds the `/team` page, the product screenshots, the logo, the brand variants, and the Phases 1 to 3 planning document.

The customer and vendor apps are separate repositories, listed in the README. This repo does not contain them.

The visual system is documented in [DESIGN.md](DESIGN.md).

## Tech stack

- Next.js 14.2.15 (App Router), React 18.3.1, TypeScript 5.5.4
- Space Grotesk loaded with `next/font/google` (latin and latin-ext, which include the Naira sign)
- lucide-react for icons; clsx and tailwind-merge in `lib/utils.ts`
- ESLint 8.57 with `next/core-web-vitals`
- Scripts: `dev` (port 3000), `build`, `start`, `lint`

No CSS framework is used. All styles are in `app/globals.css`, driven by CSS custom properties.

## How the site is built

`app/layout.tsx` sets the font, the metadata, the skip link, the shared header and footer, and a `LaunchProvider` that lets any "Launch web app" button open the modal.

`app/page.tsx` composes the home page from `components/landing/`. The only client-side pieces are the modal and the sticky story, which switches phone screens as you scroll. Everything else is server-rendered.

The old static HTML page (`bartr-landing.html`) was replaced by this React version and removed. It is still available in git history.

## Project structure

```
Bartr/
├── app/
│   ├── layout.tsx                  Font, metadata, skip link, shared header and footer
│   ├── page.tsx                    Home page: section order
│   ├── globals.css                 Design tokens and every component style
│   └── team/page.tsx               Team page (/team): two members
├── components/landing/
│   ├── Hero.tsx                    Headline with a rolling service word, phone stage with radar
│   ├── Ticker.tsx                  Service ticker band
│   ├── Problem.tsx                 "9 in 10" research, price spread, insight cards
│   ├── HowItWorks.tsx              Five-step story copy and screen mapping
│   ├── StepStory.tsx               Client: color-shifting story and active step
│   ├── TwoSided.tsx                Customer and vendor panels
│   ├── FeatureBento.tsx            Six-tile feature grid
│   ├── Faq.tsx                     Chat-style FAQ (native details)
│   ├── CtaBand.tsx                 Closing band
│   ├── SiteHeader.tsx              Floating header pill
│   ├── SiteFooter.tsx              Footer
│   ├── LaunchProvider.tsx          Client: modal state
│   ├── LaunchButton.tsx            Client: opens the modal
│   └── LaunchModal.tsx             Client: "Choose your profile" dialog
├── components/ui/
│   └── button.tsx                  shadcn-style Button; not imported anywhere
├── lib/utils.ts                    cn() class-name helper
├── brand/                          Logo variants (not referenced by code)
│   ├── 1.png                       Wordmark with tagline, blue on white
│   ├── 2.png                       Wordmark with tagline, white on blue
│   ├── 3.png                       Wordmark, blue on white
│   └── 4.png                       Wordmark, white on blue
├── docs/
│   └── sdlc-phase1-3.md            Phases 1 to 3 planning document (README links here)
├── public/
│   ├── logo.png                    Wordmark for the header and footer
│   ├── team/                       Team photos (copied from the ancyble project)
│   │   ├── akolo-bulus.jpg         Photo for Akolo Bulus
│   │   └── ayodeji-adesegun.jpg    Photo for Ayodeji Adesegun
│   └── product-screenshots/        15 app screenshots (screenshot_1 to 16, no 6), 1080×2400
├── DESIGN.md                       Design system: tokens, type, components, motion, copy rules
├── README.md                       Project overview, team, roadmap
├── summary.md                      This file
├── metadata.json                   Project name, description, and prompt; not used by the app
├── package.json                    Package name bartr-next, scripts, dependencies
├── bun.lock                        Bun lockfile (see notes)
├── next.config.mjs                 Next.js config: output 'standalone'
├── tsconfig.json                   TypeScript config; @/* maps to the repo root
├── next-env.d.ts                   Generated Next.js type references (do not edit)
├── .eslintrc.json                  Lint config: next/core-web-vitals
├── .env.example                    States that no environment variables are needed
└── .gitignore                      Ignores node_modules, .next, out, dist, *.local
```

## Landing page content

1. **Header:** wordmark, links to How it works, Our story, FAQ, and Team, and a "Launch web app" button.
2. **Hero:** "There's always a nail tech nearby who can." The word after "always" rotates through four services. A phone shows the real map home screen inside a ring field, with a radar sweep that lights up nearby vendors.
3. **Ticker:** seven service names, from phone repair to building work.
4. **Our story:** the "9 in 10" statistic (Nigerian Economic Summit Group, *From Hustle to Decent Work*, 2025), a price spread showing ₦1,000 and ₦5,000 for the same repair, and three insight cards from the field interviews.
5. **How it works:** five steps (describe the job, get matched, compare and choose, track the job, pay and rate). Each step shows the matching real screen, and the section changes color with each step, ending on brand blue.
6. **Two-sided panels:** one for customers, one for vendors.
7. **Feature bento:** the Pidgin example request, fair price ranges, ranked matching, trust from real jobs, live tracking, and cash on completion with escrow on the roadmap.
8. **FAQ:** four questions, shown as a conversation: each question is a bubble, and the answer replies. Does it cost anything? How is trust established? What if typing is hard? Is escrow required?
9. **CTA band and footer.** The CTA band has two real screens on rings. The footer is centered, with two link columns, a copyright line, and an oversized wordmark cropped by the bottom edge.

**Launch modal.** Customers go to the customer web app (bartr-web-seven.vercel.app). Vendors see pilot status, with links to the Bartr-Vendors-App repository and the team page.

**Team page.** Two cards:

- Akolo Bulus, Software Engineer, with LinkedIn, GitHub, and Instagram links.
- Ayodeji Adesegun, Software Engineer, with LinkedIn and Instagram links. Builds the Swift versions of the Bartr apps and sharpens the design of this website.

## Planning document (`docs/sdlc-phase1-3.md`)

Written by Akolo Amos Bulus for NUTM, using Agile methodology:

- **Phase 1, Planning:** project charter and MVP scope (Computer Village pilot, two to three categories, cash-on-completion), sprint plan 0 to 10, feasibility study, and resource plan.
- **Phase 2, Requirements:** business requirements and rules, a PRD of six epics, and an SRS with functional requirements FR-1 to FR-14 and non-functional requirements NFR-1 to NFR-7.
- **Phase 3, System design:** architecture, the v1 weighted matching score (rating 0.35, distance 0.25, response rate 0.20, price fit 0.20), the database schema, the AI request-parsing flow, the job status lifecycle, and nine core UI screens.

## Notes and inconsistencies

- **Mobile stack:** the README says the customer and vendor apps are native Kotlin (Android). The planning document specifies React Native with Expo. The team now also includes Swift work (Ayodeji builds the Swift versions of the apps), so the README's tech stack table may need a Swift row.
- **Escrow:** the landing copy and the README's customer features describe escrow. The README roadmap and the planning document list it as not yet built. The prototype's payments screen also shows an escrow card option. The landing copy says escrow is on the roadmap.
- **Typography:** the README design system names Space Grotesk for display and Inter for body. The site uses Space Grotesk only, and Inter is not loaded. The README section is stale until it is updated.
- **Unused button:** `components/ui/button.tsx` is not imported. It depends on `class-variance-authority` and `@radix-ui/react-slot`, which only it uses.
- **Lockfile:** the README says `npm install`, but the only lockfile is `bun.lock`. Bun 1.3.14 rejected it on a frozen install (`UnknownLockfileVersion`).
- **Dependencies:** `npm install` warns that `next@14.2.15` has a known security vulnerability and asks for a patched version. It also warns that `eslint@8.57.0` is no longer supported.
- **License:** the README says MIT, but the repo has no LICENSE file.
- **Modal focus:** the launch modal does not trap focus yet, so Tab can reach the page behind it (listed in DESIGN.md).
- **Screenshots:** the old alt labels for several screenshots were wrong. The new alt text describes what each screen shows. The profile and side-menu screens, which show personal details, are not used on the site.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
