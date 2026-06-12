import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem syyllise- ~ syyllis-.
// Genitive syyllisen, partitive syyllistä, partitive pl syyllisiä. Adjective + noun.
const syyllinen: Word = {
  fi: "syyllinen",
  slug: "syyllinen",
  pos: "adjektiivi / substantiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "guilty; the guilty party, culprit",
  selitys:
    "Sellainen, joka on tehnyt rikoksen tai virheen: 'syyllinen rikokseen', 'todeta syylliseksi'. Substantiivina: syyllinen = se, joka on syyllinen. Tyyppi 38/nainen, ei astevaihtelua. Sanasta syy. Vastakohta syytön. Vrt. syy, syyllisyys, syyttää.",
  kuva: { alt: "syyllinen – henkilö joka on tehnyt rikoksen tai virheen" },

  kielioppi: {
    tyyppi: "adjektiivi/substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo syyllise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "syyllisen", merkitys: "of the guilty" },
      { sija: "partitiivi (yks.)", muoto: "syyllistä", merkitys: "guilty (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "syyllisiä", merkitys: "guilty (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): genetiivi -se-n, partitiivi -s-tä, partitiivin monikko -siä. Rektio: 'syyllinen johonkin' (illat.: syyllinen rikokseen). 'Todeta syylliseksi' = to find guilty. Vastakohta syytön. Vrt. syyllisyys = guilt.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "syyllinen" },
          { label: "Partitiivi", form: "syyllistä" },
          { label: "Genetiivi", form: "syyllisen" },
          { label: "Inessiivi", form: "syyllisessä" },
          { label: "Elatiivi", form: "syyllisestä" },
          { label: "Illatiivi", form: "syylliseen" },
          { label: "Adessiivi", form: "syyllisellä" },
          { label: "Allatiivi", form: "syylliselle" },
          { label: "Translatiivi", form: "syylliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "syylliset" },
          { label: "Partitiivi", form: "syyllisiä" },
          { label: "Genetiivi", form: "syyllisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "syyllinen" },
          { label: "Komparatiivi", form: "syyllisempi" },
          { label: "Superlatiivi", form: "syyllisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syyllisyys",
      en: "guilt",
      taso: "B2",
      esim: { fi: "Hän tunsi syyllisyyttä.", en: "He felt guilt." },
    },
    {
      fi: "syyttää",
      en: "to accuse, charge",
      taso: "B2",
      esim: { fi: "Häntä syytetään varkaudesta.", en: "He is charged with theft." },
    },
  ],
  synonyymit: [
    { fi: "vastuussa oleva", en: "the one responsible" },
  ],
  esimerkit: {
    A2: { fi: "Kuka on syyllinen?", en: "Who is guilty?" },
    B1: { fi: "Hänet todettiin syylliseksi.", en: "He was found guilty." },
    B2: {
      fi: "Oikeus katsoi syytetyn syylliseksi vain osaan syytteistä.",
      en: "The court found the defendant guilty of only some of the charges.",
    },
  },
  updatedAt: "2026-06-07",
};

export default syyllinen;
