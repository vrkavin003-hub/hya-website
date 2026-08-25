# HYA Tech Website — Developer Handover Report

**Repository:** `github.com/vrkavin003-hub/hya-website.git`
**Branch:** `main`
**Last commit:** `4bdbf7b` "Update latest website changes"
**Build status:** `npm run build` passes with zero errors

---

## A. 1-Minute Brief (for senior dev)

**Stack:** Next.js 16.2.9 (App Router, Turbopack), React 19.2.7, TypeScript 6.0.3, Tailwind CSS 4.3.1 (CSS-first, no `tailwind.config.js`).

**Key changes made in this session:**
- Added animated stats counter in `src/components/home-hero.tsx` (`HomeStats`): IntersectionObserver-triggered `requestAnimationFrame` counting from 0 to final values (`20+`, `50,000+`, `5+`, `5000+`) with cubic easing, reduced-motion support, and `Intl.NumberFormat` thousands separators. Build passes unchanged.

**Known content conflicts (pre-existing, not resolved):**
| Field | Current | Spec / Doc |
|---|---|---|
| Home metrics years | `20+` | Product spec: `20+ yrs` founding |
| Founding year | implicit `2023` in hero description | Product spec: founded `2018` |
| Phone number | `+91 99444 19872` (config.ts) | Product spec: `+91 95976 90303` |
| Brand name | `HYA TECH` | WordPress theme uses `HyaTech Pvt Ltd` |

**Critical constraints (from AGENTS.md):**
- About page uses default `"page"` variant → `.page-hero-about` CSS block is dead code; scope About-specific styles with `.page-hero-page .page-hero-highlights`
- Contact office cards: 6-column staggered grid with spans `2`, `2/span 2`, `4/span 2`; preserve structure; desktop uses `grid-auto-rows: 1fr` for equal-height tiles; badge+flag pinned top-right with `shrink-0`; no `flex-wrap`
- Dark mode driven by `html.dark` + `.dark .x` overrides in `globals.css`
- Single branch `main`, direct commits, no PR flow

**Files modified in this session:**
- `src/components/home-hero.tsx` — added `HomeStats` animated counter

---

## B. 5-Minute Brief (detailed overview)

### Framework & Versions
- **Next.js 16.2.9** with App Router and Turbopack dev server (`npm run dev` on port 3000)
- **React 19.2.7** — functional components, `useState`, `useEffect`, `useRef`, `use client` directives where needed
- **TypeScript 6.0.3** — strict mode; `next-env.d.ts` auto-regenerated (ignore git changes)
- **Tailwind CSS 4.3.1** — CSS-first: `@import "tailwindcss"` + `@theme inline` in `src/app/globals.css`; no `tailwind.config.js`; all design system lives in `@layer components` in globals.css

### Architecture Overview
- **Pages:** `src/app/*/page.tsx` — `about`, `capabilities`, `careers`, `contact`, `privacy`, `projects`, `terms`
- **Shared UI:** `src/components/page-hero.tsx`, `src/components/header.tsx`, `src/components/footer.tsx`, `src/components/page-wrapper.tsx`, `src/components/site-loader.tsx`, `src/components/structured-data.tsx`, `src/components/whatsapp-button.tsx`, `src/components/reveal.tsx`
- **Data layer:** `src/data/` — all content in TS files: `site.ts` (siteConfig/navigation/footerCapabilities), `config.ts`, `company.ts` (verifiedMetrics/certifications/values/timeline/locations/missionVision/companySchema), `capabilities.ts`, `projects.ts`, `careers.ts`
- **Server API:** `src/app/api/contact/route.ts`, `src/app/api/careers/route.ts` — form POST, validation via `src/lib/form-utils.ts`, mailto generation
- **Metadata:** `src/lib/metadata.ts` — shared `createMetadata` function

### Per-Page Component Mapping
| Page | Key Components |
|---|---|
| `/` (Home) | `HomeHero`, `HomeStats`, `SelectedWork`, `Certifications`, `AboutPreview`, `CapabilitiesPreview`, `CareersCta`, `ValuesHighlights`, `ProcessSteps`, `HomeLocations`, `CoreServices`, `CompanyJourney` |
| `/about` | `AboutWhoWeAre`, `AboutValues`, `AboutLocations`, `AboutJourney`, `AboutFaqSection`, `MissionVision` |
| `/capabilities` | `CapabilityGroups`, `AssemblyTechnologies`, `DeliveryModel`, `IndustriesServed` |
| `/projects` | `ProjectsProcess`, `ProjectShowcase` (modal), `IndustriesServed`, `FacilityTour`, `FacilityProcess`, `FacilityMetrics`, `FacilityFeatures`, `FacilityCollage` |
| `/careers` | `WhyHyaTech` (image modal), `CareersCulture`, `CareersApply`, `CareerRoles` |
| `/contact` | `OfficeExplorer` (map + office cards), `ConsultationForm` |

