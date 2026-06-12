import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series vieressä (static) / vierestä (separative) /
// viereen (directional). Postposition governing the genitive: "talon vieressä".
const vieressa: Word = {
  fi: "vieressä",
  slug: "vieressä",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "next to, beside",
  selitys:
    "Aivan vierellä. Paikallissarja: vieressä (missä) – vierestä (mistä) – viereen (mihin). Postpositiona genetiivin kanssa: 'talon vieressä'.",
  kuva: { alt: "vieressä – aivan vierellä" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "vieressä", merkitys: "next to" },
      { sija: "mistä", muoto: "vierestä", merkitys: "from beside" },
      { sija: "mihin", muoto: "viereen", merkitys: "to beside" },
    ],
    huom:
      "Postpositiona genetiivin jälkeen: 'pankin vieressä'. Pronominista omistusliite: 'vieressäni', 'viereeni'. Synonyymi vierellä.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "vieressä" },
          { label: "Mistä?", form: "vierestä" },
          { label: "Mihin?", form: "viereen" },
          { label: "+ omistusliite", form: "vieressäni / viereeni" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vieri",
      en: "side, edge (base form)",
      taso: "B2",
      esim: { fi: "Istuin hänen vierellään.", en: "I sat by his side." },
    },
    {
      fi: "vierekkäin",
      en: "side by side",
      taso: "B1",
      esim: { fi: "Istuimme vierekkäin bussissa.", en: "We sat side by side on the bus." },
    },
    {
      fi: "vieressä oleva",
      en: "the one next to",
      taso: "B1",
      esim: { fi: "Vieressä oleva talo on tyhjä.", en: "The house next to it is empty." },
    },
  ],
  synonyymit: [
    { fi: "vierellä", en: "beside, at the side of" },
    { fi: "lähellä", en: "near" },
  ],
  esimerkit: {
    A2: { fi: "Kahvila on kirjaston vieressä.", en: "The café is next to the library." },
    B1: { fi: "Saanko istua sinun viereesi?", en: "May I sit next to you?" },
    B2: {
      fi: "Hän asetti kahvikupin tietokoneen viereen ja jatkoi kirjoittamista.",
      en: "She placed the coffee cup next to the computer and continued writing.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vieressa;
