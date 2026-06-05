import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), tt:t gradation,
// stem näyttä-. Present näytän (tt:t), past näytin/näytti, past participle näyttänyt.
const nayttaa: Word = {
  fi: "näyttää",
  slug: "näyttää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to show; to look/seem",
  selitys:
    "1) esittää jotakin nähtäväksi (show), 2) vaikuttaa joltakin (look/seem, + ablatiivi). Tyyppi 1, astevaihtelu tt:t (näyttä- → näytä-).",
  kuva: { emoji: "👆", alt: "näyttää – näytetään jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); astevaihtelu tt:t (näyttä- → näytä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "näytän", merkitys: "I show" },
      { sija: "imperfekti (minä)", muoto: "näytin", merkitys: "I showed" },
      { sija: "kielto (minä)", muoto: "en näytä", merkitys: "I don't show" },
    ],
    huom:
      "Heikossa asteessa tt → t: näytän, näytit, näytin (mutta näyttää, näyttävät, näyttänyt). 'Näyttää hyvältä' = looks good (ablatiivi). Vrt. näkyä (= be visible).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "näytän" },
          { label: "sinä", form: "näytät" },
          { label: "hän", form: "näyttää" },
          { label: "me", form: "näytämme" },
          { label: "te", form: "näytätte" },
          { label: "he", form: "näyttävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en näytä" },
          { label: "sinä", form: "et näytä" },
          { label: "hän", form: "ei näytä" },
          { label: "me", form: "emme näytä" },
          { label: "te", form: "ette näytä" },
          { label: "he", form: "eivät näytä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "näytin" },
          { label: "sinä", form: "näytit" },
          { label: "hän", form: "näytti" },
          { label: "me", form: "näytimme" },
          { label: "te", form: "näytitte" },
          { label: "he", form: "näyttivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en näyttänyt" },
          { label: "sinä", form: "et näyttänyt" },
          { label: "hän", form: "ei näyttänyt" },
          { label: "me", form: "emme näyttäneet" },
          { label: "te", form: "ette näyttäneet" },
          { label: "he", form: "eivät näyttäneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen näyttänyt" },
          { label: "sinä", form: "olet näyttänyt" },
          { label: "hän", form: "on näyttänyt" },
          { label: "me", form: "olemme näyttäneet" },
          { label: "te", form: "olette näyttäneet" },
          { label: "he", form: "ovat näyttäneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole näyttänyt" },
          { label: "hän", form: "ei ole näyttänyt" },
          { label: "he", form: "eivät ole näyttäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "näytä!" },
          { label: "te", form: "näyttäkää!" },
          { label: "kielto (sinä)", form: "älä näytä" },
          { label: "kielto (te)", form: "älkää näyttäkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "näyttö",
      en: "display, screen",
      taso: "B1",
      esim: { fi: "Tietokoneen näyttö on iso.", en: "The computer's screen is big." },
    },
    {
      fi: "näyttely",
      en: "exhibition",
      taso: "B1",
      esim: { fi: "Kävimme taidenäyttelyssä.", en: "We visited an art exhibition." },
    },
    {
      fi: "esittää",
      en: "to present, perform",
      taso: "B1",
      esim: { fi: "Hän esitti suunnitelman.", en: "She presented the plan." },
    },
  ],
  synonyymit: [
    { fi: "esittää", en: "to present" },
    { fi: "vaikuttaa", en: "to seem, appear" },
  ],
  esimerkit: {
    A2: { fi: "Näytä minulle kuva.", en: "Show me the picture." },
    B1: { fi: "Sää näyttää hyvältä tänään.", en: "The weather looks good today." },
    B2: {
      fi: "Hän näytti väsyneeltä, vaikka väitti nukkuneensa hyvin.",
      en: "She looked tired, although she claimed to have slept well.",
    },
  },
  updatedAt: "2026-06-05",
};

export default nayttaa;
