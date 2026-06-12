import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 66/rohkaista, no gradation, stem julkaise-.
// Present minä julkaisen, hän julkaisee; imperfect minä julkaisin; NUT julkaissut; passive julkaistaan.
const julkaista: Word = {
  fi: "julkaista",
  slug: "julkaista",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to publish, release",
  selitys:
    "Saattaa julki, julkiseksi: 'julkaista kirja', 'julkaista tulokset'. Tyyppi 3 (-sta), Kotus 66/rohkaista, ei astevaihtelua; vartalo julkaise-. NUT-partisiippi julkaissut, passiivi julkaistaan. Johdettu sanasta julki. Vrt. julkinen, julkaisu.",
  kuva: { alt: "julkaista – saattaa julki tai julkiseksi" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-sta), Kotus 66/rohkaista; ei astevaihtelua; vartalo julkaise-",
    muodot: [
      { sija: "preesens (minä)", muoto: "julkaisen", merkitys: "I publish" },
      { sija: "imperfekti (minä)", muoto: "julkaisin", merkitys: "I published" },
      { sija: "NUT-partisiippi", muoto: "julkaissut", merkitys: "(have) published" },
    ],
    huom:
      "Tyyppi 66 (kuten ratkaista, ehkäistä): vartalo julkaise-, preesens julkaisen, imperfekti julkaisin. NUT-partisiipissa s kahdentuu: julkaissut. Passiivi julkaistaan. Johdettu sanasta julki. Vrt. julkaisu = publication.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "julkaisen" },
          { label: "sinä", form: "julkaiset" },
          { label: "hän", form: "julkaisee" },
          { label: "me", form: "julkaisemme" },
          { label: "te", form: "julkaisette" },
          { label: "he", form: "julkaisevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en julkaise" },
          { label: "hän", form: "ei julkaise" },
          { label: "he", form: "eivät julkaise" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "julkaisin" },
          { label: "sinä", form: "julkaisit" },
          { label: "hän", form: "julkaisi" },
          { label: "me", form: "julkaisimme" },
          { label: "te", form: "julkaisitte" },
          { label: "he", form: "julkaisivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen julkaissut" },
          { label: "hän", form: "on julkaissut" },
          { label: "he", form: "ovat julkaisseet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "julkaise!" },
          { label: "te", form: "julkaiskaa!" },
          { label: "kielto (sinä)", form: "älä julkaise" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "julkaisu",
      en: "publication, release",
      taso: "B2",
      esim: { fi: "Uusi julkaisu ilmestyi.", en: "A new publication came out." },
    },
    {
      fi: "julkinen",
      en: "public",
      taso: "B1",
      esim: { fi: "Tieto on julkista.", en: "The information is public." },
    },
  ],
  synonyymit: [
    { fi: "saattaa julki", en: "to make public" },
    { fi: "painaa", en: "to print, publish" },
  ],
  esimerkit: {
    A2: { fi: "Kirjailija julkaisi uuden kirjan.", en: "The author published a new book." },
    B1: { fi: "Tutkijat julkaisivat tuloksensa lehdessä.", en: "The researchers published their results in a journal." },
    B2: {
      fi: "Raportti julkaistaan ensi viikolla sekä verkossa että painettuna.",
      en: "The report will be published next week both online and in print.",
    },
  },
  updatedAt: "2026-06-07",
};

export default julkaista;
