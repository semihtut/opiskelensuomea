import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea, no gradation. Genitive nopean,
// partitive nopeaa, partitive pl nopeita. Comp nopeampi, superl nopein.
const nopea: Word = {
  fi: "nopea",
  slug: "nopea",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "A1",
  en: "fast, quick",
  selitys:
    "Suurta vauhtia; lyhyessä ajassa tapahtuva. Tyyppi 15, ei astevaihtelua. Vastakohta hidas.",
  kuva: { alt: "nopea – nopea vauhti" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "nopean", merkitys: "of the fast" },
      { sija: "partitiivi (yks.)", muoto: "nopeaa", merkitys: "fast (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "nopeita", merkitys: "fast (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi nopeita. Vertailu nopeampi/nopein. Adverbi nopeasti = quickly. Vastakohta hidas.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "nopea" },
          { label: "Partitiivi", form: "nopeaa" },
          { label: "Genetiivi", form: "nopean" },
          { label: "Inessiivi", form: "nopeassa" },
          { label: "Illatiivi", form: "nopeaan" },
          { label: "Adessiivi", form: "nopealla" },
          { label: "Essiivi", form: "nopeana" },
          { label: "Translatiivi", form: "nopeaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nopeat" },
          { label: "Partitiivi", form: "nopeita" },
          { label: "Genetiivi", form: "nopeiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "nopeampi" },
          { label: "Komparatiivi (gen.)", form: "nopeamman" },
          { label: "Superlatiivi (nom.)", form: "nopein" },
          { label: "Superlatiivi (gen.)", form: "nopeimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nopeasti",
      en: "quickly, fast (adverb)",
      taso: "A2",
      esim: { fi: "Hän juoksi nopeasti.", en: "He ran quickly." },
    },
    {
      fi: "nopeus",
      en: "speed, velocity",
      taso: "B1",
      esim: { fi: "Auton nopeus oli liian suuri.", en: "The car's speed was too high." },
    },
    {
      fi: "nopeuttaa",
      en: "to speed up, accelerate",
      taso: "B2",
      esim: { fi: "Uusi kone nopeuttaa työtä.", en: "The new machine speeds up the work." },
    },
  ],
  synonyymit: [
    { fi: "vikkelä", en: "nimble, quick" },
    { fi: "ripeä", en: "brisk, prompt" },
  ],
  esimerkit: {
    A2: { fi: "Juna on nopea.", en: "The train is fast." },
    B1: { fi: "Tämä reitti on nopeampi.", en: "This route is faster." },
    B2: {
      fi: "Nopein tapa päästä keskustaan on metro.",
      en: "The fastest way to get downtown is the metro.",
    },
  },
  updatedAt: "2026-06-05",
};

export default nopea;
