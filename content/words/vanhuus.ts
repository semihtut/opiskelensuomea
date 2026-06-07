import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem vanhuude- ~ vanhuute-.
// Genitive vanhuuden, partitive vanhuutta, partitive pl vanhuuksia.
const vanhuus: Word = {
  fi: "vanhuus",
  slug: "vanhuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "old age",
  selitys:
    "Elämänvaihe, jolloin ihminen on vanha: 'turvallinen vanhuus'. Tyyppi 40/kalleus, astevaihtelu t:d (vanhuus → vanhuuden). Adjektiivista vanha. Vrt. vanha, nuoruus, eläke.",
  kuva: { emoji: "👴", alt: "vanhuus – elämänvaihe jolloin ihminen on vanha" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vanhuute- ~ vanhuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vanhuuden", merkitys: "of old age" },
      { sija: "partitiivi (yks.)", muoto: "vanhuutta", merkitys: "old age (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vanhuuksia", merkitys: "old ages (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta. Ominaisuudennimi adjektiivista vanha. Yleensä yksikössä. Vanhuuseläke = old-age pension. Vrt. vanha, nuoruus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vanhuus" },
          { label: "Partitiivi", form: "vanhuutta" },
          { label: "Genetiivi", form: "vanhuuden" },
          { label: "Inessiivi", form: "vanhuudessa" },
          { label: "Elatiivi", form: "vanhuudesta" },
          { label: "Illatiivi", form: "vanhuuteen" },
          { label: "Adessiivi", form: "vanhuudella" },
          { label: "Ablatiivi", form: "vanhuudelta" },
          { label: "Allatiivi", form: "vanhuudelle" },
          { label: "Essiivi", form: "vanhuutena" },
          { label: "Translatiivi", form: "vanhuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vanhuudet" },
          { label: "Partitiivi", form: "vanhuuksia" },
          { label: "Genetiivi", form: "vanhuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vanhus",
      en: "elderly person",
      taso: "B1",
      esim: { fi: "Vanhus tarvitsee apua.", en: "The elderly person needs help." },
    },
    {
      fi: "vanheta",
      en: "to grow old, age",
      taso: "B2",
      esim: { fi: "Kaikki me vanhenemme.", en: "We all grow old." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Vanhuus on osa elämää.", en: "Old age is part of life." },
    B1: { fi: "Hän haluaa turvallisen vanhuuden.", en: "She wants a secure old age." },
    B2: {
      fi: "Hyvä terveys nuorena helpottaa elämää vanhuudessa.",
      en: "Good health when young makes life easier in old age.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vanhuus;
