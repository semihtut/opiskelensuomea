import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation, stem vastaa-.
// Present vastaan, past vastasin, past participle vastannut. Governs illative (vastata johonkin).
const vastata: Word = {
  fi: "vastata",
  slug: "vastata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to answer, to reply; to be responsible for",
  selitys:
    "Antaa vastaus tai olla vastuussa: 'vastaan kysymykseen' (illatiivi) = I answer the question. Tyyppi 4 (-ata): vastata → vastaan. Vrt. kysyä (ask), vastaus (answer).",
  kuva: { emoji: "↩️", alt: "vastata – antaa vastaus" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo vastaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "vastaan", merkitys: "I answer" },
      { sija: "imperfekti (minä)", muoto: "vastasin", merkitys: "I answered" },
      { sija: "NUT-partisiippi", muoto: "vastannut", merkitys: "(have) answered" },
    ],
    huom:
      "Kysymykseen vastataan illatiivissa: 'vastaan kysymykseen', 'vastaan puhelimeen'. Merkitys 'olla vastuussa': 'vastaan projektista' (elatiivi). Vrt. vastaus = answer, vastuu = responsibility.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vastaan" },
          { label: "sinä", form: "vastaat" },
          { label: "hän", form: "vastaa" },
          { label: "me", form: "vastaamme" },
          { label: "te", form: "vastaatte" },
          { label: "he", form: "vastaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vastaa" },
          { label: "hän", form: "ei vastaa" },
          { label: "he", form: "eivät vastaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vastasin" },
          { label: "sinä", form: "vastasit" },
          { label: "hän", form: "vastasi" },
          { label: "me", form: "vastasimme" },
          { label: "te", form: "vastasitte" },
          { label: "he", form: "vastasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vastannut" },
          { label: "hän", form: "on vastannut" },
          { label: "he", form: "ovat vastanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vastaa!" },
          { label: "te", form: "vastatkaa!" },
          { label: "kielto (sinä)", form: "älä vastaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastaus",
      en: "answer, reply",
      taso: "A2",
      esim: { fi: "Sain vastauksen heti.", en: "I got an answer right away." },
    },
    {
      fi: "vastuu",
      en: "responsibility",
      taso: "B1",
      esim: { fi: "Otan vastuun virheestä.", en: "I take responsibility for the mistake." },
    },
    {
      fi: "vastaava",
      en: "corresponding; person in charge",
      taso: "B2",
      esim: { fi: "Hän on vastaava johtaja.", en: "She is the managing director." },
    },
  ],
  synonyymit: [
    { fi: "reagoida", en: "to react, respond" },
    { fi: "olla vastuussa", en: "to be responsible" },
  ],
  esimerkit: {
    A2: { fi: "Vastaa kysymykseen suomeksi.", en: "Answer the question in Finnish." },
    B1: { fi: "Kukaan ei vastannut puhelimeen.", en: "Nobody answered the phone." },
    B2: {
      fi: "Esimies vastaa siitä, että tiimi saavuttaa tavoitteensa.",
      en: "The manager is responsible for the team reaching its goals.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vastata;
