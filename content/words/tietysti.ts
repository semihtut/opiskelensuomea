import type { Word } from "@/lib/content-types";

// Modal adverb "tietysti" (of course, naturally). Invariant. Synonym tietenkin.
const tietysti: Word = {
  fi: "tietysti",
  slug: "tietysti",
  pos: "adverbi (modaaliadverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "of course, naturally",
  selitys:
    "Itsestään selvää. Modaaliadverbi, ei taivuteta. 'Tietysti autan sinua.' Synonyymi tietenkin, totta kai. Pohjana sana tietty.",
  kuva: { alt: "tietysti – itsestään selvää" },

  kielioppi: {
    tyyppi: "modaaliadverbi (itsestäänselvyys); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "tietysti", merkitys: "of course" },
      { sija: "variantti", muoto: "tietenkin", merkitys: "of course (variant)" },
      { sija: "puhekieli", muoto: "totta kai", merkitys: "sure, of course" },
    ],
    huom:
      "Vahvistaa itsestäänselvyyttä: 'Tuletko? — Tietysti!' Voi myös ilmaista myönnytystä: 'Tietysti se maksaa, mutta se kannattaa.' Synonyymit tietenkin, totta kai.",
  },
  johdokset: [
    {
      fi: "tietenkin",
      en: "of course (variant)",
      taso: "A2",
      esim: { fi: "Tietenkin muistan sinut!", en: "Of course I remember you!" },
    },
    {
      fi: "tietty",
      en: "certain, specific",
      taso: "B1",
      esim: { fi: "Tietyt asiat eivät muutu.", en: "Certain things don't change." },
    },
    {
      fi: "totta kai",
      en: "sure, of course",
      taso: "A2",
      esim: { fi: "Totta kai voit tulla.", en: "Of course you can come." },
    },
  ],
  synonyymit: [
    { fi: "tietenkin", en: "of course" },
    { fi: "totta kai", en: "sure" },
  ],
  esimerkit: {
    A2: { fi: "Tietysti tulen mukaan.", en: "Of course I'll come along." },
    B1: { fi: "Tietysti se on vaikeaa, mutta yritetään silti.", en: "Of course it's hard, but let's try anyway." },
    B2: {
      fi: "Tietysti olin pettynyt, mutta en näyttänyt sitä muille kuin parhaalle ystävälleni.",
      en: "Of course I was disappointed, but I didn't show it to anyone except my best friend.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tietysti;
