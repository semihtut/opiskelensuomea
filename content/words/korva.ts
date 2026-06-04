import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Genitive korvan,
// partitive korvaa, illative korvaan, partitive pl korvia.
const korva: Word = {
  fi: "korva",
  slug: "korva",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "ear",
  selitys:
    "Kuuloaisti­elin pään sivulla; myös astian 'korva' = kahva. Tyyppi 9, ei astevaihtelua.",
  kuva: { emoji: "👂", alt: "korva – ihmisen korva" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "korvan", merkitys: "of the ear" },
      { sija: "partitiivi (yks.)", muoto: "korvaa", merkitys: "ear (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "korvia", merkitys: "ears (partitive pl.)" },
    ],
    huom:
      "Pari yleensä monikossa: korvat. Idiomeja: 'korvissa soi' (ears ringing), 'kahvikupin korva' (cup's handle).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "korva" },
          { label: "Partitiivi", form: "korvaa" },
          { label: "Genetiivi", form: "korvan" },
          { label: "Inessiivi", form: "korvassa" },
          { label: "Elatiivi", form: "korvasta" },
          { label: "Illatiivi", form: "korvaan" },
          { label: "Adessiivi", form: "korvalla" },
          { label: "Ablatiivi", form: "korvalta" },
          { label: "Allatiivi", form: "korvalle" },
          { label: "Essiivi", form: "korvana" },
          { label: "Translatiivi", form: "korvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "korvat" },
          { label: "Partitiivi", form: "korvia" },
          { label: "Genetiivi", form: "korvien" },
          { label: "Inessiivi", form: "korvissa" },
          { label: "Illatiivi", form: "korviin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "korvakoru",
      en: "earring",
      taso: "B1",
      esim: { fi: "Hän osti kauniit korvakorut.", en: "She bought beautiful earrings." },
    },
    {
      fi: "korvatulppa",
      en: "earplug",
      taso: "B2",
      esim: { fi: "Käytän korvatulppia lentäessä.", en: "I use earplugs when flying." },
    },
    {
      fi: "kuulokkeet",
      en: "headphones (related)",
      taso: "A2",
      esim: { fi: "Kuuntelen musiikkia kuulokkeilla.", en: "I listen to music with headphones." },
    },
  ],
  synonyymit: [
    { fi: "kuulo", en: "hearing (sense)" },
    { fi: "kahva", en: "handle (for the 'ear' of a vessel)" },
  ],
  esimerkit: {
    A2: { fi: "Korvani ovat kylmät.", en: "My ears are cold." },
    B1: { fi: "Kuiskasin hänen korvaansa.", en: "I whispered in her ear." },
    B2: {
      fi: "Kovan konsertin jälkeen korvissa soi pitkään.",
      en: "After the loud concert my ears rang for a long time.",
    },
  },
  updatedAt: "2026-06-04",
};

export default korva;
