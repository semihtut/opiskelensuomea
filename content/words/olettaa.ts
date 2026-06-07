import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem oletta- ~ oleta-.
// Present minä oletan, hän olettaa; imperfect minä oletin; NUT olettanut.
const olettaa: Word = {
  fi: "olettaa",
  slug: "olettaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to assume, suppose, presume",
  selitys:
    "Pitää jotakin todennäköisenä ilman varmaa tietoa: 'oletan, että hän tulee'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (oletan). Usein että-lauseen kanssa. Vrt. oletus, oletettavasti.",
  kuva: { emoji: "🤔", alt: "olettaa – pitää jotakin todennäköisenä ilman varmaa tietoa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (oleta- ~ oletta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "oletan", merkitys: "I assume" },
      { sija: "imperfekti (minä)", muoto: "oletin", merkitys: "I assumed" },
      { sija: "NUT-partisiippi", muoto: "olettanut", merkitys: "(have) assumed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva oletta- (olettaa, olettanut), heikko oleta- (oletan, oletin). 'Olettaa, että…' = to assume that…. Vrt. oletus = assumption, oletettavasti = presumably.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "oletan" },
          { label: "sinä", form: "oletat" },
          { label: "hän", form: "olettaa" },
          { label: "me", form: "oletamme" },
          { label: "te", form: "oletatte" },
          { label: "he", form: "olettavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en oleta" },
          { label: "hän", form: "ei oleta" },
          { label: "he", form: "eivät oleta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "oletin" },
          { label: "sinä", form: "oletit" },
          { label: "hän", form: "oletti" },
          { label: "me", form: "oletimme" },
          { label: "te", form: "oletitte" },
          { label: "he", form: "olettivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen olettanut" },
          { label: "hän", form: "on olettanut" },
          { label: "he", form: "ovat olettaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "oleta!" },
          { label: "te", form: "olettakaa!" },
          { label: "kielto (sinä)", form: "älä oleta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oletus",
      en: "assumption, supposition",
      taso: "B1",
      esim: { fi: "Se oli väärä oletus.", en: "It was a wrong assumption." },
    },
    {
      fi: "oletettavasti",
      en: "presumably",
      taso: "B2",
      esim: { fi: "Hän tulee oletettavasti huomenna.", en: "He'll presumably come tomorrow." },
    },
  ],
  synonyymit: [
    { fi: "luulla", en: "to think, suppose" },
    { fi: "arvella", en: "to reckon, surmise" },
  ],
  esimerkit: {
    A2: { fi: "Oletan, että olet väsynyt.", en: "I assume you're tired." },
    B1: { fi: "Älä oleta liikoja etukäteen.", en: "Don't assume too much in advance." },
    B2: {
      fi: "Suunnitelma perustui oletukseen, että rahoitus järjestyy ajoissa.",
      en: "The plan was based on the assumption that funding would be arranged in time.",
    },
  },
  updatedAt: "2026-06-07",
};

export default olettaa;
