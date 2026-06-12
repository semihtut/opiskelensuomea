import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem lihakse-.
// Genitive lihaksen, partitive lihasta, partitive pl lihaksia.
const lihas: Word = {
  fi: "lihas",
  slug: "lihas",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "muscle",
  selitys:
    "Kehon kudos, joka liikuttaa kehoa: 'vahva lihas', 'lihakset ovat kipeät'. Tyyppi 39/vastaus, ei astevaihtelua (-s → -kse-). Sanasta liha. Vrt. liha, lihaskunto, voima.",
  kuva: { alt: "lihas – kehon kudos joka liikuttaa kehoa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo lihakse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lihaksen", merkitys: "of the muscle" },
      { sija: "partitiivi (yks.)", muoto: "lihasta", merkitys: "muscle (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lihaksia", merkitys: "muscles (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-as): genetiivi -akse-n, partitiivi -as-ta, partitiivin monikko -aksia. Sanasta liha + -s. Lihaskunto, lihasvoima, lihaskipu. Vrt. liha = meat/flesh.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lihas" },
          { label: "Partitiivi", form: "lihasta" },
          { label: "Genetiivi", form: "lihaksen" },
          { label: "Inessiivi", form: "lihaksessa" },
          { label: "Elatiivi", form: "lihaksesta" },
          { label: "Illatiivi", form: "lihakseen" },
          { label: "Adessiivi", form: "lihaksella" },
          { label: "Ablatiivi", form: "lihakselta" },
          { label: "Allatiivi", form: "lihakselle" },
          { label: "Essiivi", form: "lihaksena" },
          { label: "Translatiivi", form: "lihakseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lihakset" },
          { label: "Partitiivi", form: "lihaksia" },
          { label: "Genetiivi", form: "lihaksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lihaskunto",
      en: "muscle fitness",
      taso: "B2",
      esim: { fi: "Treenaan lihaskuntoa kahdesti viikossa.", en: "I train muscle fitness twice a week." },
    },
    {
      fi: "lihaskipu",
      en: "muscle pain",
      taso: "B1",
      esim: { fi: "Minulla on lihaskipuja juoksun jälkeen.", en: "I have muscle pains after running." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lihakset ovat kipeät.", en: "The muscles are sore." },
    B1: { fi: "Urheilu vahvistaa lihaksia.", en: "Sport strengthens the muscles." },
    B2: {
      fi: "Venyttely auttaa lihaksia palautumaan rasituksesta.",
      en: "Stretching helps the muscles recover from strain.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lihas;
