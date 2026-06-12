import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem kuvaile-.
// Present minä kuvailen, hän kuvailee; imperfect minä kuvailin; NUT kuvaillut.
const kuvailla: Word = {
  fi: "kuvailla",
  slug: "kuvailla",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to describe, depict",
  selitys:
    "Kertoa sanoin, millainen jokin tai joku on: 'kuvailla maisemaa'. Tyyppi 3 (-lla), Kotus 67/tulla, ei astevaihtelua; vartalo kuvaile-. Verbin kuvata frekventatiivi. Objekti partitiivissa. Vrt. kuvaus, kuvata.",
  kuva: { alt: "kuvailla – kertoa sanoin, millainen jokin on" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; ei astevaihtelua; vartalo kuvaile-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuvailen", merkitys: "I describe" },
      { sija: "imperfekti (minä)", muoto: "kuvailin", merkitys: "I described" },
      { sija: "NUT-partisiippi", muoto: "kuvaillut", merkitys: "(have) described" },
    ],
    huom:
      "Tyyppi 67 (-illa): vahva vartalo kuvaile- kaikkialla, ei astevaihtelua. NUT-partisiippi kuvaillut. Verbin kuvata frekventatiivijohdos. Objekti partitiivissa: 'kuvailla tapahtumaa'. Vrt. kuvaus = description.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuvailen" },
          { label: "sinä", form: "kuvailet" },
          { label: "hän", form: "kuvailee" },
          { label: "me", form: "kuvailemme" },
          { label: "te", form: "kuvailette" },
          { label: "he", form: "kuvailevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuvaile" },
          { label: "hän", form: "ei kuvaile" },
          { label: "he", form: "eivät kuvaile" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuvailin" },
          { label: "sinä", form: "kuvailit" },
          { label: "hän", form: "kuvaili" },
          { label: "me", form: "kuvailimme" },
          { label: "te", form: "kuvailitte" },
          { label: "he", form: "kuvailivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuvaillut" },
          { label: "hän", form: "on kuvaillut" },
          { label: "he", form: "ovat kuvailleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuvaile!" },
          { label: "te", form: "kuvailkaa!" },
          { label: "kielto (sinä)", form: "älä kuvaile" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuvaus",
      en: "description; filming",
      taso: "B1",
      esim: { fi: "Kirjoita lyhyt kuvaus itsestäsi.", en: "Write a short description of yourself." },
    },
    {
      fi: "kuvaileva",
      en: "descriptive",
      taso: "B2",
      esim: { fi: "Teksti oli hyvin kuvailevaa.", en: "The text was very descriptive." },
    },
  ],
  synonyymit: [
    { fi: "kuvata", en: "to depict, describe" },
    { fi: "luonnehtia", en: "to characterize" },
  ],
  esimerkit: {
    A2: { fi: "Kuvaile, miltä koti näyttää.", en: "Describe what your home looks like." },
    B1: { fi: "Hän kuvaili matkaansa innostuneesti.", en: "She described her trip enthusiastically." },
    B2: {
      fi: "Todistaja kuvaili tapahtumat tarkasti ja yksityiskohtaisesti.",
      en: "The witness described the events precisely and in detail.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kuvailla;
