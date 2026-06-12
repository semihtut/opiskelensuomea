import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, rt:rr gradation, stem vertaa- ~ verra-.
// Present minä vertaan, hän vertaa; imperfect minä vertasin; NUT verrannut. Governs illative.
const verrata: Word = {
  fi: "verrata",
  slug: "verrata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to compare, contrast",
  selitys:
    "Asettaa kaksi asiaa rinnakkain ja katsoa erot ja yhtäläisyydet: 'verrata hintoja'. Tyyppi 4 (-ata), Kotus 73/salata, astevaihtelu rt:rr (vertaan vahva rt, verrata/verrannut heikko rr). Hallitsee illatiivia ('verrata johonkin'). Vrt. vertailu, vertaus.",
  kuva: { alt: "verrata – asettaa kaksi asiaa rinnakkain" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata), Kotus 73/salata; astevaihtelu rt:rr (vertaa- ~ verra-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vertaan", merkitys: "I compare" },
      { sija: "imperfekti (minä)", muoto: "vertasin", merkitys: "I compared" },
      { sija: "NUT-partisiippi", muoto: "verrannut", merkitys: "(have) compared" },
    ],
    huom:
      "Astevaihtelu rt:rr: vahva vartalo vertaa- (vertaan, vertasin), heikko infinitiivissä ja NUT-muodossa (verrata, verrannut). Hallitsee illatiivia: 'verrata jotakin johonkin'. Vrt. vertailu = comparison, verrattuna = compared to.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vertaan" },
          { label: "sinä", form: "vertaat" },
          { label: "hän", form: "vertaa" },
          { label: "me", form: "vertaamme" },
          { label: "te", form: "vertaatte" },
          { label: "he", form: "vertaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vertaa" },
          { label: "hän", form: "ei vertaa" },
          { label: "he", form: "eivät vertaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vertasin" },
          { label: "sinä", form: "vertasit" },
          { label: "hän", form: "vertasi" },
          { label: "me", form: "vertasimme" },
          { label: "te", form: "vertasitte" },
          { label: "he", form: "vertasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen verrannut" },
          { label: "hän", form: "on verrannut" },
          { label: "he", form: "ovat verranneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vertaa!" },
          { label: "te", form: "verratkaa!" },
          { label: "kielto (sinä)", form: "älä vertaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vertailu",
      en: "comparison",
      taso: "B1",
      esim: { fi: "Tein hintavertailun kaupoista.", en: "I did a price comparison of the shops." },
    },
    {
      fi: "verrattuna",
      en: "compared to",
      taso: "B2",
      esim: { fi: "Verrattuna viime vuoteen tulos parani.", en: "Compared to last year, the result improved." },
    },
    {
      fi: "vertaus",
      en: "comparison, simile, parable",
      taso: "B2",
      esim: { fi: "Hän käytti osuvaa vertausta.", en: "She used an apt comparison." },
    },
  ],
  synonyymit: [
    { fi: "vertailla", en: "to compare (repeatedly)" },
    { fi: "rinnastaa", en: "to set side by side, equate" },
  ],
  esimerkit: {
    A2: { fi: "Vertaa näitä kahta kuvaa.", en: "Compare these two pictures." },
    B1: { fi: "Vertasin hintoja ennen ostamista.", en: "I compared prices before buying." },
    B2: {
      fi: "Tuloksia on vaikea verrata, koska menetelmät olivat erilaisia.",
      en: "The results are hard to compare, because the methods were different.",
    },
  },
  updatedAt: "2026-06-07",
};

export default verrata;
