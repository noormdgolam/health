# Antigravity task brief — cache hardening + multi-page split

Paste everything below into Antigravity as the task. It is written to be read cold.

---

## 0. Project context

`health.bongshai.com` is a single-page **Bengali** preventive lifestyle-medicine web app.

- **Repo:** `github.com/noormdgolam/health`. Three hand-edited files — `index.html` (~2090 lines),
  `style.css` (~4140), `app.js` (~3380) — plus `llms.txt`, `robots.txt`, `sitemap.xml`,
  `site.webmanifest`, `icon.svg`, `og-cover.svg`, `og-cover.png`.
- **No build tooling today.** `app.js` is one IIFE: a bilingual `translations` dict (`bn`/`en`,
  keys kept at parity, dev `assertLocaleParity` guard), a `window.WebMCP` action registry + a
  single delegated `[data-mcp-action]` click handler, and ~13 interactive modules
  (`initAssessmentEvents`, `initFastingTracker`, `initLabDecoder`, `initPlateBuilder`,
  `initVagusPacer`, `initHabitTracker`, `initDoctorPassport`, `initDiseaseReversalTabs`,
  `initOilFilters`, `initEggCalculator`, `initBreathingExercise`, `initMythbustersAccordion`,
  `initNavigationSystem` + `initScrollSpy` + `initAnchorNavigation`).
- Theme is set **pre-paint** by a tiny inline `<script>` in `<head>` (reads
  `localStorage.site_theme` / `prefers-color-scheme`); `initTheme()` reconciles. `<html>` has no
  hardcoded `data-theme`. CSS carries the light palette on `:root`, dark on both
  `[data-theme="dark"]` and `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`.
- **Deploy:** manual FTPS to the account root (`/` is the web root). LiteSpeed serves static
  assets with `Cache-Control: public, max-age=604800` (7 days); `index.html` is not cached.
  Current convention: `style.css` and `app.js` are referenced with a `?v=YYYYMMDD` query string
  that must be bumped on every change (see `index.html` line ~57).
- Persisted state keys (do **not** rename): `site_theme`, `site_lang`,
  `health_assessment_answers`, `health_fasting_start`, `health_fasting_running`,
  `health_lab_inputs`, `health_plate_chips`, `health_habits_streak`, `health_habits_last_date`,
  and the daily-habit day keys.
- WebMCP action names are a public contract (documented in `llms.txt`) — do **not** rename them.
- Verify work with a local static server (`python -m http.server`) and a browser. Playwright is
  not installed; install it yourself or use Antigravity's browser.

---

## PART 1 — Cache hardening (the "broken layout" screenshot)

**This is almost certainly not a code bug.** In a clean browser at 1271px the live site renders
correctly with no horizontal scrollbar (`document.documentElement.scrollWidth === innerWidth`) and
loads `style.css?v=20260908` / `app.js?v=20260908`. The unstyled-nav / clipped-header / green
left-edge line symptom is a **stale asset cache** from before the `?v=` fix (7-day
`max-age`). A hard refresh clears it for one user; the goal here is to make it structurally
impossible to recur.

Do all of the following:

