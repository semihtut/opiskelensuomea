import type { Word } from "@/lib/content-types";

// Invariant time adverb (no inflection) — historically the essive of "huomen".
// Part of the everyday time axis: eilen – tänään – huomenna.
const huomenna: Word = {
  fi: "huomenna",
  slug: "huomenna",
  pos: "adverbi",
  posClass: "adverbi",
  level: "A1",
  en: "tomorrow",
  selitys:
    "Tätä päivää seuraavana päivänä. Taipumaton adverbi (alkujaan sanan 'huomen' essiivi).",
  kuva: { emoji: "🌄", alt: "huomenna – seuraavan päivän aamu" },

  kielioppi: {
    tyyppi: "adverbi (taipumaton)",
    muodot: [
      { sija: "eilen", muoto: "eilen", merkitys: "yesterday" },
      { sija: "tänään", muoto: "tänään", merkitys: "today" },
      { sija: "huomenna", muoto: "huomenna", merkitys: "tomorrow" },
    ],
    huom:
      "Ei taivu. Seuraava päivä = 'huominen' (subst./adj.). Ylihuomenna = the day after tomorrow.",
  },
  johdokset: [
    {
      fi: "huominen",
      en: "tomorrow (as a noun/adjective); the morrow",
      taso: "B1",
      esim: { fi: "Huominen on tärkeä päivä.", en: "Tomorrow is an important day." },
    },
    {
      fi: "huomisaamu",
      en: "tomorrow morning",
      taso: "B2",
      esim: { fi: "Lähden huomisaamuna aikaisin.", en: "I'll leave early tomorrow morning." },
    },
    {
      fi: "ylihuomenna",
      en: "the day after tomorrow",
      taso: "B1",
      esim: { fi: "Ylihuomenna on perjantai.", en: "The day after tomorrow is Friday." },
    },
  ],
  synonyymit: [
    { fi: "huomispäivänä", en: "on the morrow" },
    { fi: "seuraavana päivänä", en: "(on) the next day" },
  ],
  esimerkit: {
    A2: { fi: "Nähdään huomenna!", en: "See you tomorrow!" },
    B1: { fi: "Huomenna minun pitää herätä aikaisin.", en: "Tomorrow I have to wake up early." },
    B2: {
      fi: "Huomenna selviää, onnistuiko suunnitelma.",
      en: "Tomorrow it will become clear whether the plan succeeded.",
    },
  },
  updatedAt: "2026-06-04",
};

export default huomenna;
