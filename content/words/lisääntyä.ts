import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem lisäänty- ~ lisäänny-.
// Present minä lisäännyn, hän lisääntyy; imperfect minä lisäännyin; NUT lisääntynyt.
const lisaantya: Word = {
  fi: "lisääntyä",
  slug: "lisääntyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to increase, grow; to reproduce",
  selitys:
    "Kasvaa määrältään tai lukumäärältään; myös: lisääntyä eli saada jälkeläisiä: 'liikenne lisääntyy'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu nt:nn (lisäännyn). Intransitiivinen. Vastakohta vähentyä. Vrt. lisätä, lisäys.",
  kuva: { emoji: "📈", alt: "lisääntyä – kasvaa määrältään" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu nt:nn (lisäänny- ~ lisäänty-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "lisäännyn", merkitys: "I increase" },
      { sija: "imperfekti (minä)", muoto: "lisäännyin", merkitys: "I increased" },
      { sija: "NUT-partisiippi", muoto: "lisääntynyt", merkitys: "(have) increased" },
    ],
    huom:
      "Astevaihtelu nt:nn: heikko lisäänny- (lisäännyn, lisäännyin), vahva lisäänty- (lisääntyä, lisääntyy, lisääntynyt). Intransitiivinen (transit. lisätä). Useimmiten 3. persoonassa. Vastakohta vähentyä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lisäännyn" },
          { label: "sinä", form: "lisäännyt" },
          { label: "hän / se", form: "lisääntyy" },
          { label: "me", form: "lisäännymme" },
          { label: "te", form: "lisäännytte" },
          { label: "he / ne", form: "lisääntyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei lisäänny" },
          { label: "ne", form: "eivät lisäänny" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lisäännyin" },
          { label: "hän / se", form: "lisääntyi" },
          { label: "ne", form: "lisääntyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on lisääntynyt" },
          { label: "ne", form: "ovat lisääntyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lisätä",
      en: "to add, increase (sth)",
      taso: "A2",
      esim: { fi: "Lisää suolaa maun mukaan.", en: "Add salt to taste." },
    },
    {
      fi: "lisäys",
      en: "addition, increase",
      taso: "B1",
      esim: { fi: "Palkkaan tuli pieni lisäys.", en: "There was a small increase in the salary." },
    },
    {
      fi: "lisääntyminen",
      en: "increase; reproduction",
      taso: "B2",
      esim: { fi: "Väestön lisääntyminen hidastui.", en: "Population growth slowed down." },
    },
  ],
  synonyymit: [
    { fi: "kasvaa", en: "to grow" },
    { fi: "runsastua", en: "to become more abundant" },
  ],
  esimerkit: {
    A2: { fi: "Sade lisääntyy illalla.", en: "The rain increases in the evening." },
    B1: { fi: "Etätyö on lisääntynyt huomattavasti.", en: "Remote work has increased considerably." },
    B2: {
      fi: "Kun kysyntä lisääntyy, myös hinnat usein nousevat.",
      en: "When demand increases, prices often rise as well.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lisaantya;
