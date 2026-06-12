import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus nominal type 1/valo, k:v gradation.
// Genitive suvun, partitive sukua, plural partitive sukuja.
const suku: Word = {
  fi: "suku",
  slug: "suku",
  pos: "substantiivi",
  posClass: "substantiivi",
  level: "A2",
  en: "family (extended), kin, relatives",
  selitys:
    "Saman suvun jäsenet; sukulaiset laajemmin. Tyyppi 1/valo, astevaihtelu k:v: suku → suvun. Vrt. perhe (lähiperhe) ja sukulainen (relative).",
  kuva: { alt: "suku – sukupuu ja sukulaiset" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu k:v",
    muodot: [
      { sija: "genetiivi", muoto: "suvun", merkitys: "the family's, kin's" },
      { sija: "partitiivi", muoto: "sukua", merkitys: "family (partitive)" },
      { sija: "monikon partitiivi", muoto: "sukuja", merkitys: "families/kins (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa k → v: suvun, suvussa (mutta suku, sukua, sukuun). Suku = laajempi sukulaisten joukko; perhe = lähiperhe. Sukupuu = family tree.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö",
        rows: [
          { label: "Nominatiivi", form: "suku" },
          { label: "Genetiivi", form: "suvun" },
          { label: "Partitiivi", form: "sukua" },
          { label: "Inessiivi", form: "suvussa" },
          { label: "Elatiivi", form: "suvusta" },
          { label: "Illatiivi", form: "sukuun" },
          { label: "Adessiivi", form: "suvulla" },
          { label: "Allatiivi", form: "suvulle" },
        ],
      },
      {
        title: "Monikko",
        rows: [
          { label: "Nominatiivi", form: "suvut" },
          { label: "Partitiivi", form: "sukuja" },
          { label: "Genetiivi", form: "sukujen" },
          { label: "Inessiivi", form: "suvuissa" },
          { label: "Illatiivi", form: "sukuihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sukulainen",
      en: "relative",
      taso: "A2",
      esim: { fi: "Meillä on sukulaisia Ruotsissa.", en: "We have relatives in Sweden." },
    },
    {
      fi: "sukupuu",
      en: "family tree",
      taso: "B1",
      esim: { fi: "Piirsin sukupuun isovanhemmista.", en: "I drew a family tree from my grandparents." },
    },
    {
      fi: "sukunimi",
      en: "surname, family name",
      taso: "A2",
      esim: { fi: "Mikä on sukunimesi?", en: "What is your surname?" },
    },
  ],
  synonyymit: [
    { fi: "sukulaiset", en: "relatives" },
    { fi: "suvun jäsenet", en: "members of the family" },
  ],
  esimerkit: {
    A2: { fi: "Koko suku kokoontui juhliin.", en: "The whole family gathered for the party." },
    B1: { fi: "Suvussamme on monta opettajaa.", en: "There are many teachers in our family." },
    B2: {
      fi: "Hän tutki suvun historiaa ja löysi sukulaisia, joista ei ollut koskaan kuullut.",
      en: "She studied the family's history and found relatives she had never heard of.",
    },
  },
  updatedAt: "2026-06-05",
};

export default suku;
