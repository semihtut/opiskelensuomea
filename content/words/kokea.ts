import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, k:∅ gradation, stem koke- ~ koe-.
// Present minä koen, hän kokee; imperfect minä koin; NUT kokenut.
const kokea: Word = {
  fi: "kokea",
  slug: "kokea",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to experience, undergo; to feel (that)",
  selitys:
    "Elää läpi tai tuntea jokin: 'kokea jotakin uutta'. Tyyppi 3 (-kea), Kotus 58/laskea, astevaihtelu k:∅ (koen). Objekti partitiivissa. Vrt. kokemus, kokenut, tuntea.",
  kuva: { alt: "kokea – elää läpi tai tuntea jokin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-kea), Kotus 58/laskea; astevaihtelu k:∅ (koke- ~ koe-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "koen", merkitys: "I experience" },
      { sija: "imperfekti (minä)", muoto: "koin", merkitys: "I experienced" },
      { sija: "NUT-partisiippi", muoto: "kokenut", merkitys: "(have) experienced" },
    ],
    huom:
      "Astevaihtelu k:∅: heikko koe- (koen, koin), vahva koke- (kokea, kokee, kokenut). 'Kokea jotakin' = to experience sth; 'kokea, että…' = to feel that…. Vrt. kokemus = experience, kokenut = experienced.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "koen" },
          { label: "sinä", form: "koet" },
          { label: "hän", form: "kokee" },
          { label: "me", form: "koemme" },
          { label: "te", form: "koette" },
          { label: "he", form: "kokevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en koe" },
          { label: "hän", form: "ei koe" },
          { label: "he", form: "eivät koe" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "koin" },
          { label: "sinä", form: "koit" },
          { label: "hän", form: "koki" },
          { label: "me", form: "koimme" },
          { label: "te", form: "koitte" },
          { label: "he", form: "kokivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kokenut" },
          { label: "hän", form: "on kokenut" },
          { label: "he", form: "ovat kokeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "koe!" },
          { label: "te", form: "kokekaa!" },
          { label: "kielto (sinä)", form: "älä koe" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kokemus",
      en: "experience",
      taso: "B1",
      esim: { fi: "Se oli upea kokemus.", en: "It was a wonderful experience." },
    },
    {
      fi: "kokenut",
      en: "experienced",
      taso: "B2",
      esim: { fi: "Hän on kokenut opettaja.", en: "She is an experienced teacher." },
    },
  ],
  synonyymit: [
    { fi: "elää (läpi)", en: "to live through" },
    { fi: "tuntea", en: "to feel" },
  ],
  esimerkit: {
    A2: { fi: "Koin jotain ihanaa.", en: "I experienced something wonderful." },
    B1: { fi: "Moni kokee muutoksen pelottavana.", en: "Many experience change as frightening." },
    B2: {
      fi: "Matkalla koimme sekä haasteita että ikimuistoisia hetkiä.",
      en: "On the trip we experienced both challenges and unforgettable moments.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kokea;
