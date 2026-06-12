import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, lp:lv gradation, stem halpa- ~ halva-.
// Genitive halvan, partitive halpaa, partitive pl halpoja. Comparative halvempi, superlative halvin.
const halpa: Word = {
  fi: "halpa",
  slug: "halpa",
  pos: "adjektiivi (tyyppi 9/kala)",
  posClass: "adjektiivi",
  level: "A2",
  en: "cheap, inexpensive",
  selitys:
    "Vähän maksava tai huonolaatuinen: 'halpa lippu'. Tyyppi 9, astevaihtelu lp:lv (halpa → halvan). Partitiivin monikko halpoja. Vertailu halvempi – halvin. Vastakohta kallis.",
  kuva: { alt: "halpa – vähän maksava" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 9/kala; astevaihtelu lp:lv (halpa ↔ halva-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "halvan", merkitys: "of the cheap (one)" },
      { sija: "partitiivi (yks.)", muoto: "halpaa", merkitys: "cheap (partitive)" },
      { sija: "komparatiivi", muoto: "halvempi", merkitys: "cheaper" },
      { sija: "superlatiivi", muoto: "halvin", merkitys: "cheapest" },
    ],
    huom:
      "Heikossa asteessa lp → lv: genetiivi halvan, monikko halvat. Vahva aste lp säilyy partitiivissa halpaa ja monikossa halpoja. Vertailu halvempi – halvin. Vastakohta kallis.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "halpa" },
          { label: "Partitiivi", form: "halpaa" },
          { label: "Genetiivi", form: "halvan" },
          { label: "Inessiivi", form: "halvassa" },
          { label: "Elatiivi", form: "halvasta" },
          { label: "Illatiivi", form: "halpaan" },
          { label: "Adessiivi", form: "halvalla" },
          { label: "Ablatiivi", form: "halvalta" },
          { label: "Allatiivi", form: "halvalle" },
          { label: "Essiivi", form: "halpana" },
          { label: "Translatiivi", form: "halvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "halvat" },
          { label: "Partitiivi", form: "halpoja" },
          { label: "Genetiivi", form: "halpojen" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "halpa" },
          { label: "Komparatiivi", form: "halvempi" },
          { label: "Superlatiivi", form: "halvin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "halpuuttaa",
      en: "to slash prices, make cheaper",
      taso: "B2",
      esim: { fi: "Kauppa halpuutti maidon hintaa.", en: "The shop slashed the price of milk." },
    },
    {
      fi: "halpamainen",
      en: "cheap, mean (of behaviour)",
      taso: "B2",
      esim: { fi: "Se oli halpamainen temppu.", en: "That was a cheap trick." },
    },
    {
      fi: "halpalentoyhtiö",
      en: "budget airline",
      taso: "B2",
      esim: { fi: "Matkustimme halpalentoyhtiöllä.", en: "We travelled with a budget airline." },
    },
  ],
  synonyymit: [
    { fi: "edullinen", en: "affordable, good-value" },
    { fi: "huokea", en: "cheap, low-priced" },
  ],
  esimerkit: {
    A2: { fi: "Tämä takki on halpa.", en: "This coat is cheap." },
    B1: { fi: "Löysin halvemman lipun netistä.", en: "I found a cheaper ticket online." },
    B2: {
      fi: "Halvin vaihtoehto ei aina ole paras, jos laatu on huono.",
      en: "The cheapest option isn't always the best if the quality is poor.",
    },
  },
  updatedAt: "2026-06-06",
};

export default halpa;
