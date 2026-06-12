import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea, no gradation. Genitive vaikean,
// partitive vaikeaa, illative vaikeaan, partitive pl vaikeita. Comp vaikeampi, superl vaikein.
const vaikea: Word = {
  fi: "vaikea",
  slug: "vaikea",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "A1",
  en: "difficult, hard",
  selitys:
    "Vaivaa tai ponnistelua vaativa; vastakohta helppo. Tyyppi 15, ei astevaihtelua. Monikon partitiivi vaikeita.",
  kuva: { alt: "vaikea – vaikea, ponnistelua vaativa" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaikean", merkitys: "of the difficult" },
      { sija: "partitiivi (yks.)", muoto: "vaikeaa", merkitys: "difficult (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaikeita", merkitys: "difficult (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi vaikeita (ei *vaikeoita). Vertailu vaikeampi/vaikein. 'Vaikea tehdä' = hard to do.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "vaikea" },
          { label: "Partitiivi", form: "vaikeaa" },
          { label: "Genetiivi", form: "vaikean" },
          { label: "Inessiivi", form: "vaikeassa" },
          { label: "Illatiivi", form: "vaikeaan" },
          { label: "Adessiivi", form: "vaikealla" },
          { label: "Essiivi", form: "vaikeana" },
          { label: "Translatiivi", form: "vaikeaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaikeat" },
          { label: "Partitiivi", form: "vaikeita" },
          { label: "Genetiivi", form: "vaikeiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "vaikeampi" },
          { label: "Komparatiivi (gen.)", form: "vaikeamman" },
          { label: "Komparatiivi (part.)", form: "vaikeampaa" },
          { label: "Superlatiivi (nom.)", form: "vaikein" },
          { label: "Superlatiivi (gen.)", form: "vaikeimman" },
          { label: "Superlatiivi (part.)", form: "vaikeinta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaikeus",
      en: "difficulty",
      taso: "B1",
      esim: { fi: "Kohtasimme monia vaikeuksia.", en: "We faced many difficulties." },
    },
    {
      fi: "vaikeasti",
      en: "with difficulty, severely",
      taso: "B2",
      esim: { fi: "Hän loukkaantui vaikeasti.", en: "He was severely injured." },
    },
    {
      fi: "vaikeutua",
      en: "to become harder",
      taso: "B2",
      esim: { fi: "Tilanne vaikeutui entisestään.", en: "The situation got even harder." },
    },
  ],
  synonyymit: [
    { fi: "hankala", en: "tricky, awkward" },
    { fi: "haastava", en: "challenging" },
  ],
  esimerkit: {
    A2: { fi: "Tämä sana on vaikea.", en: "This word is difficult." },
    B1: { fi: "Koe oli vaikeampi kuin odotin.", en: "The exam was harder than I expected." },
    B2: {
      fi: "Vaikeinta oli päättää, mistä aloittaa.",
      en: "The hardest part was deciding where to begin.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vaikea;
