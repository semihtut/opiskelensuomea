import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation. Genitive
// kysymyksen, partitive kysymystä, illative kysymykseen, partitive pl kysymyksiä.
const kysymys: Word = {
  fi: "kysymys",
  slug: "kysymys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "question",
  selitys:
    "Ilmaus, johon odotetaan vastausta; myös 'asia, ongelma'. Tyyppi 39, ei astevaihtelua. Juuri verbistä kysyä.",
  kuva: { emoji: "❓", alt: "kysymys – kysymysmerkki" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kysymyksen", merkitys: "of the question" },
      { sija: "partitiivi (yks.)", muoto: "kysymystä", merkitys: "question (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kysymyksiä", merkitys: "questions (partitive pl.)" },
    ],
    huom:
      "Vartalo kysymykse- taivutuksessa; partitiivi kysymystä. Monikon genetiivi kysymysten ~ kysymyksien. Pari: kysymys ↔ vastaus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kysymys" },
          { label: "Partitiivi", form: "kysymystä" },
          { label: "Genetiivi", form: "kysymyksen" },
          { label: "Inessiivi", form: "kysymyksessä" },
          { label: "Elatiivi", form: "kysymyksestä" },
          { label: "Illatiivi", form: "kysymykseen" },
          { label: "Adessiivi", form: "kysymyksellä" },
          { label: "Ablatiivi", form: "kysymykseltä" },
          { label: "Allatiivi", form: "kysymykselle" },
          { label: "Essiivi", form: "kysymyksenä" },
          { label: "Translatiivi", form: "kysymykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kysymykset" },
          { label: "Partitiivi", form: "kysymyksiä" },
          { label: "Genetiivi", form: "kysymysten" },
          { label: "Inessiivi", form: "kysymyksissä" },
          { label: "Illatiivi", form: "kysymyksiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kysyä",
      en: "to ask",
      taso: "A1",
      esim: { fi: "Saanko kysyä jotain?", en: "May I ask something?" },
    },
    {
      fi: "kyselytutkimus",
      en: "survey, questionnaire study",
      taso: "B2",
      esim: { fi: "Teimme asiakkaille kyselytutkimuksen.", en: "We ran a survey among customers." },
    },
    {
      fi: "kyseenalainen",
      en: "questionable, dubious",
      taso: "B2",
      esim: { fi: "Tieto oli kyseenalaista.", en: "The information was questionable." },
    },
  ],
  synonyymit: [
    { fi: "tiedustelu", en: "inquiry" },
    { fi: "asia", en: "matter, issue" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on yksi kysymys.", en: "I have one question." },
    B1: { fi: "Opettaja vastasi kaikkiin kysymyksiin.", en: "The teacher answered all the questions." },
    B2: {
      fi: "Tämä on vaikea kysymys, johon ei ole helppoa vastausta.",
      en: "This is a difficult question with no easy answer.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kysymys;
