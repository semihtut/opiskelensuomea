import type { MetadataRoute } from "next";
import { allScenarios, allWeeks, allWords } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

// Sitemap on the canonical www host. Submit to Google Search Console AND Bing
// Webmaster Tools (ChatGPT live search is Bing-backed). robots.txt links here.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/program", "/words", "/scenarios", "/about"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const wordEntries: MetadataRoute.Sitemap = allWords().map((word) => ({
    url: absoluteUrl(`/words/${word.slug}`),
    lastModified: word.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const weekEntries: MetadataRoute.Sitemap = allWeeks().flatMap((week) => [
    {
      url: absoluteUrl(`/week/${week.week}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: absoluteUrl(`/week/${week.week}/text`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  const scenarioEntries: MetadataRoute.Sitemap = allScenarios().map((s) => ({
    url: absoluteUrl(`/scenarios/${s.slug}`),
    lastModified: s.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...wordEntries, ...weekEntries, ...scenarioEntries];
}
