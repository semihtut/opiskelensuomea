import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, k:∅ gradation, stem hake- ~ hae-.
// Present minä haen, hän hakee; imperfect minä hain, hän haki; NUT hakenut; passive haetaan.
const hakea: Word = {
  fi: "hakea",
  slug: "hakea",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to apply (for); to fetch, get; to search for",
  selitys:
    "1) Pyrkiä saamaan paikka tai etuus: 'hakea työtä', 'hakea yliopistoon'. 2) Noutaa: 'hakea lapsi koulusta'. 3) Etsiä. Tyyppi 1 (-ea), Kotus 58/laskea, astevaihtelu k:∅ (haen). Vrt. hakemus, hakija, etsiä.",
  kuva: { emoji: "🔎", alt: "hakea – pyrkiä saamaan tai noutaa jokin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ea), Kotus 58/laskea; astevaihtelu k:∅ (hae- ~ hake-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "haen", merkitys: "I apply / fetch" },
      { sija: "imperfekti (minä)", muoto: "hain", merkitys: "I applied / fetched" },
      { sija: "NUT-partisiippi", muoto: "hakenut", merkitys: "(have) applied / fetched" },
    ],
    huom:
      "Astevaihtelu k:∅: vahva hake- (hakea, hakee, hakenut), heikko hae- (haen, hain). Rektio: 'hakea jotakin' (partit.: hakea työtä), 'hakea jonnekin' (illat.: hakea yliopistoon). Passiivi haetaan. Vrt. hakemus, hakija.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "haen" },
          { label: "sinä", form: "haet" },
          { label: "hän", form: "hakee" },
          { label: "me", form: "haemme" },
          { label: "te", form: "haette" },
          { label: "he", form: "hakevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en hae" },
          { label: "hän", form: "ei hae" },
          { label: "he", form: "eivät hae" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "hain" },
          { label: "sinä", form: "hait" },
          { label: "hän", form: "haki" },
          { label: "me", form: "haimme" },
          { label: "te", form: "haitte" },
          { label: "he", form: "hakivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen hakenut" },
          { label: "hän", form: "on hakenut" },
          { label: "he", form: "ovat hakeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "hae!" },
          { label: "te", form: "hakekaa!" },
          { label: "kielto (sinä)", form: "älä hae" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hakemus",
      en: "application",
      taso: "B1",
      esim: { fi: "Lähetin hakemuksen eilen.", en: "I sent the application yesterday." },
    },
    {
      fi: "hakija",
      en: "applicant",
      taso: "B1",
      esim: { fi: "Paikkaan oli monta hakijaa.", en: "There were many applicants for the position." },
    },
  ],
  synonyymit: [
    { fi: "noutaa", en: "to fetch" },
    { fi: "etsiä", en: "to search for" },
  ],
  esimerkit: {
    A2: { fi: "Haen lapsen päiväkodista.", en: "I'll fetch the child from daycare." },
    B1: { fi: "Hän hakee uutta työpaikkaa.", en: "She is applying for a new job." },
    B2: {
      fi: "Hain useaan yliopistoon, mutta päätin lopulta ottaa vastaan ensimmäisen paikan.",
      en: "I applied to several universities, but in the end I decided to accept the first place.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hakea;
