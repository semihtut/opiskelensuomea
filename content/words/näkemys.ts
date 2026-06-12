import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem näkemykse-.
// Genitive näkemyksen, partitive näkemystä, partitive pl näkemyksiä.
const nakemys: Word = {
  fi: "näkemys",
  slug: "näkemys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "view, vision, opinion",
  selitys:
    "Tapa nähdä tai ymmärtää jokin asia; perusteltu mielipide tai visio: 'selkeä näkemys tulevaisuudesta'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä nähdä. Vrt. mielipide, kanta.",
  kuva: { alt: "näkemys – tapa nähdä tai ymmärtää asia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo näkemykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "näkemyksen", merkitys: "of the view" },
      { sija: "partitiivi (yks.)", muoto: "näkemystä", merkitys: "view (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "näkemyksiä", merkitys: "views (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us/-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Ei astevaihtelua. Asiasta elatiivi: 'näkemys asiasta'. Vahvempi kuin pelkkä mielipide – usein perusteltu kokonaiskuva.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "näkemys" },
          { label: "Partitiivi", form: "näkemystä" },
          { label: "Genetiivi", form: "näkemyksen" },
          { label: "Inessiivi", form: "näkemyksessä" },
          { label: "Elatiivi", form: "näkemyksestä" },
          { label: "Illatiivi", form: "näkemykseen" },
          { label: "Adessiivi", form: "näkemyksellä" },
          { label: "Ablatiivi", form: "näkemykseltä" },
          { label: "Allatiivi", form: "näkemykselle" },
          { label: "Essiivi", form: "näkemyksenä" },
          { label: "Translatiivi", form: "näkemykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "näkemykset" },
          { label: "Partitiivi", form: "näkemyksiä" },
          { label: "Genetiivi", form: "näkemyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "näkemyksellinen",
      en: "visionary, perceptive",
      taso: "B2",
      esim: { fi: "Hän on näkemyksellinen johtaja.", en: "She is a visionary leader." },
    },
    {
      fi: "maailmankatsomus",
      en: "worldview",
      taso: "B2",
      esim: { fi: "Heillä on erilainen maailmankatsomus.", en: "They have a different worldview." },
    },
  ],
  synonyymit: [
    { fi: "mielipide", en: "opinion" },
    { fi: "kanta", en: "stance, position" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on selkeä näkemys asiasta.", en: "He has a clear view on the matter." },
    B1: { fi: "Jaan saman näkemyksen kanssasi.", en: "I share the same view as you." },
    B2: {
      fi: "Asiantuntijoiden näkemykset erosivat toisistaan voimakkaasti.",
      en: "The experts' views differed strongly from one another.",
    },
  },
  updatedAt: "2026-06-07",
};

export default nakemys;
