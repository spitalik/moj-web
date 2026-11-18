# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`moj-web` is a collection of **independent, zero-build static PWAs**, each in its own top-level folder. There is no package.json, bundler or transpiler anywhere: everything is hand-written vanilla HTML/CSS/JS served as static files. The repo is published as-is on GitHub Pages, so each app lives at `https://spitalik.github.io/moj-web/<folder>/`.

| Folder | App | Notes |
|---|---|---|
| `jocadium/` | **Jocadium**: HTML5 game library (formerly GamePad), 12 languages | Has its own detailed [jocadium/CLAUDE.md](jocadium/CLAUDE.md); read it before touching games |
| `math/` | **Matematika krok za krokom**: lessons and generated exercises, 12 languages | Lazy-loaded grade files + generated index; validator runs in CI |
| `phys/` | **Fyzika krok za krokom**: same architecture as `math/` | Curriculum outline in `phys/osnova-fyziky.md` |
| `juro/` | **Juro**: tools for lawyers (Slovak only) | See [juro/README.md](juro/README.md) |
| `sleep-detective/` | **Sleep Detective**: sleep diary + night sound recording (Slovak only) | Single `index.html` + `sound.js` (snore/noise detector) |

The root `index.html` is only a placeholder link page. Root `tools/` holds old one-off Python scripts for a former `gamepad/` layout that no longer exists; they are not used by any current app.

**Every app is fully self-contained in its own folder** and must stay that way: its fonts, libraries, icons, sounds, translations and tools live inside that folder (fonts in `fonts/` or `vendor/fonts/`, libraries in `vendor/`). Never reference a file outside the app's folder (no `../` out of it, no root-absolute `/…` paths, nothing from the repo root) and never share files between apps. If two apps need the same font or library, each gets its own copy, together with its licence file. Each app has its own `index.html`, `sw.js`, manifest, `icons/` and (where needed) `tools/`. Always reference files by their full path from the repo root, because names like `index.html`, `sw.js` and `tools/test.js` exist in several apps.

The developer is Slovak-speaking: UI texts, code comments and commit messages are mostly in Slovak.

## Running / developing

Serve the repo root over HTTP (service workers and manifests need a real origin, not `file://`):

```
python -m http.server 8000     # then open http://localhost:8000/<folder>/
```

`.claude/launch.json` defines this server as `static` for the Claude browser preview.

**When testing, bypass the service worker cache** (DevTools → Application → Service Workers → "Update on reload", or unregister the worker), otherwise you may see an old cached version.

### Checks per app (run from the app's folder)

- `math/`: `node tools/validate.js` (content, generators, translations; `--lang <code>` for one language). After changing lessons or translations run `node tools/index_build.js` (or `tools/i18n_build.js`, which calls it); `validate.js` fails if the index is stale. CI runs the validator per language: `.github/workflows/math-validate.yml`.
- `phys/`: `node tools/validate.js` and `node tools/index_build.js`, same as `math/`.
- `juro/`: `node tools/test.js`.
- `sleep-detective/`: `node tools/test.js` runs the detector tests (`sound.js` on synthetic sound) and then `tools/test-app.js`, a scenario test of the whole `index.html` with a fake DOM, clock, microphone and IndexedDB. Add a scenario there for every new feature. `tools/zaloha-test-7dni.json` is a sample backup for testing "Obnoviť zo zálohy".
- `jocadium/`: no tests; verify in the browser (see its CLAUDE.md).

## Rules that apply to every app

- **Bump the `CACHE` version in that app's `sw.js` on essentially any change** to its files (for example `sleep-detective-v17` → `-v18`). Without it, returning users keep getting the cached old version. New files the app needs offline must also be added to the `ASSETS` list in `sw.js`.
- **Licences, GDPR and other law must not be violated.**
  - Only use libraries, fonts, icons, sounds and images whose licence allows it, and ship the required licence/attribution files. Existing records: `jocadium/NOTICE`, `math/THIRD-PARTY-NOTICES.md`, `phys/THIRD-PARTY-NOTICES.md`, `juro/THIRD-PARTY-NOTICES.md`, `sleep-detective/fonts/OFL-*.txt`. Every app has its own `LICENSE`.
  - Do not copy protected content, names or look of existing games or brands.
  - **Nothing may be loaded from third-party servers at runtime** (no Google Fonts, CDNs, analytics or trackers), because that sends the user's IP address to the third party. Bundle fonts and libraries inside the app (fonts as `fonts/*.woff2` + `fonts/fonts.css`, libraries in `vendor/`).
  - Keep user data on the device (localStorage / IndexedDB), collect only what the feature needs, tell the user what is stored, and let them export and fully delete it. This matters most for `sleep-detective/`, which records audio in the bedroom and stores health-related data. Its "Ochrana súkromia" screen (`openPrivacy()` in `sleep-detective/index.html`) lists what is stored and for how long: update it whenever that changes.
- Apps are used mainly on Android phones as installed PWAs: support touch, small screens and offline use.
