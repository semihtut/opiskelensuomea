import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem kesä-.
// Genitive kesän, partitive kesää, illative kesään, partitive pl kesiä.
const kesä: Word = {
  fi: "kesä",
  slug: "kesä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "summer",
  selitys:
    "Vuodenaika, lämpimin aika kevään ja syksyn välissä: 'lämmin kesä'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko kesiä. 'Kesällä' = in summer (adessiivi). Vastakohta talvi. Vrt. kesäloma.",
  kuva: { emoji: "☀️", alt: "kesä – lämpimin vuodenaika" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kesän", merkitys: "of the summer" },
      { sija: "partitiivi (yks.)", muoto: "kesää", merkitys: "summer (partitive)" },
      { sija: "adessiivi (yks.)", muoto: "kesällä", merkitys: "in summer" },
    ],
    huom:
      "Tyyppi 10, ei astevaihtelua. Partitiivin monikko kesiä. 'Kesällä' = in summer; 'tänä kesänä' = this summer (essiivi). Vuodenajat: talvi – kevät – kesä – syksy.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kesä" },
          { label: "Partitiivi", form: "kesää" },
          { label: "Genetiivi", form: "kesän" },
          { label: "Inessiivi", form: "kesässä" },
          { label: "Elatiivi", form: "kesästä" },
          { label: "Illatiivi", form: "kesään" },
          { label: "Adessiivi", form: "kesällä" },
          { label: "Ablatiivi", form: "kesältä" },
          { label: "Allatiivi", form: "kesälle" },
          { label: "Essiivi", form: "kesänä" },
          { label: "Translatiivi", form: "kesäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kesät" },
          { label: "Partitiivi", form: "kesiä" },
          { label: "Genetiivi", form: "kesien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kesäloma",
      en: "summer holiday",
      taso: "A2",
      esim: { fi: "Kesäloma alkaa kesäkuussa.", en: "The summer holiday begins in June." },
    },
    {
      fi: "kesäinen",
      en: "summery",
      taso: "B2",
      esim: { fi: "Sää oli kesäinen.", en: "The weather was summery." },
    },
    {
      fi: "kesämökki",
      en: "summer cottage",
      taso: "B1",
      esim: { fi: "Vietämme kesän kesämökillä.", en: "We spend the summer at the summer cottage." },
    },
  ],
  synonyymit: [
    { fi: "suvi", en: "summer (poetic)" },
  ],
  esimerkit: {
    A2: { fi: "Kesällä on lämmin.", en: "It is warm in summer." },
    B1: { fi: "Viime kesä oli sateinen.", en: "Last summer was rainy." },
    B2: {
      fi: "Suomen lyhyt kesä on monelle vuoden odotetuin aika.",
      en: "Finland's short summer is the most awaited time of the year for many.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kesä;