1. **`.htaccess` cache policy.** Add rules (the current `.htaccess` only has cPanel PHP
   directives — append, don't replace):
   - `text/html` → `Cache-Control: no-cache` (always revalidate) or `max-age=300`.
   - versioned/static assets (`css`, `js`, `svg`, `png`, `webmanifest`, `woff2`) →
     `Cache-Control: public, max-age=31536000, immutable`.
   - `AddType application/manifest+json .webmanifest` (it is currently served as
     `application/octet-stream`).
2. **Content-hash the CSS/JS filenames** so a stale cache is impossible, not just unlikely. The
   build script from Part 2 should emit `style.<hash>.css` / `app.<hash>.js` and rewrite the
   `<link>`/`<script>` references in every generated page. If you keep the `?v=` scheme instead,
   the version string must be derived from the file content hash, not a hand-typed date.
3. **Defensive overflow guard:** add `overflow-x: clip` to `body` in `style.css` (keep `html`
   untouched so `position: sticky` still works). Then audit the header/nav between **1024px and
   1360px** — the desktop nav (`.nav-clinical-menu`) shows at ≥1081px; confirm brand + 3
   dropdowns + passport pill + language + theme fit without the language control clipping. Tighten
   gaps/padding or drop the passport pill to icon-only in that band if needed.
4. Re-run the clean-browser check at 1271px and 1024px and confirm no horizontal scrollbar.

---

## PART 2 — Split the single page into one page per feature

### Page map

Keep the **assessment → prescription** funnel + the intro (answer-first, authority) + the short
FAQ on the home page. Each interactive module becomes its own page (directory + `index.html` so
URLs are clean and it's just static files — no rewrite rules needed):

| URL | Content (current section id) | Nav group |
|---|---|---|
| `/` | answer-first, authority, `#assessment-section`, `#prescription-section`, `#faq-section` | — |
| `/lab-decoder/` | `#lab-decoder` (TOFI + biomarker decoder) | Diagnostics |
| `/cooking-oils/` | `#cooking-oil-section` (oil matrix) | Diagnostics |
| `/eggs/` | `#egg-nutrition-section` (whole-egg science + calculator) | Diagnostics |
| `/disease-reversal/` | `#disease-reversal` (4-tab reversal guide) | Protocols |
| `/breathing/` | `#heart-mind-section` + `#vagus-pacer` merged (both are breathing/HRV) | Protocols |
| `/mythbusters/` | `#mythbusters-section` (5-item accordion) | Protocols |
| `/fasting/` | `#fasting-tracker` (autophagy timer) | Daily Tools |
| `/plate-builder/` | `#plate-builder` (plate + 7-day reset) | Daily Tools |
| `/habit-tracker/` | `#habit-tracker` (6-pillar streak) | Daily Tools |
| `/doctor-passport/` | `#doctor-passport` (clinical summary + print) | standalone |

(11 pages total. If the home page feels too heavy, `/assessment/` may be split off from `/` — your
call, but keep the risk-score CTA prominent on `/`.)

### Build approach (keep deploy = "upload files to the root")

Add a **single dependency-free Node script** `build.mjs` (Node is available; use only built-in
modules, no `package.json`/`npm install` required). Structure:

```
src/
  partials/head.html      <-- <meta>, theme pre-paint script, font links, CSS link (hashed)
  partials/header.html    <-- trust ribbon + sticky header + mobile drawer
  partials/footer.html
  layout.html             <-- doctype/html/body skeleton with {{head}} {{header}} {{main}} {{footer}} {{jsonld}} slots + per-page {{title}} {{description}} {{canonical}} {{og}}
  pages/index.html        <-- just the <main> content for that page + front-matter-ish meta block
  pages/lab-decoder.html
  ... one per page
scripts/build.mjs         <-- reads src/, writes /*.html (+ dirs), hashes assets, emits sitemap.xml
```

`node scripts/build.mjs` regenerates every `.html` at the repo root (and `cooking-oils/index.html`
etc.), copies/hashes `style.css`/`app.js`, and rewrites `sitemap.xml`. Commit the generated files
(so the repo still deploys by plain upload) **and** the `src/` sources. Document the one command in
`README`.

### Navigation

- Dropdown items and mobile-drawer links: `href="#section"` → real `href="/cooking-oils/"` etc.
- Replace `initScrollSpy` with "mark current page": set `aria-current="page"` /
  `data-section-active` on the link/trigger whose `href` matches `location.pathname`. Keep the
  dropdown disclosure + keyboard behaviour and the mobile drawer (drawer must stay a direct child
  of `<body>`, **not** inside `<header>` — `backdrop-filter` on the header traps `position: fixed`).
- `initAnchorNavigation`'s smooth-scroll/deep-link machinery is mostly obsolete once pages are
  split; keep only the "open the right tab/accordion when the URL has `#tab-id`" part for
  `/disease-reversal/#tab-stress` style links.

### JavaScript

- Simplest safe path: **keep `app.js` monolithic**, load it on every page. Every `init*()` already
  early-returns when its root element is absent — verify each one does and add a guard where
  missing, so unused modules no-op. Accept ~220 KB JS/page for v1.
- Optional follow-up (only if you have time and tests): split into `core.js` (theme, i18n, nav,
  drawer, WebMCP registry + dispatch, persistence helpers, `announce`/`showToast`) + one file per
  module, and load `core.js` + the page's module. Do not do this if it risks regressions.
- The `translations` dict stays whole and shared (it's ~40 KB, mostly harmless). Per-page split is
  a nice-to-have, not required.

### Cross-page state

All `health_*` / `site_*` keys are `localStorage` and already survive navigation. One gap:
`/doctor-passport/` needs the metabolic resilience score + tier + WHtR/TG-HDL + streak.
- Ensure `restoreAssessmentAnswers()` (which recomputes the score from
  `health_assessment_answers`) runs on `/doctor-passport/`, **or** persist a computed summary blob
  `health_passport_summary` whenever the assessment / lab decoder / habit tracker updates, and have
  the passport page read that.
- The passport's "copy summary" and scoped print (`body.printing-passport`) must still work.

### SEO / metadata (per page)

Each generated page needs its own:
- `<title>` and `<meta name="description">` in **Bengali** (primary) — the `setLanguage()`
  title/description swap logic should be generalised so each page declares its `bn`/`en` title +
  description (e.g. a small `window.__PAGE_META = { bn:{title,desc}, en:{title,desc} }` inline
  object the build injects, which `setLanguage()` reads).
- `<link rel="canonical" href="https://health.bongshai.com/<slug>/">`, matching OG `og:url`,
  `og:title`, `og:description`. Keep one shared `og-cover.png` unless you generate per-page images.
- JSON-LD: `MedicalWebPage` on every page (adjust `name`/`description`/`about`). Move the
  `FAQPage` (8 Q&As) to `/mythbusters/` and `/` (the short FAQ). Move `HowTo` (6-pillar protocol)
  to `/habit-tracker/`. Keep `Organization` + `WebSite` + `BreadcrumbList` (breadcrumb per page:
  Home → group → page) on every page or via a shared partial.
- `sitemap.xml`: list all 11 URLs (build script emits it). `robots.txt` sitemap line already
  absolute — leave it.
- `llms.txt`: rewrite the structure section to describe the pages and their URLs; keep the WebMCP
  action list (names unchanged) and note which actions live on which page.

### Legacy hash-link compatibility

External links may point at `https://health.bongshai.com/#cooking-oil-section` etc. Add a tiny
script to `/` (`index.html`) that, on load, maps a known legacy `#section-id` to its new path and
does `location.replace('/cooking-oils/')`. Map every old section id.

---

## Constraints

- **Do not** change the visual design, the Bengali/English copy (keep every string verbatim), the
  WebMCP action names, or the `localStorage` key names.
- Keep it deployable by uploading files to the web root (generated `.html` committed).
- Keep the pre-paint theme script, the light/dark token system, and the a11y baseline (skip link,
  `:focus-visible`, ARIA on tabs/accordions/drawer, `#sr-live`, reduced-motion) intact on every
  page — put them in the shared partials.
- Bengali string literals in this repo sometimes contain invisible characters (ZWNJ) that break
  naive find-and-replace; prefer editing by `data-i18n` key or structural anchors.

## Acceptance checklist

- [ ] `node scripts/build.mjs` regenerates all 11 pages + `sitemap.xml` deterministically.
- [ ] Every nav dropdown item and mobile-drawer link is a real page link and 200s; current page
      shows `aria-current="page"`.
- [ ] Theme, language, and all persisted module state survive navigating between pages.
- [ ] `/doctor-passport/` shows the score/tier/WHtR/streak from a session done on other pages.
- [ ] Each page: unique Bengali `<title>` + description + canonical + OG; JSON-LD validates on
      the Rich Results test.
- [ ] No horizontal scrollbar at 1024 / 1271 / 1360 / 390 px; mobile drawer opens full-screen
      with a focus trap.
- [ ] `.htaccess` sets short HTML cache + long immutable asset cache + `.webmanifest` MIME;
      asset filenames are content-hashed (or `?v=` is content-derived).
- [ ] Legacy `/#cooking-oil-section` (and every old id) redirects to the new page.
- [ ] All ~13 interactive modules work on their new pages, in both languages, and after reload.
- [ ] Lighthouse (mobile) SEO + Accessibility ≥ 95 on 3 sampled pages.
