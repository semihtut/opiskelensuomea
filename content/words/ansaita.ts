import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 69/valita, -tse- stem, no gradation.
// Present minä ansaitsen, hän ansaitsee; imperfect minä ansaitsin, hän ansaitsi; NUT ansainnut.
const ansaita: Word = {
  fi: "ansaita",
  slug: "ansaita",
  pos: "verbi (tyyppi 5)",
  posClass: "verbi",
  level: "B1",
  en: "to earn; to deserve",
  selitys:
    "Saada palkkaa työstä tai olla jonkin arvoinen: 'ansaita hyvin' / 'ansaita kiitos'. Tyyppi 5 (-ita), vartalo -tse- (ansaitsen). NUT-partisiippi ansainnut. Vrt. ansio (merit, earnings).",
  kuva: { alt: "ansaita – saada palkkaa tai olla jonkin arvoinen" },

  kielioppi: {
    tyyppi: "tyyppi 5 (-ita); vartalo ansaitse-; NUT-partisiippi ansainnut",
    muodot: [
      { sija: "preesens (minä)", muoto: "ansaitsen", merkitys: "I earn" },
      { sija: "imperfekti (minä)", muoto: "ansaitsin", merkitys: "I earned" },
      { sija: "NUT-partisiippi", muoto: "ansainnut", merkitys: "(have) earned" },
    ],
    huom:
      "Vartalossa -tse- (ansaitsen, ansaitsi), mutta NUT-partisiippi on ansainnut (ts → nn) — sama kuljetustyyppi kuin valita → valinnut. 'Ansaita rahaa' = to earn money; 'ansaita jotakin' = to deserve.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ansaitsen" },
          { label: "sinä", form: "ansaitset" },
          { label: "hän", form: "ansaitsee" },
          { label: "me", form: "ansaitsemme" },
          { label: "te", form: "ansaitsette" },
          { label: "he", form: "ansaitsevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ansaitse" },
          { label: "hän", form: "ei ansaitse" },
          { label: "he", form: "eivät ansaitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ansaitsin" },
          { label: "sinä", form: "ansaitsit" },
          { label: "hän", form: "ansaitsi" },
          { label: "me", form: "ansaitsimme" },
          { label: "te", form: "ansaitsitte" },
          { label: "he", form: "ansaitsivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ansainnut" },
          { label: "hän", form: "on ansainnut" },
          { label: "he", form: "ovat ansainneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ansaitse!" },
          { label: "te", form: "ansaitkaa!" },
          { label: "kielto (sinä)", form: "älä ansaitse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ansio",
      en: "merit; (pl.) earnings",
      taso: "B2",
      esim: { fi: "Hän sai palkinnon ansioistaan.", en: "She received an award for her merits." },
    },
    {
      fi: "ansiotyö",
      en: "paid work",
      taso: "B2",
      esim: { fi: "Hän palasi ansiotyöhön.", en: "He returned to paid work." },
    },
    {
      fi: "ansaitseva",
      en: "deserving",
      taso: "B2",
      esim: { fi: "Apu meni sitä ansaitseville.", en: "The help went to those who deserved it." },
    },
  ],
  synonyymit: [
    { fi: "tienata", en: "to earn (colloquial)" },
    { fi: "olla arvoinen", en: "to be worthy of" },
  ],
  esimerkit: {
    A2: { fi: "Hän ansaitsee hyvin.", en: "She earns well." },
    B1: { fi: "Ansaitsin kesällä rahaa kahvilassa.", en: "I earned money at a café in the summer." },
    B2: {
      fi: "Kovan työn jälkeen ansaitset kunnon loman.",
      en: "After all that hard work, you deserve a proper holiday.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ansaita;
