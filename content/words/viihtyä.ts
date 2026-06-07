import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem viihty- ~ viihdy-.
// Present minä viihdyn, hän viihtyy; imperfect minä viihdyin; NUT viihtynyt.
const viihtya: Word = {
  fi: "viihtyä",
  slug: "viihtyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to enjoy being (somewhere), feel comfortable, thrive",
  selitys:
    "Tuntea olonsa hyväksi jossakin paikassa: 'viihtyä työssä', 'viihdyn täällä'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu t:d (viihdyn). Rektio: inessiivi/adessiivi (paikka). Vrt. nauttia, viihde, viihtyisä.",
  kuva: { emoji: "😌", alt: "viihtyä – tuntea olonsa hyväksi jossakin paikassa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu t:d (viihty- ~ viihdy-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "viihdyn", merkitys: "I feel comfortable" },
      { sija: "imperfekti (minä)", muoto: "viihdyin", merkitys: "I felt comfortable" },
      { sija: "NUT-partisiippi", muoto: "viihtynyt", merkitys: "(have) felt comfortable" },
    ],
    huom:
      "Astevaihtelu t:d: vahva viihty- (viihtyä, viihtyy, viihtynyt), heikko viihdy- (viihdyn, viihdyin). Rektio: paikka inessiivissä tai adessiivilla (viihtyä koulussa / maalla). Vrt. viihde = entertainment, viihtyisä = cosy.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "viihdyn" },
          { label: "sinä", form: "viihdyt" },
          { label: "hän", form: "viihtyy" },
          { label: "me", form: "viihdymme" },
          { label: "te", form: "viihdytte" },
          { label: "he", form: "viihtyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en viihdy" },
          { label: "hän", form: "ei viihdy" },
          { label: "he", form: "eivät viihdy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "viihdyin" },
          { label: "sinä", form: "viihdyit" },
          { label: "hän", form: "viihtyi" },
          { label: "me", form: "viihdyimme" },
          { label: "te", form: "viihdyitte" },
          { label: "he", form: "viihtyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen viihtynyt" },
          { label: "hän", form: "on viihtynyt" },
          { label: "he", form: "ovat viihtyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "viihdy!" },
          { label: "te", form: "viihtykää!" },
          { label: "kielto (sinä)", form: "älä viihdy" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viihde",
      en: "entertainment",
      taso: "B1",
      esim: { fi: "Pidän kevyestä viihteestä.", en: "I like light entertainment." },
    },
    {
      fi: "viihtyisä",
      en: "cosy, pleasant",
      taso: "B2",
      esim: { fi: "Koti on viihtyisä.", en: "The home is cosy." },
    },
  ],
  synonyymit: [
    { fi: "nauttia", en: "to enjoy" },
  ],
  esimerkit: {
    A2: { fi: "Viihdyn hyvin täällä.", en: "I feel comfortable here." },
    B1: { fi: "Viihdyitkö uudessa työssä?", en: "Did you enjoy the new job?" },
    B2: {
      fi: "Kun viihtyy työpaikallaan, jaksaa paremmin myös vaikeina päivinä.",
      en: "When you feel comfortable at your workplace, you cope better even on hard days.",
    },
  },
  updatedAt: "2026-06-07",
};

export default viihtya;
