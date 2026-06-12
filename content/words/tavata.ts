import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), p:v gradation,
// stem tapaa-/tavaa-. Present tapaan, past tapasin, past participle tavannut.
const tavata: Word = {
  fi: "tavata",
  slug: "tavata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to meet",
  selitys:
    "Kohdata joku; nähdä henkilö. Tyyppi 4 (-ata), astevaihtelu p:v: tavata → tapaan, NUT tavannut. Vaatii partitiivin: 'tapaan ystävän'.",
  kuva: { alt: "tavata – kaksi henkilöä tapaa" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); astevaihtelu p:v (tapaan ~ tavata)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tapaan", merkitys: "I meet" },
      { sija: "imperfekti (minä)", muoto: "tapasin", merkitys: "I met" },
      { sija: "NUT-partisiippi", muoto: "tavannut", merkitys: "(have) met" },
    ],
    huom:
      "Vahva aste p näkyy preesensissä ja imperfektissä (tapaan, tapasin), heikko v infinitiivissä ja NUT-partisiipissa (tavata, tavannut). Objekti partitiivissa: 'tapaan hänet/sinut'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tapaan" },
          { label: "sinä", form: "tapaat" },
          { label: "hän", form: "tapaa" },
          { label: "me", form: "tapaamme" },
          { label: "te", form: "tapaatte" },
          { label: "he", form: "tapaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tapaa" },
          { label: "hän", form: "ei tapaa" },
          { label: "he", form: "eivät tapaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tapasin" },
          { label: "sinä", form: "tapasit" },
          { label: "hän", form: "tapasi" },
          { label: "me", form: "tapasimme" },
          { label: "te", form: "tapasitte" },
          { label: "he", form: "tapasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tavannut" },
          { label: "hän", form: "on tavannut" },
          { label: "he", form: "ovat tavanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tapaa!" },
          { label: "te", form: "tavatkaa!" },
          { label: "kielto (sinä)", form: "älä tapaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tapaaminen",
      en: "meeting, appointment",
      taso: "B1",
      esim: { fi: "Minulla on tapaaminen kello kaksi.", en: "I have a meeting at two o'clock." },
    },
    {
      fi: "tavata uudelleen",
      en: "to meet again",
      taso: "A2",
      esim: { fi: "Toivottavasti tapaamme uudelleen.", en: "Hopefully we'll meet again." },
    },
    {
      fi: "tapaamispaikka",
      en: "meeting place",
      taso: "B2",
      esim: { fi: "Sovimme tapaamispaikan torilta.", en: "We agreed on a meeting place at the market square." },
    },
  ],
  synonyymit: [
    { fi: "nähdä", en: "to see (meet)" },
    { fi: "kohdata", en: "to encounter" },
  ],
  esimerkit: {
    A2: { fi: "Tapaan ystäväni kahvilassa.", en: "I'm meeting my friend at the café." },
    B1: { fi: "Tapasimme ensimmäisen kerran koulussa.", en: "We met for the first time at school." },
    B2: {
      fi: "Olen tavannut hänet vain kerran, mutta muistan keskustelumme yhä.",
      en: "I've met him only once, but I still remember our conversation.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tavata;
