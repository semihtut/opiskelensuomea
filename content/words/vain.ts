import type { Word } from "@/lib/content-types";

// Focus particle "vain" (only, just). Invariant. Synonym ainoastaan; colloquial vaan.
const vain: Word = {
  fi: "vain",
  slug: "vain",
  pos: "adverbi (fokuspartikkeli)",
  posClass: "adverbi",
  level: "A1",
  en: "only, just",
  selitys:
    "Rajaa: 'vain yksi' = only one. Fokuspartikkeli, ei taivuteta. Synonyymi ainoastaan. Puhekielessä joskus 'vaan' (ei sekoita konjunktioon vaan).",
  kuva: { alt: "vain – vain yksi, rajaus" },

  kielioppi: {
    tyyppi: "fokuspartikkeli (rajaus); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "vain", merkitys: "only, just" },
      { sija: "muodollinen", muoto: "ainoastaan", merkitys: "solely, only" },
      { sija: "puhekieli", muoto: "vaan", merkitys: "only (colloquial)" },
    ],
    huom:
      "Rajaa sanaa, jonka edellä/jäljessä se on: 'Vain sinä tiedät.' Älä sekoita: konjunktio 'vaan' (but rather) ≠ puhekielinen 'vaan' (= vain). 'Kunhan vain' = as long as.",
  },
  johdokset: [
    {
      fi: "ainoastaan",
      en: "solely, only",
      taso: "B1",
      esim: { fi: "Maksan ainoastaan käteisellä.", en: "I pay solely in cash." },
    },
    {
      fi: "ainoa",
      en: "the only one",
      taso: "A2",
      esim: { fi: "Se on ainoa vaihtoehto.", en: "It is the only option." },
    },
    {
      fi: "vain ja ainoastaan",
      en: "purely and simply",
      taso: "B2",
      esim: { fi: "Tein sen vain ja ainoastaan sinun takiasi.", en: "I did it purely and simply for you." },
    },
  ],
  synonyymit: [
    { fi: "ainoastaan", en: "solely" },
    { fi: "pelkästään", en: "merely, purely" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on vain yksi euro.", en: "I have only one euro." },
    B1: { fi: "Halusin vain auttaa sinua.", en: "I only wanted to help you." },
    B2: {
      fi: "Hän ei puhunut paljon; sanoi vain, että kaikki järjestyy aikanaan.",
      en: "She didn't talk much; she only said that everything would work out in time.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vain;
