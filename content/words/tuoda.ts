import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 64/juoda, no gradation, stem tuo- ~ to-.
// Present minä tuon, hän tuo; imperfect minä toin, hän toi; NUT tuonut; passive tuodaan.
const tuoda: Word = {
  fi: "tuoda",
  slug: "tuoda",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "A2",
  en: "to bring; to import",
  selitys:
    "Kuljettaa jokin tänne tai puhujaa kohti: 'tuoda lahja'. Vastakohta viedä (kuljettaa pois). Tyyppi 2 (-da), Kotus 64/juoda, ei astevaihtelua; imperfektissä vokaali muuttuu (tuon → toin). Vrt. viedä, kantaa, tuonti.",
  kuva: { emoji: "📥", alt: "tuoda – kuljettaa jokin tänne tai puhujaa kohti" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-da), Kotus 64/juoda; ei astevaihtelua (vartalo tuo- ~ to-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tuon", merkitys: "I bring" },
      { sija: "imperfekti (minä)", muoto: "toin", merkitys: "I brought" },
      { sija: "NUT-partisiippi", muoto: "tuonut", merkitys: "(have) brought" },
    ],
    huom:
      "Tyyppi 64/juoda: preesens tuo- (tuon, tuo), imperfektissä uo → o (toin, toi). NUT tuonut, passiivi tuodaan. Suunta: tuoda = tänne, viedä = pois. Vrt. viedä, tuonti = import.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tuon" },
          { label: "sinä", form: "tuot" },
          { label: "hän", form: "tuo" },
          { label: "me", form: "tuomme" },
          { label: "te", form: "tuotte" },
          { label: "he", form: "tuovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tuo" },
          { label: "hän", form: "ei tuo" },
          { label: "he", form: "eivät tuo" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "toin" },
          { label: "sinä", form: "toit" },
          { label: "hän", form: "toi" },
          { label: "me", form: "toimme" },
          { label: "te", form: "toitte" },
          { label: "he", form: "toivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tuonut" },
          { label: "hän", form: "on tuonut" },
          { label: "he", form: "ovat tuoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tuo!" },
          { label: "te", form: "tuokaa!" },
          { label: "kielto (sinä)", form: "älä tuo" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuonti",
      en: "import",
      taso: "B2",
      esim: { fi: "Tuonti ulkomailta kasvoi.", en: "Imports from abroad grew." },
    },
    {
      fi: "tuoda esiin",
      en: "to bring up, point out",
      taso: "B2",
      esim: { fi: "Hän toi esiin hyvän idean.", en: "He brought up a good idea." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Tuon sinulle kahvia.", en: "I'll bring you some coffee." },
    B1: { fi: "Toin matkalta tuliaisia.", en: "I brought back souvenirs from the trip." },
    B2: {
      fi: "Uusi laki toi mukanaan monia muutoksia työelämään.",
      en: "The new law brought many changes to working life.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuoda;
