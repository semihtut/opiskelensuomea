import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem selittä-.
// Present selitän, past selitin, past participle selittänyt.
const selittaa: Word = {
  fi: "selittää",
  slug: "selittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to explain",
  selitys:
    "Tehdä jokin ymmärrettäväksi: 'selitän sinulle' (I'll explain to you). Astevaihtelu tt:t (selittää → selitän). Henkilö allatiivissa: 'selitä minulle'. Vrt. kertoa (tell).",
  kuva: { emoji: "🗣️", alt: "selittää – tehdä ymmärrettäväksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo selittä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "selitän", merkitys: "I explain" },
      { sija: "imperfekti (minä)", muoto: "selitin", merkitys: "I explained" },
      { sija: "NUT-partisiippi", muoto: "selittänyt", merkitys: "(have) explained" },
    ],
    huom:
      "Astevaihtelu tt:t: selitän, selität, selitti. Kuulija allatiivissa: 'selitin sen hänelle'. Vrt. selvä = clear, selitys = explanation, selvittää = to clarify/sort out.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "selitän" },
          { label: "sinä", form: "selität" },
          { label: "hän", form: "selittää" },
          { label: "me", form: "selitämme" },
          { label: "te", form: "selitätte" },
          { label: "he", form: "selittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en selitä" },
          { label: "hän", form: "ei selitä" },
          { label: "he", form: "eivät selitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "selitin" },
          { label: "sinä", form: "selitit" },
          { label: "hän", form: "selitti" },
          { label: "me", form: "selitimme" },
          { label: "te", form: "selititte" },
          { label: "he", form: "selittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen selittänyt" },
          { label: "hän", form: "on selittänyt" },
          { label: "he", form: "ovat selittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "selitä!" },
          { label: "te", form: "selittäkää!" },
          { label: "kielto (sinä)", form: "älä selitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selitys",
      en: "explanation",
      taso: "B1",
      esim: { fi: "Tarvitsen hyvän selityksen.", en: "I need a good explanation." },
    },
    {
      fi: "selvittää",
      en: "to clarify, find out, sort out",
      taso: "B1",
      esim: { fi: "Selvitän asian huomenna.", en: "I'll sort out the matter tomorrow." },
    },
    {
      fi: "selostus",
      en: "commentary, account",
      taso: "B2",
      esim: { fi: "Kuuntelin ottelun selostusta.", en: "I listened to the match commentary." },
    },
  ],
  synonyymit: [
    { fi: "selventää", en: "to clarify" },
    { fi: "kertoa", en: "to tell" },
  ],
  esimerkit: {
    A2: { fi: "Voitko selittää tämän uudestaan?", en: "Can you explain this again?" },
    B1: { fi: "Opettaja selitti säännöt selkeästi.", en: "The teacher explained the rules clearly." },
    B2: {
      fi: "Hän yritti selittää myöhästymistään, mutta kukaan ei uskonut.",
      en: "He tried to explain his lateness, but nobody believed him.",
    },
  },
  updatedAt: "2026-06-06",
};

export default selittaa;
