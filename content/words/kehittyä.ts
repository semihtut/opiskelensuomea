import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, tt:t gradation, stem kehitty- ~ kehity-.
// Present minä kehityn, hän kehittyy; imperfect minä kehityin; NUT kehittynyt. Intransitive.
const kehittya: Word = {
  fi: "kehittyä",
  slug: "kehittyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to develop, evolve, improve",
  selitys:
    "Muuttua vähitellen paremmaksi tai pidemmälle: 'taidot kehittyvät harjoitellessa'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu tt:t (kehityn). Intransitiivinen (transit. kehittää). Hallitsee usein elatiivia/illatiivia. Vrt. kehitys, kehittää.",
  kuva: { alt: "kehittyä – muuttua vähitellen paremmaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu tt:t (kehity- ~ kehitty-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kehityn", merkitys: "I develop" },
      { sija: "imperfekti (minä)", muoto: "kehityin", merkitys: "I developed" },
      { sija: "NUT-partisiippi", muoto: "kehittynyt", merkitys: "(have) developed" },
    ],
    huom:
      "Astevaihtelu tt:t: heikko kehity- (kehityn, kehityin), vahva kehitty- (kehittyä, kehittyy, kehittynyt). Intransitiivinen; transitiivinen pari on kehittää. 'Kehittyä jossakin' = to develop in sth. Vrt. kehitys = development.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kehityn" },
          { label: "sinä", form: "kehityt" },
          { label: "hän / se", form: "kehittyy" },
          { label: "me", form: "kehitymme" },
          { label: "te", form: "kehitytte" },
          { label: "he / ne", form: "kehittyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kehity" },
          { label: "se", form: "ei kehity" },
          { label: "ne", form: "eivät kehity" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kehityin" },
          { label: "hän / se", form: "kehittyi" },
          { label: "ne", form: "kehittyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kehittynyt" },
          { label: "se", form: "on kehittynyt" },
          { label: "ne", form: "ovat kehittyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kehittää",
      en: "to develop (sth)",
      taso: "B1",
      esim: { fi: "Yritys kehittää uutta tuotetta.", en: "The company is developing a new product." },
    },
    {
      fi: "kehitys",
      en: "development, progress",
      taso: "B1",
      esim: { fi: "Tekninen kehitys on nopeaa.", en: "Technical development is fast." },
    },
    {
      fi: "kehittynyt",
      en: "developed, advanced",
      taso: "B2",
      esim: { fi: "Se on kehittynyt talous.", en: "It is a developed economy." },
    },
  ],
  synonyymit: [
    { fi: "edistyä", en: "to progress" },
    { fi: "parantua", en: "to improve" },
  ],
  esimerkit: {
    A2: { fi: "Suomen taitoni kehittyy koko ajan.", en: "My Finnish is developing all the time." },
    B1: { fi: "Kaupunki on kehittynyt nopeasti.", en: "The city has developed quickly." },
    B2: {
      fi: "Tilanne kehittyi odottamattomaan suuntaan muutamassa viikossa.",
      en: "The situation developed in an unexpected direction within a few weeks.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kehittya;
