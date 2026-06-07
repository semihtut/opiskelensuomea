import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem määrä-.
// Genitive määrän, partitive määrää, illative määrään, partitive pl määriä.
const maara: Word = {
  fi: "määrä",
  slug: "määrä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "amount, quantity, number",
  selitys:
    "Kuinka paljon jotakin on: 'suuri määrä ihmisiä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko määriä. Mitattavasta asiasta usein partitiivi: 'määrä rahaa'. Vrt. määrätä, lukumäärä, paljous.",
  kuva: { emoji: "🔢", alt: "määrä – kuinka paljon jotakin on" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo määrä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "määrän", merkitys: "of the amount" },
      { sija: "partitiivi (yks.)", muoto: "määrää", merkitys: "amount (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "määriä", merkitys: "amounts (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10 (-ä): partitiivin monikko -iä (määriä), ei astevaihtelua. 'Suuri/pieni määrä' + partitiivi (määrä rahaa). Vrt. lukumäärä = count, määrätä = to order/decree, määräaika = deadline.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "määrä" },
          { label: "Partitiivi", form: "määrää" },
          { label: "Genetiivi", form: "määrän" },
          { label: "Inessiivi", form: "määrässä" },
          { label: "Elatiivi", form: "määrästä" },
          { label: "Illatiivi", form: "määrään" },
          { label: "Adessiivi", form: "määrällä" },
          { label: "Ablatiivi", form: "määrältä" },
          { label: "Allatiivi", form: "määrälle" },
          { label: "Essiivi", form: "määränä" },
          { label: "Translatiivi", form: "määräksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "määrät" },
          { label: "Partitiivi", form: "määriä" },
          { label: "Genetiivi", form: "määrien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lukumäärä",
      en: "number, count",
      taso: "B1",
      esim: { fi: "Osallistujien lukumäärä kasvoi.", en: "The number of participants grew." },
    },
    {
      fi: "enemmistö",
      en: "majority",
      taso: "B2",
      esim: { fi: "Enemmistö kannatti ehdotusta.", en: "The majority supported the proposal." },
    },
    {
      fi: "määräaika",
      en: "deadline, fixed period",
      taso: "B1",
      esim: { fi: "Määräaika umpeutuu perjantaina.", en: "The deadline expires on Friday." },
    },
  ],
  synonyymit: [
    { fi: "paljous", en: "abundance, quantity" },
    { fi: "lukumäärä", en: "number, count" },
  ],
  esimerkit: {
    A2: { fi: "Tarvitsen pienen määrän sokeria.", en: "I need a small amount of sugar." },
    B1: { fi: "Liikenteen määrä kasvaa kesäisin.", en: "The amount of traffic grows in summer." },
    B2: {
      fi: "Suuri määrä hakemuksia jäi käsittelemättä ajanpuutteen vuoksi.",
      en: "A large number of applications were left unprocessed due to lack of time.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maara;
