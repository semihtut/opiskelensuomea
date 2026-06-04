import type { Word } from "@/lib/content-types";

// Invariant time adverb (no inflection). Part of the everyday time axis:
// eilen – tänään – huomenna.
const tänään: Word = {
  fi: "tänään",
  slug: "tänään",
  pos: "adverbi",
  posClass: "adverbi",
  level: "A1",
  en: "today",
  selitys: "Kuluvana päivänä, tänä päivänä. Taipumaton aikaa ilmaiseva adverbi.",
  kuva: { emoji: "📆", alt: "tänään – tämä päivä kalenterissa" },

  kielioppi: {
    tyyppi: "adverbi (taipumaton)",
    muodot: [
      { sija: "eilen", muoto: "eilen", merkitys: "yesterday" },
      { sija: "tänään", muoto: "tänään", merkitys: "today" },
      { sija: "huomenna", muoto: "huomenna", merkitys: "tomorrow" },
    ],
    huom: "Ei taivu. Synonyyminen ilmaus 'tänä päivänä' on muodollisempi.",
  },
  johdokset: [
    {
      fi: "tämänpäiväinen",
      en: "today's, of today",
      taso: "B2",
      esim: { fi: "Luitko tämänpäiväisen lehden?", en: "Did you read today's paper?" },
    },
    {
      fi: "nykyään",
      en: "nowadays, these days",
      taso: "B1",
      esim: { fi: "Nykyään moni työskentelee kotoa.", en: "Nowadays many people work from home." },
    },
    {
      fi: "nykyhetki",
      en: "the present moment",
      taso: "B2",
      esim: { fi: "Keskity nykyhetkeen.", en: "Focus on the present moment." },
    },
  ],
  synonyymit: [
    { fi: "tänä päivänä", en: "today (more formal)" },
    { fi: "kuluvana päivänä", en: "on the current day (formal)" },
  ],
  esimerkit: {
    A2: { fi: "Tänään on kaunis sää.", en: "Today the weather is beautiful." },
    B1: { fi: "Tänään minulla ei ole aikaa.", en: "Today I don't have time." },
    B2: {
      fi: "Tänään tehdyt valinnat vaikuttavat huomiseen.",
      en: "The choices made today affect tomorrow.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tänään;
