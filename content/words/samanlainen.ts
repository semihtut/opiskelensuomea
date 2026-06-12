import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem samanlaise-.
// Genitive samanlaisen, partitive samanlaista, partitive pl samanlaisia.
const samanlainen: Word = {
  fi: "samanlainen",
  slug: "samanlainen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "similar, the same kind of, alike",
  selitys:
    "Sellainen, joka muistuttaa toista tai on samanlaatuinen: 'meillä on samanlaiset takit'. Tyyppi 38/nainen, ei astevaihtelua. Yhdyssana sama + -lainen. Vastakohta erilainen. Vrt. samanlaisuus, sama.",
  kuva: { alt: "samanlainen – toista muistuttava, samanlaatuinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo samanlaise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "samanlaisen", merkitys: "of similar" },
      { sija: "partitiivi (yks.)", muoto: "samanlaista", merkitys: "similar (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "samanlaisia", merkitys: "similar (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo samanlaise-, partitiivi samanlaista, monikon partitiivi samanlaisia. Vastakohta erilainen. 'Samanlainen kuin' = the same as. Komparatiivia (samanlaisempi) käytetään harvoin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "samanlainen" },
          { label: "Partitiivi", form: "samanlaista" },
          { label: "Genetiivi", form: "samanlaisen" },
          { label: "Inessiivi", form: "samanlaisessa" },
          { label: "Elatiivi", form: "samanlaisesta" },
          { label: "Illatiivi", form: "samanlaiseen" },
          { label: "Adessiivi", form: "samanlaisella" },
          { label: "Ablatiivi", form: "samanlaiselta" },
          { label: "Allatiivi", form: "samanlaiselle" },
          { label: "Essiivi", form: "samanlaisena" },
          { label: "Translatiivi", form: "samanlaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "samanlaiset" },
          { label: "Partitiivi", form: "samanlaisia" },
          { label: "Genetiivi", form: "samanlaisten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "samanlaisuus",
      en: "similarity, sameness",
      taso: "B2",
      esim: { fi: "Sisarusten samanlaisuus yllätti.", en: "The siblings' similarity surprised us." },
    },
    {
      fi: "sama",
      en: "the same",
      taso: "A2",
      esim: { fi: "Meillä on sama opettaja.", en: "We have the same teacher." },
    },
  ],
  synonyymit: [
    { fi: "samankaltainen", en: "of the same kind" },
    { fi: "vastaava", en: "corresponding, equivalent" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on samanlaiset kengät.", en: "We have similar shoes." },
    B1: { fi: "Tilanne on samanlainen kuin viime vuonna.", en: "The situation is the same as last year." },
    B2: {
      fi: "Vaikka kaksoset näyttävät samanlaisilta, heidän luonteensa ovat erilaiset.",
      en: "Although the twins look alike, their personalities are different.",
    },
  },
  updatedAt: "2026-06-07",
};

export default samanlainen;
