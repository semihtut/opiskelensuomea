import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem hidastu-.
// Present hän hidastuu; imperfect hän hidastui; NUT hidastunut. Intransitive.
const hidastua: Word = {
  fi: "hidastua",
  slug: "hidastua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to slow down, decelerate",
  selitys:
    "Muuttua hitaammaksi: 'talouskasvu hidastui'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen (transit. hidastaa). Johdettu sanasta hidas. Vastakohta nopeutua. Vrt. hidas, hidastaa.",
  kuva: { emoji: "🐢", alt: "hidastua – muuttua hitaammaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo hidastu-",
    muodot: [
      { sija: "preesens (se)", muoto: "hidastuu", merkitys: "(it) slows down" },
      { sija: "imperfekti (se)", muoto: "hidastui", merkitys: "(it) slowed down" },
      { sija: "NUT-partisiippi", muoto: "hidastunut", merkitys: "(has) slowed down" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Intransitiivinen; transitiivinen pari on hidastaa. Johdettu sanasta hidas. Vastakohta nopeutua = to speed up. Useimmiten 3. persoonassa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "hidastuu" },
          { label: "ne / asiat", form: "hidastuvat" },
          { label: "kielto", form: "ei hidastu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "hidastui" },
          { label: "ne / asiat", form: "hidastuivat" },
          { label: "kielto", form: "ei hidastunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on hidastunut" },
          { label: "ne / asiat", form: "ovat hidastuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hidastaa",
      en: "to slow (sth) down",
      taso: "B2",
      esim: { fi: "Sade hidasti liikennettä.", en: "The rain slowed down the traffic." },
    },
    {
      fi: "hidas",
      en: "slow",
      taso: "A2",
      esim: { fi: "Yhteys on hidas.", en: "The connection is slow." },
    },
  ],
  synonyymit: [
    { fi: "heikentyä", en: "to weaken" },
    { fi: "vähentyä", en: "to decrease" },
  ],
  esimerkit: {
    A2: { fi: "Juna hidastui asemalla.", en: "The train slowed down at the station." },
    B1: { fi: "Myynnin kasvu hidastui kesällä.", en: "Sales growth slowed down in the summer." },
    B2: {
      fi: "Kun korot nousivat, asuntokauppa hidastui selvästi.",
      en: "When interest rates rose, the housing trade slowed down clearly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hidastua;
