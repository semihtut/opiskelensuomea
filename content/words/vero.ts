import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem vero-.
// Genitive veron, partitive veroa, partitive pl veroja.
const vero: Word = {
  fi: "vero",
  slug: "vero",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "tax",
  selitys:
    "Pakollinen maksu valtiolle tai kunnalle: 'maksaa veroja'. Tyyppi 1/valo, ei astevaihtelua; partitiivin monikko veroja. Vrt. verottaa, verotus, maksu.",
  kuva: { alt: "vero – pakollinen maksu valtiolle tai kunnalle" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo vero-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "veron", merkitys: "of the tax" },
      { sija: "partitiivi (yks.)", muoto: "veroa", merkitys: "tax (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "veroja", merkitys: "taxes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1 (-o): partitiivin monikko -ja (veroja), ei astevaihtelua. 'Maksaa veroa/veroja' = to pay tax(es). Vrt. verottaa = to tax, verotus = taxation, tulovero = income tax.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vero" },
          { label: "Partitiivi", form: "veroa" },
          { label: "Genetiivi", form: "veron" },
          { label: "Inessiivi", form: "verossa" },
          { label: "Elatiivi", form: "verosta" },
          { label: "Illatiivi", form: "veroon" },
          { label: "Adessiivi", form: "verolla" },
          { label: "Ablatiivi", form: "verolta" },
          { label: "Allatiivi", form: "verolle" },
          { label: "Essiivi", form: "verona" },
          { label: "Translatiivi", form: "veroksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "verot" },
          { label: "Partitiivi", form: "veroja" },
          { label: "Genetiivi", form: "verojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verottaa",
      en: "to tax",
      taso: "B2",
      esim: { fi: "Tuloja verotetaan.", en: "Income is taxed." },
    },
    {
      fi: "verotus",
      en: "taxation",
      taso: "B2",
      esim: { fi: "Verotus on Suomessa melko korkea.", en: "Taxation in Finland is fairly high." },
    },
    {
      fi: "tulovero",
      en: "income tax",
      taso: "B2",
      esim: { fi: "Maksan tuloveroa.", en: "I pay income tax." },
    },
  ],
  synonyymit: [
    { fi: "maksu", en: "fee, payment" },
  ],
  esimerkit: {
    A2: { fi: "Maksan veroja.", en: "I pay taxes." },
    B1: { fi: "Veron osuus hinnasta on suuri.", en: "The tax's share of the price is large." },
    B2: {
      fi: "Hallitus päätti laskea pienituloisten veroja ensi vuonna.",
      en: "The government decided to lower the taxes of low-income earners next year.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vero;
