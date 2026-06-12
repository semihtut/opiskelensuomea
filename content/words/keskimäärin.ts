import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: tavan/määrän adverbi, taipumaton.
const keskimaarin: Word = {
  fi: "keskimäärin",
  slug: "keskimäärin",
  pos: "adverbi (määrän adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "on average, on the average",
  selitys:
    "Keskiarvona laskettuna, tavallisesti: 'syön keskimäärin kolme ateriaa päivässä'. Taipumaton adverbi. Vrt. keskiarvo (average), keskimääräinen (average, adj.), suunnilleen.",
  kuva: { alt: "keskimäärin – keskiarvona laskettuna" },

  kielioppi: {
    tyyppi: "adverbi (määrän adverbi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "keskimäärin", merkitys: "on average" },
      { sija: "vrt.", muoto: "keskimääräinen", merkitys: "average (adj.)" },
      { sija: "vrt.", muoto: "keskiarvo", merkitys: "average, mean (noun)" },
    ],
    huom:
      "Taipumaton adverbi. Ilmaisee keskiarvoa: 'keskimäärin X kappaletta'. Adjektiivi keskimääräinen = average, substantiivi keskiarvo = average/mean. Vrt. suunnilleen = approximately.",
  },
  johdokset: [
    {
      fi: "keskimääräinen",
      en: "average (adjective)",
      taso: "B2",
      esim: { fi: "Keskimääräinen lämpötila oli 18 astetta.", en: "The average temperature was 18 degrees." },
    },
    {
      fi: "keskiarvo",
      en: "average, mean",
      taso: "B1",
      esim: { fi: "Lasken arvosanojen keskiarvon.", en: "I calculate the average of the grades." },
    },
  ],
  synonyymit: [
    { fi: "keskimäärältään", en: "on average" },
    { fi: "suunnilleen", en: "approximately" },
  ],
  esimerkit: {
    A2: { fi: "Nukun keskimäärin seitsemän tuntia.", en: "I sleep on average seven hours." },
    B1: { fi: "Juna on keskimäärin viisi minuuttia myöhässä.", en: "The train is on average five minutes late." },
    B2: {
      fi: "Keskimäärin hinnat nousivat kaksi prosenttia, mutta vaihtelu oli suurta.",
      en: "On average prices rose two percent, but the variation was large.",
    },
  },
  updatedAt: "2026-06-07",
};

export default keskimaarin;
