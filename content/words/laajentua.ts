import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem laajentu- ~ laajennu-.
// Present minä laajennun, hän laajentuu; imperfect minä laajennuin; NUT laajentunut. Intransitive.
const laajentua: Word = {
  fi: "laajentua",
  slug: "laajentua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to expand, broaden, widen",
  selitys:
    "Tulla laajemmaksi tai suuremmaksi: 'toiminta laajentui ulkomaille'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu nt:nn (laajennun). Intransitiivinen (transit. laajentaa). Johdettu sanasta laaja. Vrt. laajentaa, laajeneminen, laaja.",
  kuva: { alt: "laajentua – tulla laajemmaksi tai suuremmaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu nt:nn (laajentu- ~ laajennu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "laajennun", merkitys: "I expand" },
      { sija: "imperfekti (minä)", muoto: "laajennuin", merkitys: "I expanded" },
      { sija: "NUT-partisiippi", muoto: "laajentunut", merkitys: "(have) expanded" },
    ],
    huom:
      "Astevaihtelu nt:nn: heikko laajennu- (laajennun, laajennuin), vahva laajentu- (laajentua, laajentuu, laajentunut). Intransitiivinen; transitiivinen pari on laajentaa. Johdettu sanasta laaja. Vastakohta supistua.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "laajennun" },
          { label: "sinä", form: "laajennut" },
          { label: "hän / se", form: "laajentuu" },
          { label: "me", form: "laajennumme" },
          { label: "te", form: "laajennutte" },
          { label: "he / ne", form: "laajentuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en laajennu" },
          { label: "se", form: "ei laajennu" },
          { label: "ne", form: "eivät laajennu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "laajennuin" },
          { label: "hän / se", form: "laajentui" },
          { label: "ne", form: "laajentuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen laajentunut" },
          { label: "se", form: "on laajentunut" },
          { label: "ne", form: "ovat laajentuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laajentaa",
      en: "to expand, widen (sth)",
      taso: "B2",
      esim: { fi: "Yritys laajentaa toimintaansa.", en: "The company is expanding its operations." },
    },
    {
      fi: "laaja",
      en: "broad, wide, extensive",
      taso: "B1",
      esim: { fi: "Hänellä on laaja sanavarasto.", en: "She has a broad vocabulary." },
    },
  ],
  synonyymit: [
    { fi: "kasvaa", en: "to grow" },
    { fi: "levitä", en: "to spread" },
  ],
  esimerkit: {
    A2: { fi: "Kaupunki laajentuu joka vuosi.", en: "The city expands every year." },
    B1: { fi: "Yrityksen toiminta laajentui nopeasti.", en: "The company's operations expanded quickly." },
    B2: {
      fi: "Kun kysyntä kasvoi, tuotanto laajentui myös naapurimaihin.",
      en: "As demand grew, production also expanded into neighbouring countries.",
    },
  },
  updatedAt: "2026-06-07",
};

export default laajentua;
