import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, t:d gradation (ht:hd), i-stem.
// Present minä huolehdin = imperfect minä huolehdin; hän huolehtii/huolehti; NUT huolehtinut. Gov. elative.
const huolehtia: Word = {
  fi: "huolehtia",
  slug: "huolehtia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to take care of, look after; to see to",
  selitys:
    "Pitää huolta jostakin tai jostakusta: 'huolehtia lapsista'. Tyyppi 1 (-ia), Kotus 61/sallia, astevaihtelu ht:hd (huolehdin). i-vartalo: minä-muoto sama preesensissä ja imperfektissä. Rektio: elatiivi (huolehtia jostakin). Vrt. hoitaa, pitää huolta, huoli.",
  kuva: { alt: "huolehtia – pitää huolta jostakin tai jostakusta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia), Kotus 61/sallia; astevaihtelu ht:hd (huoleht- ~ huolehd-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "huolehdin", merkitys: "I take care of" },
      { sija: "imperfekti (minä)", muoto: "huolehdin", merkitys: "I took care of (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "huolehtinut", merkitys: "(have) taken care of" },
    ],
    huom:
      "i-vartalo: minä huolehdin on SAMA preesensissä ja imperfektissä; vain hän eroaa (huolehtii ↔ huolehti). Astevaihtelu ht:hd. Rektio: 'huolehtia jostakin' (elatiivi). Vrt. hoitaa, pitää huolta.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "huolehdin" },
          { label: "sinä", form: "huolehdit" },
          { label: "hän", form: "huolehtii" },
          { label: "me", form: "huolehdimme" },
          { label: "te", form: "huolehditte" },
          { label: "he", form: "huolehtivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en huolehdi" },
          { label: "hän", form: "ei huolehdi" },
          { label: "he", form: "eivät huolehdi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "huolehdin" },
          { label: "sinä", form: "huolehdit" },
          { label: "hän", form: "huolehti" },
          { label: "me", form: "huolehdimme" },
          { label: "te", form: "huolehditte" },
          { label: "he", form: "huolehtivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen huolehtinut" },
          { label: "hän", form: "on huolehtinut" },
          { label: "he", form: "ovat huolehtineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "huolehdi!" },
          { label: "te", form: "huolehtikaa!" },
          { label: "kielto (sinä)", form: "älä huolehdi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huoli",
      en: "worry, concern",
      taso: "B1",
      esim: { fi: "Älä kanna turhaa huolta.", en: "Don't carry needless worry." },
    },
    {
      fi: "huolenpito",
      en: "care, caregiving",
      taso: "B2",
      esim: { fi: "Vanhukset tarvitsevat huolenpitoa.", en: "The elderly need care." },
    },
  ],
  synonyymit: [
    { fi: "hoitaa", en: "to take care of" },
    { fi: "pitää huolta", en: "to look after" },
  ],
  esimerkit: {
    A2: { fi: "Huolehdin kotieläimistä.", en: "I take care of the pets." },
    B1: { fi: "Kuka huolehtii lapsista illalla?", en: "Who takes care of the children in the evening?" },
    B2: {
      fi: "Jokaisen on huolehdittava omista asiakirjoistaan ennen lähtöä.",
      en: "Everyone must see to their own documents before departure.",
    },
  },
  updatedAt: "2026-06-07",
};

export default huolehtia;
