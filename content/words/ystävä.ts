import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ystävä-.
// Partitive sg ystävää, partitive pl ystäviä, genitive pl ystävien.
const ystävä: Word = {
  fi: "ystävä",
  slug: "ystävä",
  pos: "substantiivi (tyyppi: koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "friend",
  selitys:
    "Henkilö, johon on läheinen ja luottavainen suhde. Lämpimämpi ja muodollisempi kuin 'kaveri'. Vartalo ystävä-, ei astevaihtelua.",
  kuva: { alt: "ystävä – läheinen henkilö, kättely" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "ystävää", merkitys: "friend (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "ystävän", merkitys: "of the friend" },
      { sija: "partitiivi (mon.)", muoto: "ystäviä", merkitys: "friends (partitive pl.)" },
    ],
    huom: "Monikossa vartalon ä → i: ystävät, ystäviä, ystävien.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ystävä" },
          { label: "Partitiivi", form: "ystävää" },
          { label: "Genetiivi", form: "ystävän" },
          { label: "Inessiivi", form: "ystävässä" },
          { label: "Elatiivi", form: "ystävästä" },
          { label: "Illatiivi", form: "ystävään" },
          { label: "Adessiivi", form: "ystävällä" },
          { label: "Ablatiivi", form: "ystävältä" },
          { label: "Allatiivi", form: "ystävälle" },
          { label: "Essiivi", form: "ystävänä" },
          { label: "Translatiivi", form: "ystäväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ystävät" },
          { label: "Partitiivi", form: "ystäviä" },
          { label: "Genetiivi", form: "ystävien" },
          { label: "Inessiivi", form: "ystävissä" },
          { label: "Illatiivi", form: "ystäviin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ystävällinen",
      en: "friendly, kind",
      taso: "A2",
      esim: { fi: "Myyjä oli hyvin ystävällinen.", en: "The salesperson was very friendly." },
    },
    {
      fi: "ystävyys",
      en: "friendship",
      taso: "B1",
      esim: { fi: "Heidän ystävyytensä kesti vuosikymmeniä.", en: "Their friendship lasted decades." },
    },
    {
      fi: "ystävätär",
      en: "female friend",
      taso: "B2",
      esim: { fi: "Hän matkusti ystävättärensä kanssa.", en: "She traveled with her female friend." },
    },
  ],
  synonyymit: [
    { fi: "kaveri", en: "buddy, pal (more casual)" },
    { fi: "tuttava", en: "acquaintance (less close)" },
  ],
  esimerkit: {
    A2: { fi: "Hän on hyvä ystävä.", en: "He/she is a good friend." },
    B1: { fi: "Tapasin vanhan ystäväni kaupungissa.", en: "I met my old friend in town." },
    B2: {
      fi: "Todellinen ystävä auttaa vaikeina aikoina.",
      en: "A true friend helps in difficult times.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ystävä;
