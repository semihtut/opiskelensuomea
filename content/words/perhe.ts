import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem perhee-.
// Partitive sg perhettä, partitive pl perheitä, genitive pl perheiden (perheitten).
const perhe: Word = {
  fi: "perhe",
  slug: "perhe",
  pos: "substantiivi (tyyppi: hame)",
  posClass: "substantiivi",
  level: "A1",
  en: "family",
  selitys:
    "Yhdessä elävät vanhemmat ja lapset tai muut läheiset sukulaiset. Vartalo perhee-, ei astevaihtelua.",
  kuva: { alt: "perhe – vanhemmat ja lapset" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo perhee-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "perhettä", merkitys: "family (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "perheen", merkitys: "of the family" },
      { sija: "partitiivi (mon.)", muoto: "perheitä", merkitys: "families (partitive pl.)" },
    ],
    huom:
      "Vartalon e pitenee taivutuksessa: perhe → perheen, perheessä. Monikon genetiivi perheiden (myös perheitten).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "perhe" },
          { label: "Partitiivi", form: "perhettä" },
          { label: "Genetiivi", form: "perheen" },
          { label: "Inessiivi", form: "perheessä" },
          { label: "Elatiivi", form: "perheestä" },
          { label: "Illatiivi", form: "perheeseen" },
          { label: "Adessiivi", form: "perheellä" },
          { label: "Ablatiivi", form: "perheeltä" },
          { label: "Allatiivi", form: "perheelle" },
          { label: "Essiivi", form: "perheenä" },
          { label: "Translatiivi", form: "perheeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "perheet" },
          { label: "Partitiivi", form: "perheitä" },
          { label: "Genetiivi", form: "perheiden" },
          { label: "Inessiivi", form: "perheissä" },
          { label: "Illatiivi", form: "perheisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "perheenjäsen",
      en: "family member",
      taso: "A2",
      esim: { fi: "Jokainen perheenjäsen auttaa kotitöissä.", en: "Every family member helps with chores." },
    },
    {
      fi: "perheellinen",
      en: "having a family, with a family",
      taso: "B1",
      esim: { fi: "Hän on perheellinen mies.", en: "He is a family man." },
    },
    {
      fi: "perhe-elämä",
      en: "family life",
      taso: "B1",
      esim: { fi: "Perhe-elämä vie paljon aikaa.", en: "Family life takes a lot of time." },
    },
  ],
  synonyymit: [
    { fi: "suku", en: "family, kin (extended)" },
    { fi: "kotiväki", en: "household, family (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Minun perheeni on pieni.", en: "My family is small." },
    B1: { fi: "Koko perhe kokoontui juhliin.", en: "The whole family gathered for the celebration." },
    B2: {
      fi: "Perheen merkitys vaihtelee kulttuurista toiseen.",
      en: "The meaning of family varies from one culture to another.",
    },
  },
  updatedAt: "2026-06-04",
};

export default perhe;
