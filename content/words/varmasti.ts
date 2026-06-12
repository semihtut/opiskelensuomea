import type { Word } from "@/lib/content-types";

// Modal adverb "varmasti" (certainly, surely, definitely). Invariant (from varma).
const varmasti: Word = {
  fi: "varmasti",
  slug: "varmasti",
  pos: "adverbi (modaaliadverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "certainly, surely, definitely",
  selitys:
    "Ilmaisee varmuutta. Modaaliadverbi, ei taivuteta. Pohjana adjektiivi varma. 'Tulen varmasti.' Vastakohta ehkä (epävarmuus).",
  kuva: { alt: "varmasti – täysi varmuus" },

  kielioppi: {
    tyyppi: "modaaliadverbi (varmuus); taipumaton (varma → varmasti)",
    muodot: [
      { sija: "perusmuoto", muoto: "varmasti", merkitys: "certainly, surely" },
      { sija: "kanta", muoto: "varma", merkitys: "sure, certain (adjective)" },
      { sija: "vrt.", muoto: "ehkä", merkitys: "maybe (opposite certainty)" },
    ],
    huom:
      "Korostaa varmuutta: 'Hän on varmasti kotona.' Voi myös pehmentää lupausta: 'Soitan sinulle varmasti.' Pohjana varma; substantiivi varmuus.",
  },
  johdokset: [
    {
      fi: "varma",
      en: "sure, certain",
      taso: "A2",
      esim: { fi: "Oletko varma?", en: "Are you sure?" },
    },
    {
      fi: "varmuus",
      en: "certainty, assurance",
      taso: "B1",
      esim: { fi: "Ei ole varmuutta tuloksesta.", en: "There is no certainty about the result." },
    },
    {
      fi: "varmistaa",
      en: "to ensure, confirm",
      taso: "B1",
      esim: { fi: "Varmistin, että ovi oli lukossa.", en: "I made sure the door was locked." },
    },
  ],
  synonyymit: [
    { fi: "varmaan", en: "probably, surely" },
    { fi: "epäilemättä", en: "undoubtedly" },
  ],
  esimerkit: {
    A2: { fi: "Tulen varmasti juhliin.", en: "I'll definitely come to the party." },
    B1: { fi: "Hän tietää sen varmasti.", en: "She surely knows it." },
    B2: {
      fi: "Vaikka emme olleet sopineet mitään, tiesin varmasti, että hän odottaisi minua asemalla.",
      en: "Even though we hadn't agreed on anything, I knew for sure that he would wait for me at the station.",
    },
  },
  updatedAt: "2026-06-05",
};

export default varmasti;
