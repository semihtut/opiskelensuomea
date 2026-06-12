import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation, stem kestä-.
// Present minä kestän, hän kestää; imperfect minä kestin, hän kesti; NUT participle kestänyt.
const kestää: Word = {
  fi: "kestää",
  slug: "kestää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to last, take (time); to withstand, endure, tolerate",
  selitys:
    "Jatkua tietyn ajan, tai sietää/kestää rasitusta: 'matka kestää tunnin' / 'kestää kylmää'. Tyyppi 1 (-ää), tyyppi 53/muistaa, ei astevaihtelua (st säilyy). Vrt. kesto (duration), kestävä (durable).",
  kuva: { alt: "kestää – jatkua tietyn ajan tai sietää rasitusta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; ei astevaihtelua; vartalo kestä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kestän", merkitys: "I withstand / it takes" },
      { sija: "imperfekti (minä)", muoto: "kestin", merkitys: "I withstood" },
      { sija: "NUT-partisiippi", muoto: "kestänyt", merkitys: "(have) lasted / withstood" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Kaksi merkitystä: 1) kestää aikaa ('matka kestää tunnin') 2) sietää/kestää ('en kestä häntä' = I can't stand him). Vrt. kesto = duration.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kestän" },
          { label: "sinä", form: "kestät" },
          { label: "hän", form: "kestää" },
          { label: "me", form: "kestämme" },
          { label: "te", form: "kestätte" },
          { label: "he", form: "kestävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kestä" },
          { label: "hän", form: "ei kestä" },
          { label: "he", form: "eivät kestä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kestin" },
          { label: "sinä", form: "kestit" },
          { label: "hän", form: "kesti" },
          { label: "me", form: "kestimme" },
          { label: "te", form: "kestitte" },
          { label: "he", form: "kestivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kestänyt" },
          { label: "hän", form: "on kestänyt" },
          { label: "he", form: "ovat kestäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kestä!" },
          { label: "te", form: "kestäkää!" },
          { label: "kielto (sinä)", form: "älä kestä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kesto",
      en: "duration, length",
      taso: "B1",
      esim: { fi: "Elokuvan kesto on kaksi tuntia.", en: "The film's duration is two hours." },
    },
    {
      fi: "kestävä",
      en: "durable, lasting; sustainable",
      taso: "B2",
      esim: { fi: "Tuote on kestävä ja laadukas.", en: "The product is durable and high-quality." },
    },
    {
      fi: "kestävyys",
      en: "endurance, durability",
      taso: "B2",
      esim: { fi: "Juoksu vaatii kestävyyttä.", en: "Running requires endurance." },
    },
  ],
  synonyymit: [
    { fi: "jatkua", en: "to continue, last" },
    { fi: "sietää", en: "to tolerate, bear" },
  ],
  esimerkit: {
    A2: { fi: "Matka kestää tunnin.", en: "The trip takes an hour." },
    B1: { fi: "En kestä tätä melua enää.", en: "I can't stand this noise anymore." },
    B2: {
      fi: "Hyvin tehty työkalu kestää käytössä vuosikymmeniä.",
      en: "A well-made tool lasts decades in use.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kestää;
