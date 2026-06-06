import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t–d gradation, stem mahdollisuude-.
// Genitive mahdollisuuden, partitive mahdollisuutta, illative mahdollisuuteen, partitive pl mahdollisuuksia.
const mahdollisuus: Word = {
  fi: "mahdollisuus",
  slug: "mahdollisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "possibility, chance, opportunity",
  selitys:
    "Se, että jokin voi tapahtua tai onnistua: 'hyvä mahdollisuus'. Tyyppi 40, astevaihtelu t:d (mahdollisuus → mahdollisuuden). Juuri mahdollinen + -uus. Vrt. tilaisuus (clearer opportunity).",
  kuva: { emoji: "🚪", alt: "mahdollisuus – se että jokin voi onnistua" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "mahdollisuuden", merkitys: "of the possibility" },
      { sija: "partitiivi (yks.)", muoto: "mahdollisuutta", merkitys: "possibility (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mahdollisuuksia", merkitys: "possibilities (partitive pl.)" },
    ],
    huom:
      "Loppu -uus → vartalo -uude-: mahdollisuus → mahdollisuuden. Astevaihtelu t:d: mahdollisuuden (d), partitiivi mahdollisuutta (t). Vrt. mahdollinen = possible, mahdollistaa = to enable.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "mahdollisuus" },
          { label: "Partitiivi", form: "mahdollisuutta" },
          { label: "Genetiivi", form: "mahdollisuuden" },
          { label: "Inessiivi", form: "mahdollisuudessa" },
          { label: "Elatiivi", form: "mahdollisuudesta" },
          { label: "Illatiivi", form: "mahdollisuuteen" },
          { label: "Adessiivi", form: "mahdollisuudella" },
          { label: "Ablatiivi", form: "mahdollisuudelta" },
          { label: "Allatiivi", form: "mahdollisuudelle" },
          { label: "Essiivi", form: "mahdollisuutena" },
          { label: "Translatiivi", form: "mahdollisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "mahdollisuudet" },
          { label: "Partitiivi", form: "mahdollisuuksia" },
          { label: "Genetiivi", form: "mahdollisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mahdollinen",
      en: "possible",
      taso: "B1",
      esim: { fi: "Se on täysin mahdollista.", en: "It is completely possible." },
    },
    {
      fi: "mahdollistaa",
      en: "to enable, make possible",
      taso: "B2",
      esim: { fi: "Tuki mahdollisti opinnot.", en: "The support made the studies possible." },
    },
    {
      fi: "mahdoton",
      en: "impossible",
      taso: "B1",
      esim: { fi: "Mikään ei ole mahdotonta.", en: "Nothing is impossible." },
    },
  ],
  synonyymit: [
    { fi: "tilaisuus", en: "opportunity, occasion" },
    { fi: "tila", en: "room, scope (for something)" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on mahdollisuus matkustaa.", en: "I have a chance to travel." },
    B1: { fi: "Käytä tämä mahdollisuus hyväksi.", en: "Make the most of this opportunity." },
    B2: {
      fi: "Jokainen kriisi tarjoaa myös mahdollisuuden oppia.",
      en: "Every crisis also offers an opportunity to learn.",
    },
  },
  updatedAt: "2026-06-06",
};

export default mahdollisuus;
