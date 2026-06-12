import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem enemmistö-.
// Genitive enemmistön, partitive enemmistöä, partitive pl enemmistöjä.
const enemmisto: Word = {
  fi: "enemmistö",
  slug: "enemmistö",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "majority",
  selitys:
    "Suurempi osa ryhmästä, yli puolet: 'enemmistö äänesti puolesta'. Tyyppi 2/palvelu, ei astevaihtelua; partitiivin monikko enemmistöjä. Johdettu sanasta enempi/enemmän. Vastakohta vähemmistö.",
  kuva: { alt: "enemmistö – suurempi osa ryhmästä, yli puolet" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo enemmistö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "enemmistön", merkitys: "of the majority" },
      { sija: "partitiivi (yks.)", muoto: "enemmistöä", merkitys: "majority (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "enemmistöjä", merkitys: "majorities (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2 (-stö): partitiivin monikko -jä (enemmistöjä), ei astevaihtelua. Vastakohta vähemmistö. 'Enemmistö jostakin' (elatiivi): enemmistö äänestäjistä. Predikaatti usein yksikössä: 'enemmistö kannatti'.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "enemmistö" },
          { label: "Partitiivi", form: "enemmistöä" },
          { label: "Genetiivi", form: "enemmistön" },
          { label: "Inessiivi", form: "enemmistössä" },
          { label: "Elatiivi", form: "enemmistöstä" },
          { label: "Illatiivi", form: "enemmistöön" },
          { label: "Adessiivi", form: "enemmistöllä" },
          { label: "Ablatiivi", form: "enemmistöltä" },
          { label: "Allatiivi", form: "enemmistölle" },
          { label: "Essiivi", form: "enemmistönä" },
          { label: "Translatiivi", form: "enemmistöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "enemmistöt" },
          { label: "Partitiivi", form: "enemmistöjä" },
          { label: "Genetiivi", form: "enemmistöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vähemmistö",
      en: "minority",
      taso: "B1",
      esim: { fi: "Kielivähemmistöjen oikeudet on turvattu.", en: "The rights of language minorities are secured." },
    },
    {
      fi: "enemmistöpäätös",
      en: "majority decision",
      taso: "B2",
      esim: { fi: "Asia ratkaistiin enemmistöpäätöksellä.", en: "The matter was settled by majority decision." },
    },
  ],
  synonyymit: [
    { fi: "suurin osa", en: "the greater part" },
    { fi: "valtaosa", en: "the bulk, vast majority" },
  ],
  esimerkit: {
    A2: { fi: "Enemmistö valitsi saman vaihtoehdon.", en: "The majority chose the same option." },
    B1: { fi: "Enemmistö äänestäjistä kannatti muutosta.", en: "The majority of voters supported the change." },
    B2: {
      fi: "Vaikka enemmistö oli samaa mieltä, vähemmistön näkemystä ei sivuutettu.",
      en: "Although the majority agreed, the minority's view was not dismissed.",
    },
  },
  updatedAt: "2026-06-07",
};

export default enemmisto;
