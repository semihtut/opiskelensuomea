# Deployment — Cloudflare Workers + OpenNext

Opiskelen Suomea runs on **Cloudflare Workers** via the **OpenNext adapter**
(`@opennextjs/cloudflare`). NOT Vercel. NOT Cloudflare Pages (`next-on-pages` is deprecated).
Domain + DNS are on **Cloudflare Registrar**; CI is **Workers Builds** (connect the GitHub repo).

> Re-confirm adapter/runtime specifics against the OpenNext + Cloudflare docs before a real
> production deploy — this area moves quickly.

## Why this stack

- Static-first Next.js 15 (App Router) pages → excellent Core Web Vitals (a ranking + GEO factor).
- Workers gives global edge delivery; OpenNext adapts the Next build to the Workers runtime
  (so SSR/route handlers/ISR work, not just static export).

## Packages

```
npm i -D @opennextjs/cloudflare wrangler
```

### Node version

The OpenNext adapter CLI requires **Node 20+**. `wrangler` is pinned to **v3
(≥3.99, supported by `@opennextjs/cloudflare` v1)** so `npm run preview` runs on
Node 20. Upgrading to `wrangler` v4 is fine but requires **Node 22+** — bump the
local/CI Node version first. Verified locally: `opennextjs-cloudflare build`
bundles `.open-next/worker.js`, and `wrangler dev` serves all routes (200) on the
Workers runtime.

## Config files

### `open-next.config.ts` (repo root)
Minimal default config for the Cloudflare adapter; extend (caching, R2 incremental cache) later.

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // incrementalCache: r2IncrementalCache,  // add when ISR/R2 is needed
});
```

### `wrangler.jsonc` (repo root)
`nodejs_compat` is required by the adapter; `compatibility_date` must be **2024-09-23 or later**.

```jsonc
{
  "name": "opiskelensuomea",
  "main": ".open-next/worker.js",
  "compatibility_date": "2024-09-23",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
  // Bindings (KV/R2/D1) added here as features need them.
}
```

### `next.config.ts`
For now disable the Next image optimizer (no Vercel loader on Workers); a Cloudflare Images
loader comes later. Keep `images.unoptimized = true`.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
};

export default nextConfig;
```

## Scripts (`package.json`)

```json
{
  "preview": "opennextjs-cloudflare build && wrangler dev",
  "deploy":  "opennextjs-cloudflare build && wrangler deploy"
}
```

- `npm run preview` — builds with the OpenNext adapter and runs the Worker **locally** on the
  Workers runtime (verify here before shipping). This is the gate for Phase 6: it must build
  and run locally; do **not** deploy from local.
- `npm run deploy` — publishes to Cloudflare (run via Workers Builds CI, not by hand normally).

## Hosting & DNS conventions

- **Canonical host: `https://www.opiskelensuomea.com` (with `www`).** Used in every canonical
  tag, JSON-LD URL, sitemap entry, robots `Sitemap:` line, OG URL, and absolute internal link.
- **301-redirect the bare apex** `opiskelensuomea.com` → `www` with a **Cloudflare Redirect
  Rule** (dashboard → Rules → Redirect Rules). Never serve both hosts (splits SEO/GEO authority).
- TLS + caching managed in the Cloudflare dashboard. Static assets cached at the edge.

## CI — Workers Builds

Connect the GitHub repo in the Cloudflare dashboard (Workers & Pages → Builds). Build command
`npm run deploy` (or the OpenNext build + `wrangler deploy`). Pushes to the default branch
deploy automatically.

## Pre-deploy checklist

- [ ] `npm run build` (Next) and `npm run typecheck` pass.
- [ ] `npm run preview` builds with the OpenNext adapter and runs locally on the Workers runtime.
- [ ] `compatibility_date` ≥ 2024-09-23 and `nodejs_compat` flag set.
- [ ] `images.unoptimized = true` until the Cloudflare Images loader is wired.
- [ ] Apex→www redirect rule in place; canonical host used everywhere.
- [ ] `robots.txt` still allows AI bots; `sitemap.xml` reachable at the www host.
