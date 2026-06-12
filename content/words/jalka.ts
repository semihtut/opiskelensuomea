import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, k:∅ gradation (lk → l). Genitive
// jalan, partitive jalkaa, illative jalkaan, partitive pl jalkoja, inessive jalassa.
const jalka: Word = {
  fi: "jalka",
  slug: "jalka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "leg; foot",
  selitys:
    "Alaraaja, jolla seisotaan ja kävellään. Tyyppi 9, astevaihtelu k:∅ (lk → l): jalka → jalan. 'Jalan' tarkoittaa myös 'on foot'.",
  kuva: { alt: "jalka – ihmisen jalka" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu k:∅ (lk → l)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jalan", merkitys: "of the leg/foot" },
      { sija: "partitiivi (yks.)", muoto: "jalkaa", merkitys: "leg/foot (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jalkoja", merkitys: "legs/feet (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa k katoaa: jalan, jalassa, jalalla. Vahva aste säilyy: jalkaa, jalkaan, jalkoja. 'Mennä jalan' = go on foot.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jalka" },
          { label: "Partitiivi", form: "jalkaa" },
          { label: "Genetiivi", form: "jalan" },
          { label: "Inessiivi", form: "jalassa" },
          { label: "Elatiivi", form: "jalasta" },
          { label: "Illatiivi", form: "jalkaan" },
          { label: "Adessiivi", form: "jalalla" },
          { label: "Ablatiivi", form: "jalalta" },
          { label: "Allatiivi", form: "jalalle" },
          { label: "Essiivi", form: "jalkana" },
          { label: "Translatiivi", form: "jalaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jalat" },
          { label: "Partitiivi", form: "jalkoja" },
          { label: "Genetiivi", form: "jalkojen" },
          { label: "Inessiivi", form: "jaloissa" },
          { label: "Illatiivi", form: "jalkoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jalkapallo",
      en: "football, soccer",
      taso: "A2",
      esim: { fi: "Pojat pelaavat jalkapalloa.", en: "The boys play football." },
    },
    {
      fi: "jalankulkija",
      en: "pedestrian",
      taso: "B1",
      esim: { fi: "Jalankulkijat ylittivät kadun.", en: "The pedestrians crossed the street." },
    },
    {
      fi: "jalkine",
      en: "footwear, shoe",
      taso: "B2",
      esim: { fi: "Myymälä myy jalkineita.", en: "The shop sells footwear." },
    },
  ],
  synonyymit: [
    { fi: "raaja", en: "limb" },
    { fi: "koipi", en: "leg (colloquial/animal)" },
  ],
  esimerkit: {
    A2: { fi: "Minun jalka on kipeä.", en: "My leg/foot hurts." },
    B1: { fi: "Kävelin asemalle jalan.", en: "I walked to the station on foot." },
    B2: {
      fi: "Pitkän juoksun jälkeen jalat tuntuivat raskailta.",
      en: "After the long run my legs felt heavy.",
    },
  },
  updatedAt: "2026-06-04",
};

export default jalka;
