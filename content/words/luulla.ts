import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem luul-.
// Present luulen, past luulin, past participle luullut.
const luulla: Word = {
  fi: "luulla",
  slug: "luulla",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to think, suppose, assume (possibly wrongly)",
  selitys:
    "Olettaa jotain ilman varmuutta — usein virheellinen oletus: 'Luulin, että…' (I thought, but I was wrong). Vrt. ajatella (pohtia), uskoa (pitää totena), tietää (olla varma).",
  kuva: { alt: "luulla – olettaa ilman varmuutta" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); ei astevaihtelua; vartalo luul-",
    muodot: [
      { sija: "preesens (minä)", muoto: "luulen", merkitys: "I think / suppose" },
      { sija: "imperfekti (minä)", muoto: "luulin", merkitys: "I thought" },
      { sija: "NUT-partisiippi", muoto: "luullut", merkitys: "(have) thought" },
    ],
    huom:
      "Korostaa epävarmuutta tai virhettä: 'Luulin sinua opettajaksi' = I mistook you for a teacher. Vrt. ajatella = pohtia, tietää = olla varma. Usein 'että'-lause.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "luulen" },
          { label: "sinä", form: "luulet" },
          { label: "hän", form: "luulee" },
          { label: "me", form: "luulemme" },
          { label: "te", form: "luulette" },
          { label: "he", form: "luulevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en luule" },
          { label: "hän", form: "ei luule" },
          { label: "he", form: "eivät luule" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "luulin" },
          { label: "sinä", form: "luulit" },
          { label: "hän", form: "luuli" },
          { label: "me", form: "luulimme" },
          { label: "te", form: "luulitte" },
          { label: "he", form: "luulivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen luullut" },
          { label: "hän", form: "on luullut" },
          { label: "he", form: "ovat luulleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "luule!" },
          { label: "te", form: "luulkaa!" },
          { label: "kielto (sinä)", form: "älä luule" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luulo",
      en: "(mistaken) belief, supposition",
      taso: "B2",
      esim: { fi: "Se oli vain luulo.", en: "It was just a supposition." },
    },
    {
      fi: "luultavasti",
      en: "probably",
      taso: "B1",
      esim: { fi: "Hän tulee luultavasti huomenna.", en: "He'll probably come tomorrow." },
    },
    {
      fi: "luuloteltu",
      en: "imagined, supposed",
      taso: "B2",
      esim: { fi: "Ongelma oli vain luuloteltu.", en: "The problem was only imagined." },
    },
  ],
  synonyymit: [
    { fi: "olettaa", en: "to assume" },
    { fi: "kuvitella", en: "to imagine" },
  ],
  esimerkit: {
    A2: { fi: "Luulen, että hän on kotona.", en: "I think she is at home." },
    B1: { fi: "Luulin sinua sairaaksi.", en: "I thought you were sick." },
    B2: {
      fi: "Älä luule tietäväsi kaikkea — kysy ensin.",
      en: "Don't assume you know everything — ask first.",
    },
  },
  updatedAt: "2026-06-06",
};

export default luulla;