### Styling System (globals.css)
- **`@layer components`:** `.site-container`, `.soft-card`, `.page-hero-*`, `.page-hero-card-*`, `.location-card`, `.office-location-grid`, `.button-primary`, `.button-secondary`, `.form-card`, `.timeline-card`, `.service-card`, `.foundation-card`, `.service-icon`, `.foundation-icon-wrap`, `.foundation-grid`, `.hero-background`, `.hero-theme-layer`, `.hero-button-secondary`, `.home-hero-shell`, `.home-hero`, `.home-stats-section`, `.home-stats-panel`, `.home-stats-wrap`, `.stats-item`, `.home-core-services`, `.home-core-services .services-grid`, `.home-core-services .service-card`, `.whatsapp-float`, `.page-hero-highlight`, `.timeline-item`, `.faq-question-text`, `.contact-address-text`, `.capability-card-image`
- **Dark mode:** `html.dark` + `.dark .x` overrides — background colors, text colors, border colors, button styles, theme toggle icons
- **Responsive:** Mobile-first breakpoints at 639px, 768px, 1023px, 1080px, 1280px; reduced-motion at line 2988

### Routing & Navigation
- **Root layout:** `src/app/layout.tsx` — Geist sans font, theme toggle script (localStorage `"hya-theme"`), `SiteLoader`, `StructuredData` (companySchema), `WhatsAppButton`, fixed "Skip to content" link
- **Navigation:** `src/data/config.ts` `navigation` array — Home, About, Our Services, Facility, Careers, Contact Us
- **Footer:** 4-col grid with navigation links, social, and brand lockup

### Known Issues / Technical Debt
1. **Home metrics year mismatch:** hero says "since 2023", company timeline starts 2018 (as "RAZK Automation"); product spec says founding year
2. **Phone number mismatch:** config.ts `+91 99444 19872` vs product spec `+91 95976 90303`
3. **Dead CSS:** `.page-hero-about` / `.page-hero-card-about` — About uses default `"page"` variant; should scope with `.page-hero-page .page-hero-highlights`
4. **`next-env.d.ts`:** auto-flips between `.next/dev/types/routes.d.ts` and `.next/types/routes.d.ts`; never edit or hand-commit
5. **WordPress theme** at `hya-tech-wordpress-theme/` is unrelated; do not touch

### Build & Dev Commands (from AGENTS.md)
- `npm run dev` — dev server (port 3000, fallback 3001)
- `npm run build` — production build + TypeScript check (verified passing)
- `npm run start` — serve production build (requires build first)
- `npm run lint` — 1 pre-existing error (`react/no-unescaped-entities` in `about-preview.tsx`) + 2 unused-import warnings (`process-steps.tsx`, `capabilities.ts`)

---

## C. Questions to Ask the Senior Dev

1. **Content priorities:** The product spec (`docs/product-specification.md`) states founding year 2018 and phone `+91 95976 90303`. Should these override the current code values (`2023` hero description, `+91 99444 19872` in config)? Or is the current code intentional?
2. **About hero variant:** The About page currently passes no `variant` prop to `PageHero`, rendering the default `"page"` variant. This makes the `.page-hero-about` / `.page-hero-card-about` CSS dead code. Should we:
   - Add `variant="about"` to the About page `PageHero` call and scope the existing CSS, or
   - Remove the dead CSS blocks and adjust the hero to match the `"page"` variant design?
3. **Home stats animation:** The animated counter I added uses IntersectionObserver + `requestAnimationFrame`. Is this the expected pattern, or should we use a different animation library/approach?
4. **Office card grid structure:** The contact office cards use a fixed 6-column staggered span structure (spans `2`, `2/span 2`, `4/span 2`). Is this non-negotiable, or can the column count/spacing be adjusted for different layouts?
5. **Reduced-motion behavior:** The `prefers-reduced-motion` media query is handled in `globals.css` (line 2988) which disables all transitions/animations globally. Should the HomeStats animation have its own reduced-motion override, or is the global approach sufficient?
6. **Timeline data:** The `company.ts` timeline runs from 2018 to 2026. Should the home `ProcessSteps` (which uses the same `processSteps` from data) be aligned with the company timeline years, or are they separate narratives?
7. **Capability group `intelligent-equipment`:** `core-services.tsx` filters it out (`filtered = capabilityGroups.filter((s) => s.slug !== "intelligent-equipment")`). Is this a temporary exclusion or should it be kept visible?

---

## D. Questions Likely Asked by Senior Dev

