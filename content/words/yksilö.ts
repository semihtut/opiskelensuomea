import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem yksilö-.
// Genitive yksilön, partitive yksilöä, partitive pl yksilöitä.
const yksilo: Word = {
  fi: "yksilö",
  slug: "yksilö",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B2",
  en: "individual",
  selitys:
    "Yksittäinen ihminen tai olento erotuksena ryhmästä: 'yksilön oikeudet'. Tyyppi 2/palvelu, ei astevaihtelua; partitiivin monikko yksilöitä. Sanasta yksi. Vastakohta yhteisö. Vrt. yksi, yksilöllinen, yhteisö.",
  kuva: { emoji: "🧍", alt: "yksilö – yksittäinen ihminen erotuksena ryhmästä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo yksilö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yksilön", merkitys: "of the individual" },
      { sija: "partitiivi (yks.)", muoto: "yksilöä", merkitys: "individual (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yksilöitä", merkitys: "individuals (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2/palvelu: ei astevaihtelua. Partitiivin monikko yksilöitä. Sanasta yksi + -lö. Vastakohta yhteisö = community. Vrt. yksilöllinen = individual (adj).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yksilö" },
          { label: "Partitiivi", form: "yksilöä" },
          { label: "Genetiivi", form: "yksilön" },
          { label: "Inessiivi", form: "yksilössä" },
          { label: "Elatiivi", form: "yksilöstä" },
          { label: "Illatiivi", form: "yksilöön" },
          { label: "Adessiivi", form: "yksilöllä" },
          { label: "Ablatiivi", form: "yksilöltä" },
          { label: "Allatiivi", form: "yksilölle" },
          { label: "Essiivi", form: "yksilönä" },
          { label: "Translatiivi", form: "yksilöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yksilöt" },
          { label: "Partitiivi", form: "yksilöitä" },
          { label: "Genetiivi", form: "yksilöiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yksilöllinen",
      en: "individual, personal",
      taso: "B2",
      esim: { fi: "Jokainen saa yksilöllistä ohjausta.", en: "Everyone gets individual guidance." },
    },
    {
      fi: "yhteisö",
      en: "community",
      taso: "B2",
      esim: { fi: "Yksilö on osa yhteisöä.", en: "The individual is part of a community." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Jokainen yksilö on erilainen.", en: "Every individual is different." },
    B1: { fi: "Yksilön valinnoilla on merkitystä.", en: "An individual's choices matter." },
    B2: {
      fi: "Yhteiskunnan on suojeltava sekä yksilön vapautta että yhteistä etua.",
      en: "Society must protect both individual freedom and the common good.",
    },
  },
  updatedAt: "2026-06-07",
};

export default yksilo;
