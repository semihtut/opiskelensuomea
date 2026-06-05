import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series välissä (static) / välistä (separative) /
// väliin (directional). Postposition governing the genitive: "talojen välissä".
const valissa: Word = {
  fi: "välissä",
  slug: "välissä",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "between, in between",
  selitys:
    "Kahden asian keskellä. Paikallissarja: välissä (missä) – välistä (mistä) – väliin (mihin). Postpositiona genetiivin kanssa: 'talojen välissä'.",
  kuva: { emoji: "⏸️", alt: "välissä – kahden asian keskellä" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "välissä", merkitys: "between" },
      { sija: "mistä", muoto: "välistä", merkitys: "from between" },
      { sija: "mihin", muoto: "väliin", merkitys: "to between" },
    ],
    huom:
      "Postpositiona genetiivin (usein monikon) jälkeen: 'talojen välissä', 'kahden tunnin välissä'. Pohjana substantiivi väli = gap, interval, relation.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "välissä" },
          { label: "Mistä?", form: "välistä" },
          { label: "Mihin?", form: "väliin" },
          { label: "+ omistusliite", form: "välissäni / väliini" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "väli",
      en: "gap, interval; relation",
      taso: "B1",
      esim: { fi: "Sanojen väliin tulee välilyönti.", en: "A space goes between the words." },
    },
    {
      fi: "välillä",
      en: "sometimes; between (two points)",
      taso: "A2",
      esim: { fi: "Käyn siellä silloin tällöin, välillä useammin.", en: "I go there now and then, sometimes more often." },
    },
    {
      fi: "väliaika",
      en: "intermission, interval",
      taso: "B1",
      esim: { fi: "Näytelmässä oli väliaika.", en: "The play had an intermission." },
    },
  ],
  synonyymit: [
    { fi: "keskellä", en: "in the middle of" },
    { fi: "lomassa", en: "interspersed among" },
  ],
  esimerkit: {
    A2: { fi: "Kauppa on pankin ja postin välissä.", en: "The shop is between the bank and the post office." },
    B1: { fi: "Kissa livahti aidan välistä.", en: "The cat slipped through the fence." },
    B2: {
      fi: "Hän ahtautui kahden matkustajan väliin, koska muita paikkoja ei ollut.",
      en: "He squeezed in between two passengers, because there were no other seats.",
    },
  },
  updatedAt: "2026-06-05",
};

export default valissa;
