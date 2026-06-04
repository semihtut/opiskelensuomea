import type { Metadata } from "next";
import type { Word } from "./content-types";
import { SITE, absoluteUrl } from "./site";

/**
 * Build page metadata with an explicit canonical on the www host. Use for every
 * public page so canonical/openGraph URLs never split SEO/GEO authority.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  modifiedTime?: string;
}): Metadata {
  const canonical = absoluteUrl(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical,
      siteName: SITE.name,
      locale: "fi_FI",
      type: opts.type ?? "website",
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
  };
}

/** Metadata for a word page, derived from the entry. */
export function wordMetadata(word: Word): Metadata {
  return pageMetadata({
    title: `${word.fi} — ”${word.en}” suomeksi`,
    description: `${word.fi}: ${word.en}. ${word.selitys} Taivutus, johdokset ja esimerkit (A2–B2).`,
    path: `/words/${word.slug}`,
    type: "article",
    modifiedTime: word.updatedAt,
  });
}
