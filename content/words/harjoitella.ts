import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem harjoittele- ~ harjoitel-.
// Present minä harjoittelen, hän harjoittelee; imperfect minä harjoittelin; NUT harjoitellut.
const harjoitella: Word = {
  fi: "harjoitella",
  slug: "harjoitella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to practise, train, rehearse",
  selitys:
    "Tehdä jotakin toistuvasti oppiakseen tai parantuakseen: 'harjoitella soittamista'. Tyyppi 3 (-lla), astevaihtelu tt:t (harjoittelen ~ harjoitella). Johdettu verbistä harjoittaa. Vrt. harjoitus (exercise).",
  kuva: { alt: "harjoitella – tehdä jotakin toistuvasti oppiakseen" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); astevaihtelu tt:t (harjoittele- ↔ harjoitel-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "harjoittelen", merkitys: "I practise" },
      { sija: "imperfekti (minä)", muoto: "harjoittelin", merkitys: "I practised" },
      { sija: "NUT-partisiippi", muoto: "harjoitellut", merkitys: "(have) practised" },
    ],
    huom:
      "Vahva aste tt taipuvissa muodoissa (harjoittelen, harjoittelin, harjoittele!), heikko aste t perusmuodossa ja NUT-partisiipissa (harjoitella, harjoitellut, harjoitelkaa). Kohde usein partitiivissa tai 3. infinitiivin illatiivissa: 'harjoitella laulamista'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "harjoittelen" },
          { label: "sinä", form: "harjoittelet" },
          { label: "hän", form: "harjoittelee" },
          { label: "me", form: "harjoittelemme" },
          { label: "te", form: "harjoittelette" },
          { label: "he", form: "harjoittelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en harjoittele" },
          { label: "hän", form: "ei harjoittele" },
          { label: "he", form: "eivät harjoittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "harjoittelin" },
          { label: "sinä", form: "harjoittelit" },
          { label: "hän", form: "harjoitteli" },
          { label: "me", form: "harjoittelimme" },
          { label: "te", form: "harjoittelitte" },
          { label: "he", form: "harjoittelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen harjoitellut" },
          { label: "hän", form: "on harjoitellut" },
          { label: "he", form: "ovat harjoitelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "harjoittele!" },
          { label: "te", form: "harjoitelkaa!" },
          { label: "kielto (sinä)", form: "älä harjoittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "harjoitus",
      en: "exercise, practice, rehearsal",
      taso: "B1",
      esim: { fi: "Bändillä on harjoitus illalla.", en: "The band has a rehearsal tonight." },
    },
    {
      fi: "harjoittelija",
      en: "trainee, intern",
      taso: "B2",
      esim: { fi: "Harjoittelija aloitti kesäkuussa.", en: "The intern started in June." },
    },
    {
      fi: "treenata",
      en: "to train, work out (colloquial)",
      taso: "B1",
      esim: { fi: "Treenaan salilla kolmesti viikossa.", en: "I work out at the gym three times a week." },
    },
  ],
  synonyymit: [
    { fi: "treenata", en: "to train (colloquial)" },
    { fi: "opetella", en: "to learn (by practising)" },
  ],
  esimerkit: {
    A2: { fi: "Harjoittelen suomea joka päivä.", en: "I practise Finnish every day." },
    B1: { fi: "Harjoittelimme esitystä koko viikon.", en: "We rehearsed the performance all week." },
    B2: {
      fi: "Mitä enemmän harjoittelet, sitä varmemmaksi tulet.",
      en: "The more you practise, the more confident you become.",
    },
  },
  updatedAt: "2026-06-06",
};

export default harjoitella;
