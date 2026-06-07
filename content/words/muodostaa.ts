import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem muodosta-.
// Present minä muodostan, hän muodostaa; imperfect minä muodostin; NUT muodostanut.
const muodostaa: Word = {
  fi: "muodostaa",
  slug: "muodostaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to form, make up, constitute",
  selitys:
    "Saada aikaan tai koota jokin kokonaisuus: 'osat muodostavat kokonaisuuden'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa/akkusatiivissa. Johdettu sanasta muoto. Vrt. muoto, muodostua.",
  kuva: { emoji: "🧱", alt: "muodostaa – koota jokin kokonaisuus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo muodosta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "muodostan", merkitys: "I form" },
      { sija: "imperfekti (minä)", muoto: "muodostin", merkitys: "I formed" },
      { sija: "NUT-partisiippi", muoto: "muodostanut", merkitys: "(have) formed" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (muodostan, muodostin, muodostanut). Johdettu sanasta muoto. Transitiivinen; intransitiivinen pari on muodostua. 'Muodostaa ryhmä' = to form a group.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "muodostan" },
          { label: "sinä", form: "muodostat" },
          { label: "hän", form: "muodostaa" },
          { label: "me", form: "muodostamme" },
          { label: "te", form: "muodostatte" },
          { label: "he", form: "muodostavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en muodosta" },
          { label: "hän", form: "ei muodosta" },
          { label: "he", form: "eivät muodosta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "muodostin" },
          { label: "sinä", form: "muodostit" },
          { label: "hän", form: "muodosti" },
          { label: "me", form: "muodostimme" },
          { label: "te", form: "muodostitte" },
          { label: "he", form: "muodostivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen muodostanut" },
          { label: "hän", form: "on muodostanut" },
          { label: "he", form: "ovat muodostaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "muodosta!" },
          { label: "te", form: "muodostakaa!" },
          { label: "kielto (sinä)", form: "älä muodosta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muodostua",
      en: "to be formed, consist of",
      taso: "B2",
      esim: { fi: "Ryhmä muodostui viidestä jäsenestä.", en: "The group consisted of five members." },
    },
    {
      fi: "muoto",
      en: "form, shape",
      taso: "A2",
      esim: { fi: "Pilvellä oli outo muoto.", en: "The cloud had a strange shape." },
    },
  ],
  synonyymit: [
    { fi: "luoda", en: "to create" },
    { fi: "koota", en: "to assemble" },
  ],
  esimerkit: {
    A2: { fi: "Lapset muodostivat jonon.", en: "The children formed a queue." },
    B1: { fi: "Nämä tekijät muodostavat kokonaisuuden.", en: "These factors form a whole." },
    B2: {
      fi: "Eri alojen asiantuntijat muodostivat työryhmän ongelman ratkaisemiseksi.",
      en: "Experts from different fields formed a working group to solve the problem.",
    },
  },
  updatedAt: "2026-06-07",
};

export default muodostaa;
