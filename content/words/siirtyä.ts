import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, rt:rr gradation, stem siirty- ~ siirry-.
// Present minä siirryn, hän siirtyy; imperfect minä siirryin; NUT siirtynyt. Intransitive.
const siirtya: Word = {
  fi: "siirtyä",
  slug: "siirtyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to move, shift, transfer, transition",
  selitys:
    "Vaihtaa paikkaa tai siirtyä vaiheesta toiseen: 'siirtyä työelämään'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu rt:rr (siirryn). Intransitiivinen (transit. siirtää). Hallitsee usein illatiivia. Vrt. siirtää, siirto.",
  kuva: { emoji: "➡️", alt: "siirtyä – vaihtaa paikkaa tai vaihetta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu rt:rr (siirty- ~ siirry-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "siirryn", merkitys: "I move" },
      { sija: "imperfekti (minä)", muoto: "siirryin", merkitys: "I moved" },
      { sija: "NUT-partisiippi", muoto: "siirtynyt", merkitys: "(have) moved" },
    ],
    huom:
      "Astevaihtelu rt:rr: heikko siirry- (siirryn, siirryin), vahva siirty- (siirtyä, siirtyy, siirtynyt). Intransitiivinen; transitiivinen pari on siirtää. 'Siirtyä johonkin' = to move to / transition to. Vrt. siirto = move, transfer.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "siirryn" },
          { label: "sinä", form: "siirryt" },
          { label: "hän / se", form: "siirtyy" },
          { label: "me", form: "siirrymme" },
          { label: "te", form: "siirrytte" },
          { label: "he / ne", form: "siirtyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en siirry" },
          { label: "se", form: "ei siirry" },
          { label: "ne", form: "eivät siirry" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "siirryin" },
          { label: "hän / se", form: "siirtyi" },
          { label: "ne", form: "siirtyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen siirtynyt" },
          { label: "se", form: "on siirtynyt" },
          { label: "ne", form: "ovat siirtyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "siirtää",
      en: "to move, transfer (sth)",
      taso: "B1",
      esim: { fi: "Siirrä tuoli sivuun.", en: "Move the chair aside." },
    },
    {
      fi: "siirto",
      en: "move, transfer",
      taso: "B2",
      esim: { fi: "Pankkisiirto kesti päivän.", en: "The bank transfer took a day." },
    },
    {
      fi: "siirtymä",
      en: "transition, shift",
      taso: "B2",
      esim: { fi: "Siirtymä uuteen järjestelmään oli sujuva.", en: "The transition to the new system was smooth." },
    },
  ],
  synonyymit: [
    { fi: "muuttaa paikkaa", en: "to change place" },
    { fi: "vaihtua", en: "to change over" },
  ],
  esimerkit: {
    A2: { fi: "Siirryin lähemmäs ikkunaa.", en: "I moved closer to the window." },
    B1: { fi: "Hän siirtyi eläkkeelle viime vuonna.", en: "She moved into retirement last year." },
    B2: {
      fi: "Yhä useampi yritys siirtyy käyttämään uusiutuvaa energiaa.",
      en: "More and more companies are switching to renewable energy.",
    },
  },
  updatedAt: "2026-06-07",
};

export default siirtya;
