import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 69/valita (-tse- stem), no gradation.
// Present minä tuomitsen, hän tuomitsee; imperfect minä tuomitsin; NUT tuominnut; passive tuomitaan.
const tuomita: Word = {
  fi: "tuomita",
  slug: "tuomita",
  pos: "verbi (tyyppi 5)",
  posClass: "verbi",
  level: "B2",
  en: "to sentence, condemn, convict; to judge",
  selitys:
    "1) Antaa tuomio oikeudessa: 'tuomita vankeuteen'. 2) Arvostella ankarasti, paheksua. 3) Urheilussa: toimia tuomarina. Tyyppi 5 (-ita), Kotus 69/valita, vartalo tuomitse-. NUT-partisiippi tuominnut. Vrt. tuomio, tuomari, tuomitseva.",
  kuva: { emoji: "🔨", alt: "tuomita – antaa tuomio oikeudessa tai arvostella ankarasti" },

  kielioppi: {
    tyyppi: "tyyppi 5 (-ita), Kotus 69/valita; vartalo tuomitse- (ei astevaihtelua)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tuomitsen", merkitys: "I sentence" },
      { sija: "imperfekti (minä)", muoto: "tuomitsin", merkitys: "I sentenced" },
      { sija: "NUT-partisiippi", muoto: "tuominnut", merkitys: "(have) sentenced" },
    ],
    huom:
      "Tyyppi 69/valita: vartalo -tse- (tuomitsen, tuomitsee, tuomitsin), mutta NUT-partisiippi on tuominnut (ei tuomitsenut) ja passiivi tuomitaan. Rektio: 'tuomita johonkin' (illat.: tuomita vankeuteen). Vrt. tuomio, tuomari.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tuomitsen" },
          { label: "sinä", form: "tuomitset" },
          { label: "hän", form: "tuomitsee" },
          { label: "me", form: "tuomitsemme" },
          { label: "te", form: "tuomitsette" },
          { label: "he", form: "tuomitsevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tuomitse" },
          { label: "hän", form: "ei tuomitse" },
          { label: "he", form: "eivät tuomitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tuomitsin" },
          { label: "sinä", form: "tuomitsit" },
          { label: "hän", form: "tuomitsi" },
          { label: "me", form: "tuomitsimme" },
          { label: "te", form: "tuomitsitte" },
          { label: "he", form: "tuomitsivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tuominnut" },
          { label: "hän", form: "on tuominnut" },
          { label: "he", form: "ovat tuominneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tuomitse!" },
          { label: "te", form: "tuomitkaa!" },
          { label: "kielto (sinä)", form: "älä tuomitse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuomio",
      en: "verdict, sentence",
      taso: "B1",
      esim: { fi: "Tuomio luettiin oikeudessa.", en: "The verdict was read in court." },
    },
    {
      fi: "tuomittu",
      en: "convicted (person); sentenced",
      taso: "B2",
      esim: { fi: "Tuomittu vietiin vankilaan.", en: "The convict was taken to prison." },
    },
  ],
  synonyymit: [
    { fi: "langettaa tuomio", en: "to pass sentence" },
    { fi: "paheksua", en: "to condemn, disapprove of" },
  ],
  esimerkit: {
    A2: { fi: "Älä tuomitse muita.", en: "Don't judge others." },
    B1: { fi: "Hänet tuomittiin sakkoihin.", en: "He was sentenced to a fine." },
    B2: {
      fi: "Oikeus tuomitsi syytetyn kahdeksi vuodeksi vankeuteen.",
      en: "The court sentenced the defendant to two years in prison.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuomita;
