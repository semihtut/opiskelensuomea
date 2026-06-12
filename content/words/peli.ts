import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem peli-.
// Genitive pelin, partitive peliä, illative peliin, partitive pl pelejä.
const peli: Word = {
  fi: "peli",
  slug: "peli",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "game, match",
  selitys:
    "Sääntöjen mukaan pelattava toiminta tai ottelu: 'lautapeli' / 'jalkapallopeli'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko pelejä. Vrt. pelata (to play), pelaaja (player), videopeli (video game).",
  kuva: { alt: "peli – sääntöjen mukaan pelattava toiminta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pelin", merkitys: "of the game" },
      { sija: "partitiivi (yks.)", muoto: "peliä", merkitys: "game (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pelejä", merkitys: "games (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikko pelejä (e-vartalo). 'Pelata peliä' = to play a game. Vrt. pelata = to play, pelikenttä = playing field, lautapeli = board game.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "peli" },
          { label: "Partitiivi", form: "peliä" },
          { label: "Genetiivi", form: "pelin" },
          { label: "Inessiivi", form: "pelissä" },
          { label: "Elatiivi", form: "pelistä" },
          { label: "Illatiivi", form: "peliin" },
          { label: "Adessiivi", form: "pelillä" },
          { label: "Ablatiivi", form: "peliltä" },
          { label: "Allatiivi", form: "pelille" },
          { label: "Essiivi", form: "pelinä" },
          { label: "Translatiivi", form: "peliksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pelit" },
          { label: "Partitiivi", form: "pelejä" },
          { label: "Genetiivi", form: "pelien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pelaaja",
      en: "player",
      taso: "A2",
      esim: { fi: "Hän on joukkueen paras pelaaja.", en: "She is the team's best player." },
    },
    {
      fi: "videopeli",
      en: "video game",
      taso: "B1",
      esim: { fi: "Pojat pelaavat videopelejä.", en: "The boys play video games." },
    },
    {
      fi: "lautapeli",
      en: "board game",
      taso: "B1",
      esim: { fi: "Pelasimme lautapeliä illalla.", en: "We played a board game in the evening." },
    },
  ],
  synonyymit: [
    { fi: "ottelu", en: "match, game" },
    { fi: "leikki", en: "play (children's)" },
  ],
  esimerkit: {
    A2: { fi: "Katsoin jalkapallopelin.", en: "I watched a football match." },
    B1: { fi: "Peli päättyi tasapeliin.", en: "The game ended in a draw." },
    B2: {
      fi: "Pelin säännöt selitettiin huolellisesti ennen aloitusta.",
      en: "The rules of the game were explained carefully before the start.",
    },
  },
  updatedAt: "2026-06-06",
};

export default peli;
