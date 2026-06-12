import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, kk:k gradation, stem itsekkä(ä)- ~ itsekäs.
// Genitive itsekkään, partitive itsekästä, partitive pl itsekkäitä.
const itsekas: Word = {
  fi: "itsekäs",
  slug: "itsekäs",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "B1",
  en: "selfish, self-centred",
  selitys:
    "Sellainen, joka ajattelee vain itseään: 'itsekäs käytös'. Tyyppi 41/vieras, astevaihtelu kk:k (itsekäs → itsekkään). Yhdyssana itse + -käs. Vastakohta epäitsekäs, altruistinen. Vrt. itsekkyys, itse.",
  kuva: { alt: "itsekäs – vain itseään ajatteleva" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; astevaihtelu kk:k (vartalo itsekkää-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "itsekkään", merkitys: "of selfish" },
      { sija: "partitiivi (yks.)", muoto: "itsekästä", merkitys: "selfish (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "itsekkäitä", merkitys: "selfish (partitive pl.)" },
    ],
    huom:
      "Tyyppi 41 (-käs): nominatiivi itsekäs (heikko k), genetiivi itsekkään (vahva kk, pitkä vokaali), partitiivi itsekästä. Yhdyssana itse + -käs. Vrt. itsekkyys = selfishness.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "itsekäs" },
          { label: "Partitiivi", form: "itsekästä" },
          { label: "Genetiivi", form: "itsekkään" },
          { label: "Inessiivi", form: "itsekkäässä" },
          { label: "Elatiivi", form: "itsekkäästä" },
          { label: "Illatiivi", form: "itsekkääseen" },
          { label: "Adessiivi", form: "itsekkäällä" },
          { label: "Allatiivi", form: "itsekkäälle" },
          { label: "Translatiivi", form: "itsekkääksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "itsekkäät" },
          { label: "Partitiivi", form: "itsekkäitä" },
          { label: "Genetiivi", form: "itsekkäiden" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "itsekäs" },
          { label: "Komparatiivi", form: "itsekkäämpi" },
          { label: "Superlatiivi", form: "itsekkäin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "itsekkyys",
      en: "selfishness",
      taso: "B2",
      esim: { fi: "Itsekkyys pilaa ystävyyden.", en: "Selfishness spoils a friendship." },
    },
    {
      fi: "epäitsekäs",
      en: "unselfish, altruistic",
      taso: "B2",
      esim: { fi: "Hän on epäitsekäs auttaja.", en: "She is an unselfish helper." },
    },
  ],
  synonyymit: [
    { fi: "omahyväinen", en: "self-satisfied" },
    { fi: "itsekeskeinen", en: "self-centred" },
  ],
  esimerkit: {
    A2: { fi: "Älä ole niin itsekäs.", en: "Don't be so selfish." },
    B1: { fi: "Se oli itsekäs päätös.", en: "It was a selfish decision." },
    B2: {
      fi: "Hänen itsekkäät tekonsa loukkasivat lopulta koko tiimiä.",
      en: "His selfish actions eventually hurt the whole team.",
    },
  },
  updatedAt: "2026-06-07",
};

export default itsekas;
