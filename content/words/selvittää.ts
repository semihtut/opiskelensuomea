import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem selvittä- ~ selvitä-.
// Present minä selvitän, hän selvittää; imperfect minä selvitin, hän selvitti; NUT selvittänyt.
const selvittää: Word = {
  fi: "selvittää",
  slug: "selvittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to find out, clarify, sort out, resolve",
  selitys:
    "Ottaa selvää asiasta tai ratkaista se: 'selvittää totuus'. Tyyppi 1 (-ää), astevaihtelu tt:t (selvitän ~ selvittää). Johdettu sanasta selvä. Vrt. selvitys (report, account), selvä (clear).",
  kuva: { emoji: "🔎", alt: "selvittää – ottaa selvää asiasta tai ratkaista se" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); astevaihtelu tt:t (selvitän ↔ selvittää); vartalo selvittä- ~ selvitä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "selvitän", merkitys: "I find out" },
      { sija: "imperfekti (minä)", muoto: "selvitin", merkitys: "I found out" },
      { sija: "NUT-partisiippi", muoto: "selvittänyt", merkitys: "(have) found out" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (selvitän, selvitin), vahva aste tt hän/he- ja perusmuodossa (selvittää, selvitti). Vrt. selvitä = to manage/become clear (eri, intransitiivinen verbi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "selvitän" },
          { label: "sinä", form: "selvität" },
          { label: "hän", form: "selvittää" },
          { label: "me", form: "selvitämme" },
          { label: "te", form: "selvitätte" },
          { label: "he", form: "selvittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en selvitä" },
          { label: "hän", form: "ei selvitä" },
          { label: "he", form: "eivät selvitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "selvitin" },
          { label: "sinä", form: "selvitit" },
          { label: "hän", form: "selvitti" },
          { label: "me", form: "selvitimme" },
          { label: "te", form: "selvititte" },
          { label: "he", form: "selvittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen selvittänyt" },
          { label: "hän", form: "on selvittänyt" },
          { label: "he", form: "ovat selvittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "selvitä!" },
          { label: "te", form: "selvittäkää!" },
          { label: "kielto (sinä)", form: "älä selvitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selvitys",
      en: "report, account, clarification",
      taso: "B2",
      esim: { fi: "Hän pyysi asiasta selvitystä.", en: "He requested a report on the matter." },
    },
    {
      fi: "selvä",
      en: "clear, sober",
      taso: "A2",
      esim: { fi: "Nyt asia on selvä.", en: "Now the matter is clear." },
    },
    {
      fi: "selvitellä",
      en: "to look into, untangle (gradually)",
      taso: "B2",
      esim: { fi: "He selvittelivät riitaa pitkään.", en: "They sorted out the dispute for a long time." },
    },
  ],
  synonyymit: [
    { fi: "ottaa selvää", en: "to find out" },
    { fi: "ratkaista", en: "to solve, resolve" },
  ],
  esimerkit: {
    A2: { fi: "Selvitän asian huomenna.", en: "I'll sort out the matter tomorrow." },
    B1: { fi: "Poliisi selvitti rikoksen nopeasti.", en: "The police solved the crime quickly." },
    B2: {
      fi: "Ennen päätöstä meidän on selvitettävä, paljonko se maksaa.",
      en: "Before the decision, we must find out how much it costs.",
    },
  },
  updatedAt: "2026-06-06",
};

export default selvittää;
