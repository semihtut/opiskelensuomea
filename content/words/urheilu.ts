import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem urheilu-.
// Genitive urheilun, partitive urheilua, illative urheiluun, partitive pl urheiluja.
const urheilu: Word = {
  fi: "urheilu",
  slug: "urheilu",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "A2",
  en: "sport, sports, athletics",
  selitys:
    "Fyysinen, usein kilpailullinen toiminta: 'harrastaa urheilua'. Tyyppi 2, ei astevaihtelua. Johdettu sanasta urheilla. Yleensä yksiköllinen. Vrt. urheilija (athlete), urheilulaji (sport, discipline).",
  kuva: { alt: "urheilu – fyysinen, kilpailullinen toiminta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "urheilun", merkitys: "of sport" },
      { sija: "partitiivi (yks.)", muoto: "urheilua", merkitys: "sport (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "urheiluja", merkitys: "sports (partitive pl.)" },
    ],
    huom:
      "Yleensä yksiköllinen yleiskäsite: 'harrastaa urheilua'. Yksittäisestä lajista: urheilulaji. Vrt. urheilla = to do sports, urheilija = athlete, talviurheilu = winter sports.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "urheilu" },
          { label: "Partitiivi", form: "urheilua" },
          { label: "Genetiivi", form: "urheilun" },
          { label: "Inessiivi", form: "urheilussa" },
          { label: "Elatiivi", form: "urheilusta" },
          { label: "Illatiivi", form: "urheiluun" },
          { label: "Adessiivi", form: "urheilulla" },
          { label: "Ablatiivi", form: "urheilulta" },
          { label: "Allatiivi", form: "urheilulle" },
          { label: "Essiivi", form: "urheiluna" },
          { label: "Translatiivi", form: "urheiluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "urheilut" },
          { label: "Partitiivi", form: "urheiluja" },
          { label: "Genetiivi", form: "urheilujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "urheilija",
      en: "athlete",
      taso: "B1",
      esim: { fi: "Hän on huippu-urheilija.", en: "He is a top athlete." },
    },
    {
      fi: "urheilulaji",
      en: "sport, discipline",
      taso: "B1",
      esim: { fi: "Hiihto on suosittu urheilulaji.", en: "Skiing is a popular sport." },
    },
    {
      fi: "urheilla",
      en: "to do sports, exercise",
      taso: "B1",
      esim: { fi: "Urheilen kolme kertaa viikossa.", en: "I exercise three times a week." },
    },
  ],
  synonyymit: [
    { fi: "liikunta", en: "physical exercise" },
    { fi: "kuntoilu", en: "fitness training" },
  ],
  esimerkit: {
    A2: { fi: "Pidän urheilusta.", en: "I like sports." },
    B1: { fi: "Urheilu pitää kehon kunnossa.", en: "Sport keeps the body in shape." },
    B2: {
      fi: "Urheilu opettaa lapsille sekä yhteistyötä että pettymysten sietämistä.",
      en: "Sport teaches children both cooperation and tolerating disappointments.",
    },
  },
  updatedAt: "2026-06-06",
};

export default urheilu;
