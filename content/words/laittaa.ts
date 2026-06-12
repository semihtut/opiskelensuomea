import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), tt:t gradation,
// stem laitta-. Present laitan, past laitoin, past participle laittanut.
const laittaa: Word = {
  fi: "laittaa",
  slug: "laittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to put, make, prepare",
  selitys:
    "Asettaa jonnekin; valmistaa (ruokaa); panna kuntoon. Tyyppi 1, astevaihtelu tt:t: laittaa → laitan. Yleisverbi: laittaa ruokaa = to cook.",
  kuva: { alt: "laittaa – laitetaan ruokaa tai asetetaan paikalleen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttaa); astevaihtelu tt:t",
    muodot: [
      { sija: "preesens (minä)", muoto: "laitan", merkitys: "I put / make" },
      { sija: "imperfekti (minä)", muoto: "laitoin", merkitys: "I put / made" },
      { sija: "kielto (minä)", muoto: "en laita", merkitys: "I don't put" },
    ],
    huom:
      "Heikossa asteessa tt → t: laitan, laitoin (mutta laittaa, laittavat). 'Laittaa ruokaa' = to cook; 'laittaa päälle' = to put on (clothes). Vrt. panna, asettaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "laitan" },
          { label: "sinä", form: "laitat" },
          { label: "hän", form: "laittaa" },
          { label: "me", form: "laitamme" },
          { label: "te", form: "laitatte" },
          { label: "he", form: "laittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en laita" },
          { label: "hän", form: "ei laita" },
          { label: "he", form: "eivät laita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "laitoin" },
          { label: "sinä", form: "laitoit" },
          { label: "hän", form: "laittoi" },
          { label: "me", form: "laitoimme" },
          { label: "te", form: "laitoitte" },
          { label: "he", form: "laittoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen laittanut" },
          { label: "hän", form: "on laittanut" },
          { label: "he", form: "ovat laittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "laita!" },
          { label: "te", form: "laittakaa!" },
          { label: "kielto (sinä)", form: "älä laita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laite",
      en: "device, appliance",
      taso: "B1",
      esim: { fi: "Keittiössä on monta laitetta.", en: "There are many appliances in the kitchen." },
    },
    {
      fi: "laitos",
      en: "institution, facility",
      taso: "B2",
      esim: { fi: "Hän työskentelee tutkimuslaitoksessa.", en: "She works at a research institution." },
    },
    {
      fi: "asetus",
      en: "setting, regulation",
      taso: "B2",
      esim: { fi: "Muutin puhelimen asetuksia.", en: "I changed the phone's settings." },
    },
  ],
  synonyymit: [
    { fi: "panna", en: "to put" },
    { fi: "asettaa", en: "to place, set" },
  ],
  esimerkit: {
    A2: { fi: "Laitan avaimet taskuun.", en: "I put the keys in my pocket." },
    B1: { fi: "Laitoin ruokaa koko perheelle.", en: "I cooked food for the whole family." },
    B2: {
      fi: "Hän laittoi takin päälle ja sulki oven huolellisesti lähtiessään.",
      en: "She put on her coat and carefully closed the door as she left.",
    },
  },
  updatedAt: "2026-06-05",
};

export default laittaa;
