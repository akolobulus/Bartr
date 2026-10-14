# Skills Marketplace App — Planning, Requirements & System Design
### Phases 1–3 of the SDLC (Agile Methodology)
### Prepared by: Akolo Amos Bulus | Nigerian University of Technology and Management (NUTM)

---

## PHASE 1: PLANNING & INITIATION

### 1.1 Project Charter

**Project Name:** Skills Marketplace App *(working title — services & artisan matching platform)*

**Background:**
Field research conducted at Computer Village, Ikeja (11 vendor/artisan interviews — phone sellers, repair technicians, and adjacent informal-market workers) surfaced a consistent, unprompted pain point: informal-sector workers (phone technicians, nail techs, electricians, mechanics, tailors, etc.) have no reliable, trusted digital channel to find new customers. Existing options (Jiji, WhatsApp status, flyers, pure referral) are either scam-prone, expensive relative to ROI, or entirely dependent on word-of-mouth. Existing "skills marketplace" apps (LinkedIn, Upwork, Fiverr) are built for white-collar/remote work and CV-based hiring — nothing serves blue-collar, in-person, market-based labor the way ride-hailing apps serve transport.

**Project Goal:**
Build a mobile (React Native) marketplace that applies the ride-hailing request → match → accept → complete → rate loop to informal-sector services, with an AI layer that (a) turns unstructured natural-language/voice requests into structured job postings, (b) suggests fair pricing to counter market undercutting, and (c) ranks matches for both the customer and the vendor — not just proximity.

**Objectives:**
1. Give buyers a fast, trustworthy way to request a service and see ranked, rated vendors nearby.
2. Give vendors (technicians, artisans) a way to receive relevant job requests instead of relying purely on walk-in traffic and referrals.
3. Introduce a portable trust/rating layer that doesn't currently exist for this market segment.
4. Reduce price chaos (e.g., technicians charging ₦1,000 vs. ₦5,000 for the same job) via AI-suggested price ranges.
5. Validate the model with a single-category, single-location pilot before expanding.

**Scope (MVP):**
- 1 city/market zone pilot (Computer Village, Ikeja)
- 2–3 service categories (e.g., phone repair, nail tech)
- Request posting (text/voice) → AI parsing → ranked vendor matching → accept/decline → cash-on-completion → rating
- Out of scope for MVP: in-app escrow, multi-city expansion, full skills-training marketplace, B2B parts-matching layer, auto-generated marketing content

**Stakeholders:**
| Stakeholder | Role |
|---|---|
| Akolo Amos Bulus | Founder / Lead Developer |
| Project team (Leo + others) | Co-researcher, field interviews, product input |
| Pilot vendors (from Computer Village interviews) | Early adopters / feedback source |
| End customers | Service requesters |

**High-Level Timeline (Agile, 2-week sprints):**
| Sprint | Focus |
|---|---|
| Sprint 0 | Planning, requirements finalization, environment setup |
| Sprint 1–2 | Core data model, auth, role switching (customer/vendor) |
| Sprint 3–4 | Request posting + AI natural-language parsing |
| Sprint 5–6 | Vendor feed, matching/ranking algorithm (v1 weighted score) |
| Sprint 7 | Accept/decline flow, job status lifecycle |
| Sprint 8 | Rating system + cash-on-completion flow |
| Sprint 9 | Pilot testing with real vendors, bug fixes |
| Sprint 10 | Pilot launch review, backlog for v2 (escrow, trust badges) |

**Success Criteria for MVP:**
- Pilot vendors receive and accept at least one matched request through the app (not referral).
- Measurable increase in vendor-reported "new customer" conversions vs. their stated baseline.
- Positive qualitative feedback on trust/rating feature from pilot users.

---

### 1.2 Feasibility Study

