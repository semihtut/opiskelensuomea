import type { Word } from "@/lib/content-types";

// Subordinating conjunction "kun" (when, as, since). Invariant. Temporal and causal.
const kun: Word = {
  fi: "kun",
  slug: "kun",
  pos: "konjunktio (alistuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "when, as, since",
  selitys:
    "Alistuskonjunktio, joka ilmaisee aikaa tai syytä. Ei taivuteta. 'Kun tulin kotiin, söin.' Vrt. kysymyssana milloin (when?) ja konjunktio kuin (than).",
  kuva: { alt: "kun – aika: silloin kun" },

  kielioppi: {
    tyyppi: "alistuskonjunktio (aika/syy); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "kun", merkitys: "when, as" },
      { sija: "vrt.", muoto: "kuin", merkitys: "than, as (comparison)" },
      { sija: "vrt.", muoto: "milloin", merkitys: "when? (question word)" },
    ],
    huom:
      "Älä sekoita: 'kun' (aikaa/syytä, when) vs. 'kuin' (vertailu, than: 'isompi kuin'). Kysymyksessä käytä 'milloin'. 'Aina kun' = whenever.",
  },
  johdokset: [
    {
      fi: "kunnes",
      en: "until",
      taso: "B1",
      esim: { fi: "Odotin, kunnes hän tuli.", en: "I waited until she came." },
    },
    {
      fi: "aina kun",
      en: "whenever",
      taso: "B1",
      esim: { fi: "Aina kun sataa, otan sateenvarjon.", en: "Whenever it rains, I take an umbrella." },
    },
    {
      fi: "silloin kun",
      en: "at the time when",
      taso: "B1",
      esim: { fi: "Silloin kun olin lapsi, asuimme maalla.", en: "When I was a child, we lived in the countryside." },
    },
  ],
  synonyymit: [
    { fi: "kunnes", en: "until" },
    { fi: "koska (puhekielessä)", en: "because (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Kun heräsin, oli jo valoisaa.", en: "When I woke up, it was already light." },
    B1: { fi: "Soita minulle, kun pääset perille.", en: "Call me when you arrive." },
    B2: {
      fi: "Kun olin nuori, en ymmärtänyt, kuinka nopeasti aika kuluu.",
      en: "When I was young, I didn't understand how quickly time passes.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kun;
