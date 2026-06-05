import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation,
// stem avaa-. Present avaan, past avasin, past participle avannut.
const avata: Word = {
  fi: "avata",
  slug: "avata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A1",
  en: "to open",
  selitys:
    "Saada jokin auki; aloittaa toiminta. Tyyppi 4 (-ata): avata → avaan. Vastakohta sulkea. Vrt. adjektiivi auki / avoin.",
  kuva: { emoji: "🔓", alt: "avata – ovi tai lukko avataan" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo avaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "avaan", merkitys: "I open" },
      { sija: "imperfekti (minä)", muoto: "avasin", merkitys: "I opened" },
      { sija: "NUT-partisiippi", muoto: "avannut", merkitys: "(have) opened" },
    ],
    huom:
      "Tyyppi 4: preesensissä pitkä vokaali (avaan), imperfektissä -si- (avasin), NUT-partisiipissa -nnut (avannut). Avata ovi; kauppa avataan kello yhdeksän.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "avaan" },
          { label: "sinä", form: "avaat" },
          { label: "hän", form: "avaa" },
          { label: "me", form: "avaamme" },
          { label: "te", form: "avaatte" },
          { label: "he", form: "avaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en avaa" },
          { label: "hän", form: "ei avaa" },
          { label: "he", form: "eivät avaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "avasin" },
          { label: "sinä", form: "avasit" },
          { label: "hän", form: "avasi" },
          { label: "me", form: "avasimme" },
          { label: "te", form: "avasitte" },
          { label: "he", form: "avasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen avannut" },
          { label: "hän", form: "on avannut" },
          { label: "he", form: "ovat avanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "avaa!" },
          { label: "te", form: "avatkaa!" },
          { label: "kielto (sinä)", form: "älä avaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "avoin",
      en: "open (adjective)",
      taso: "B1",
      esim: { fi: "Ovi oli avoin.", en: "The door was open." },
    },
    {
      fi: "avaus",
      en: "opening (event, move)",
      taso: "B2",
      esim: { fi: "Näyttelyn avaus oli lauantaina.", en: "The exhibition's opening was on Saturday." },
    },
    {
      fi: "avain",
      en: "key",
      taso: "A1",
      esim: { fi: "Missä on oven avain?", en: "Where is the door key?" },
    },
  ],
  synonyymit: [
    { fi: "aukaista", en: "to open (colloquial variant)" },
    { fi: "avautua", en: "to open (intransitive)" },
  ],
  esimerkit: {
    A2: { fi: "Avaan ikkunan, koska on kuuma.", en: "I'll open the window because it's hot." },
    B1: { fi: "Kauppa avattiin uudelleen remontin jälkeen.", en: "The shop was reopened after the renovation." },
    B2: {
      fi: "Avasin kirjekuoren varovasti, koska en tiennyt mitä sisältä löytyisi.",
      en: "I opened the envelope carefully, because I didn't know what I'd find inside.",
    },
  },
  updatedAt: "2026-06-05",
};

export default avata;
