import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem astee- ~ aste.
// Genitive asteen, partitive astetta, illative asteeseen, partitive pl asteita.
const aste: Word = {
  fi: "aste",
  slug: "aste",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "degree (temperature, angle); stage, level",
  selitys:
    "Lämpötilan, kulman tai vaiheen yksikkö: 'kaksikymmentä astetta'. Tyyppi 48, ei astevaihtelua; vartalo astee-. Partitiivin monikko asteita. Vrt. lämpötila, asteittain (gradually).",
  kuva: { emoji: "🌡️", alt: "aste – lämpötilan tai kulman yksikkö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua; vartalo astee-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "asteen", merkitys: "of the degree" },
      { sija: "partitiivi (yks.)", muoto: "astetta", merkitys: "degree (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asteita", merkitys: "degrees (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e → -ee-): genetiivi asteen, partitiivi astetta, partitiivin monikko asteita. Luvun jälkeen partitiivi: 'kaksikymmentä astetta'. Vrt. asteikko = scale, asteittain = gradually.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aste" },
          { label: "Partitiivi", form: "astetta" },
          { label: "Genetiivi", form: "asteen" },
          { label: "Inessiivi", form: "asteessa" },
          { label: "Elatiivi", form: "asteesta" },
          { label: "Illatiivi", form: "asteeseen" },
          { label: "Adessiivi", form: "asteella" },
          { label: "Ablatiivi", form: "asteelta" },
          { label: "Allatiivi", form: "asteelle" },
          { label: "Essiivi", form: "asteena" },
          { label: "Translatiivi", form: "asteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asteet" },
          { label: "Partitiivi", form: "asteita" },
          { label: "Genetiivi", form: "asteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lämpötila",
      en: "temperature",
      taso: "B1",
      esim: { fi: "Lämpötila on kaksikymmentä astetta.", en: "The temperature is twenty degrees." },
    },
    {
      fi: "asteikko",
      en: "scale",
      taso: "B2",
      esim: { fi: "Arvioi se asteikolla yhdestä viiteen.", en: "Rate it on a scale from one to five." },
    },
    {
      fi: "asteittain",
      en: "gradually, step by step",
      taso: "B2",
      esim: { fi: "Tilanne parani asteittain.", en: "The situation improved gradually." },
    },
  ],
  synonyymit: [
    { fi: "taso", en: "level" },
    { fi: "vaihe", en: "stage, phase" },
  ],
  esimerkit: {
    A2: { fi: "Ulkona on viisi astetta.", en: "It's five degrees outside." },
    B1: { fi: "Vesi kiehuu sadassa asteessa.", en: "Water boils at a hundred degrees." },
    B2: {
      fi: "Lämpötila putosi yön aikana kymmenen astetta.",
      en: "The temperature dropped ten degrees during the night.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aste;
