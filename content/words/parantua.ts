import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem parantu- ~ parannu-.
// Present parannun, past parannuin, past participle parantunut. Intransitive (≠ parantaa).
const parantua: Word = {
  fi: "parantua",
  slug: "parantua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to recover, to heal; to get better (intransitive)",
  selitys:
    "Tulla terveeksi tai paremmaksi itsestään: 'haava parantuu'. Tyyppi 1 (-ua), astevaihtelu nt:nn (parantua → parannun). Intransitiivinen pari verbille parantaa. Vrt. parantaa (to improve sth), parempi (better).",
  kuva: { alt: "parantua – tulla terveeksi tai paremmaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); astevaihtelu nt:nn (parantu- ↔ parannu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "parannun", merkitys: "I recover" },
      { sija: "imperfekti (minä)", muoto: "parannuin", merkitys: "I recovered" },
      { sija: "NUT-partisiippi", muoto: "parantunut", merkitys: "(have) recovered" },
    ],
    huom:
      "Persoonamuodoissa heikko nn (parannun, parannuin), 3. persoonassa ja infinitiivissä vahva nt (parantuu, parantua, parantunut). Intransitiivi: 'haava parantui'. Vrt. parantaa = to cure / improve (transitiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "parannun" },
          { label: "sinä", form: "parannut" },
          { label: "hän", form: "parantuu" },
          { label: "me", form: "parannumme" },
          { label: "te", form: "parannutte" },
          { label: "he", form: "parantuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en parannu" },
          { label: "hän", form: "ei parannu" },
          { label: "he", form: "eivät parannu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "parannuin" },
          { label: "sinä", form: "parannuit" },
          { label: "hän", form: "parantui" },
          { label: "me", form: "parannuimme" },
          { label: "te", form: "parannuitte" },
          { label: "he", form: "parantuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen parantunut" },
          { label: "hän", form: "on parantunut" },
          { label: "he", form: "ovat parantuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "parannu!" },
          { label: "te", form: "parantukaa!" },
          { label: "kielto (sinä)", form: "älä parannu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "paraneminen",
      en: "recovery, healing",
      taso: "B2",
      esim: { fi: "Paraneminen vie aikaa.", en: "Recovery takes time." },
    },
    {
      fi: "parantaa",
      en: "to cure, heal, improve (transitive)",
      taso: "B1",
      esim: { fi: "Lääkäri paransi potilaan.", en: "The doctor cured the patient." },
    },
    {
      fi: "parantumaton",
      en: "incurable",
      taso: "B2",
      esim: { fi: "Tauti oli parantumaton.", en: "The disease was incurable." },
    },
  ],
  synonyymit: [
    { fi: "toipua", en: "to recover, convalesce" },
    { fi: "tervehtyä", en: "to get well" },
  ],
  esimerkit: {
    A2: { fi: "Haava parantui nopeasti.", en: "The wound healed quickly." },
    B1: { fi: "Toivon, että parannut pian.", en: "I hope you get well soon." },
    B2: {
      fi: "Sairaus parantui kokonaan parin viikon levon jälkeen.",
      en: "The illness cleared up completely after a couple of weeks of rest.",
    },
  },
  updatedAt: "2026-06-06",
};

export default parantua;
