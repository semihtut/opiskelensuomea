import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem jänikse-.
// Genitive jäniksen, partitive jänistä, partitive pl jäniksiä.
const janis: Word = {
  fi: "jänis",
  slug: "jänis",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "hare, rabbit",
  selitys:
    "Pitkäkorvainen, nopea metsäeläin: 'jänis juoksee'. Tyyppi 39/vastaus, ei astevaihtelua (-is → -ikse-). Vrt. pupu, metsä, eläin.",
  kuva: { emoji: "🐇", alt: "jänis – pitkäkorvainen, nopea metsäeläin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo jänikse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jäniksen", merkitys: "of the hare" },
      { sija: "partitiivi (yks.)", muoto: "jänistä", merkitys: "hare (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jäniksiä", merkitys: "hares (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-is): genetiivi -ikse-n, partitiivi -is-tä, partitiivin monikko -iksiä. Lemmikkikani on usein 'kani'; villi metsäeläin 'jänis'. Lapsikielessä pupu. Vrt. pupu, kani.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jänis" },
          { label: "Partitiivi", form: "jänistä" },
          { label: "Genetiivi", form: "jäniksen" },
          { label: "Inessiivi", form: "jäniksessä" },
          { label: "Elatiivi", form: "jäniksestä" },
          { label: "Illatiivi", form: "jänikseen" },
          { label: "Adessiivi", form: "jäniksellä" },
          { label: "Ablatiivi", form: "jänikseltä" },
          { label: "Allatiivi", form: "jänikselle" },
          { label: "Essiivi", form: "jäniksenä" },
          { label: "Translatiivi", form: "jänikseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jänikset" },
          { label: "Partitiivi", form: "jäniksiä" },
          { label: "Genetiivi", form: "jäniksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pupu",
      en: "bunny",
      taso: "A2",
      esim: { fi: "Lapsi piirsi pupun.", en: "The child drew a bunny." },
    },
    {
      fi: "kani",
      en: "rabbit (pet)",
      taso: "A2",
      esim: { fi: "Meillä on lemmikkikani.", en: "We have a pet rabbit." },
    },
  ],
  synonyymit: [
    { fi: "pupu", en: "bunny" },
  ],
  esimerkit: {
    A2: { fi: "Jänis juoksi pellon yli.", en: "The hare ran across the field." },
    B1: { fi: "Talvella jänis on valkoinen.", en: "In winter the hare is white." },
    B2: {
      fi: "Jänis pakeni nopeasti, kun se huomasi koiran.",
      en: "The hare fled quickly when it noticed the dog.",
    },
  },
  updatedAt: "2026-06-07",
};

export default janis;
