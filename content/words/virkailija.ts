import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem virkailija-.
// Genitive virkailijan, partitive virkailijaa, partitive pl virkailijoita.
const virkailija: Word = {
  fi: "virkailija",
  slug: "virkailija",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "clerk, official, attendant",
  selitys:
    "Henkilö, joka palvelee asiakkaita virastossa tai toimistossa: 'pankkivirkailija', 'asioida virkailijan kanssa'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko virkailijoita. Sanasta virka. Vrt. virka, virasto, viranomainen.",
  kuva: { emoji: "💁", alt: "virkailija – henkilö joka palvelee asiakkaita virastossa tai toimistossa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo virkailija-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "virkailijan", merkitys: "of the clerk" },
      { sija: "partitiivi (yks.)", muoto: "virkailijaa", merkitys: "clerk (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "virkailijoita", merkitys: "clerks (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12/kulkija: ei astevaihtelua. Partitiivin monikko virkailijoita, genetiivin monikko virkailijoiden. Pankkivirkailija, postivirkailija, toimistovirkailija. Vrt. virka, virasto.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "virkailija" },
          { label: "Partitiivi", form: "virkailijaa" },
          { label: "Genetiivi", form: "virkailijan" },
          { label: "Inessiivi", form: "virkailijassa" },
          { label: "Elatiivi", form: "virkailijasta" },
          { label: "Illatiivi", form: "virkailijaan" },
          { label: "Adessiivi", form: "virkailijalla" },
          { label: "Ablatiivi", form: "virkailijalta" },
          { label: "Allatiivi", form: "virkailijalle" },
          { label: "Essiivi", form: "virkailijana" },
          { label: "Translatiivi", form: "virkailijaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "virkailijat" },
          { label: "Partitiivi", form: "virkailijoita" },
          { label: "Genetiivi", form: "virkailijoiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pankkivirkailija",
      en: "bank clerk",
      taso: "B1",
      esim: { fi: "Pankkivirkailija auttoi minua.", en: "The bank clerk helped me." },
    },
    {
      fi: "virkamies",
      en: "civil servant",
      taso: "B2",
      esim: { fi: "Virkamies valmisteli päätöksen.", en: "The civil servant prepared the decision." },
    },
  ],
  synonyymit: [
    { fi: "toimihenkilö", en: "office employee" },
  ],
  esimerkit: {
    A2: { fi: "Virkailija on ystävällinen.", en: "The clerk is friendly." },
    B1: { fi: "Kysyin neuvoa virkailijalta.", en: "I asked the clerk for advice." },
    B2: {
      fi: "Virkailija pyysi minua täyttämään lomakkeen ja ottamaan vuoronumeron.",
      en: "The clerk asked me to fill in the form and take a queue number.",
    },
  },
  updatedAt: "2026-06-07",
};

export default virkailija;