**Technical Feasibility**
- **Frontend:** React Native (Expo) — supports push notifications, geolocation, and camera access needed for a ride-hailing-style UX without native ejection at MVP stage. Feasible with current team skillset.
- **Backend/Realtime:** Firebase or Supabase — realtime listeners are well-suited to "new request near you" push-style feeds; both have generous free tiers suitable for a pilot.
- **AI components (MVP scope only):**
  - Natural-language request parsing → single LLM API call (e.g., via Claude/OpenAI API) to extract category, description, urgency, and suggested price from free text or transcribed voice. Technically low-risk, no training data required.
  - Price guidance → can start as a rules/lookup table by category, upgraded to LLM-assisted suggestions once historical price data exists. Low technical risk.
  - Ranked matching (both sides) → v1 is a hand-tuned weighted scoring formula (rating, distance, response rate, price-fit) — no ML training needed at MVP stage. Feasible with basic backend logic.
- **Geolocation matching:** `expo-location` + geohash-based proximity queries (Firestore) or PostGIS (if Postgres/Supabase) — standard, well-documented pattern.
- **Risk factors:** Voice-to-text accuracy for Nigerian Pidgin/accented English; connectivity reliability among informal-market users; low smartphone/data literacy among some vendors (several interviewees showed resistance to digital tools).

**Economic Feasibility**
- MVP build cost is low: Expo + Firebase/Supabase free tiers cover early development and pilot scale.
- Primary paid cost at MVP stage: LLM API calls for request parsing (usage-based, low volume during pilot).
- Escrow/payment integration (Paystack/Flutterwave) deferred to post-MVP, avoiding integration cost and compliance overhead until the core loop is validated.
- Revenue model (post-validation): pay-per-completed-job commission or pay-per-qualified-lead — directly responsive to interview feedback that vendors reject flat subscription pricing ("we didn't recover our ad money") but respond well to results-based pricing.

**Operational Feasibility**
- Requires hands-on onboarding of pilot vendors — several interviewees showed low trust in digital platforms and limited comfort posting content; onboarding will likely need in-person support (consistent with how the original interviews were conducted).
- Cash-on-completion for MVP avoids the operational complexity of payment disputes/escrow management during the pilot.
- Team capacity: current team size is small — MVP scope is deliberately narrow (1 location, 2–3 categories) to match available resources.

**Conclusion:** The MVP is technically and economically feasible with the current stack and team size. The main operational risk is vendor trust and digital-literacy onboarding, which the pilot should be designed to actively measure.

---

### 1.3 Resource Plan (Agile)

**Team Roles (Agile)**
| Role | Responsibility |
|---|---|
| Product Owner (Akolo) | Owns backlog, prioritization, stakeholder/vendor liaison |
| Scrum Master | Facilitates sprints, removes blockers |
| Mobile Developer(s) | React Native app (customer + vendor flows) |
| Backend Developer | Data model, matching algorithm, realtime feed |
| AI/Integration Developer | LLM request-parsing integration, price-guidance logic |
| QA/Tester | Test cases, bug tracking during pilot |

**Methodology:** Agile/Scrum, 2-week sprints, with a prioritized product backlog reviewed at each sprint planning session. Daily standups recommended even for a small team to maintain velocity.

**Budget Considerations (MVP-stage, indicative categories — no fixed figures committed at planning stage):**
- Development tooling: Expo, Firebase/Supabase (free tier sufficient at pilot scale)
- LLM API usage (request parsing) — usage-based
- Pilot incentives/onboarding support for vendors (non-monetary or small incentive to encourage first-use)
- Device/data costs for field testing at Computer Village

**Timeline:** See Sprint 0–10 plan under Section 1.1. Total MVP build-to-pilot estimate: ~10 sprints (~20 weeks), adjustable based on team velocity after Sprint 2.

---

## PHASE 2: REQUIREMENTS ANALYSIS

### 2.1 Business Requirement Document (BRD)

