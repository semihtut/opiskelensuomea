import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem poske-.
// Genitive posken, partitive poskea, partitive pl poskia.
const poski: Word = {
  fi: "poski",
  slug: "poski",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "B1",
  en: "cheek",
  selitys:
    "Kasvojen pehmeä sivuosa nenän ja korvan välissä: 'punaiset posket'. Tyyppi 7/ovi, ei astevaihtelua. Vrt. kasvot, poskipää, suudella.",
  kuva: { alt: "poski – kasvojen pehmeä sivuosa nenän ja korvan välissä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo poske-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "posken", merkitys: "of the cheek" },
      { sija: "partitiivi (yks.)", muoto: "poskea", merkitys: "cheek (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "poskia", merkitys: "cheeks (partitive pl.)" },
    ],
    huom:
      "Tyyppi 7/ovi: ei astevaihtelua (sk säilyy), vartalo poske- (posken, poskella), partitiivi poskea, partitiivin monikko poskia. Poskipää = cheekbone. Vrt. kasvot, korva.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "poski" },
          { label: "Partitiivi", form: "poskea" },
          { label: "Genetiivi", form: "posken" },
          { label: "Inessiivi", form: "poskessa" },
          { label: "Elatiivi", form: "poskesta" },
          { label: "Illatiivi", form: "poskeen" },
          { label: "Adessiivi", form: "poskella" },
          { label: "Ablatiivi", form: "poskelta" },
          { label: "Allatiivi", form: "poskelle" },
          { label: "Essiivi", form: "poskena" },
          { label: "Translatiivi", form: "poskeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "posket" },
          { label: "Partitiivi", form: "poskia" },
          { label: "Genetiivi", form: "poskien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "poskipää",
      en: "cheekbone",
      taso: "B2",
      esim: { fi: "Hänellä on korkeat poskipäät.", en: "She has high cheekbones." },
    },
    {
      fi: "poskisuudelma",
      en: "kiss on the cheek",
      taso: "B2",
      esim: { fi: "He tervehtivät poskisuudelmin.", en: "They greeted each other with kisses on the cheek." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Hänen poskensa punastuivat.", en: "His cheeks turned red." },
    B1: { fi: "Lapsella on pyöreät posket.", en: "The child has round cheeks." },
    B2: {
      fi: "Pakkanen pani posket punaisiksi heti ulkona.",
      en: "The frost turned our cheeks red as soon as we were outside.",
    },
  },
  updatedAt: "2026-06-07",
};

export default poski;
