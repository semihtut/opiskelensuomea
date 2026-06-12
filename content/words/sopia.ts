import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, p:v gradation, stem sopi- ~ sovi-.
// Present minä sovin, hän sopii; imperfect minä sovin, hän sopi; NUT participle sopinut.
const sopia: Word = {
  fi: "sopia",
  slug: "sopia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to agree (on); to suit, fit",
  selitys:
    "Päästä yhteisymmärrykseen tai olla sopiva johonkin: 'sopia tapaaminen' / 'takki sopii sinulle'. Tyyppi 1 (-ia), astevaihtelu p:v (sovin ~ sopii). Vrt. sopiva (suitable), sopimus (agreement).",
  kuva: { alt: "sopia – päästä yhteisymmärrykseen tai olla sopiva" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia); astevaihtelu p:v (sovin ↔ sopii); vartalo sopi- ~ sovi-",
    muodot: [
      { sija: "preesens (minä)", muoto: "sovin", merkitys: "I agree / it suits" },
      { sija: "imperfekti (minä)", muoto: "sovin", merkitys: "I agreed" },
      { sija: "NUT-partisiippi", muoto: "sopinut", merkitys: "(have) agreed" },
    ],
    huom:
      "HUOM: minä-muoto on sama preesensissä ja imperfektissä (sovin); vain hän erottaa ne (sopii ↔ sopi). Heikko aste v esiintyy minä/sinä/me/te-muodoissa. 'Sopia jostakin' = to agree on; 'sopia jollekulle' = to suit someone.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "sovin" },
          { label: "sinä", form: "sovit" },
          { label: "hän", form: "sopii" },
          { label: "me", form: "sovimme" },
          { label: "te", form: "sovitte" },
          { label: "he", form: "sopivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en sovi" },
          { label: "hän", form: "ei sovi" },
          { label: "he", form: "eivät sovi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "sovin" },
          { label: "sinä", form: "sovit" },
          { label: "hän", form: "sopi" },
          { label: "me", form: "sovimme" },
          { label: "te", form: "sovitte" },
          { label: "he", form: "sopivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen sopinut" },
          { label: "hän", form: "on sopinut" },
          { label: "he", form: "ovat sopineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "sovi!" },
          { label: "te", form: "sopikaa!" },
          { label: "kielto (sinä)", form: "älä sovi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sopiva",
      en: "suitable, fitting",
      taso: "A2",
      esim: { fi: "Tämä aika on minulle sopiva.", en: "This time is suitable for me." },
    },
    {
      fi: "sopimus",
      en: "agreement, contract",
      taso: "B1",
      esim: { fi: "Allekirjoitimme sopimuksen.", en: "We signed the contract." },
    },
    {
      fi: "sovittaa",
      en: "to try on; to reconcile, fit",
      taso: "B2",
      esim: { fi: "Sovitin takkia kaupassa.", en: "I tried on the coat in the shop." },
    },
  ],
  synonyymit: [
    { fi: "sopiva olla", en: "to be suitable" },
    { fi: "päättää yhdessä", en: "to decide together" },
  ],
  esimerkit: {
    A2: { fi: "Tämä takki sopii sinulle hyvin.", en: "This coat suits you well." },
    B1: { fi: "Sovimme tapaamisen ensi viikolle.", en: "We agreed on a meeting for next week." },
    B2: {
      fi: "Osapuolet sopivat lopulta hinnasta pitkien neuvottelujen jälkeen.",
      en: "The parties finally agreed on the price after long negotiations.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sopia;
