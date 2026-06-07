import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 75/selvitä, no gradation, stem selviä- ~ selvit-/selvis-.
// Present minä selviän, hän selviää; imperfect minä selvisin; NUT selvinnyt. Governs elative/adessive.
const selvita: Word = {
  fi: "selvitä",
  slug: "selvitä",
  pos: "verbi (tyyppi 5)",
  posClass: "verbi",
  level: "B1",
  en: "to manage, cope, get through; to become clear",
  selitys:
    "Pärjätä tai päästä vaikeasta tilanteesta läpi; myös: tulla selväksi tai ratketa: 'selvitä haasteista'. Tyyppi 5 (-itä), Kotus 75/selvitä, ei astevaihtelua. Asiasta elatiivi ('selvitä jostakin'). Vrt. selvittää (transitiivinen), selvä.",
  kuva: { emoji: "🏁", alt: "selvitä – pärjätä ja päästä vaikeasta läpi" },

  kielioppi: {
    tyyppi: "tyyppi 5 (-itä), Kotus 75/selvitä; ei astevaihtelua; vartalot selviä- ~ selvis-",
    muodot: [
      { sija: "preesens (minä)", muoto: "selviän", merkitys: "I manage" },
      { sija: "imperfekti (minä)", muoto: "selvisin", merkitys: "I managed" },
      { sija: "NUT-partisiippi", muoto: "selvinnyt", merkitys: "(have) managed" },
    ],
    huom:
      "Tyyppi 75: preesensissä vartalo selviä- (selviän, selviää), imperfektissä selvis- (selvisin), NUT-partisiippi selvinnyt. Asiasta elatiivi: 'selvitä onnettomuudesta'; 'selviän kyllä' = I'll cope. Vrt. transitiivinen selvittää.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "selviän" },
          { label: "sinä", form: "selviät" },
          { label: "hän", form: "selviää" },
          { label: "me", form: "selviämme" },
          { label: "te", form: "selviätte" },
          { label: "he", form: "selviävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en selviä" },
          { label: "hän", form: "ei selviä" },
          { label: "he", form: "eivät selviä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "selvisin" },
          { label: "sinä", form: "selvisit" },
          { label: "hän", form: "selvisi" },
          { label: "me", form: "selvisimme" },
          { label: "te", form: "selvisitte" },
          { label: "he", form: "selvisivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen selvinnyt" },
          { label: "hän", form: "on selvinnyt" },
          { label: "he", form: "ovat selvinneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "selviä!" },
          { label: "te", form: "selvitkää!" },
          { label: "kielto (sinä)", form: "älä selviä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selvittää",
      en: "to clear up, sort out, investigate",
      taso: "B1",
      esim: { fi: "Poliisi selvittää asiaa.", en: "The police are investigating the matter." },
    },
    {
      fi: "selviytyä",
      en: "to survive, cope",
      taso: "B2",
      esim: { fi: "He selviytyivät erämaassa viikon.", en: "They survived in the wilderness for a week." },
    },
    {
      fi: "selvä",
      en: "clear; sober",
      taso: "A2",
      esim: { fi: "Asia on nyt selvä.", en: "The matter is clear now." },
    },
  ],
  synonyymit: [
    { fi: "pärjätä", en: "to get by, manage" },
    { fi: "selviytyä", en: "to cope, survive" },
  ],
  esimerkit: {
    A2: { fi: "Selviän kyllä yksin.", en: "I'll manage on my own." },
    B1: { fi: "Hän selvisi vaikeasta tilanteesta hyvin.", en: "She got through the difficult situation well." },
    B2: {
      fi: "Vielä ei ole selvinnyt, kuka oli vastuussa virheestä.",
      en: "It hasn't yet become clear who was responsible for the mistake.",
    },
  },
  updatedAt: "2026-06-07",
};

export default selvita;
