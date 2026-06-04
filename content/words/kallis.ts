import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation, stem kallii-.
// Partitive kallista, genitive kalliin, illative kalliiseen. Comparison kalliimpi /
// kallein.
const kallis: Word = {
  fi: "kallis",
  slug: "kallis",
  pos: "adjektiivi (tyyppi: vieras)",
  posClass: "adjektiivi",
  level: "A1",
  en: "expensive; dear, precious",
  selitys:
    "Paljon maksava; halvan vastakohta. Myös 'rakas, arvokas'. Vartalo kallii-; vertailu kalliimpi – kallein.",
  kuva: { emoji: "💎", alt: "kallis – timantti, arvokas esine" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; ei astevaihtelua (vartalo kallii-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kallista", merkitys: "expensive (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kalliin", merkitys: "of the expensive (one)" },
      { sija: "komparatiivi", muoto: "kalliimpi", merkitys: "more expensive" },
    ],
    huom:
      "Vartalo kallii-: kalliin, kalliissa, kalliiseen. Partitiivi kallista. Vertailu kalliimpi (komp.), kallein (superl.).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "kallis" },
          { label: "Partitiivi", form: "kallista" },
          { label: "Genetiivi", form: "kalliin" },
          { label: "Inessiivi", form: "kalliissa" },
          { label: "Illatiivi", form: "kalliiseen" },
          { label: "Adessiivi", form: "kalliilla" },
          { label: "Essiivi", form: "kalliina" },
          { label: "Translatiivi", form: "kalliiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kalliit" },
          { label: "Partitiivi", form: "kalliita" },
          { label: "Genetiivi", form: "kalliiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "kalliimpi" },
          { label: "Komparatiivi (gen.)", form: "kalliimman" },
          { label: "Komparatiivi (part.)", form: "kalliimpaa" },
          { label: "Superlatiivi (nom.)", form: "kallein" },
          { label: "Superlatiivi (gen.)", form: "kalleimman" },
          { label: "Superlatiivi (part.)", form: "kalleinta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kalleus",
      en: "expensiveness, costliness",
      taso: "B2",
      esim: { fi: "Asuntojen kalleus yllätti meidät.", en: "The expensiveness of the apartments surprised us." },
    },
    {
      fi: "kallistua",
      en: "to become more expensive",
      taso: "B2",
      esim: { fi: "Bensiini on kallistunut.", en: "Petrol has become more expensive." },
    },
    {
      fi: "kallisarvoinen",
      en: "precious, valuable",
      taso: "B2",
      esim: { fi: "Aika on kallisarvoista.", en: "Time is precious." },
    },
  ],
  synonyymit: [
    { fi: "hintava", en: "pricey" },
    { fi: "arvokas", en: "valuable; precious" },
  ],
  esimerkit: {
    A2: { fi: "Tämä takki on liian kallis.", en: "This coat is too expensive." },
    B1: { fi: "Auto oli kalliimpi kuin luulin.", en: "The car was more expensive than I thought." },
    B2: {
      fi: "Kaupungin kallein asunto myytiin miljoonalla eurolla.",
      en: "The city's most expensive apartment sold for a million euros.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kallis;
