import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem tutkimukse-.
// Genitive tutkimuksen, partitive tutkimusta, partitive pl tutkimuksia.
const tutkimus: Word = {
  fi: "tutkimus",
  slug: "tutkimus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "research, study, investigation",
  selitys:
    "Järjestelmällinen tiedon hankinta tai sen tulos: 'tehdä tutkimus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä tutkia. Vrt. tutkia, tutkija, tiede.",
  kuva: { emoji: "📊", alt: "tutkimus – järjestelmällinen tiedon hankinta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo tutkimukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tutkimuksen", merkitys: "of the study" },
      { sija: "partitiivi (yks.)", muoto: "tutkimusta", merkitys: "study (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tutkimuksia", merkitys: "studies (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä tutkia. Voi tarkoittaa myös lääkärin tutkimusta. Vrt. tutkia = to research, tutkija = researcher.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tutkimus" },
          { label: "Partitiivi", form: "tutkimusta" },
          { label: "Genetiivi", form: "tutkimuksen" },
          { label: "Inessiivi", form: "tutkimuksessa" },
          { label: "Elatiivi", form: "tutkimuksesta" },
          { label: "Illatiivi", form: "tutkimukseen" },
          { label: "Adessiivi", form: "tutkimuksella" },
          { label: "Ablatiivi", form: "tutkimukselta" },
          { label: "Allatiivi", form: "tutkimukselle" },
          { label: "Essiivi", form: "tutkimuksena" },
          { label: "Translatiivi", form: "tutkimukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tutkimukset" },
          { label: "Partitiivi", form: "tutkimuksia" },
          { label: "Genetiivi", form: "tutkimuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tutkia",
      en: "to research, study, examine",
      taso: "B1",
      esim: { fi: "Tutkin asiaa tarkemmin.", en: "I'll look into the matter more closely." },
    },
    {
      fi: "tutkija",
      en: "researcher",
      taso: "B1",
      esim: { fi: "Tutkija esitteli löytönsä.", en: "The researcher presented her finding." },
    },
  ],
  synonyymit: [
    { fi: "selvitys", en: "report, inquiry" },
    { fi: "tarkastus", en: "examination, check" },
  ],
  esimerkit: {
    A2: { fi: "Luin uuden tutkimuksen.", en: "I read a new study." },
    B1: { fi: "Tutkimus osoitti selvän yhteyden.", en: "The study showed a clear connection." },
    B2: {
      fi: "Laaja tutkimus vahvisti aiemmat havainnot uusilla aineistoilla.",
      en: "An extensive study confirmed the earlier findings with new data.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tutkimus;
