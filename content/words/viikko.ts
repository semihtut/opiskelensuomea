import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo with kk:k gradation. Strong kk in
// open syllables (viikkoa, viikkoon), weak k in closed (viikon, viikolla).
const viikko: Word = {
  fi: "viikko",
  slug: "viikko",
  pos: "substantiivi (tyyppi: valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "week",
  selitys: "Seitsemän päivän jakso. Astevaihtelu kk:k (viikko → viikon).",
  kuva: { emoji: "🗓️", alt: "viikko – kalenteriviikko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu kk:k (viikko → viikon)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "viikkoa", merkitys: "week (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "viikon", merkitys: "of the week" },
      { sija: "partitiivi (mon.)", muoto: "viikkoja", merkitys: "weeks (partitive pl.)" },
    ],
    huom:
      "Vahva kk avotavussa (viikkoa, viikkoon, viikkoja), heikko k umpitavussa (viikon, viikolla). Aikaa: 'viikon ajan' = for a week.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "viikko" },
          { label: "Partitiivi", form: "viikkoa" },
          { label: "Genetiivi", form: "viikon" },
          { label: "Inessiivi", form: "viikossa" },
          { label: "Elatiivi", form: "viikosta" },
          { label: "Illatiivi", form: "viikkoon" },
          { label: "Adessiivi", form: "viikolla" },
          { label: "Ablatiivi", form: "viikolta" },
          { label: "Allatiivi", form: "viikolle" },
          { label: "Essiivi", form: "viikkona" },
          { label: "Translatiivi", form: "viikoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "viikot" },
          { label: "Partitiivi", form: "viikkoja" },
          { label: "Genetiivi", form: "viikkojen" },
          { label: "Illatiivi", form: "viikkoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viikonloppu",
      en: "weekend",
      taso: "A2",
      esim: { fi: "Mitä teet tänä viikonloppuna?", en: "What are you doing this weekend?" },
    },
    {
      fi: "viikoittain",
      en: "weekly, every week",
      taso: "B1",
      esim: { fi: "Käyn uimassa viikoittain.", en: "I go swimming every week." },
    },
    {
      fi: "viikonpäivä",
      en: "day of the week",
      taso: "A2",
      esim: { fi: "Mikä viikonpäivä tänään on?", en: "What day of the week is it today?" },
    },
  ],
  synonyymit: [
    { fi: "seitsenpäiväinen jakso", en: "a seven-day period" },
    { fi: "työviikko", en: "working week" },
  ],
  esimerkit: {
    A2: { fi: "Tällä viikolla on paljon töitä.", en: "There's a lot of work this week." },
    B1: { fi: "Olen ollut lomalla viikon.", en: "I've been on holiday for a week." },
    B2: {
      fi: "Ensi viikolla alkaa uusi kurssi.",
      en: "A new course starts next week.",
    },
  },
  updatedAt: "2026-06-04",
};

export default viikko;
