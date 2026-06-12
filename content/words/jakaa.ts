import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, k–∅ gradation, stem jaka-/jaa-.
// Present jaan, past jaoin, hän jakoi, past participle jakanut.
const jakaa: Word = {
  fi: "jakaa",
  slug: "jakaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to divide, share, distribute",
  selitys:
    "Antaa osiin tai useammalle: 'jaan kakun' / 'jaan tiedon'. Tyyppi 56, astevaihtelu k:∅ (jakaa → jaan), imperfekti -oi-: jaoin. Vrt. osa (part), jako (division).",
  kuva: { alt: "jakaa – antaa osiin tai useammalle" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa, malli kaivaa); astevaihtelu k:∅; vartalo jaka-",
    muodot: [
      { sija: "preesens (minä)", muoto: "jaan", merkitys: "I divide/share" },
      { sija: "imperfekti (minä)", muoto: "jaoin", merkitys: "I divided/shared" },
      { sija: "NUT-partisiippi", muoto: "jakanut", merkitys: "(have) shared" },
    ],
    huom:
      "Astevaihtelu k katoaa heikossa asteessa: jaan, jaat (k pois), mutta jakaa, jakavat (vahva). Imperfekti -oi-: jaoin, jaoit, jakoi. Vrt. jako = division, jakaja = distributor, osa = part.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "jaan" },
          { label: "sinä", form: "jaat" },
          { label: "hän", form: "jakaa" },
          { label: "me", form: "jaamme" },
          { label: "te", form: "jaatte" },
          { label: "he", form: "jakavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en jaa" },
          { label: "hän", form: "ei jaa" },
          { label: "he", form: "eivät jaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "jaoin" },
          { label: "sinä", form: "jaoit" },
          { label: "hän", form: "jakoi" },
          { label: "me", form: "jaoimme" },
          { label: "te", form: "jaoitte" },
          { label: "he", form: "jakoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen jakanut" },
          { label: "hän", form: "on jakanut" },
          { label: "he", form: "ovat jakaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "jaa!" },
          { label: "te", form: "jakakaa!" },
          { label: "kielto (sinä)", form: "älä jaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jako",
      en: "division, distribution",
      taso: "B1",
      esim: { fi: "Työn jako oli reilu.", en: "The division of work was fair." },
    },
    {
      fi: "jakautua",
      en: "to be divided, split",
      taso: "B2",
      esim: { fi: "Mielipiteet jakautuivat kahtia.", en: "Opinions were split in two." },
    },
    {
      fi: "osa",
      en: "part, portion",
      taso: "A2",
      esim: { fi: "Sain oman osani.", en: "I got my own share." },
    },
  ],
  synonyymit: [
    { fi: "jaella", en: "to distribute (repeatedly)" },
    { fi: "pilkkoa", en: "to chop, split up" },
  ],
  esimerkit: {
    A2: { fi: "Jaan omenan kahtia.", en: "I divide the apple in two." },
    B1: { fi: "Jaoimme kustannukset tasan.", en: "We split the costs evenly." },
    B2: {
      fi: "Opettaja jakoi luokan pieniin ryhmiin.",
      en: "The teacher divided the class into small groups.",
    },
  },
  updatedAt: "2026-06-06",
};

export default jakaa;
