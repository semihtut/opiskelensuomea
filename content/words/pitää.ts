import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), t:d gradation,
// stem pitä-. Present pidän (t:d), past pidin/piti, past participle pitänyt.
const pitaa: Word = {
  fi: "pitää",
  slug: "pitää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to hold/keep; to like; must",
  selitys:
    "Monimerkityksinen: 1) pitää kädessä (hold), 2) pitää jostakin = like (elatiivi), 3) pitää tehdä = must (pakko). Tyyppi 1, astevaihtelu t:d (pitä- → pidä-).",
  kuva: { emoji: "🤲", alt: "pitää – pitää jotakin käsissä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); astevaihtelu t:d (pitä- → pidä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "pidän", merkitys: "I hold / I like" },
      { sija: "imperfekti (minä)", muoto: "pidin", merkitys: "I held / I liked" },
      { sija: "kielto (minä)", muoto: "en pidä", merkitys: "I don't hold / don't like" },
    ],
    huom:
      "Heikossa asteessa t → d: pidän, pidät, pidin (mutta pitää, pitävät, pitänyt). 'Pitää jostakin' = like (elatiivi). Pakko: 'Minun pitää mennä' = I have to go.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pidän" },
          { label: "sinä", form: "pidät" },
          { label: "hän", form: "pitää" },
          { label: "me", form: "pidämme" },
          { label: "te", form: "pidätte" },
          { label: "he", form: "pitävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pidä" },
          { label: "sinä", form: "et pidä" },
          { label: "hän", form: "ei pidä" },
          { label: "me", form: "emme pidä" },
          { label: "te", form: "ette pidä" },
          { label: "he", form: "eivät pidä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pidin" },
          { label: "sinä", form: "pidit" },
          { label: "hän", form: "piti" },
          { label: "me", form: "pidimme" },
          { label: "te", form: "piditte" },
          { label: "he", form: "pitivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en pitänyt" },
          { label: "sinä", form: "et pitänyt" },
          { label: "hän", form: "ei pitänyt" },
          { label: "me", form: "emme pitäneet" },
          { label: "te", form: "ette pitäneet" },
          { label: "he", form: "eivät pitäneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pitänyt" },
          { label: "sinä", form: "olet pitänyt" },
          { label: "hän", form: "on pitänyt" },
          { label: "me", form: "olemme pitäneet" },
          { label: "te", form: "olette pitäneet" },
          { label: "he", form: "ovat pitäneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole pitänyt" },
          { label: "hän", form: "ei ole pitänyt" },
          { label: "he", form: "eivät ole pitäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pidä!" },
          { label: "te", form: "pitäkää!" },
          { label: "kielto (sinä)", form: "älä pidä" },
          { label: "kielto (te)", form: "älkää pitäkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pito",
      en: "grip, hold; (pl.) a feast",
      taso: "B2",
      esim: { fi: "Renkaan pito jäällä oli huono.", en: "The tire's grip on ice was poor." },
    },
    {
      fi: "pitkä",
      en: "long (related root)",
      taso: "A1",
      esim: { fi: "Matka oli pitkä.", en: "The journey was long." },
    },
    {
      fi: "ylläpitää",
      en: "to maintain, upkeep",
      taso: "B2",
      esim: { fi: "Kaupunki ylläpitää puistoja.", en: "The city maintains the parks." },
    },
  ],
  synonyymit: [
    { fi: "tykätä", en: "to like (colloquial)" },
    { fi: "säilyttää", en: "to keep, retain" },
  ],
  esimerkit: {
    A2: { fi: "Pidän kahvista.", en: "I like coffee." },
    B1: { fi: "Minun pitää mennä töihin.", en: "I have to go to work." },
    B2: {
      fi: "Hän piti lasta kädestä koko matkan.",
      en: "She held the child by the hand the whole way.",
    },
  },
  updatedAt: "2026-06-05",
};

export default pitaa;