**Business Goal:**
Enable informal-sector service vendors (starting with Computer Village artisans/technicians) to acquire new customers through a trusted, AI-assisted digital channel, replacing reliance on unreliable paid ads (Jiji) and pure word-of-mouth referral.

**Business Needs (derived directly from field research):**
1. Vendors need a customer-acquisition channel that doesn't require upfront subscription payment with no guaranteed return.
2. Vendors and customers need a trust/reputation signal that doesn't currently exist in this market.
3. Customers need a way to describe what they need in natural language (not structured forms) and get matched to a relevant, nearby vendor.
4. The market needs price standardization to reduce technician undercutting and protect service quality.
5. The platform must work for users with variable literacy/digital comfort (several vendors interviewed avoid posting content or using apps beyond WhatsApp).

**Business Rules:**
- A request can only be matched to vendors within a defined radius and in the relevant category.
- A vendor may accept, decline, or let a request expire; acceptance locks the request to that vendor.
- Payment for MVP is cash-on-completion only; both parties must confirm completion before a rating is triggered.
- Vendors who repeatedly accept-then-cancel are flagged (behavioral trust signal, logged even if not acted on until v2).

**Out of Scope (Business level):**
- Formal employment/CV-based hiring (explicitly differentiating from LinkedIn/Upwork-style platforms)
- Multi-city operation at MVP stage
- In-app escrow at MVP stage

---

### 2.2 Product Requirement Document (PRD)

*(Structured as Epics and User Stories, per Agile convention, in place of a traditional feature-list PRD)*

**Epic 1: Account & Role Management**
- As a user, I can sign up and choose a role (customer, vendor, or both) so the app shows relevant screens for each mode.
- As a vendor, I can set my service category/categories and availability status.

**Epic 2: Service Request Creation**
- As a customer, I can describe what I need in free text or voice so I don't have to fill out a rigid form.
- As a customer, I can see the AI-extracted category, urgency, and suggested price range before submitting, so I can correct it if wrong.
- As a customer, I can set my own price offer, using the AI suggestion as a reference point.

**Epic 3: Matching & Discovery**
- As a customer, I can see a ranked list of nearby vendors (not just nearest-first) so I get the most likely-to-deliver match.
- As a vendor, I receive a ranked/filtered feed of open requests relevant to my category, skill level, and typical price range, so I don't have to scroll irrelevant jobs.

**Epic 4: Accept / Match Lifecycle**
- As a vendor, I can accept or decline a request.
- As a customer, once a vendor accepts, I can see their profile, rating, and confirm or choose another vendor if multiple accept.
- As either party, I can cancel before the job starts, with the cancellation logged against the responsible party.

**Epic 5: Completion & Trust**
- As either party, I can mark a job as complete once the service is delivered.
- As either party, I can rate and leave a short comment after job completion.
- As a customer, I can see a vendor's rating and completed-job count before choosing them.

**Epic 6: Payments (MVP: cash-on-completion only)**
- As a customer, I confirm payment was made in cash upon job completion.
- *(Deferred to v2)* As a customer, I can pay into escrow, released to the vendor on completion confirmation.

**Prioritization (MoSCoW, for Sprint backlog):**
| Must Have | Should Have | Could Have | Won't Have (MVP) |
|---|---|---|---|
| Account/role setup | AI price guidance | Multi-language voice input | Escrow payments |
| Request posting (text) | Vendor acceptance-pattern learning | In-app chat | Skills-training marketplace |
| AI request parsing | | | B2B parts matching |
| Ranked matching (v1 formula) | | | |
| Accept/decline flow | | | |
| Rating system | | | |
| Cash-on-completion confirmation | | | |

---

### 2.3 Software Requirement Specification (SRS)

**Functional Requirements**

