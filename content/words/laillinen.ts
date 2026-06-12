import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem laillise- ~ laillis-.
// Genitive laillisen, partitive laillista, partitive pl laillisia.
const laillinen: Word = {
  fi: "laillinen",
  slug: "laillinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "legal, lawful, legitimate",
  selitys:
    "Lain mukainen, sallittu: 'laillinen toiminta', 'laillinen oikeus'. Tyyppi 38/nainen, ei astevaihtelua. Sanasta laki. Vastakohta laiton. Vrt. laki, laillisuus, lainmukainen.",
  kuva: { alt: "laillinen – lain mukainen, sallittu" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo laillise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laillisen", merkitys: "of the legal" },
      { sija: "partitiivi (yks.)", muoto: "laillista", merkitys: "legal (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laillisia", merkitys: "legal (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-llinen): genetiivi -llise-n, partitiivi -llis-ta, partitiivin monikko -llisia. Sanasta laki + -llinen. Vastakohta laiton. Vrt. laillisuus = legality, lainmukainen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laillinen" },
          { label: "Partitiivi", form: "laillista" },
          { label: "Genetiivi", form: "laillisen" },
          { label: "Inessiivi", form: "laillisessa" },
          { label: "Elatiivi", form: "laillisesta" },
          { label: "Illatiivi", form: "lailliseen" },
          { label: "Adessiivi", form: "laillisella" },
          { label: "Allatiivi", form: "lailliselle" },
          { label: "Translatiivi", form: "lailliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lailliset" },
          { label: "Partitiivi", form: "laillisia" },
          { label: "Genetiivi", form: "laillisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "laillinen" },
          { label: "Komparatiivi", form: "laillisempi" },
          { label: "Superlatiivi", form: "laillisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laillisuus",
      en: "legality, lawfulness",
      taso: "B2",
      esim: { fi: "Päätöksen laillisuus tarkistettiin.", en: "The legality of the decision was checked." },
    },
    {
      fi: "laillistaa",
      en: "to legalize",
      taso: "B2",
      esim: { fi: "Toiminta laillistettiin lailla.", en: "The activity was legalized by law." },
    },
  ],
  synonyymit: [
    { fi: "lainmukainen", en: "in accordance with the law" },
    { fi: "sallittu", en: "permitted" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on täysin laillista.", en: "This is completely legal." },
    B1: { fi: "Hänellä on laillinen oikeus perintöön.", en: "He has a legal right to the inheritance." },
    B2: {
      fi: "Toiminta oli laillista, vaikka monet pitivät sitä epäeettisenä.",
      en: "The activity was legal, even though many considered it unethical.",
    },
  },
  updatedAt: "2026-06-07",
};

export default laillinen;
