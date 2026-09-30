# Dagger & Comb — Barbershop & Tattoo Studio

Marketing site for Dagger & Comb, a barbershop and tattoo studio in Wicker Park, Chicago.

Built with Next.js 16, React 19, Tailwind CSS 4 and shadcn/ui. Single-page experience with section navigation, online booking form, service menu, artist profiles and a gallery.

## Local development

```bash
bun install        # or npm install
bun run dev        # dev server on http://localhost:3000
```

## Production build

```bash
bun run build      # production build
bun run start      # serve the build on http://localhost:3000
```

## Deploying

The repo is deployment-ready with zero code changes:

### Netlify
1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub → pick this repo**.
3. Netlify auto-detects Next.js (settings live in `netlify.toml`). Hit **Deploy**.
4. Every push to `main` redeploys automatically.

### Vercel
1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo → Deploy (framework auto-detected).

## Project structure

```
src/
  app/            # layout + single-page app entry
  components/
    site/         # Header, Hero, Services, Gallery, Team, Booking, Footer, ...
    ui/           # shadcn/ui primitives
  lib/brand.ts    # brand constants (name, address, phone, hours, socials)
public/
  images/         # all photography (local, no external dependencies)
```
