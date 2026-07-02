# HYA Tech Website Product Specification

This document records the design and content decisions made before implementation. The existing HYA Tech deployment is the content source of truth. Claims that appear on the source website but were not included in the client-verified brief are not published until they are independently confirmed.

## 1. Content inventory

### Verified company information

- Brand: HYA Tech
- Positioning: precision manufacturing, industrial automation, and engineering solutions
- Origin: the company journey began in 2018 as RAZK Automation in Madurai, Tamil Nadu
- HYA Tech registration: Chennai, Tamil Nadu, in 2023
- Manufacturing headquarters: Hosur, Tamil Nadu
- Head office address: Plot No. 122, SIDCO, Hosur, Tamil Nadu 635109
- Email: info@hyatech.co.in
- Phone: +91 95976 90303
- Business hours: Monday–Saturday, 9:00 AM–6:00 PM IST
- Client scale: 50+ clients

### Company story

- 2018 — RAZK Automation registered in Madurai, Tamil Nadu
- 2019 — engineering support for automation equipment installation, qualification, and maintenance in the EMS industry
- 2020 — expanded into spares and standard parts supply
- 2021 — branch office established in Sriperumbudur, Chennai
- 2022 — engineering support business expanded across customers and locations
- 2023 — HYA Tech registered in Chennai
- 2024 — manufacturing facility established in Hosur for precision components and fixtures
- 2025 — global partnerships for know-how transfer and capacity sharing with China and Singapore

### Core capabilities

- Design and engineering
- Concept development, 3D modeling, and simulation
- Prototyping and validation
- CNC turning
- CNC milling and multi-axis machining
- Wire EDM and sinker EDM
- Surface grinding
- CMM inspection and quality assurance
- Custom assembly fixtures
- Welding fixtures
- Inspection gauges
- Automated assembly lines
- Riveting systems
- Press-fitting systems
- Tightening, gluing, welding, magnetization, bending, and laser processes
- Special-purpose machines
- Test and inspection systems
- Intelligent manufacturing equipment
- Industrial spares and consumables
- Production and ongoing support

### Project portfolio

- CNC machining center
- High-precision components
- Custom engineered fixtures
- Assembly jigs
- Medical components
- Surface grinding
- Electrical discharge machining
- Assembly automation
- Automated riveting systems

Project cards intentionally omit customer names and numerical outcomes because the source does not provide verifiable customer attribution.

### Industries

- Electronics and EMS
- Automotive
- Aerospace
- Medical manufacturing

### Careers

- Design Engineer
- Manufacturing Engineer
- CNC Operator
- Quality Inspector
- Assembly Technician

Applications are routed by email because no verified recruitment backend or applicant-tracking system is available.

### Verification TODOs

The source website displays the following claims, but they remain unpublished pending documentary confirmation:

- 500+ projects/designs
- 98% client satisfaction
- ISO certifications
- Medical components “meeting global certifications”
- Specific tolerance and surface-finish claims
- Exact USA operational presence
- Exact legal company name and registration identifiers
- Official LinkedIn company URL

## 2. Sitemap

```text
/
├── /about
├── /capabilities
├── /projects
├── /careers
├── /contact
├── /privacy
└── /terms
```

Primary conversion path:

```text
Landing → Understand capabilities → Review work/process → Request consultation
```

## 3. Component list

### Global

- FloatingHeader
- MobileNavigation
- Logo
- Footer
- Button
- SectionHeading
- PageHero
- ContactCTA
- Reveal

### Content

- MetricStrip
- ImageFeature
- CapabilityCard
- CapabilityGroup
- ProcessSteps
- ProjectCard
- ProjectFilter
- Timeline
- ValueCard
- LocationCard
- ContactForm
- CareerApplication
- StructuredData

## 4. Design tokens

| Token | Value |
|---|---|
| Background | `#FFFFFF` |
| Alternate background | `#F7F9FC` |
| Navy | `#0B1F3A` |
| Blue | `#1677B8` |
| Dark blue | `#0E5F94` |
| Light blue | `#EAF4FB` |
| Main text | `#111827` |
| Muted text | `#667085` |
| Border | `#E4E7EC` |
| White | `#FFFFFF` |
| Radius small | `14px` |
| Radius medium | `20px` |
| Radius large | `28px` |
| Content width | `1200px` |
| Text width | `720px` |
| Section spacing | `112px` desktop / `72px` mobile |
| Type family | Geist with system fallback |

Motion is limited to short fades, small vertical reveals, card elevation, and subtle image scaling. Reduced-motion preferences disable nonessential movement.

## 5. Page wireframes

### Home

Floating header → centered editorial hero and industrial image → verified metrics → company introduction → capability grid → end-to-end process → featured projects → company journey → locations → careers banner → consultation CTA → footer.

### About

Page hero → company story and facility image → mission/vision/values → operating values → full timeline → location network → CTA.

### Capabilities

Page hero → six capability groups → precision machining matrix → assembly technology list → end-to-end process → CTA.

### Projects

Page hero → accessible project category filters → project card grid → industries served → delivery approach → CTA.

### Careers

Page hero → employee proposition → role categories → values at work → email-based application form → contact note.

### Contact

Page hero → contact methods → consultation form → head office and business hours → location summary → map link.

## 6. Acceptance criteria

- Responsive at 360px, 768px, 1024px, and 1440px
- No horizontal overflow
- WCAG 2.2 AA-oriented color contrast, semantics, focus states, and keyboard behavior
- Only verified business claims are published
- Optimized local images and no autoplay video
- Page-specific metadata, canonical URLs, Open Graph metadata, schema, sitemap, and robots rules
- Forms validate on the server and open a prefilled email draft as the verified delivery fallback
- No Florix code, content, branding, or assets
