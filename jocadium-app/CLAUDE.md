# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Jocadium is a **zero-build static PWA**: an installable, offline-capable HTML5 game library. There is no package.json, bundler, transpiler, or test suite. Everything is hand-written vanilla HTML/CSS/JS served as static files. Each game is a single self-contained `games/<id>/index.html` (inline `<style>` + `<script>`, no shared CSS/JS files besides `i18n.js` and `sfx.js`).

The developer is Slovak-speaking; git commit messages and code comments are often in Slovak.

## Running / developing

Jocadium lives in the `jocadium-app/` folder of the `moj-web` repo, next to other independent apps. Serve the `moj-web` repo root over HTTP (service workers and the manifest require a real origin, not `file://`):

```
python -m http.server 8000     # then open http://localhost:8000/jocadium-app/
```

**Everything the app uses stays inside `jocadium-app/`** (fonts in `fonts/`, `i18n.js`, `sfx.js`, icons, tools). Never reference a file outside this folder (no `../` above `jocadium-app/`, no root-absolute `/…` path) and never share files with the other apps in the repo; see the root `CLAUDE.md`.

There is nothing to build, lint, or test. To verify a change, open the app (or a specific game at `games/<id>/index.html`) in a browser. **When testing, disable the service worker cache** (DevTools → Application → Service Workers → "Update on reload") or you may keep seeing the old cached version.

## Native app (Android, iOS)

The same files are also wrapped as a native app with Capacitor (appId `sk.jocadium.app`); `package.json`, `capacitor.config.json`, `android/` and `ios/` exist only for that, the web app still needs no build.

```
node tools/build_www.js && npx cap sync     # copies the app into www/ (without sw.js, tools/, promo) and into the native projects
cd android && gradlew assembleDebug         # → android/app/build/outputs/apk/debug/jocadium.apk (needs android/local.properties with sdk.dir)
npx cap open ios                            # iOS: build in Xcode on a Mac
python tools/make_native_icons.py           # native icons and splash screens from icons/icon-512.png
```

Run `build_www.js` + `npx cap sync` after every change, otherwise the native app keeps the old files. In the native app the launcher does not register the service worker (`NATIVE` in `index.html`); the Android back button is handled by `native.js` (Capacitor App plugin; it does nothing in a browser): in a game it returns to the launcher with `location.replace`, on the launcher it closes the settings page (`window.jocadiumBack`) or minimizes the app. Without that listener Capacitor closes the whole app on back. Android keeps `allowBackup="false"` and asks only for `VIBRATE` (used by one game, no prompt).

## Architecture

Three top-level files coordinate the whole app; understanding how they interlock is the key to working here.

