import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem energia-.
// Genitive energian, partitive energiaa, partitive pl energioita.
const energia: Word = {
  fi: "energia",
  slug: "energia",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "energy",
  selitys:
    "Voima tai teho, joka saa aikaan toimintaa; myös ihmisen tarmo: 'uusiutuva energia'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko energioita. Vrt. voima, sähkö, energinen.",
  kuva: { emoji: "⚡", alt: "energia – voima tai teho joka saa aikaan toimintaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo energia-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "energian", merkitys: "of the energy" },
      { sija: "partitiivi (yks.)", muoto: "energiaa", merkitys: "energy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "energioita", merkitys: "energies (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12 (-ia, kolmitavuinen): partitiivin monikko -oita (energioita), ei astevaihtelua. 'Uusiutuva energia' = renewable energy. Merkitys myös: tarmo, jaksaminen. Vrt. voima = force, energinen = energetic.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "energia" },
          { label: "Partitiivi", form: "energiaa" },
          { label: "Genetiivi", form: "energian" },
          { label: "Inessiivi", form: "energiassa" },
          { label: "Elatiivi", form: "energiasta" },
          { label: "Illatiivi", form: "energiaan" },
          { label: "Adessiivi", form: "energialla" },
          { label: "Ablatiivi", form: "energialta" },
          { label: "Allatiivi", form: "energialle" },
          { label: "Essiivi", form: "energiana" },
          { label: "Translatiivi", form: "energiaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "energiat" },
          { label: "Partitiivi", form: "energioita" },
          { label: "Genetiivi", form: "energioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "energinen",
      en: "energetic",
      taso: "B2",
      esim: { fi: "Hän on energinen ihminen.", en: "She is an energetic person." },
    },
    {
      fi: "energiansäästö",
      en: "energy saving",
      taso: "B2",
      esim: { fi: "Energiansäästö on tärkeää.", en: "Energy saving is important." },
    },
  ],
  synonyymit: [
    { fi: "voima", en: "power, force" },
    { fi: "tarmo", en: "vigour, drive" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on paljon energiaa tänään.", en: "I have a lot of energy today." },
    B1: { fi: "Tuuli tuottaa puhdasta energiaa.", en: "Wind produces clean energy." },
    B2: {
      fi: "Uusiutuvan energian osuus on kasvanut nopeasti viime vuosina.",
      en: "The share of renewable energy has grown quickly in recent years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default energia;
