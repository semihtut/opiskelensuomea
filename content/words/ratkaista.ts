import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 66/rohkaista, no gradation, stem ratkaise-.
// Present minä ratkaisen, hän ratkaisee; imperfect minä ratkaisin; NUT ratkaissut; passive ratkaistaan.
const ratkaista: Word = {
  fi: "ratkaista",
  slug: "ratkaista",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to solve, resolve; to decide",
  selitys:
    "Löytää ratkaisu ongelmaan tai tehdä päätös vaikeassa asiassa: 'ratkaista ongelma'. Tyyppi 3 (-sta), Kotus 66/rohkaista, ei astevaihtelua; vartalo ratkaise-. NUT-partisiippi ratkaissut, passiivi ratkaistaan. Vrt. ratkaisu.",
  kuva: { alt: "ratkaista – löytää ratkaisu ongelmaan" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-sta), Kotus 66/rohkaista; ei astevaihtelua; vartalo ratkaise-",
    muodot: [
      { sija: "preesens (minä)", muoto: "ratkaisen", merkitys: "I solve" },
      { sija: "imperfekti (minä)", muoto: "ratkaisin", merkitys: "I solved" },
      { sija: "NUT-partisiippi", muoto: "ratkaissut", merkitys: "(have) solved" },
    ],
    huom:
      "Tyyppi 66 (kuten rohkaista, nousta): vartalo ratkaise-, preesens ratkaisen, imperfekti ratkaisin. NUT-partisiipissa s kahdentuu: ratkaissut. Passiivi ratkaistaan. Objekti yleensä akkusatiivissa/genetiivissä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ratkaisen" },
          { label: "sinä", form: "ratkaiset" },
          { label: "hän", form: "ratkaisee" },
          { label: "me", form: "ratkaisemme" },
          { label: "te", form: "ratkaisette" },
          { label: "he", form: "ratkaisevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ratkaise" },
          { label: "hän", form: "ei ratkaise" },
          { label: "he", form: "eivät ratkaise" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ratkaisin" },
          { label: "sinä", form: "ratkaisit" },
          { label: "hän", form: "ratkaisi" },
          { label: "me", form: "ratkaisimme" },
          { label: "te", form: "ratkaisitte" },
          { label: "he", form: "ratkaisivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ratkaissut" },
          { label: "hän", form: "on ratkaissut" },
          { label: "he", form: "ovat ratkaisseet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ratkaise!" },
          { label: "te", form: "ratkaiskaa!" },
          { label: "kielto (sinä)", form: "älä ratkaise" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ratkaisu",
      en: "solution, decision",
      taso: "B1",
      esim: { fi: "Löysimme ratkaisun.", en: "We found a solution." },
    },
    {
      fi: "ratkaiseva",
      en: "decisive, crucial",
      taso: "B2",
      esim: { fi: "Se oli ratkaiseva ottelu.", en: "It was a decisive match." },
    },
    {
      fi: "ratketa",
      en: "to get solved (intransitive)",
      taso: "B2",
      esim: { fi: "Ongelma ratkesi lopulta itsestään.", en: "The problem eventually solved itself." },
    },
  ],
  synonyymit: [
    { fi: "selvittää", en: "to clear up, sort out" },
    { fi: "päättää", en: "to decide" },
  ],
  esimerkit: {
    A2: { fi: "Ratkaise tämä tehtävä.", en: "Solve this exercise." },
    B1: { fi: "Ratkaisimme ongelman yhdessä.", en: "We solved the problem together." },
    B2: {
      fi: "Riita saatiin ratkaistua neuvottelemalla rauhallisesti.",
      en: "The dispute was resolved by negotiating calmly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ratkaista;
