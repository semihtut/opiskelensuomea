import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// OpenNext → Cloudflare Workers adapter config. Minimal defaults for now;
// add an R2 incremental cache / KV queue here when ISR is needed.
// See docs/DEPLOYMENT.md.
export default defineCloudflareConfig({});
