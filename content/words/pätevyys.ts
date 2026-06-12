import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem pätevyyde- ~ pätevyyte-.
// Genitive pätevyyden, partitive pätevyyttä, partitive pl pätevyyksiä.
const patevyys: Word = {
  fi: "pätevyys",
  slug: "pätevyys",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B2",
  en: "competence, qualification",
  selitys:
    "Kyky tai virallinen kelpoisuus hoitaa tehtävä: 'opettajan pätevyys', 'muodollinen pätevyys'. Tyyppi 40/kalleus, astevaihtelu t:d (pätevyys → pätevyyden). Johdettu adjektiivista pätevä (+ -yys). Vrt. pätevä, kelpoisuus, osaaminen.",
  kuva: { alt: "pätevyys – kyky tai kelpoisuus hoitaa tehtävä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (pätevyyte- ~ pätevyyde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pätevyyden", merkitys: "of the competence" },
      { sija: "partitiivi (yks.)", muoto: "pätevyyttä", merkitys: "competence (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pätevyyksiä", merkitys: "competences (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-yys): genetiivi -yyden (t:d), partitiivi -yyttä, partitiivin monikko -yyksiä. Ominaisuudennimi adjektiivista pätevä. Vrt. kelpoisuus, osaaminen, ammattitaito.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pätevyys" },
          { label: "Partitiivi", form: "pätevyyttä" },
          { label: "Genetiivi", form: "pätevyyden" },
          { label: "Inessiivi", form: "pätevyydessä" },
          { label: "Elatiivi", form: "pätevyydestä" },
          { label: "Illatiivi", form: "pätevyyteen" },
          { label: "Adessiivi", form: "pätevyydellä" },
          { label: "Ablatiivi", form: "pätevyydeltä" },
          { label: "Allatiivi", form: "pätevyydelle" },
          { label: "Essiivi", form: "pätevyytenä" },
          { label: "Translatiivi", form: "pätevyydeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pätevyydet" },
          { label: "Partitiivi", form: "pätevyyksiä" },
          { label: "Genetiivi", form: "pätevyyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pätevä",
      en: "competent, qualified",
      taso: "B1",
      esim: { fi: "Hän on pätevä opettaja.", en: "She is a qualified teacher." },
    },
    {
      fi: "epäpätevä",
      en: "incompetent, unqualified",
      taso: "B2",
      esim: { fi: "Tehtävään ei haluta epäpäteviä hakijoita.", en: "Unqualified applicants are not wanted for the position." },
    },
  ],
  synonyymit: [
    { fi: "kelpoisuus", en: "eligibility, qualification" },
    { fi: "osaaminen", en: "know-how, competence" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on hyvä pätevyys.", en: "She has good competence." },
    B1: { fi: "Työ vaatii erityistä pätevyyttä.", en: "The job requires special qualifications." },
    B2: {
      fi: "Muodollisen pätevyyden lisäksi työnantaja arvostaa käytännön kokemusta.",
      en: "In addition to formal qualifications, the employer values practical experience.",
    },
  },
  updatedAt: "2026-06-07",
};

export default patevyys;
