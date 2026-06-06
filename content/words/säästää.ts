import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st), stem säästä-.
// Present säästän, past säästin, past participle säästänyt.
const saastaa: Word = {
  fi: "säästää",
  slug: "säästää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to save (money, time); to spare",
  selitys:
    "Olla kuluttamatta tai panna talteen: 'säästää rahaa' / 'säästää aikaa'. Tyyppi 53, ei astevaihtelua (st säilyy). Vrt. säästö (saving), tuhlata (to waste).",
  kuva: { emoji: "🐷", alt: "säästää – panna talteen, olla kuluttamatta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-stää); ei astevaihtelua; vartalo säästä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "säästän", merkitys: "I save" },
      { sija: "imperfekti (minä)", muoto: "säästin", merkitys: "I saved" },
      { sija: "NUT-partisiippi", muoto: "säästänyt", merkitys: "(have) saved" },
    ],
    huom:
      "Ei astevaihtelua (st ei vaihtele): säästän, säästät, säästi. 'Säästää jotakin varten' = to save up for. Vastakohta tuhlata. Vrt. säästö = saving, säästäväinen = thrifty.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "säästän" },
          { label: "sinä", form: "säästät" },
          { label: "hän", form: "säästää" },
          { label: "me", form: "säästämme" },
          { label: "te", form: "säästätte" },
          { label: "he", form: "säästävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en säästä" },
          { label: "hän", form: "ei säästä" },
          { label: "he", form: "eivät säästä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "säästin" },
          { label: "sinä", form: "säästit" },
          { label: "hän", form: "säästi" },
          { label: "me", form: "säästimme" },
          { label: "te", form: "säästitte" },
          { label: "he", form: "säästivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen säästänyt" },
          { label: "hän", form: "on säästänyt" },
          { label: "he", form: "ovat säästäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "säästä!" },
          { label: "te", form: "säästäkää!" },
          { label: "kielto (sinä)", form: "älä säästä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "säästö",
      en: "saving(s)",
      taso: "B1",
      esim: { fi: "Minulla on pieniä säästöjä.", en: "I have some small savings." },
    },
    {
      fi: "säästäväinen",
      en: "thrifty, economical",
      taso: "B2",
      esim: { fi: "Hän on hyvin säästäväinen.", en: "She is very thrifty." },
    },
    {
      fi: "säästötili",
      en: "savings account",
      taso: "B2",
      esim: { fi: "Avasin säästötilin pankissa.", en: "I opened a savings account at the bank." },
    },
  ],
  synonyymit: [
    { fi: "panna sivuun", en: "to set aside" },
    { fi: "kerätä", en: "to accumulate, save up" },
  ],
  esimerkit: {
    A2: { fi: "Säästän rahaa matkaa varten.", en: "I'm saving money for a trip." },
    B1: { fi: "Säästimme paljon aikaa oikoreittiä käyttämällä.", en: "We saved a lot of time by taking a shortcut." },
    B2: {
      fi: "Jos säästät pienen summan joka kuukausi, se kasvaa vuosien aikana.",
      en: "If you save a small sum every month, it grows over the years.",
    },
  },
  updatedAt: "2026-06-06",
};

export default saastaa;
