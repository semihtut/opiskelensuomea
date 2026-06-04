import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 29/lapsi, no gradation. Consonant stem
// shows in partitive sg lasta and genitive pl lasten. Partitive pl lapsia.
const lapsi: Word = {
  fi: "lapsi",
  slug: "lapsi",
  pos: "substantiivi (tyyppi: lapsi)",
  posClass: "substantiivi",
  level: "A1",
  en: "child",
  selitys:
    "Nuori ihminen, joka ei ole vielä aikuinen; myös vanhempien jälkeläinen. Konsonanttivartalo näkyy partitiivissa lasta.",
  kuva: { emoji: "🧒", alt: "lapsi – nuori ihminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 29/lapsi; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "lasta", merkitys: "child (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "lapsen", merkitys: "of the child" },
      { sija: "partitiivi (mon.)", muoto: "lapsia", merkitys: "children (partitive pl.)" },
    ],
    huom:
      "Konsonanttivartalo näkyy partitiivissa lasta ja monikon genetiivissä lasten (myös lapsien). Monikko muuten lapse- → lapset, lapsia.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lapsi" },
          { label: "Partitiivi", form: "lasta" },
          { label: "Genetiivi", form: "lapsen" },
          { label: "Inessiivi", form: "lapsessa" },
          { label: "Elatiivi", form: "lapsesta" },
          { label: "Illatiivi", form: "lapseen" },
          { label: "Adessiivi", form: "lapsella" },
          { label: "Ablatiivi", form: "lapselta" },
          { label: "Allatiivi", form: "lapselle" },
          { label: "Essiivi", form: "lapsena" },
          { label: "Translatiivi", form: "lapseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lapset" },
          { label: "Partitiivi", form: "lapsia" },
          { label: "Genetiivi", form: "lasten" },
          { label: "Inessiivi", form: "lapsissa" },
          { label: "Illatiivi", form: "lapsiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lapsuus",
      en: "childhood",
      taso: "B1",
      esim: { fi: "Muistan lapsuuteni lämpimästi.", en: "I remember my childhood fondly." },
    },
    {
      fi: "lapsellinen",
      en: "childish",
      taso: "B1",
      esim: { fi: "Älä ole niin lapsellinen.", en: "Don't be so childish." },
    },
    {
      fi: "lapsenlapsi",
      en: "grandchild",
      taso: "B1",
      esim: { fi: "Heillä on viisi lapsenlasta.", en: "They have five grandchildren." },
    },
  ],
  synonyymit: [
    { fi: "muksu", en: "kid (colloquial)" },
    { fi: "pienokainen", en: "little one, infant" },
  ],
  esimerkit: {
    A2: { fi: "Lapsi leikkii pihalla.", en: "The child is playing in the yard." },
    B1: { fi: "Heillä on kolme lasta.", en: "They have three children." },
    B2: {
      fi: "Lapsena vietin kesät isovanhempieni luona.",
      en: "As a child I spent summers at my grandparents' place.",
    },
  },
  updatedAt: "2026-06-04",
};

export default lapsi;
