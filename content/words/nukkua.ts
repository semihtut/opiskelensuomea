import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1) with kk:k
// gradation. Weak k in 1st/2nd person (nukun, nukut), strong kk in 3rd (nukkuu).
const nukkua: Word = {
  fi: "nukkua",
  slug: "nukkua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to sleep",
  selitys:
    "Olla unessa, levätä yöllä. Tyyppi 1, astevaihtelu kk:k (minä nukun, mutta hän nukkuu).",
  kuva: { emoji: "😴", alt: "nukkua – nukkuva kasvot" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-a); astevaihtelu kk:k",
    muodot: [
      { sija: "preesens (minä)", muoto: "nukun", merkitys: "I sleep" },
      { sija: "imperfekti (minä)", muoto: "nukuin", merkitys: "I slept" },
      { sija: "kielto (minä)", muoto: "en nuku", merkitys: "I don't sleep" },
    ],
    huom:
      "kk:k astevaihtelu: heikko k yksikön 1./2. persoonassa (nukun, nukut), vahva kk 3. persoonassa (nukkuu, nukkuvat).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "nukun" },
          { label: "sinä", form: "nukut" },
          { label: "hän", form: "nukkuu" },
          { label: "me", form: "nukumme" },
          { label: "te", form: "nukutte" },
          { label: "he", form: "nukkuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en nuku" },
          { label: "sinä", form: "et nuku" },
          { label: "hän", form: "ei nuku" },
          { label: "me", form: "emme nuku" },
          { label: "te", form: "ette nuku" },
          { label: "he", form: "eivät nuku" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "nukuin" },
          { label: "sinä", form: "nukuit" },
          { label: "hän", form: "nukkui" },
          { label: "me", form: "nukuimme" },
          { label: "te", form: "nukuitte" },
          { label: "he", form: "nukkuivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en nukkunut" },
          { label: "sinä", form: "et nukkunut" },
          { label: "hän", form: "ei nukkunut" },
          { label: "me", form: "emme nukkuneet" },
          { label: "te", form: "ette nukkuneet" },
          { label: "he", form: "eivät nukkuneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen nukkunut" },
          { label: "sinä", form: "olet nukkunut" },
          { label: "hän", form: "on nukkunut" },
          { label: "me", form: "olemme nukkuneet" },
          { label: "te", form: "olette nukkuneet" },
          { label: "he", form: "ovat nukkuneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole nukkunut" },
          { label: "hän", form: "ei ole nukkunut" },
          { label: "he", form: "eivät ole nukkuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "nuku!" },
          { label: "te", form: "nukkukaa!" },
          { label: "kielto (sinä)", form: "älä nuku" },
          { label: "kielto (te)", form: "älkää nukkuko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nukahtaa",
      en: "to fall asleep",
      taso: "B1",
      esim: { fi: "Nukahdin heti sohvalle.", en: "I fell asleep on the couch right away." },
    },
    {
      fi: "uni",
      en: "sleep; dream",
      taso: "A2",
      esim: { fi: "Näin oudon unen.", en: "I had a strange dream." },
    },
    {
      fi: "nukuttaa",
      en: "to feel sleepy; to put to sleep",
      taso: "B2",
      esim: { fi: "Minua nukuttaa kovasti.", en: "I feel very sleepy." },
    },
  ],
  synonyymit: [
    { fi: "torkkua", en: "to doze, nap" },
    { fi: "levätä", en: "to rest" },
  ],
  esimerkit: {
    A2: { fi: "Nukun yleensä kahdeksan tuntia.", en: "I usually sleep eight hours." },
    B1: { fi: "Lapsi nukkuu jo sikeästi.", en: "The child is already sleeping soundly." },
    B2: {
      fi: "En saanut nukuttua koko yönä jännityksen takia.",
      en: "I couldn't sleep all night because of the excitement.",
    },
  },
  updatedAt: "2026-06-04",
};

export default nukkua;
