# Clover Junk Removal — Design Brief

## Three Stylistic Approaches

### 1. Fresh & Grounded (Earthy Confidence) — Probability: 0.07
Warm, trustworthy aesthetic rooted in natural greens and earthy tones. Clean asymmetric layouts with bold typography and a friendly-professional tone.

### 2. Industrial Utility (Bold & Direct) — Probability: 0.02
Heavy black and yellow palette, industrial textures, and no-nonsense grid layouts. Feels like a hardworking crew that gets the job done.

### 3. Bright & Neighborly (Suburban Warmth) — Probability: 0.04
Soft pastels, rounded corners, friendly illustrations, and community-focused messaging. Approachable and warm like a neighbor you trust.

---

## Chosen Approach: Fresh & Grounded

**Design Movement:** Modern Organic — clean structure meets natural warmth

**Core Principles:**
- Trustworthy and approachable — this is a service that enters your home
- Green-forward brand identity anchored in the clover motif
- Generous whitespace that communicates "clean" and "organized"
- Bold, confident headlines paired with warm, human body copy

**Color Philosophy:**
- Signature Brand Green: `#1a7a3c` (deep forest green — ownable, trustworthy)
- Accent: `#f5a623` (warm amber — energy, action, CTAs)
- Background: Off-white `#f9f7f4` (warm, not clinical)
- Text: Deep charcoal `#1c2b1e` (earthy, not harsh black)
- Light Green Tint: `#e8f5ed` (section backgrounds)

**Layout Paradigm:**
- Asymmetric hero with image offset to the right and text anchored left
- Diagonal section dividers using clip-path for visual flow
- Card-based services grid with icon accents
- Sticky navigation that transitions from transparent to solid on scroll

**Signature Elements:**
- Four-leaf clover motif in decorative contexts (dividers, bullets, accents)
- Diagonal/angled section transitions (not flat horizontal cuts)
- Amber CTA buttons that pop against the green palette

**Interaction Philosophy:**
- Smooth scroll-triggered entrance animations (fade up, stagger)
- Button press feedback (scale transform)
- Nav transitions on scroll

**Animation:**
- Entrance: fade-up with 40px Y offset, 0.5s ease-out, staggered 80ms per item
- CTA hover: subtle lift with box-shadow expansion
- Counter numbers animate up on scroll into view
- Section transitions: 200ms ease-out

**Typography System:**
- Display: Playfair Display (bold, serif — authority and warmth)
- Body: DM Sans (clean, modern, readable)
- Headlines: 700 weight Playfair Display
- Subheadings: 600 weight DM Sans
- Body: 400 weight DM Sans

**Brand Essence:**
Clover Junk Removal — the friendly, reliable crew that clears your space so you can breathe again. For homeowners and businesses who want the job done right, the first time.
Personality: Trustworthy · Energetic · Neighborly

**Brand Voice:**
- Headline example: "Your Space, Reclaimed."
- CTA example: "Book a Free Pickup Today"
- No generic filler. Every line earns its place.

**Wordmark & Logo:**
Clover + truck icon combination mark in deep forest green. Bold condensed wordmark below.

**Signature Brand Color:** `#1a7a3c` — Deep Clover Green

## Style Decisions
- Use amber (#f5a623) exclusively for primary CTAs to maximize contrast and click-through
- Diagonal clip-path sections use polygon(0 5%, 100% 0, 100% 100%, 0 100%) with compensating negative margins
- All section entrance animations respect prefers-reduced-motion
- Premium information architecture uses focused landing, services, FAQ, and booking paths rather than relying on one long page.
- Premium trust is earned through transparent process language, service details, and clear booking expectations—not invented reviews, ratings, or guarantees.
- Interior pages use editorial page banners, generous spacing, organic clover geometry, and a single strong conversion action per section.
