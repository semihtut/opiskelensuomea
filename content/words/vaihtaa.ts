import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, t:d gradation, stem vaihta- ~ vaihda-.
// Present minä vaihdan, hän vaihtaa; imperfect minä vaihdoin, hän vaihtoi; NUT vaihtanut.
const vaihtaa: Word = {
  fi: "vaihtaa",
  slug: "vaihtaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to change, exchange, swap",
  selitys:
    "Korvata jokin toisella tai vaihtaa keskenään: 'vaihtaa työpaikkaa'. Tyyppi 1 (-aa), Kotus 56/kaivaa, astevaihtelu t:d (vaihdan) ja imperfektissä a→o (vaihdoin). Vrt. vaihto, vaihtoehto, vaihtua.",
  kuva: { alt: "vaihtaa – korvata jokin toisella" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 56/kaivaa; astevaihtelu t:d + imperfektin a→o",
    muodot: [
      { sija: "preesens (minä)", muoto: "vaihdan", merkitys: "I change" },
      { sija: "imperfekti (minä)", muoto: "vaihdoin", merkitys: "I changed" },
      { sija: "NUT-partisiippi", muoto: "vaihtanut", merkitys: "(have) changed" },
    ],
    huom:
      "Astevaihtelu t:d: vahva vaihta- (vaihtaa, vaihtanut), heikko vaihda- (vaihdan). Imperfektissä vartalovokaali a→o: vaihdoin, hän vaihtoi. 'Vaihtaa rahaa/vaatteita'; 'vaihtaa junaa' = to change trains. Vrt. vaihto = exchange.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vaihdan" },
          { label: "sinä", form: "vaihdat" },
          { label: "hän", form: "vaihtaa" },
          { label: "me", form: "vaihdamme" },
          { label: "te", form: "vaihdatte" },
          { label: "he", form: "vaihtavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vaihda" },
          { label: "hän", form: "ei vaihda" },
          { label: "he", form: "eivät vaihda" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vaihdoin" },
          { label: "sinä", form: "vaihdoit" },
          { label: "hän", form: "vaihtoi" },
          { label: "me", form: "vaihdoimme" },
          { label: "te", form: "vaihdoitte" },
          { label: "he", form: "vaihtoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vaihtanut" },
          { label: "hän", form: "on vaihtanut" },
          { label: "he", form: "ovat vaihtaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vaihda!" },
          { label: "te", form: "vaihtakaa!" },
          { label: "kielto (sinä)", form: "älä vaihda" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaihto",
      en: "exchange, change",
      taso: "B1",
      esim: { fi: "Tein hyvän vaihtokaupan.", en: "I made a good exchange deal." },
    },
    {
      fi: "vaihtoehto",
      en: "alternative, option",
      taso: "B1",
      esim: { fi: "Meillä on kaksi vaihtoehtoa.", en: "We have two options." },
    },
    {
      fi: "vaihtua",
      en: "to change (intransitive)",
      taso: "B1",
      esim: { fi: "Vuodenaika vaihtuu.", en: "The season changes." },
    },
  ],
  synonyymit: [
    { fi: "korvata", en: "to replace" },
    { fi: "muuttaa", en: "to change, alter" },
  ],
  esimerkit: {
    A2: { fi: "Vaihdan rahaa pankissa.", en: "I'll change money at the bank." },
    B1: { fi: "Vaihdoin junaa Tampereella.", en: "I changed trains in Tampere." },
    B2: {
      fi: "Hän vaihtoi kokonaan alaa ja aloitti uuden uran neljäkymppisenä.",
      en: "She changed fields entirely and started a new career in her forties.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaihtaa;
