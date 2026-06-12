import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 32/sisar, no gradation, stem jäsen- ~ jäsene-.
// Genitive jäsenen, partitive jäsentä, partitive pl jäseniä.
const jasen: Word = {
  fi: "jäsen",
  slug: "jäsen",
  pos: "substantiivi (tyyppi 32/sisar)",
  posClass: "substantiivi",
  level: "B1",
  en: "member",
  selitys:
    "Ryhmään tai järjestöön kuuluva henkilö: 'kerhon jäsen'. Tyyppi 32/sisar, ei astevaihtelua. Tarkoittaa myös ruumiinjäsentä (raaja) ja matematiikan termiä. Vrt. jäsenyys, jäsenmaksu, järjestö.",
  kuva: { alt: "jäsen – ryhmään tai järjestöön kuuluva henkilö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 32/sisar; ei astevaihtelua (vartalo jäsene-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jäsenen", merkitys: "of the member" },
      { sija: "partitiivi (yks.)", muoto: "jäsentä", merkitys: "member (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jäseniä", merkitys: "members (partitive pl.)" },
    ],
    huom:
      "Tyyppi 32 (-en): genetiivi jäsenen, partitiivi jäsentä, monikon partitiivi jäseniä. Ei astevaihtelua. Muut merkitykset: raaja (limb), lauseenjäsen (sentence element). Vrt. jäsenyys = membership.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jäsen" },
          { label: "Partitiivi", form: "jäsentä" },
          { label: "Genetiivi", form: "jäsenen" },
          { label: "Inessiivi", form: "jäsenessä" },
          { label: "Elatiivi", form: "jäsenestä" },
          { label: "Illatiivi", form: "jäseneen" },
          { label: "Adessiivi", form: "jäsenellä" },
          { label: "Ablatiivi", form: "jäseneltä" },
          { label: "Allatiivi", form: "jäsenelle" },
          { label: "Essiivi", form: "jäsenenä" },
          { label: "Translatiivi", form: "jäseneksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jäsenet" },
          { label: "Partitiivi", form: "jäseniä" },
          { label: "Genetiivi", form: "jäsenten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jäsenyys",
      en: "membership",
      taso: "B2",
      esim: { fi: "Hain jäsenyyttä.", en: "I applied for membership." },
    },
    {
      fi: "jäsenmaksu",
      en: "membership fee",
      taso: "B2",
      esim: { fi: "Maksoin jäsenmaksun.", en: "I paid the membership fee." },
    },
  ],
  synonyymit: [
    { fi: "kuuluva", en: "belonging member" },
    { fi: "osallinen", en: "participant" },
  ],
  esimerkit: {
    A2: { fi: "Olen kerhon jäsen.", en: "I am a member of the club." },
    B1: { fi: "Järjestöllä on tuhansia jäseniä.", en: "The organization has thousands of members." },
    B2: {
      fi: "Jokaisella jäsenellä on oikeus äänestää kokouksessa.",
      en: "Every member has the right to vote at the meeting.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jasen;
