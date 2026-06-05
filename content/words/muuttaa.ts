import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), tt:t gradation,
// stem muutta-. Present muutan, past muutin, past participle muuttanut.
const muuttaa: Word = {
  fi: "muuttaa",
  slug: "muuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to change; to move (relocate)",
  selitys:
    "Tehdä erilaiseksi; vaihtaa asuinpaikkaa. Tyyppi 1, astevaihtelu tt:t: muuttaa → muutan. 'Muuttaa jonnekin' = to move (to a place).",
  kuva: { emoji: "📦", alt: "muuttaa – muutto laatikoiden kanssa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttaa); astevaihtelu tt:t",
    muodot: [
      { sija: "preesens (minä)", muoto: "muutan", merkitys: "I change / move" },
      { sija: "imperfekti (minä)", muoto: "muutin", merkitys: "I changed / moved" },
      { sija: "kielto (minä)", muoto: "en muuta", merkitys: "I don't change" },
    ],
    huom:
      "Heikossa asteessa tt → t: muutan, muutin (mutta muuttaa, muuttavat). Kaksi merkitystä: muuttaa asioita (change) ja muuttaa uuteen kotiin (move). Vrt. vaihtaa, muuttua.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "muutan" },
          { label: "sinä", form: "muutat" },
          { label: "hän", form: "muuttaa" },
          { label: "me", form: "muutamme" },
          { label: "te", form: "muutatte" },
          { label: "he", form: "muuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en muuta" },
          { label: "hän", form: "ei muuta" },
          { label: "he", form: "eivät muuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "muutin" },
          { label: "sinä", form: "muutit" },
          { label: "hän", form: "muutti" },
          { label: "me", form: "muutimme" },
          { label: "te", form: "muutitte" },
          { label: "he", form: "muuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen muuttanut" },
          { label: "hän", form: "on muuttanut" },
          { label: "he", form: "ovat muuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "muuta!" },
          { label: "te", form: "muuttakaa!" },
          { label: "kielto (sinä)", form: "älä muuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muutto",
      en: "move, relocation",
      taso: "B1",
      esim: { fi: "Muutto kesti koko päivän.", en: "The move took the whole day." },
    },
    {
      fi: "muutos",
      en: "change",
      taso: "B1",
      esim: { fi: "Tarvitsen muutosta elämääni.", en: "I need a change in my life." },
    },
    {
      fi: "muuttua",
      en: "to change (intransitive)",
      taso: "A2",
      esim: { fi: "Sää muuttui nopeasti.", en: "The weather changed quickly." },
    },
  ],
  synonyymit: [
    { fi: "vaihtaa", en: "to swap, change" },
    { fi: "muuttua", en: "to change (become different)" },
  ],
  esimerkit: {
    A2: { fi: "Muutan uuteen asuntoon ensi kuussa.", en: "I'm moving to a new flat next month." },
    B1: { fi: "Muutin suunnitelmaa viime hetkellä.", en: "I changed the plan at the last moment." },
    B2: {
      fi: "Kun muutimme toiseen kaupunkiin, koko perheen arki muuttui täysin.",
      en: "When we moved to another city, the whole family's daily life changed completely.",
    },
  },
  updatedAt: "2026-06-05",
};

export default muuttaa;
