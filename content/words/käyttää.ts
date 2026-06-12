import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), tt:t gradation,
// stem käyttä-. Present käytän, past käytin, past participle käyttänyt.
const kayttaa: Word = {
  fi: "käyttää",
  slug: "käyttää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to use",
  selitys:
    "Hyödyntää jotakin tarkoitukseensa. Tyyppi 1, astevaihtelu tt:t: käyttää → käytän. Objekti partitiivissa: 'käytän puhelinta'. Vrt. käydä (eri verbi).",
  kuva: { alt: "käyttää – väline otetaan käyttöön" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t",
    muodot: [
      { sija: "preesens (minä)", muoto: "käytän", merkitys: "I use" },
      { sija: "imperfekti (minä)", muoto: "käytin", merkitys: "I used" },
      { sija: "kielto (minä)", muoto: "en käytä", merkitys: "I don't use" },
    ],
    huom:
      "Heikossa asteessa tt → t: käytän, käytin (mutta käyttää, käyttävät). Objekti usein partitiivissa: 'käytän tietokonetta'. Älä sekoita verbiin käydä (kävin).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "käytän" },
          { label: "sinä", form: "käytät" },
          { label: "hän", form: "käyttää" },
          { label: "me", form: "käytämme" },
          { label: "te", form: "käytätte" },
          { label: "he", form: "käyttävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en käytä" },
          { label: "hän", form: "ei käytä" },
          { label: "he", form: "eivät käytä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "käytin" },
          { label: "sinä", form: "käytit" },
          { label: "hän", form: "käytti" },
          { label: "me", form: "käytimme" },
          { label: "te", form: "käytitte" },
          { label: "he", form: "käyttivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen käyttänyt" },
          { label: "hän", form: "on käyttänyt" },
          { label: "he", form: "ovat käyttäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "käytä!" },
          { label: "te", form: "käyttäkää!" },
          { label: "kielto (sinä)", form: "älä käytä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käyttö",
      en: "use, usage",
      taso: "B1",
      esim: { fi: "Sovelluksen käyttö on ilmaista.", en: "Using the app is free." },
    },
    {
      fi: "käyttäjä",
      en: "user",
      taso: "A2",
      esim: { fi: "Palvelulla on miljoona käyttäjää.", en: "The service has a million users." },
    },
    {
      fi: "käytännöllinen",
      en: "practical",
      taso: "B2",
      esim: { fi: "Se on käytännöllinen ratkaisu.", en: "It is a practical solution." },
    },
  ],
  synonyymit: [
    { fi: "hyödyntää", en: "to utilise" },
    { fi: "soveltaa", en: "to apply" },
  ],
  esimerkit: {
    A2: { fi: "Käytän puhelinta joka päivä.", en: "I use the phone every day." },
    B1: { fi: "Käytin koko illan tämän tehtävän tekemiseen.", en: "I spent the whole evening doing this task." },
    B2: {
      fi: "Jos käyttäisit karttaa, et eksyisi näin usein kaupungilla.",
      en: "If you used a map, you wouldn't get lost in the city so often.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kayttaa;
