# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

GamePad is a **zero-build static PWA**: an installable, offline-capable HTML5 game library. There is no package.json, bundler, transpiler, or test suite. Everything is hand-written vanilla HTML/CSS/JS served as static files. Each game is a single self-contained `games/<id>/index.html` (inline `<style>` + `<script>`, no shared CSS/JS files besides `i18n.js`).

The developer is Slovak-speaking; git commit messages and code comments are often in Slovak.

## Running / developing

Serve the repo root over HTTP (service workers and the manifest require a real origin, not `file://`):

```
python -m http.server 8000     # then open http://localhost:8000
```

There is nothing to build, lint, or test. To verify a change, open the app (or a specific game at `games/<id>/index.html`) in a browser. **When testing, disable the service worker cache** (DevTools → Application → Service Workers → "Update on reload") or you may keep seeing the old cached version.

## Architecture

Three top-level files coordinate the whole app; understanding how they interlock is the key to working here.

- **`index.html`** — the launcher. Holds the `GAMES` array (the single source of truth for which games exist, their id, title/desc translation keys, emoji, tags, hero color, file path, and `isNew` badge). It renders cards, handles search/tag filtering, the language picker, the PWA install banner, and service-worker registration.
- **`i18n.js`** — one large shared file (~530KB) loaded as a plain global script by the launcher (`i18n.js`) and by every game (`../../i18n.js`). It exports globals: `TRANSLATIONS` (per-language string dictionaries), `t(key, vars)` (lookup with `{var}` interpolation, falls back to English then to the raw key), `getLang()`/`setLang()` (persist to `localStorage['gamepad_lang']`), `currentT()`, and `LANGUAGES` (12 locales: en, sk, es, pt, de, fr, it, ru, tr, ja, ko, zh). Games define a local `applyLang()` that assigns `t('someKey')` into their DOM.
- **`sw.js`** — service worker. Precaches an `ASSETS` list (must include every game's `index.html`) under a versioned cache name (`gamepad-v85`). Fetch strategy: **network-first for `.html`/`.js`** (so new games/strings appear without a manual reload), **cache-first for other static assets** (icons). On install it `skipWaiting()`s; the launcher reloads once on `controllerchange` to pick up updates.

Games do not communicate with the launcher at runtime — the launcher just links to each game's `index.html`. Games are otherwise independent: each stores its own high score under its own ad-hoc `localStorage` key (no shared convention — e.g. `clickrush_best`, `bubbleBurstHighScore`, `BEST_KEY`).

## Adding a new game — three coordinated edits

A game is only fully wired up when **all three** of these are done. Missing any one causes bugs (game not listed, missing offline support, or untranslated labels):

1. **`index.html`** — add an entry to the `GAMES` array (there is a commented template line in the array). Use `titleKey`/`descKey` referencing i18n keys, or a literal `title` for names that aren't translated.
2. **`sw.js`** — add `'./games/<id>/index.html'` to the `ASSETS` array **and bump the `CACHE` version** (e.g. `gamepad-v85` → `gamepad-v86`). Bumping the version is what forces clients to re-cache; forgetting it means users keep the stale asset list.
3. **`i18n.js`** — add the title/description keys (and any in-game string keys) **to every language block**, not just `en`. `t()` falls back to English for missing keys, so untranslated locales degrade gracefully but should still be filled in.

**Bump the `sw.js` `CACHE` version on essentially any change** to `index.html`, `i18n.js`, or a game — otherwise returning users may be served the previous cached version.

## Conventions for new games

Match the existing games' structure so the library stays consistent:

- Single self-contained `games/<id>/index.html` with inline styles/scripts. Load i18n with `<script src="../../i18n.js"></script>`.
- Reuse the shared design tokens (dark theme): CSS vars `--bg`, `--bg1`, `--bg2`, `--text`, `--muted`, `--dim`, `--border`, `--border-h`; fonts **DM Sans** (body) and **Syne** (headings/wordmark) from Google Fonts.
- Include a back link (uses the shared `back` key `← Back`) to return to the launcher, and support the shared difficulty keys (`diffEasy`/`diffMedium`/`diffHard`) where relevant.
- Support keyboard **and** touch/swipe input (games are played on mobile as an installed PWA).
- Tags come from a fixed set: `arcade`, `puzzle`, `action`, `strategy`, `memory` (plus occasional `word`). `TAG_CLASS`/`TAG_FILTER`/`TAG_LABEL` maps in `index.html` drive their colors and labels.
