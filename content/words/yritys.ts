import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem yritykse-.
// Genitive yrityksen, partitive yritystä, illative yritykseen, partitive pl yrityksiä.
const yritys: Word = {
  fi: "yritys",
  slug: "yritys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "company, business; attempt",
  selitys:
    "Liiketoimintaa harjoittava organisaatio — tai yritys tehdä jotain: 'iso yritys' / 'hyvä yritys!'. Tyyppi 39, ei astevaihtelua. Juuri verbistä yrittää. Vrt. firma, yrittäjä (entrepreneur).",
  kuva: { emoji: "🏢", alt: "yritys – liiketoimintaa harjoittava organisaatio" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo yritykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yrityksen", merkitys: "of the company" },
      { sija: "partitiivi (yks.)", muoto: "yritystä", merkitys: "company (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yrityksiä", merkitys: "companies (partitive pl.)" },
    ],
    huom:
      "Loppu -ys (verbijohdos) → vartalo -ykse-: yritys → yrityksen. Kaksi merkitystä: 1) firma, 2) yritys tehdä ('yritys ja erehdys' = trial and error). Vrt. yrittää = to try, yrittäjä = entrepreneur.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yritys" },
          { label: "Partitiivi", form: "yritystä" },
          { label: "Genetiivi", form: "yrityksen" },
          { label: "Inessiivi", form: "yrityksessä" },
          { label: "Elatiivi", form: "yrityksestä" },
          { label: "Illatiivi", form: "yritykseen" },
          { label: "Adessiivi", form: "yrityksellä" },
          { label: "Ablatiivi", form: "yritykseltä" },
          { label: "Allatiivi", form: "yritykselle" },
          { label: "Essiivi", form: "yrityksenä" },
          { label: "Translatiivi", form: "yritykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yritykset" },
          { label: "Partitiivi", form: "yrityksiä" },
          { label: "Genetiivi", form: "yritysten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yrittäjä",
      en: "entrepreneur",
      taso: "B1",
      esim: { fi: "Hän on menestyvä yrittäjä.", en: "She is a successful entrepreneur." },
    },
    {
      fi: "yritystoiminta",
      en: "business activity",
      taso: "B2",
      esim: { fi: "Yritystoiminta kasvoi nopeasti.", en: "The business activity grew quickly." },
    },
    {
      fi: "yrittää",
      en: "to try, attempt",
      taso: "A2",
      esim: { fi: "Yritä uudestaan.", en: "Try again." },
    },
  ],
  synonyymit: [
    { fi: "firma", en: "firm (colloquial)" },
    { fi: "liike", en: "business, shop" },
  ],
  esimerkit: {
    A2: { fi: "Hän perusti oman yrityksen.", en: "He founded his own company." },
    B1: { fi: "Yritys palkkasi kymmenen uutta työntekijää.", en: "The company hired ten new employees." },
    B2: {
      fi: "Pienen yrityksen on vaikea kilpailla suurten kanssa.",
      en: "A small company finds it hard to compete with the big ones.",
    },
  },
  updatedAt: "2026-06-06",
};

export default yritys;
