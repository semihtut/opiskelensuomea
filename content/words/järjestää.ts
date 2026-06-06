import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation, stem järjestä-.
// Present järjestän, past järjestin, past participle järjestänyt.
const jarjestaa: Word = {
  fi: "järjestää",
  slug: "järjestää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to organize, to arrange",
  selitys:
    "Panna järjestykseen tai toteuttaa tapahtuma: 'järjestää juhlat'. Tyyppi 1 (-ää), ei astevaihtelua (st säilyy), vartalo järjestä-. Vrt. järjestys (order), järjestö (organization), järjestelmä (system).",
  kuva: { emoji: "📋", alt: "järjestää – panna järjestykseen tai toteuttaa tapahtuma" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); ei astevaihtelua; vartalo järjestä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "järjestän", merkitys: "I organize" },
      { sija: "imperfekti (minä)", muoto: "järjestin", merkitys: "I organized" },
      { sija: "NUT-partisiippi", muoto: "järjestänyt", merkitys: "(have) organized" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy kaikissa muodoissa). Kohde partitiivissa tai akkusatiivissa: 'järjestää konsertti'. Vrt. järjestys = order, järjestö = (NGO) organization.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "järjestän" },
          { label: "sinä", form: "järjestät" },
          { label: "hän", form: "järjestää" },
          { label: "me", form: "järjestämme" },
          { label: "te", form: "järjestätte" },
          { label: "he", form: "järjestävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en järjestä" },
          { label: "hän", form: "ei järjestä" },
          { label: "he", form: "eivät järjestä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "järjestin" },
          { label: "sinä", form: "järjestit" },
          { label: "hän", form: "järjesti" },
          { label: "me", form: "järjestimme" },
          { label: "te", form: "järjestitte" },
          { label: "he", form: "järjestivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen järjestänyt" },
          { label: "hän", form: "on järjestänyt" },
          { label: "he", form: "ovat järjestäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "järjestä!" },
          { label: "te", form: "järjestäkää!" },
          { label: "kielto (sinä)", form: "älä järjestä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "järjestys",
      en: "order, arrangement",
      taso: "B1",
      esim: { fi: "Laita kirjat aakkosjärjestykseen.", en: "Put the books in alphabetical order." },
    },
    {
      fi: "järjestö",
      en: "organization, association (NGO)",
      taso: "B2",
      esim: { fi: "Hän toimii vapaaehtoisjärjestössä.", en: "She works in a volunteer organization." },
    },
    {
      fi: "järjestäjä",
      en: "organizer",
      taso: "B2",
      esim: { fi: "Tapahtuman järjestäjä oli paikalla.", en: "The event's organizer was present." },
    },
  ],
  synonyymit: [
    { fi: "organisoida", en: "to organize" },
    { fi: "toteuttaa", en: "to carry out, realize" },
  ],
  esimerkit: {
    A2: { fi: "Järjestän juhlat lauantaina.", en: "I'm organizing a party on Saturday." },
    B1: { fi: "Koulu järjestää retken museoon.", en: "The school is arranging a trip to the museum." },
    B2: {
      fi: "Kaupunki järjesti asukkaille mahdollisuuden vaikuttaa suunnitelmiin.",
      en: "The city arranged an opportunity for residents to influence the plans.",
    },
  },
  updatedAt: "2026-06-06",
};

export default jarjestaa;
