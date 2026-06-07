import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi, taipumaton.
const vihdoin: Word = {
  fi: "vihdoin",
  slug: "vihdoin",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "at last, finally",
  selitys:
    "Pitkän odotuksen jälkeen, viimein – usein helpotusta ilmaisten: 'vihdoin pääsin lomalle!'. Taipumaton ajan adverbi. Vrt. lopulta (in the end), viimein (finally), vihdoinkin (at long last).",
  kuva: { emoji: "🙌", alt: "vihdoin – pitkän odotuksen jälkeen, viimein" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "vihdoin", merkitys: "at last" },
      { sija: "tehoste", muoto: "vihdoinkin", merkitys: "at long last" },
      { sija: "vrt.", muoto: "lopulta", merkitys: "in the end" },
    ],
    huom:
      "Taipumaton adverbi. Ilmaisee usein helpotusta pitkän odotuksen päätyttyä. Tehostemuoto vihdoinkin. Vrt. lopulta (korostaa prosessin loppua), viimein (synonyymi).",
  },
  johdokset: [
    {
      fi: "vihdoinkin",
      en: "at long last (emphatic)",
      taso: "B1",
      esim: { fi: "Vihdoinkin olet täällä!", en: "At long last you're here!" },
    },
  ],
  synonyymit: [
    { fi: "viimein", en: "finally, at last" },
    { fi: "lopulta", en: "in the end" },
  ],
  esimerkit: {
    A2: { fi: "Vihdoin on perjantai!", en: "Finally it's Friday!" },
    B1: { fi: "Vihdoin saimme vastauksen.", en: "At last we got an answer." },
    B2: {
      fi: "Vuosien työn jälkeen hän sai vihdoin tunnustusta saavutuksilleen.",
      en: "After years of work he finally received recognition for his achievements.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vihdoin;