| ID | Requirement |
|---|---|
| FR-1 | System shall allow user registration/login with role selection (customer/vendor/both) |
| FR-2 | System shall accept a free-text or voice service request from a customer |
| FR-3 | System shall call an LLM API to parse the request into structured fields: category, description, urgency, suggested price |
| FR-4 | System shall allow the customer to edit AI-extracted fields before submission |
| FR-5 | System shall geolocate the customer and store request coordinates |
| FR-6 | System shall query vendors within a configurable radius matching the request category |
| FR-7 | System shall rank matched vendors using a weighted score (rating, distance, response rate, price-fit) |
| FR-8 | System shall push the request to ranked vendors in real time (feed + notification) |
| FR-9 | System shall allow a vendor to accept or decline a request |
| FR-10 | System shall lock a request to the first-accepting vendor (or customer-selected vendor, per final flow decision) |
| FR-11 | System shall allow either party to mark a job "complete" |
| FR-12 | System shall prompt both parties for a 1–5 star rating + optional comment after completion |
| FR-13 | System shall update a vendor's rolling rating average and completed-job count after each rating |
| FR-14 | System shall log accept-then-cancel events against a vendor for future trust scoring (v2) |

**Non-Functional Requirements**

| ID | Requirement |
|---|---|
| NFR-1 | Request-to-vendor-feed latency should be near-real-time (target: under 5 seconds) |
| NFR-2 | AI parsing response time should not exceed ~3 seconds to keep request posting fast |
| NFR-3 | App must function on low/mid-range Android devices (majority of target users) |
| NFR-4 | App must degrade gracefully on poor/intermittent connectivity (common in market environments) |
| NFR-5 | User data (location, phone number) must be stored securely; phone numbers not publicly exposed between matched parties beyond what's needed to complete a job |
| NFR-6 | UI must be usable by low digital-literacy users — minimal text entry, voice-first option, large touch targets |
| NFR-7 | System should support Nigerian Pidgin/accented English input reasonably well for voice/text parsing |

**External Interface Requirements**
- LLM API (request parsing, price guidance)
- Push notification service (Expo Notifications / FCM / APNs)
- Geolocation service (`expo-location`)
- (Deferred) Payment gateway API (Paystack/Flutterwave) for v2 escrow

---

## PHASE 3: SYSTEM DESIGN

### 3.1 High-Level Design (HLD)

**Architecture Overview**

```
[React Native App (Expo)]
   |-- Customer Mode UI
   |-- Vendor Mode UI
   |
   v
[API Layer / Backend]
   |-- Auth Service
   |-- Request Service ----> [LLM API] (parsing, price guidance)
   |-- Matching Service ----> [Geo Query Engine] (proximity + category)
   |-- Notification Service --> [Push Notification Provider]
   |-- Rating Service
   |
   v
[Database (Firebase/Supabase/Postgres)]
   |-- Users
   |-- VendorProfiles
   |-- ServiceCategories
   |-- Requests
   |-- Responses
   |-- Ratings
```

**Key Components**
1. **Mobile Client (React Native/Expo):** single app, role-switchable UI for customer and vendor modes.
2. **Request Service:** receives raw text/voice input, sends to LLM API, returns structured request object for user confirmation.
3. **Matching Service:** on request submission, queries vendors by category + radius, applies v1 weighted scoring, returns ranked list; pushes to top-ranked vendors via Notification Service.
4. **Notification Service:** realtime push (new request for vendors; vendor accepted / job status changes for customers).
5. **Rating Service:** triggered on job completion; updates vendor's rolling average and completed-job count.
6. **Database:** realtime-capable store (Firebase/Supabase) for MVP; can migrate to Postgres + PostGIS later if geo-query needs outgrow Firestore geohashing.

**Data Flow (Core Loop)**
1. Customer submits request (text/voice) → Request Service → LLM parses → customer confirms.
2. Matching Service scores and ranks nearby, category-matching vendors.
3. Top-ranked vendors notified in real time.
4. Vendor accepts → request locked → customer notified with vendor profile/rating.
5. Job completed (marked by both/either party per final flow decision) → cash confirmed.
6. Both parties rate → Rating Service updates vendor stats.

