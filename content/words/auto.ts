import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Genitive auton,
// partitive autoa, illative autoon, partitive pl autoja.
const auto: Word = {
  fi: "auto",
  slug: "auto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "car, automobile",
  selitys:
    "Nelipyöräinen moottoriajoneuvo. Tyyppi 1, ei astevaihtelua. Lyhenne sanasta automobiili.",
  kuva: { alt: "auto – henkilöauto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "auton", merkitys: "of the car" },
      { sija: "partitiivi (yks.)", muoto: "autoa", merkitys: "car (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "autoja", merkitys: "cars (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Autolla' = by car (adessiivi välineenä): 'Menen autolla.'",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "auto" },
          { label: "Partitiivi", form: "autoa" },
          { label: "Genetiivi", form: "auton" },
          { label: "Inessiivi", form: "autossa" },
          { label: "Elatiivi", form: "autosta" },
          { label: "Illatiivi", form: "autoon" },
          { label: "Adessiivi", form: "autolla" },
          { label: "Ablatiivi", form: "autolta" },
          { label: "Allatiivi", form: "autolle" },
          { label: "Essiivi", form: "autona" },
          { label: "Translatiivi", form: "autoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "autot" },
          { label: "Partitiivi", form: "autoja" },
          { label: "Genetiivi", form: "autojen" },
          { label: "Inessiivi", form: "autoissa" },
          { label: "Illatiivi", form: "autoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "autoilija",
      en: "motorist, driver",
      taso: "B1",
      esim: { fi: "Autoilijat odottivat liikennevaloissa.", en: "The motorists waited at the lights." },
    },
    {
      fi: "henkilöauto",
      en: "passenger car",
      taso: "B1",
      esim: { fi: "Henkilöauto vie viisi matkustajaa.", en: "A passenger car carries five people." },
    },
    {
      fi: "autotalli",
      en: "garage",
      taso: "A2",
      esim: { fi: "Auto on autotallissa.", en: "The car is in the garage." },
    },
  ],
  synonyymit: [
    { fi: "vaunu", en: "carriage, wagon (older/colloquial)" },
    { fi: "kärry", en: "wheels, ride (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on punainen auto.", en: "We have a red car." },
    B1: { fi: "Menen töihin autolla.", en: "I go to work by car." },
    B2: {
      fi: "Auto hajosi keskellä matkaa, joten jatkoimme junalla.",
      en: "The car broke down mid-trip, so we continued by train.",
    },
  },
  updatedAt: "2026-06-04",
};

export default auto;
