import type { Word } from "@/lib/content-types";

// Invariant coordinating conjunction — no inflection, so no taivutus.
const ja: Word = {
  fi: "ja",
  slug: "ja",
  pos: "konjunktio (rinnastuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "and",
  selitys:
    "Rinnastuskonjunktio, joka yhdistää samanarvoisia sanoja tai lauseita. Ei taivuteta.",
  kuva: { emoji: "➕", alt: "ja – plusmerkki" },

  kielioppi: {
    tyyppi: "rinnastuskonjunktio; ei taivuteta",
    muodot: [
      { sija: "perusmuoto", muoto: "ja", merkitys: "and" },
      { sija: "luettelossa", muoto: "kahvi, tee ja maito", merkitys: "coffee, tea and milk" },
      { sija: "kielteinen vastine", muoto: "en … enkä", merkitys: "neither … nor (clitic -kä)" },
    ],
    huom:
      "Ei pilkkua ennen 'ja' tavallisessa luettelossa. Kielteisessä rinnastuksessa käytetään liitepartikkelia -kä: 'En syö enkä juo.' Vrt. 'sekä … että' = 'both … and'.",
  },
  johdokset: [
    {
      fi: "sekä",
      en: "and; as well as",
      taso: "B1",
      esim: { fi: "Osaan sekä suomea että ruotsia.", en: "I know both Finnish and Swedish." },
    },
    {
      fi: "-kä",
      en: "and not (negative clitic)",
      taso: "B2",
      esim: { fi: "En syö enkä juo.", en: "I neither eat nor drink." },
    },
    {
      fi: "ynnä",
      en: "plus, and (formal/arithmetic)",
      taso: "B2",
      esim: { fi: "Kaksi ynnä kaksi on neljä.", en: "Two plus two is four." },
    },
  ],
  synonyymit: [
    { fi: "sekä", en: "as well as" },
    { fi: "-kä", en: "and (negative clitic)" },
  ],
  esimerkit: {
    A2: { fi: "Ostan leipää ja maitoa.", en: "I'm buying bread and milk." },
    B1: {
      fi: "Hän opiskelee suomea ja työskentelee samalla.",
      en: "She studies Finnish and works at the same time.",
    },
    B2: { fi: "Tulin, näin ja voitin.", en: "I came, I saw, I conquered." },
  },
  updatedAt: "2026-06-04",
};

export default ja;
