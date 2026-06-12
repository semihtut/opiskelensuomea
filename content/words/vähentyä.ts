import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem vähenty- ~ vähenny-.
// Present minä vähennyn, hän vähentyy; imperfect minä vähennyin; NUT vähentynyt. Intransitive.
const vahentya: Word = {
  fi: "vähentyä",
  slug: "vähentyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to decrease, diminish, lessen",
  selitys:
    "Käydä pienemmäksi määrältään tai lukumäärältään: 'kysyntä vähentyi'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu nt:nn (vähennyn). Intransitiivinen (transit. vähentää). Vastakohta lisääntyä. Synonyymi vähetä.",
  kuva: { alt: "vähentyä – käydä pienemmäksi määrältään" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu nt:nn (vähenny- ~ vähenty-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vähennyn", merkitys: "I decrease" },
      { sija: "imperfekti (minä)", muoto: "vähennyin", merkitys: "I decreased" },
      { sija: "NUT-partisiippi", muoto: "vähentynyt", merkitys: "(have) decreased" },
    ],
    huom:
      "Astevaihtelu nt:nn: heikko vähenny- (vähennyn, vähennyin), vahva vähenty- (vähentyä, vähentyy, vähentynyt). Intransitiivinen; transitiivinen pari on vähentää. Useimmiten 3. persoonassa. Vastakohta lisääntyä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vähennyn" },
          { label: "sinä", form: "vähennyt" },
          { label: "hän / se", form: "vähentyy" },
          { label: "me", form: "vähennymme" },
          { label: "te", form: "vähennytte" },
          { label: "he / ne", form: "vähentyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei vähenny" },
          { label: "ne", form: "eivät vähenny" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vähennyin" },
          { label: "hän / se", form: "vähentyi" },
          { label: "ne", form: "vähentyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on vähentynyt" },
          { label: "ne", form: "ovat vähentyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vähentää",
      en: "to reduce, decrease (sth); to subtract",
      taso: "B1",
      esim: { fi: "Vähennä suolan määrää.", en: "Reduce the amount of salt." },
    },
    {
      fi: "vähennys",
      en: "reduction, decrease; deduction",
      taso: "B2",
      esim: { fi: "Verovähennys pienensi maksua.", en: "The tax deduction lowered the payment." },
    },
    {
      fi: "vähetä",
      en: "to diminish (synonym)",
      taso: "B2",
      esim: { fi: "Valo vähenee syksyllä.", en: "The light diminishes in autumn." },
    },
  ],
  synonyymit: [
    { fi: "vähetä", en: "to decrease" },
    { fi: "pienentyä", en: "to get smaller" },
  ],
  esimerkit: {
    A2: { fi: "Asiakkaiden määrä vähentyi.", en: "The number of customers decreased." },
    B1: { fi: "Päästöt ovat vähentyneet viime vuosina.", en: "Emissions have decreased in recent years." },
    B2: {
      fi: "Kun kiinnostus vähentyi, tapahtuma päätettiin lopettaa kokonaan.",
      en: "When interest diminished, it was decided to end the event entirely.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vahentya;
