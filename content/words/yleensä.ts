import type { Word } from "@/lib/content-types";

// Frequency adverb "yleensä" (usually, generally). Invariant in this use (originally
// essive of yleinen).
const yleensa: Word = {
  fi: "yleensä",
  slug: "yleensä",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "usually, generally",
  selitys:
    "Tavallisesti, useimmiten. Toistuvuuden adverbi. 'Yleensä herään seitsemältä.' Pohjana adjektiivi yleinen (general). Vrt. tavallisesti.",
  kuva: { emoji: "📊", alt: "yleensä – useimmiten, tavallisesti" },

  kielioppi: {
    tyyppi: "toistuvuuden adverbi (yleinen-sanan essiivi); taipumaton tässä käytössä",
    muodot: [
      { sija: "perusmuoto", muoto: "yleensä", merkitys: "usually" },
      { sija: "vrt.", muoto: "tavallisesti", merkitys: "ordinarily" },
      { sija: "vrt.", muoto: "useimmiten", merkitys: "most of the time" },
    ],
    huom:
      "Ilmaisee tyypillistä tapaa: 'Yleensä juon teetä.' Voi myös tarkoittaa 'ylipäätään': 'Onko se yleensä mahdollista?' (at all). Pohjana yleinen.",
  },
  johdokset: [
    {
      fi: "yleinen",
      en: "general, common, public",
      taso: "B1",
      esim: { fi: "Se on yleinen tapa.", en: "It is a common custom." },
    },
    {
      fi: "yleisesti",
      en: "generally, commonly",
      taso: "B1",
      esim: { fi: "Tätä käytetään yleisesti.", en: "This is used commonly." },
    },
    {
      fi: "yleisö",
      en: "audience, public",
      taso: "B1",
      esim: { fi: "Yleisö taputti kovaa.", en: "The audience applauded loudly." },
    },
  ],
  synonyymit: [
    { fi: "tavallisesti", en: "usually, ordinarily" },
    { fi: "useimmiten", en: "most of the time" },
  ],
  esimerkit: {
    A2: { fi: "Yleensä menen nukkumaan kymmeneltä.", en: "I usually go to bed at ten." },
    B1: { fi: "Viikonloppuisin nukun yleensä pidempään.", en: "On weekends I usually sleep longer." },
    B2: {
      fi: "Yleensä pidän hiljaisista illoista, mutta joskus kaipaan myös seuraa.",
      en: "I usually like quiet evenings, but sometimes I crave company too.",
    },
  },
  updatedAt: "2026-06-05",
};

export default yleensa;
