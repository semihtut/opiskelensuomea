import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem äänestykse-.
// Genitive äänestyksen, partitive äänestystä, partitive pl äänestyksiä.
const aanestys: Word = {
  fi: "äänestys",
  slug: "äänestys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "vote, voting, ballot",
  selitys:
    "Tapahtuma, jossa ratkaistaan asia äänillä: 'järjestää äänestys'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä äänestää. Vrt. äänestää, ääni, vaalit.",
  kuva: { emoji: "🗳️", alt: "äänestys – tapahtuma jossa asia ratkaistaan äänillä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo äänestykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "äänestyksen", merkitys: "of the vote" },
      { sija: "partitiivi (yks.)", muoto: "äänestystä", merkitys: "vote (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "äänestyksiä", merkitys: "votes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Johdettu verbistä äänestää. 'Suorittaa äänestys' = to hold a vote. Vrt. äänestää = to vote, vaalit = elections.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "äänestys" },
          { label: "Partitiivi", form: "äänestystä" },
          { label: "Genetiivi", form: "äänestyksen" },
          { label: "Inessiivi", form: "äänestyksessä" },
          { label: "Elatiivi", form: "äänestyksestä" },
          { label: "Illatiivi", form: "äänestykseen" },
          { label: "Adessiivi", form: "äänestyksellä" },
          { label: "Ablatiivi", form: "äänestykseltä" },
          { label: "Allatiivi", form: "äänestykselle" },
          { label: "Essiivi", form: "äänestyksenä" },
          { label: "Translatiivi", form: "äänestykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "äänestykset" },
          { label: "Partitiivi", form: "äänestyksiä" },
          { label: "Genetiivi", form: "äänestyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "äänestää",
      en: "to vote",
      taso: "B1",
      esim: { fi: "Äänestin vaaleissa.", en: "I voted in the election." },
    },
    {
      fi: "äänestäjä",
      en: "voter",
      taso: "B2",
      esim: { fi: "Äänestäjät jonottivat pitkään.", en: "The voters queued for a long time." },
    },
  ],
  synonyymit: [
    { fi: "vaalit", en: "elections" },
    { fi: "ääntenlasku", en: "vote count" },
  ],
  esimerkit: {
    A2: { fi: "Pidämme äänestyksen.", en: "We'll hold a vote." },
    B1: { fi: "Äänestys ratkaisi asian.", en: "The vote settled the matter." },
    B2: {
      fi: "Tiukan äänestyksen jälkeen ehdotus hyväksyttiin niukasti.",
      en: "After a close vote, the proposal was narrowly approved.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aanestys;
