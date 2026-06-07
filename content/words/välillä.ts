import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: adverbi 'välillä' = sometimes (väli-sanan adessiivista vakiintunut adverbi).
const valilla: Word = {
  fi: "välillä",
  slug: "välillä",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "sometimes, occasionally; in between",
  selitys:
    "Joskus, aika ajoin: 'käyn välillä uimassa'. Vakiintunut adverbi sanan väli adessiivimuodosta. Toimii myös postpositiona: 'A:n ja B:n välillä' = between A and B. Vrt. joskus, väli, välissä.",
  kuva: { emoji: "🔄", alt: "välillä – joskus, aika ajoin" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); käytetään myös postpositiona (genetiivin kanssa)",
    muodot: [
      { sija: "adverbi", muoto: "välillä", merkitys: "sometimes" },
      { sija: "postpositio", muoto: "(jonkin) välillä", merkitys: "between" },
      { sija: "vrt.", muoto: "välissä", merkitys: "in between (paikka)" },
    ],
    huom:
      "Adverbina = joskus, aika ajoin. Postpositiona genetiivin kanssa = between: 'Helsingin ja Tampereen välillä'. Vrt. välissä (staattinen paikka, in between), väli = gap, interval.",
  },
  johdokset: [
    {
      fi: "väli",
      en: "gap, interval, space",
      taso: "B1",
      esim: { fi: "Jätä sanojen väliin tyhjä tila.", en: "Leave a space between the words." },
    },
    {
      fi: "väliaika",
      en: "interval, intermission",
      taso: "B2",
      esim: { fi: "Näytelmässä on väliaika.", en: "The play has an intermission." },
    },
  ],
  synonyymit: [
    { fi: "joskus", en: "sometimes" },
    { fi: "ajoittain", en: "occasionally" },
  ],
  esimerkit: {
    A2: { fi: "Käyn välillä kahvilla.", en: "I sometimes go for coffee." },
    B1: { fi: "Välillä on hyvä pitää taukoa.", en: "Sometimes it's good to take a break." },
    B2: {
      fi: "Junayhteys Helsingin ja Oulun välillä on parantunut huomattavasti.",
      en: "The train connection between Helsinki and Oulu has improved considerably.",
    },
  },
  updatedAt: "2026-06-07",
};

export default valilla;
