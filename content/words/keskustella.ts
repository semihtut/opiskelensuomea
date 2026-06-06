import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem keskustele-.
// Present keskustelen, past keskustelin, past participle keskustellut. Governs elative (keskustella jostakin).
const keskustella: Word = {
  fi: "keskustella",
  slug: "keskustella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to discuss, to converse",
  selitys:
    "Puhua jostakin yhdessä toisen kanssa: 'keskustella asiasta'. Tyyppi 3 (-lla), ei astevaihtelua, vartalo keskustele-. Aiheesta elatiivi: keskustella jostakin. Vrt. keskustelu (discussion), puhua, jutella.",
  kuva: { emoji: "💬", alt: "keskustella – puhua yhdessä jostakin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); ei astevaihtelua; vartalo keskustele-",
    muodot: [
      { sija: "preesens (minä)", muoto: "keskustelen", merkitys: "I discuss" },
      { sija: "imperfekti (minä)", muoto: "keskustelin", merkitys: "I discussed" },
      { sija: "NUT-partisiippi", muoto: "keskustellut", merkitys: "(have) discussed" },
    ],
    huom:
      "Aiheesta elatiivi: 'keskustella säästä' (to discuss the weather). Kumppanista genetiivi + kanssa: 'keskustella ystävän kanssa'. Vrt. keskustelu = discussion, conversation.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "keskustelen" },
          { label: "sinä", form: "keskustelet" },
          { label: "hän", form: "keskustelee" },
          { label: "me", form: "keskustelemme" },
          { label: "te", form: "keskustelette" },
          { label: "he", form: "keskustelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en keskustele" },
          { label: "hän", form: "ei keskustele" },
          { label: "he", form: "eivät keskustele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "keskustelin" },
          { label: "sinä", form: "keskustelit" },
          { label: "hän", form: "keskusteli" },
          { label: "me", form: "keskustelimme" },
          { label: "te", form: "keskustelitte" },
          { label: "he", form: "keskustelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen keskustellut" },
          { label: "hän", form: "on keskustellut" },
          { label: "he", form: "ovat keskustelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "keskustele!" },
          { label: "te", form: "keskustelkaa!" },
          { label: "kielto (sinä)", form: "älä keskustele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keskustelu",
      en: "discussion, conversation",
      taso: "B1",
      esim: { fi: "Meillä oli pitkä keskustelu.", en: "We had a long conversation." },
    },
    {
      fi: "keskustelija",
      en: "participant in a discussion",
      taso: "B2",
      esim: { fi: "Hän on taitava keskustelija.", en: "He is a skilled conversationalist." },
    },
    {
      fi: "keskusteluttaa",
      en: "to engage (someone) in discussion",
      taso: "B2",
      esim: { fi: "Opettaja keskustelutti oppilaita.", en: "The teacher drew the students into discussion." },
    },
  ],
  synonyymit: [
    { fi: "jutella", en: "to chat" },
    { fi: "puhua", en: "to talk" },
  ],
  esimerkit: {
    A2: { fi: "Keskustelimme suomeksi.", en: "We talked in Finnish." },
    B1: { fi: "Haluan keskustella kanssasi asiasta.", en: "I want to discuss the matter with you." },
    B2: {
      fi: "Kokouksessa keskusteltiin pitkään budjetin leikkauksista.",
      en: "At the meeting they discussed the budget cuts at length.",
    },
  },
  updatedAt: "2026-06-06",
};

export default keskustella;
