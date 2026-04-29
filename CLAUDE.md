# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static resume website for Emil Shanayev (DevOps & Backend Engineer), styled with Tailwind CSS 3.x and deployed to GitHub Pages via GitHub Actions.

## Commands

```bash
# Local dev server (watches for changes)
hugo server

# Compile Tailwind CSS only
npm run build:css

# Full production build (CSS + Hugo minified)
npm run build
```

CSS must be compiled before Hugo can use it — `npm run build` handles this in the correct order.

## Architecture

**Hugo + PostCSS pipeline:**

- `assets/css/tailwind.css` — Tailwind entry point (source); processed by PostCSS → `assets/css/main.css` (generated, not committed)
- `tailwind.config.js` — content glob scans `**/*.{html,js,ts,jsx,md,go,rs}`; dark mode via `class`; custom color palette under `primary`, `secondary`, `dark`, `bg`
- `layouts/` — Hugo HTML templates (currently `_default/` only)
- `content/` — Markdown pages; `_index.md` is the homepage resume content (written in Russian)
- `config.toml` — Hugo site config (author, description, menu entries)

**CI/CD (`.github/workflows/`):**

- `ci.yml` — runs on PRs to `main`: installs deps, lints Markdown (`markdownlint`) and generated HTML (`htmlhint`), then builds
- `deploy.yml` — runs on push to `main`: builds site and pushes `public/` to `gh-pages` branch via `peaceiris/actions-gh-pages`

**Utility directories:**

- `core/user/` — user identity and preference notes consumed by AI tooling
- `templates/` — blank identity/preference templates
- `.pi/` — pi-agent settings (repo URL reference)

## Style Preferences

- 2-space indentation
- Descriptive variable names, no trailing whitespace
- TypeScript preferred for any scripting; REST over GraphQL; PostgreSQL/Redis for data
