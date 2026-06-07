import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem tehtävä-.
// Genitive tehtävän, partitive tehtävää, partitive pl tehtäviä.
const tehtava: Word = {
  fi: "tehtävä",
  slug: "tehtävä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "task, assignment, duty; exercise",
  selitys:
    "Tehtäväksi annettu työ tai harjoitus: 'kotitehtävä', 'tärkeä tehtävä'. Myös vastuu tai rooli. Tyyppi 10/koira, ei astevaihtelua. Alun perin verbin tehdä passiivin partisiippi ('se, mikä on tehtävä'). Vrt. tehdä, kotitehtävä, työtehtävä.",
  kuva: { emoji: "📋", alt: "tehtävä – tehtäväksi annettu työ tai harjoitus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo tehtävä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tehtävän", merkitys: "of the task" },
      { sija: "partitiivi (yks.)", muoto: "tehtävää", merkitys: "task (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tehtäviä", merkitys: "tasks (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko tehtäviä. Sanasta tehdä (verbi). Yhdyssanoissa: kotitehtävä, työtehtävä, päätehtävä. Vrt. tehdä, tehtävänanto.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tehtävä" },
          { label: "Partitiivi", form: "tehtävää" },
          { label: "Genetiivi", form: "tehtävän" },
          { label: "Inessiivi", form: "tehtävässä" },
          { label: "Elatiivi", form: "tehtävästä" },
          { label: "Illatiivi", form: "tehtävään" },
          { label: "Adessiivi", form: "tehtävällä" },
          { label: "Ablatiivi", form: "tehtävältä" },
          { label: "Allatiivi", form: "tehtävälle" },
          { label: "Essiivi", form: "tehtävänä" },
          { label: "Translatiivi", form: "tehtäväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tehtävät" },
          { label: "Partitiivi", form: "tehtäviä" },
          { label: "Genetiivi", form: "tehtävien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kotitehtävä",
      en: "homework",
      taso: "A2",
      esim: { fi: "Teen kotitehtävät illalla.", en: "I do my homework in the evening." },
    },
    {
      fi: "työtehtävä",
      en: "work task, job duty",
      taso: "B1",
      esim: { fi: "Hänellä on monia työtehtäviä.", en: "She has many work tasks." },
    },
  ],
  synonyymit: [
    { fi: "harjoitus", en: "exercise" },
    { fi: "velvollisuus", en: "duty" },
  ],
  esimerkit: {
    A2: { fi: "Tämä tehtävä on vaikea.", en: "This task is difficult." },
    B1: { fi: "Sain uuden tehtävän työpaikalla.", en: "I got a new assignment at work." },
    B2: {
      fi: "Hänen tehtävänään oli koordinoida koko hankkeen aikataulu.",
      en: "Her task was to coordinate the whole project's schedule.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tehtava;
