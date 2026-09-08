# MetaPrevent — Preventive Lifestyle Medicine Platform

> Bengali preventive lifestyle medicine and metabolic health web application (`health.bongshai.com`).

## Architecture

This project is a multi-page static site with zero runtime dependencies. Source files and partials reside under `src/`, and the build pipeline emits clean static files ready for direct deployment.

- `src/layout.html`: Shell skeleton with slots for head, navigation, main feature content, and JSON-LD structured data.
- `src/partials/`: Shared components:
  - `head.html`: Pre-paint theme script, fonts, content-hashed CSS/JS references, and Open Graph meta tags.
  - `header.html`: Clinical trust ribbon, sticky navigation with clean URL routing, and mobile drawer.
  - `footer.html`: Global medical accreditation and copyright footer.
- `src/pages/`: 11 feature pages:
  - `index.html`: `/` (Risk assessment, prescription, and core metabolic FAQ)
  - `lab-decoder.html`: `/lab-decoder/` (WHtR, TG/HDL ratio, and 7-biomarker evaluator)
  - `cooking-oils.html`: `/cooking-oils/` (Cooking oil comparison matrix)
  - `eggs.html`: `/eggs/` (Egg nutrition science & daily calculator)
  - `disease-reversal.html`: `/disease-reversal/` (4-tab clinical reversal guide)
  - `breathing.html`: `/breathing/` (Vagus nerve pacer & heart-mind guidance)
  - `mythbusters.html`: `/mythbusters/` (5-item medical mythbusters accordion)
  - `fasting.html`: `/fasting/` (Intermittent fasting & autophagy tracker)
  - `plate-builder.html`: `/plate-builder/` (50/25/25 plate builder & 7-day reset meal plan)
  - `habit-tracker.html`: `/habit-tracker/` (6-pillar habit loop & streak monitor)
  - `doctor-passport.html`: `/doctor-passport/` (Clinical discussion sheet & printable summary)
- `scripts/build.mjs`: Zero-dependency Node script to compile pages and generate `sitemap.xml`.

## Build & Deploy

Before deploying, run:

```bash
node scripts/build.mjs
```

This will:
1. Compute SHA-1 content hashes for `style.css` and `app.js` to ensure deterministic cache busting.
2. Compile all 11 pages into clean root directories (`index.html`, `lab-decoder/index.html`, etc.).
3. Update `sitemap.xml` with all endpoints.

Deployment is a direct static upload of the repository files to the web root.
