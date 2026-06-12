import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem risteykse-.
// Genitive risteyksen, partitive risteystä, illative risteykseen, partitive pl risteyksiä.
const risteys: Word = {
  fi: "risteys",
  slug: "risteys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "intersection, crossing, junction",
  selitys:
    "Kohta, jossa tiet kohtaavat: 'kääntyä risteyksessä'. Tyyppi 39, ei astevaihtelua; vartalo risteykse-. Partitiivin monikko risteyksiä. Johdettu verbistä ristetä. Vrt. tienristeys, risteyskolari.",
  kuva: { alt: "risteys – kohta, jossa tiet kohtaavat" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo risteykse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "risteyksen", merkitys: "of the intersection" },
      { sija: "partitiivi (yks.)", muoto: "risteystä", merkitys: "intersection (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "risteyksiä", merkitys: "intersections (partitive pl.)" },
    ],
    huom:
      "Verbijohdos ristetä → -ys; vartalo risteykse- (genetiivi risteyksen). 'Risteyksessä' = at the intersection. Vrt. tienristeys = crossroads, eritasoristeys = interchange.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "risteys" },
          { label: "Partitiivi", form: "risteystä" },
          { label: "Genetiivi", form: "risteyksen" },
          { label: "Inessiivi", form: "risteyksessä" },
          { label: "Elatiivi", form: "risteyksestä" },
          { label: "Illatiivi", form: "risteykseen" },
          { label: "Adessiivi", form: "risteyksellä" },
          { label: "Ablatiivi", form: "risteykseltä" },
          { label: "Allatiivi", form: "risteykselle" },
          { label: "Essiivi", form: "risteyksenä" },
          { label: "Translatiivi", form: "risteykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "risteykset" },
          { label: "Partitiivi", form: "risteyksiä" },
          { label: "Genetiivi", form: "risteysten / risteyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tienristeys",
      en: "road intersection, crossroads",
      taso: "B1",
      esim: { fi: "Käänny vasemmalle tienristeyksessä.", en: "Turn left at the road intersection." },
    },
    {
      fi: "risteyskolari",
      en: "intersection collision",
      taso: "B2",
      esim: { fi: "Risteyskolarissa ei loukkaantunut kukaan.", en: "No one was hurt in the intersection collision." },
    },
    {
      fi: "ristetä",
      en: "to cross, intersect",
      taso: "B2",
      esim: { fi: "Kaksi tietä risteää tässä.", en: "Two roads cross here." },
    },
  ],
  synonyymit: [
    { fi: "tienristeys", en: "crossroads" },
    { fi: "liittymä", en: "junction, interchange" },
  ],
  esimerkit: {
    A2: { fi: "Odota minua risteyksessä.", en: "Wait for me at the intersection." },
    B1: { fi: "Risteyksessä sattui usein onnettomuuksia.", en: "Accidents often happened at the intersection." },
    B2: {
      fi: "Vilkkaaseen risteykseen asennettiin uudet liikennevalot.",
      en: "New traffic lights were installed at the busy intersection.",
    },
  },
  updatedAt: "2026-06-06",
};

export default risteys;
