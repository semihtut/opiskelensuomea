import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem kasvi-.
// Genitive kasvin, partitive kasvia, illative kasviin, partitive pl kasveja.
const kasvi: Word = {
  fi: "kasvi",
  slug: "kasvi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "plant",
  selitys:
    "Yhteyttävä elävä olento, esim. kukka tai puu: 'huonekasvi'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko kasveja. Johdettu juuresta kasv- (kasvaa). Vrt. kasvihuone (greenhouse), kasvisto (flora).",
  kuva: { emoji: "🪴", alt: "kasvi – yhteyttävä elävä olento" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kasvin", merkitys: "of the plant" },
      { sija: "partitiivi (yks.)", muoto: "kasvia", merkitys: "plant (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kasveja", merkitys: "plants (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikko kasveja (e-vartalo monikossa). Vrt. kasvaa = to grow, kasvis = vegetable, kasvissyöjä = vegetarian.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kasvi" },
          { label: "Partitiivi", form: "kasvia" },
          { label: "Genetiivi", form: "kasvin" },
          { label: "Inessiivi", form: "kasvissa" },
          { label: "Elatiivi", form: "kasvista" },
          { label: "Illatiivi", form: "kasviin" },
          { label: "Adessiivi", form: "kasvilla" },
          { label: "Ablatiivi", form: "kasvilta" },
          { label: "Allatiivi", form: "kasville" },
          { label: "Essiivi", form: "kasvina" },
          { label: "Translatiivi", form: "kasviksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kasvit" },
          { label: "Partitiivi", form: "kasveja" },
          { label: "Genetiivi", form: "kasvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kasvihuone",
      en: "greenhouse",
      taso: "B1",
      esim: { fi: "Tomaatit kasvavat kasvihuoneessa.", en: "The tomatoes grow in the greenhouse." },
    },
    {
      fi: "huonekasvi",
      en: "houseplant",
      taso: "B1",
      esim: { fi: "Ostin uuden huonekasvin.", en: "I bought a new houseplant." },
    },
    {
      fi: "kasvisto",
      en: "flora, vegetation",
      taso: "B2",
      esim: { fi: "Alueen kasvisto on rikasta.", en: "The area's flora is rich." },
    },
  ],
  synonyymit: [
    { fi: "kukka", en: "flower" },
    { fi: "vihannes", en: "vegetable" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on monta kasvia kotona.", en: "I have many plants at home." },
    B1: { fi: "Kasvit tarvitsevat valoa ja vettä.", en: "Plants need light and water." },
    B2: {
      fi: "Jotkin kasvit selviävät hyvin kuivassakin ilmastossa.",
      en: "Some plants survive well even in a dry climate.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kasvi;
