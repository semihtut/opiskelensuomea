import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, special k–j gradation
// (lk → lj). Present suljen, past suljin, NUT sulkenut, passive past suljettu.
const sulkea: Word = {
  fi: "sulkea",
  slug: "sulkea",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to close, shut",
  selitys:
    "Saada jokin kiinni; lopettaa toiminta. Tyyppi 1, erikoisastevaihtelu k:j (lk → lj): sulkea → suljen. Vastakohta avata.",
  kuva: { emoji: "🔒", alt: "sulkea – ovi tai lukko suljetaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-kea); astevaihtelu k:j (lk → lj)",
    muodot: [
      { sija: "preesens (minä)", muoto: "suljen", merkitys: "I close" },
      { sija: "imperfekti (minä)", muoto: "suljin", merkitys: "I closed" },
      { sija: "passiivin partisiippi", muoto: "suljettu", merkitys: "closed (passive)" },
    ],
    huom:
      "Heikossa asteessa lk → lj: suljen, suljin, suljettu (mutta sulkea, sulkee, sulkenut). Sulkea ovi; kauppa suljetaan kello kuusi.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "suljen" },
          { label: "sinä", form: "suljet" },
          { label: "hän", form: "sulkee" },
          { label: "me", form: "suljemme" },
          { label: "te", form: "suljette" },
          { label: "he", form: "sulkevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en sulje" },
          { label: "hän", form: "ei sulje" },
          { label: "he", form: "eivät sulje" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "suljin" },
          { label: "sinä", form: "suljit" },
          { label: "hän", form: "sulki" },
          { label: "me", form: "suljimme" },
          { label: "te", form: "suljitte" },
          { label: "he", form: "sulkivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen sulkenut" },
          { label: "hän", form: "on sulkenut" },
          { label: "he", form: "ovat sulkeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "sulje!" },
          { label: "te", form: "sulkekaa!" },
          { label: "kielto (sinä)", form: "älä sulje" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suljettu",
      en: "closed",
      taso: "A2",
      esim: { fi: "Kauppa on suljettu sunnuntaisin.", en: "The shop is closed on Sundays." },
    },
    {
      fi: "sulkeutua",
      en: "to close (intransitive)",
      taso: "B1",
      esim: { fi: "Ovi sulkeutui hiljaa.", en: "The door closed quietly." },
    },
    {
      fi: "sulku",
      en: "closure, lock (canal)",
      taso: "B2",
      esim: { fi: "Tien sulku kesti viikon.", en: "The road closure lasted a week." },
    },
  ],
  synonyymit: [
    { fi: "panna kiinni", en: "to shut (colloquial)" },
    { fi: "laittaa kiinni", en: "to close up" },
  ],
  esimerkit: {
    A2: { fi: "Suljen oven, koska ulkona on kylmä.", en: "I'll close the door because it's cold outside." },
    B1: { fi: "Museo suljettiin remontin ajaksi.", en: "The museum was closed for the renovation." },
    B2: {
      fi: "Hän sulki tietokoneen, sammutti valot ja lähti viimeisenä toimistosta.",
      en: "He shut the computer, turned off the lights and left the office last.",
    },
  },
  updatedAt: "2026-06-05",
};

export default sulkea;
