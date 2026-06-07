import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, tt:t gradation, stem järkytty- ~ järkyty-.
// Present minä järkytyn, hän järkyttyy; imperfect minä järkytyin; NUT järkyttynyt. Governs elative.
const jarkyttya: Word = {
  fi: "järkyttyä",
  slug: "järkyttyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to be shocked, be shaken",
  selitys:
    "Joutua voimakkaan kielteisen tunteen valtaan: 'järkyttyä uutisesta'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu tt:t (järkytyn). Hallitsee elatiivia ('järkyttyä jostakin'). Vrt. järkyttää, järkytys, järkyttävä.",
  kuva: { emoji: "😰", alt: "järkyttyä – joutua voimakkaan kielteisen tunteen valtaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu tt:t (järkyty- ~ järkytty-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "järkytyn", merkitys: "I am shocked" },
      { sija: "imperfekti (minä)", muoto: "järkytyin", merkitys: "I was shocked" },
      { sija: "NUT-partisiippi", muoto: "järkyttynyt", merkitys: "(have) been shocked" },
    ],
    huom:
      "Astevaihtelu tt:t: heikko järkyty- (järkytyn, järkytyin), vahva järkytty- (järkyttyä, järkyttyy, järkyttynyt). Hallitsee elatiivia: 'järkyttyä jostakin'. Transitiivinen pari järkyttää. Vrt. järkytys = shock.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "järkytyn" },
          { label: "sinä", form: "järkytyt" },
          { label: "hän", form: "järkyttyy" },
          { label: "me", form: "järkytymme" },
          { label: "te", form: "järkytytte" },
          { label: "he", form: "järkyttyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en järkyty" },
          { label: "hän", form: "ei järkyty" },
          { label: "he", form: "eivät järkyty" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "järkytyin" },
          { label: "sinä", form: "järkytyit" },
          { label: "hän", form: "järkyttyi" },
          { label: "me", form: "järkytyimme" },
          { label: "te", form: "järkytyitte" },
          { label: "he", form: "järkyttyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen järkyttynyt" },
          { label: "hän", form: "on järkyttynyt" },
          { label: "he", form: "ovat järkyttyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "järkyttää",
      en: "to shock, shake",
      taso: "B2",
      esim: { fi: "Uutinen järkytti kaikkia.", en: "The news shocked everyone." },
    },
    {
      fi: "järkytys",
      en: "shock",
      taso: "B2",
      esim: { fi: "Hän oli järkytyksen vallassa.", en: "She was in a state of shock." },
    },
    {
      fi: "järkyttävä",
      en: "shocking",
      taso: "B2",
      esim: { fi: "Se oli järkyttävä näky.", en: "It was a shocking sight." },
    },
  ],
  synonyymit: [
    { fi: "säikähtää", en: "to get a fright" },
    { fi: "kauhistua", en: "to be horrified" },
  ],
  esimerkit: {
    A2: { fi: "Järkytyin kovasti.", en: "I was very shocked." },
    B1: { fi: "Hän järkyttyi onnettomuudesta.", en: "She was shaken by the accident." },
    B2: {
      fi: "Koko maa järkyttyi tapahtuneesta ja osoitti myötätuntoa uhreille.",
      en: "The whole country was shocked by what happened and showed compassion for the victims.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jarkyttya;
