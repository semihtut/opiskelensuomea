import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:d gradation. Nominative sade
// (weak d), inflectional stem sate- (strong t): genitive sateen, partitive sadetta,
// illative sateeseen, partitive pl sateita, nominative pl sateet.
const sade: Word = {
  fi: "sade",
  slug: "sade",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "rain; precipitation",
  selitys:
    "Taivaalta tuleva vesi (myös lumisade). Tyyppi 48, astevaihtelu t:d. Nominatiivi sade, mutta taivutusvartalo sate- (sateen).",
  kuva: { emoji: "🌧️", alt: "sade – sadepisaroita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sateen", merkitys: "of the rain" },
      { sija: "partitiivi (yks.)", muoto: "sadetta", merkitys: "rain (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sateita", merkitys: "rains (partitive pl.)" },
    ],
    huom:
      "Nominatiivi sade ja partitiivi sadetta ovat heikossa asteessa (d). Muut muodot vahvassa asteessa sate-: sateen, sateeseen, sateet, sateita.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sade" },
          { label: "Partitiivi", form: "sadetta" },
          { label: "Genetiivi", form: "sateen" },
          { label: "Inessiivi", form: "sateessa" },
          { label: "Elatiivi", form: "sateesta" },
          { label: "Illatiivi", form: "sateeseen" },
          { label: "Adessiivi", form: "sateella" },
          { label: "Ablatiivi", form: "sateelta" },
          { label: "Allatiivi", form: "sateelle" },
          { label: "Essiivi", form: "sateena" },
          { label: "Translatiivi", form: "sateeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sateet" },
          { label: "Partitiivi", form: "sateita" },
          { label: "Genetiivi", form: "sateiden" },
          { label: "Inessiivi", form: "sateissa" },
          { label: "Illatiivi", form: "sateisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sataa",
      en: "to rain (verb)",
      taso: "A1",
      esim: { fi: "Ulkona sataa kovaa.", en: "It's raining hard outside." },
    },
    {
      fi: "sateenvarjo",
      en: "umbrella",
      taso: "A2",
      esim: { fi: "Ota sateenvarjo mukaan.", en: "Take an umbrella with you." },
    },
    {
      fi: "lumisade",
      en: "snowfall",
      taso: "B1",
      esim: { fi: "Eilen oli kova lumisade.", en: "Yesterday there was heavy snowfall." },
    },
  ],
  synonyymit: [
    { fi: "kuuro", en: "shower (of rain)" },
    { fi: "vesisade", en: "rainfall" },
  ],
  esimerkit: {
    A2: { fi: "Sade alkoi yhtäkkiä.", en: "The rain started suddenly." },
    B1: { fi: "Jäimme sateeseen ilman varjoa.", en: "We got caught in the rain without an umbrella." },
    B2: {
      fi: "Pitkän kuivuuden jälkeen sade oli tervetullutta.",
      en: "After the long drought the rain was welcome.",
    },
  },
  updatedAt: "2026-06-04",
};

export default sade;
