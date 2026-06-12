import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira with p:v gradation. Strong p in
// open syllables (leipää, leipään, leipiä), weak v in closed (leivän, leivässä).
const leipä: Word = {
  fi: "leipä",
  slug: "leipä",
  pos: "substantiivi (tyyppi: koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "bread",
  selitys: "Jauhoista leivottu ruoka. Astevaihtelu p:v (leipä → leivän).",
  kuva: { alt: "leipä – leipä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu p:v (leipä → leivän)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "leipää", merkitys: "bread (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "leivän", merkitys: "of the bread" },
      { sija: "partitiivi (mon.)", muoto: "leipiä", merkitys: "breads (partitive pl.)" },
    ],
    huom:
      "Vahva p avotavussa (leipää, leipään, leipiä), heikko v umpitavussa (leivän, leivässä, leivällä).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "leipä" },
          { label: "Partitiivi", form: "leipää" },
          { label: "Genetiivi", form: "leivän" },
          { label: "Inessiivi", form: "leivässä" },
          { label: "Elatiivi", form: "leivästä" },
          { label: "Illatiivi", form: "leipään" },
          { label: "Adessiivi", form: "leivällä" },
          { label: "Ablatiivi", form: "leivältä" },
          { label: "Allatiivi", form: "leivälle" },
          { label: "Essiivi", form: "leipänä" },
          { label: "Translatiivi", form: "leiväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "leivät" },
          { label: "Partitiivi", form: "leipiä" },
          { label: "Genetiivi", form: "leipien" },
          { label: "Illatiivi", form: "leipiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "voileipä",
      en: "sandwich (open-faced)",
      taso: "A2",
      esim: { fi: "Tein juustovoileivän.", en: "I made a cheese sandwich." },
    },
    {
      fi: "leipoa",
      en: "to bake",
      taso: "B1",
      esim: { fi: "Leivon pullaa sunnuntaisin.", en: "I bake buns on Sundays." },
    },
    {
      fi: "leipuri",
      en: "baker",
      taso: "B1",
      esim: { fi: "Leipuri herää aamuyöllä.", en: "The baker wakes up in the small hours." },
    },
  ],
  synonyymit: [
    { fi: "ruisleipä", en: "rye bread" },
    { fi: "sämpylä", en: "bread roll" },
  ],
  esimerkit: {
    A2: { fi: "Syön leipää aamulla.", en: "I eat bread in the morning." },
    B1: { fi: "Ostin tuoretta leipää.", en: "I bought fresh bread." },
    B2: {
      fi: "Leivän tuoksu täytti koko keittiön.",
      en: "The smell of bread filled the whole kitchen.",
    },
  },
  updatedAt: "2026-06-04",
};

export default leipä;
