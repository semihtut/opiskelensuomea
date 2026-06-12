import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, tt:t gradation, stem mittaa- ~ mita-.
// Present minä mittaan, hän mittaa; imperfect minä mittasin; NUT mitannut.
const mitata: Word = {
  fi: "mitata",
  slug: "mitata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to measure, gauge",
  selitys:
    "Selvittää jonkin koko, määrä tai arvo: 'mitata pituus'. Tyyppi 4 (-ata), Kotus 73/salata, astevaihtelu tt:t (mittaan vahva, mitata/mitannut heikko). Vrt. mitta, mittari, mittaus.",
  kuva: { alt: "mitata – selvittää koko, määrä tai arvo" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata), Kotus 73/salata; astevaihtelu tt:t (mittaa- ~ mita-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "mittaan", merkitys: "I measure" },
      { sija: "imperfekti (minä)", muoto: "mittasin", merkitys: "I measured" },
      { sija: "NUT-partisiippi", muoto: "mitannut", merkitys: "(have) measured" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva mittaa- (mittaan, mittasin), heikko infinitiivissä ja NUT-muodossa (mitata, mitannut). Vrt. mitta = measure, mittari = meter/gauge, mittaus = measurement.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "mittaan" },
          { label: "sinä", form: "mittaat" },
          { label: "hän", form: "mittaa" },
          { label: "me", form: "mittaamme" },
          { label: "te", form: "mittaatte" },
          { label: "he", form: "mittaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en mittaa" },
          { label: "hän", form: "ei mittaa" },
          { label: "he", form: "eivät mittaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "mittasin" },
          { label: "sinä", form: "mittasit" },
          { label: "hän", form: "mittasi" },
          { label: "me", form: "mittasimme" },
          { label: "te", form: "mittasitte" },
          { label: "he", form: "mittasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen mitannut" },
          { label: "hän", form: "on mitannut" },
          { label: "he", form: "ovat mitanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "mittaa!" },
          { label: "te", form: "mitatkaa!" },
          { label: "kielto (sinä)", form: "älä mittaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mitta",
      en: "measure, dimension",
      taso: "B1",
      esim: { fi: "Otin huoneen mitat.", en: "I took the room's measurements." },
    },
    {
      fi: "mittari",
      en: "meter, gauge, indicator",
      taso: "B2",
      esim: { fi: "Mittari näyttää nopeuden.", en: "The gauge shows the speed." },
    },
    {
      fi: "mittaus",
      en: "measurement",
      taso: "B2",
      esim: { fi: "Mittaus toistettiin kolmesti.", en: "The measurement was repeated three times." },
    },
  ],
  synonyymit: [
    { fi: "arvioida", en: "to gauge, estimate" },
    { fi: "punnita", en: "to weigh" },
  ],
  esimerkit: {
    A2: { fi: "Mittaan huoneen.", en: "I'll measure the room." },
    B1: { fi: "Lääkäri mittasi verenpaineen.", en: "The doctor measured the blood pressure." },
    B2: {
      fi: "Menestystä ei voi mitata pelkästään rahassa.",
      en: "Success cannot be measured in money alone.",
    },
  },
  updatedAt: "2026-06-07",
};

export default mitata;
