import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem sivu-.
// Genitive sivun, partitive sivua, illative sivuun, partitive pl sivuja.
const sivu: Word = {
  fi: "sivu",
  slug: "sivu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "page; side",
  selitys:
    "Kirjan tai netin sivu, tai jonkin kylki: 'kirjan sivu' / 'tien sivu'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko sivuja. Vrt. sivusto (website), sivuuttaa (to bypass), verkkosivu.",
  kuva: { emoji: "📄", alt: "sivu – kirjan tai netin sivu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sivun", merkitys: "of the page" },
      { sija: "partitiivi (yks.)", muoto: "sivua", merkitys: "page (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sivuja", merkitys: "pages (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1, ei astevaihtelua. 'Sivulla kymmenen' = on page ten (adessiivi). 'Tien sivussa' = at the side of the road. Vrt. verkkosivu = web page.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sivu" },
          { label: "Partitiivi", form: "sivua" },
          { label: "Genetiivi", form: "sivun" },
          { label: "Inessiivi", form: "sivussa" },
          { label: "Elatiivi", form: "sivusta" },
          { label: "Illatiivi", form: "sivuun" },
          { label: "Adessiivi", form: "sivulla" },
          { label: "Ablatiivi", form: "sivulta" },
          { label: "Allatiivi", form: "sivulle" },
          { label: "Essiivi", form: "sivuna" },
          { label: "Translatiivi", form: "sivuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sivut" },
          { label: "Partitiivi", form: "sivuja" },
          { label: "Genetiivi", form: "sivujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verkkosivu",
      en: "web page",
      taso: "B1",
      esim: { fi: "Yrityksen verkkosivu on uudistettu.", en: "The company's web page has been renewed." },
    },
    {
      fi: "etusivu",
      en: "front page, home page",
      taso: "B1",
      esim: { fi: "Uutinen oli lehden etusivulla.", en: "The news was on the front page of the paper." },
    },
    {
      fi: "sivuuttaa",
      en: "to bypass, ignore, pass",
      taso: "B2",
      esim: { fi: "Hän sivuutti kysymyksen.", en: "He bypassed the question." },
    },
  ],
  synonyymit: [
    { fi: "kylki", en: "side, flank" },
    { fi: "lehti", en: "leaf, page" },
  ],
  esimerkit: {
    A2: { fi: "Lue teksti sivulta viisi.", en: "Read the text on page five." },
    B1: { fi: "Kirjassa on yli kolmesataa sivua.", en: "The book has over three hundred pages." },
    B2: {
      fi: "Käännä sivua, niin näet tehtävän vastaukset.",
      en: "Turn the page and you'll see the answers to the exercise.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sivu;
