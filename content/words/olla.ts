import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (present 3pl "ovat"; participle ollut/olleet) and
// Kielitoimiston sanakirja. Irregular/suppletive type-3 verb; primary auxiliary.
const olla: Word = {
  fi: "olla",
  slug: "olla",
  pos: "verbi (tyyppi 3, epäsäännöllinen)",
  posClass: "verbi",
  level: "A1",
  en: "to be; to have (in the 'minulla on' construction)",
  selitys:
    "Suomen yleisin verbi: ilmaisee olemassaoloa, tilaa ja sijaintia. Toimii myös apuverbinä perfektissä ja pluskvamperfektissä.",
  kuva: { alt: "olla – ihminen seisomassa (oleminen)" },

  kielioppi: {
    tyyppi: "tyyppi 3, epäsäännöllinen; vartalo ole-",
    muodot: [
      { sija: "preesens (minä)", muoto: "olen", merkitys: "I am" },
      { sija: "preesens (hän)", muoto: "on", merkitys: "(s)he/it is" },
      { sija: "imperfekti (minä)", muoto: "olin", merkitys: "I was" },
      { sija: "kielto (minä)", muoto: "en ole", merkitys: "I am not" },
    ],
    huom:
      "Apuverbi: perfekti ja pluskvamperfekti = olla + NUT-partisiippi (olen ollut). Monikon 3. persoona on epäsäännöllinen: ovat. Omistus ilmaistaan 'minulla on'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "olen" },
          { label: "sinä", form: "olet" },
          { label: "hän", form: "on" },
          { label: "me", form: "olemme" },
          { label: "te", form: "olette" },
          { label: "he", form: "ovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ole" },
          { label: "sinä", form: "et ole" },
          { label: "hän", form: "ei ole" },
          { label: "me", form: "emme ole" },
          { label: "te", form: "ette ole" },
          { label: "he", form: "eivät ole" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "olin" },
          { label: "sinä", form: "olit" },
          { label: "hän", form: "oli" },
          { label: "me", form: "olimme" },
          { label: "te", form: "olitte" },
          { label: "he", form: "olivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en ollut" },
          { label: "sinä", form: "et ollut" },
          { label: "hän", form: "ei ollut" },
          { label: "me", form: "emme olleet" },
          { label: "te", form: "ette olleet" },
          { label: "he", form: "eivät olleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ollut" },
          { label: "sinä", form: "olet ollut" },
          { label: "hän", form: "on ollut" },
          { label: "me", form: "olemme olleet" },
          { label: "te", form: "olette olleet" },
          { label: "he", form: "ovat olleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole ollut" },
          { label: "hän", form: "ei ole ollut" },
          { label: "he", form: "eivät ole olleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ole!" },
          { label: "te", form: "olkaa!" },
          { label: "kielto (sinä)", form: "älä ole" },
          { label: "kielto (te)", form: "älkää olko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "olo",
      en: "state, feeling (of being)",
      taso: "A2",
      esim: { fi: "Minulla on hyvä olo.", en: "I feel good." },
    },
    {
      fi: "oleskella",
      en: "to stay, reside, hang around",
      taso: "B1",
      esim: { fi: "Oleskelin Suomessa koko kesän.", en: "I stayed in Finland all summer." },
    },
    {
      fi: "olemassa",
      en: "in existence, existing",
      taso: "B1",
      esim: { fi: "Onko se todella olemassa?", en: "Does it really exist?" },
    },
  ],
  synonyymit: [
    { fi: "sijaita", en: "to be located" },
    { fi: "löytyä", en: "to be found, exist" },
  ],
  esimerkit: {
    A2: { fi: "Minä olen suomalainen.", en: "I am Finnish." },
    B1: {
      fi: "Olemme olleet ystäviä jo kymmenen vuotta.",
      en: "We have been friends for ten years already.",
    },
    B2: {
      fi: "Jos olisin tiennyt, olisin ollut paikalla.",
      en: "If I had known, I would have been there.",
    },
  },
  updatedAt: "2026-06-04",
};

export default olla;
