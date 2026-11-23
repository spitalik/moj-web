# AGENTS.md — Agent instructions for this repository

Short, actionable guidance for AI coding agents (Copilot, Codex, Claude and others). The fuller version is in [CLAUDE.md](CLAUDE.md); [jocadium/CLAUDE.md](jocadium/CLAUDE.md) covers the game library in detail.

## What this repo is

A collection of **independent, zero-build static PWAs**, one per top-level folder. No package.json, bundler or transpiler: hand-written vanilla HTML/CSS/JS. Published as-is on GitHub Pages at `https://spitalik.github.io/moj-web/<folder>/`.

| Folder | App |
|---|---|
| [jocadium/](jocadium/index.html) | Jocadium: HTML5 game library, 12 languages |
| [math/](math/index.html) | Matematika krok za krokom: lessons and exercises, 12 languages |
| [phys/](phys/index.html) | Fyzika krok za krokom: same architecture as `math/` |
| [juro/](juro/index.html) | Juro: tools for lawyers, Slovak only ([README](juro/README.md)) |
| [sleep-detective/](sleep-detective/index.html) | Sleep Detective: sleep diary and night sound recording, Slovak only |
| [blood-pressure/](blood-pressure/index.html) | Blood Pressure: blood pressure diary and 7-day home measurement, Slovak only |
| [health-companion-app/](health-companion-app/index.html) | Health Companion: medications, symptoms, measurements, doctor visits, check-ups, questions for the doctor; 12 languages; PWA and Android app (Capacitor) |

The root `index.html` is only a placeholder link page. Root `tools/` holds old scripts for a former layout and is not used by any app.

The developer is Slovak-speaking: UI texts, code comments and commit messages are mostly in Slovak.

## Preview

From the repo root run `python -m http.server 8000` and open `http://localhost:8000/<folder>/`. Service workers need `localhost` or HTTPS, not `file://`. They cache aggressively: use DevTools → Application → Service Workers → "Update on reload" (or unregister the worker) so you don't test an old version.

## Checks (run inside the app's folder)

- `math/`: `node tools/validate.js` (also in CI: `.github/workflows/math-validate.yml`); after changing lessons or translations `node tools/index_build.js`.
- `phys/`: `node tools/validate.js`, `node tools/index_build.js`.
- `juro/`: `node tools/test.js`.
- `sleep-detective/`: `node tools/test.js` (sound detector, then the app scenarios in `tools/test-app.js`).
- `blood-pressure/`: `node tools/test.js` (app scenarios with a fake DOM).
- `health-companion-app/`: `node tools/test.js` (logic in `logic.js`); Android: `node tools/build_www.js`, `npx cap sync android`, then `gradlew assembleDebug` in `android/`.
- `jocadium/`: no tests, verify in a browser.

## Rules

- **Each app is self-contained in its own folder.** Fonts, libraries, icons, sounds, translations and tools live inside it (fonts in `fonts/` or `vendor/fonts/`, libraries in `vendor/`). Never reference a file outside the app's folder (no `../` out of it, no root-absolute `/…` path) and never share files between apps; if two apps need the same font or library, each gets its own copy with its licence.
- **No runtime requests to third parties**: no Google Fonts, CDNs, analytics or trackers (it would send users' IP addresses to them, which conflicts with GDPR).
- **Respect licences**: only use assets and libraries whose licence allows it, ship their licence files and record them (`jocadium/NOTICE`, `*/THIRD-PARTY-NOTICES.md`, `sleep-detective/fonts/OFL-*.txt`, `blood-pressure/fonts/OFL-*.txt`). Do not copy protected content, names or look of existing games or brands.
- **Privacy / GDPR**: keep user data on the device (localStorage / IndexedDB), collect only what a feature needs, say what is stored, and let users export and fully delete it.
- **Bump the `CACHE` version in the app's `sw.js` on any change** to its files, and add new files needed offline to its `ASSETS` list.
- When changing a PWA, keep its manifest, `icons/` and `sw.js` registration in sync.
- Keep edits small and scoped to one app. Always use full paths from the repo root, because `index.html`, `sw.js` and `tools/test.js` exist in several apps.
- Apps are used mainly on Android phones as installed PWAs: support touch, small screens and offline use.
