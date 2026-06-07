import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem yksityise-.
// Genitive yksityisen, partitive yksityistä, partitive pl yksityisiä.
const yksityinen: Word = {
  fi: "yksityinen",
  slug: "yksityinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "private",
  selitys:
    "Yhdelle henkilölle tai taholle kuuluva, ei julkinen: 'yksityinen elämä', 'yksityinen yritys'. Tyyppi 38/nainen, ei astevaihtelua. Johdettu sanasta yksi. Vastakohta julkinen. Vrt. yksityisyys, yksi.",
  kuva: { emoji: "🔒", alt: "yksityinen – yhdelle kuuluva, ei julkinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo yksityise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yksityisen", merkitys: "of private" },
      { sija: "partitiivi (yks.)", muoto: "yksityistä", merkitys: "private (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yksityisiä", merkitys: "private (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo yksityise-, partitiivi yksityistä, monikon partitiivi yksityisiä. Vastakohta julkinen. 'Yksityinen sektori' = private sector. Vrt. yksityisyys = privacy, yksi = one.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yksityinen" },
          { label: "Partitiivi", form: "yksityistä" },
          { label: "Genetiivi", form: "yksityisen" },
          { label: "Inessiivi", form: "yksityisessä" },
          { label: "Elatiivi", form: "yksityisestä" },
          { label: "Illatiivi", form: "yksityiseen" },
          { label: "Adessiivi", form: "yksityisellä" },
          { label: "Allatiivi", form: "yksityiselle" },
          { label: "Translatiivi", form: "yksityiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yksityiset" },
          { label: "Partitiivi", form: "yksityisiä" },
          { label: "Genetiivi", form: "yksityisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "yksityinen" },
          { label: "Komparatiivi", form: "yksityisempi" },
          { label: "Superlatiivi", form: "yksityisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yksityisyys",
      en: "privacy",
      taso: "B2",
      esim: { fi: "Jokaisella on oikeus yksityisyyteen.", en: "Everyone has a right to privacy." },
    },
    {
      fi: "yksityisesti",
      en: "privately",
      taso: "B2",
      esim: { fi: "Puhutaan tästä yksityisesti.", en: "Let's talk about this privately." },
    },
  ],
  synonyymit: [
    { fi: "henkilökohtainen", en: "personal" },
    { fi: "oma", en: "own" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on yksityinen alue.", en: "This is a private area." },
    B1: { fi: "Hän työskentelee yksityisellä sektorilla.", en: "She works in the private sector." },
    B2: {
      fi: "Yksityiselämän ja työn rajaa on nykyään yhä vaikeampi vetää.",
      en: "It is increasingly difficult nowadays to draw the line between private life and work.",
    },
  },
  updatedAt: "2026-06-07",
};

export default yksityinen;
