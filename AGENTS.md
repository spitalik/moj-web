# AGENTS.md — Agent instructions for this repository

Short, actionable guidance for AI coding agents (Copilot, Codex, Claude and others). The fuller version is in [CLAUDE.md](CLAUDE.md); [jocadium-app/CLAUDE.md](jocadium-app/CLAUDE.md) covers the game library in detail.

## What this repo is

A collection of **independent, zero-build static PWAs**, one per top-level folder. No package.json, bundler or transpiler: hand-written vanilla HTML/CSS/JS. Published as-is on GitHub Pages at `https://spitalik.github.io/moj-web/<folder>/`.

| Folder | App |
|---|---|
| [jocadium-app/](jocadium-app/index.html) | Jocadium: HTML5 game library, 12 languages; PWA and Android/iOS app (Capacitor) |
| [math/](math/index.html) | Matematika krok za krokom: lessons and exercises, 12 languages |
| [phys/](phys/index.html) | Fyzika krok za krokom: same architecture as `math/` |
| [juro/](juro/index.html) | Juro: tools for lawyers, Slovak only ([README](juro/README.md)) |
| [sleep-detective-app/](sleep-detective-app/index.html) | Sleep Detective: sleep diary and night sound recording, 12 languages (English by default, texts in `i18n/`); PWA and Android/iOS app (Capacitor) |
| [blood-pressure-app/](blood-pressure-app/index.html) | Blood Pressure: blood pressure diary and 7-day home measurement, 12 languages; PWA and Android/iOS app (Capacitor) |
| [universal-tuner-app/](universal-tuner-app/index.html) | Universal Tuner: instrument tuner and reference tones, 12 languages; PWA and Android/iOS app (Capacitor) |
| [health-companion-app/](health-companion-app/index.html) | Health Companion: medications, symptoms, measurements, doctor visits, check-ups, questions for the doctor; 12 languages; PWA and Android app (Capacitor) |

The root `index.html` is only a placeholder link page. Root `tools/` holds old scripts for a former layout and is not used by any app.

The developer is Slovak-speaking: UI texts, code comments and commit messages are mostly in Slovak.

## Preview

From the repo root run `python -m http.server 8000` and open `http://localhost:8000/<folder>/`. Service workers need `localhost` or HTTPS, not `file://`. They cache aggressively: use DevTools → Application → Service Workers → "Update on reload" (or unregister the worker) so you don't test an old version.

## Checks (run inside the app's folder)

- `math/`: `node tools/validate.js` (also in CI: `.github/workflows/math-validate.yml`); after changing lessons or translations `node tools/index_build.js`.
- `phys/`: `node tools/validate.js`, `node tools/index_build.js`.
- `juro/`: `node tools/test.js`.
- `sleep-detective-app/`: `node tools/test.js` (sound detector, then the app scenarios in `tools/test-app.js`, which also checks that all 12 dictionaries in `i18n/` have the same keys as `i18n/sk.js`; add every new text to all of them; app code is in `app.js` and `boot.js`, never inline in `index.html`, because of its Content-Security-Policy); Android: `node tools/build_www.js`, `npx cap sync`, then `gradlew assembleDebug` in `android/`; iOS: Xcode on a Mac.
- `blood-pressure-app/`: `node tools/test.js` (app scenarios with a fake DOM, including the native mode); Android: `node tools/build_www.js`, `npx cap sync`, then `gradlew assembleDebug` in `android/`; iOS: Xcode on a Mac.
- `universal-tuner-app/`: `node tools/test.js` (pitch detector, then the app scenarios in `tools/test-app.js`, including the native mode); Android and iOS as in `blood-pressure-app/`.
- `health-companion-app/`: `node tools/test.js` (logic in `logic.js`); Android: `node tools/build_www.js`, `npx cap sync android`, then `gradlew assembleDebug` in `android/`.
- `jocadium-app/`: no tests, verify in a browser. Android: `node tools/build_www.js && npx cap sync`, then `gradlew assembleDebug` in `android/` (needs `android/local.properties` with `sdk.dir`), output `android/app/build/outputs/apk/debug/jocadium.apk` (appId `sk.jocadium.app`); iOS in Xcode on a Mac (`npx cap open ios`). Native icons and splash screens: `python tools/make_native_icons.py` (from `icons/icon-512.png`).

## Rules

- **Each app is self-contained in its own folder.** Fonts, libraries, icons, sounds, translations and tools live inside it (fonts in `fonts/` or `vendor/fonts/`, libraries in `vendor/`). Never reference a file outside the app's folder (no `../` out of it, no root-absolute `/…` path) and never share files between apps; if two apps need the same font or library, each gets its own copy with its licence.
- **No runtime requests to third parties**: no Google Fonts, CDNs, analytics or trackers (it would send users' IP addresses to them, which conflicts with GDPR).
- **Respect licences**: only use assets and libraries whose licence allows it, ship their licence files and record them (`jocadium-app/NOTICE`, `*/THIRD-PARTY-NOTICES.md`, `sleep-detective-app/fonts/OFL-*.txt`, `blood-pressure-app/fonts/OFL-*.txt`, `universal-tuner-app/fonts/OFL-*.txt`). Do not copy protected content, names or look of existing games or brands.
- **Privacy / GDPR**: keep user data on the device (localStorage / IndexedDB), collect only what a feature needs, say what is stored, and let users export and fully delete it.
- **Bump the `CACHE` version in the app's `sw.js` on any change** to its files, and add new files needed offline to its `ASSETS` list.
- When changing a PWA, keep its manifest, `icons/` and `sw.js` registration in sync.
- Keep edits small and scoped to one app. Always use full paths from the repo root, because `index.html`, `sw.js` and `tools/test.js` exist in several apps.
- **Security check on every change**: escape untrusted text before `innerHTML` or attributes (`esc()` / `textContent`), no `eval` / `new Function` on data, validate imported, restored and stored data (types, `YYYY-MM-DD` dates, known keys, no `__proto__`), no inline `<script>` or `on…=` handlers (CSP), native: `allowBackup="false"`, non-public components `exported="false"`, minimal permissions. When a change reads external data, add a test with hostile input (e.g. a tampered backup).
- Apps are used mainly on Android phones as installed PWAs: support touch, small screens and offline use.
