import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: aikaa ilmaiseva adverbi, taipumaton.
const eilen: Word = {
  fi: "eilen",
  slug: "eilen",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "yesterday",
  selitys:
    "Edellisenä päivänä, tätä päivää ennen: 'eilen satoi'. Taipumaton ajan adverbi. Vrt. tänään (today), huomenna (tomorrow), eilinen (yesterday's). Erityismuoto: eilisiltana = yesterday evening.",
  kuva: { alt: "eilen – edellisenä päivänä" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "eilen", merkitys: "yesterday" },
      { sija: "vrt.", muoto: "tänään", merkitys: "today" },
      { sija: "vrt.", muoto: "huomenna", merkitys: "tomorrow" },
    ],
    huom:
      "Taipumaton adverbi (ei sijamuotoja). Aikajana: toissapäivänä – eilen – tänään – huomenna – ylihuomenna. Adjektiivi eilinen = yesterday's. 'Eilen illalla' = yesterday evening.",
  },
  johdokset: [
    {
      fi: "eilinen",
      en: "yesterday's, of yesterday",
      taso: "B1",
      esim: { fi: "Luin eilisen lehden.", en: "I read yesterday's paper." },
    },
    {
      fi: "toissapäivänä",
      en: "the day before yesterday",
      taso: "B1",
      esim: { fi: "Tapasin hänet toissapäivänä.", en: "I met him the day before yesterday." },
    },
    {
      fi: "eilisilta",
      en: "yesterday evening",
      taso: "B2",
      esim: { fi: "Eilisilta oli ikimuistoinen.", en: "Yesterday evening was memorable." },
    },
  ],
  synonyymit: [
    { fi: "edellisenä päivänä", en: "on the previous day" },
  ],
  esimerkit: {
    A2: { fi: "Kävin eilen kaupassa.", en: "I went to the shop yesterday." },
    B1: { fi: "Eilen satoi koko päivän.", en: "Yesterday it rained all day." },
    B2: {
      fi: "Vielä eilen kaikki tuntui mahdottomalta, mutta tänään näen toivoa.",
      en: "Just yesterday everything felt impossible, but today I see hope.",
    },
  },
  updatedAt: "2026-06-06",
};

export default eilen;
