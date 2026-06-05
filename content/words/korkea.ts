import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea (the model word), no gradation.
// Genitive korkean, partitive korkeaa, partitive pl korkeita. Comp korkeampi, superl korkein.
const korkea: Word = {
  fi: "korkea",
  slug: "korkea",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "A1",
  en: "high, tall",
  selitys:
    "Pystysuunnassa suuri (esim. vuori, rakennus). Tyyppi 15, ei astevaihtelua. Tämä on koko taivutustyypin mallisana. Vastakohta matala.",
  kuva: { emoji: "🏔️", alt: "korkea – korkea vuori" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "korkean", merkitys: "of the high" },
      { sija: "partitiivi (yks.)", muoto: "korkeaa", merkitys: "high (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "korkeita", merkitys: "high (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi korkeita. Vertailu korkeampi/korkein. Ihmisen pituudesta käytetään yleensä pitkä, ei korkea.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "korkea" },
          { label: "Partitiivi", form: "korkeaa" },
          { label: "Genetiivi", form: "korkean" },
          { label: "Inessiivi", form: "korkeassa" },
          { label: "Illatiivi", form: "korkeaan" },
          { label: "Adessiivi", form: "korkealla" },
          { label: "Essiivi", form: "korkeana" },
          { label: "Translatiivi", form: "korkeaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "korkeat" },
          { label: "Partitiivi", form: "korkeita" },
          { label: "Genetiivi", form: "korkeiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "korkeampi" },
          { label: "Komparatiivi (gen.)", form: "korkeamman" },
          { label: "Superlatiivi (nom.)", form: "korkein" },
          { label: "Superlatiivi (gen.)", form: "korkeimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "korkeus",
      en: "height, altitude",
      taso: "B1",
      esim: { fi: "Vuoren korkeus on tuhat metriä.", en: "The mountain's height is a thousand meters." },
    },
    {
      fi: "korottaa",
      en: "to raise, increase",
      taso: "B2",
      esim: { fi: "Vuokraa korotettiin.", en: "The rent was raised." },
    },
    {
      fi: "korkeakoulu",
      en: "institute of higher education",
      taso: "B1",
      esim: { fi: "Hän opiskelee korkeakoulussa.", en: "She studies at a college." },
    },
  ],
  synonyymit: [
    { fi: "korkeahko", en: "fairly high" },
    { fi: "ylhäinen", en: "lofty, elevated" },
  ],
  esimerkit: {
    A2: { fi: "Talo on hyvin korkea.", en: "The building is very tall." },
    B1: { fi: "Hinnat ovat tänä vuonna korkeammat.", en: "Prices are higher this year." },
    B2: {
      fi: "Tämä on Suomen korkein tunturi.",
      en: "This is Finland's highest fell.",
    },
  },
  updatedAt: "2026-06-05",
};

export default korkea;
