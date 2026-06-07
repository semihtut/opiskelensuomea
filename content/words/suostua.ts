import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem suostu-.
// Present minä suostun, hän suostuu; imperfect minä suostuin; NUT suostunut. Governs illative.
const suostua: Word = {
  fi: "suostua",
  slug: "suostua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to agree, consent, comply",
  selitys:
    "Hyväksyä pyyntö tai ehdotus; suostua johonkin: 'suostua sopimukseen'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Hallitsee illatiivia: 'suostua johonkin'. Vastakohta kieltäytyä. Vrt. suostumus.",
  kuva: { emoji: "✅", alt: "suostua – hyväksyä pyyntö tai ehdotus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo suostu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "suostun", merkitys: "I agree" },
      { sija: "imperfekti (minä)", muoto: "suostuin", merkitys: "I agreed" },
      { sija: "NUT-partisiippi", muoto: "suostunut", merkitys: "(have) agreed" },
    ],
    huom:
      "Hallitsee illatiivia: 'suostua ehdotukseen, sopimukseen, pyyntöön'. Voi saada myös 3. infinitiivin illatiivin: 'suostua tekemään'. Ei astevaihtelua. Vastakohta kieltäytyä. Vrt. suostumus = consent.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "suostun" },
          { label: "sinä", form: "suostut" },
          { label: "hän", form: "suostuu" },
          { label: "me", form: "suostumme" },
          { label: "te", form: "suostutte" },
          { label: "he", form: "suostuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en suostu" },
          { label: "hän", form: "ei suostu" },
          { label: "he", form: "eivät suostu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "suostuin" },
          { label: "sinä", form: "suostuit" },
          { label: "hän", form: "suostui" },
          { label: "me", form: "suostuimme" },
          { label: "te", form: "suostuitte" },
          { label: "he", form: "suostuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen suostunut" },
          { label: "hän", form: "on suostunut" },
          { label: "he", form: "ovat suostuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "suostu!" },
          { label: "te", form: "suostukaa!" },
          { label: "kielto (sinä)", form: "älä suostu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suostumus",
      en: "consent, agreement",
      taso: "B1",
      esim: { fi: "Tarvitsemme vanhempien suostumuksen.", en: "We need the parents' consent." },
    },
    {
      fi: "suostuvainen",
      en: "agreeable, willing",
      taso: "B2",
      esim: { fi: "Hän oli suostuvainen yhteistyöhön.", en: "She was willing to cooperate." },
    },
  ],
  synonyymit: [
    { fi: "hyväksyä", en: "to accept, approve" },
    { fi: "myöntyä", en: "to give in, consent" },
  ],
  esimerkit: {
    A2: { fi: "Suostutko auttamaan?", en: "Will you agree to help?" },
    B1: { fi: "He suostuivat ehdotukseen heti.", en: "They agreed to the proposal right away." },
    B2: {
      fi: "Yritys ei suostunut maksamaan korvauksia ilman tuomioistuimen päätöstä.",
      en: "The company would not agree to pay compensation without a court ruling.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suostua;