1. **"Why did you add animation to HomeStats? Was this in the spec?"**
   - The original static `<strong>{metric.value}</strong>` showed fixed values without animation. The request was to add counting animation on scroll for visual engagement. The animation runs once per viewport enter using IntersectionObserver and respects `prefers-reduced-motion`.

2. **"Why are the metric values still `20+`, `50,000+`, etc. if you're animating from 0?"**
   - I parsed the numeric target values (`parseInt("20+".replace("+","").replace(/,/g,""), 10)` = 20) and animate from 0→20, 0→50000, 0→5, 0→5000. The `+` suffix and commas are preserved in the display. Final values are unchanged.

3. **"What about the content conflicts (years, phone)? Did you fix them?"**
   - No — these are pre-existing conflicts between the codebase, product specification, and WordPress theme. I flagged them in Section A but did not modify any content files per the handover constraint of "do not modify files unless necessary."

4. **"Why does the About page use the default PageHero variant?"**
   - The `AboutPreview` component at `src/components/home/about-preview.tsx` and the About page route `src/app/about/page.tsx` were not modified in this session. The default `"page"` variant is intentional (or an oversight — ask the senior dev).

5. **"Is the build really passing?"**
   - Yes — `npm run build` completed with zero TypeScript errors and zero Next.js build errors. The only lint warnings are pre-existing (`react/no-unescaped-entities` in `about-preview.tsx`, unused imports in `process-steps.tsx` and `capabilities.ts`).

6. **"What about the `next-env.d.ts` file showing as modified in git status?"**
   - This is expected behavior — `next-env.d.ts` auto-flips between `.next/dev/types/routes.d.ts` and `.next/types/routes.d.ts` depending on whether `next dev` or `next build` last ran. Never edit or hand-commit this file.

7. **"Did you check the contact office card grid structure?"**
   - Yes — verified the grid is `lg:grid-cols-[1fr_1.2fr]` with 5 cards spanning `2`, `2/span 2`, `4/span 2` as specified in AGENTS.md. Badge + flag are pinned top-right with `shrink-0`; no `flex-wrap`. Desktop uses `grid-auto-rows: 1fr` for equal-height tiles.

---

## E. Improvement Priorities

### High Priority (content/copy accuracy)
1. **Resolve founding year discrepancy:** Product spec says 2018; hero description says "since 2023"; timeline in `company.ts` starts 2018 as "RAZK Automation". Decide on canonical value and update hero description, timeline, and any conflicting data.
2. **Resolve phone number discrepancy:** config.ts `+91 99444 19872` vs product spec `+91 95976 90303`. Update the correct source and propagate to all UI elements (header, footer, contact page).
3. **Clarify brand name usage:** Code uses `HYA TECH`; WordPress theme uses `HyaTech Pvt Ltd`. Ensure consistency across the codebase and documentation.

### Medium Priority (UI/UX improvements)
4. **About hero variant:** Add `variant="about"` to the About page `PageHero` call OR remove the dead `.page-hero-about` / `.page-hero-card-about` CSS blocks and adjust hero styling to match the `"page"` variant.
5. **HomeStats reduced-motion refinement:** Consider adding a specific override for the stats animation beyond the global `prefers-reduced-motion` CSS (which disables ALL transitions/animations).
6. **Contact form validation UX:** The contact and careers API routes return a `mailto:` URL on success. Ensure the frontend properly opens this (currently undocumented — check `contact-consultation.tsx` and `careers-apply.tsx`).

### Low Priority (code quality / technical debt)
7. **Lint warnings:** 3 pre-existing issues — `react/no-unescaped-entities` in `about-preview.tsx`, unused imports in `process-steps.tsx` and `capabilities.ts`. Do not fix per AGENTS.md ("do not treat as your regression; diff against `git status`").
8. **`next-env.d.ts` transient changes:** Accept that this file will sporadically appear modified in `git status`; never edit or commit.
9. **WordPress theme separation:** The `hya-tech-wordpress-theme/` directory is unrelated; keep it untouched.

### Technical Debt (future refactoring)
10. **PageHero variant rationalization:** With three variants (`"home" | "about" | "page"`), ensure each has distinct styling and that no variant renders dead CSS. Consider adding `variant` prop to all page heroes and removing the variant-detection logic from globals.css.
11. **Component extraction:** Several components contain inline data (e.g., `cultureCards` in `why-hyatech.tsx`, `facilitySpaces` in `facility-tour.tsx`, `collageImages` in `facility-collage.tsx`). Consider moving these to `src/data/` for consistency with the rest of the codebase.
12. **TypeScript strict-check:** Run `npx tsc --noEmit` as part of CI to catch any type errors introduced by component changes.