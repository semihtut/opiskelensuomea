import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem ylennykse-.
// Genitive ylennyksen, partitive ylennystä, partitive pl ylennyksiä.
const ylennys: Word = {
  fi: "ylennys",
  slug: "ylennys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B2",
  en: "promotion (in rank or position)",
  selitys:
    "Eteneminen korkeampaan asemaan tai arvoon työssä: 'saada ylennys'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä ylentää. Vrt. ylentää, ura, esimies.",
  kuva: { alt: "ylennys – eteneminen korkeampaan asemaan työssä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo ylennykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ylennyksen", merkitys: "of the promotion" },
      { sija: "partitiivi (yks.)", muoto: "ylennystä", merkitys: "promotion (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ylennyksiä", merkitys: "promotions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Teonnimi verbistä ylentää. 'Saada ylennys' = to get a promotion. Vrt. ylentää, korotus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ylennys" },
          { label: "Partitiivi", form: "ylennystä" },
          { label: "Genetiivi", form: "ylennyksen" },
          { label: "Inessiivi", form: "ylennyksessä" },
          { label: "Elatiivi", form: "ylennyksestä" },
          { label: "Illatiivi", form: "ylennykseen" },
          { label: "Adessiivi", form: "ylennyksellä" },
          { label: "Ablatiivi", form: "ylennykseltä" },
          { label: "Allatiivi", form: "ylennykselle" },
          { label: "Essiivi", form: "ylennyksenä" },
          { label: "Translatiivi", form: "ylennykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ylennykset" },
          { label: "Partitiivi", form: "ylennyksiä" },
          { label: "Genetiivi", form: "ylennyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ylentää",
      en: "to promote (someone)",
      taso: "B2",
      esim: { fi: "Hänet ylennettiin osastopäälliköksi.", en: "She was promoted to department head." },
    },
    {
      fi: "korotus",
      en: "raise, increase",
      taso: "B2",
      esim: { fi: "Sain palkankorotuksen.", en: "I got a pay raise." },
    },
  ],
  synonyymit: [
    { fi: "ylentäminen", en: "promoting" },
  ],
  esimerkit: {
    A2: { fi: "Hän sai ylennyksen.", en: "He got a promotion." },
    B1: { fi: "Ahkera työ johti ylennykseen.", en: "Hard work led to a promotion." },
    B2: {
      fi: "Ylennys toi mukanaan enemmän vastuuta mutta myös paremman palkan.",
      en: "The promotion brought more responsibility but also a better salary.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ylennys;
