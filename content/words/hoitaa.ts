import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, t:d gradation, stem hoita- ~ hoida-.
// Present minä hoidan, hän hoitaa; imperfect minä hoidin, hän hoiti; NUT participle hoitanut.
const hoitaa: Word = {
  fi: "hoitaa",
  slug: "hoitaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to take care of, handle, treat, nurse",
  selitys:
    "Pitää huolta jostakin tai hoitaa asia kuntoon: 'hoitaa lapsia' / 'hoitaa asia'. Tyyppi 1 (-aa), astevaihtelu t:d (hoidan ~ hoitaa). Vrt. hoito (care), hoitaja (nurse, carer).",
  kuva: { emoji: "🩺", alt: "hoitaa – pitää huolta jostakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu t:d (hoidan ↔ hoitaa); vartalo hoita- ~ hoida-",
    muodot: [
      { sija: "preesens (minä)", muoto: "hoidan", merkitys: "I take care of" },
      { sija: "imperfekti (minä)", muoto: "hoidin", merkitys: "I took care of" },
      { sija: "NUT-partisiippi", muoto: "hoitanut", merkitys: "(have) taken care of" },
    ],
    huom:
      "Heikko aste d minä/sinä/me/te-muodoissa (hoidan, hoidin), vahva aste t hän/he- ja perusmuodossa (hoitaa, hoiti). Kohde: 'hoitaa lapsia' (partitiivi), 'hoitaa asia' (totaaliobjekti).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "hoidan" },
          { label: "sinä", form: "hoidat" },
          { label: "hän", form: "hoitaa" },
          { label: "me", form: "hoidamme" },
          { label: "te", form: "hoidatte" },
          { label: "he", form: "hoitavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en hoida" },
          { label: "hän", form: "ei hoida" },
          { label: "he", form: "eivät hoida" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "hoidin" },
          { label: "sinä", form: "hoidit" },
          { label: "hän", form: "hoiti" },
          { label: "me", form: "hoidimme" },
          { label: "te", form: "hoiditte" },
          { label: "he", form: "hoitivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen hoitanut" },
          { label: "hän", form: "on hoitanut" },
          { label: "he", form: "ovat hoitaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "hoida!" },
          { label: "te", form: "hoitakaa!" },
          { label: "kielto (sinä)", form: "älä hoida" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hoito",
      en: "care, treatment",
      taso: "B1",
      esim: { fi: "Potilas sai hyvää hoitoa.", en: "The patient received good care." },
    },
    {
      fi: "hoitaja",
      en: "nurse, carer",
      taso: "A2",
      esim: { fi: "Hoitaja auttoi vanhusta.", en: "The nurse helped the elderly person." },
    },
    {
      fi: "hoitua",
      en: "to get handled, sort itself out",
      taso: "B2",
      esim: { fi: "Asia hoitui nopeasti.", en: "The matter got handled quickly." },
    },
  ],
  synonyymit: [
    { fi: "huolehtia", en: "to take care of, see to" },
    { fi: "järjestää", en: "to arrange, sort out" },
  ],
  esimerkit: {
    A2: { fi: "Hoidan lapsia viikonloppuna.", en: "I'm taking care of the children at the weekend." },
    B1: { fi: "Hän hoiti asian puolestani.", en: "He handled the matter on my behalf." },
    B2: {
      fi: "Jos hoidat työsi hyvin, sinuun luotetaan jatkossakin.",
      en: "If you do your job well, you will be trusted in the future too.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hoitaa;
