import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem läheise-.
// Genitive läheisen, partitive läheistä, partitive pl läheisiä.
const laheinen: Word = {
  fi: "läheinen",
  slug: "läheinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "close, near, intimate; (noun) loved one",
  selitys:
    "Tilaltaan tai tunteeltaan lähellä oleva: 'läheinen ystävä'. Tyyppi 38/nainen, ei astevaihtelua. Substantiivina 'läheinen' = a close person, loved one. Vastakohta etäinen. Vrt. lähellä, lähestyä, läheisyys.",
  kuva: { alt: "läheinen – tunteeltaan lähellä oleva" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo läheise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "läheisen", merkitys: "of the close (one)" },
      { sija: "partitiivi (yks.)", muoto: "läheistä", merkitys: "close (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "läheisiä", merkitys: "close ones (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo läheise-, partitiivi läheistä, monikon partitiivi läheisiä. Käytetään myös substantiivina: 'omat läheiset' = one's loved ones. Vastakohta etäinen = distant. Vrt. lähellä = near.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "läheinen" },
          { label: "Partitiivi", form: "läheistä" },
          { label: "Genetiivi", form: "läheisen" },
          { label: "Inessiivi", form: "läheisessä" },
          { label: "Elatiivi", form: "läheisestä" },
          { label: "Illatiivi", form: "läheiseen" },
          { label: "Adessiivi", form: "läheisellä" },
          { label: "Ablatiivi", form: "läheiseltä" },
          { label: "Allatiivi", form: "läheiselle" },
          { label: "Essiivi", form: "läheisenä" },
          { label: "Translatiivi", form: "läheiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "läheiset" },
          { label: "Partitiivi", form: "läheisiä" },
          { label: "Genetiivi", form: "läheisten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "läheisyys",
      en: "closeness, proximity",
      taso: "B2",
      esim: { fi: "Kaipaan läheisyyttä.", en: "I miss closeness." },
    },
    {
      fi: "lähestyä",
      en: "to approach",
      taso: "B1",
      esim: { fi: "Kesä lähestyy.", en: "Summer is approaching." },
    },
  ],
  synonyymit: [
    { fi: "läheinen ihminen", en: "loved one" },
    { fi: "tuttu", en: "familiar, acquaintance" },
  ],
  esimerkit: {
    A2: { fi: "Hän on läheinen ystäväni.", en: "She is my close friend." },
    B1: { fi: "Vietän aikaa läheisteni kanssa.", en: "I spend time with my loved ones." },
    B2: {
      fi: "Meistä tuli vuosien aikana hyvin läheisiä.",
      en: "Over the years we became very close.",
    },
  },
  updatedAt: "2026-06-07",
};

export default laheinen;
