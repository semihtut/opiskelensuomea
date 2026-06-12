import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation, stem matkusta-.
// Present matkustan, past matkustin, past participle matkustanut.
const matkustaa: Word = {
  fi: "matkustaa",
  slug: "matkustaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to travel",
  selitys:
    "Siirtyä paikasta toiseen kauemmas: 'matkustaa junalla'. Tyyppi 1 (-aa), ei astevaihtelua (st säilyy), vartalo matkusta-. Johdettu sanasta matka. Vrt. matkustaja (traveller), matka (journey).",
  kuva: { alt: "matkustaa – siirtyä paikasta toiseen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); ei astevaihtelua; vartalo matkusta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "matkustan", merkitys: "I travel" },
      { sija: "imperfekti (minä)", muoto: "matkustin", merkitys: "I travelled" },
      { sija: "NUT-partisiippi", muoto: "matkustanut", merkitys: "(have) travelled" },
    ],
    huom:
      "Kohde illatiivissa: 'matkustaa Turkuun'. Väline adessiivissa: 'matkustaa junalla'. Vrt. matkustaja = passenger/traveller, matkailu = tourism.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "matkustan" },
          { label: "sinä", form: "matkustat" },
          { label: "hän", form: "matkustaa" },
          { label: "me", form: "matkustamme" },
          { label: "te", form: "matkustatte" },
          { label: "he", form: "matkustavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en matkusta" },
          { label: "hän", form: "ei matkusta" },
          { label: "he", form: "eivät matkusta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "matkustin" },
          { label: "sinä", form: "matkustit" },
          { label: "hän", form: "matkusti" },
          { label: "me", form: "matkustimme" },
          { label: "te", form: "matkustitte" },
          { label: "he", form: "matkustivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen matkustanut" },
          { label: "hän", form: "on matkustanut" },
          { label: "he", form: "ovat matkustaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "matkusta!" },
          { label: "te", form: "matkustakaa!" },
          { label: "kielto (sinä)", form: "älä matkusta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "matkustaja",
      en: "passenger, traveller",
      taso: "B1",
      esim: { fi: "Juna oli täynnä matkustajia.", en: "The train was full of passengers." },
    },
    {
      fi: "matkustaminen",
      en: "travelling",
      taso: "B1",
      esim: { fi: "Pidän matkustamisesta.", en: "I like travelling." },
    },
    {
      fi: "liikematka",
      en: "business trip",
      taso: "B2",
      esim: { fi: "Hän on liikematkalla.", en: "He is on a business trip." },
    },
  ],
  synonyymit: [
    { fi: "matkailla", en: "to travel around, tour" },
    { fi: "reissata", en: "to travel (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Matkustan junalla Helsinkiin.", en: "I'm travelling to Helsinki by train." },
    B1: { fi: "Haluan matkustaa ympäri maailmaa.", en: "I want to travel around the world." },
    B2: {
      fi: "Nuorena hän matkusti paljon ja oppi monta kieltä.",
      en: "When young, he travelled a lot and learned many languages.",
    },
  },
  updatedAt: "2026-06-06",
};

export default matkustaa;
