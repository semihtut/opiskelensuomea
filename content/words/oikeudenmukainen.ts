import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem oikeudenmukaise-.
// Genitive oikeudenmukaisen, partitive oikeudenmukaista, part. pl oikeudenmukaisia.
const oikeudenmukainen: Word = {
  fi: "oikeudenmukainen",
  slug: "oikeudenmukainen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B2",
  en: "fair, just, equitable",
  selitys:
    "Oikeuden mukainen, tasapuolinen ja reilu: 'oikeudenmukainen päätös', 'oikeudenmukainen kohtelu'. Tyyppi 38/nainen, ei astevaihtelua. Yhdyssana oikeuden (gen.) + mukainen. Vastakohta epäoikeudenmukainen. Vrt. oikeus, reilu, tasa-arvo.",
  kuva: { emoji: "⚖️", alt: "oikeudenmukainen – tasapuolinen ja reilu" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo oikeudenmukaise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "oikeudenmukaisen", merkitys: "of the fair" },
      { sija: "partitiivi (yks.)", muoto: "oikeudenmukaista", merkitys: "fair (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "oikeudenmukaisia", merkitys: "fair (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-kainen): genetiivi -kaise-n, partitiivi -kais-ta, partitiivin monikko -kaisia. Yhdyssana oikeuden + mukainen ('oikeuden mukaan'). Vastakohta epäoikeudenmukainen. Vrt. oikeus, reilu.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "oikeudenmukainen" },
          { label: "Partitiivi", form: "oikeudenmukaista" },
          { label: "Genetiivi", form: "oikeudenmukaisen" },
          { label: "Inessiivi", form: "oikeudenmukaisessa" },
          { label: "Elatiivi", form: "oikeudenmukaisesta" },
          { label: "Illatiivi", form: "oikeudenmukaiseen" },
          { label: "Adessiivi", form: "oikeudenmukaisella" },
          { label: "Allatiivi", form: "oikeudenmukaiselle" },
          { label: "Translatiivi", form: "oikeudenmukaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "oikeudenmukaiset" },
          { label: "Partitiivi", form: "oikeudenmukaisia" },
          { label: "Genetiivi", form: "oikeudenmukaisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "oikeudenmukainen" },
          { label: "Komparatiivi", form: "oikeudenmukaisempi" },
          { label: "Superlatiivi", form: "oikeudenmukaisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oikeudenmukaisuus",
      en: "justice, fairness",
      taso: "B2",
      esim: { fi: "Hän taistelee oikeudenmukaisuuden puolesta.", en: "She fights for justice." },
    },
    {
      fi: "epäoikeudenmukainen",
      en: "unfair, unjust",
      taso: "B2",
      esim: { fi: "Päätös tuntui epäoikeudenmukaiselta.", en: "The decision felt unfair." },
    },
  ],
  synonyymit: [
    { fi: "reilu", en: "fair" },
    { fi: "tasapuolinen", en: "even-handed" },
  ],
  esimerkit: {
    A2: { fi: "Se ei ole oikeudenmukaista.", en: "That is not fair." },
    B1: { fi: "Toivon oikeudenmukaista kohtelua.", en: "I hope for fair treatment." },
    B2: {
      fi: "Oikeudenmukainen yhteiskunta kohtelee kaikkia samojen sääntöjen mukaan.",
      en: "A just society treats everyone according to the same rules.",
    },
  },
  updatedAt: "2026-06-07",
};

export default oikeudenmukainen;
