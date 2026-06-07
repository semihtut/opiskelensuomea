import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem arvio-.
// Genitive arvion, partitive arviota, partitive pl arvioita.
const arvio: Word = {
  fi: "arvio",
  slug: "arvio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B1",
  en: "estimate, assessment, evaluation",
  selitys:
    "Likimääräinen käsitys jonkin arvosta tai määrästä: 'karkea arvio'. Tyyppi 3/valtio, ei astevaihtelua; partitiivi arviota, partitiivin monikko arvioita. Johdettu verbistä arvioida. Vrt. arvioida, arviointi, arvaus.",
  kuva: { emoji: "📊", alt: "arvio – likimääräinen käsitys arvosta tai määrästä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua (vartalo arvio-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "arvion", merkitys: "of the estimate" },
      { sija: "partitiivi (yks.)", muoto: "arviota", merkitys: "estimate (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "arvioita", merkitys: "estimates (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3 (-io): partitiivi -ota (arviota), partitiivin monikko -oita (arvioita). Ei astevaihtelua. Johdettu verbistä arvioida. 'Karkea/varovainen arvio' = rough/cautious estimate. Vrt. arvaus = guess.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "arvio" },
          { label: "Partitiivi", form: "arviota" },
          { label: "Genetiivi", form: "arvion" },
          { label: "Inessiivi", form: "arviossa" },
          { label: "Elatiivi", form: "arviosta" },
          { label: "Illatiivi", form: "arvioon" },
          { label: "Adessiivi", form: "arviolla" },
          { label: "Ablatiivi", form: "arviolta" },
          { label: "Allatiivi", form: "arviolle" },
          { label: "Essiivi", form: "arviona" },
          { label: "Translatiivi", form: "arvioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "arviot" },
          { label: "Partitiivi", form: "arvioita" },
          { label: "Genetiivi", form: "arvioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "arvioida",
      en: "to estimate, assess",
      taso: "B1",
      esim: { fi: "Arvioi hinta etukäteen.", en: "Estimate the price in advance." },
    },
    {
      fi: "arviointi",
      en: "evaluation",
      taso: "B2",
      esim: { fi: "Riskien arviointi on tärkeää.", en: "Risk assessment is important." },
    },
  ],
  synonyymit: [
    { fi: "arvaus", en: "guess" },
    { fi: "arviointi", en: "assessment" },
  ],
  esimerkit: {
    A2: { fi: "Anna oma arviosi.", en: "Give your own estimate." },
    B1: { fi: "Arvion mukaan työ kestää viikon.", en: "According to the estimate, the work takes a week." },
    B2: {
      fi: "Asiantuntijoiden arviot tulevasta kehityksestä erosivat toisistaan.",
      en: "The experts' estimates of future developments differed from one another.",
    },
  },
  updatedAt: "2026-06-07",
};

export default arvio;
