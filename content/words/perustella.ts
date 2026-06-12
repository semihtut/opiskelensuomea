import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem perustele-.
// Present minä perustelen, hän perustelee; imperfect minä perustelin; NUT perustellut.
const perustella: Word = {
  fi: "perustella",
  slug: "perustella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to justify, give reasons for",
  selitys:
    "Antaa perusteita tai syitä jollekin väitteelle tai päätökselle: 'perustella mielipiteensä'. Tyyppi 3 (-lla/-llä), Kotus 67/tulla, ei astevaihtelua; vartalo perustele-. Johdettu sanasta perustaa/peruste. Vrt. peruste, perustelu.",
  kuva: { alt: "perustella – antaa syitä ja perusteita väitteelle" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; ei astevaihtelua; vartalo perustele-",
    muodot: [
      { sija: "preesens (minä)", muoto: "perustelen", merkitys: "I justify" },
      { sija: "imperfekti (minä)", muoto: "perustelin", merkitys: "I justified" },
      { sija: "NUT-partisiippi", muoto: "perustellut", merkitys: "(have) justified" },
    ],
    huom:
      "Tyyppi 67 (-ella): vahva vartalo perustele- kaikkialla, ei astevaihtelua. NUT-partisiippi perustellut (kaksois-l). 'Perustella jokin jollakin' = to justify sth with sth. Vrt. peruste = grounds, perustelu = justification.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "perustelen" },
          { label: "sinä", form: "perustelet" },
          { label: "hän", form: "perustelee" },
          { label: "me", form: "perustelemme" },
          { label: "te", form: "perustelette" },
          { label: "he", form: "perustelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en perustele" },
          { label: "hän", form: "ei perustele" },
          { label: "he", form: "eivät perustele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "perustelin" },
          { label: "sinä", form: "perustelit" },
          { label: "hän", form: "perusteli" },
          { label: "me", form: "perustelimme" },
          { label: "te", form: "perustelitte" },
          { label: "he", form: "perustelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen perustellut" },
          { label: "hän", form: "on perustellut" },
          { label: "he", form: "ovat perustelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "perustele!" },
          { label: "te", form: "perustelkaa!" },
          { label: "kielto (sinä)", form: "älä perustele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "perustelu",
      en: "justification, argument",
      taso: "B1",
      esim: { fi: "Hänen perustelunsa oli vakuuttava.", en: "His justification was convincing." },
    },
    {
      fi: "peruste",
      en: "grounds, reason, basis",
      taso: "B1",
      esim: { fi: "Millä perusteella väität niin?", en: "On what grounds do you claim that?" },
    },
    {
      fi: "perusteltu",
      en: "justified, well-founded",
      taso: "B2",
      esim: { fi: "Päätös oli hyvin perusteltu.", en: "The decision was well justified." },
    },
  ],
  synonyymit: [
    { fi: "selittää", en: "to explain" },
    { fi: "puolustaa", en: "to defend (a position)" },
  ],
  esimerkit: {
    A2: { fi: "Perustele vastauksesi.", en: "Justify your answer." },
    B1: { fi: "Hän perusteli päätöstään pitkään.", en: "She justified her decision at length." },
    B2: {
      fi: "Jokainen väite on perusteltava luotettavilla lähteillä.",
      en: "Every claim must be justified with reliable sources.",
    },
  },
  updatedAt: "2026-06-07",
};

export default perustella;
