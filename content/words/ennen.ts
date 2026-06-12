import type { Word } from "@/lib/content-types";

// Time adverb / preposition "ennen" (before; in the past). Governs the partitive:
// "ennen joulua". Comparative ennemmin (rather/sooner). Opposite jälkeen.
const ennen: Word = {
  fi: "ennen",
  slug: "ennen",
  pos: "adverbi / prepositio (aika)",
  posClass: "adverbi",
  level: "A2",
  en: "before; in the past, formerly",
  selitys:
    "Aiemmin kuin; menneisyydessä. Prepositiona partitiivin kanssa: 'ennen joulua'. Adverbina 'ennen' = formerly. Vastakohta jälkeen.",
  kuva: { alt: "ennen – aiemmin, menneisyydessä" },

  kielioppi: {
    tyyppi: "ajan adverbi / prepositio (+ partitiivi); komparatiivi ennemmin",
    muodot: [
      { sija: "prepositio", muoto: "ennen + partitiivi", merkitys: "before (ennen joulua)" },
      { sija: "adverbi", muoto: "ennen", merkitys: "formerly, in the past" },
      { sija: "komparatiivi", muoto: "ennemmin", merkitys: "rather, sooner" },
    ],
    huom:
      "Prepositiona aina partitiivin EDELLÄ: 'ennen ruokaa', 'ennen kuin' (before … as conjunction). Adverbina: 'Ennen kaikki oli halvempaa.' Vastakohta jälkeen (+ genetiivi).",
  },
  johdokset: [
    {
      fi: "ennen kuin",
      en: "before (conjunction)",
      taso: "B1",
      esim: { fi: "Pese kädet ennen kuin syöt.", en: "Wash your hands before you eat." },
    },
    {
      fi: "ennemmin",
      en: "rather, sooner",
      taso: "B2",
      esim: { fi: "Lähden ennemmin aikaisin kuin myöhään.", en: "I'd rather leave early than late." },
    },
    {
      fi: "entinen",
      en: "former, ex-",
      taso: "B1",
      esim: { fi: "Hän on entinen opettajani.", en: "She is my former teacher." },
    },
  ],
  synonyymit: [
    { fi: "aiemmin", en: "earlier, previously" },
    { fi: "aikaisemmin", en: "earlier" },
  ],
  esimerkit: {
    A2: { fi: "Tulen kotiin ennen iltaa.", en: "I'll come home before evening." },
    B1: { fi: "Ennen asuin maalla, nyt kaupungissa.", en: "Before, I lived in the countryside, now in the city." },
    B2: {
      fi: "Ennen kuin teet päätöksen, mieti rauhassa kaikki vaihtoehdot läpi.",
      en: "Before you make the decision, calmly think through all the options.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ennen;
