import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem kulutta- ~ kuluta-.
// Present minä kulutan, hän kuluttaa; imperfect minä kulutin; NUT kuluttanut.
const kuluttaa: Word = {
  fi: "kuluttaa",
  slug: "kuluttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to consume, spend; to wear out",
  selitys:
    "Käyttää loppuun aikaa, rahaa tai energiaa; myös kuluttaa esine loppuun: 'kuluttaa rahaa'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (kulutan). Johdettu sanasta kulua. Vrt. kuluttaja, kulutus, kulua.",
  kuva: { emoji: "💸", alt: "kuluttaa – käyttää loppuun aikaa, rahaa tai energiaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (kuluta- ~ kulutta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kulutan", merkitys: "I consume" },
      { sija: "imperfekti (minä)", muoto: "kulutin", merkitys: "I consumed" },
      { sija: "NUT-partisiippi", muoto: "kuluttanut", merkitys: "(have) consumed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva kulutta- (kuluttaa, kuluttanut), heikko kuluta- (kulutan, kulutin). 'Kuluttaa rahaa/aikaa/energiaa'. Vrt. kuluttaja = consumer, kulutus = consumption, kulua = to wear/pass.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kulutan" },
          { label: "sinä", form: "kulutat" },
          { label: "hän", form: "kuluttaa" },
          { label: "me", form: "kulutamme" },
          { label: "te", form: "kulutatte" },
          { label: "he", form: "kuluttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuluta" },
          { label: "hän", form: "ei kuluta" },
          { label: "he", form: "eivät kuluta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kulutin" },
          { label: "sinä", form: "kulutit" },
          { label: "hän", form: "kulutti" },
          { label: "me", form: "kulutimme" },
          { label: "te", form: "kulutitte" },
          { label: "he", form: "kuluttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuluttanut" },
          { label: "hän", form: "on kuluttanut" },
          { label: "he", form: "ovat kuluttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuluta!" },
          { label: "te", form: "kuluttakaa!" },
          { label: "kielto (sinä)", form: "älä kuluta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuluttaja",
      en: "consumer",
      taso: "B1",
      esim: { fi: "Kuluttajat vaativat laatua.", en: "Consumers demand quality." },
    },
    {
      fi: "kulutus",
      en: "consumption",
      taso: "B2",
      esim: { fi: "Sähkön kulutus kasvoi.", en: "Electricity consumption grew." },
    },
    {
      fi: "kulua",
      en: "to pass (time); to wear out",
      taso: "B1",
      esim: { fi: "Aika kuluu nopeasti.", en: "Time passes quickly." },
    },
  ],
  synonyymit: [
    { fi: "käyttää", en: "to use" },
    { fi: "tuhlata", en: "to waste, squander" },
  ],
  esimerkit: {
    A2: { fi: "Kulutan liikaa rahaa.", en: "I spend too much money." },
    B1: { fi: "Auto kuluttaa vähän polttoainetta.", en: "The car consumes little fuel." },
    B2: {
      fi: "Suomalaiset kuluttavat keskimäärin vähemmän kuin ennen.",
      en: "Finns consume on average less than before.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kuluttaa;
