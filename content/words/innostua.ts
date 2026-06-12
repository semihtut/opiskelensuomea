import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem innostu-.
// Present minä innostun, hän innostuu; imperfect minä innostuin; NUT innostunut. Governs elative.
const innostua: Word = {
  fi: "innostua",
  slug: "innostua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to get excited, become enthusiastic",
  selitys:
    "Innostua jostakin = alkaa tuntea iloista intoa: 'innostua uudesta harrastuksesta'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Hallitsee elatiivia ('innostua jostakin'). Vrt. innostus, innostaa, into.",
  kuva: { alt: "innostua – alkaa tuntea iloista intoa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo innostu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "innostun", merkitys: "I get excited" },
      { sija: "imperfekti (minä)", muoto: "innostuin", merkitys: "I got excited" },
      { sija: "NUT-partisiippi", muoto: "innostunut", merkitys: "(have) gotten excited" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Hallitsee elatiivia: 'innostua jostakin' = to get excited about sth. Transitiivinen pari innostaa = to inspire. Vrt. innostus = enthusiasm, innokas = eager.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "innostun" },
          { label: "sinä", form: "innostut" },
          { label: "hän", form: "innostuu" },
          { label: "me", form: "innostumme" },
          { label: "te", form: "innostutte" },
          { label: "he", form: "innostuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en innostu" },
          { label: "hän", form: "ei innostu" },
          { label: "he", form: "eivät innostu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "innostuin" },
          { label: "sinä", form: "innostuit" },
          { label: "hän", form: "innostui" },
          { label: "me", form: "innostuimme" },
          { label: "te", form: "innostuitte" },
          { label: "he", form: "innostuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen innostunut" },
          { label: "hän", form: "on innostunut" },
          { label: "he", form: "ovat innostuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "innostu!" },
          { label: "te", form: "innostukaa!" },
          { label: "kielto (sinä)", form: "älä innostu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "innostus",
      en: "enthusiasm",
      taso: "B1",
      esim: { fi: "Innostus näkyi heti.", en: "The enthusiasm showed right away." },
    },
    {
      fi: "innostava",
      en: "inspiring",
      taso: "B2",
      esim: { fi: "Se oli innostava puhe.", en: "It was an inspiring speech." },
    },
  ],
  synonyymit: [
    { fi: "ihastua", en: "to take a liking to" },
    { fi: "kiinnostua", en: "to become interested" },
  ],
  esimerkit: {
    A2: { fi: "Innostuin uudesta lajista.", en: "I got excited about the new sport." },
    B1: { fi: "Lapset innostuivat retkestä.", en: "The children got excited about the trip." },
    B2: {
      fi: "Hän innostui aiheesta niin, että alkoi tutkia sitä vapaa-ajallaan.",
      en: "She got so excited about the topic that she began researching it in her free time.",
    },
  },
  updatedAt: "2026-06-07",
};

export default innostua;
