import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Partitive pl kaloja,
// genitive pl kalojen, illative pl kaloihin.
const kala: Word = {
  fi: "kala",
  slug: "kala",
  pos: "substantiivi (tyyppi: kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "fish",
  selitys:
    "Vedessä elävä eläin; myös sen liha ruokana. Ei astevaihtelua; monikon partitiivi kaloja.",
  kuva: { alt: "kala – kala" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kalaa", merkitys: "fish (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kalan", merkitys: "of the fish" },
      { sija: "partitiivi (mon.)", muoto: "kaloja", merkitys: "fish (partitive pl.)" },
    ],
    huom: "Monikon partitiivi kaloja, genetiivi kalojen, illatiivi kaloihin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kala" },
          { label: "Partitiivi", form: "kalaa" },
          { label: "Genetiivi", form: "kalan" },
          { label: "Inessiivi", form: "kalassa" },
          { label: "Elatiivi", form: "kalasta" },
          { label: "Illatiivi", form: "kalaan" },
          { label: "Adessiivi", form: "kalalla" },
          { label: "Ablatiivi", form: "kalalta" },
          { label: "Allatiivi", form: "kalalle" },
          { label: "Essiivi", form: "kalana" },
          { label: "Translatiivi", form: "kalaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kalat" },
          { label: "Partitiivi", form: "kaloja" },
          { label: "Genetiivi", form: "kalojen" },
          { label: "Illatiivi", form: "kaloihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kalakeitto",
      en: "fish soup",
      taso: "A2",
      esim: { fi: "Kalakeitto maistuu parhaalta talvella.", en: "Fish soup tastes best in winter." },
    },
    {
      fi: "kalastaa",
      en: "to fish",
      taso: "B1",
      esim: { fi: "Isä kalastaa joka kesä.", en: "Dad fishes every summer." },
    },
    {
      fi: "kalastaja",
      en: "fisherman, angler",
      taso: "B1",
      esim: { fi: "Kalastaja sai ison hauen.", en: "The fisherman caught a big pike." },
    },
  ],
  synonyymit: [
    { fi: "lohi", en: "salmon (a kind of fish)" },
    { fi: "kalaruoka", en: "fish dish" },
  ],
  esimerkit: {
    A2: { fi: "Syömme kalaa perjantaisin.", en: "We eat fish on Fridays." },
    B1: { fi: "Järvessä on paljon kaloja.", en: "There are many fish in the lake." },
    B2: {
      fi: "Tuore kala tuoksuu mereltä.",
      en: "Fresh fish smells of the sea.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kala;
