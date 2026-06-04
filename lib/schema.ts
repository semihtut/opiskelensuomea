import type { FaqItem } from "@/components/Faq";
import type { Week, Word } from "./content-types";
import { SITE, absoluteUrl } from "./site";

/**
 * JSON-LD builders. Every `url`/`@id` uses the canonical www host (CLAUDE.md).
 * Builders return plain objects; render them via <JsonLd data={...} />.
 */

const ORG_ID = `${SITE.url}/#organization`;
const PERSON_ID = `${SITE.url}/#author`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.author.name,
    url: SITE.author.url,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.locale,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Word page: a LearningResource that is `about` a DefinedTerm. Carries the
 * author/publisher and datePublished/dateModified (synced to updatedAt).
 */
export function wordSchema(word: Word) {
  const url = absoluteUrl(`/words/${word.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": url,
    url,
    name: `${word.fi} — ${word.en}`,
    inLanguage: "fi",
    learningResourceType: "vocabulary entry",
    educationalLevel: word.level,
    datePublished: word.updatedAt,
    dateModified: word.updatedAt,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    about: {
      "@type": "DefinedTerm",
      name: word.fi,
      description: `${word.en} — ${word.selitys}`,
      inLanguage: "fi",
      url,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Suomen sanat — Opiskelen Suomea",
        url: absoluteUrl("/words"),
      },
    },
  };
}

export function itemListSchema(words: Word[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Suomen sanat",
    numberOfItems: words.length,
    itemListElement: words.map((word, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/words/${word.slug}`),
      name: word.fi,
    })),
  };
}

export function courseSchema(opts: {
  weeks: number;
  syllabus: { phase: string; kuvaus: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Suomi 90",
    description:
      "13 viikon ohjelma, joka kattaa noin 1000 yleisintä suomen sanaa kolmessa vaiheessa.",
    url: absoluteUrl("/program"),
    inLanguage: "fi",
    provider: { "@id": ORG_ID },
    educationalLevel: "A2–B1",
    syllabusSections: opts.syllabus.map((s) => ({
      "@type": "Syllabus",
      name: s.phase,
      description: s.kuvaus,
    })),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P13W",
    },
  };
}

export function readingTextSchema(week: Week) {
  const url = absoluteUrl(`/week/${week.week}/text`);
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    "@id": url,
    url,
    headline: week.teksti.title,
    inLanguage: "fi",
    educationalLevel: week.teksti.level,
    learningResourceType: "reading text",
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
  };
}
