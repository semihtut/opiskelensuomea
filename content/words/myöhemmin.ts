import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi (myöhään-adverbin komparatiivi), taipumaton.
const myohemmin: Word = {
  fi: "myöhemmin",
  slug: "myöhemmin",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "later, afterwards",
  selitys:
    "Tuonnempana, jonkin hetken jälkeen: 'puhutaan myöhemmin'. Adverbin 'myöhään' komparatiivimuoto, taipumaton. Vastakohta aikaisemmin. Vrt. myöhäinen (late), myöhästyä (to be late).",
  kuva: { emoji: "⏩", alt: "myöhemmin – tuonnempana, jonkin hetken jälkeen" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi, komparatiivi); taipumaton",
    muodot: [
      { sija: "perusaste", muoto: "myöhään", merkitys: "late (adv.)" },
      { sija: "komparatiivi", muoto: "myöhemmin", merkitys: "later" },
      { sija: "vastakohta", muoto: "aikaisemmin", merkitys: "earlier" },
    ],
    huom:
      "Komparatiiviadverbi (-mmin), taipumaton. Perusaste myöhään. Vastakohta aikaisemmin. 'Myöhemmin tänään' = later today; 'aiemmin tai myöhemmin' = sooner or later. Vrt. myöhäinen = late.",
  },
  johdokset: [
    {
      fi: "myöhäinen",
      en: "late",
      taso: "B1",
      esim: { fi: "Oli jo myöhäinen ilta.", en: "It was already a late evening." },
    },
    {
      fi: "myöhästyä",
      en: "to be late, miss",
      taso: "A2",
      esim: { fi: "Myöhästyin bussista.", en: "I missed the bus." },
    },
  ],
  synonyymit: [
    { fi: "tuonnempana", en: "later on" },
    { fi: "jälkeenpäin", en: "afterwards" },
  ],
  esimerkit: {
    A2: { fi: "Nähdään myöhemmin!", en: "See you later!" },
    B1: { fi: "Kerron sinulle myöhemmin lisää.", en: "I'll tell you more later." },
    B2: {
      fi: "Päätös kannattaa tehdä nyt, sillä myöhemmin vaihtoehtoja on vähemmän.",
      en: "It's worth making the decision now, because later there will be fewer options.",
    },
  },
  updatedAt: "2026-06-07",
};

export default myohemmin;
