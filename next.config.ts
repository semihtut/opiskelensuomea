import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the file-tracing root to this project so a stray parent-directory
  // lockfile (~/package-lock.json) doesn't get picked up.
  outputFileTracingRoot: __dirname,
  // Cloudflare Images loader is wired in a later phase; until then the Next
  // image optimizer (Vercel-only loader) is disabled. See docs/DEPLOYMENT.md.
  images: { unoptimized: true },
};

export default nextConfig;
