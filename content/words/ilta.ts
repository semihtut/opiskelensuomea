import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala with lt:ll gradation. Strong lt in
// open syllables (iltaa, iltaan), weak ll in closed (illan, illalla).
const ilta: Word = {
  fi: "ilta",
  slug: "ilta",
  pos: "substantiivi (tyyppi: kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "evening",
  selitys: "Päivän loppuosa, iltapäivän ja yön välinen aika. Astevaihtelu lt:ll (ilta → illan).",
  kuva: { emoji: "🌆", alt: "ilta – iltahämärä kaupungissa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu lt:ll (ilta → illan)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "iltaa", merkitys: "evening (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "illan", merkitys: "of the evening" },
      { sija: "adessiivi (yks.)", muoto: "illalla", merkitys: "in the evening" },
    ],
    huom:
      "Vahva lt avotavussa (iltaa, iltaan), heikko ll umpitavussa (illan, illalla). 'Illalla' = in the evening. Monikon partitiivi iltoja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ilta" },
          { label: "Partitiivi", form: "iltaa" },
          { label: "Genetiivi", form: "illan" },
          { label: "Inessiivi", form: "illassa" },
          { label: "Elatiivi", form: "illasta" },
          { label: "Illatiivi", form: "iltaan" },
          { label: "Adessiivi", form: "illalla" },
          { label: "Ablatiivi", form: "illalta" },
          { label: "Allatiivi", form: "illalle" },
          { label: "Essiivi", form: "iltana" },
          { label: "Translatiivi", form: "illaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "illat" },
          { label: "Partitiivi", form: "iltoja" },
          { label: "Genetiivi", form: "iltojen" },
          { label: "Illatiivi", form: "iltoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "iltapäivä",
      en: "afternoon",
      taso: "A2",
      esim: { fi: "Nähdään iltapäivällä.", en: "See you in the afternoon." },
    },
    {
      fi: "illallinen",
      en: "dinner, supper",
      taso: "B1",
      esim: { fi: "Valmistan illallisen.", en: "I'm preparing dinner." },
    },
    {
      fi: "iltaisin",
      en: "in the evenings",
      taso: "B1",
      esim: { fi: "Iltaisin luen kirjaa.", en: "In the evenings I read a book." },
    },
  ],
  synonyymit: [
    { fi: "iltahämärä", en: "dusk, twilight" },
    { fi: "ilta-aika", en: "evening time" },
  ],
  esimerkit: {
    A2: { fi: "Hyvää iltaa!", en: "Good evening!" },
    B1: { fi: "Illalla katsomme elokuvan.", en: "In the evening we'll watch a movie." },
    B2: {
      fi: "Kesäilta voi olla Suomessa hyvin valoisa.",
      en: "A summer evening in Finland can be very bright.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ilta;
