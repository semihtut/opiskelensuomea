import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem valmistautu- ~ valmistaudu-.
// Present minä valmistaudun, hän valmistautuu; imperfect minä valmistauduin; NUT valmistautunut. Governs illative.
const valmistautua: Word = {
  fi: "valmistautua",
  slug: "valmistautua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to prepare (oneself), get ready",
  selitys:
    "Tehdä itsensä valmiiksi tulevaa varten: 'valmistautua kokeeseen'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu t:d (valmistaudun). Hallitsee illatiivia ('valmistautua johonkin') tai 3. infinitiivin illatiivia. Vrt. valmis, valmistella.",
  kuva: { emoji: "🎒", alt: "valmistautua – tehdä itsensä valmiiksi tulevaa varten" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu t:d (valmistautu- ~ valmistaudu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "valmistaudun", merkitys: "I prepare" },
      { sija: "imperfekti (minä)", muoto: "valmistauduin", merkitys: "I prepared" },
      { sija: "NUT-partisiippi", muoto: "valmistautunut", merkitys: "(have) prepared" },
    ],
    huom:
      "Astevaihtelu t:d: vahva valmistautu- (valmistautua, valmistautunut), heikko valmistaudu- (valmistaudun, valmistauduin). Hallitsee illatiivia: 'valmistautua kokeeseen, tekemään'. Vrt. valmis = ready.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "valmistaudun" },
          { label: "sinä", form: "valmistaudut" },
          { label: "hän", form: "valmistautuu" },
          { label: "me", form: "valmistaudumme" },
          { label: "te", form: "valmistaudutte" },
          { label: "he", form: "valmistautuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en valmistaudu" },
          { label: "hän", form: "ei valmistaudu" },
          { label: "he", form: "eivät valmistaudu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "valmistauduin" },
          { label: "sinä", form: "valmistauduit" },
          { label: "hän", form: "valmistautui" },
          { label: "me", form: "valmistauduimme" },
          { label: "te", form: "valmistauduitte" },
          { label: "he", form: "valmistautuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen valmistautunut" },
          { label: "hän", form: "on valmistautunut" },
          { label: "he", form: "ovat valmistautuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "valmistaudu!" },
          { label: "te", form: "valmistautukaa!" },
          { label: "kielto (sinä)", form: "älä valmistaudu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "valmis",
      en: "ready, finished",
      taso: "A2",
      esim: { fi: "Ruoka on valmista.", en: "The food is ready." },
    },
    {
      fi: "valmistelu",
      en: "preparation",
      taso: "B2",
      esim: { fi: "Valmistelut kestivät kauan.", en: "The preparations took a long time." },
    },
    {
      fi: "valmistella",
      en: "to prepare (something)",
      taso: "B1",
      esim: { fi: "Valmistelen esitystä.", en: "I'm preparing a presentation." },
    },
  ],
  synonyymit: [
    { fi: "varautua", en: "to prepare for, brace for" },
    { fi: "valmistua", en: "to get ready, graduate" },
  ],
  esimerkit: {
    A2: { fi: "Valmistaudun kokeeseen.", en: "I'm preparing for the exam." },
    B1: { fi: "Joukkue valmistautui otteluun huolellisesti.", en: "The team prepared carefully for the match." },
    B2: {
      fi: "Kannattaa valmistautua siihen, että suunnitelmat voivat muuttua.",
      en: "It's worth preparing for the possibility that plans may change.",
    },
  },
  updatedAt: "2026-06-07",
};

export default valmistautua;
