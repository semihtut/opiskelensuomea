import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Partitive sg lihaa,
// partitive pl lihoja, genitive pl lihojen. Often a mass noun in the singular.
const liha: Word = {
  fi: "liha",
  slug: "liha",
  pos: "substantiivi (tyyppi: kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "meat",
  selitys:
    "Eläimen syötävä lihaskudos. Ei astevaihtelua. Usein ainesanana yksikössä.",
  kuva: { emoji: "🥩", alt: "liha – pala lihaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "lihaa", merkitys: "meat (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "lihan", merkitys: "of the meat" },
      { sija: "partitiivi (mon.)", muoto: "lihoja", merkitys: "meats (partitive pl.)" },
    ],
    huom: "Ainesanana enimmäkseen yksikössä. Monikko (lihoja) tarkoittaa eri lihalaatuja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "liha" },
          { label: "Partitiivi", form: "lihaa" },
          { label: "Genetiivi", form: "lihan" },
          { label: "Inessiivi", form: "lihassa" },
          { label: "Elatiivi", form: "lihasta" },
          { label: "Illatiivi", form: "lihaan" },
          { label: "Adessiivi", form: "lihalla" },
          { label: "Ablatiivi", form: "lihalta" },
          { label: "Allatiivi", form: "lihalle" },
          { label: "Essiivi", form: "lihana" },
          { label: "Translatiivi", form: "lihaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lihat" },
          { label: "Partitiivi", form: "lihoja" },
          { label: "Genetiivi", form: "lihojen" },
          { label: "Illatiivi", form: "lihoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lihapulla",
      en: "meatball",
      taso: "A2",
      esim: { fi: "Lihapullat ovat suosittu ruoka.", en: "Meatballs are a popular dish." },
    },
    {
      fi: "jauheliha",
      en: "ground meat, mince",
      taso: "B1",
      esim: { fi: "Ostin paketin jauhelihaa.", en: "I bought a packet of ground meat." },
    },
    {
      fi: "lihava",
      en: "fat, overweight",
      taso: "B1",
      esim: { fi: "Kissa on hieman lihava.", en: "The cat is a bit fat." },
    },
  ],
  synonyymit: [
    { fi: "naudanliha", en: "beef" },
    { fi: "sianliha", en: "pork" },
  ],
  esimerkit: {
    A2: { fi: "En syö lihaa.", en: "I don't eat meat." },
    B1: { fi: "Paistoin lihaa pannulla.", en: "I fried meat in the pan." },
    B2: {
      fi: "Punaisen lihan syöntiä kannattaa rajoittaa.",
      en: "It's worth limiting the consumption of red meat.",
    },
  },
  updatedAt: "2026-06-04",
};

export default liha;
