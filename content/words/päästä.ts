import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 66/rohkaista (learner verb type 3, -stä),
// no gradation, stem pääse-. Present pääsen, past pääsin, past participle päässyt.
const paasta: Word = {
  fi: "päästä",
  slug: "päästä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to get to, reach; to be allowed to go",
  selitys:
    "Päästä jonnekin tai johonkin tilaan; saada lupa mennä. Tyyppi 3 (-stä → -se-), vartalo pääse-, ei astevaihtelua. Vrt. päästää (= let go, transitiivinen).",
  kuva: { alt: "päästä – päästä perille" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-stä); vartalo pääse-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "pääsen", merkitys: "I get to" },
      { sija: "imperfekti (minä)", muoto: "pääsin", merkitys: "I got to" },
      { sija: "kielto (minä)", muoto: "en pääse", merkitys: "I don't get to" },
    ],
    huom:
      "Partisiippi päässyt, monikko päässeet. Suunta illatiivissa: 'Pääsen kotiin.' Erota päästä (= get to, intransitiivinen) ja päästää (= release, let go).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pääsen" },
          { label: "sinä", form: "pääset" },
          { label: "hän", form: "pääsee" },
          { label: "me", form: "pääsemme" },
          { label: "te", form: "pääsette" },
          { label: "he", form: "pääsevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pääse" },
          { label: "sinä", form: "et pääse" },
          { label: "hän", form: "ei pääse" },
          { label: "me", form: "emme pääse" },
          { label: "te", form: "ette pääse" },
          { label: "he", form: "eivät pääse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pääsin" },
          { label: "sinä", form: "pääsit" },
          { label: "hän", form: "pääsi" },
          { label: "me", form: "pääsimme" },
          { label: "te", form: "pääsitte" },
          { label: "he", form: "pääsivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en päässyt" },
          { label: "sinä", form: "et päässyt" },
          { label: "hän", form: "ei päässyt" },
          { label: "me", form: "emme päässeet" },
          { label: "te", form: "ette päässeet" },
          { label: "he", form: "eivät päässeet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen päässyt" },
          { label: "sinä", form: "olet päässyt" },
          { label: "hän", form: "on päässyt" },
          { label: "me", form: "olemme päässeet" },
          { label: "te", form: "olette päässeet" },
          { label: "he", form: "ovat päässeet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole päässyt" },
          { label: "hän", form: "ei ole päässyt" },
          { label: "he", form: "eivät ole päässeet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pääse!" },
          { label: "te", form: "pääskää!" },
          { label: "kielto (sinä)", form: "älä pääse" },
          { label: "kielto (te)", form: "älkää pääskö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pääsy",
      en: "access, entry",
      taso: "B1",
      esim: { fi: "Pääsy museoon on ilmainen.", en: "Entry to the museum is free." },
    },
    {
      fi: "pääsylippu",
      en: "admission ticket",
      taso: "B1",
      esim: { fi: "Ostin pääsylipun konserttiin.", en: "I bought a ticket to the concert." },
    },
    {
      fi: "päästää",
      en: "to let go, release",
      taso: "B1",
      esim: { fi: "Päästä lintu vapaaksi.", en: "Let the bird go free." },
    },
  ],
  synonyymit: [
    { fi: "saapua", en: "to arrive" },
    { fi: "ehtiä", en: "to make it (in time)" },
  ],
  esimerkit: {
    A2: { fi: "Milloin pääset kotiin?", en: "When do you get home?" },
    B1: { fi: "Pääsimme perille ajoissa.", en: "We reached the destination in time." },
    B2: {
      fi: "En päässyt kokoukseen, koska juna myöhästyi.",
      en: "I couldn't make it to the meeting because the train was late.",
    },
  },
  updatedAt: "2026-06-05",
};

export default paasta;
