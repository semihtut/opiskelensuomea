import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem kuva-.
// Genitive kuvan, partitive kuvaa, illative kuvaan, partitive pl kuvia.
const kuva: Word = {
  fi: "kuva",
  slug: "kuva",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "picture, image, photo",
  selitys:
    "Näkyvä esitys tai valokuva: 'ottaa kuva'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko kuvia. Vrt. kuvata (to film/describe), valokuva (photograph), kuvitella (to imagine).",
  kuva: { emoji: "🖼️", alt: "kuva – näkyvä esitys tai valokuva" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kuvan", merkitys: "of the picture" },
      { sija: "partitiivi (yks.)", muoto: "kuvaa", merkitys: "picture (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kuvia", merkitys: "pictures (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikko kuvia (i-vartalo). 'Ottaa kuva' = to take a photo. Vrt. valokuva = photograph, kuvata = to film/depict, kuvaaja = photographer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kuva" },
          { label: "Partitiivi", form: "kuvaa" },
          { label: "Genetiivi", form: "kuvan" },
          { label: "Inessiivi", form: "kuvassa" },
          { label: "Elatiivi", form: "kuvasta" },
          { label: "Illatiivi", form: "kuvaan" },
          { label: "Adessiivi", form: "kuvalla" },
          { label: "Ablatiivi", form: "kuvalta" },
          { label: "Allatiivi", form: "kuvalle" },
          { label: "Essiivi", form: "kuvana" },
          { label: "Translatiivi", form: "kuvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kuvat" },
          { label: "Partitiivi", form: "kuvia" },
          { label: "Genetiivi", form: "kuvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "valokuva",
      en: "photograph",
      taso: "A2",
      esim: { fi: "Otin valokuvan maisemasta.", en: "I took a photograph of the landscape." },
    },
    {
      fi: "kuvitella",
      en: "to imagine",
      taso: "B1",
      esim: { fi: "Kuvittele, että voitit lotossa.", en: "Imagine you won the lottery." },
    },
    {
      fi: "kuvataide",
      en: "visual art, fine art",
      taso: "B2",
      esim: { fi: "Hän opiskelee kuvataidetta.", en: "She studies visual art." },
    },
  ],
  synonyymit: [
    { fi: "valokuva", en: "photo" },
    { fi: "piirros", en: "drawing" },
  ],
  esimerkit: {
    A2: { fi: "Seinällä on iso kuva.", en: "There's a big picture on the wall." },
    B1: { fi: "Lähetän sinulle kuvia lomalta.", en: "I'll send you pictures from the holiday." },
    B2: {
      fi: "Yksi kuva voi kertoa enemmän kuin tuhat sanaa.",
      en: "One picture can tell more than a thousand words.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kuva;
