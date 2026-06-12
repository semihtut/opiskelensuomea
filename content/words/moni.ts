import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 23/tiili, no gradation. Singular genitive
// monen, partitive monta; plural monet/monien/monia.
const moni: Word = {
  fi: "moni",
  slug: "moni",
  pos: "pronomini (kvanttoripronomini)",
  posClass: "pronomini",
  level: "A2",
  en: "many (a)",
  selitys:
    "Useita; monta. Tyyppi 23, ei astevaihtelua. Yksikössä laskettavien kanssa: 'moni ihminen', partitiivi 'monta'. Monikko 'monet' = many.",
  kuva: { alt: "moni – monta yksilöä" },

  kielioppi: {
    tyyppi: "kvanttoripronomini, tyyppi 23/tiili; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "monen", merkitys: "of many a" },
      { sija: "partitiivi (yks.)", muoto: "monta", merkitys: "many (with a number-like sense)" },
      { sija: "partitiivi (mon.)", muoto: "monia", merkitys: "many (partitive pl.)" },
    ],
    huom:
      "Yksikkömuotoa käytetään laskettavista: 'moni ihminen', 'monta kertaa' (partitiivi monta + yksikön partitiivi). Monikko 'monet' = many (the). Vrt. paljon (mitattava).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "moni" },
          { label: "Partitiivi", form: "monta" },
          { label: "Genetiivi", form: "monen" },
          { label: "Inessiivi", form: "monessa" },
          { label: "Elatiivi", form: "monesta" },
          { label: "Illatiivi", form: "moneen" },
          { label: "Adessiivi", form: "monella" },
          { label: "Allatiivi", form: "monelle" },
        ],
      },
      {
        title: "Monikko (monet)",
        rows: [
          { label: "Nominatiivi", form: "monet" },
          { label: "Partitiivi", form: "monia" },
          { label: "Genetiivi", form: "monien" },
          { label: "Inessiivi", form: "monissa" },
          { label: "Illatiivi", form: "moniin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "monta",
      en: "many (partitive, with singular noun)",
      taso: "A2",
      esim: { fi: "Kävin siellä monta kertaa.", en: "I went there many times." },
    },
    {
      fi: "moninkertainen",
      en: "manifold, multiple",
      taso: "B2",
      esim: { fi: "Voitto oli moninkertainen.", en: "The profit was manifold." },
    },
    {
      fi: "monipuolinen",
      en: "versatile, varied",
      taso: "B1",
      esim: { fi: "Ruokavalio on monipuolinen.", en: "The diet is varied." },
    },
  ],
  synonyymit: [
    { fi: "usea", en: "several" },
    { fi: "lukuisat", en: "numerous" },
  ],
  esimerkit: {
    A2: { fi: "Moni ihminen pitää kahvista.", en: "Many people like coffee." },
    B1: { fi: "Olen käynyt Suomessa monta kertaa.", en: "I've been to Finland many times." },
    B2: {
      fi: "Monet uskovat, että kova työ palkitaan lopulta.",
      en: "Many believe that hard work is eventually rewarded.",
    },
  },
  updatedAt: "2026-06-05",
};

export default moni;
