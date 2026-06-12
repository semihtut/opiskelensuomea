import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem vähemmistö-.
// Genitive vähemmistön, partitive vähemmistöä, partitive pl vähemmistöjä.
const vahemmisto: Word = {
  fi: "vähemmistö",
  slug: "vähemmistö",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B2",
  en: "minority",
  selitys:
    "Ryhmän pienempi osa, alle puolet: 'kielellinen vähemmistö'. Tyyppi 2/palvelu, ei astevaihtelua. Sanasta vähän/vähempi. Vastakohta enemmistö. Vrt. enemmistö, vähän, ryhmä.",
  kuva: { alt: "vähemmistö – ryhmän pienempi osa, alle puolet" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo vähemmistö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vähemmistön", merkitys: "of the minority" },
      { sija: "partitiivi (yks.)", muoto: "vähemmistöä", merkitys: "minority (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vähemmistöjä", merkitys: "minorities (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2/palvelu: ei astevaihtelua. Sanasta vähempi + -stö. Vastakohta enemmistö = majority. Kielivähemmistö, vähemmistöryhmä. Vrt. enemmistö.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vähemmistö" },
          { label: "Partitiivi", form: "vähemmistöä" },
          { label: "Genetiivi", form: "vähemmistön" },
          { label: "Inessiivi", form: "vähemmistössä" },
          { label: "Elatiivi", form: "vähemmistöstä" },
          { label: "Illatiivi", form: "vähemmistöön" },
          { label: "Adessiivi", form: "vähemmistöllä" },
          { label: "Ablatiivi", form: "vähemmistöltä" },
          { label: "Allatiivi", form: "vähemmistölle" },
          { label: "Essiivi", form: "vähemmistönä" },
          { label: "Translatiivi", form: "vähemmistöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vähemmistöt" },
          { label: "Partitiivi", form: "vähemmistöjä" },
          { label: "Genetiivi", form: "vähemmistöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "enemmistö",
      en: "majority",
      taso: "B2",
      esim: { fi: "Enemmistö äänesti puolesta.", en: "The majority voted in favour." },
    },
    {
      fi: "vähemmistökieli",
      en: "minority language",
      taso: "B2",
      esim: { fi: "Saame on vähemmistökieli Suomessa.", en: "Sámi is a minority language in Finland." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "He ovat vähemmistö.", en: "They are a minority." },
    B1: { fi: "Vain vähemmistö kannatti ehdotusta.", en: "Only a minority supported the proposal." },
    B2: {
      fi: "Demokratiassa myös vähemmistön oikeuksia on suojeltava.",
      en: "In a democracy, the rights of the minority must also be protected.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vahemmisto;
