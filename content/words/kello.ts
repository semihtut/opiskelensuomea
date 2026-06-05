import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation (ll does not gradate).
// Genitive kellon, partitive kelloa, illative kelloon, partitive pl kelloja.
const kello: Word = {
  fi: "kello",
  slug: "kello",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "clock, watch; o'clock; bell",
  selitys:
    "Aikaa näyttävä laite; myös 'kello' = o'clock ajan ilmaisussa, ja soiva kello (bell). Tyyppi 1, ei astevaihtelua.",
  kuva: { emoji: "🕰️", alt: "kello – seinäkello" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kellon", merkitys: "of the clock" },
      { sija: "partitiivi (yks.)", muoto: "kelloa", merkitys: "clock (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kelloja", merkitys: "clocks (partitive pl.)" },
    ],
    huom:
      "Kellonaika: 'Kello on kaksi.' = It's two o'clock; 'Mitä kello on?' = What time is it? Ei astevaihtelua.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kello" },
          { label: "Partitiivi", form: "kelloa" },
          { label: "Genetiivi", form: "kellon" },
          { label: "Inessiivi", form: "kellossa" },
          { label: "Elatiivi", form: "kellosta" },
          { label: "Illatiivi", form: "kelloon" },
          { label: "Adessiivi", form: "kellolla" },
          { label: "Ablatiivi", form: "kellolta" },
          { label: "Allatiivi", form: "kellolle" },
          { label: "Essiivi", form: "kellona" },
          { label: "Translatiivi", form: "kelloksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kellot" },
          { label: "Partitiivi", form: "kelloja" },
          { label: "Genetiivi", form: "kellojen" },
          { label: "Inessiivi", form: "kelloissa" },
          { label: "Illatiivi", form: "kelloihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rannekello",
      en: "wristwatch",
      taso: "A2",
      esim: { fi: "Sain rannekellon lahjaksi.", en: "I got a wristwatch as a gift." },
    },
    {
      fi: "herätyskello",
      en: "alarm clock",
      taso: "A2",
      esim: { fi: "Herätyskello soi kuudelta.", en: "The alarm clock rings at six." },
    },
    {
      fi: "kellonaika",
      en: "time (of the clock)",
      taso: "B1",
      esim: { fi: "Mikä on tarkka kellonaika?", en: "What is the exact time?" },
    },
  ],
  synonyymit: [
    { fi: "rannekello", en: "watch" },
    { fi: "tiimalasi", en: "hourglass (related timepiece)" },
  ],
  esimerkit: {
    A2: { fi: "Mitä kello on nyt?", en: "What time is it now?" },
    B1: { fi: "Kelloni on kymmenen minuuttia edellä.", en: "My watch is ten minutes fast." },
    B2: {
      fi: "Vanha kello tikitti hiljaa olohuoneen nurkassa.",
      en: "The old clock ticked quietly in the corner of the living room.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kello;
