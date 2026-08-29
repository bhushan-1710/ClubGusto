# Club Gusto — Creative Direction & Digital Experience System
### Gomti Nagar Extension, Lucknow · Banquet, Wedding & Events Venue

---

## A note on the source material before anything else

What I received for Club Gusto is an **outreach/lead dossier** — contact details, a star rating, capacity numbers, and an outreach angle. It is not the full Client Intelligence Analyst report this framework is written around (no brand-personality analysis, no photography audit, no confirmed brand colors, no customer psychology, no confirmed reviews text, no tone-of-voice sample). I've treated that as a gap to close, not a reason to guess:

**What I did to close the gap before designing anything:**
- Fetched the live site (`clubgusto.in`) directly — Home, About, Contact — since there was no rendered visual audit to work from.
- Searched for independent reviews, competitor venues in Gomti Nagar/Lucknow, and the property's OTA listings.
- Studied one hospitality reference site in depth (the inspo link you sent) rather than treating it as a moodboard image.

**What's now verified (from the live site, not the dossier):**
- Official email: **salesclubgusto@gmail.com** — this resolves the dossier's "no public email found" gap. Site-listed phone is **+91 88080 88046**, which is *different* from the dossier's directory number (+91 8047249462) — flagging this discrepancy rather than picking one silently.
- The site is built on WordPress/Elementor (v4.1.4), last touched August 2025.
- There **is** an existing logo asset (referenced in the site's meta tags as a transparent PNG) — so this is not a from-scratch brand, it's a redesign around an existing mark. Per Phase 18, that logo gets preserved, not reimagined, once we have the real file.
- The venue explicitly hosts "wedding, Nikkah ceremony, engagement, birthday party, or corporate event" — this is a multi-community, multi-occasion business by its own description, not a generic "wedding venue."
- The current site has three specific, fixable failures I can point to concretely rather than vaguely: **(1)** the "What Sets Us Apart" stat counters on the About page are broken/unpopulated — they render as "Events Hosted 0+", "Happy Couples 0+", "Guests Served 0+", "Customer Satisfaction 0%" — worse than having no stats at all; **(2)** the same two stock/decorative images (a flower bunch, a generic hall photo) are reused verbatim across the Home and About pages; **(3)** the "How We Work" 3-step process uses the *identical* placeholder image for all three steps. This is strong, concrete evidence for the "dated visual presentation" outreach angle — it's not an aesthetic opinion, it's a build that was never finished.
- No testimonials, no gallery, no hall-by-hall breakdown, and no WhatsApp click-to-chat are present anywhere on the current site, despite WhatsApp being one of your two strongest verified contact channels.
- One ownership nuance worth flagging to the client directly rather than assuming: the property's 9 lodging rooms appear cross-listed on OTA platforms (Trip.com, Hotels.com-style sites) under a **different brand name — "Palette Gomti Nagar... formerly Gusto Club"** — with poor guest ratings (4.5–5.2/10) unrelated to the banquet business. Worth clarifying with the client whether room bookings are self-managed or white-labeled to a third party before the new site sends lodging enquiries anywhere.
- I did not find a single locally competing banquet hall (Legend Inn, Precious Moments, The Imperial Banquet, Shree Nath Jee, etc.) with a website more sophisticated than a generic directory-style build. **This is a genuine market gap, not just a Club Gusto problem** — nobody in this category, in this city, has done this well yet. That's worth using in the outreach pitch itself.

**What's still missing and must come from the client before build (never invented):** real photography of both halls, the stage/mandap and Nikkah setups, the rooms, the food, and the exterior/courtyard; real testimonials with permission to publish; real numbers if the stats section is to be kept; confirmed brand colors (none are established beyond WordPress/Elementor defaults, which I have no reason to treat as intentional); the high-resolution logo file; hall names, if any exist beyond "the 700-capacity hall" and "the 300-capacity hall"; and pricing/package structure, which the current site also doesn't specify.

Everything below is built on what's verified, clearly separates what's inferred, and flags what's outstanding. Nothing here invents a statistic, a quote, or a color story the client hasn't confirmed.

---

## PHASE 0 — Understand Before Designing

- **Brand Essence:** A full-service, one-address celebration venue. The differentiator isn't "we have a nice hall" — every competitor claims that. It's that Club Gusto removes the *logistics burden* of an Indian multi-day, multi-ritual celebration: two halls at different scales, in-house multi-cuisine catering, decor/floral/entertainment coordination, nine guest rooms, and parking for 40 cars, all on one plot. Their own copy says it plainly: *"you don't have to worry about coordinating multiple vendors."*
- **Emotional Identity:** Relief (someone competent is handling this), warmth (Lucknow hospitality, not corporate hospitality), confidence at scale (this venue can genuinely absorb a 700-guest baraat without feeling like a warehouse), and respect (a Hindu wedding and a Nikkah are given equal, specific attention — not "all events welcome" as an afterthought).
- **Physical Experience (inferred from the venue's own description and category norms — not yet confirmed by photography):** arriving through a gated courtyard with visible parking capacity, spacious "royal" interiors, a grand hall built for scale, a second, more intimate hall for smaller functions, guest rooms for out-of-town family, and stage setups built for both a baraat entrance and a Nikkah stage. This needs to be validated against real photography before final art direction is locked.
- **Customer & Desire:** Usually not the bride or groom doing the searching — typically a parent, elder relative, or a wedding planner in Lucknow/Gomti Nagar comparing venues for a joint-family, multi-ritual event (mehndi, sangeet, baraat/reception, or Nikkah/valima), often with out-of-station guests who need somewhere to sleep. The desire is *"one place, everyone stays, nothing falls through the cracks between five different vendors."*
- **Differentiation:** Against Legend Inn (~150 cap, no stated lodging), Precious Moments (~1,000 cap, no lodging mentioned), The Imperial Banquet (~350 cap) — Club Gusto is the only one in this local set that pairs **two halls of different scale** with **on-site lodging** and **in-house full-service catering/planning**. That combination is the story, not "luxury banquet hall #47."
- **Story:** From their own words — a team that listens first, plans everything (theme, decor, food, layout), then executes on the day so the host experiences their own event as a guest, not a project manager.
- **Design North Star (one sentence):** *A digital front door to Lucknow's most complete celebration address — refined, warm, and unmistakably local, where the site itself behaves like a good host: welcoming, organized, and never demanding anything of the visitor it hasn't already anticipated.*

---

## PHASE 1 — Creative Interpretation

| Trait | What it actually changes in the design |
|---|---|
| **Warm, not corporate** | Base palette is ivory/warm-white, not cool white or blue-tinted "SaaS gray." Display type is a humanist serif, not a geometric sans. Photography (once supplied) is warmly graded, never cold flash-lit banquet-hall photography. |
| **Refined, not lavish** | This is the single most important guardrail. Indian wedding-venue sites default to gold foil, maroon, glitter borders, and stock rose-petal textures. We deliberately avoid that palette. Refinement is expressed through fine linework, generous whitespace, and restraint — brass appears as a 1px accent line, not a gradient background. |
| **Organized & reliable** — the core sales pitch is "we remove your logistics burden" | The IA itself has to demonstrate organization: a clear hall-comparison spec (capacity, seating, use-case), a visible planning process, one obvious enquiry path per page. If the *site* feels chaotic, it undermines the one thing the business is actually selling. |
| **Inclusive across communities** | Weddings, Nikkah & Muslim ceremonies, birthdays/socials, and corporate events are structured as parallel, equally-weighted paths in navigation and homepage storytelling — not "Weddings" with a footnote mentioning Nikkah. |
| **Generously scaled, without feeling cold** | Hero and hall-detail sections for the 700-capacity hall use wide, cinematic crops with breathing room. The 300-capacity hall gets tighter, warmer crops so it doesn't read as "the smaller, lesser option" — it's positioned as the intimate choice, not the consolation one. |

---

## PHASE 2 — Physical → Digital Translation

| Physical (verified or reasonably inferred) | Digital translation |
|---|---|
| Two halls of different scale (≈450 seated/700 max; ≈180 seated/300 max) | Two distinct visual registers on the site: wide panoramic composition for the grand hall, tighter and softer crops for the intimate hall — never the same template with a smaller number swapped in |
| Nine on-site guest rooms | A dedicated "Stay With Your Guests" section — most competitors don't have this at all, so it should never be a footnote in a footer link |
| Parking for ~40 vehicles | Not an icon in a feature grid — this becomes reassurance copy inside the planning/logistics narrative, addressing a real, unglamorous anxiety every large-wedding host has |
| Lucknow's Nawabi heritage — jaali (lattice) architecture, chikankari's fine white-on-white embroidery, a culture of unhurried, generous hospitality ("tehzeeb") | A quiet structural motif: hairline lattice-pattern dividers (SVG line art, not photographic gold arches or stock "Indian pattern" borders) used sparingly between sections; typography with fine letter-spacing that echoes embroidery-like precision rather than bold declarative "SALE" energy |
| Multi-cuisine in-house catering | Once real food photography exists, treated editorially (natural light, close crop, ingredient-forward) — never generic buffet-table stock photography |
| Full-service planning (decor, floral, entertainment, catering, coordination) | The "How We Work" process, currently a broken 3×-repeated placeholder image, becomes a real annotated timeline with distinct photography (or, until photography exists, distinct illustrated line-art per step rather than one recycled image) |
| Multi-community event roster | Homepage section ordering and imagery style-guide require representing more than one ceremony tradition once photography is available — this is a Do/Don't rule, not a suggestion |

---

## PHASE 3 — The Creative Concept

> **"One Address, Every Guest Hosted."**
> The website treats Club Gusto the way the venue treats its guests — as a complete address rather than a rented hall for an evening. One arrival, two halls scaled to whatever the celebration needs, nine rooms so family never has to leave, and a fine Lucknow lattice motif running quietly through every section as a nod to the city's tradition of unhurried, generous hosting. The site never has to shout "luxury" in gold and maroon — the completeness of the offer *is* the luxury, and the design's job is to make that legible at a glance.

This concept is what should be checked against every decision from here on: does this choice make the "complete address, not just a hall" story clearer, or is it decoration?

---

## PHASE 4 — Visual Reference Research

**Reference hierarchy used:**

| Tier | Reference | What was studied | What must NOT be copied | Client-specific adaptation |
|---|---|---|---|---|
| 1 — Client-specific (verified by fetching the live site) | **Dunowen House** (your inspo link) — an Irish estate combining exclusive-hire event hosting *and* on-site lodging | How a "stay + celebrate" property structures navigation as parallel top-level items ("Stay" / "Weddings" / "Explore") rather than burying lodging in a footer; use of real, named, geographically-tagged testimonials for trust; a photography-led homepage that teases a fuller gallery rather than dumping every image on the homepage | The rural/coastal Irish visual language itself — thatch textures, sea views, wood-burning stoves, cottage-core styling — none of that belongs on an urban Lucknow banquet site | Rebuild the same *structural* idea (parallel Stay/Celebrate navigation, named testimonials, gallery teaser) entirely in Lucknow's own material and lighting language |
| 2 — Exceptional digital experiences (general, not a specific site I fetched) | Hospitality/hotel web design best practice (photography-led homepages, transparent booking flow, mobile-first luxury sites) | The principle that luxury hospitality sites earn trust through restraint and real photography, not through feature-dense layouts | Any specific luxury-hotel visual identity — none of these are Awadh-specific and shouldn't be treated as a skin to reuse | Apply the *restraint* principle, not any specific brand's palette or type |
| 3 — Component references (for Bhushan to browse before build, not yet reviewed by me) | Mobbin / 21st.dev / Aceternity for enquiry-form patterns, image-lightbox galleries, sticky mobile CTA bars | Interaction and code patterns only | Never let these dictate the visual identity — they're UI plumbing, not brand | Pull layout/interaction logic only; every visual property (color, type, spacing, imagery) stays governed by Phases 6–9 below |

**Honest gap worth using in outreach:** every local competitor site I found (Legend Inn, Precious Moments, The Imperial Banquet, and the directory listings for others in Gomti Nagar) is template-grade. There is currently no premium, editorial-quality banquet-hall website in Lucknow's market to benchmark against locally — which means Club Gusto doesn't need to out-design a sophisticated local competitor, it needs to be the first one.

---

## PHASE 5 — Anti-AI-Slop Audit (applied to the current site, concretely)

| Pattern found on the current site | Verdict |
|---|---|
| Broken "0+" stat counters | Remove entirely until real numbers exist. A visible "0%" is worse than no stats section — it reads as neglect, not humility. |
| Same two stock photos reused across Home/About | Replace with real photography once supplied; until then, use restrained typographic/line-art sections rather than recycling imagery, which is the exact "swap the client's content and it looks the same" failure this framework warns against. |
| Generic copy ("crafted to make every moment unforgettable") | Rewrite around specific, verifiable facts (two halls, nine rooms, 40-car parking, in-house catering) rather than adjectives every banquet hall in India also uses. |
| 3-step process with one recycled image | Rebuild as a real, distinct 3-step visual sequence — see Phase 11. |

**Originality test applied to the proposed direction:** if you swapped Club Gusto's name and photography for Legend Inn's or The Imperial Banquet's, would this design still work? No — the two-hall comparison structure, the "Stay With Your Guests" section, and the Nikkah-inclusive IA are all specific to what Club Gusto actually has and offers. That's the bar this direction is designed to clear.

---

## PHASE 6 — Design Direction

| Spectrum | Position |
|---|---|
| Minimal ↔ Expressive | Leans minimal — restraint is the differentiator against gold/maroon wedding-site convention |
| Editorial ↔ Commercial | Editorial-led, commercial-supported (clear CTAs exist, but the site reads like a considered publication, not a listings page) |
| Calm ↔ Energetic | Calm, confident pacing — no bouncing counters, no autoplay carousels racing through images |
| Organic ↔ Geometric | A deliberate blend: geometric hairline lattice motifs (Phase 2) paired with warm, organic photography once supplied |
| Light ↔ Dark | Light, ivory-led — dark mode has no place in a warm-hospitality context here |
| Dense ↔ Spacious | Spacious. Given the "complete address" concept, cramped layouts undercut the message of scale and calm |
| Traditional ↔ Contemporary | Contemporary structure carrying traditional (Awadh) material references — not a pastiche of "traditional Indian wedding site" |
| Elegant ↔ Playful | Elegant, with warmth — never stiff-corporate, never playful/gimmicky |

**Design language:** fine hairline rules and lattice-inspired dividers; generous section padding; photography-first once assets exist; buttons as understated bordered rectangles or underlined text-links rather than heavy pill-shaped CTAs everywhere; icons used sparingly and only as thin-line marks, never bold filled glyphs.

---

## PHASE 7 — Typography

- **Display (headlines, hall names, section titles):** A refined serif with some editorial presence — something in the family of *Fraunces*, *Canela*, or *Freight Display* — chosen for warmth and a slightly Nawabi-elegant character without tipping into calligraphic wedding-invite cliché. Used at large sizes with tight, confident line-height.
- **Body/UI:** A clean, humanist sans — *General Sans*, *Inter*, or *Public Sans* — for legibility across long-form planning content and forms. Slightly increased letter-spacing on labels and small caps (e.g., hall specs, form labels) as a nod to chikankari's fine, deliberate handwork.
- **Scale:** Large, confident display sizes on desktop (clamp ~40–72px for hero) collapsing to a still-generous 32–40px on mobile — never shrunk to the point the "generously scaled" brand trait disappears on phones, which is where most of this audience will actually browse.
- **Never defaulted to:** the same Playfair Display + Poppins combination that shows up on nearly every WordPress wedding template — that pairing is explicitly part of what this redesign needs to move away from.

---

## PHASE 8 — Color System

No brand colors are currently established — the live site runs on unstyled Elementor/WordPress defaults, which is not a deliberate brand choice worth preserving. This is proposed as a genuinely new palette, to be validated against the client's actual logo colors once the high-resolution file is supplied (per Phase 18, the logo itself is never altered to match a new palette — the palette adapts to the logo, not the reverse).

| Token | Direction | Rationale |
|---|---|---|
| Background / Paper | Warm ivory, not stark white | Warmth over corporate cleanliness |
| Ink (primary text) | Deep warm charcoal, not pure black | Softer, more editorial contrast |
| Primary accent | Deep botanical green *or* dusty terracotta (pick one, pending logo colors) | Distances the brand from the gold/maroon wedding-site default while staying warm and grounded |
| Brass/gold | Used only as a 1px hairline or fine icon stroke, never a fill or gradient | Signals refinement without lapsing into "luxury template gold" |
| Muted / secondary text | Warm gray-brown | Keeps secondary content legible without competing with headlines |
| CTA | Ink or deep accent on ivory, or ivory-on-ink inverted — no gradient buttons | Confidence without aggression; premium doesn't need to shout |

---

## PHASE 9 — Grid & Spacing

- **Desktop:** 12-column grid, ~1280–1440px max content width, generous 80–120px section padding to support the "spacious, not cramped" trait.
- **Tablet:** Collapses to an 8-column grid; hall-comparison tables reflow from side-by-side to stacked cards.
- **Mobile:** 4-column grid, single-column stacking throughout, but with intentional compositional breaks — e.g., a full-bleed hero image breaking grid margins entirely for impact, then returning to padded content below.
- **Spacing scale:** an 8px base unit throughout, with larger jumps (48/80/120px) reserved for section boundaries so pacing feels deliberate rather than uniform.

---

## PHASE 10 — Information Architecture

The current site's IA (Home / About / Contact) doesn't reflect how someone actually shops for a venue. Proposed structure, organized around the actual decision journey rather than a reflexive Home→About→Contact:

- **Home** — the "complete address" story told in miniature; routes immediately into occasion type
- **Weddings & Nikkah** — the two ceremony traditions given equal, specific treatment; hall recommendation logic embedded here
- **The Halls** — direct comparison: grand hall (up to 700) vs. intimate hall (up to 300), specs presented plainly (capacity, seating, typical use)
- **Stay With Your Guests** — the 9 rooms, positioned as a genuine differentiator, not a footnote
- **Catering & Planning** — in-house multi-cuisine catering and the full-service planning process (the real "How We Work," rebuilt)
- **Celebrations & Corporate** — birthdays, socials, and corporate events, kept distinct from the wedding/Nikkah narrative rather than crammed under it
- **Gallery** — once real photography exists
- **Enquire** — a single, clear enquiry path (form + WhatsApp + phone), reachable from a persistent header CTA and a mobile sticky bar

---

## PHASE 11 — Homepage Experience

The homepage is a narrative arc, not a stacked set of sections. Proposed flow:

**1. Hero — "One Address" statement**
- *Purpose:* answer who they are, what they offer, and why this is different, in the first three seconds.
- *Content:* a short, confident line built around the concept (e.g., a headline naming both halls and the lodging in one breath) rather than "Luxury Banqute" (note: the current site's own hero copy has a typo — "Banqute" — that needs fixing regardless of redesign).
- *Visual composition:* full-bleed photography of the grand hall (once supplied) with generous negative space for type — not a stock flower-bunch image.
- *Interaction:* a subtle, slow crossfade if multiple hero images exist; no aggressive Ken Burns zoom.
- *CTA:* one primary ("Enquire") + one secondary ("See the Halls").
- *Transition:* scroll reveals the two-hall comparison, answering "how big is this, really?" immediately after the emotional hook.

**2. The Two Halls**
- *Purpose:* make scale and choice legible fast — this is a practical decision moment, not just inspiration.
- *Content:* side-by-side (stacked on mobile) cards for the 700-cap and 300-cap halls, each with real specs.
- *Visual composition:* wide crop for the grand hall, tighter/warmer crop for the intimate hall (Phase 2).
- *Interaction:* gentle hover-reveal of additional specs on desktop; tap-to-expand on mobile.
- *Transition:* leads into "Stay With Your Guests," extending the "it's not just a hall" story.

**3. Stay With Your Guests**
- *Purpose:* surface the on-site lodging differentiator most competitors lack.
- *Content:* the 9 rooms, framed around out-of-station family, not generic "accommodation."
- *Transition:* moves into the planning/catering story — from "where everyone sleeps" to "how the event actually gets planned."

**4. How We Work (rebuilt)**
- *Purpose:* replace the current broken 3×-repeated-image section with something that actually demonstrates organization — the core brand promise.
- *Content:* three distinct steps (listening → planning → execution) with distinct imagery or, until photography exists, distinct fine-line illustrations rather than one recycled photo.
- *Interaction:* scroll-triggered reveal, one step at a time, no bounce.

**5. Every Occasion, Equally**
- *Purpose:* make the multi-community, multi-occasion breadth visible without a footnote treatment.
- *Content:* Weddings, Nikkah, Birthdays & Socials, Corporate — four parallel entries, not a hierarchy.

**6. Enquire**
- *Purpose:* one obvious, low-friction next step.
- *Content:* short form (name, phone, event date, event type) + direct WhatsApp and call links — not a 6-field form that feels like a job application.

---

## PHASE 12 — UI System

- **Navigation:** minimal top bar (logo, 4–5 primary links, one enquiry CTA), collapsing to a full-screen mobile menu with large touch targets.
- **Buttons:** bordered rectangles or underlined text links as primary style; filled buttons reserved for the single enquiry CTA to keep it visually dominant.
- **Cards (hall comparison, occasion types):** flat, bordered with hairline rules — not heavy drop-shadowed floating cards.
- **Forms:** generously spaced fields, clear labels above inputs (not floating placeholder-only labels, which hurt accessibility), inline validation.
- **Gallery/lightbox:** simple, fast, swipeable on mobile — once real photography exists.
- **Footer:** address, both phone numbers (once clarified with the client), email, Instagram, hours, and a map embed — functional and complete, not decorative.

---

## PHASE 13 — Interaction & Motion

Motion should support the "calm, organized host" trait — nothing here should feel like a startup landing page.

| Interaction | Trigger | Animation | Duration | Easing | Purpose |
|---|---|---|---|---|---|
| Hero image crossfade | Auto / on load | Opacity crossfade | 1200ms | ease-in-out | Cinematic calm, not urgency |
| Section reveal | Scroll into view | Fade + 12px upward shift | 500ms | ease-out | Content arrives deliberately, once, never re-triggers on scroll-back |
| Hall card hover (desktop) | Mouse hover | Subtle spec reveal, no scale/zoom | 250ms | ease-out | Informational, not decorative |
| Sticky mobile enquiry bar | Scroll past hero | Slide up from bottom | 300ms | ease-out | Persistent, low-friction CTA without blocking content |
| Lattice divider draw-in | Scroll into view, once | SVG line stroke animation | 800ms | linear | Reinforces the craft motif without being a gimmick |

`prefers-reduced-motion` disables all scroll-triggered and auto-playing motion, falling back to static, fully-visible content.

---

## PHASE 14 — Technology

- **Framework:** React/Next.js — static generation is sufficient here; no real-time data needs.
- **Styling:** Tailwind, using the design tokens above rather than default Tailwind palette/spacing.
- **Motion:** CSS transitions and IntersectionObserver-driven reveals are enough for everything in Phase 13 — no GSAP/ScrollTrigger needed, since nothing here requires timeline-based choreography or pinning.
- **Forms:** a simple hosted form handler or serverless function — no need for a heavy backend.
- **Icons:** Lucide, restricted to thin-line weight only.
- **No Three.js, no 3D** — nothing in this brief warrants it, and adding it would violate the "technology serves the concept" rule.

---

## PHASE 15 — Responsive Design

- **Desktop/laptop:** full two-hall side-by-side comparison, wide hero, multi-column occasion grid.
- **Tablet:** hall comparison becomes stacked cards; navigation collapses to a simplified bar.
- **Mobile (the majority of real traffic for this audience):** single-column throughout; hero copy shortens to fit without shrinking the display type below a confident size; sticky bottom enquiry bar (call + WhatsApp + form) replaces the desktop header CTA, since phone/WhatsApp are the verified strongest contact channels; image crops shift from wide panoramic to portrait/square where needed rather than just scaling down a wide crop and losing the subject.

---

## PHASE 16 — Content Rules

- Use only verified facts: two halls (≈450/700 and ≈180/300), 40-vehicle parking, 9 rooms, hours 11 AM–10 PM, in-house multi-cuisine catering, full-service planning.
- Fix the existing typo ("Banqute" → "Banquet") regardless of anything else.
- No invented statistics — the "Events Hosted / Happy Couples / Guests Served / Satisfaction" section either gets real numbers from the client or is removed, never left at "0+" or replaced with a plausible-sounding guess.
- No invented testimonials — until the client supplies real, permissioned quotes, that section stays absent rather than templated.
- No invented awards, certifications, or "years of experience" claims — none were found in any source and none should be assumed.

---

## PHASE 17 — Image Strategy

Photography is the single biggest open gap. Priority shot list to request from the client:
- Both halls empty (to show scale and decor flexibility) and both halls dressed for an actual event
- Stage/mandap setup and a Nikkah stage setup, separately — supporting the inclusive-occasion IA
- The 9 guest rooms
- The courtyard/parking/exterior arrival sequence
- In-house catering/food, shot editorially rather than as a buffet-line snapshot
- Any existing event photography the client can license/has rights to use, with couples' consent

Until this exists, the design leans on typography, the lattice motif, and restrained color rather than substituting stock "banquet hall" or "Indian wedding" photography — stock imagery here would immediately trip the "could this be any banquet hall" originality test.

---

## PHASE 18 — Brand Asset Protection

- The existing logo (referenced in the current site's metadata as a transparent PNG) is preserved as-is once the high-resolution source file is obtained — not redesigned, not recolored to fit the new palette without the client's sign-off.
- If the client has any existing signage, printed material, or an Instagram visual style worth preserving, that should be reviewed before the palette in Phase 8 is finalized.

---

## PHASE 19 — UX & Conversion

- **Primary CTA:** Enquire (form + WhatsApp + call) — surfaced persistently in header (desktop) and sticky bar (mobile).
- **Secondary CTAs:** "See the Halls," "View Gallery" (once populated).
- Given the verified strongest channels are phone/WhatsApp and Instagram rather than a fully staffed inbox, the enquiry flow should make WhatsApp genuinely first-class — a tap-to-chat link with a pre-filled message, not just a listed number.
- Nothing here should feel aggressively commercial — no countdown timers, no fake "3 people are viewing this venue" urgency patterns, which would contradict the calm-host brand trait entirely.

---

## PHASE 20 — Accessibility

- Contrast ratios checked against WCAG AA once final colors are locked (ivory/charcoal combination should comfortably clear this).
- Semantic HTML throughout (proper heading hierarchy, landmark regions, labeled form fields — no placeholder-only labels).
- Full keyboard navigation and visible focus states.
- Alt text on all images, written descriptively once real photography exists (not filenames like the current site's "photo-9.png").
- Touch targets sized for mobile-first use, given this audience skews toward phone browsing.
- `prefers-reduced-motion` respected throughout, per Phase 13.

---

## PHASE 21 — Performance

- Static generation (Next.js) with image optimization/lazy-loading for the gallery once populated.
- Self-hosted variable fonts with `font-display: swap` — the current site's Google Fonts dependency is fine to keep but should be scoped to only the weights actually used.
- No unnecessary third-party scripts; the current Elementor build carries WordPress/plugin overhead this rebuild avoids entirely.

---

## PHASE 22 — SEO

- Fix the metadata typo and vague meta descriptions currently on the live site.
- Local SEO is high-value here: proper structured data (LocalBusiness/EventVenue schema), consistent NAP (name/address/phone) across the site and directory listings — worth reconciling the two different phone numbers found in this research before launch.
- Clear heading hierarchy per page, descriptive alt text, and internal links between the Halls, Stay, and Catering pages.
- Open Graph tags using real venue photography once available, rather than the current generic stock image.

---

## PHASE 23 — Design Do / Don't (client-specific)

**Do:**
- Give Nikkah ceremonies the same visual and structural weight as Hindu weddings throughout.
- Lead with the two-hall + on-site-lodging combination as the core differentiator, every time it's relevant.
- Use real numbers or no numbers — never a placeholder stat.
- Keep the lattice/hairline motif restrained — a structural detail, not wallpaper.

**Don't:**
- Don't default to gold-foil/maroon/glitter "Indian wedding site" visual clichés.
- Don't reuse a single image across multiple sections or pages, as the current site does.
- Don't invent testimonials, awards, or guest counts.
- Don't treat the 300-capacity hall as a lesser, discount version of the 700-capacity one in tone or imagery.

---

## PHASE 24 — Emotional Journey

**First 3 seconds → First scroll → Hall discovery → Lodging discovery → Process discovery → Occasion confirmation → Enquiry**

Curiosity ("this looks different from every other banquet site I've seen") → Confidence ("this place can actually handle my guest list") → Relief ("they even handle where everyone sleeps") → Trust ("their process is clearly organized, not improvised") → Recognition ("they've thought about my specific ceremony, not just 'weddings' generically") → Action ("I'll message them on WhatsApp right now").

---

## PHASE 25 — Creative Opportunities (specific to this client)

1. A **hall-comparison tool** that lets a visitor input rough guest count and instantly see which hall (or both, for multi-function events) fits — turns the two-hall differentiator into an interactive decision aid rather than a static spec sheet.
2. A **"Stay With Your Guests" microsite section** treated as its own mini-narrative, since almost no local competitor offers on-site lodging at all.
3. A **lattice-pattern section divider system**, generated once as a small set of SVG line-art motifs inspired by Lucknow jaali work — reused sparingly as the site's one recurring signature detail.
4. A **dual-occasion homepage toggle** (Wedding/Nikkah view vs. Birthday/Corporate view) that reorders homepage emphasis based on what the visitor is actually planning — a small but genuinely useful piece of personalization given how different those two audiences' priorities are.
5. **WhatsApp-first enquiry flow** with pre-filled context ("Enquiring about the 700-guest hall for a wedding on [date]") — reflecting that WhatsApp, not email, is this business's real front door.
6. Once real photography exists, a **"day in the life of an event" scroll sequence** — courtyard arrival → hall → stage → rooms at night — that dramatizes the "one address, everyone stays" concept literally.

---

## PHASE 26 — Implementation Blueprint (for when we're ready to build)

- Creative Concept: "One Address, Every Guest Hosted" (Phase 3)
- Design System: ivory/charcoal/botanical-or-terracotta/brass-hairline palette (Phase 8), serif-display + humanist-sans type (Phase 7), 8px spacing scale (Phase 9)
- Sitemap: Home / Weddings & Nikkah / The Halls / Stay With Your Guests / Catering & Planning / Celebrations & Corporate / Gallery / Enquire (Phase 10)
- Homepage structure: 6-section narrative (Phase 11)
- Component architecture: Next.js + Tailwind, no unnecessary animation libraries (Phase 14)
- Motion strategy: restrained, scroll-triggered, once-only reveals (Phase 13)
- Responsive strategy: mobile-first given verified audience behavior (Phase 15)
- **Asset requirements (blocking, from client):** high-res logo file; real photography per the Phase 17 shot list; real testimonials with permission; confirmed brand colors or sign-off on the proposed palette; real stats or explicit decision to drop that section; hall names if they exist; pricing/package structure if it's to be shown publicly; clarification on the lodging/OTA cross-listing question raised above.
- **Content requirements:** corrected copy (fixing "Banqute" and generic AI-style phrasing), hall specs confirmed, process description confirmed with the client's actual planning steps.
- SEO requirements: Phase 22.
- Performance requirements: Phase 21.
- Anti-slop checklist: Phase 5 + Phase 23.

**On coding a prototype:** in keeping with how we've approached your other clients, I'd hold off on writing an actual coded homepage until this direction has your sign-off and — critically — until real photography and the logo file are in hand. Building against stock imagery here would recreate exactly the "swap the content and it's generic" problem this whole framework exists to avoid.

---

## PHASE 27 — Implementation Notes (for the eventual build)

- Clean component boundaries: `Hero`, `HallComparison`, `StaySection`, `ProcessSteps`, `OccasionGrid`, `EnquiryForm`, `Footer` — each reusable but visually specific to this brand (shared logic, not shared look).
- Content (hall specs, occasion descriptions, contact details) structured as editable data (JSON/CMS fields), not hardcoded into components, so the client can update capacity numbers, hours, or contact details without a developer.
- TypeScript for the data shapes (hall specs, occasion types) to keep the eventual hall-comparison tool (Phase 25) reliable.

---

## PHASE 28 — Quality Control

| Criterion | Assessment |
|---|---|
| Brand Fit | Strong — every major decision traces back to a verified fact (two halls, nine rooms, multi-community occasions) rather than generic "luxury wedding" convention |
| Originality | Strong on paper — the two-hall comparison, lodging emphasis, and lattice motif are specific to this client; final verdict depends on execution once real photography arrives |
| Typography | Intentional — chosen against the default Playfair+Poppins wedding-template pairing |
| Composition | To be validated once real photography exists — the plan is sound, the proof is in the actual crops |
| Visual Hierarchy | Clear — one enquiry CTA per screen, hall specs presented plainly |
| Interaction | Restrained and purposeful, nothing decorative-only |
| UX | Enquiry path is short and WhatsApp-first, matching verified real contact behavior |
| Responsiveness | Mobile-first by design, given the likely audience |
| Accessibility | Planned in from Phase 20, not bolted on |
| Performance | Static generation with no legacy WordPress/plugin overhead |
| Conversion | Enquire is unambiguous and repeated at the right moments, without aggressive commercial tactics |

---

## Final Anti-Slop Audit

1. Could this have come from *"create a premium modern website for a banquet hall"*? No — the two-hall comparison logic, the lodging emphasis, and the Nikkah-equal IA all come from Club Gusto's actual, specific offer.
2. Are trendy components used without reason? No — motion and components are limited to what Phase 13/14 explicitly justify.
3. Could this design belong to another business? Only if that business also had two halls, nine rooms, 40-car parking, and served both weddings and Nikkah ceremonies on one plot — which none of the researched local competitors do.
4. Is every animation communicating something? Yes, per the Phase 13 table.
5. Does the site communicate the physical experience of the business? As much as it can without real photography yet — the structural decisions (hall registers, lodging emphasis, lattice motif) are already load-bearing; photography will complete it.
6. Can every major decision be explained? Yes — each phase above ties back to a verified fact, a stated client-copy phrase, or an explicitly flagged inference.

---

## The Ultimate Test

*This website could only have been designed for this client because it treats "two halls plus nine rooms plus one address" as the actual product being sold — not decoration around a generic banquet-hall template — and gives a Nikkah ceremony the same weight, care, and visual attention as a wedding, which almost nothing else in this specific market currently does.*
