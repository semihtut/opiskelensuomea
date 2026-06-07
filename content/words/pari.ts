import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem pari-.
// Genitive parin, partitive paria, partitive pl pareja.
const pari: Word = {
  fi: "pari",
  slug: "pari",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "pair, couple; a couple of",
  selitys:
    "1) Kaksi yhteen kuuluvaa: 'pari kenkiä'. 2) Pariskunta. 3) Epämääräisesti 'pari' = muutama: 'pari päivää'. Tyyppi 5/risti, ei astevaihtelua. Vrt. kaksi, pariskunta, muutama.",
  kuva: { emoji: "👫", alt: "pari – kaksi yhteen kuuluvaa tai pariskunta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua (vartalo pari-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "parin", merkitys: "of the pair" },
      { sija: "partitiivi (yks.)", muoto: "paria", merkitys: "pair (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pareja", merkitys: "pairs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5/risti: ei astevaihtelua. Partitiivin monikko pareja. 'Pari' epämääräisenä = a couple of (pari kertaa = a couple of times). Vrt. pariskunta, kaksi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pari" },
          { label: "Partitiivi", form: "paria" },
          { label: "Genetiivi", form: "parin" },
          { label: "Inessiivi", form: "parissa" },
          { label: "Elatiivi", form: "parista" },
          { label: "Illatiivi", form: "pariin" },
          { label: "Adessiivi", form: "parilla" },
          { label: "Ablatiivi", form: "parilta" },
          { label: "Allatiivi", form: "parille" },
          { label: "Essiivi", form: "parina" },
          { label: "Translatiivi", form: "pariksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "parit" },
          { label: "Partitiivi", form: "pareja" },
          { label: "Genetiivi", form: "parien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pariskunta",
      en: "couple (two people in a relationship)",
      taso: "B1",
      esim: { fi: "Nuori pariskunta osti talon.", en: "A young couple bought a house." },
    },
    {
      fi: "parittain",
      en: "in pairs",
      taso: "B2",
      esim: { fi: "Tehkää tehtävä parittain.", en: "Do the task in pairs." },
    },
  ],
  synonyymit: [
    { fi: "muutama", en: "a few (in the 'a couple of' sense)" },
  ],
  esimerkit: {
    A2: { fi: "Ostin parin kenkiä.", en: "I bought a pair of shoes." },
    B1: { fi: "Palaan parin päivän kuluttua.", en: "I'll be back in a couple of days." },
    B2: {
      fi: "He ovat olleet pari jo kymmenen vuotta.",
      en: "They have been a couple for ten years already.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pari;
