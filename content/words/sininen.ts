import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive sinisen,
// partitive sinistä, illative siniseen, partitive pl sinisiä.
const sininen: Word = {
  fi: "sininen",
  slug: "sininen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A1",
  en: "blue",
  selitys:
    "Selkeän taivaan ja meren väri. Tyyppi 38, ei astevaihtelua. Taivutusvartalo sinis-. Suomen lipun väri (sinivalkoinen).",
  kuva: { alt: "sininen – sininen väri" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sinisen", merkitys: "of the blue" },
      { sija: "partitiivi (yks.)", muoto: "sinistä", merkitys: "blue (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sinisiä", merkitys: "blue (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: sininen → sinisen, sinistä. Partitiivi sinistä (t säilyy, koska vartalo sinis-).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "sininen" },
          { label: "Partitiivi", form: "sinistä" },
          { label: "Genetiivi", form: "sinisen" },
          { label: "Inessiivi", form: "sinisessä" },
          { label: "Illatiivi", form: "siniseen" },
          { label: "Adessiivi", form: "sinisellä" },
          { label: "Essiivi", form: "sinisenä" },
          { label: "Translatiivi", form: "siniseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "siniset" },
          { label: "Partitiivi", form: "sinisiä" },
          { label: "Genetiivi", form: "sinisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "sinisempi" },
          { label: "Komparatiivi (gen.)", form: "sinisemmän" },
          { label: "Superlatiivi (nom.)", form: "sinisin" },
          { label: "Superlatiivi (gen.)", form: "sinisimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sinivalkoinen",
      en: "blue-and-white (Finnish colors)",
      taso: "A2",
      esim: { fi: "Suomen lippu on sinivalkoinen.", en: "The Finnish flag is blue and white." },
    },
    {
      fi: "sinertävä",
      en: "bluish",
      taso: "B2",
      esim: { fi: "Jää oli sinertävä.", en: "The ice was bluish." },
    },
    {
      fi: "taivaansininen",
      en: "sky-blue",
      taso: "B1",
      esim: { fi: "Hänellä oli taivaansininen takki.", en: "She had a sky-blue coat." },
    },
  ],
  synonyymit: [
    { fi: "sinertävä", en: "bluish" },
    { fi: "syaani", en: "cyan" },
  ],
  esimerkit: {
    A2: { fi: "Taivas on sininen.", en: "The sky is blue." },
    B1: { fi: "Pidän sinisistä silmistä.", en: "I like blue eyes." },
    B2: {
      fi: "Meri näytti syvemmän siniseltä myrskyn jälkeen.",
      en: "The sea looked a deeper blue after the storm.",
    },
  },
  updatedAt: "2026-06-04",
};

export default sininen;
