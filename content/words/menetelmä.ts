import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem menetelmä-.
// Genitive menetelmän, partitive menetelmää, partitive pl menetelmiä.
const menetelma: Word = {
  fi: "menetelmä",
  slug: "menetelmä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B2",
  en: "method, technique",
  selitys:
    "Järjestelmällinen tapa tehdä jotakin: 'uusi tutkimusmenetelmä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko menetelmiä. Vrt. tapa, keino, menettely.",
  kuva: { alt: "menetelmä – järjestelmällinen tapa tehdä jotakin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo menetelmä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "menetelmän", merkitys: "of the method" },
      { sija: "partitiivi (yks.)", muoto: "menetelmää", merkitys: "method (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "menetelmiä", merkitys: "methods (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10 (-mä): partitiivin monikko -iä (menetelmiä), ei astevaihtelua. 'Tutkimusmenetelmä' = research method. Vrt. tapa = way, keino = means, menettely = procedure.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "menetelmä" },
          { label: "Partitiivi", form: "menetelmää" },
          { label: "Genetiivi", form: "menetelmän" },
          { label: "Inessiivi", form: "menetelmässä" },
          { label: "Elatiivi", form: "menetelmästä" },
          { label: "Illatiivi", form: "menetelmään" },
          { label: "Adessiivi", form: "menetelmällä" },
          { label: "Ablatiivi", form: "menetelmältä" },
          { label: "Allatiivi", form: "menetelmälle" },
          { label: "Essiivi", form: "menetelmänä" },
          { label: "Translatiivi", form: "menetelmäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "menetelmät" },
          { label: "Partitiivi", form: "menetelmiä" },
          { label: "Genetiivi", form: "menetelmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "menettely",
      en: "procedure, conduct",
      taso: "B2",
      esim: { fi: "Menettely oli sääntöjen mukainen.", en: "The procedure was according to the rules." },
    },
    {
      fi: "keino",
      en: "means, way",
      taso: "B1",
      esim: { fi: "Etsimme uusia keinoja.", en: "We're looking for new means." },
    },
  ],
  synonyymit: [
    { fi: "tapa", en: "way, method" },
    { fi: "keino", en: "means" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on hyvä menetelmä.", en: "This is a good method." },
    B1: { fi: "Opettaja kokeili uutta menetelmää.", en: "The teacher tried a new method." },
    B2: {
      fi: "Tutkimuksessa käytettiin sekä määrällisiä että laadullisia menetelmiä.",
      en: "The study used both quantitative and qualitative methods.",
    },
  },
  updatedAt: "2026-06-07",
};

export default menetelma;
