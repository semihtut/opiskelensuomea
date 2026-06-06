import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem kuljetta- ~ kuljeta-.
// Present kuljetan, past kuljetin, past participle kuljettanut.
const kuljettaa: Word = {
  fi: "kuljettaa",
  slug: "kuljettaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to transport, to carry, to drive (a vehicle)",
  selitys:
    "Siirtää jotakin paikasta toiseen tai ajaa ajoneuvoa: 'kuljettaa tavaraa'. Tyyppi 1 (-aa), astevaihtelu tt:t (kuljetan). Kausatiivi verbistä kulkea. Vrt. kuljettaja (driver), kuljetus (transport).",
  kuva: { emoji: "🚚", alt: "kuljettaa – siirtää jotakin paikasta toiseen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (kuljetta- ↔ kuljeta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuljetan", merkitys: "I transport" },
      { sija: "imperfekti (minä)", muoto: "kuljetin", merkitys: "I transported" },
      { sija: "NUT-partisiippi", muoto: "kuljettanut", merkitys: "(have) transported" },
    ],
    huom:
      "Persoonamuodoissa heikko t (kuljetan), infinitiivissä vahva tt (kuljettaa). Kausatiivi: 'panna kulkemaan'. Vrt. kulkea = to go (itse), kuljettaja = driver, kuljetus = transport.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuljetan" },
          { label: "sinä", form: "kuljetat" },
          { label: "hän", form: "kuljettaa" },
          { label: "me", form: "kuljetamme" },
          { label: "te", form: "kuljetatte" },
          { label: "he", form: "kuljettavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuljeta" },
          { label: "hän", form: "ei kuljeta" },
          { label: "he", form: "eivät kuljeta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuljetin" },
          { label: "sinä", form: "kuljetit" },
          { label: "hän", form: "kuljetti" },
          { label: "me", form: "kuljetimme" },
          { label: "te", form: "kuljetitte" },
          { label: "he", form: "kuljettivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuljettanut" },
          { label: "hän", form: "on kuljettanut" },
          { label: "he", form: "ovat kuljettaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuljeta!" },
          { label: "te", form: "kuljettakaa!" },
          { label: "kielto (sinä)", form: "älä kuljeta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuljettaja",
      en: "driver",
      taso: "B1",
      esim: { fi: "Bussin kuljettaja oli ystävällinen.", en: "The bus driver was friendly." },
    },
    {
      fi: "kuljetus",
      en: "transport, transportation",
      taso: "B1",
      esim: { fi: "Tavaran kuljetus kestää pari päivää.", en: "Transporting the goods takes a couple of days." },
    },
    {
      fi: "kuljetusyritys",
      en: "transport company",
      taso: "B2",
      esim: { fi: "Kuljetusyritys hoiti muuton.", en: "The transport company handled the move." },
    },
  ],
  synonyymit: [
    { fi: "kantaa", en: "to carry" },
    { fi: "viedä", en: "to take (somewhere)" },
  ],
  esimerkit: {
    A2: { fi: "Isä kuljettaa lapset kouluun.", en: "Dad drives the kids to school." },
    B1: { fi: "Juna kuljettaa tuhansia matkustajia päivässä.", en: "The train carries thousands of passengers a day." },
    B2: {
      fi: "Tavarat kuljetettiin rekalla toiselle puolelle maata.",
      en: "The goods were transported by truck to the other side of the country.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kuljettaa;
