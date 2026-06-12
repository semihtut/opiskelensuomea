import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem luonnonvara-.
// Genitive luonnonvaran, partitive luonnonvaraa, partitive pl luonnonvaroja.
const luonnonvara: Word = {
  fi: "luonnonvara",
  slug: "luonnonvara",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B2",
  en: "natural resource",
  selitys:
    "Luonnosta saatava hyödynnettävä aine tai voima, esim. metsä, vesi tai mineraalit: 'uusiutuvat luonnonvarat'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko luonnonvaroja. Usein monikossa. Yhdyssana luonto (gen luonnon) + vara.",
  kuva: { alt: "luonnonvara – luonnosta saatava hyödynnettävä aine tai voima" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo luonnonvara-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luonnonvaran", merkitys: "of the natural resource" },
      { sija: "partitiivi (yks.)", muoto: "luonnonvaraa", merkitys: "natural resource (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "luonnonvaroja", merkitys: "natural resources (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: partitiivin monikko -oja (luonnonvaroja, a→o), ei astevaihtelua. Yhdyssana luonto (gen luonnon) + vara. Usein monikossa: luonnonvarat. 'Uusiutuvat luonnonvarat' = renewable resources.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "luonnonvara" },
          { label: "Partitiivi", form: "luonnonvaraa" },
          { label: "Genetiivi", form: "luonnonvaran" },
          { label: "Inessiivi", form: "luonnonvarassa" },
          { label: "Elatiivi", form: "luonnonvarasta" },
          { label: "Illatiivi", form: "luonnonvaraan" },
          { label: "Adessiivi", form: "luonnonvaralla" },
          { label: "Ablatiivi", form: "luonnonvaralta" },
          { label: "Allatiivi", form: "luonnonvaralle" },
          { label: "Essiivi", form: "luonnonvarana" },
          { label: "Translatiivi", form: "luonnonvaraksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luonnonvarat" },
          { label: "Partitiivi", form: "luonnonvaroja" },
          { label: "Genetiivi", form: "luonnonvarojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luonto",
      en: "nature",
      taso: "B1",
      esim: { fi: "Rakastan luontoa.", en: "I love nature." },
    },
    {
      fi: "vara",
      en: "reserve, means",
      taso: "B2",
      esim: { fi: "Pidä vähän varaa.", en: "Keep a little in reserve." },
    },
  ],
  synonyymit: [
    { fi: "raaka-aine", en: "raw material" },
    { fi: "voimavara", en: "resource" },
  ],
  esimerkit: {
    A2: { fi: "Metsä on tärkeä luonnonvara.", en: "The forest is an important natural resource." },
    B1: { fi: "Luonnonvaroja on käytettävä säästeliäästi.", en: "Natural resources must be used sparingly." },
    B2: {
      fi: "Uusiutuvat luonnonvarat eivät lopu, jos niitä käytetään kestävästi.",
      en: "Renewable natural resources don't run out if they are used sustainably.",
    },
  },
  updatedAt: "2026-06-07",
};

export default luonnonvara;
