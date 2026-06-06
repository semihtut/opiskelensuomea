import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem hedelmä-.
// Genitive hedelmän, partitive hedelmää, illative hedelmään, partitive pl hedelmiä.
const hedelmä: Word = {
  fi: "hedelmä",
  slug: "hedelmä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "fruit",
  selitys:
    "Kasvin syötävä, usein makea osa, esim. omena tai banaani: 'tuore hedelmä'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko hedelmiä. Kuvaannollisesti myös 'tulos'. Vrt. hedelmäpuu, marja.",
  kuva: { emoji: "🍎", alt: "hedelmä – kasvin syötävä, usein makea osa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hedelmän", merkitys: "of the fruit" },
      { sija: "partitiivi (yks.)", muoto: "hedelmää", merkitys: "fruit (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hedelmiä", merkitys: "fruits (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10, ei astevaihtelua. Partitiivin monikko hedelmiä. Kuvaannollisesti 'työn hedelmät' = the fruits of one's labour. Vrt. hedelmäpuu = fruit tree, hedelmällinen = fruitful.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hedelmä" },
          { label: "Partitiivi", form: "hedelmää" },
          { label: "Genetiivi", form: "hedelmän" },
          { label: "Inessiivi", form: "hedelmässä" },
          { label: "Elatiivi", form: "hedelmästä" },
          { label: "Illatiivi", form: "hedelmään" },
          { label: "Adessiivi", form: "hedelmällä" },
          { label: "Ablatiivi", form: "hedelmältä" },
          { label: "Allatiivi", form: "hedelmälle" },
          { label: "Essiivi", form: "hedelmänä" },
          { label: "Translatiivi", form: "hedelmäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hedelmät" },
          { label: "Partitiivi", form: "hedelmiä" },
          { label: "Genetiivi", form: "hedelmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hedelmäpuu",
      en: "fruit tree",
      taso: "B1",
      esim: { fi: "Pihalla kasvaa kaksi hedelmäpuuta.", en: "Two fruit trees grow in the yard." },
    },
    {
      fi: "hedelmällinen",
      en: "fruitful, fertile",
      taso: "B2",
      esim: { fi: "Keskustelu oli hedelmällinen.", en: "The discussion was fruitful." },
    },
    {
      fi: "hedelmäsalaatti",
      en: "fruit salad",
      taso: "B1",
      esim: { fi: "Tein jälkiruoaksi hedelmäsalaattia.", en: "I made fruit salad for dessert." },
    },
  ],
  synonyymit: [
    { fi: "hedelmät ja marjat", en: "fruits and berries" },
  ],
  esimerkit: {
    A2: { fi: "Syön hedelmää joka päivä.", en: "I eat fruit every day." },
    B1: { fi: "Hedelmät ovat tärkeä osa terveellistä ruokavaliota.", en: "Fruits are an important part of a healthy diet." },
    B2: {
      fi: "Pitkän työn hedelmät näkyivät vasta vuosien päästä.",
      en: "The fruits of the long work became visible only years later.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hedelmä;
