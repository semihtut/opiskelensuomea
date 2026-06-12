import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, no gradation, stem lainaa- ~ laina-.
// Present minä lainaan, hän lainaa; imperfect minä lainasin, hän lainasi; NUT lainannut.
const lainata: Word = {
  fi: "lainata",
  slug: "lainata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to borrow; to lend; to quote",
  selitys:
    "Ottaa tai antaa jotakin käyttöön väliaikaisesti: 'lainata kirja kirjastosta' / 'lainata rahaa ystävälle'. Tyyppi 4 (-ata), ei astevaihtelua. Johdettu sanasta laina. Suunnan ratkaisee sija (ablatiivi = borrow from, allatiivi = lend to).",
  kuva: { alt: "lainata – ottaa tai antaa käyttöön väliaikaisesti" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo lainaa- ~ laina-",
    muodot: [
      { sija: "preesens (minä)", muoto: "lainaan", merkitys: "I borrow / lend" },
      { sija: "imperfekti (minä)", muoto: "lainasin", merkitys: "I borrowed / lent" },
      { sija: "NUT-partisiippi", muoto: "lainannut", merkitys: "(have) borrowed / lent" },
    ],
    huom:
      "Sama verbi tarkoittaa sekä lainaamista että lainaan antamista; suunnan kertoo sija: 'lainata häneltä' (ablatiivi = borrow from), 'lainata hänelle' (allatiivi = lend to). Vrt. laina = loan.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lainaan" },
          { label: "sinä", form: "lainaat" },
          { label: "hän", form: "lainaa" },
          { label: "me", form: "lainaamme" },
          { label: "te", form: "lainaatte" },
          { label: "he", form: "lainaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lainaa" },
          { label: "hän", form: "ei lainaa" },
          { label: "he", form: "eivät lainaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lainasin" },
          { label: "sinä", form: "lainasit" },
          { label: "hän", form: "lainasi" },
          { label: "me", form: "lainasimme" },
          { label: "te", form: "lainasitte" },
          { label: "he", form: "lainasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen lainannut" },
          { label: "hän", form: "on lainannut" },
          { label: "he", form: "ovat lainanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lainaa!" },
          { label: "te", form: "lainatkaa!" },
          { label: "kielto (sinä)", form: "älä lainaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laina",
      en: "loan",
      taso: "B1",
      esim: { fi: "Otimme asuntolainan pankista.", en: "We took a mortgage from the bank." },
    },
    {
      fi: "lainaaja",
      en: "borrower; lender",
      taso: "B2",
      esim: { fi: "Kirjaston lainaajat saavat muistutuksen.", en: "Library borrowers get a reminder." },
    },
    {
      fi: "lainasana",
      en: "loanword",
      taso: "B2",
      esim: { fi: "'Kahvi' on lainasana.", en: "'Kahvi' is a loanword." },
    },
  ],
  synonyymit: [
    { fi: "antaa lainaksi", en: "to lend" },
    { fi: "ottaa lainaksi", en: "to borrow" },
  ],
  esimerkit: {
    A2: { fi: "Lainaan kirjan kirjastosta.", en: "I'll borrow a book from the library." },
    B1: { fi: "Voitko lainata minulle viisi euroa?", en: "Can you lend me five euros?" },
    B2: {
      fi: "Lainasin naapurilta porakoneen, koska omani oli rikki.",
      en: "I borrowed a drill from the neighbour because mine was broken.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lainata;
