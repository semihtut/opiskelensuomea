import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem vastuullise-.
// Genitive vastuullisen, partitive vastuullista, partitive pl vastuullisia.
const vastuullinen: Word = {
  fi: "vastuullinen",
  slug: "vastuullinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B2",
  en: "responsible, accountable",
  selitys:
    "Sellainen, joka kantaa vastuun teoistaan; vastuuta sisältävä: 'vastuullinen tehtävä'. Tyyppi 38/nainen, ei astevaihtelua. Johdettu sanasta vastuu. Vastakohta vastuuton. Vrt. vastuu, vastata, vastuullisesti.",
  kuva: { alt: "vastuullinen – vastuun kantava" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo vastuullise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vastuullisen", merkitys: "of responsible" },
      { sija: "partitiivi (yks.)", muoto: "vastuullista", merkitys: "responsible (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vastuullisia", merkitys: "responsible (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo vastuullise-, partitiivi vastuullista, monikon partitiivi vastuullisia. Johdettu sanasta vastuu. Vastakohta vastuuton. Vrt. vastuu = responsibility.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vastuullinen" },
          { label: "Partitiivi", form: "vastuullista" },
          { label: "Genetiivi", form: "vastuullisen" },
          { label: "Inessiivi", form: "vastuullisessa" },
          { label: "Elatiivi", form: "vastuullisesta" },
          { label: "Illatiivi", form: "vastuulliseen" },
          { label: "Adessiivi", form: "vastuullisella" },
          { label: "Allatiivi", form: "vastuulliselle" },
          { label: "Translatiivi", form: "vastuulliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vastuulliset" },
          { label: "Partitiivi", form: "vastuullisia" },
          { label: "Genetiivi", form: "vastuullisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "vastuullinen" },
          { label: "Komparatiivi", form: "vastuullisempi" },
          { label: "Superlatiivi", form: "vastuullisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastuu",
      en: "responsibility",
      taso: "B1",
      esim: { fi: "Otan vastuun virheestä.", en: "I take responsibility for the mistake." },
    },
    {
      fi: "vastuullisuus",
      en: "responsibility, accountability",
      taso: "B2",
      esim: { fi: "Yritysten vastuullisuus korostuu.", en: "Corporate responsibility is emphasized." },
    },
    {
      fi: "vastuuton",
      en: "irresponsible",
      taso: "B2",
      esim: { fi: "Se oli vastuutonta käytöstä.", en: "That was irresponsible behaviour." },
    },
  ],
  synonyymit: [
    { fi: "luotettava", en: "dependable" },
    { fi: "tunnollinen", en: "conscientious" },
  ],
  esimerkit: {
    A2: { fi: "Hän on vastuullinen aikuinen.", en: "He is a responsible adult." },
    B1: { fi: "Se on vastuullinen tehtävä.", en: "It is a responsible job." },
    B2: {
      fi: "Vastuullinen kuluttaja miettii ostostensa ympäristövaikutuksia.",
      en: "A responsible consumer considers the environmental impact of their purchases.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vastuullinen;
