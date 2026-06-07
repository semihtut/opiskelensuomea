import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem korosta-.
// Present minä korostan, hän korostaa; imperfect minä korostin; NUT korostanut.
const korostaa: Word = {
  fi: "korostaa",
  slug: "korostaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to emphasize, stress, highlight",
  selitys:
    "Tuoda jokin asia erityisesti esiin tai painottaa sitä: 'korostaa rehellisyyden tärkeyttä'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa. Johdettu sanasta korkea/koro. Vrt. korostus, painottaa.",
  kuva: { emoji: "🖍️", alt: "korostaa – tuoda jokin asia erityisesti esiin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo korosta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "korostan", merkitys: "I emphasize" },
      { sija: "imperfekti (minä)", muoto: "korostin", merkitys: "I emphasized" },
      { sija: "NUT-partisiippi", muoto: "korostanut", merkitys: "(have) emphasized" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (korostan, korostin, korostanut). Objekti partitiivissa: 'korostaa asian tärkeyttä'. Myös: tehostaa visuaalisesti (korostaa tekstiä). Vrt. korostus = emphasis, painottaa = to stress.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "korostan" },
          { label: "sinä", form: "korostat" },
          { label: "hän", form: "korostaa" },
          { label: "me", form: "korostamme" },
          { label: "te", form: "korostatte" },
          { label: "he", form: "korostavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en korosta" },
          { label: "hän", form: "ei korosta" },
          { label: "he", form: "eivät korosta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "korostin" },
          { label: "sinä", form: "korostit" },
          { label: "hän", form: "korosti" },
          { label: "me", form: "korostimme" },
          { label: "te", form: "korostitte" },
          { label: "he", form: "korostivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen korostanut" },
          { label: "hän", form: "on korostanut" },
          { label: "he", form: "ovat korostaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "korosta!" },
          { label: "te", form: "korostakaa!" },
          { label: "kielto (sinä)", form: "älä korosta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "korostus",
      en: "emphasis; highlight",
      taso: "B2",
      esim: { fi: "Lisäsin tekstiin korostuksen.", en: "I added a highlight to the text." },
    },
    {
      fi: "korostua",
      en: "to be emphasized, stand out",
      taso: "B2",
      esim: { fi: "Yhteistyön merkitys korostui.", en: "The importance of cooperation stood out." },
    },
  ],
  synonyymit: [
    { fi: "painottaa", en: "to stress" },
    { fi: "tähdentää", en: "to underline, point out" },
  ],
  esimerkit: {
    A2: { fi: "Hän korostaa aina turvallisuutta.", en: "He always emphasizes safety." },
    B1: { fi: "Opettaja korosti läksyjen tärkeyttä.", en: "The teacher stressed the importance of homework." },
    B2: {
      fi: "Puheessaan johtaja korosti, että muutos vaatii kaikkien panosta.",
      en: "In her speech the leader stressed that change requires everyone's contribution.",
    },
  },
  updatedAt: "2026-06-07",
};

export default korostaa;
