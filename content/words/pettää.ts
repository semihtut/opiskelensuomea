import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem pettä- ~ petä-.
// Present minä petän, hän pettää; imperfect minä petin; NUT pettänyt.
const pettaa: Word = {
  fi: "pettää",
  slug: "pettää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to betray, deceive; to fail, give way",
  selitys:
    "1) Pettää luottamus, huijata: 'pettää ystävänsä'. 2) Pettää eli rikkoutua tai pettää voimat: 'jalat pettivät'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (petän). Vrt. petos, petollinen; eri sana kuin pettyä (to be disappointed).",
  kuva: { alt: "pettää – pettää luottamus tai rikkoutua" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (petä- ~ pettä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "petän", merkitys: "I betray" },
      { sija: "imperfekti (minä)", muoto: "petin", merkitys: "I betrayed" },
      { sija: "NUT-partisiippi", muoto: "pettänyt", merkitys: "(have) betrayed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva pettä- (pettää, pettänyt), heikko petä- (petän, petin). Älä sekoita verbiin pettyä (= to be disappointed, intransitiivinen). 'Pettää luottamus' = to betray trust; 'voimat pettivät' = the strength gave way.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "petän" },
          { label: "sinä", form: "petät" },
          { label: "hän", form: "pettää" },
          { label: "me", form: "petämme" },
          { label: "te", form: "petätte" },
          { label: "he", form: "pettävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en petä" },
          { label: "hän", form: "ei petä" },
          { label: "he", form: "eivät petä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "petin" },
          { label: "sinä", form: "petit" },
          { label: "hän", form: "petti" },
          { label: "me", form: "petimme" },
          { label: "te", form: "petitte" },
          { label: "he", form: "pettivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pettänyt" },
          { label: "hän", form: "on pettänyt" },
          { label: "he", form: "ovat pettäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "petä!" },
          { label: "te", form: "pettäkää!" },
          { label: "kielto (sinä)", form: "älä petä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "petos",
      en: "betrayal, fraud",
      taso: "B2",
      esim: { fi: "Se oli törkeä petos.", en: "It was a gross betrayal." },
    },
    {
      fi: "petollinen",
      en: "treacherous, deceptive",
      taso: "B2",
      esim: { fi: "Jää oli petollisen ohut.", en: "The ice was deceptively thin." },
    },
    {
      fi: "pettyä",
      en: "to be disappointed (different verb)",
      taso: "B1",
      esim: { fi: "Petyin tulokseen.", en: "I was disappointed with the result." },
    },
  ],
  synonyymit: [
    { fi: "huijata", en: "to cheat, trick" },
    { fi: "kavaltaa", en: "to betray, embezzle" },
  ],
  esimerkit: {
    A2: { fi: "Älä petä minua.", en: "Don't betray me." },
    B1: { fi: "Hän petti ystävänsä luottamuksen.", en: "He betrayed his friend's trust." },
    B2: {
      fi: "Muisti petti ratkaisevalla hetkellä, enkä muistanut nimeä.",
      en: "My memory failed at the crucial moment, and I couldn't recall the name.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pettaa;
