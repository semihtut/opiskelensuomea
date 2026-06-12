import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation. Genitive
// ravintolan, partitive ravintolaa, illative ravintolaan, partitive pl ravintoloita.
const ravintola: Word = {
  fi: "ravintola",
  slug: "ravintola",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A1",
  en: "restaurant",
  selitys:
    "Paikka, jossa tarjoillaan ruokaa pöytiin. Tyyppi 12, ei astevaihtelua. Sanasta ravinto (= nutrition) + -la.",
  kuva: { alt: "ravintola – kattaus ravintolassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ravintolan", merkitys: "of the restaurant" },
      { sija: "partitiivi (yks.)", muoto: "ravintolaa", merkitys: "restaurant (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ravintoloita", merkitys: "restaurants (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua (nt säilyy). Monikkovartalo ravintoloi-: ravintoloita, ravintoloissa. 'Mennä ravintolaan' = go to a restaurant.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ravintola" },
          { label: "Partitiivi", form: "ravintolaa" },
          { label: "Genetiivi", form: "ravintolan" },
          { label: "Inessiivi", form: "ravintolassa" },
          { label: "Elatiivi", form: "ravintolasta" },
          { label: "Illatiivi", form: "ravintolaan" },
          { label: "Adessiivi", form: "ravintolalla" },
          { label: "Ablatiivi", form: "ravintolalta" },
          { label: "Allatiivi", form: "ravintolalle" },
          { label: "Essiivi", form: "ravintolana" },
          { label: "Translatiivi", form: "ravintolaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ravintolat" },
          { label: "Partitiivi", form: "ravintoloita" },
          { label: "Genetiivi", form: "ravintoloiden" },
          { label: "Inessiivi", form: "ravintoloissa" },
          { label: "Illatiivi", form: "ravintoloihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ravintolapäivä",
      en: "restaurant day (pop-up food event)",
      taso: "B2",
      esim: { fi: "Ravintolapäivänä kuka tahansa voi myydä ruokaa.", en: "On Restaurant Day anyone can sell food." },
    },
    {
      fi: "ravinto",
      en: "nutrition, food",
      taso: "B1",
      esim: { fi: "Monipuolinen ravinto on tärkeää.", en: "A varied diet is important." },
    },
    {
      fi: "ruokala",
      en: "canteen, cafeteria",
      taso: "B1",
      esim: { fi: "Syömme koulun ruokalassa.", en: "We eat in the school canteen." },
    },
  ],
  synonyymit: [
    { fi: "ruokapaikka", en: "eatery" },
    { fi: "kapakka", en: "tavern (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Syömme tänään ravintolassa.", en: "We're eating at a restaurant today." },
    B1: { fi: "Varasin pöydän hyvästä ravintolasta.", en: "I booked a table at a good restaurant." },
    B2: {
      fi: "Kaupungissa on monia ravintoloita eri maiden keittiöistä.",
      en: "The city has many restaurants from different countries' cuisines.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ravintola;
