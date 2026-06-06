import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, rt–rr gradation, stem siirtä-.
// Present siirrän, IRREGULAR past siirsin (t→s before i), past participle siirtänyt.
const siirtaa: Word = {
  fi: "siirtää",
  slug: "siirtää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to move, transfer; to postpone",
  selitys:
    "Vaihtaa jonkin paikkaa tai ajankohtaa: 'siirrän auton' / 'siirrämme kokouksen huomiseen'. Astevaihtelu rt:rr (siirtää → siirrän), imperfekti poikkeava: siirsin.",
  kuva: { emoji: "↔️", alt: "siirtää – vaihtaa paikkaa tai aikaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää); astevaihtelu rt:rr; vartalo siirtä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "siirrän", merkitys: "I move" },
      { sija: "imperfekti (minä)", muoto: "siirsin", merkitys: "I moved" },
      { sija: "NUT-partisiippi", muoto: "siirtänyt", merkitys: "(have) moved" },
    ],
    huom:
      "Astevaihtelu rt:rr preesensissä: siirrän, siirrät, siirtää. Imperfektissä t→s: siirsin, siirsit, siirsi. Vrt. siirtyä = to move (intransitiivinen), siirto = transfer/move.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "siirrän" },
          { label: "sinä", form: "siirrät" },
          { label: "hän", form: "siirtää" },
          { label: "me", form: "siirrämme" },
          { label: "te", form: "siirrätte" },
          { label: "he", form: "siirtävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en siirrä" },
          { label: "hän", form: "ei siirrä" },
          { label: "he", form: "eivät siirrä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "siirsin" },
          { label: "sinä", form: "siirsit" },
          { label: "hän", form: "siirsi" },
          { label: "me", form: "siirsimme" },
          { label: "te", form: "siirsitte" },
          { label: "he", form: "siirsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen siirtänyt" },
          { label: "hän", form: "on siirtänyt" },
          { label: "he", form: "ovat siirtäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "siirrä!" },
          { label: "te", form: "siirtäkää!" },
          { label: "kielto (sinä)", form: "älä siirrä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "siirto",
      en: "transfer, move",
      taso: "B1",
      esim: { fi: "Tein tilisiirron eilen.", en: "I made a bank transfer yesterday." },
    },
    {
      fi: "siirtyä",
      en: "to move (oneself), shift",
      taso: "B1",
      esim: { fi: "Siirryimme toiseen huoneeseen.", en: "We moved to another room." },
    },
    {
      fi: "siirtolainen",
      en: "migrant, immigrant",
      taso: "B2",
      esim: { fi: "Suku muutti siirtolaisina Amerikkaan.", en: "The family emigrated to America." },
    },
  ],
  synonyymit: [
    { fi: "liikuttaa", en: "to move (something)" },
    { fi: "lykätä", en: "to postpone" },
  ],
  esimerkit: {
    A2: { fi: "Siirrän tuolin ikkunan viereen.", en: "I move the chair next to the window." },
    B1: { fi: "Siirsimme matkan ensi viikkoon.", en: "We postponed the trip to next week." },
    B2: {
      fi: "Tiedostot siirrettiin uudelle palvelimelle yön aikana.",
      en: "The files were transferred to the new server overnight.",
    },
  },
  updatedAt: "2026-06-06",
};

export default siirtaa;
