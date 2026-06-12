import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem vihannekse-.
// Genitive vihanneksen, partitive vihannesta, illative vihannekseen, partitive pl vihanneksia.
const vihannes: Word = {
  fi: "vihannes",
  slug: "vihannes",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "vegetable",
  selitys:
    "Syötävä kasvi tai sen osa, esim. porkkana tai salaatti: 'tuoreita vihanneksia'. Tyyppi 39, ei astevaihtelua; vartalo vihannekse-. Partitiivin monikko vihanneksia. Johdettu sanasta vihanta.",
  kuva: { alt: "vihannes – syötävä kasvi tai sen osa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo vihannekse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vihanneksen", merkitys: "of the vegetable" },
      { sija: "partitiivi (yks.)", muoto: "vihannesta", merkitys: "vegetable (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vihanneksia", merkitys: "vegetables (partitive pl.)" },
    ],
    huom:
      "Vartalo vihannekse- (genetiivi vihanneksen). Käytetään usein monikossa: vihannekset = vegetables. Vrt. vihanneskeitto = vegetable soup, juures = root vegetable.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vihannes" },
          { label: "Partitiivi", form: "vihannesta" },
          { label: "Genetiivi", form: "vihanneksen" },
          { label: "Inessiivi", form: "vihanneksessa" },
          { label: "Elatiivi", form: "vihanneksesta" },
          { label: "Illatiivi", form: "vihannekseen" },
          { label: "Adessiivi", form: "vihanneksella" },
          { label: "Ablatiivi", form: "vihannekselta" },
          { label: "Allatiivi", form: "vihannekselle" },
          { label: "Essiivi", form: "vihanneksena" },
          { label: "Translatiivi", form: "vihannekseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vihannekset" },
          { label: "Partitiivi", form: "vihanneksia" },
          { label: "Genetiivi", form: "vihannesten / vihanneksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vihanneskeitto",
      en: "vegetable soup",
      taso: "B1",
      esim: { fi: "Keitin vihanneskeittoa.", en: "I made vegetable soup." },
    },
    {
      fi: "juures",
      en: "root vegetable",
      taso: "B2",
      esim: { fi: "Porkkana on juures.", en: "The carrot is a root vegetable." },
    },
    {
      fi: "kasvis",
      en: "vegetable, plant-based food",
      taso: "B1",
      esim: { fi: "Syön paljon kasviksia.", en: "I eat a lot of vegetables." },
    },
  ],
  synonyymit: [
    { fi: "kasvis", en: "vegetable" },
    { fi: "vihreä", en: "greens (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Ostin vihanneksia torilta.", en: "I bought vegetables at the market." },
    B1: { fi: "Lautasella oli lihaa ja vihanneksia.", en: "There was meat and vegetables on the plate." },
    B2: {
      fi: "Tuoreet vihannekset sisältävät paljon vitamiineja ja kuitua.",
      en: "Fresh vegetables contain a lot of vitamins and fibre.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vihannes;
