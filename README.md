# Bartr

**There's always someone nearby who can.**

Bartr is an AI-matched marketplace that connects people who need something done — repaired, styled, fixed, built — with trusted, rated vendors and technicians nearby. Think of it as a ride-hailing app, but instead of matching you with the nearest driver, it matches you with the nearest *skill*.

## Table of contents

- [The problem](#the-problem)
- [Our solution](#our-solution)
- [Where AI fits in](#where-ai-fits-in)
- [Who it's for](#who-its-for)
  - [For customers](#for-customers)
  - [For vendors](#for-vendors)
- [Live demo / downloads](#live-demo--downloads)
- [Repository](#repository)
- [Project structure](#project-structure)
- [Tech stack](#tech-stack)
- [Running it locally](#running-it-locally)
- [Design system](#design-system)
- [Roadmap](#roadmap)
- [Research behind the product](#research-behind-the-product)
- [Team](#team)
- [License](#license)

## The problem

Across Nigeria, more than **9 in 10 working people** earn their living outside the formal economy — repairing phones, fixing cars, doing nails, building, styling, fixing (Nigerian Economic Summit Group, *"From Hustle to Decent Work,"* 2025). They are the backbone of how the country runs, and yet finding trustworthy work — or a trustworthy customer — still comes down to luck.

In field interviews conducted directly with vendors and technicians at Computer Village, Ikeja, the same problems came up again and again, unprompted:

- **No reliable way to find new customers.** Vendors reported spending ₦100,000–₦400,000 on ad subscriptions (Jiji, mainly) with little or nothing to show for it.
- **No trust signal.** Buyer and seller transact off-platform with no verification, and scams are common. Vendors explicitly asked for something like Uber's star system.
- **No shared sense of fair pricing.** The same repair might go for ₦1,000 from one technician and ₦5,000 from another, undercutting quality work.
- **Existing "skills marketplaces" don't fit.** Platforms like LinkedIn, Upwork, and Fiverr are built for white-collar, CV-based, remote work — none of them serve blue-collar, in-person, market-based labor the way ride-hailing apps serve transport.

## Our solution

Bartr applies the **request → match → accept → complete → rate** loop that already works for ride-hailing to informal-sector services, with an AI layer doing the parts a listing site can't:

1. **Describe what you need**, in your own words or your own voice — no rigid forms.
2. **AI turns that into a structured request** — category, urgency, and a fair suggested price — before you post it.
3. **Get matched with ranked, rated vendors nearby** — not just the closest one, but the one most likely to actually deliver.
4. **Track the job in real time**, chat with your vendor, and pay however feels safest (cash or escrow).
5. **Rate each other when it's done**, building the portable trust layer this market has never had.

## Where AI fits in

AI isn't decoration here — it's doing three specific jobs:

| Feature | What it does |
|---|---|
| **Natural-language request parsing** | Converts free-text or voice input (including Pidgin) into a structured job: category, urgency, description, and a suggested price range. |
| **Fair-price guidance** | Suggests a price range per category based on typical local pricing, directly addressing the undercutting problem uncovered in our research — without forcing a fixed price. |
| **Two-sided ranked matching** | Customers see vendors ranked by rating, response speed, and price-fit — not just distance. Vendors see requests ranked by relevance to their skill, so they're not scrolling irrelevant jobs. |

## Who it's for

### For customers

- Post a request by typing or speaking naturally
- See a live map of nearby vendors, ranked and rated
- Compare vendors, message them, and choose who to work with
- Track a job in real time on a mini-map, from acceptance to completion
- Pay in cash or hold funds in escrow for larger jobs
- Rate vendors afterward, and browse job history, saved vendors, and promotions

### For vendors

- See job offers near you, filtered by "for you" (your category) or browse others
- Accept or decline a request within a 10-minute window before it's offered elsewhere
- Navigate to the customer with a live route on the map
- Move a job through clear stages: *heading there → arrived → in progress → complete*
- Track earnings, with a balance-visibility toggle for privacy in public
- Chat with the customer, and view job history and payouts

## Live demo / downloads

This is currently a working **interactive prototype**, not a published app. There's no App Store / Google Play listing yet — the "Download" buttons in the apps are intentionally non-functional placeholders for that reason.

To try it, open the HTML files directly in a browser (desktop or mobile) — see [Running it locally](#running-it-locally).

| App | Status |
|---|---|
| Landing page | Prototype — `landing-page/index.html` |
| Customer app | Prototype — `customer-app/app.html` |
| Vendor app | Prototype — `vendor-app/app.html` |
| App Store / Google Play | Not yet published |

## Repository

> **Repo link:** _add your GitHub/GitLab URL here once the project is pushed_

```
git clone <add-repo-url-here>
cd bartr
```

## Project structure

```
bartr/
├── landing-page/
│   └── index.html          # Marketing landing page
├── customer-app/
│   └── app.html             # Customer-facing app prototype
├── vendor-app/
│   └── app.html             # Vendor-facing app prototype
├── docs/
│   └── sdlc-phase1-3.md     # Planning, requirements & system design doc
└── README.md
```

## Tech stack

**Prototype (current):**
- HTML, CSS, and vanilla JavaScript — single-file, self-contained apps
- [Leaflet.js](https://leafletjs.com/) + OpenStreetMap for live, interactive maps (no API key required)
- [Font Awesome](https://fontawesome.com/) for category-matched icons (repair, nails, mechanic, etc.)
- Google Fonts (Space Grotesk + Inter)

**Planned for production (see [Roadmap](#roadmap)):**
- React Native (Expo) for the customer and vendor mobile apps
- Firebase or Supabase for realtime data, auth, and geo-queries
- An LLM API for request parsing and price guidance
- Paystack or Flutterwave for escrow-based payments

## Running it locally

No build step, no dependencies to install — these are self-contained HTML files.

1. Clone or download the repository.
2. Open any of the following directly in a browser:
   - `landing-page/index.html`
   - `customer-app/app.html`
   - `vendor-app/app.html`
3. For the closest experience to the real thing, open the app files on a mobile device or use your browser's device-emulation mode (they're designed at a ~390px mobile width).

No environment variables or API keys are needed — the maps use OpenStreetMap's public tile servers.

## Design system

| Token | Value | Use |
|---|---|---|
| Primary Blue | `#0067f5` | Brand color, primary actions, hero sections |
| Blue S2 | `#0a2e65` | Dark surfaces, headings, high-contrast panels |
| Blue T4 | `#e1f6ff` | Pastel backgrounds, icon tiles, chips |
| Green T4 | `#ecfbec` | Success states, price highlights |
| Red T4 | `#fff0f4` | Soft warning/insight accents |
| Avocado T4 | `#f4f4ed` | Neutral page background |
| Backdrop Gray | `#f5f6fa` | Card and input backgrounds |
| Yellow T4 | `#ffffee` | Urgency/highlight accents |

**Typography:** Space Grotesk (display/headings), Inter (body). *Note: the brand's intended typeface, "Rency" with Naira-sign support, could not be sourced — Space Grotesk is a placeholder pending the actual font file.*

## Roadmap

- [ ] Rebuild the customer and vendor apps in React Native for real device deployment
- [ ] Connect an LLM API for live request parsing (currently simulated in the prototype)
- [ ] Wire up real accounts, auth, and a shared backend so the customer and vendor apps talk to each other
- [ ] Escrow payments via Paystack/Flutterwave
- [ ] Trust/verification layer for vendor onboarding
- [ ] Expand beyond the initial pilot category and location

## Research behind the product

Every core decision in Bartr traces back to field interviews conducted with phone sellers, repair technicians, and adjacent market vendors — not assumptions. See `docs/sdlc-phase1-3.md` for the full planning, requirements, and system design documentation, including the feasibility study and matching algorithm.

## Team

- **Akolo Amos Bulus** — Lead Developer
- **MOSES AUGUSTINA CHIOMA** — Product Designer

## License

