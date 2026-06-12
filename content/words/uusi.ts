import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi, t:d gradation, consonant stem.
// Genitive uuden, partitive uutta, illative uuteen, partitive pl uusia.
const uusi: Word = {
  fi: "uusi",
  slug: "uusi",
  pos: "adjektiivi (tyyppi 27/käsi)",
  posClass: "adjektiivi",
  level: "A1",
  en: "new",
  selitys:
    "Vasta tehty tai hankittu; vastakohta vanha. Tyyppi 27, astevaihtelu t:d, konsonanttivartalo (uutta). Vartalo uute- → uude-.",
  kuva: { alt: "uusi – uusi, juuri hankittu" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 27/käsi; astevaihtelu t:d, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "uuden", merkitys: "of the new" },
      { sija: "partitiivi (yks.)", muoto: "uutta", merkitys: "new (partitive)" },
      { sija: "komparatiivi", muoto: "uudempi", merkitys: "newer" },
    ],
    huom:
      "Vartalo uute- → uude- (t:d): uuden, uuteen, uudessa. Konsonanttivartalo näkyy partitiivissa uutta. Superlatiivi uusin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "uusi" },
          { label: "Partitiivi", form: "uutta" },
          { label: "Genetiivi", form: "uuden" },
          { label: "Inessiivi", form: "uudessa" },
          { label: "Illatiivi", form: "uuteen" },
          { label: "Adessiivi", form: "uudella" },
          { label: "Essiivi", form: "uutena" },
          { label: "Translatiivi", form: "uudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "uudet" },
          { label: "Partitiivi", form: "uusia" },
          { label: "Genetiivi", form: "uusien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "uudempi" },
          { label: "Komparatiivi (gen.)", form: "uudemman" },
          { label: "Komparatiivi (part.)", form: "uudempaa" },
          { label: "Superlatiivi (nom.)", form: "uusin" },
          { label: "Superlatiivi (gen.)", form: "uusimman" },
          { label: "Superlatiivi (part.)", form: "uusinta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uutinen",
      en: "news item",
      taso: "A2",
      esim: { fi: "Kuulin hyvän uutisen.", en: "I heard some good news." },
    },
    {
      fi: "uudistaa",
      en: "to renew, reform",
      taso: "B2",
      esim: { fi: "Yritys uudisti tuotteensa.", en: "The company renewed its products." },
    },
    {
      fi: "uudelleen",
      en: "again, anew",
      taso: "B1",
      esim: { fi: "Yritä uudelleen.", en: "Try again." },
    },
  ],
  synonyymit: [
    { fi: "tuore", en: "fresh, recent" },
    { fi: "ennennäkemätön", en: "novel, unprecedented" },
  ],
  esimerkit: {
    A2: { fi: "Ostin uuden puhelimen.", en: "I bought a new phone." },
    B1: { fi: "Muutimme uuteen asuntoon.", en: "We moved into a new apartment." },
    B2: {
      fi: "Tämä on uusin malli, joka tuli markkinoille viime viikolla.",
      en: "This is the newest model, which hit the market last week.",
    },
  },
  updatedAt: "2026-06-04",
};

export default uusi;
