import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56 (nauraa-type), no gradation, stem paista-.
// Present minä paistan, hän paistaa; imperfect minä paistoin, hän paistoi; NUT paistanut.
const paistaa: Word = {
  fi: "paistaa",
  slug: "paistaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to fry, bake, roast; (of the sun) to shine",
  selitys:
    "Kypsentää ruokaa rasvassa tai uunissa, tai auringosta: paistaa. 'Paistaa kala' / 'aurinko paistaa'. Tyyppi 1 (-aa), tyyppi 56, ei astevaihtelua; imperfektissä a → o (paistoi). Vrt. paisti (roast), paistinpannu.",
  kuva: { emoji: "🍳", alt: "paistaa – kypsentää ruokaa rasvassa tai uunissa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 56; ei astevaihtelua; imperfektissä a → o",
    muodot: [
      { sija: "preesens (minä)", muoto: "paistan", merkitys: "I fry/bake" },
      { sija: "imperfekti (minä)", muoto: "paistoin", merkitys: "I fried/baked" },
      { sija: "NUT-partisiippi", muoto: "paistanut", merkitys: "(have) fried/baked" },
    ],
    huom:
      "Imperfektissä vartalon a muuttuu o:ksi: paistan → paistoin (vrt. nauraa → nauroin). Kaksi merkitystä: 1) kypsentää (paistaa lihaa) 2) aurinko paistaa = the sun shines. Vrt. paisti = roast.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "paistan" },
          { label: "sinä", form: "paistat" },
          { label: "hän", form: "paistaa" },
          { label: "me", form: "paistamme" },
          { label: "te", form: "paistatte" },
          { label: "he", form: "paistavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en paista" },
          { label: "hän", form: "ei paista" },
          { label: "he", form: "eivät paista" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "paistoin" },
          { label: "sinä", form: "paistoit" },
          { label: "hän", form: "paistoi" },
          { label: "me", form: "paistoimme" },
          { label: "te", form: "paistoitte" },
          { label: "he", form: "paistoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen paistanut" },
          { label: "hän", form: "on paistanut" },
          { label: "he", form: "ovat paistaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "paista!" },
          { label: "te", form: "paistakaa!" },
          { label: "kielto (sinä)", form: "älä paista" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "paisti",
      en: "roast (meat dish)",
      taso: "B1",
      esim: { fi: "Sunnuntaina syömme paistia.", en: "On Sunday we eat roast." },
    },
    {
      fi: "paistinpannu",
      en: "frying pan",
      taso: "B1",
      esim: { fi: "Kuumenna paistinpannu.", en: "Heat the frying pan." },
    },
    {
      fi: "auringonpaiste",
      en: "sunshine",
      taso: "B2",
      esim: { fi: "Nautimme auringonpaisteesta.", en: "We enjoyed the sunshine." },
    },
  ],
  synonyymit: [
    { fi: "friteerata", en: "to deep-fry" },
    { fi: "loistaa", en: "to shine (of the sun)" },
  ],
  esimerkit: {
    A2: { fi: "Paistan munat aamupalaksi.", en: "I fry eggs for breakfast." },
    B1: { fi: "Aurinko paistoi koko päivän.", en: "The sun shone all day." },
    B2: {
      fi: "Paistoin kalan voissa ja lisäsin sitruunaa.",
      en: "I fried the fish in butter and added lemon.",
    },
  },
  updatedAt: "2026-06-07",
};

export default paistaa;
