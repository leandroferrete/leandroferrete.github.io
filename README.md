# Leandro Ferrete — Portfolio

Portfolio site built with React + Vite + Tailwind (local build).  
Includes the OrbiDash game embedded in the Playground section and GA4 tracking.

## Tech Stack
- Vite + React (TypeScript)
- Tailwind CSS (local build via PostCSS)
- i18next (EN/PT/ES)
- GA4 (gtag)

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
This repo is configured to publish **only `dist/`** using GitHub Actions.

1. GitHub → Settings → Pages
2. Source: **GitHub Actions**
3. Push to `master` (or run the workflow manually)

`CNAME` is copied into `dist/` during deploy for custom domains.

## Project Structure
- `App.tsx`: main layout and UI
- `components/`: UI components and animations
- `public/games/orbidash/`: OrbiDash build (embedded via iframe)
- `i18n.ts`: translations

## Notes
- OrbiDash is hosted from `public/games/orbidash/`.
- GA4 is loaded in `index.html`, events are fired from `App.tsx` and the game via `postMessage`.
