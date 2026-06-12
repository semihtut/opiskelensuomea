import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem makkara-.
// Genitive makkaran, partitive makkaraa, partitive pl makkaroita.
const makkara: Word = {
  fi: "makkara",
  slug: "makkara",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A2",
  en: "sausage",
  selitys:
    "Lihasta valmistettu ruoka pitkulaisessa kuoressa: 'grillata makkaraa'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko makkaroita. Vrt. liha, grillata, nakki.",
  kuva: { alt: "makkara – lihasta valmistettu ruoka pitkulaisessa kuoressa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo makkara-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "makkaran", merkitys: "of the sausage" },
      { sija: "partitiivi (yks.)", muoto: "makkaraa", merkitys: "sausage (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "makkaroita", merkitys: "sausages (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12/kulkija: ei astevaihtelua. Partitiivin monikko makkaroita, genetiivin monikko makkaroiden (ei makkaroja). Grillimakkara, nakki = small sausage. Vrt. liha, grillata.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "makkara" },
          { label: "Partitiivi", form: "makkaraa" },
          { label: "Genetiivi", form: "makkaran" },
          { label: "Inessiivi", form: "makkarassa" },
          { label: "Elatiivi", form: "makkarasta" },
          { label: "Illatiivi", form: "makkaraan" },
          { label: "Adessiivi", form: "makkaralla" },
          { label: "Ablatiivi", form: "makkaralta" },
          { label: "Allatiivi", form: "makkaralle" },
          { label: "Essiivi", form: "makkarana" },
          { label: "Translatiivi", form: "makkaraksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "makkarat" },
          { label: "Partitiivi", form: "makkaroita" },
          { label: "Genetiivi", form: "makkaroiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "grillimakkara",
      en: "grilled / barbecue sausage",
      taso: "B1",
      esim: { fi: "Ostimme grillimakkaraa mökille.", en: "We bought barbecue sausage for the cabin." },
    },
    {
      fi: "nakki",
      en: "frankfurter, hot dog sausage",
      taso: "A2",
      esim: { fi: "Lapset söivät nakkeja.", en: "The children ate frankfurters." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Grillaan makkaraa.", en: "I'm grilling sausage." },
    B1: { fi: "Pannulla paistuu kaksi makkaraa.", en: "Two sausages are frying in the pan." },
    B2: {
      fi: "Suomalaiseen kesään kuuluvat makkarat nuotion äärellä.",
      en: "Sausages by the campfire are part of the Finnish summer.",
    },
  },
  updatedAt: "2026-06-07",
};

export default makkara;
