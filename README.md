# MRANTI x GRADUAN K-Youth Development Programme 2026

## End-state Command Centre
This package is a static GitHub Pages site designed around the requested end state: dark MRANTI/GasMY-style command dashboard, 37-day calendar, separate day pages, prepared exercises, actual synthetic datasets, resources, four division project tracks and local progress controls.

### Brand palette used
The supplied colour intent was normalised to valid CSS hex values:
- Electric blue: `#0000FF`
- Violet: `#C000FF`
- Cyan: `#00D6FF`

### Programme period
20 August 2026 – 25 September 2026 (37 calendar days).

### What is inside
- `index.html` — main command-centre dashboard
- `calendar.html` — full clickable programme calendar
- `roadmap.html` — six-phase roadmap
- `agenda.html` — all 37 days in one list
- `days/` — 37 fully populated separate day pages
- `materials.html` — real files only; no fake PDF/PPTX links
- `exercises.html` — eight prepared training missions
- `projects.html` + `tracks/` — four prepared project tracks
- `resources/` — datasets, injections, SQL, Power BI, n8n/AI, prompts, trainer references
- `.nojekyll` — included for GitHub Pages

### GitHub Pages deployment
1. Unzip this package.
2. Create a GitHub repository.
3. Upload **the contents of this folder** to the repository root (not the outer folder itself).
4. Confirm `index.html` and `.nojekyll` are in the repo root.
5. GitHub → Settings → Pages → Deploy from branch → `main` → `/root`.
6. Open the published URL and click through the calendar.

### Important data note
The training datasets are synthetic and deliberately imperfect. They model MRANTI-relevant operational scenarios but are not production MRANTI records. Public GitHub Pages work should use synthetic/sanitised data only.

### Trainer note
`resources/trainer/answer_key.md` and failure injections are trainer controls. Do not issue these before the relevant mission.
