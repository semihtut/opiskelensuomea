import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem joustava-. Participle of joustaa.
// Genitive joustavan, partitive joustavaa, partitive pl joustavia.
const joustava: Word = {
  fi: "joustava",
  slug: "joustava",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "flexible, adaptable",
  selitys:
    "Taipuisa tai sopeutuva, sekä konkreettisesti että käytökseltään: 'joustava työaika'. Tyyppi 10/koira, ei astevaihtelua. Verbin joustaa partisiippi. Vastakohta jäykkä. Vrt. joustaa, joustavuus.",
  kuva: { alt: "joustava – taipuisa ja sopeutuva" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua (vartalo joustava-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "joustavan", merkitys: "of flexible" },
      { sija: "partitiivi (yks.)", muoto: "joustavaa", merkitys: "flexible (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "joustavia", merkitys: "flexible (partitive pl.)" },
    ],
    huom:
      "Verbin joustaa partisiippi, käytetään adjektiivina. Partitiivin monikko joustavia. Vastakohta jäykkä. 'Joustava työaika' = flexible working hours. Vrt. joustavuus = flexibility.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "joustava" },
          { label: "Partitiivi", form: "joustavaa" },
          { label: "Genetiivi", form: "joustavan" },
          { label: "Inessiivi", form: "joustavassa" },
          { label: "Elatiivi", form: "joustavasta" },
          { label: "Illatiivi", form: "joustavaan" },
          { label: "Adessiivi", form: "joustavalla" },
          { label: "Allatiivi", form: "joustavalle" },
          { label: "Translatiivi", form: "joustavaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "joustavat" },
          { label: "Partitiivi", form: "joustavia" },
          { label: "Genetiivi", form: "joustavien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "joustava" },
          { label: "Komparatiivi", form: "joustavampi" },
          { label: "Superlatiivi", form: "joustavin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "joustavuus",
      en: "flexibility",
      taso: "B2",
      esim: { fi: "Työssä arvostetaan joustavuutta.", en: "Flexibility is valued at work." },
    },
    {
      fi: "joustaa",
      en: "to flex, give way; to be flexible",
      taso: "B2",
      esim: { fi: "Voimme joustaa aikataulussa.", en: "We can be flexible with the schedule." },
    },
  ],
  synonyymit: [
    { fi: "sopeutuva", en: "adaptable" },
    { fi: "taipuisa", en: "pliable, supple" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on joustava aikataulu.", en: "We have a flexible schedule." },
    B1: { fi: "Hän on joustava ja yhteistyökykyinen.", en: "She is flexible and cooperative." },
    B2: {
      fi: "Joustavat työjärjestelyt auttoivat sovittamaan työn ja perheen yhteen.",
      en: "Flexible work arrangements helped combine work and family.",
    },
  },
  updatedAt: "2026-06-07",
};

export default joustava;
