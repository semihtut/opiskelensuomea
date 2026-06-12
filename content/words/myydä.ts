import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 63/saada, no gradation, monosyllabic stem myy-.
// Present minä myyn, hän myy; imperfect minä myin, hän myi; NUT participle myynyt.
const myydä: Word = {
  fi: "myydä",
  slug: "myydä",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "A2",
  en: "to sell",
  selitys:
    "Antaa tavaraa rahaa vastaan: 'myydä auto'. Tyyppi 2 (-dä), ei astevaihtelua; vartalo myy-. Imperfektissä myy- + i → myi(n). Vastakohta ostaa. Vrt. myyjä (seller), myynti (sale).",
  kuva: { alt: "myydä – antaa tavaraa rahaa vastaan" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-dä); ei astevaihtelua; vartalo myy- (Kotus 63/saada)",
    muodot: [
      { sija: "preesens (minä)", muoto: "myyn", merkitys: "I sell" },
      { sija: "imperfekti (minä)", muoto: "myin", merkitys: "I sold" },
      { sija: "NUT-partisiippi", muoto: "myynyt", merkitys: "(have) sold" },
    ],
    huom:
      "Imperfektissä pitkä yy + i lyhenee: myy → myin, myit, myi. NUT-partisiippi myynyt (mon. myyneet). Kohde: 'myydä auto' (totaaliobjekti) tai 'myydä autoa' (partitiivi). Vastakohta ostaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "myyn" },
          { label: "sinä", form: "myyt" },
          { label: "hän", form: "myy" },
          { label: "me", form: "myymme" },
          { label: "te", form: "myytte" },
          { label: "he", form: "myyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en myy" },
          { label: "hän", form: "ei myy" },
          { label: "he", form: "eivät myy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "myin" },
          { label: "sinä", form: "myit" },
          { label: "hän", form: "myi" },
          { label: "me", form: "myimme" },
          { label: "te", form: "myitte" },
          { label: "he", form: "myivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen myynyt" },
          { label: "hän", form: "on myynyt" },
          { label: "he", form: "ovat myyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "myy!" },
          { label: "te", form: "myykää!" },
          { label: "kielto (sinä)", form: "älä myy" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "myyjä",
      en: "seller, salesperson",
      taso: "A2",
      esim: { fi: "Myyjä auttoi minua valitsemaan.", en: "The salesperson helped me choose." },
    },
    {
      fi: "myynti",
      en: "sale, selling",
      taso: "B1",
      esim: { fi: "Tuote on jo myynnissä.", en: "The product is already on sale." },
    },
    {
      fi: "myymälä",
      en: "shop, store",
      taso: "B2",
      esim: { fi: "Avasimme uuden myymälän.", en: "We opened a new store." },
    },
  ],
  synonyymit: [
    { fi: "kaupata", en: "to peddle, sell" },
    { fi: "luovuttaa rahasta", en: "to part with for money" },
  ],
  esimerkit: {
    A2: { fi: "Myyn vanhan polkupyörän.", en: "I'm selling my old bike." },
    B1: { fi: "He myivät talonsa viime keväänä.", en: "They sold their house last spring." },
    B2: {
      fi: "Kauppa myy kesällä eniten jäätelöä ja virvoitusjuomia.",
      en: "In summer the shop sells the most ice cream and soft drinks.",
    },
  },
  updatedAt: "2026-06-06",
};

export default myydä;
