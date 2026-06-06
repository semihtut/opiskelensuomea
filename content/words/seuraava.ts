import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem seuraava-.
// Genitive seuraavan, partitive seuraavaa, illative seuraavaan, partitive pl seuraavia.
const seuraava: Word = {
  fi: "seuraava",
  slug: "seuraava",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A2",
  en: "next, following",
  selitys:
    "Järjestyksessä heti seuraavaksi tuleva: 'seuraava bussi'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko seuraavia. Verbin seurata partisiippi. Vastakohta edellinen. Vrt. seurata (to follow).",
  kuva: { emoji: "⏭️", alt: "seuraava – heti seuraavaksi tuleva" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "seuraavan", merkitys: "of the next (one)" },
      { sija: "partitiivi (yks.)", muoto: "seuraavaa", merkitys: "next (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "seuraavia", merkitys: "next (partitive pl.)" },
    ],
    huom:
      "Verbin seurata partisiippi, käytetään adjektiivina. Partitiivin monikko seuraavia. Vastakohta edellinen. 'Seuraavalla viikolla' = next week. Vrt. seurata = to follow.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "seuraava" },
          { label: "Partitiivi", form: "seuraavaa" },
          { label: "Genetiivi", form: "seuraavan" },
          { label: "Inessiivi", form: "seuraavassa" },
          { label: "Elatiivi", form: "seuraavasta" },
          { label: "Illatiivi", form: "seuraavaan" },
          { label: "Adessiivi", form: "seuraavalla" },
          { label: "Ablatiivi", form: "seuraavalta" },
          { label: "Allatiivi", form: "seuraavalle" },
          { label: "Essiivi", form: "seuraavana" },
          { label: "Translatiivi", form: "seuraavaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "seuraavat" },
          { label: "Partitiivi", form: "seuraavia" },
          { label: "Genetiivi", form: "seuraavien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "seurata",
      en: "to follow",
      taso: "B1",
      esim: { fi: "Seuraa minua!", en: "Follow me!" },
    },
    {
      fi: "seuraavaksi",
      en: "next (adv.)",
      taso: "B1",
      esim: { fi: "Mitä teemme seuraavaksi?", en: "What do we do next?" },
    },
    {
      fi: "seuraaja",
      en: "follower, successor",
      taso: "B2",
      esim: { fi: "Hänellä on paljon seuraajia.", en: "She has many followers." },
    },
  ],
  synonyymit: [
    { fi: "tuleva", en: "coming, upcoming" },
    { fi: "ensi", en: "next (e.g. ensi viikko)" },
  ],
  esimerkit: {
    A2: { fi: "Seuraava bussi tulee kymmenen minuutin päästä.", en: "The next bus comes in ten minutes." },
    B1: { fi: "Jatkamme seuraavasta luvusta.", en: "We'll continue from the next chapter." },
    B2: {
      fi: "Seuraavien vuosien aikana ala muuttuu varmasti paljon.",
      en: "Over the next few years the field will surely change a lot.",
    },
  },
  updatedAt: "2026-06-06",
};

export default seuraava;
