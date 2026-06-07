import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem oletukse-.
// Genitive oletuksen, partitive oletusta, partitive pl oletuksia.
const oletus: Word = {
  fi: "oletus",
  slug: "oletus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "assumption, supposition, default",
  selitys:
    "Asia, jonka oletetaan olevan totta ilman varmaa tietoa: 'perustuu oletukseen'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä olettaa. Tietotekniikassa: oletusarvo = default. Vrt. olettaa, otaksuma.",
  kuva: { emoji: "💭", alt: "oletus – asia jonka oletetaan olevan totta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo oletukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "oletuksen", merkitys: "of the assumption" },
      { sija: "partitiivi (yks.)", muoto: "oletusta", merkitys: "assumption (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "oletuksia", merkitys: "assumptions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä olettaa. 'Oletuksena' = by default; 'perustua oletukseen' = to rest on an assumption. Vrt. oletusarvo = default value.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "oletus" },
          { label: "Partitiivi", form: "oletusta" },
          { label: "Genetiivi", form: "oletuksen" },
          { label: "Inessiivi", form: "oletuksessa" },
          { label: "Elatiivi", form: "oletuksesta" },
          { label: "Illatiivi", form: "oletukseen" },
          { label: "Adessiivi", form: "oletuksella" },
          { label: "Ablatiivi", form: "oletukselta" },
          { label: "Allatiivi", form: "oletukselle" },
          { label: "Essiivi", form: "oletuksena" },
          { label: "Translatiivi", form: "oletukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "oletukset" },
          { label: "Partitiivi", form: "oletuksia" },
          { label: "Genetiivi", form: "oletuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "olettaa",
      en: "to assume",
      taso: "B1",
      esim: { fi: "Oletan, että ehdit.", en: "I assume you'll make it." },
    },
    {
      fi: "oletusarvo",
      en: "default value",
      taso: "B2",
      esim: { fi: "Käytä oletusarvoa.", en: "Use the default value." },
    },
  ],
  synonyymit: [
    { fi: "olettamus", en: "presumption" },
    { fi: "otaksuma", en: "supposition" },
  ],
  esimerkit: {
    A2: { fi: "Se oli vain minun oletukseni.", en: "It was just my assumption." },
    B1: { fi: "Oletus osoittautui vääräksi.", en: "The assumption turned out to be wrong." },
    B2: {
      fi: "Koko teoria romahtaa, jos sen perusoletus ei pidä paikkaansa.",
      en: "The whole theory collapses if its basic assumption does not hold.",
    },
  },
  updatedAt: "2026-06-07",
};

export default oletus;
