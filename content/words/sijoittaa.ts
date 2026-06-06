import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem sijoitta- ~ sijoita-.
// Present minä sijoitan, hän sijoittaa; imperfect minä sijoitin, hän sijoitti; NUT sijoittanut.
const sijoittaa: Word = {
  fi: "sijoittaa",
  slug: "sijoittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to invest; to place, position",
  selitys:
    "Laittaa raha tuottamaan tai asettaa jokin paikalleen: 'sijoittaa osakkeisiin' / 'sijoittaa esine hyllylle'. Tyyppi 1 (-aa), astevaihtelu tt:t (sijoitan ~ sijoittaa). Vrt. sijoitus (investment), sijainti (location).",
  kuva: { emoji: "📈", alt: "sijoittaa – laittaa raha tuottamaan tai asettaa paikalleen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (sijoitan ↔ sijoittaa); vartalo sijoitta- ~ sijoita-",
    muodot: [
      { sija: "preesens (minä)", muoto: "sijoitan", merkitys: "I invest" },
      { sija: "imperfekti (minä)", muoto: "sijoitin", merkitys: "I invested" },
      { sija: "NUT-partisiippi", muoto: "sijoittanut", merkitys: "(have) invested" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (sijoitan, sijoitin), vahva aste tt hän/he- ja perusmuodossa (sijoittaa, sijoitti). 'Sijoittaa johonkin' = to invest in (illatiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "sijoitan" },
          { label: "sinä", form: "sijoitat" },
          { label: "hän", form: "sijoittaa" },
          { label: "me", form: "sijoitamme" },
          { label: "te", form: "sijoitatte" },
          { label: "he", form: "sijoittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en sijoita" },
          { label: "hän", form: "ei sijoita" },
          { label: "he", form: "eivät sijoita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "sijoitin" },
          { label: "sinä", form: "sijoitit" },
          { label: "hän", form: "sijoitti" },
          { label: "me", form: "sijoitimme" },
          { label: "te", form: "sijoititte" },
          { label: "he", form: "sijoittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen sijoittanut" },
          { label: "hän", form: "on sijoittanut" },
          { label: "he", form: "ovat sijoittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "sijoita!" },
          { label: "te", form: "sijoittakaa!" },
          { label: "kielto (sinä)", form: "älä sijoita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sijoitus",
      en: "investment",
      taso: "B1",
      esim: { fi: "Se oli hyvä sijoitus.", en: "It was a good investment." },
    },
    {
      fi: "sijoittaja",
      en: "investor",
      taso: "B2",
      esim: { fi: "Sijoittajat seuraavat markkinoita.", en: "Investors follow the markets." },
    },
    {
      fi: "sijainti",
      en: "location, position",
      taso: "B1",
      esim: { fi: "Asunnon sijainti on erinomainen.", en: "The apartment's location is excellent." },
    },
  ],
  synonyymit: [
    { fi: "panna rahaa", en: "to put money (into)" },
    { fi: "asettaa", en: "to place, set" },
  ],
  esimerkit: {
    A2: { fi: "Hän sijoittaa rahaa rahastoon.", en: "He invests money in a fund." },
    B1: { fi: "Sijoitin osan säästöistäni osakkeisiin.", en: "I invested part of my savings in shares." },
    B2: {
      fi: "Ennen kuin sijoitat, kannattaa selvittää riskit huolellisesti.",
      en: "Before you invest, it's worth finding out the risks carefully.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sijoittaa;
