import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem asiakirja-.
// Genitive asiakirjan, partitive asiakirjaa, partitive pl asiakirjoja.
const asiakirja: Word = {
  fi: "asiakirja",
  slug: "asiakirja",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "document",
  selitys:
    "Virallinen kirjallinen dokumentti: 'allekirjoittaa asiakirja', 'tärkeät asiakirjat'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko asiakirjoja. Yhdyssana asia + kirja. Vrt. asia, kirja, todistus, dokumentti.",
  kuva: { emoji: "📄", alt: "asiakirja – virallinen kirjallinen dokumentti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo asiakirja-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "asiakirjan", merkitys: "of the document" },
      { sija: "partitiivi (yks.)", muoto: "asiakirjaa", merkitys: "document (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asiakirjoja", merkitys: "documents (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: ei astevaihtelua. Partitiivin monikko asiakirjoja (a → o, kuten kirja → kirjoja). Yhdyssana asia + kirja. Synonyymi dokumentti. Vrt. todistus, sopimus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "asiakirja" },
          { label: "Partitiivi", form: "asiakirjaa" },
          { label: "Genetiivi", form: "asiakirjan" },
          { label: "Inessiivi", form: "asiakirjassa" },
          { label: "Elatiivi", form: "asiakirjasta" },
          { label: "Illatiivi", form: "asiakirjaan" },
          { label: "Adessiivi", form: "asiakirjalla" },
          { label: "Ablatiivi", form: "asiakirjalta" },
          { label: "Allatiivi", form: "asiakirjalle" },
          { label: "Essiivi", form: "asiakirjana" },
          { label: "Translatiivi", form: "asiakirjaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asiakirjat" },
          { label: "Partitiivi", form: "asiakirjoja" },
          { label: "Genetiivi", form: "asiakirjojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "matkustusasiakirja",
      en: "travel document",
      taso: "B2",
      esim: { fi: "Passi on matkustusasiakirja.", en: "A passport is a travel document." },
    },
    {
      fi: "asiakirjapyyntö",
      en: "request for documents",
      taso: "B2",
      esim: { fi: "Lähetin viranomaiselle asiakirjapyynnön.", en: "I sent the authority a request for documents." },
    },
  ],
  synonyymit: [
    { fi: "dokumentti", en: "document" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on tärkeä asiakirja.", en: "This is an important document." },
    B1: { fi: "Säilytä asiakirjat turvallisessa paikassa.", en: "Keep the documents in a safe place." },
    B2: {
      fi: "Hakemukseen on liitettävä kaikki pyydetyt asiakirjat alkuperäisinä.",
      en: "All requested documents must be attached to the application as originals.",
    },
  },
  updatedAt: "2026-06-07",
};

export default asiakirja;
