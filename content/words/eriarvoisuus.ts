import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem eriarvoisuude- ~ eriarvoisuute-.
// Genitive eriarvoisuuden, partitive eriarvoisuutta, partitive pl eriarvoisuuksia.
const eriarvoisuus: Word = {
  fi: "eriarvoisuus",
  slug: "eriarvoisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B2",
  en: "inequality",
  selitys:
    "Tila, jossa ihmisiä kohdellaan tai he ovat eriarvoisessa asemassa: 'taloudellinen eriarvoisuus'. Tyyppi 40/kalleus, astevaihtelu t:d (eriarvoisuus → eriarvoisuuden). Adjektiivista eriarvoinen. Vastakohta tasa-arvo. Vrt. tasa-arvo, syrjintä, oikeudenmukaisuus.",
  kuva: { emoji: "⬆️", alt: "eriarvoisuus – tila jossa ihmiset ovat eriarvoisessa asemassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (eriarvoisuute- ~ eriarvoisuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "eriarvoisuuden", merkitys: "of inequality" },
      { sija: "partitiivi (yks.)", muoto: "eriarvoisuutta", merkitys: "inequality (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "eriarvoisuuksia", merkitys: "inequalities (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta, partitiivin monikko -uuksia. Ominaisuudennimi adjektiivista eriarvoinen. Yleensä yksikössä. Vastakohta tasa-arvo. Vrt. syrjintä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "eriarvoisuus" },
          { label: "Partitiivi", form: "eriarvoisuutta" },
          { label: "Genetiivi", form: "eriarvoisuuden" },
          { label: "Inessiivi", form: "eriarvoisuudessa" },
          { label: "Elatiivi", form: "eriarvoisuudesta" },
          { label: "Illatiivi", form: "eriarvoisuuteen" },
          { label: "Adessiivi", form: "eriarvoisuudella" },
          { label: "Ablatiivi", form: "eriarvoisuudelta" },
          { label: "Allatiivi", form: "eriarvoisuudelle" },
          { label: "Essiivi", form: "eriarvoisuutena" },
          { label: "Translatiivi", form: "eriarvoisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "eriarvoisuudet" },
          { label: "Partitiivi", form: "eriarvoisuuksia" },
          { label: "Genetiivi", form: "eriarvoisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "eriarvoinen",
      en: "unequal",
      taso: "B2",
      esim: { fi: "Ihmiset ovat eriarvoisessa asemassa.", en: "People are in an unequal position." },
    },
    {
      fi: "tasa-arvo",
      en: "equality",
      taso: "B2",
      esim: { fi: "Tavoitteena on tasa-arvo.", en: "The goal is equality." },
    },
  ],
  synonyymit: [
    { fi: "epätasa-arvo", en: "inequality" },
  ],
  esimerkit: {
    A2: { fi: "Eriarvoisuus on ongelma.", en: "Inequality is a problem." },
    B1: { fi: "Tuloerot lisäävät eriarvoisuutta.", en: "Income gaps increase inequality." },
    B2: {
      fi: "Eriarvoisuus heikentää luottamusta koko yhteiskunnassa.",
      en: "Inequality weakens trust throughout the whole of society.",
    },
  },
  updatedAt: "2026-06-07",
};

export default eriarvoisuus;
