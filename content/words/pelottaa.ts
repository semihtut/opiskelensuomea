import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem pelotta- ~ pelota-.
// Present minä pelotan, hän pelottaa; imperfect minä pelotin; NUT pelottanut. Also impersonal + partitive.
const pelottaa: Word = {
  fi: "pelottaa",
  slug: "pelottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to scare, frighten; (impersonal) to be afraid",
  selitys:
    "1) Saada joku tuntemaan pelkoa: 'koira pelottaa lapsia'. 2) Persoonaton: 'minua pelottaa' = olen peloissani. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (pelotan). Persoonattomassa objekti partitiivissa. Vrt. pelätä, pelko.",
  kuva: { alt: "pelottaa – saada tuntemaan pelkoa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (pelota- ~ pelotta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "pelotan", merkitys: "I scare" },
      { sija: "imperfekti (minä)", muoto: "pelotin", merkitys: "I scared" },
      { sija: "NUT-partisiippi", muoto: "pelottanut", merkitys: "(have) scared" },
    ],
    huom:
      "Astevaihtelu tt:t. Tärkein käyttö on PERSOONATON + partitiivi: 'minua pelottaa' = I'm scared, 'häntä pelotti' = he was scared. Erota pelätä (= to fear, persoonallinen, minä pelkään). Vrt. pelko = fear.",
  },
  taivutus: {
    sections: [
      {
        title: "Persoonaton (yleisin)",
        rows: [
          { label: "minua pelottaa", form: "I'm scared" },
          { label: "häntä pelotti", form: "he/she was scared" },
          { label: "kielto", form: "ei pelota" },
        ],
      },
      {
        title: "Preesens (transitiivinen)",
        rows: [
          { label: "minä", form: "pelotan" },
          { label: "hän", form: "pelottaa" },
          { label: "he", form: "pelottavat" },
        ],
      },
      {
        title: "Imperfekti (transitiivinen)",
        rows: [
          { label: "minä", form: "pelotin" },
          { label: "hän", form: "pelotti" },
          { label: "he", form: "pelottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "hän", form: "on pelottanut" },
          { label: "he", form: "ovat pelottaneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pelätä",
      en: "to fear (personal verb)",
      taso: "B1",
      esim: { fi: "Pelkään pimeää.", en: "I'm afraid of the dark." },
    },
    {
      fi: "pelko",
      en: "fear",
      taso: "B1",
      esim: { fi: "Pelko katosi vähitellen.", en: "The fear faded gradually." },
    },
    {
      fi: "pelottava",
      en: "scary, frightening",
      taso: "B1",
      esim: { fi: "Se oli pelottava kokemus.", en: "It was a frightening experience." },
    },
  ],
  synonyymit: [
    { fi: "kauhistuttaa", en: "to terrify" },
    { fi: "säikäyttää", en: "to startle" },
  ],
  esimerkit: {
    A2: { fi: "Minua pelottaa.", en: "I'm scared." },
    B1: { fi: "Häntä pelotti puhua yleisön edessä.", en: "He was scared to speak in front of an audience." },
    B2: {
      fi: "Tuntematon tulevaisuus pelottaa monia, vaikka se tuo myös mahdollisuuksia.",
      en: "An unknown future scares many, although it also brings opportunities.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pelottaa;
