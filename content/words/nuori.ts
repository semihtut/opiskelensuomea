import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation. Consonant stem
// shows in partitive sg nuorta and genitive pl nuorten. Comparison nuorempi, nuorin.
const nuori: Word = {
  fi: "nuori",
  slug: "nuori",
  pos: "adjektiivi (tyyppi: pieni)",
  posClass: "adjektiivi",
  level: "A1",
  en: "young; a young person",
  selitys:
    "Vähän aikaa elänyt; vanhan vastakohta. Toimii myös substantiivina ('nuoret' = the young). Konsonanttivartalo (partitiivi nuorta).",
  kuva: { emoji: "🧑", alt: "nuori – nuori henkilö" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 26/pieni; ei astevaihtelua, konsonanttivartalo; vertailu nuorempi – nuorin",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "nuorta", merkitys: "young (partitive)" },
      { sija: "komparatiivi", muoto: "nuorempi", merkitys: "younger" },
      { sija: "superlatiivi", muoto: "nuorin", merkitys: "youngest" },
    ],
    huom:
      "Konsonanttivartalo näkyy partitiivissa nuorta ja monikon genetiivissä nuorten (myös nuorien). Käytössä myös substantiivina: nuoret = nuoret ihmiset.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "nuori" },
          { label: "Partitiivi", form: "nuorta" },
          { label: "Genetiivi", form: "nuoren" },
          { label: "Inessiivi", form: "nuoressa" },
          { label: "Illatiivi", form: "nuoreen" },
          { label: "Adessiivi", form: "nuorella" },
          { label: "Essiivi", form: "nuorena" },
          { label: "Translatiivi", form: "nuoreksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nuoret" },
          { label: "Partitiivi", form: "nuoria" },
          { label: "Genetiivi", form: "nuorten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "nuorempi" },
          { label: "Komparatiivi (gen.)", form: "nuoremman" },
          { label: "Komparatiivi (part.)", form: "nuorempaa" },
          { label: "Superlatiivi (nom.)", form: "nuorin" },
          { label: "Superlatiivi (gen.)", form: "nuorimman" },
          { label: "Superlatiivi (part.)", form: "nuorinta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nuoruus",
      en: "youth (the period of life)",
      taso: "B1",
      esim: { fi: "Hän muistelee nuoruuttaan usein.", en: "He often reminisces about his youth." },
    },
    {
      fi: "nuoriso",
      en: "the youth, young people",
      taso: "B1",
      esim: { fi: "Nuoriso kokoontui torille.", en: "The youth gathered in the square." },
    },
    {
      fi: "nuorukainen",
      en: "youth, young man",
      taso: "B2",
      esim: { fi: "Nuorukainen tarjoutui auttamaan.", en: "The young man offered to help." },
    },
  ],
  synonyymit: [
    { fi: "nuorekas", en: "youthful" },
    { fi: "teini", en: "teenager (informal, narrower)" },
  ],
  esimerkit: {
    A2: { fi: "Hän on vielä nuori.", en: "He/she is still young." },
    B1: { fi: "Nuoret ihmiset käyttävät paljon sosiaalista mediaa.", en: "Young people use social media a lot." },
    B2: {
      fi: "Nuorempana matkustin paljon ulkomailla.",
      en: "When I was younger I traveled abroad a lot.",
    },
  },
  updatedAt: "2026-06-04",
};

export default nuori;
