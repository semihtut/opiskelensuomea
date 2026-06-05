import type { Word } from "@/lib/content-types";

// Conjunctive adverb "kuitenkin" (however, nevertheless). Invariant. Signals contrast
// with what precedes; often mid-sentence.
const kuitenkin: Word = {
  fi: "kuitenkin",
  slug: "kuitenkin",
  pos: "adverbi (konjunktioadverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "however, nevertheless, after all",
  selitys:
    "Ilmaisee vastakohtaa edelliselle. Konjunktioadverbi, ei taivuteta. 'Oli kylmä; lähdin kuitenkin ulos.' Vrt. mutta (konjunktio).",
  kuva: { emoji: "🔄", alt: "kuitenkin – vastoin odotusta, kuitenkin" },

  kielioppi: {
    tyyppi: "konjunktioadverbi (vastakohta); taipumaton; liikkuu lauseessa",
    muodot: [
      { sija: "perusmuoto", muoto: "kuitenkin", merkitys: "however, nevertheless" },
      { sija: "vrt.", muoto: "silti", merkitys: "still, nonetheless" },
      { sija: "vrt.", muoto: "mutta", merkitys: "but (conjunction)" },
    ],
    huom:
      "Toisin kuin 'mutta', 'kuitenkin' ei aloita lausetta konjunktiona vaan liikkuu sen sisällä: 'Lähdin kuitenkin.' Voi tarkoittaa myös 'sittenkin' (after all).",
  },
  johdokset: [
    {
      fi: "silti",
      en: "still, nonetheless",
      taso: "B1",
      esim: { fi: "Olin väsynyt mutta silti onnellinen.", en: "I was tired but still happy." },
    },
    {
      fi: "sittenkin",
      en: "after all",
      taso: "B1",
      esim: { fi: "Tulitkin sittenkin!", en: "So you came after all!" },
    },
    {
      fi: "joka tapauksessa",
      en: "in any case",
      taso: "B2",
      esim: { fi: "Joka tapauksessa lähden huomenna.", en: "In any case, I'm leaving tomorrow." },
    },
  ],
  synonyymit: [
    { fi: "silti", en: "still, nonetheless" },
    { fi: "sittenkin", en: "after all" },
  ],
  esimerkit: {
    A2: { fi: "Satoi, mutta menimme kuitenkin ulos.", en: "It rained, but we went out anyway." },
    B1: { fi: "Tehtävä oli vaikea; sain sen kuitenkin valmiiksi.", en: "The task was hard; nevertheless I finished it." },
    B2: {
      fi: "Hän lupasi tulla ajoissa, mutta saapui kuitenkin tuntia myöhässä.",
      en: "He promised to come on time, but arrived an hour late nonetheless.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kuitenkin;