- **`index.html`** — the launcher. Holds the `GAMES` array (the single source of truth for which games exist, their id, title/desc translation keys, emoji, tags, hero color, file path, and `isNew` badge). It renders cards, handles search/tag filtering, the settings page (gear button in the header: language and colour profile), the PWA install banner, and service-worker registration. Colour profiles (`THEMES`, saved in `localStorage['jocadium_theme']`) only change the launcher's CSS variables via `html[data-theme]`; games keep their own palettes. A new profile needs a `html[data-theme="…"]` CSS rule, an entry in `THEMES`, its id in the pre-paint script in `<head>` and a `theme…` key in every language of `i18n.js`. The settings page pushes a history entry, so the browser or Android back button closes it.
- **`i18n.js`** — one large shared file (~530KB) loaded as a plain global script by the launcher (`i18n.js`) and by every game (`../../i18n.js`). It exports globals: `TRANSLATIONS` (per-language string dictionaries), `t(key, vars)` (lookup with `{var}` interpolation, falls back to English then to the raw key), `getLang()`/`setLang()` (persist to `localStorage['gamepad_lang']`), `currentT()`, and `LANGUAGES` (12 locales: en, sk, es, pt, de, fr, it, ru, tr, ja, ko, zh). Games define a local `applyLang()` that assigns `t('someKey')` into their DOM.
- **`sw.js`** — service worker. Precaches an `ASSETS` list (must include every game's `index.html`) under a versioned cache name (`jocadium-v1`). Fetch strategy: **network-first for `.html`/`.js`** (so new games/strings appear without a manual reload), **cache-first for other static assets** (icons). On install it `skipWaiting()`s; the launcher reloads once on `controllerchange` to pick up updates.

Games do not communicate with the launcher at runtime — the launcher just links to each game's `index.html`. Games are otherwise independent: each stores its own high score under its own ad-hoc `localStorage` key (no shared convention — e.g. `clickrush_best`, `bubbleBurstHighScore`, `BEST_KEY`).

## Adding a new game — three coordinated edits

A game is only fully wired up when **all three** of these are done. Missing any one causes bugs (game not listed, missing offline support, or untranslated labels):

1. **`index.html`** — add an entry to the `GAMES` array (there is a commented template line in the array). Use `titleKey`/`descKey` referencing i18n keys, or a literal `title` for names that aren't translated.
   The card icon is an `emoji`, or an `iconSvg` with inline SVG markup (72x72 viewBox, attributes in double quotes so the single-quoted JS string needs no escaping), or an `iconImg` path. Inline SVG is preferred for anything an emoji cannot say on its own: it inherits the page's Syne font, stays sharp at any pixel ratio and adds no file to the offline cache. **No two games may share an icon** — a duplicate emoji makes two different games look like the same game in the grid.
2. **`sw.js`** — add `'./games/<id>/index.html'` to the `ASSETS` array **and bump the `CACHE` version** (e.g. `jocadium-v1` → `jocadium-v2`). Bumping the version is what forces clients to re-cache; forgetting it means users keep the stale asset list.
3. **`i18n.js`** — add the title/description keys (and any in-game string keys) **to every language block**, not just `en`. `t()` falls back to English for missing keys, so untranslated locales degrade gracefully but should still be filled in.

### Order of the `GAMES` array

The array order is the order the cards appear in (filters and search keep it), so it is a
product decision, not a log of when things were added. It is sorted by **estimated
popularity**, most likely to be played first: genre demand first (the classics people search
for by name), then how quickly a card explains itself, then fit for a phone and a short
session, then replayability. A new game goes where it belongs in that order, not at the end.
Real numbers now exist per device: opening a game from its card increments a counter in
`localStorage['gamepad_plays']` (`{id: count}`). Two filter buttons show the whole collection
and differ only in order — **Most played** (`data-tag="played"`, the default) sorts by that
counter and falls back to the array order for everything not played yet, while **All**
(`data-tag="all"`) always shows the array order and never reacts to the counter. The tag
filters keep the array order too. So the array order is what every fresh device sees, and it
stays available under **All** no matter how much the player has played.

**Bump the `sw.js` `CACHE` version on essentially any change** to `index.html`, `i18n.js`, or a game — otherwise returning users may be served the previous cached version.

## Licensing rules — read before adding content

The collection ships `LICENSE` (project rights) and `NOTICE` (third-party material). Keep `NOTICE` accurate; it is the only place a third-party licence obligation can be recorded.

Three rules, all of which the collection currently satisfies:

1. **Nothing third-party gets bundled**, with one exception: the OFL web fonts in `fonts/`, shipped with their licence `fonts/OFL.txt` and recorded in `NOTICE`. No copied SVG, sprite sheet, sound file, other font file, word list, level set or library. If you need a shape, write the function that draws it. The app makes **no outbound requests at all** — since 17 Sep 2026 the fonts live in `fonts/` (OFL, see NOTICE §1) and nothing is fetched from Google. Keep it that way: no CDN, no analytics, no remote asset. When you catch yourself pasting a `<path d="…">` you did not compute, stop.
2. **Never use another company's game name.** Re-implementing a commercial game's *mechanic* is fine — mechanics and rules are not protected. The name is. Give every game its own name, the way the collection already does (Tetris → Block Cascade, Pac-Man → Dot Muncher, Wordle → Five Letters, Yahtzee → Five Dice, Connect Four → Drop Four, Slitherlink → Loop Weaver, Pong → Paddle Duel, Asteroids → Rock Drift, Hill Climb Racing → Slope Rider, Kakuro → Sum Cross, Mastermind → Hueclue, Boggle → Spellweft, Sokoban → Crate Push, Rush Hour → Snarlpark, Bejeweled → Gleamfall). This applies to the game **id / folder name and i18n key prefix** too, not just the displayed title — `games/paddle-duel/` with `pdl*` keys, never `games/pong/` with `pong*` keys. Traditional games with no rights holder — chess, go, backgammon, sudoku, mancala, gomoku — may keep their real names. Being old is not the test: Sokoban is from 1982 and is a registered trademark, which is why `games/sokoban/` became `games/crate-push/`. If one company invented it, it is theirs. And a name being free of trademarks is not enough on its own: a check of all 109 titles against the App Store, Steam and itch.io found that 33 of them were already the exact name of some other game. Two-word English phrases are essentially all taken; coined words are not. Check a new name in the stores **and** in a search engine before you commit to it. The rule covers **descriptions too**: don't name a marked title to explain a genre ("a whack-a-mole game") — describe what the game's own pieces do instead.
3. **Draw your own look, not theirs.** Mechanics are free; the *visual expression* is not (*Tetris Holding v. Xio Interactive*, 2012). So: don't reproduce a character's silhouette, don't copy a game's colour-to-piece mapping or its scoring table, don't trace a maze or a level layout. Pick shapes and palettes that are yours — `dot-muncher`'s hexagonal drones and `block-cascade`'s piece colours are deliberately unlike the originals, and that is not an accident to be "fixed".

## Conventions for new games

Match the existing games' structure so the library stays consistent:

- Single self-contained `games/<id>/index.html` with inline styles/scripts. Load i18n with `<script src="../../i18n.js"></script>`.
- Reuse the shared design tokens (dark theme): CSS vars `--bg`, `--bg1`, `--bg2`, `--text`, `--muted`, `--dim`, `--border`, `--border-h`; fonts **DM Sans** (body) and **Syne** (headings/wordmark), loaded with `<link href="../../fonts/fonts.css" rel="stylesheet">`.
- Copy the `<meta http-equiv="Content-Security-Policy" …>` line from any existing game, right after `<meta charset>`. It is identical in all 112 pages; `tools/`-free regeneration is not a thing, so just copy it. It forbids outbound connections (`connect-src 'none'`), so a game that needs to *fetch* anything is a game that does not belong here. Canvas text in a font no DOM element uses is never downloaded — call `document.fonts.load("500 20px 'DM Mono'")` yourself, the way `games/type-rush/` does.
- Include a back link (uses the shared `back` key `← Back`) to return to the launcher, and support the shared difficulty keys (`diffEasy`/`diffMedium`/`diffHard`) where relevant.
- Support keyboard **and** touch/swipe input (games are played on mobile as an installed PWA).
- Load `<script src="../../native.js"></script>` right after `sfx.js` (Android back button in the native app returns to the launcher; all games do this).
- Load `<script src="../../sfx.js"></script>` after i18n and give the game 3-5 sounds with `SFX.play('<meaning>')` (`SFX.names` lists them; `SFX.tone`/`SFX.noise` are there when a game needs its own pitches). **Never add an audio file** - every sound in the collection is synthesised, which is what keeps it unlicensed. The mute button mounts itself next to `#back-btn`, so don't build one. Put the call **after** the function's guard clauses: a refused move must stay silent.
- Tags come from a fixed set: `arcade`, `puzzle`, `action`, `strategy`, `memory` (plus occasional `word`). `TAG_CLASS`/`TAG_FILTER`/`TAG_LABEL` maps in `index.html` drive their colors and labels.
