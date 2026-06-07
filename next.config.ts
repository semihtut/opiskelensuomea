import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the file-tracing root to this project so a stray parent-directory
  // lockfile (~/package-lock.json) doesn't get picked up.
  outputFileTracingRoot: __dirname,
  // Hosted on Vercel (native Next.js): image optimization works out of the box.
};

export default nextConfig;
