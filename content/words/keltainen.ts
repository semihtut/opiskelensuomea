import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive
// keltaisen, partitive keltaista, illative keltaiseen, partitive pl keltaisia.
const keltainen: Word = {
  fi: "keltainen",
  slug: "keltainen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A1",
  en: "yellow",
  selitys:
    "Auringon ja sitruunan väri. Tyyppi 38, ei astevaihtelua. Taivutusvartalo keltais-.",
  kuva: { alt: "keltainen – keltainen väri" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "keltaisen", merkitys: "of the yellow" },
      { sija: "partitiivi (yks.)", muoto: "keltaista", merkitys: "yellow (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "keltaisia", merkitys: "yellow (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: keltainen → keltaisen, keltaista. Sama malli kuin valkoinen, punainen, sininen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "keltainen" },
          { label: "Partitiivi", form: "keltaista" },
          { label: "Genetiivi", form: "keltaisen" },
          { label: "Inessiivi", form: "keltaisessa" },
          { label: "Illatiivi", form: "keltaiseen" },
          { label: "Adessiivi", form: "keltaisella" },
          { label: "Essiivi", form: "keltaisena" },
          { label: "Translatiivi", form: "keltaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keltaiset" },
          { label: "Partitiivi", form: "keltaisia" },
          { label: "Genetiivi", form: "keltaisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "keltaisempi" },
          { label: "Komparatiivi (gen.)", form: "keltaisemman" },
          { label: "Superlatiivi (nom.)", form: "keltaisin" },
          { label: "Superlatiivi (gen.)", form: "keltaisimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kellertävä",
      en: "yellowish",
      taso: "B2",
      esim: { fi: "Vanha paperi oli kellertävää.", en: "The old paper was yellowish." },
    },
    {
      fi: "keltuainen",
      en: "egg yolk",
      taso: "B2",
      esim: { fi: "Erottele keltuainen valkuaisesta.", en: "Separate the yolk from the white." },
    },
    {
      fi: "vaaleankeltainen",
      en: "pale yellow",
      taso: "B1",
      esim: { fi: "Seinät maalattiin vaaleankeltaisiksi.", en: "The walls were painted pale yellow." },
    },
  ],
  synonyymit: [
    { fi: "kellertävä", en: "yellowish" },
    { fi: "kullankeltainen", en: "golden yellow" },
  ],
  esimerkit: {
    A2: { fi: "Banaani on keltainen.", en: "The banana is yellow." },
    B1: { fi: "Syksyllä lehdet muuttuvat keltaisiksi.", en: "In autumn the leaves turn yellow." },
    B2: {
      fi: "Keltainen sävy toi keittiöön lämpöä.",
      en: "The yellow tone brought warmth to the kitchen.",
    },
  },
  updatedAt: "2026-06-04",
};

export default keltainen;
