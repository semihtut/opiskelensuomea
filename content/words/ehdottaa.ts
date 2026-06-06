import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem ehdotta-.
// Present ehdotan, past ehdotin, past participle ehdottanut.
const ehdottaa: Word = {
  fi: "ehdottaa",
  slug: "ehdottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to suggest, propose",
  selitys:
    "Esittää idea harkittavaksi: 'ehdotan, että…'. Astevaihtelu tt:t (ehdottaa → ehdotan). Vrt. esittää (present), ehdotus (suggestion).",
  kuva: { emoji: "💡", alt: "ehdottaa – esittää idea harkittavaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttaa); astevaihtelu tt:t; vartalo ehdotta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "ehdotan", merkitys: "I suggest" },
      { sija: "imperfekti (minä)", muoto: "ehdotin", merkitys: "I suggested" },
      { sija: "NUT-partisiippi", muoto: "ehdottanut", merkitys: "(have) suggested" },
    ],
    huom:
      "Usein 'että'-lauseen kanssa: 'Ehdotan, että lähdemme nyt.' Astevaihtelu tt:t: ehdotan, ehdotat, ehdotti. Vrt. ehdotus = suggestion, ehkä = maybe.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ehdotan" },
          { label: "sinä", form: "ehdotat" },
          { label: "hän", form: "ehdottaa" },
          { label: "me", form: "ehdotamme" },
          { label: "te", form: "ehdotatte" },
          { label: "he", form: "ehdottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ehdota" },
          { label: "hän", form: "ei ehdota" },
          { label: "he", form: "eivät ehdota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ehdotin" },
          { label: "sinä", form: "ehdotit" },
          { label: "hän", form: "ehdotti" },
          { label: "me", form: "ehdotimme" },
          { label: "te", form: "ehdotitte" },
          { label: "he", form: "ehdottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ehdottanut" },
          { label: "hän", form: "on ehdottanut" },
          { label: "he", form: "ovat ehdottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ehdota!" },
          { label: "te", form: "ehdottakaa!" },
          { label: "kielto (sinä)", form: "älä ehdota" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ehdotus",
      en: "suggestion, proposal",
      taso: "B1",
      esim: { fi: "Sinulla on hyvä ehdotus.", en: "You have a good suggestion." },
    },
    {
      fi: "ehdokas",
      en: "candidate",
      taso: "B2",
      esim: { fi: "Hän on uusi ehdokas vaaleissa.", en: "She is a new candidate in the election." },
    },
    {
      fi: "ehdoton",
      en: "absolute, unconditional",
      taso: "B2",
      esim: { fi: "Se on ehdoton edellytys.", en: "It is an absolute requirement." },
    },
  ],
  synonyymit: [
    { fi: "esittää", en: "to put forward" },
    { fi: "suositella", en: "to recommend" },
  ],
  esimerkit: {
    A2: { fi: "Ehdotan kahvia.", en: "I suggest coffee." },
    B1: { fi: "Ehdotin, että tapaamme huomenna.", en: "I suggested that we meet tomorrow." },
    B2: {
      fi: "Hän ehdotti täysin uutta lähestymistapaa ongelmaan.",
      en: "She proposed a completely new approach to the problem.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ehdottaa;
