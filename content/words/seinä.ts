import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive seinän,
// partitive seinää, illative seinään, partitive pl seiniä.
const seina: Word = {
  fi: "seinä",
  slug: "seinä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "wall",
  selitys:
    "Pystysuora rakenne, joka rajaa huoneen. Tyyppi 10, ei astevaihtelua. Vrt. muuri (= ulkoseinä/aita).",
  kuva: { emoji: "🧱", alt: "seinä – huoneen seinä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "seinän", merkitys: "of the wall" },
      { sija: "partitiivi (yks.)", muoto: "seinää", merkitys: "wall (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "seiniä", merkitys: "walls (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Seinällä' = on the wall. Monikon partitiivi seiniä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "seinä" },
          { label: "Partitiivi", form: "seinää" },
          { label: "Genetiivi", form: "seinän" },
          { label: "Inessiivi", form: "seinässä" },
          { label: "Elatiivi", form: "seinästä" },
          { label: "Illatiivi", form: "seinään" },
          { label: "Adessiivi", form: "seinällä" },
          { label: "Ablatiivi", form: "seinältä" },
          { label: "Allatiivi", form: "seinälle" },
          { label: "Essiivi", form: "seinänä" },
          { label: "Translatiivi", form: "seinäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "seinät" },
          { label: "Partitiivi", form: "seiniä" },
          { label: "Genetiivi", form: "seinien" },
          { label: "Inessiivi", form: "seinissä" },
          { label: "Illatiivi", form: "seiniin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "seinäkello",
      en: "wall clock",
      taso: "B1",
      esim: { fi: "Seinäkello näytti kymmentä.", en: "The wall clock showed ten." },
    },
    {
      fi: "väliseinä",
      en: "partition wall",
      taso: "B2",
      esim: { fi: "Väliseinä purettiin.", en: "The partition wall was torn down." },
    },
    {
      fi: "seinusta",
      en: "the area by the wall",
      taso: "B2",
      esim: { fi: "Hylly on seinustalla.", en: "The shelf is along the wall." },
    },
  ],
  synonyymit: [
    { fi: "muuri", en: "wall (masonry)" },
    { fi: "väliseinä", en: "partition" },
  ],
  esimerkit: {
    A2: { fi: "Taulu on seinällä.", en: "The picture is on the wall." },
    B1: { fi: "Maalasimme seinät valkoisiksi.", en: "We painted the walls white." },
    B2: {
      fi: "Ohuen seinän läpi kuului naapurin musiikki.",
      en: "Through the thin wall you could hear the neighbor's music.",
    },
  },
  updatedAt: "2026-06-05",
};

export default seina;
