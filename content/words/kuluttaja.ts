import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem kuluttaja-.
// Genitive kuluttajan, partitive kuluttajaa, partitive pl kuluttajia.
const kuluttaja: Word = {
  fi: "kuluttaja",
  slug: "kuluttaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "consumer",
  selitys:
    "Henkilö, joka ostaa ja käyttää tuotteita ja palveluja: 'kuluttajan oikeudet'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko kuluttajia. Johdettu verbistä kuluttaa. Vrt. kuluttaa, asiakas, tuottaja.",
  kuva: { emoji: "🧑‍💼", alt: "kuluttaja – henkilö joka ostaa ja käyttää tuotteita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo kuluttaja-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kuluttajan", merkitys: "of the consumer" },
      { sija: "partitiivi (yks.)", muoto: "kuluttajaa", merkitys: "consumer (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kuluttajia", merkitys: "consumers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10 (-ja, neljä tavua): partitiivin monikko -ia (kuluttajia), ei astevaihtelua. Tekijännimi verbistä kuluttaa. Vrt. tuottaja = producer, asiakas = customer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kuluttaja" },
          { label: "Partitiivi", form: "kuluttajaa" },
          { label: "Genetiivi", form: "kuluttajan" },
          { label: "Inessiivi", form: "kuluttajassa" },
          { label: "Elatiivi", form: "kuluttajasta" },
          { label: "Illatiivi", form: "kuluttajaan" },
          { label: "Adessiivi", form: "kuluttajalla" },
          { label: "Ablatiivi", form: "kuluttajalta" },
          { label: "Allatiivi", form: "kuluttajalle" },
          { label: "Essiivi", form: "kuluttajana" },
          { label: "Translatiivi", form: "kuluttajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kuluttajat" },
          { label: "Partitiivi", form: "kuluttajia" },
          { label: "Genetiivi", form: "kuluttajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuluttaa",
      en: "to consume, spend",
      taso: "B1",
      esim: { fi: "Hän kuluttaa harkiten.", en: "She spends thoughtfully." },
    },
    {
      fi: "kuluttajansuoja",
      en: "consumer protection",
      taso: "B2",
      esim: { fi: "Kuluttajansuoja on tärkeää.", en: "Consumer protection is important." },
    },
  ],
  synonyymit: [
    { fi: "asiakas", en: "customer" },
    { fi: "ostaja", en: "buyer" },
  ],
  esimerkit: {
    A2: { fi: "Olen tarkka kuluttaja.", en: "I am a careful consumer." },
    B1: { fi: "Kuluttajat haluavat ympäristöystävällisiä tuotteita.", en: "Consumers want eco-friendly products." },
    B2: {
      fi: "Vastuullinen kuluttaja ottaa huomioon tuotteen koko elinkaaren.",
      en: "A responsible consumer considers the product's entire life cycle.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kuluttaja;
