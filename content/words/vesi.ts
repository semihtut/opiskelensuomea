import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi with t:d gradation. Consonant
// stem shows in partitive vettä; weak d in closed syllables (veden, vedessä),
// strong t before the illative (veteen). Plural vesiä, vesien.
const vesi: Word = {
  fi: "vesi",
  slug: "vesi",
  pos: "substantiivi (tyyppi: käsi)",
  posClass: "substantiivi",
  level: "A1",
  en: "water",
  selitys:
    "Väritön neste, jota ihminen tarvitsee elääkseen. Konsonanttivartalo (partitiivi vettä), astevaihtelu t:d.",
  kuva: { emoji: "💧", alt: "vesi – vesipisara" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 27/käsi; astevaihtelu t:d, konsonanttivartalo",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "vettä", merkitys: "water (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "veden", merkitys: "of the water" },
      { sija: "partitiivi (mon.)", muoto: "vesiä", merkitys: "waters (partitive pl.)" },
    ],
    huom:
      "Partitiivi vettä (konsonanttivartalo vet-), genetiivi veden (heikko d), illatiivi veteen (vahva t). Monikko vedet, vesiä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vesi" },
          { label: "Partitiivi", form: "vettä" },
          { label: "Genetiivi", form: "veden" },
          { label: "Inessiivi", form: "vedessä" },
          { label: "Elatiivi", form: "vedestä" },
          { label: "Illatiivi", form: "veteen" },
          { label: "Adessiivi", form: "vedellä" },
          { label: "Ablatiivi", form: "vedeltä" },
          { label: "Allatiivi", form: "vedelle" },
          { label: "Essiivi", form: "vetenä" },
          { label: "Translatiivi", form: "vedeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vedet" },
          { label: "Partitiivi", form: "vesiä" },
          { label: "Genetiivi", form: "vesien" },
          { label: "Illatiivi", form: "vesiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vesilasi",
      en: "glass of water",
      taso: "A2",
      esim: { fi: "Toisitko minulle vesilasin?", en: "Could you bring me a glass of water?" },
    },
    {
      fi: "vetinen",
      en: "watery",
      taso: "B2",
      esim: { fi: "Keitto oli liian vetistä.", en: "The soup was too watery." },
    },
    {
      fi: "vesistö",
      en: "body of water, watercourse",
      taso: "B2",
      esim: { fi: "Suomessa on tuhansia vesistöjä.", en: "Finland has thousands of bodies of water." },
    },
  ],
  synonyymit: [
    { fi: "neste", en: "liquid" },
    { fi: "juomavesi", en: "drinking water" },
  ],
  esimerkit: {
    A2: { fi: "Haluan lasin vettä.", en: "I want a glass of water." },
    B1: { fi: "Vesi kiehuu sadassa asteessa.", en: "Water boils at a hundred degrees." },
    B2: {
      fi: "Puhdas vesi on tärkeä luonnonvara.",
      en: "Clean water is an important natural resource.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vesi;
