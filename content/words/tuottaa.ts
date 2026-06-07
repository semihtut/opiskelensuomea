import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem tuotta- ~ tuota-.
// Present minä tuotan, hän tuottaa; imperfect minä tuotin; NUT tuottanut.
const tuottaa: Word = {
  fi: "tuottaa",
  slug: "tuottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to produce, yield; to cause",
  selitys:
    "Saada aikaan tai valmistaa jotakin: 'tuottaa tavaroita', 'tuottaa iloa'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (tuotan). Johdettu sanasta tuote. Vrt. tuote, tuotanto, tuottaja, tuottava.",
  kuva: { emoji: "🏭", alt: "tuottaa – saada aikaan tai valmistaa jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (tuota- ~ tuotta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tuotan", merkitys: "I produce" },
      { sija: "imperfekti (minä)", muoto: "tuotin", merkitys: "I produced" },
      { sija: "NUT-partisiippi", muoto: "tuottanut", merkitys: "(have) produced" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva tuotta- (tuottaa, tuottanut), heikko tuota- (tuotan, tuotin). 'Tuottaa tavaraa' = to produce goods; 'tuottaa pettymys' = to cause disappointment. Vrt. tuote, tuotanto.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tuotan" },
          { label: "sinä", form: "tuotat" },
          { label: "hän", form: "tuottaa" },
          { label: "me", form: "tuotamme" },
          { label: "te", form: "tuotatte" },
          { label: "he", form: "tuottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tuota" },
          { label: "hän", form: "ei tuota" },
          { label: "he", form: "eivät tuota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tuotin" },
          { label: "sinä", form: "tuotit" },
          { label: "hän", form: "tuotti" },
          { label: "me", form: "tuotimme" },
          { label: "te", form: "tuotitte" },
          { label: "he", form: "tuottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tuottanut" },
          { label: "hän", form: "on tuottanut" },
          { label: "he", form: "ovat tuottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tuota!" },
          { label: "te", form: "tuottakaa!" },
          { label: "kielto (sinä)", form: "älä tuota" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuote",
      en: "product",
      taso: "A2",
      esim: { fi: "Tuote on laadukas.", en: "The product is of high quality." },
    },
    {
      fi: "tuotanto",
      en: "production",
      taso: "B2",
      esim: { fi: "Tuotanto kasvoi.", en: "Production grew." },
    },
    {
      fi: "tuottava",
      en: "productive, profitable",
      taso: "B2",
      esim: { fi: "Yritys on tuottava.", en: "The company is profitable." },
    },
  ],
  synonyymit: [
    { fi: "valmistaa", en: "to manufacture" },
    { fi: "saada aikaan", en: "to bring about" },
  ],
  esimerkit: {
    A2: { fi: "Tehdas tuottaa autoja.", en: "The factory produces cars." },
    B1: { fi: "Suomi tuottaa paljon paperia.", en: "Finland produces a lot of paper." },
    B2: {
      fi: "Uudistus tuotti odotettua paremman tuloksen.",
      en: "The reform produced a better result than expected.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuottaa;
