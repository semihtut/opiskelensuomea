import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation, stem äänestä-.
// Present äänestän, past äänestin, past participle äänestänyt. Built from ääni + -stää.
const aanestaa: Word = {
  fi: "äänestää",
  slug: "äänestää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to vote",
  selitys:
    "Ilmaista kanta vaaleissa tai päätöksessä: 'äänestää vaaleissa'. Tyyppi 1 (-ää), ei astevaihtelua (st säilyy), vartalo äänestä-. Johdettu sanasta ääni. Vrt. äänestys (vote), äänestäjä (voter).",
  kuva: { emoji: "🗳️", alt: "äänestää – ilmaista kanta vaaleissa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); ei astevaihtelua; vartalo äänestä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "äänestän", merkitys: "I vote" },
      { sija: "imperfekti (minä)", muoto: "äänestin", merkitys: "I voted" },
      { sija: "NUT-partisiippi", muoto: "äänestänyt", merkitys: "(have) voted" },
    ],
    huom:
      "Kohde partitiivissa: 'äänestää ehdokasta'. Puolesta/vastaan: 'äänestää esityksen puolesta / esitystä vastaan'. Vrt. äänestys = vote, äänestäjä = voter.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "äänestän" },
          { label: "sinä", form: "äänestät" },
          { label: "hän", form: "äänestää" },
          { label: "me", form: "äänestämme" },
          { label: "te", form: "äänestätte" },
          { label: "he", form: "äänestävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en äänestä" },
          { label: "hän", form: "ei äänestä" },
          { label: "he", form: "eivät äänestä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "äänestin" },
          { label: "sinä", form: "äänestit" },
          { label: "hän", form: "äänesti" },
          { label: "me", form: "äänestimme" },
          { label: "te", form: "äänestitte" },
          { label: "he", form: "äänestivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen äänestänyt" },
          { label: "hän", form: "on äänestänyt" },
          { label: "he", form: "ovat äänestäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "äänestä!" },
          { label: "te", form: "äänestäkää!" },
          { label: "kielto (sinä)", form: "älä äänestä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "äänestys",
      en: "vote, ballot, poll",
      taso: "B1",
      esim: { fi: "Äänestys ratkaisi asian.", en: "The vote settled the matter." },
    },
    {
      fi: "äänestäjä",
      en: "voter",
      taso: "B2",
      esim: { fi: "Äänestäjät jonottivat vaalipaikalle.", en: "Voters queued at the polling station." },
    },
    {
      fi: "ennakkoäänestys",
      en: "advance voting",
      taso: "B2",
      esim: { fi: "Kävin ennakkoäänestyksessä.", en: "I went to advance voting." },
    },
  ],
  synonyymit: [
    { fi: "valita", en: "to elect, choose" },
    { fi: "antaa ääni", en: "to cast a vote" },
  ],
  esimerkit: {
    A2: { fi: "Äänestän huomenna.", en: "I'll vote tomorrow." },
    B1: { fi: "Ketä sinä äänestit?", en: "Who did you vote for?" },
    B2: {
      fi: "Eduskunta äänesti lakiesityksestä pitkän keskustelun jälkeen.",
      en: "Parliament voted on the bill after a long debate.",
    },
  },
  updatedAt: "2026-06-06",
};

export default aanestaa;
