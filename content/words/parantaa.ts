import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt–nn gradation, stem paranta-.
// Present parannan, IRREGULAR past paransin (t→s before i), past participle parantanut.
const parantaa: Word = {
  fi: "parantaa",
  slug: "parantaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to improve; to heal, cure",
  selitys:
    "Tehdä paremmaksi tai terveeksi: 'parantaa tulosta' / 'parantaa potilas'. Astevaihtelu nt:nn (parantaa → parannan), imperfekti poikkeava: paransin. Juuri parempi/parane-. Vastakohta huonontaa.",
  kuva: { alt: "parantaa – tehdä paremmaksi tai terveeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-taa); astevaihtelu nt:nn; vartalo paranta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "parannan", merkitys: "I improve" },
      { sija: "imperfekti (minä)", muoto: "paransin", merkitys: "I improved" },
      { sija: "NUT-partisiippi", muoto: "parantanut", merkitys: "(have) improved" },
    ],
    huom:
      "Astevaihtelu nt:nn preesensissä: parannan, parannat, parantaa. Imperfektissä t→s: paransin, paransit, paransi. Vastakohta huonontaa. Vrt. parantua = to heal (intr.), parannus = improvement.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "parannan" },
          { label: "sinä", form: "parannat" },
          { label: "hän", form: "parantaa" },
          { label: "me", form: "parannamme" },
          { label: "te", form: "parannatte" },
          { label: "he", form: "parantavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en paranna" },
          { label: "hän", form: "ei paranna" },
          { label: "he", form: "eivät paranna" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "paransin" },
          { label: "sinä", form: "paransit" },
          { label: "hän", form: "paransi" },
          { label: "me", form: "paransimme" },
          { label: "te", form: "paransitte" },
          { label: "he", form: "paransivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen parantanut" },
          { label: "hän", form: "on parantanut" },
          { label: "he", form: "ovat parantaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "paranna!" },
          { label: "te", form: "parantakaa!" },
          { label: "kielto (sinä)", form: "älä paranna" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "parannus",
      en: "improvement; repair",
      taso: "B1",
      esim: { fi: "Teimme monta parannusta.", en: "We made many improvements." },
    },
    {
      fi: "parantua",
      en: "to heal, recover (intransitive)",
      taso: "B1",
      esim: { fi: "Haava parani nopeasti.", en: "The wound healed quickly." },
    },
    {
      fi: "parannuskeino",
      en: "cure, remedy",
      taso: "B2",
      esim: { fi: "Tautiin ei ole parannuskeinoa.", en: "There is no cure for the disease." },
    },
  ],
  synonyymit: [
    { fi: "kohentaa", en: "to enhance, better" },
    { fi: "hoitaa", en: "to treat, care for" },
  ],
  esimerkit: {
    A2: { fi: "Haluan parantaa suomeani.", en: "I want to improve my Finnish." },
    B1: { fi: "Hän paransi ennätystään.", en: "He improved his record." },
    B2: {
      fi: "Aika parantaa haavat, sanotaan.",
      en: "Time heals all wounds, they say.",
    },
  },
  updatedAt: "2026-06-06",
};

export default parantaa;
