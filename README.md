# Santhosh Ganesan Portfolio

This repository contains the recreated portfolio website for Santhosh Ganesan.

The project uses:
- React
- TypeScript
- Vite
- TanStack React Start / TanStack Router
- Tailwind CSS
- Cloudflare-compatible build configuration

## Getting started

### Install dependencies

```bash
cd d:\Personal\website
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- This project is not a plain static GitHub Pages app in its current form.
- The build output includes both `dist/client` and `dist/server`, so it is better suited to platforms like Cloudflare Pages / Cloudflare Workers.
- If you want to host it on GitHub Pages, the app must be converted to a static-only build first.

## Project structure

- `src/` — application source code
- `public/` — static assets
- `vite.config.ts` — Vite configuration
- `tsconfig.json` — TypeScript configuration
- `wrangler.jsonc` — Cloudflare Workers configuration

## Deployment

This project currently targets a Cloudflare-compatible deployment flow. For Cloudflare Pages or Workers, use the standard Cloudflare setup after pushing the repo to GitHub.

If you want, I can help you add a deploy script and Cloudflare Pages configuration next.
