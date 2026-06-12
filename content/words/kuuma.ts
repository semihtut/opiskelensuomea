import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem kuuma-.
// Genitive kuuman, partitive kuumaa, partitive pl kuumia. Comparative kuumempi, superlative kuumin.
const kuuma: Word = {
  fi: "kuuma",
  slug: "kuuma",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A2",
  en: "hot",
  selitys:
    "Hyvin korkea lämpötila, polttava: 'kuuma kahvi'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko kuumia. Vertailu kuumempi – kuumin. Vastakohta kylmä. Vrt. lämmin (vähemmän kuuma), kuumuus.",
  kuva: { alt: "kuuma – hyvin korkea lämpötila" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kuuman", merkitys: "of the hot (one)" },
      { sija: "partitiivi (yks.)", muoto: "kuumaa", merkitys: "hot (partitive)" },
      { sija: "komparatiivi", muoto: "kuumempi", merkitys: "hotter" },
    ],
    huom:
      "Tyyppi 10, ei astevaihtelua. Partitiivin monikko kuumia. Vertailu kuumempi – kuumin. Ero: kuuma = hot (korkea lämpö), lämmin = warm (miellyttävä). Vastakohta kylmä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kuuma" },
          { label: "Partitiivi", form: "kuumaa" },
          { label: "Genetiivi", form: "kuuman" },
          { label: "Inessiivi", form: "kuumassa" },
          { label: "Elatiivi", form: "kuumasta" },
          { label: "Illatiivi", form: "kuumaan" },
          { label: "Adessiivi", form: "kuumalla" },
          { label: "Ablatiivi", form: "kuumalta" },
          { label: "Allatiivi", form: "kuumalle" },
          { label: "Essiivi", form: "kuumana" },
          { label: "Translatiivi", form: "kuumaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kuumat" },
          { label: "Partitiivi", form: "kuumia" },
          { label: "Genetiivi", form: "kuumien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "kuuma" },
          { label: "Komparatiivi", form: "kuumempi" },
          { label: "Superlatiivi", form: "kuumin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuumuus",
      en: "heat, hotness",
      taso: "B2",
      esim: { fi: "Kesän kuumuus oli rasittavaa.", en: "The summer heat was exhausting." },
    },
    {
      fi: "kuumentaa",
      en: "to heat (up)",
      taso: "B1",
      esim: { fi: "Kuumenna öljy pannulla.", en: "Heat the oil in the pan." },
    },
    {
      fi: "kuumeinen",
      en: "feverish",
      taso: "B2",
      esim: { fi: "Lapsi oli kuumeinen.", en: "The child was feverish." },
    },
  ],
  synonyymit: [
    { fi: "polttava", en: "scorching, burning" },
    { fi: "tulikuuma", en: "piping hot" },
  ],
  esimerkit: {
    A2: { fi: "Kahvi on liian kuumaa.", en: "The coffee is too hot." },
    B1: { fi: "Heinäkuu oli erittäin kuuma.", en: "July was extremely hot." },
    B2: {
      fi: "Aavikolla päivät ovat kuumia, mutta yöt voivat olla kylmiä.",
      en: "In the desert the days are hot, but the nights can be cold.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kuuma;
