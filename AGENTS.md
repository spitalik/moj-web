# AGENTS.md — Agent instructions for this repository

Purpose
- Short, actionable guidance for AI coding agents working on this repository.

Quick summary
- This repo is a collection of static web games and PWAs. There is no single build system; projects are mostly static HTML/CSS/JS.
- To preview locally, serve the repo over HTTP (examples below). Service workers and PWAs require `http://localhost` or HTTPS to work.

Quick start (preview)
- From the repo root run: `python -m http.server 8000` and open `http://localhost:8000` in a browser.
- Alternatively use VS Code Live Server or any static file server.

Key files and example entry points (link, don't embed)
- Project README: [README.md](README.md)
- Root index pages: [index.html](index.html), [pexeso.html](pexeso.html), [piskvorky.html](piskvorky.html), [sudoku.html](sudoku.html)
- PWAs and service workers:
  - [clickrush-pwa/clickrush/index.html](clickrush-pwa/clickrush/index.html)
  - [clickrush-pwa/clickrush/manifest.json](clickrush-pwa/clickrush/manifest.json)
  - [clickrush-pwa/clickrush/sw.js](clickrush-pwa/clickrush/sw.js)
  - [pexeso-pwa/pexeso/index.html](pexeso-pwa/pexeso/index.html)
  - [pexeso-pwa/pexeso/manifest.json](pexeso-pwa/pexeso/manifest.json)
  - [pexeso-pwa/pexeso/sw.js](pexeso-pwa/pexeso/sw.js)
  - [gamepad/gamepad/index.html](gamepad/gamepad/index.html)
  - [gamepad/gamepad/manifest.json](gamepad/gamepad/manifest.json)
  - [gamepad/gamepad/sw.js](gamepad/gamepad/sw.js)
- Subproject README: [dungeon-miner/README.md](dungeon-miner/README.md)
- Other notable entry points: [deepseek/index.html](deepseek/index.html)

Conventions and patterns
- Projects are self-contained: many nested `games/` folders each with their own `index.html`.
- PWAs include `manifest.json` + `sw.js` and sometimes `icons/`.
- No centralized package manager or test runner detected (no `package.json` / `Makefile`).

Agent best-practices
- Prefer small, focused edits and PRs scoped to a single game or PWA.
- Always test changes by running a local static server (see Quick start) — service workers require `localhost`/HTTPS.
- Ignore virtualenv and editor folders when searching (e.g., `.venv/`, workspace settings).
- When changing a PWA, update its `manifest.json` and `icons/` alongside HTML/JS changes.

**Copilot guidance**
- **Purpose:** Give `copilot` quick, repo-aware instructions for editing and previewing static games and PWAs.
- **Preview locally:** Run `python -m http.server 8000` from the repo root and open `http://localhost:8000`.
- **PWA edits:** When modifying a PWA, update the `manifest.json` and `icons/` in the same folder and ensure the service worker `sw.js` path matches the registration in that `index.html`.
- **Service-worker note:** Service workers cache aggressively; unregister existing SWs in the browser or use an unregistered-dev SW when testing to avoid stale assets.
- **Folder selection:** There are duplicate/parallel folders (e.g., `gamepad/` vs `gamepad202606/`) — confirm which copy is authoritative before editing.
- **No build/test runner:** There is no centralized build or test system; validate changes manually in a browser.

Potential pitfalls
- Multiple files with the same name in different subfolders — always reference full path when editing.
- Some features (service workers, push) cannot be fully validated without a browser served over HTTP/HTTPS.

Suggested next agent customizations
- `create-skill run-static-server` — skill to start a local static server and open a URL for quick preview.
- `create-instruction gamepad-agent` — per-subproject instructions for `gamepad/` to encode testing and PWA specifics.
- `create-skill pwa-checker` — automated checks that validate `manifest.json` presence and `sw.js` registration for each PWA.

If you want, I can now create the `create-skill run-static-server` or add per-project instruction stubs.
