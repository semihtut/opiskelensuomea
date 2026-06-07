import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:d gradation, stem lähtee- (NOM weak -de).
// Genitive lähteen, partitive lähdettä, illative lähteeseen, partitive pl lähteitä.
const lahde: Word = {
  fi: "lähde",
  slug: "lähde",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "source; spring (of water)",
  selitys:
    "1) Tiedon alkuperä: 'luotettava lähde'. 2) Paikka, josta vesi nousee maasta. Tyyppi 48/hame, astevaihtelu t:d (nominatiivi lähde heikko, vartalo lähtee-). Vrt. lähteä, lähtö, alkuperä.",
  kuva: { emoji: "📚", alt: "lähde – tiedon alkuperä tai veden lähde" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:d (vartalo lähtee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lähteen", merkitys: "of the source" },
      { sija: "partitiivi (yks.)", muoto: "lähdettä", merkitys: "source (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lähteitä", merkitys: "sources (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi lähde (heikko -de), vartalo lähtee- vahvistuu (lähteen, lähteeseen), partitiivi lähdettä. Merkitykset: tiedon lähde (source) ja vesilähde (spring). Vrt. lähteä = to leave, alkuperä = origin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lähde" },
          { label: "Partitiivi", form: "lähdettä" },
          { label: "Genetiivi", form: "lähteen" },
          { label: "Inessiivi", form: "lähteessä" },
          { label: "Elatiivi", form: "lähteestä" },
          { label: "Illatiivi", form: "lähteeseen" },
          { label: "Adessiivi", form: "lähteellä" },
          { label: "Ablatiivi", form: "lähteeltä" },
          { label: "Allatiivi", form: "lähteelle" },
          { label: "Essiivi", form: "lähteenä" },
          { label: "Translatiivi", form: "lähteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lähteet" },
          { label: "Partitiivi", form: "lähteitä" },
          { label: "Genetiivi", form: "lähteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lähdeviite",
      en: "source reference, citation",
      taso: "B2",
      esim: { fi: "Lisää lähdeviite loppuun.", en: "Add the source reference at the end." },
    },
    {
      fi: "alkuperä",
      en: "origin",
      taso: "B2",
      esim: { fi: "Tiedon alkuperä on epäselvä.", en: "The information's origin is unclear." },
    },
  ],
  synonyymit: [
    { fi: "alkuperä", en: "origin" },
    { fi: "tietolähde", en: "information source" },
  ],
  esimerkit: {
    A2: { fi: "Mistä lähteestä tieto on?", en: "From which source is the information?" },
    B1: { fi: "Käytä vain luotettavia lähteitä.", en: "Use only reliable sources." },
    B2: {
      fi: "Hyvässä tutkimuksessa jokainen väite perustuu tarkistettuun lähteeseen.",
      en: "In good research every claim is based on a verified source.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lahde;
