import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st), stem nosta-.
// Present nostan, past nostin, past participle nostanut.
const nostaa: Word = {
  fi: "nostaa",
  slug: "nostaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to lift, raise; to withdraw (money)",
  selitys:
    "Siirtää ylöspäin tai ottaa esiin: 'nostan laukun pöydälle' / 'nostan rahaa pankista'. Ei astevaihtelua (st säilyy). Vastakohta laskea.",
  kuva: { alt: "nostaa – siirtää ylöspäin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-staa); ei astevaihtelua; vartalo nosta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "nostan", merkitys: "I lift" },
      { sija: "imperfekti (minä)", muoto: "nostin", merkitys: "I lifted" },
      { sija: "NUT-partisiippi", muoto: "nostanut", merkitys: "(have) lifted" },
    ],
    huom:
      "Vastakohta laskea (lower). Monta merkitystä: nostaa kättä, nostaa palkkaa (raise pay), nostaa rahaa (withdraw). Vrt. nousta = to rise (intransitiivinen).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "nostan" },
          { label: "sinä", form: "nostat" },
          { label: "hän", form: "nostaa" },
          { label: "me", form: "nostamme" },
          { label: "te", form: "nostatte" },
          { label: "he", form: "nostavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en nosta" },
          { label: "hän", form: "ei nosta" },
          { label: "he", form: "eivät nosta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "nostin" },
          { label: "sinä", form: "nostit" },
          { label: "hän", form: "nosti" },
          { label: "me", form: "nostimme" },
          { label: "te", form: "nostitte" },
          { label: "he", form: "nostivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen nostanut" },
          { label: "hän", form: "on nostanut" },
          { label: "he", form: "ovat nostaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "nosta!" },
          { label: "te", form: "nostakaa!" },
          { label: "kielto (sinä)", form: "älä nosta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nosto",
      en: "withdrawal; lift",
      taso: "B1",
      esim: { fi: "Tein käteisnoston automaatista.", en: "I made a cash withdrawal from the ATM." },
    },
    {
      fi: "nostin",
      en: "lift, hoist, jack",
      taso: "B2",
      esim: { fi: "Auto nostettiin nostimella.", en: "The car was raised with a jack." },
    },
    {
      fi: "ylennys",
      en: "promotion",
      taso: "B2",
      esim: { fi: "Hän sai ylennyksen töissä.", en: "He got a promotion at work." },
    },
  ],
  synonyymit: [
    { fi: "kohottaa", en: "to raise, elevate" },
    { fi: "kasvattaa", en: "to increase" },
  ],
  esimerkit: {
    A2: { fi: "Nostan laukun lattialta.", en: "I lift the bag off the floor." },
    B1: { fi: "Nostin rahaa automaatista.", en: "I withdrew money from the ATM." },
    B2: {
      fi: "Uutinen nosti monien toiveita, vaikka mikään ei ollut vielä varmaa.",
      en: "The news raised many people's hopes, even though nothing was certain yet.",
    },
  },
  updatedAt: "2026-06-06",
};

export default nostaa;
