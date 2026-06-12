import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem vaikutta- ~ vaikuta-.
// Present vaikutan, past vaikutin, past participle vaikuttanut.
const vaikuttaa: Word = {
  fi: "vaikuttaa",
  slug: "vaikuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to influence, to affect; to seem",
  selitys:
    "Saada aikaan muutos tai antaa vaikutelma: 'vaikuttaa päätökseen' / 'vaikuttaa väsyneeltä'. Tyyppi 1 (-aa), astevaihtelu tt:t (vaikutan, mutta vaikuttaa). Vrt. vaikutus (effect), vaikutelma (impression).",
  kuva: { alt: "vaikuttaa – saada aikaan muutos tai antaa vaikutelma" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (vaikutta- ↔ vaikuta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vaikutan", merkitys: "I influence" },
      { sija: "imperfekti (minä)", muoto: "vaikutin", merkitys: "I influenced" },
      { sija: "NUT-partisiippi", muoto: "vaikuttanut", merkitys: "(have) influenced" },
    ],
    huom:
      "Persoonamuodoissa heikko t (vaikutan), infinitiivissä vahva tt (vaikuttaa). Kohteeseen illatiivi: 'vaikuttaa asiaan'. Vaikutelmasta ablatiivi: 'vaikuttaa iloiselta' = to seem happy.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vaikutan" },
          { label: "sinä", form: "vaikutat" },
          { label: "hän", form: "vaikuttaa" },
          { label: "me", form: "vaikutamme" },
          { label: "te", form: "vaikutatte" },
          { label: "he", form: "vaikuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vaikuta" },
          { label: "hän", form: "ei vaikuta" },
          { label: "he", form: "eivät vaikuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vaikutin" },
          { label: "sinä", form: "vaikutit" },
          { label: "hän", form: "vaikutti" },
          { label: "me", form: "vaikutimme" },
          { label: "te", form: "vaikutitte" },
          { label: "he", form: "vaikuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vaikuttanut" },
          { label: "hän", form: "on vaikuttanut" },
          { label: "he", form: "ovat vaikuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vaikuta!" },
          { label: "te", form: "vaikuttakaa!" },
          { label: "kielto (sinä)", form: "älä vaikuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaikutus",
      en: "effect, influence",
      taso: "B1",
      esim: { fi: "Kahvilla on piristävä vaikutus.", en: "Coffee has a stimulating effect." },
    },
    {
      fi: "vaikutelma",
      en: "impression",
      taso: "B2",
      esim: { fi: "Sain hänestä hyvän vaikutelman.", en: "I got a good impression of him." },
    },
    {
      fi: "vaikutusvalta",
      en: "influence, clout",
      taso: "B2",
      esim: { fi: "Hänellä on suuri vaikutusvalta.", en: "He has great influence." },
    },
  ],
  synonyymit: [
    { fi: "tehota", en: "to take effect, work" },
    { fi: "näyttää", en: "to seem, appear" },
  ],
  esimerkit: {
    A2: { fi: "Sää vaikuttaa mielialaan.", en: "The weather affects one's mood." },
    B1: { fi: "Hän vaikuttaa mukavalta ihmiseltä.", en: "She seems like a nice person." },
    B2: {
      fi: "Päätös vaikuttaa tuhansien ihmisten arkeen vuosien ajan.",
      en: "The decision will affect the daily lives of thousands of people for years.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vaikuttaa;
