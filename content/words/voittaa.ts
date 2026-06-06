import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem voitta- ~ voita-.
// Present voitan, past voitin, past participle voittanut.
const voittaa: Word = {
  fi: "voittaa",
  slug: "voittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to win, to beat; to overcome",
  selitys:
    "Päästä voittajaksi tai päihittää: 'voittaa peli'. Tyyppi 1 (-aa), astevaihtelu tt:t (voitan, mutta voittaa). Vastustaja partitiivissa. Vrt. voitto (victory), voittaja (winner), hävitä (to lose).",
  kuva: { emoji: "🏆", alt: "voittaa – päästä voittajaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (voitta- ↔ voita-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "voitan", merkitys: "I win" },
      { sija: "imperfekti (minä)", muoto: "voitin", merkitys: "I won" },
      { sija: "NUT-partisiippi", muoto: "voittanut", merkitys: "(have) won" },
    ],
    huom:
      "Persoonamuodoissa heikko t (voitan), infinitiivissä vahva tt (voittaa). Vastustaja partitiivissa: 'voitin hänet'. 'Voittaa pelin / kilpailun.' Vrt. voitto = victory/profit, hävitä = to lose.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "voitan" },
          { label: "sinä", form: "voitat" },
          { label: "hän", form: "voittaa" },
          { label: "me", form: "voitamme" },
          { label: "te", form: "voitatte" },
          { label: "he", form: "voittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en voita" },
          { label: "hän", form: "ei voita" },
          { label: "he", form: "eivät voita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "voitin" },
          { label: "sinä", form: "voitit" },
          { label: "hän", form: "voitti" },
          { label: "me", form: "voitimme" },
          { label: "te", form: "voititte" },
          { label: "he", form: "voittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen voittanut" },
          { label: "hän", form: "on voittanut" },
          { label: "he", form: "ovat voittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "voita!" },
          { label: "te", form: "voittakaa!" },
          { label: "kielto (sinä)", form: "älä voita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "voitto",
      en: "victory, win; profit",
      taso: "B1",
      esim: { fi: "Joukkue juhli voittoa.", en: "The team celebrated the victory." },
    },
    {
      fi: "voittaja",
      en: "winner",
      taso: "A2",
      esim: { fi: "Kilpailun voittaja sai palkinnon.", en: "The winner of the competition got a prize." },
    },
    {
      fi: "voitokas",
      en: "victorious, winning",
      taso: "B2",
      esim: { fi: "Se oli voitokas kausi.", en: "It was a victorious season." },
    },
  ],
  synonyymit: [
    { fi: "päihittää", en: "to defeat, beat" },
    { fi: "saavuttaa", en: "to achieve, attain" },
  ],
  esimerkit: {
    A2: { fi: "Voitimme pelin!", en: "We won the game!" },
    B1: { fi: "Hän voitti kilpailun toista kertaa.", en: "She won the competition for the second time." },
    B2: {
      fi: "Päättäväisyydellä voi voittaa suuriakin esteitä.",
      en: "With determination one can overcome even great obstacles.",
    },
  },
  updatedAt: "2026-06-06",
};

export default voittaa;
