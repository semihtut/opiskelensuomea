# Deployment — Vercel (domain + DNS on Cloudflare)

Opiskelen Suomea is hosted on **Vercel** (the native Next.js platform). The domain stays
registered at **Cloudflare Registrar** and DNS is managed in Cloudflare; only the records
point to Vercel.

> History: the site originally ran on **Cloudflare Workers** via the **OpenNext adapter**.
> It was migrated to Vercel on **2026-06-07** because the free Workers plan's ~10ms CPU limit
> caused intermittent **error 1102** ("render edemiyor") on cold/uncached page renders. On
> Vercel the fully-static ~970-page site is served from the edge CDN with no per-request
> function/CPU, so that error class is gone.

## Why this stack

- Static-first Next.js 15 (App Router) → excellent Core Web Vitals (a ranking + GEO factor).
- Vercel serves prerendered (SSG) pages directly from its global CDN — zero per-request
  compute for the static content that makes up almost the whole site.
- Native Next.js: no adapter, no `wrangler`/OpenNext config, image optimization out of the box.

## Deploying

There is **no deploy script** — Vercel deploys automatically:

1. The GitHub repo is connected to a Vercel project.
2. Every push to `main` triggers a production build + deploy; other branches get preview deploys.
3. Build command `next build`, detected automatically (Next.js preset).

Local checks before pushing:

```
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # next build (must succeed)
npm run start       # optionally serve the production build locally
```

## Domain & DNS (Cloudflare Registrar → Vercel)

The domain is registered at **Cloudflare Registrar**, so it must keep **Cloudflare
nameservers** — you cannot move DNS away. Instead, point the records at Vercel:

- **`www`** → `CNAME` → the value Vercel shows for the project
  (e.g. `<hash>.vercel-dns-017.com`), **Proxy: DNS only (grey cloud)**. Proxied/orange breaks
  Vercel's SSL and domain verification.
- The old Workers **Custom Domain** for `www` (a "Worker"-type DNS record) must be removed from
  the Worker first: **Workers & Pages → the worker → Settings → Domains & Routes → remove
  `www.opiskelensuomea.com`**. Only then can the Vercel CNAME be added.
- **Canonical host is `https://www.opiskelensuomea.com` (with `www`)** — see CLAUDE.md. The bare
  apex (`opiskelensuomea.com`) 301-redirects to `www` via a **Cloudflare Redirect Rule** (Rules →
  Redirect Rules). The apex DNS record stays proxied (orange) so the Redirect Rule applies; `www`
  is DNS-only and goes straight to Vercel.

Vercel issues and renews TLS certificates automatically once the CNAME verifies.

## SEO essentials (unchanged by the host)

- `public/robots.txt` keeps AI/search bots allowed and links the sitemap; use the canonical host
  `www` everywhere (canonical tags, JSON-LD `@id`/`url`, sitemap, OG URLs).
- `app/sitemap.ts` generates the sitemap; submit it in Google Search Console and Bing.

## Cleanup notes (post-migration)

- The old Cloudflare Worker (project `opiskelensuomea`) and any apex Worker **route** can be
  removed once Vercel is confirmed stable — but first make sure the **apex → www 301** is a
  Cloudflare **Redirect Rule**, not handled by the Worker.
- The earlier "cache everything" Cloudflare **Cache Rule** is now moot for `www` (DNS-only,
  bypasses Cloudflare); it only affects the proxied apex. Harmless; can be left or removed.
- `@opennextjs/cloudflare`, `wrangler`, `open-next.config.ts` and `wrangler.jsonc` have been
  removed from the repo.

## Pre-deploy checklist

- [ ] `npm run build` and `npm run typecheck` pass locally.
- [ ] `npm run lint` clean.
- [ ] Canonical host (`www`) used everywhere; apex→www Redirect Rule in place.
- [ ] `robots.txt` still allows AI/search bots; `sitemap.xml` reachable at the www host.
