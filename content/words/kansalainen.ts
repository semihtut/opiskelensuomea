import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem kansalaise-.
// Genitive kansalaisen, partitive kansalaista, partitive pl kansalaisia.
const kansalainen: Word = {
  fi: "kansalainen",
  slug: "kansalainen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "B1",
  en: "citizen, national",
  selitys:
    "Valtion jäsen, jolla on tietyn maan kansalaisuus: 'Suomen kansalainen'. Tyyppi 38/nainen, ei astevaihtelua. Johdettu sanasta kansa. Vrt. kansalaisuus, kansa, kansallinen.",
  kuva: { alt: "kansalainen – valtion jäsen, jolla on kansalaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo kansalaise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kansalaisen", merkitys: "of the citizen" },
      { sija: "partitiivi (yks.)", muoto: "kansalaista", merkitys: "citizen (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kansalaisia", merkitys: "citizens (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo kansalaise-, partitiivi kansalaista, monikon partitiivi kansalaisia. Johdettu sanasta kansa. Vrt. kansalaisuus = citizenship, kansalaisoikeudet = civil rights.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kansalainen" },
          { label: "Partitiivi", form: "kansalaista" },
          { label: "Genetiivi", form: "kansalaisen" },
          { label: "Inessiivi", form: "kansalaisessa" },
          { label: "Elatiivi", form: "kansalaisesta" },
          { label: "Illatiivi", form: "kansalaiseen" },
          { label: "Adessiivi", form: "kansalaisella" },
          { label: "Ablatiivi", form: "kansalaiselta" },
          { label: "Allatiivi", form: "kansalaiselle" },
          { label: "Essiivi", form: "kansalaisena" },
          { label: "Translatiivi", form: "kansalaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kansalaiset" },
          { label: "Partitiivi", form: "kansalaisia" },
          { label: "Genetiivi", form: "kansalaisten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kansalaisuus",
      en: "citizenship, nationality",
      taso: "B2",
      esim: { fi: "Hän sai Suomen kansalaisuuden.", en: "She got Finnish citizenship." },
    },
    {
      fi: "kansa",
      en: "people, nation",
      taso: "B1",
      esim: { fi: "Koko kansa juhli.", en: "The whole nation celebrated." },
    },
  ],
  synonyymit: [
    { fi: "asukas", en: "resident, inhabitant" },
    { fi: "valtion jäsen", en: "national" },
  ],
  esimerkit: {
    A2: { fi: "Olen Suomen kansalainen.", en: "I am a Finnish citizen." },
    B1: { fi: "Jokaisella kansalaisella on oikeuksia ja velvollisuuksia.", en: "Every citizen has rights and duties." },
    B2: {
      fi: "Aktiiviset kansalaiset osallistuvat päätöksentekoon monin tavoin.",
      en: "Active citizens take part in decision-making in many ways.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kansalainen;
