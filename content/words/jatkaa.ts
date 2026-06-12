import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, no gradation, stem jatka-.
// Present jatkan, past jatkoin, hän jatkoi, past participle jatkanut.
const jatkaa: Word = {
  fi: "jatkaa",
  slug: "jatkaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to continue, go on; to extend",
  selitys:
    "Mennä eteenpäin, ei lopettaa: 'jatkan työtä'. Tyyppi 56 (kaivaa), ei astevaihtelua, imperfekti -oi-: jatkoin. Kohde partitiivissa: 'jatkaa lukemista'. Vastakohta lopettaa.",
  kuva: { alt: "jatkaa – mennä eteenpäin, ei lopettaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa, malli kaivaa); ei astevaihtelua; vartalo jatka-",
    muodot: [
      { sija: "preesens (minä)", muoto: "jatkan", merkitys: "I continue" },
      { sija: "imperfekti (minä)", muoto: "jatkoin", merkitys: "I continued" },
      { sija: "NUT-partisiippi", muoto: "jatkanut", merkitys: "(have) continued" },
    ],
    huom:
      "Tyypin 56 imperfekti -oi-: jatkoin, jatkoit, jatkoi. Toiminta partitiivissa: 'jatkan opiskelua'. Vastakohta lopettaa. Vrt. jatkua = to continue (intr.), jatko = continuation.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "jatkan" },
          { label: "sinä", form: "jatkat" },
          { label: "hän", form: "jatkaa" },
          { label: "me", form: "jatkamme" },
          { label: "te", form: "jatkatte" },
          { label: "he", form: "jatkavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en jatka" },
          { label: "hän", form: "ei jatka" },
          { label: "he", form: "eivät jatka" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "jatkoin" },
          { label: "sinä", form: "jatkoit" },
          { label: "hän", form: "jatkoi" },
          { label: "me", form: "jatkoimme" },
          { label: "te", form: "jatkoitte" },
          { label: "he", form: "jatkoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen jatkanut" },
          { label: "hän", form: "on jatkanut" },
          { label: "he", form: "ovat jatkaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "jatka!" },
          { label: "te", form: "jatkakaa!" },
          { label: "kielto (sinä)", form: "älä jatka" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jatko",
      en: "continuation, sequel",
      taso: "B1",
      esim: { fi: "Odotan elokuvan jatkoa.", en: "I'm waiting for the film's sequel." },
    },
    {
      fi: "jatkua",
      en: "to continue (intransitive)",
      taso: "B1",
      esim: { fi: "Sade jatkui koko päivän.", en: "The rain continued all day." },
    },
    {
      fi: "jatkuva",
      en: "continuous, ongoing",
      taso: "B2",
      esim: { fi: "Se on jatkuva ongelma.", en: "It is an ongoing problem." },
    },
  ],
  synonyymit: [
    { fi: "pitkittää", en: "to prolong" },
    { fi: "edetä", en: "to proceed" },
  ],
  esimerkit: {
    A2: { fi: "Jatka eteenpäin!", en: "Keep going!" },
    B1: { fi: "Jatkoin opiskelua illalla.", en: "I continued studying in the evening." },
    B2: {
      fi: "Päätimme jatkaa neuvotteluja seuraavana päivänä.",
      en: "We decided to continue the negotiations the next day.",
    },
  },
  updatedAt: "2026-06-06",
};

export default jatkaa;
