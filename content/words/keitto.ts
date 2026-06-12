import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem keitto- ~ keito-.
// Genitive keiton, partitive keittoa, illative keittoon, partitive pl keittoja.
const keitto: Word = {
  fi: "keitto",
  slug: "keitto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "soup",
  selitys:
    "Vedessä keitetty nestemäinen ruoka: 'lämmin keitto'. Tyyppi 1, astevaihtelu tt:t (keitto → keiton). Partitiivin monikko keittoja. Johdettu verbistä keittää. Vrt. kalakeitto, keittiö.",
  kuva: { alt: "keitto – vedessä keitetty nestemäinen ruoka" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (keitto ↔ keito-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "keiton", merkitys: "of the soup" },
      { sija: "partitiivi (yks.)", muoto: "keittoa", merkitys: "soup (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "keittoja", merkitys: "soups (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi keiton, adessiivi keitolla. Vahva aste tt säilyy partitiivissa keittoa ja monikossa keittoja. Vrt. kalakeitto = fish soup, keittää = to cook/boil.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "keitto" },
          { label: "Partitiivi", form: "keittoa" },
          { label: "Genetiivi", form: "keiton" },
          { label: "Inessiivi", form: "keitossa" },
          { label: "Elatiivi", form: "keitosta" },
          { label: "Illatiivi", form: "keittoon" },
          { label: "Adessiivi", form: "keitolla" },
          { label: "Ablatiivi", form: "keitolta" },
          { label: "Allatiivi", form: "keitolle" },
          { label: "Essiivi", form: "keittona" },
          { label: "Translatiivi", form: "keitoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keitot" },
          { label: "Partitiivi", form: "keittoja" },
          { label: "Genetiivi", form: "keittojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kalakeitto",
      en: "fish soup",
      taso: "B1",
      esim: { fi: "Kalakeitto on perinteinen ruoka.", en: "Fish soup is a traditional dish." },
    },
    {
      fi: "keittää",
      en: "to cook, boil",
      taso: "A2",
      esim: { fi: "Keitän keittoa lounaaksi.", en: "I'm making soup for lunch." },
    },
    {
      fi: "sosekeitto",
      en: "puréed soup",
      taso: "B2",
      esim: { fi: "Tein porkkanasta sosekeittoa.", en: "I made puréed soup from carrots." },
    },
  ],
  synonyymit: [
    { fi: "soppa", en: "soup (colloquial)" },
    { fi: "liemi", en: "broth, stock" },
  ],
  esimerkit: {
    A2: { fi: "Söin lämmintä keittoa.", en: "I ate warm soup." },
    B1: { fi: "Keitto maistui suolaiselta.", en: "The soup tasted salty." },
    B2: {
      fi: "Kylmänä päivänä lämmin keitto lämmittää koko kehon.",
      en: "On a cold day, warm soup heats up the whole body.",
    },
  },
  updatedAt: "2026-06-07",
};

export default keitto;
