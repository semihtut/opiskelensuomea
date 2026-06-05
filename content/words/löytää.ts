import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 54/huutaa (verb type 1), t:d gradation,
// stem löytä-. Present löydän (t:d), IRREGULAR past löysin/löysi, participle löytänyt.
const loytaa: Word = {
  fi: "löytää",
  slug: "löytää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to find",
  selitys:
    "Saada käsiinsä jotakin etsittyä tai sattumalta. Tyyppi 1, astevaihtelu t:d (löytä- → löydä-). Imperfekti on poikkeava: löysin (t → s). Vrt. etsiä (= search).",
  kuva: { emoji: "🔎", alt: "löytää – löytämisen oivallus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); t:d-astevaihtelu; poikkeava imperfekti löysin",
    muodot: [
      { sija: "preesens (minä)", muoto: "löydän", merkitys: "I find" },
      { sija: "imperfekti (minä)", muoto: "löysin", merkitys: "I found" },
      { sija: "kielto (minä)", muoto: "en löydä", merkitys: "I don't find" },
    ],
    huom:
      "Preesensissä t → d (löydän), mutta imperfektissä t → s (löysin, löysi). Partisiippi löytänyt. Paikka usein elatiivissa: 'Löysin sen laatikosta.'",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "löydän" },
          { label: "sinä", form: "löydät" },
          { label: "hän", form: "löytää" },
          { label: "me", form: "löydämme" },
          { label: "te", form: "löydätte" },
          { label: "he", form: "löytävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en löydä" },
          { label: "sinä", form: "et löydä" },
          { label: "hän", form: "ei löydä" },
          { label: "me", form: "emme löydä" },
          { label: "te", form: "ette löydä" },
          { label: "he", form: "eivät löydä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "löysin" },
          { label: "sinä", form: "löysit" },
          { label: "hän", form: "löysi" },
          { label: "me", form: "löysimme" },
          { label: "te", form: "löysitte" },
          { label: "he", form: "löysivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en löytänyt" },
          { label: "sinä", form: "et löytänyt" },
          { label: "hän", form: "ei löytänyt" },
          { label: "me", form: "emme löytäneet" },
          { label: "te", form: "ette löytäneet" },
          { label: "he", form: "eivät löytäneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen löytänyt" },
          { label: "sinä", form: "olet löytänyt" },
          { label: "hän", form: "on löytänyt" },
          { label: "me", form: "olemme löytäneet" },
          { label: "te", form: "olette löytäneet" },
          { label: "he", form: "ovat löytäneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole löytänyt" },
          { label: "hän", form: "ei ole löytänyt" },
          { label: "he", form: "eivät ole löytäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "löydä!" },
          { label: "te", form: "löytäkää!" },
          { label: "kielto (sinä)", form: "älä löydä" },
          { label: "kielto (te)", form: "älkää löytäkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "löytö",
      en: "a find, discovery",
      taso: "B1",
      esim: { fi: "Se oli todellinen löytö.", en: "It was a real find." },
    },
    {
      fi: "löytyä",
      en: "to be found, turn up",
      taso: "B1",
      esim: { fi: "Avaimet löytyivät taskusta.", en: "The keys turned up in the pocket." },
    },
    {
      fi: "löytötavara",
      en: "lost-and-found item",
      taso: "B2",
      esim: { fi: "Hain takin löytötavaroista.", en: "I picked up the coat from lost and found." },
    },
  ],
  synonyymit: [
    { fi: "havaita", en: "to detect, notice" },
    { fi: "tavoittaa", en: "to reach, locate" },
  ],
  esimerkit: {
    A2: { fi: "En löydä avaimiani.", en: "I can't find my keys." },
    B1: { fi: "Löysin hyvän ravintolan keskustasta.", en: "I found a good restaurant downtown." },
    B2: {
      fi: "Lopulta löysimme talon, jota olimme etsineet koko päivän.",
      en: "Finally we found the house we'd been looking for all day.",
    },
  },
  updatedAt: "2026-06-05",
};

export default loytaa;
