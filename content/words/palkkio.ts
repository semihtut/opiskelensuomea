import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem palkkio-.
// Genitive palkkion, partitive palkkiota, illative palkkioon, partitive pl palkkioita.
const palkkio: Word = {
  fi: "palkkio",
  slug: "palkkio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B1",
  en: "reward, fee, compensation, bonus",
  selitys:
    "Korvaus tai palkinto tehdystä työstä tai suorituksesta: 'maksaa palkkio', 'kokouspalkkio'. Tyyppi 3/valtio, ei astevaihtelua. Sanasta palkka. Vrt. palkka, palkita, palkinto.",
  kuva: { alt: "palkkio – korvaus tai palkinto tehdystä työstä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua (vartalo palkkio-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "palkkion", merkitys: "of the fee" },
      { sija: "partitiivi (yks.)", muoto: "palkkiota", merkitys: "fee (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "palkkioita", merkitys: "fees (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3/valtio: ei astevaihtelua. Partitiivi palkkiota, partitiivin monikko palkkioita, illatiivi palkkioon. Ero: palkka = säännöllinen palkka (salary), palkkio = kertakorvaus tai palkinto. Vrt. palkita, palkinto.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "palkkio" },
          { label: "Partitiivi", form: "palkkiota" },
          { label: "Genetiivi", form: "palkkion" },
          { label: "Inessiivi", form: "palkkiossa" },
          { label: "Elatiivi", form: "palkkiosta" },
          { label: "Illatiivi", form: "palkkioon" },
          { label: "Adessiivi", form: "palkkiolla" },
          { label: "Ablatiivi", form: "palkkiolta" },
          { label: "Allatiivi", form: "palkkiolle" },
          { label: "Essiivi", form: "palkkiona" },
          { label: "Translatiivi", form: "palkkioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "palkkiot" },
          { label: "Partitiivi", form: "palkkioita" },
          { label: "Genetiivi", form: "palkkioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "palkita",
      en: "to reward",
      taso: "B2",
      esim: { fi: "Hänet palkittiin hyvästä työstä.", en: "He was rewarded for good work." },
    },
    {
      fi: "palkinto",
      en: "prize, award",
      taso: "B1",
      esim: { fi: "Hän voitti ensimmäisen palkinnon.", en: "She won the first prize." },
    },
  ],
  synonyymit: [
    { fi: "korvaus", en: "compensation" },
    { fi: "bonus", en: "bonus" },
  ],
  esimerkit: {
    A2: { fi: "Sain pienen palkkion avusta.", en: "I got a small reward for helping." },
    B1: { fi: "Asiantuntijalle maksettiin palkkio luennosta.", en: "The expert was paid a fee for the lecture." },
    B2: {
      fi: "Hyvästä tuloksesta luvattiin palkkio, joka kannusti koko tiimiä.",
      en: "A bonus was promised for a good result, which motivated the whole team.",
    },
  },
  updatedAt: "2026-06-07",
};

export default palkkio;
