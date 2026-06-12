import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, kk–k gradation, stem esimerkki-/esimerki-.
// Genitive esimerkin, partitive esimerkkiä, illative esimerkkiin, partitive pl esimerkkejä.
const esimerkki: Word = {
  fi: "esimerkki",
  slug: "esimerkki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "example",
  selitys:
    "Yksittäistapaus, joka havainnollistaa asiaa: 'hyvä esimerkki'. Tyyppi 5, astevaihtelu kk:k (esimerkki → esimerkin). 'Esimerkiksi' = for example. Juuri: esi- + merkki.",
  kuva: { alt: "esimerkki – havainnollistava tapaus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "esimerkin", merkitys: "of the example" },
      { sija: "partitiivi (yks.)", muoto: "esimerkkiä", merkitys: "example (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "esimerkkejä", merkitys: "examples (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu kk:k: esimerkin, esimerkissä (heikko), mutta esimerkki, esimerkkiä, esimerkkeinä (vahva). 'Esimerkiksi' (esim.) = for example. 'Näyttää esimerkkiä' = to set an example.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "esimerkki" },
          { label: "Partitiivi", form: "esimerkkiä" },
          { label: "Genetiivi", form: "esimerkin" },
          { label: "Inessiivi", form: "esimerkissä" },
          { label: "Elatiivi", form: "esimerkistä" },
          { label: "Illatiivi", form: "esimerkkiin" },
          { label: "Adessiivi", form: "esimerkillä" },
          { label: "Ablatiivi", form: "esimerkiltä" },
          { label: "Allatiivi", form: "esimerkille" },
          { label: "Essiivi", form: "esimerkkinä" },
          { label: "Translatiivi", form: "esimerkiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "esimerkit" },
          { label: "Partitiivi", form: "esimerkkejä" },
          { label: "Genetiivi", form: "esimerkkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "esimerkiksi",
      en: "for example (esim.)",
      taso: "A2",
      esim: { fi: "Pidän hedelmistä, esimerkiksi omenoista.", en: "I like fruit, for example apples." },
    },
    {
      fi: "esimerkillinen",
      en: "exemplary",
      taso: "B2",
      esim: { fi: "Hänen käytöksensä oli esimerkillistä.", en: "His behaviour was exemplary." },
    },
    {
      fi: "merkki",
      en: "sign, mark; brand",
      taso: "A2",
      esim: { fi: "Se on hyvä merkki.", en: "That's a good sign." },
    },
  ],
  synonyymit: [
    { fi: "malli", en: "model, pattern" },
    { fi: "tapaus", en: "case, instance" },
  ],
  esimerkit: {
    A2: { fi: "Anna minulle esimerkki.", en: "Give me an example." },
    B1: { fi: "Tämä on hyvä esimerkki ongelmasta.", en: "This is a good example of the problem." },
    B2: {
      fi: "Vanhemmat näyttävät esimerkkiä omalla käytöksellään.",
      en: "Parents set an example through their own behaviour.",
    },
  },
  updatedAt: "2026-06-06",
};

export default esimerkki;
