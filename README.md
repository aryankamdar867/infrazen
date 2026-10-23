# Infrazen Mega Projects Private Limited — Corporate Web Platform

An award-level, high-performance corporate web platform engineered for **Infrazen Mega Projects Private Limited**, Pune, Maharashtra. Built with Next.js App Router, TypeScript, Tailwind CSS v4, React Three Fiber, GSAP ScrollTrigger, and Lenis smooth scrolling.

---

## 🌟 Visual Direction & Architectural Design System (Daylight Edition)

The platform follows a daylight **editorial engineering-drawing aesthetic** inspired by architectural blueprint sheets, technical project dossiers, and structural engineering layouts:

1. **Client Architectural Palette**:
   - Primary Background: Warm Architectural Tone (`#F7F5F0`)
   - Alternating Sections: Subtle Tone (`#E9E6DF`)
   - Surface Cards: Pure White (`#FFFFFF`) with crisp hairline borders (`#CFCBC2`)
   - Primary Navy: Deep Executive Navy (`#0F2A47`) — utilized for key buttons, headings, stat counters, and primary rules.
   - Secondary Steel Blue: (`#2F6690`) — utilized for category tags, icons, subsection labels, and statutory identification numbers.
   - Accent Safety Orange: (`#F26A1B`) — **strictly fills and lines only, never as text on light backgrounds** (used for primary RFP submission buttons, 2px horizontal rules, crane masts/hooks, and the landmark tower beacon).
   - Body Text: High-contrast slate charcoal (`#3A4654`) with 4.5:1+ WCAG AA compliance.
   - Borders & Dividing Rules: Structural grid lines (`#CFCBC2`).
   - **Zero purple, magenta, violet, or neon colours anywhere**, including the 3D scene and UI components.

2. **Fixed Full-Viewport 3D Architectural Scene (`WorldScene3D.tsx`)**:
   - Single fixed WebGL canvas (`position: fixed; z-index: 0; pointer-events: none`) behind all content sections.
   - Fully procedural — **0 external 3D model files**, maintaining sub-2.5s LCP.
   - Daytime architectural model featuring:
     - Prominent sunlit **Landmark Tower** with structural white corners, steel blue glazed curtain facets, primary navy cornice bands, and a safety orange aviation beacon.
     - 280m cable-stayed bridge with primary navy pylons, steel blue stay cables, and moving vehicular traffic in both directions.
     - Construction tower cranes with rotating safety orange jibs and bobbing hooks.
     - Instanced low-poly city skyline in pale greys and warm whites layered in depth rows with soft daylight atmosphere.
     - Reflective steel blue water hydrology plane underneath the bridge deck.
     - Camera rig smoothly synced to GSAP ScrollTrigger and subtle cursor parallax.
     - Interactive bridge assembly synchronized with scroll in the Mega Infrastructure section.

3. **Engineering Typography**:
   - **Archivo** (`weights: ["600", "700"]` via `next/font/google`): Architecturally structured, powerful expanded headings.
   - **Public Sans** (`weights: ["400", "500"]` via `next/font/google`): Editorial, technical body typography ensuring maximum legibility.
   - Zero generic AI typography (no Inter, Roboto, Poppins, or Space Grotesk).

4. **Blueprint & Technical Detailing**:
   - Section numbering (`01 / Hero`, `02 / Financial Highlights`, `04 / Services`, `05 / Mega Infrastructure`, etc.)
   - Micro coordinate annotations (`18.5204° N, 73.8567° E` for Pune HQ)
   - Hairline rules, sharp 2–4px radiuses, and blueprint-style dimension lines
   - Custom-drawn thin-line SVG icons with consistent 1.3–1.5px stroke weight
   - Restrained motion respecting `@media (prefers-reduced-motion: reduce)` with instant static fallbacks

---

## 🏛️ Executive Company Profile

- **Legal Entity**: Infrazen Mega Projects Private Limited
- **Headquarters**: Office No: A 95, Ground Floor, Patil Plaza, Mitra Mandal Chowk, Pune – 411009, Maharashtra, India
- **Tagline**: *"Building the future with world-class infrastructure solutions."*
- **Audience**: Government departments, hospital promoters, private developers, institutional investors.
- **Core Verticals**:
  1. Mega Infrastructure (Roads, Highways, Dams, Bridges, Regional Corridors)
  2. Construction Management & QA/QC Lifecycle Oversight
  3. Turnkey Hospital EPC (MGPS, Modular OT, ICU, Clean Rooms, NABH Compliance)
  4. Government Liaisoning (Central, State & Municipal Clearances, Tender Support)
  5. Advisory & Pre-Development (Feasibility, EIA, Land & Site Services)

### Financial & Track Record Metrics
- **FY 2024–25 Delivered Revenue**: ₹12 Cr+ (in 1st Year of operations)
- **FY 2025–26 Projected Revenue**: ₹20 Cr+ (>65% YoY trajectory)
- **Current Order Book**: ₹50 Cr+
- **Leadership Track Record**: 15+ Years Combined Infrastructure Expertise
- **Client Commitment**: 100% Track Record

### Statutory Identifications & Compliance
All registrations are managed via the single-source-of-truth configuration file (`src/content/site.ts`):
- **CIN**: `U41001PN2024PTC233435` (Ministry of Corporate Affairs, RoC Pune)
- **PAN**: `AAHCI8006L` (Income Tax Dept of India)
- **TAN**: `PNEI12999A` (Pune Tax Withholding)
- **GSTIN**: `27AAHCI8006L1ZA` (Maharashtra)
- **ESIC**: `33001418900000999` (Worker Welfare Compliance)
- **EPFO**: `PUPUN3357065000` (Pune Regional PF Office)

---

## 🔒 Placeholders & Verification Integrity

Strict truth-in-advertising guidelines have been enforced across all sections:
- **No invented content**: No fictional client names, fabricated awards, stock photo models, or speculative numbers have been added.
- **Project Case Studies & Media Vault Placeholder**: Designated with `<PlaceholderNotice />` indicating that detailed engineering case studies, blueprints, and site photography are provided under Non-Disclosure Agreements (NDA) for vetted government tenders and formal client RFPs.
- **Formspree Pipeline**: Configured for production deployment with client-side field validation and feedback states.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 + Architectural Theme Tokens
- **3D Graphics**: React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Three.js procedural meshes
- **Animation**: GSAP + ScrollTrigger, Lenis Smooth Scroll
- **Fonts**: Archivo, Public Sans via `next/font/google`
- **Forms**: Formspree API integration
- **Deployment**: Deploy-ready for Vercel
