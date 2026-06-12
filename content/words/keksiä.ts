import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, no gradation, stem keksi-.
// Present minä keksin, hän keksii; imperfect minä keksin, hän keksi; NUT participle keksinyt.
const keksiä: Word = {
  fi: "keksiä",
  slug: "keksiä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to invent; to come up with, make up",
  selitys:
    "Saada uusi idea tai luoda jotakin uutta: 'keksiä ratkaisu'. Tyyppi 1 (-iä), ei astevaihtelua; vartalo keksi-. Vrt. keksintö (invention), keksijä (inventor).",
  kuva: { alt: "keksiä – saada uusi idea tai luoda jotakin uutta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-iä); ei astevaihtelua; vartalo keksi-",
    muodot: [
      { sija: "preesens (minä)", muoto: "keksin", merkitys: "I come up with" },
      { sija: "imperfekti (minä)", muoto: "keksin", merkitys: "I came up with" },
      { sija: "NUT-partisiippi", muoto: "keksinyt", merkitys: "(have) come up with" },
    ],
    huom:
      "HUOM: minä-muoto on sama preesensissä ja imperfektissä (keksin); vain hän erottaa ne (keksii ↔ keksi). Ei astevaihtelua. 'Nyt keksin!' = I've got it! Vrt. keksintö = invention.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "keksin" },
          { label: "sinä", form: "keksit" },
          { label: "hän", form: "keksii" },
          { label: "me", form: "keksimme" },
          { label: "te", form: "keksitte" },
          { label: "he", form: "keksivät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en keksi" },
          { label: "hän", form: "ei keksi" },
          { label: "he", form: "eivät keksi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "keksin" },
          { label: "sinä", form: "keksit" },
          { label: "hän", form: "keksi" },
          { label: "me", form: "keksimme" },
          { label: "te", form: "keksitte" },
          { label: "he", form: "keksivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen keksinyt" },
          { label: "hän", form: "on keksinyt" },
          { label: "he", form: "ovat keksineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "keksi!" },
          { label: "te", form: "keksikää!" },
          { label: "kielto (sinä)", form: "älä keksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keksintö",
      en: "invention",
      taso: "B1",
      esim: { fi: "Pyörä on vanha keksintö.", en: "The wheel is an old invention." },
    },
    {
      fi: "keksijä",
      en: "inventor",
      taso: "B2",
      esim: { fi: "Hän on kuuluisa keksijä.", en: "He is a famous inventor." },
    },
    {
      fi: "keksiminen",
      en: "inventing, coming up with",
      taso: "B2",
      esim: { fi: "Tekosyiden keksiminen on helppoa.", en: "Coming up with excuses is easy." },
    },
  ],
  synonyymit: [
    { fi: "kehittää", en: "to develop, devise" },
    { fi: "luoda", en: "to create" },
  ],
  esimerkit: {
    A2: { fi: "Keksin hyvän idean!", en: "I came up with a good idea!" },
    B1: { fi: "Hän keksi tekosyyn ja lähti.", en: "He made up an excuse and left." },
    B2: {
      fi: "Insinöörit keksivät laitteen, joka säästää paljon energiaa.",
      en: "The engineers invented a device that saves a lot of energy.",
    },
  },
  updatedAt: "2026-06-06",
};

export default keksiä;
