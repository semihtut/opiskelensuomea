import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem saavutta- ~ saavuta-.
// Present minä saavutan, hän saavuttaa; imperfect minä saavutin; NUT saavuttanut.
const saavuttaa: Word = {
  fi: "saavuttaa",
  slug: "saavuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to reach, achieve, attain",
  selitys:
    "Päästä tavoitteeseen tai määränpäähän; myös: saada jokin kiinni: 'saavuttaa tavoite'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (saavutan). Objekti partitiivissa tai akkusatiivissa. Vrt. saavutus, tavoite.",
  kuva: { alt: "saavuttaa – päästä tavoitteeseen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (saavuta- ~ saavutta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "saavutan", merkitys: "I achieve" },
      { sija: "imperfekti (minä)", muoto: "saavutin", merkitys: "I achieved" },
      { sija: "NUT-partisiippi", muoto: "saavuttanut", merkitys: "(have) achieved" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva saavutta- (saavuttaa, saavuttanut), heikko saavuta- (saavutan, saavutin). 'Saavuttaa tavoite/maine'. Vrt. saavutus = achievement, saapua = to arrive.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "saavutan" },
          { label: "sinä", form: "saavutat" },
          { label: "hän", form: "saavuttaa" },
          { label: "me", form: "saavutamme" },
          { label: "te", form: "saavutatte" },
          { label: "he", form: "saavuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en saavuta" },
          { label: "hän", form: "ei saavuta" },
          { label: "he", form: "eivät saavuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "saavutin" },
          { label: "sinä", form: "saavutit" },
          { label: "hän", form: "saavutti" },
          { label: "me", form: "saavutimme" },
          { label: "te", form: "saavutitte" },
          { label: "he", form: "saavuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen saavuttanut" },
          { label: "hän", form: "on saavuttanut" },
          { label: "he", form: "ovat saavuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "saavuta!" },
          { label: "te", form: "saavuttakaa!" },
          { label: "kielto (sinä)", form: "älä saavuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "saavutus",
      en: "achievement, accomplishment",
      taso: "B1",
      esim: { fi: "Se oli upea saavutus.", en: "It was a magnificent achievement." },
    },
    {
      fi: "saavutettavissa",
      en: "achievable, within reach",
      taso: "B2",
      esim: { fi: "Tavoite on saavutettavissa.", en: "The goal is achievable." },
    },
  ],
  synonyymit: [
    { fi: "päästä tavoitteeseen", en: "to reach the goal" },
    { fi: "tavoittaa", en: "to reach, attain" },
  ],
  esimerkit: {
    A2: { fi: "Saavutin tavoitteeni.", en: "I reached my goal." },
    B1: { fi: "Hän saavutti hyvän tuloksen kokeessa.", en: "She achieved a good result in the exam." },
    B2: {
      fi: "Kunnianhimoiset tavoitteet saavutetaan harvoin ilman takaiskuja.",
      en: "Ambitious goals are rarely achieved without setbacks.",
    },
  },
  updatedAt: "2026-06-07",
};

export default saavuttaa;
