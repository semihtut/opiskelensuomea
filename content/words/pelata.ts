import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, no gradation, stem pelaa- ~ pela-.
// Present pelaan, past pelasin, past participle pelannut.
const pelata: Word = {
  fi: "pelata",
  slug: "pelata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to play (a game/sport)",
  selitys:
    "Osallistua peliin tai urheiluun: 'pelata jalkapalloa'. Tyyppi 4 (-ata), ei astevaihtelua, vartalo pelaa-. Kohde partitiivissa. Vrt. peli (game), pelaaja (player), leikkiä (to play, children).",
  kuva: { alt: "pelata – osallistua peliin tai urheiluun" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo pelaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "pelaan", merkitys: "I play" },
      { sija: "imperfekti (minä)", muoto: "pelasin", merkitys: "I played" },
      { sija: "NUT-partisiippi", muoto: "pelannut", merkitys: "(have) played" },
    ],
    huom:
      "Preesensissä pitkä vartalo pelaa- (pelaan, pelaat), imperfektissä -si- (pelasin). Kohde partitiivissa: 'pelata tennistä'. HUOM: pelata = pelit/urheilu; leikkiä = lasten leikki.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pelaan" },
          { label: "sinä", form: "pelaat" },
          { label: "hän", form: "pelaa" },
          { label: "me", form: "pelaamme" },
          { label: "te", form: "pelaatte" },
          { label: "he", form: "pelaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pelaa" },
          { label: "hän", form: "ei pelaa" },
          { label: "he", form: "eivät pelaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pelasin" },
          { label: "sinä", form: "pelasit" },
          { label: "hän", form: "pelasi" },
          { label: "me", form: "pelasimme" },
          { label: "te", form: "pelasitte" },
          { label: "he", form: "pelasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pelannut" },
          { label: "hän", form: "on pelannut" },
          { label: "he", form: "ovat pelanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pelaa!" },
          { label: "te", form: "pelatkaa!" },
          { label: "kielto (sinä)", form: "älä pelaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pelaaja",
      en: "player",
      taso: "A2",
      esim: { fi: "Joukkueessa on yksitoista pelaajaa.", en: "There are eleven players on the team." },
    },
    {
      fi: "peli",
      en: "game",
      taso: "A2",
      esim: { fi: "Aloitetaan uusi peli.", en: "Let's start a new game." },
    },
    {
      fi: "pelailla",
      en: "to play casually, mess around with games",
      taso: "B2",
      esim: { fi: "Pelailen joskus iltaisin.", en: "I sometimes play games in the evenings." },
    },
  ],
  synonyymit: [
    { fi: "ottaa osaa peliin", en: "to take part in a game" },
    { fi: "kisata", en: "to compete" },
  ],
  esimerkit: {
    A2: { fi: "Pelaan jalkapalloa joka viikko.", en: "I play football every week." },
    B1: { fi: "Pelasimme korttia myöhään yöhön.", en: "We played cards late into the night." },
    B2: {
      fi: "Joukkue pelasi hienosti ja voitti ottelun selvästi.",
      en: "The team played splendidly and won the match clearly.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pelata;
