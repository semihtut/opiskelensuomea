import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, NO gradation, stem tutki-.
// Present minä tutkin, hän tutkii; imperfect minä tutkin, hän tutki; NUT participle tutkinut.
const tutkia: Word = {
  fi: "tutkia",
  slug: "tutkia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to research, investigate, examine, explore",
  selitys:
    "Selvittää jotakin huolellisesti, tehdä tutkimusta: 'tutkia ilmiötä'. Tyyppi 1 (-ia), ei astevaihtelua (tk säilyy); vartalo tutki-. Vrt. tutkimus (research), tutkija (researcher), tutkinto (degree).",
  kuva: { emoji: "🔬", alt: "tutkia – selvittää jotakin huolellisesti" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia); ei astevaihtelua; vartalo tutki-",
    muodot: [
      { sija: "preesens (minä)", muoto: "tutkin", merkitys: "I research" },
      { sija: "imperfekti (minä)", muoto: "tutkin", merkitys: "I researched" },
      { sija: "NUT-partisiippi", muoto: "tutkinut", merkitys: "(have) researched" },
    ],
    huom:
      "HUOM: minä-muoto on sama preesensissä ja imperfektissä (tutkin); vain hän erottaa ne (tutkii ↔ tutki). Ei astevaihtelua. Kohde partitiivissa: 'tutkia asiaa'. Vrt. tutkimus = research.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tutkin" },
          { label: "sinä", form: "tutkit" },
          { label: "hän", form: "tutkii" },
          { label: "me", form: "tutkimme" },
          { label: "te", form: "tutkitte" },
          { label: "he", form: "tutkivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tutki" },
          { label: "hän", form: "ei tutki" },
          { label: "he", form: "eivät tutki" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tutkin" },
          { label: "sinä", form: "tutkit" },
          { label: "hän", form: "tutki" },
          { label: "me", form: "tutkimme" },
          { label: "te", form: "tutkitte" },
          { label: "he", form: "tutkivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tutkinut" },
          { label: "hän", form: "on tutkinut" },
          { label: "he", form: "ovat tutkineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tutki!" },
          { label: "te", form: "tutkikaa!" },
          { label: "kielto (sinä)", form: "älä tutki" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tutkimus",
      en: "research, study",
      taso: "B1",
      esim: { fi: "Tutkimus julkaistiin viime kuussa.", en: "The study was published last month." },
    },
    {
      fi: "tutkija",
      en: "researcher",
      taso: "B1",
      esim: { fi: "Tutkija esitteli tuloksensa.", en: "The researcher presented her results." },
    },
    {
      fi: "tutkimusmatka",
      en: "expedition, research trip",
      taso: "B2",
      esim: { fi: "He lähtivät tutkimusmatkalle Arktikselle.", en: "They set off on an expedition to the Arctic." },
    },
  ],
  synonyymit: [
    { fi: "selvittää", en: "to find out, clarify" },
    { fi: "tarkastella", en: "to examine, look into" },
  ],
  esimerkit: {
    A2: { fi: "Lääkäri tutkii potilasta.", en: "The doctor examines the patient." },
    B1: { fi: "Tutkin asiaa tarkemmin huomenna.", en: "I'll look into the matter more closely tomorrow." },
    B2: {
      fi: "Tutkijat tutkivat, miten ilmastonmuutos vaikuttaa metsiin.",
      en: "Researchers study how climate change affects forests.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tutkia;
