import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem allekirjoitta- ~ allekirjoita-.
// Present minä allekirjoitan, hän allekirjoittaa; imperfect allekirjoitin; NUT allekirjoittanut.
const allekirjoittaa: Word = {
  fi: "allekirjoittaa",
  slug: "allekirjoittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to sign",
  selitys:
    "Kirjoittaa nimensä asiakirjan alle vahvistukseksi: 'allekirjoittaa sopimus'. Myös kuvaannollisesti: olla samaa mieltä. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (allekirjoitan). Yhdysverbi alle + kirjoittaa. Vrt. kirjoittaa, allekirjoitus, nimi.",
  kuva: { emoji: "✍️", alt: "allekirjoittaa – kirjoittaa nimensä asiakirjan alle vahvistukseksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (allekirjoita- ~ allekirjoitta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "allekirjoitan", merkitys: "I sign" },
      { sija: "imperfekti (minä)", muoto: "allekirjoitin", merkitys: "I signed" },
      { sija: "NUT-partisiippi", muoto: "allekirjoittanut", merkitys: "(have) signed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva allekirjoitta- (allekirjoittaa, allekirjoittanut), heikko allekirjoita- (allekirjoitan, allekirjoitin). Yhdysverbi alle + kirjoittaa. Kuvaannollisesti: 'allekirjoitan tuon' = I agree with that. Vrt. allekirjoitus = signature.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "allekirjoitan" },
          { label: "sinä", form: "allekirjoitat" },
          { label: "hän", form: "allekirjoittaa" },
          { label: "me", form: "allekirjoitamme" },
          { label: "te", form: "allekirjoitatte" },
          { label: "he", form: "allekirjoittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en allekirjoita" },
          { label: "hän", form: "ei allekirjoita" },
          { label: "he", form: "eivät allekirjoita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "allekirjoitin" },
          { label: "sinä", form: "allekirjoitit" },
          { label: "hän", form: "allekirjoitti" },
          { label: "me", form: "allekirjoitimme" },
          { label: "te", form: "allekirjoititte" },
          { label: "he", form: "allekirjoittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen allekirjoittanut" },
          { label: "hän", form: "on allekirjoittanut" },
          { label: "he", form: "ovat allekirjoittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "allekirjoita!" },
          { label: "te", form: "allekirjoittakaa!" },
          { label: "kielto (sinä)", form: "älä allekirjoita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "allekirjoitus",
      en: "signature",
      taso: "B1",
      esim: { fi: "Tarvitsen allekirjoituksesi tähän.", en: "I need your signature here." },
    },
    {
      fi: "allekirjoittanut",
      en: "the undersigned",
      taso: "B2",
      esim: { fi: "Allekirjoittanut vahvistaa tiedot oikeiksi.", en: "The undersigned confirms the information is correct." },
    },
  ],
  synonyymit: [
    { fi: "signeerata", en: "to sign (e.g. artwork)" },
  ],
  esimerkit: {
    A2: { fi: "Allekirjoita tähän.", en: "Sign here." },
    B1: { fi: "Allekirjoitimme vuokrasopimuksen eilen.", en: "We signed the lease yesterday." },
    B2: {
      fi: "Sopimus tulee voimaan, kun molemmat osapuolet ovat allekirjoittaneet sen.",
      en: "The contract takes effect when both parties have signed it.",
    },
  },
  updatedAt: "2026-06-07",
};

export default allekirjoittaa;
