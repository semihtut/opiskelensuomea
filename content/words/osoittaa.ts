import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem osoitta- ~ osoita-.
// Present minä osoitan, hän osoittaa; imperfect minä osoitin; NUT osoittanut.
const osoittaa: Word = {
  fi: "osoittaa",
  slug: "osoittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to show, demonstrate, point; to address",
  selitys:
    "1) Näyttää tai todistaa jokin todeksi: 'tutkimus osoittaa'. 2) Suunnata, osoittaa sormella. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (osoitan). Johdettu sanasta osa/osoite. Vrt. osoite, osoitus, näyttää.",
  kuva: { alt: "osoittaa – näyttää tai todistaa jokin todeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (osoita- ~ osoitta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "osoitan", merkitys: "I show" },
      { sija: "imperfekti (minä)", muoto: "osoitin", merkitys: "I showed" },
      { sija: "NUT-partisiippi", muoto: "osoittanut", merkitys: "(have) shown" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva osoitta- (osoittaa, osoittanut), heikko osoita- (osoitan, osoitin). 'Osoittaa, että…' = to demonstrate that…; 'osoittaa jollekin' = to address to. Vrt. osoite = address, osoitus = sign.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "osoitan" },
          { label: "sinä", form: "osoitat" },
          { label: "hän", form: "osoittaa" },
          { label: "me", form: "osoitamme" },
          { label: "te", form: "osoitatte" },
          { label: "he", form: "osoittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en osoita" },
          { label: "hän", form: "ei osoita" },
          { label: "he", form: "eivät osoita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "osoitin" },
          { label: "sinä", form: "osoitit" },
          { label: "hän", form: "osoitti" },
          { label: "me", form: "osoitimme" },
          { label: "te", form: "osoititte" },
          { label: "he", form: "osoittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen osoittanut" },
          { label: "hän", form: "on osoittanut" },
          { label: "he", form: "ovat osoittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "osoita!" },
          { label: "te", form: "osoittakaa!" },
          { label: "kielto (sinä)", form: "älä osoita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "osoite",
      en: "address",
      taso: "A2",
      esim: { fi: "Mikä on osoitteesi?", en: "What is your address?" },
    },
    {
      fi: "osoitus",
      en: "sign, indication, gesture",
      taso: "B2",
      esim: { fi: "Se oli osoitus luottamuksesta.", en: "It was a sign of trust." },
    },
  ],
  synonyymit: [
    { fi: "näyttää", en: "to show" },
    { fi: "todistaa", en: "to prove" },
  ],
  esimerkit: {
    A2: { fi: "Osoita kartalta, missä olemme.", en: "Point on the map where we are." },
    B1: { fi: "Tulokset osoittavat selvän muutoksen.", en: "The results show a clear change." },
    B2: {
      fi: "Tutkimus osoitti, että pienikin muutos vaikuttaa lopputulokseen.",
      en: "The study demonstrated that even a small change affects the outcome.",
    },
  },
  updatedAt: "2026-06-07",
};

export default osoittaa;
