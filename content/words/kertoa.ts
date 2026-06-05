import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1), rt:rr gradation,
// stem kerto-. Present kerron (rt:rr), past kerroin/kertoi, past participle kertonut.
const kertoa: Word = {
  fi: "kertoa",
  slug: "kertoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to tell, narrate",
  selitys:
    "Kertoa tarina tai tieto jollekulle. Tyyppi 1, astevaihtelu rt:rr (kerto- → kerro-). Vrt. sanoa (= say) ja puhua (= speak).",
  kuva: { emoji: "📖", alt: "kertoa – tarinan kertominen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); astevaihtelu rt:rr (kerto- → kerro-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kerron", merkitys: "I tell" },
      { sija: "imperfekti (minä)", muoto: "kerroin", merkitys: "I told" },
      { sija: "kielto (minä)", muoto: "en kerro", merkitys: "I don't tell" },
    ],
    huom:
      "Heikossa asteessa rt → rr: kerron, kerrot, kerroin (mutta kertoo, kertovat, kertonut). 'Kertoa jollekulle jostakin' = tell someone about something.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kerron" },
          { label: "sinä", form: "kerrot" },
          { label: "hän", form: "kertoo" },
          { label: "me", form: "kerromme" },
          { label: "te", form: "kerrotte" },
          { label: "he", form: "kertovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kerro" },
          { label: "sinä", form: "et kerro" },
          { label: "hän", form: "ei kerro" },
          { label: "me", form: "emme kerro" },
          { label: "te", form: "ette kerro" },
          { label: "he", form: "eivät kerro" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kerroin" },
          { label: "sinä", form: "kerroit" },
          { label: "hän", form: "kertoi" },
          { label: "me", form: "kerroimme" },
          { label: "te", form: "kerroitte" },
          { label: "he", form: "kertoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en kertonut" },
          { label: "sinä", form: "et kertonut" },
          { label: "hän", form: "ei kertonut" },
          { label: "me", form: "emme kertoneet" },
          { label: "te", form: "ette kertoneet" },
          { label: "he", form: "eivät kertoneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kertonut" },
          { label: "sinä", form: "olet kertonut" },
          { label: "hän", form: "on kertonut" },
          { label: "me", form: "olemme kertoneet" },
          { label: "te", form: "olette kertoneet" },
          { label: "he", form: "ovat kertoneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole kertonut" },
          { label: "hän", form: "ei ole kertonut" },
          { label: "he", form: "eivät ole kertoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kerro!" },
          { label: "te", form: "kertokaa!" },
          { label: "kielto (sinä)", form: "älä kerro" },
          { label: "kielto (te)", form: "älkää kertoko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kertomus",
      en: "story, account",
      taso: "B1",
      esim: { fi: "Luin lyhyen kertomuksen.", en: "I read a short story." },
    },
    {
      fi: "kertoja",
      en: "narrator",
      taso: "B1",
      esim: { fi: "Kertoja oli luotettava.", en: "The narrator was reliable." },
    },
    {
      fi: "kerta",
      en: "time, occasion (related root)",
      taso: "A2",
      esim: { fi: "Yritä vielä yksi kerta.", en: "Try one more time." },
    },
  ],
  synonyymit: [
    { fi: "selostaa", en: "to recount, report" },
    { fi: "mainita", en: "to mention" },
  ],
  esimerkit: {
    A2: { fi: "Kerro minulle lisää.", en: "Tell me more." },
    B1: { fi: "Hän kertoi matkastaan Lappiin.", en: "She told about her trip to Lapland." },
    B2: {
      fi: "Kerroin heille, mitä olin nähnyt edellisenä iltana.",
      en: "I told them what I had seen the previous evening.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kertoa;
