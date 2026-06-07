import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, t:d gradation (ht:hd), i-stem.
// Present minä kiirehdin = imperfect minä kiirehdin; hän kiirehtii/kiirehti; NUT kiirehtinyt.
const kiirehtia: Word = {
  fi: "kiirehtiä",
  slug: "kiirehtiä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to hurry, hasten",
  selitys:
    "Tehdä jotakin nopeasti tai pitää kiirettä: 'kiirehtiä töihin'. Tyyppi 1 (-iä), Kotus 61/sallia, astevaihtelu ht:hd (kiirehdin). i-vartalo: minä-muoto sama preesensissä ja imperfektissä. Sanasta kiire. Vrt. ehtiä, kiire, pitää kiirettä.",
  kuva: { emoji: "🏃", alt: "kiirehtiä – tehdä jotakin nopeasti, pitää kiirettä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-iä), Kotus 61/sallia; astevaihtelu ht:hd (kiireht- ~ kiirehd-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kiirehdin", merkitys: "I hurry" },
      { sija: "imperfekti (minä)", muoto: "kiirehdin", merkitys: "I hurried (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "kiirehtinyt", merkitys: "(have) hurried" },
    ],
    huom:
      "i-vartalo: minä kiirehdin on SAMA preesensissä ja imperfektissä; vain hän eroaa (kiirehtii ↔ kiirehti). Astevaihtelu ht:hd. Sanasta kiire. Vrt. ehtiä, kiire = hurry.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kiirehdin" },
          { label: "sinä", form: "kiirehdit" },
          { label: "hän", form: "kiirehtii" },
          { label: "me", form: "kiirehdimme" },
          { label: "te", form: "kiirehditte" },
          { label: "he", form: "kiirehtivät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kiirehdi" },
          { label: "hän", form: "ei kiirehdi" },
          { label: "he", form: "eivät kiirehdi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kiirehdin" },
          { label: "sinä", form: "kiirehdit" },
          { label: "hän", form: "kiirehti" },
          { label: "me", form: "kiirehdimme" },
          { label: "te", form: "kiirehditte" },
          { label: "he", form: "kiirehtivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kiirehtinyt" },
          { label: "hän", form: "on kiirehtinyt" },
          { label: "he", form: "ovat kiirehtineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kiirehdi!" },
          { label: "te", form: "kiirehtikää!" },
          { label: "kielto (sinä)", form: "älä kiirehdi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kiire",
      en: "hurry, rush",
      taso: "A2",
      esim: { fi: "Minulla on kiire.", en: "I'm in a hurry." },
    },
    {
      fi: "kiireinen",
      en: "busy",
      taso: "B1",
      esim: { fi: "Päivä oli kiireinen.", en: "The day was busy." },
    },
  ],
  synonyymit: [
    { fi: "pitää kiirettä", en: "to be in a hurry" },
  ],
  esimerkit: {
    A2: { fi: "Kiirehdi, bussi lähtee!", en: "Hurry, the bus is leaving!" },
    B1: { fi: "Kiirehdin aamulla töihin.", en: "I hurried to work in the morning." },
    B2: {
      fi: "Ei kannata kiirehtiä päätöstä, jota voi katua myöhemmin.",
      en: "It's not worth rushing a decision you might regret later.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kiirehtia;
