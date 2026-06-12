import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem itsenäise-.
// Genitive itsenäisen, partitive itsenäistä, partitive pl itsenäisiä.
const itsenainen: Word = {
  fi: "itsenäinen",
  slug: "itsenäinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "independent, self-reliant",
  selitys:
    "Sellainen, joka pärjää itse eikä ole muista riippuvainen: 'itsenäinen valtio', 'itsenäinen lapsi'. Tyyppi 38/nainen, ei astevaihtelua. Yhdyssana itse + -näinen. Vastakohta riippuvainen. Vrt. itsenäisyys, itse.",
  kuva: { alt: "itsenäinen – itse pärjäävä, muista riippumaton" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo itsenäise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "itsenäisen", merkitys: "of independent" },
      { sija: "partitiivi (yks.)", muoto: "itsenäistä", merkitys: "independent (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "itsenäisiä", merkitys: "independent (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo itsenäise-, partitiivi itsenäistä, monikon partitiivi itsenäisiä. Vastakohta riippuvainen. Vrt. itsenäisyys = independence; Suomen itsenäisyyspäivä 6.12.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "itsenäinen" },
          { label: "Partitiivi", form: "itsenäistä" },
          { label: "Genetiivi", form: "itsenäisen" },
          { label: "Inessiivi", form: "itsenäisessä" },
          { label: "Elatiivi", form: "itsenäisestä" },
          { label: "Illatiivi", form: "itsenäiseen" },
          { label: "Adessiivi", form: "itsenäisellä" },
          { label: "Allatiivi", form: "itsenäiselle" },
          { label: "Translatiivi", form: "itsenäiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "itsenäiset" },
          { label: "Partitiivi", form: "itsenäisiä" },
          { label: "Genetiivi", form: "itsenäisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "itsenäinen" },
          { label: "Komparatiivi", form: "itsenäisempi" },
          { label: "Superlatiivi", form: "itsenäisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "itsenäisyys",
      en: "independence",
      taso: "B1",
      esim: { fi: "Suomi juhlii itsenäisyyttä joulukuussa.", en: "Finland celebrates independence in December." },
    },
    {
      fi: "itsenäisesti",
      en: "independently",
      taso: "B2",
      esim: { fi: "Hän työskentelee itsenäisesti.", en: "He works independently." },
    },
  ],
  synonyymit: [
    { fi: "omatoiminen", en: "self-directed" },
    { fi: "riippumaton", en: "independent" },
  ],
  esimerkit: {
    A2: { fi: "Hän on hyvin itsenäinen lapsi.", en: "She is a very independent child." },
    B1: { fi: "Opiskelu vaatii itsenäistä työskentelyä.", en: "Studying requires independent work." },
    B2: {
      fi: "Maa julistautui itsenäiseksi pitkän kamppailun jälkeen.",
      en: "The country declared itself independent after a long struggle.",
    },
  },
  updatedAt: "2026-06-07",
};

export default itsenainen;
