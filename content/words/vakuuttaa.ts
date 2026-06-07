import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem vakuutta- ~ vakuuta-.
// Present minä vakuutan, hän vakuuttaa; imperfect minä vakuutin; NUT vakuuttanut.
const vakuuttaa: Word = {
  fi: "vakuuttaa",
  slug: "vakuuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to convince, assure; to insure",
  selitys:
    "Saada toinen uskomaan tai vakuuttuneeksi; myös: ottaa vakuutus: 'vakuuttaa auto'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (vakuutan). Vrt. vakuutus, vakuuttava, vakuuttua.",
  kuva: { emoji: "🤝", alt: "vakuuttaa – saada toinen uskomaan tai vakuuttuneeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (vakuuta- ~ vakuutta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vakuutan", merkitys: "I convince" },
      { sija: "imperfekti (minä)", muoto: "vakuutin", merkitys: "I convinced" },
      { sija: "NUT-partisiippi", muoto: "vakuuttanut", merkitys: "(have) convinced" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva vakuutta- (vakuuttaa, vakuuttanut), heikko vakuuta- (vakuutan, vakuutin). Kaksi merkitystä: 1) saada uskomaan; 2) ottaa vakuutus. Vrt. vakuutus = insurance/assurance, vakuuttava = convincing.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vakuutan" },
          { label: "sinä", form: "vakuutat" },
          { label: "hän", form: "vakuuttaa" },
          { label: "me", form: "vakuutamme" },
          { label: "te", form: "vakuutatte" },
          { label: "he", form: "vakuuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vakuuta" },
          { label: "hän", form: "ei vakuuta" },
          { label: "he", form: "eivät vakuuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vakuutin" },
          { label: "sinä", form: "vakuutit" },
          { label: "hän", form: "vakuutti" },
          { label: "me", form: "vakuutimme" },
          { label: "te", form: "vakuutitte" },
          { label: "he", form: "vakuuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vakuuttanut" },
          { label: "hän", form: "on vakuuttanut" },
          { label: "he", form: "ovat vakuuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vakuuta!" },
          { label: "te", form: "vakuuttakaa!" },
          { label: "kielto (sinä)", form: "älä vakuuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vakuutus",
      en: "insurance; assurance",
      taso: "B1",
      esim: { fi: "Otin matkavakuutuksen.", en: "I took out travel insurance." },
    },
    {
      fi: "vakuuttava",
      en: "convincing, persuasive",
      taso: "B2",
      esim: { fi: "Esitys oli vakuuttava.", en: "The presentation was convincing." },
    },
    {
      fi: "vakuuttua",
      en: "to become convinced",
      taso: "B2",
      esim: { fi: "Vakuutuin hänen rehellisyydestään.", en: "I became convinced of his honesty." },
    },
  ],
  synonyymit: [
    { fi: "saada uskomaan", en: "to make believe" },
    { fi: "todistaa", en: "to prove" },
  ],
  esimerkit: {
    A2: { fi: "Hän vakuutti, että kaikki on hyvin.", en: "She assured that everything is fine." },
    B1: { fi: "Yritin vakuuttaa heidät suunnitelman hyödyistä.", en: "I tried to convince them of the plan's benefits." },
    B2: {
      fi: "Vakuuttavat perustelut saivat epäilijätkin muuttamaan mielensä.",
      en: "The convincing arguments made even the doubters change their minds.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vakuuttaa;
