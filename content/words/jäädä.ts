import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: verb type 2 (-dä), no gradation, stem jää-.
// Present jään, past jäin/jäi, past participle jäänyt/jääneet.
const jaada: Word = {
  fi: "jäädä",
  slug: "jäädä",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "A2",
  en: "to stay, remain; to be left",
  selitys:
    "Pysyä paikallaan tai jäljelle. Tyyppi 2 (-dä), vartalo jää-, ei astevaihtelua. Vrt. jättää (= leave something).",
  kuva: { alt: "jäädä – joku jää paikalleen" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-dä); vartalo jää-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "jään", merkitys: "I stay" },
      { sija: "imperfekti (minä)", muoto: "jäin", merkitys: "I stayed" },
      { sija: "kielto (minä)", muoto: "en jää", merkitys: "I don't stay" },
    ],
    huom:
      "Partisiippi jäänyt, monikko jääneet. 'Jäädä kotiin' = stay home. Erota jäädä (= remain, intransitiivinen) ja jättää (= leave something behind, transitiivinen).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "jään" },
          { label: "sinä", form: "jäät" },
          { label: "hän", form: "jää" },
          { label: "me", form: "jäämme" },
          { label: "te", form: "jäätte" },
          { label: "he", form: "jäävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en jää" },
          { label: "sinä", form: "et jää" },
          { label: "hän", form: "ei jää" },
          { label: "me", form: "emme jää" },
          { label: "te", form: "ette jää" },
          { label: "he", form: "eivät jää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "jäin" },
          { label: "sinä", form: "jäit" },
          { label: "hän", form: "jäi" },
          { label: "me", form: "jäimme" },
          { label: "te", form: "jäitte" },
          { label: "he", form: "jäivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en jäänyt" },
          { label: "sinä", form: "et jäänyt" },
          { label: "hän", form: "ei jäänyt" },
          { label: "me", form: "emme jääneet" },
          { label: "te", form: "ette jääneet" },
          { label: "he", form: "eivät jääneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen jäänyt" },
          { label: "sinä", form: "olet jäänyt" },
          { label: "hän", form: "on jäänyt" },
          { label: "me", form: "olemme jääneet" },
          { label: "te", form: "olette jääneet" },
          { label: "he", form: "ovat jääneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole jäänyt" },
          { label: "hän", form: "ei ole jäänyt" },
          { label: "he", form: "eivät ole jääneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "jää!" },
          { label: "te", form: "jääkää!" },
          { label: "kielto (sinä)", form: "älä jää" },
          { label: "kielto (te)", form: "älkää jääkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jäljellä",
      en: "left, remaining",
      taso: "B1",
      esim: { fi: "Rahaa on vähän jäljellä.", en: "There's little money left." },
    },
    {
      fi: "jättää",
      en: "to leave (something)",
      taso: "A2",
      esim: { fi: "Jätin avaimet kotiin.", en: "I left the keys at home." },
    },
    {
      fi: "jäännös",
      en: "remainder, remnant",
      taso: "B2",
      esim: { fi: "Aterian jäännökset vietiin pois.", en: "The leftovers of the meal were taken away." },
    },
  ],
  synonyymit: [
    { fi: "pysyä", en: "to stay, remain" },
    { fi: "viipyä", en: "to linger, stay on" },
  ],
  esimerkit: {
    A2: { fi: "Jään tänään kotiin.", en: "I'll stay home today." },
    B1: { fi: "Juna oli täynnä, joten jäimme asemalle.", en: "The train was full, so we stayed at the station." },
    B2: {
      fi: "Hän jäi eläkkeelle vasta kuusikymmentäviisivuotiaana.",
      en: "She retired only at the age of sixty-five.",
    },
  },
  updatedAt: "2026-06-05",
};

export default jaada;
