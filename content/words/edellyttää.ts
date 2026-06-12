import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem edellyttä- ~ edellytä-.
// Present minä edellytän, hän edellyttää; imperfect minä edellytin; NUT edellyttänyt.
const edellyttaa: Word = {
  fi: "edellyttää",
  slug: "edellyttää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to require, presuppose, call for",
  selitys:
    "Vaatia jotakin ehtona tai oletuksena: 'menestys edellyttää työtä'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (edellytän). Objekti partitiivissa. Hieman muodollisempi kuin vaatia. Vrt. edellytys, ehto.",
  kuva: { alt: "edellyttää – vaatia jotakin ehtona tai oletuksena" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (edellytä- ~ edellyttä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "edellytän", merkitys: "I require" },
      { sija: "imperfekti (minä)", muoto: "edellytin", merkitys: "I required" },
      { sija: "NUT-partisiippi", muoto: "edellyttänyt", merkitys: "(have) required" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva edellyttä- (edellyttää, edellyttänyt), heikko edellytä- (edellytän, edellytin). Objekti partitiivissa: 'edellyttää huolellisuutta'. Muodollisempi kuin vaatia. Vrt. edellytys = prerequisite.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "edellytän" },
          { label: "sinä", form: "edellytät" },
          { label: "hän", form: "edellyttää" },
          { label: "me", form: "edellytämme" },
          { label: "te", form: "edellytätte" },
          { label: "he", form: "edellyttävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en edellytä" },
          { label: "hän", form: "ei edellytä" },
          { label: "he", form: "eivät edellytä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "edellytin" },
          { label: "sinä", form: "edellytit" },
          { label: "hän", form: "edellytti" },
          { label: "me", form: "edellytimme" },
          { label: "te", form: "edellytitte" },
          { label: "he", form: "edellyttivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen edellyttänyt" },
          { label: "hän", form: "on edellyttänyt" },
          { label: "he", form: "ovat edellyttäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "edellytä!" },
          { label: "te", form: "edellyttäkää!" },
          { label: "kielto (sinä)", form: "älä edellytä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "edellytys",
      en: "prerequisite, precondition",
      taso: "B2",
      esim: { fi: "Hänellä on hyvät edellytykset onnistua.", en: "She has good prerequisites to succeed." },
    },
    {
      fi: "edellyttäen",
      en: "provided that",
      taso: "B2",
      esim: { fi: "Tulen, edellyttäen että ehdin.", en: "I'll come, provided that I have time." },
    },
  ],
  synonyymit: [
    { fi: "vaatia", en: "to require, demand" },
    { fi: "olettaa", en: "to presuppose" },
  ],
  esimerkit: {
    A2: { fi: "Työ edellyttää suomen kielen taitoa.", en: "The job requires knowledge of Finnish." },
    B1: { fi: "Hyvä tulos edellyttää harjoittelua.", en: "A good result requires practice." },
    B2: {
      fi: "Tuen myöntäminen edellyttää, että hakemus jätetään määräaikaan mennessä.",
      en: "Granting the support requires that the application be submitted by the deadline.",
    },
  },
  updatedAt: "2026-06-07",
};

export default edellyttaa;
