import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem ylittä- ~ ylitä-.
// Present minä ylitän, hän ylittää; imperfect minä ylitin, hän ylitti; NUT ylittänyt.
const ylittää: Word = {
  fi: "ylittää",
  slug: "ylittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to cross (over); to exceed",
  selitys:
    "Mennä jonkin yli tai ylittää raja/määrä: 'ylittää katu' / 'ylittää nopeusrajoitus'. Tyyppi 1 (-ää), astevaihtelu tt:t (ylitän ~ ylittää). Johdettu sanasta yli. Vrt. ylitys, alittaa (vastakohta).",
  kuva: { alt: "ylittää – mennä jonkin yli" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (ylitän ↔ ylittää)",
    muodot: [
      { sija: "preesens (minä)", muoto: "ylitän", merkitys: "I cross" },
      { sija: "imperfekti (minä)", muoto: "ylitin", merkitys: "I crossed" },
      { sija: "NUT-partisiippi", muoto: "ylittänyt", merkitys: "(have) crossed" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (ylitän, ylitin), vahva aste tt hän/he- ja perusmuodossa (ylittää, ylitti). Kohde objektina: 'ylittää katu', 'ylittää odotukset'. Vastakohta alittaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ylitän" },
          { label: "sinä", form: "ylität" },
          { label: "hän", form: "ylittää" },
          { label: "me", form: "ylitämme" },
          { label: "te", form: "ylitätte" },
          { label: "he", form: "ylittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ylitä" },
          { label: "hän", form: "ei ylitä" },
          { label: "he", form: "eivät ylitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ylitin" },
          { label: "sinä", form: "ylitit" },
          { label: "hän", form: "ylitti" },
          { label: "me", form: "ylitimme" },
          { label: "te", form: "ylititte" },
          { label: "he", form: "ylittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ylittänyt" },
          { label: "hän", form: "on ylittänyt" },
          { label: "he", form: "ovat ylittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ylitä!" },
          { label: "te", form: "ylittäkää!" },
          { label: "kielto (sinä)", form: "älä ylitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ylitys",
      en: "crossing; exceeding",
      taso: "B2",
      esim: { fi: "Rajan ylitys kesti tunnin.", en: "The border crossing took an hour." },
    },
    {
      fi: "alittaa",
      en: "to go under, fall below",
      taso: "B2",
      esim: { fi: "Hinta alitti odotukset.", en: "The price fell below expectations." },
    },
    {
      fi: "ylitsepääsemätön",
      en: "insurmountable",
      taso: "B2",
      esim: { fi: "Este ei ollut ylitsepääsemätön.", en: "The obstacle was not insurmountable." },
    },
  ],
  synonyymit: [
    { fi: "mennä yli", en: "to go across" },
    { fi: "kulkea yli", en: "to pass over" },
  ],
  esimerkit: {
    A2: { fi: "Ylitä katu suojatietä pitkin.", en: "Cross the street using the crosswalk." },
    B1: { fi: "Auto ylitti nopeusrajoituksen.", en: "The car exceeded the speed limit." },
    B2: {
      fi: "Lopputulos ylitti kaikki odotukset.",
      en: "The end result exceeded all expectations.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ylittää;