---

### 3.2 Low-Level Design (LLD)

**Matching Algorithm (v1 — weighted scoring, no ML)**

```
score(vendor, request) =
    w1 * normalized(vendor.rating_avg)
  + w2 * (1 / distance_km(vendor.location, request.location))
  + w3 * normalized(vendor.response_rate)
  + w4 * price_fit(vendor.avg_price_by_category, request.price_offer)

Where:
  w1, w2, w3, w4 = tunable weights (initial suggestion: 0.35, 0.25, 0.20, 0.20)
  price_fit() penalizes large mismatch between vendor's typical price and request's offer
```
- Weights are manually tuned at MVP stage; logged per-match outcome (accepted/declined/completed) to inform v2 model training once sufficient data exists.

**Database Schema (MVP)**

```
Users
  id (PK), name, phone, role [customer|vendor|both],
  location (lat, lng), rating_avg, created_at

VendorProfiles
  user_id (FK -> Users), categories[] (FK -> ServiceCategories),
  is_available (bool), avg_price_by_category (map),
  response_rate (float), completed_jobs_count (int)

ServiceCategories
  id (PK), name (e.g., "Phone Repair", "Nail Tech")

Requests
  id (PK), customer_id (FK -> Users), category_id (FK -> ServiceCategories),
  raw_input_text, parsed_description, urgency [low|normal|urgent],
  price_offer, location (lat, lng),
  status [open|accepted|completed|cancelled], created_at

Responses
  id (PK), request_id (FK -> Requests), vendor_id (FK -> Users),
  status [accepted|declined], responded_at

Ratings
  id (PK), request_id (FK -> Requests), rated_by (FK -> Users),
  rated_user (FK -> Users), stars [1-5], comment, created_at
```

**AI Request-Parsing Flow (Pseudocode)**

```
function parseRequest(rawInput, inputType):
    prompt = buildPrompt(rawInput, categoryList, pidginAwareInstructions)
    response = callLLM(prompt)
    structured = {
        category: response.category,
        description: response.cleaned_description,
        urgency: response.urgency,
        suggested_price: response.suggested_price
    }
    return structured   // shown to customer for confirmation before submit
```

**Job Status Lifecycle (State Machine)**

```
[Open] --vendor accepts--> [Accepted] --both confirm--> [Completed] --both rate--> [Closed]
   |                              |
   --customer/vendor cancels--> [Cancelled]
```

---

### 3.3 UI/UX Overview (High-Level — detailed wireframes to follow in next phase)

**Core Screens (to be wireframed next):**
1. Role selection / onboarding
2. Customer: Post a request (voice/text input, AI-confirmed summary, price field)
3. Customer: Ranked vendor results screen
4. Customer: Active job status screen
5. Vendor: Incoming request feed (ranked)
6. Vendor: Request detail + accept/decline
7. Vendor: Active job screen
8. Shared: Job completion + rating screen
9. Shared: Profile screen (rating, completed jobs, categories)

**Design Principles (informed directly by interview findings):**
- Voice-first input option front and center — several vendors showed reluctance/low skill with typed content.
- Minimal required fields — reduce friction for low digital-literacy users.
- Rating/trust indicators prominent on every vendor-facing screen (directly answers the "no star, no truth" trust concern raised in research).
- Large, simple touch targets and clear status indicators (open/accepted/completed) — familiar visual language from ride-hailing apps customers may already know (Uber/Bolt), reducing the learning curve.

*(Detailed wireframes/mockups to be produced in the next working session, per your instruction to continue UI/UX separately.)*

---

## Next Steps
- Produce detailed UI/UX wireframes (Figma or in-app prototype) for the 9 core screens above.
- Move into Phase 4 (Development) once wireframes are approved: source code structure, API specs, repo setup.
- Finalize LLM prompt design for request parsing (category list, urgency detection, Pidgin-aware instructions).
