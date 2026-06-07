import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem toteutta- ~ toteuta-.
// Present minä toteutan, hän toteuttaa; imperfect minä toteutin; NUT toteuttanut.
const toteuttaa: Word = {
  fi: "toteuttaa",
  slug: "toteuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to carry out, implement, realize",
  selitys:
    "Tehdä suunnitelma tai idea todeksi: 'toteuttaa unelma'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (toteutan). Objekti partitiivissa/akkusatiivissa. Johdettu sanasta tosi/toteen. Vrt. toteutus, toteutua.",
  kuva: { emoji: "🛠️", alt: "toteuttaa – tehdä suunnitelma todeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (toteuta- ~ toteutta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "toteutan", merkitys: "I carry out" },
      { sija: "imperfekti (minä)", muoto: "toteutin", merkitys: "I carried out" },
      { sija: "NUT-partisiippi", muoto: "toteuttanut", merkitys: "(have) carried out" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva toteutta- (toteuttaa, toteuttanut), heikko toteuta- (toteutan, toteutin). 'Toteuttaa suunnitelma/idea'. Vrt. toteutus = implementation, toteutua = to come true.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "toteutan" },
          { label: "sinä", form: "toteutat" },
          { label: "hän", form: "toteuttaa" },
          { label: "me", form: "toteutamme" },
          { label: "te", form: "toteutatte" },
          { label: "he", form: "toteuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en toteuta" },
          { label: "hän", form: "ei toteuta" },
          { label: "he", form: "eivät toteuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "toteutin" },
          { label: "sinä", form: "toteutit" },
          { label: "hän", form: "toteutti" },
          { label: "me", form: "toteutimme" },
          { label: "te", form: "toteutitte" },
          { label: "he", form: "toteuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen toteuttanut" },
          { label: "hän", form: "on toteuttanut" },
          { label: "he", form: "ovat toteuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "toteuta!" },
          { label: "te", form: "toteuttakaa!" },
          { label: "kielto (sinä)", form: "älä toteuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "toteutus",
      en: "implementation, execution",
      taso: "B2",
      esim: { fi: "Idea oli hyvä, mutta toteutus heikko.", en: "The idea was good, but the execution weak." },
    },
    {
      fi: "toteutua",
      en: "to come true, materialize",
      taso: "B1",
      esim: { fi: "Toiveeni toteutui.", en: "My wish came true." },
    },
    {
      fi: "toteuttamiskelpoinen",
      en: "feasible, realizable",
      taso: "B2",
      esim: { fi: "Suunnitelma on toteuttamiskelpoinen.", en: "The plan is feasible." },
    },
  ],
  synonyymit: [
    { fi: "panna täytäntöön", en: "to put into effect" },
    { fi: "tehdä todeksi", en: "to make real" },
  ],
  esimerkit: {
    A2: { fi: "Toteutimme suunnitelman.", en: "We carried out the plan." },
    B1: { fi: "Hän toteutti unelmansa matkasta.", en: "She realized her dream of a trip." },
    B2: {
      fi: "Uudistus toteutetaan vaiheittain seuraavien kahden vuoden aikana.",
      en: "The reform will be implemented in stages over the next two years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default toteuttaa;
