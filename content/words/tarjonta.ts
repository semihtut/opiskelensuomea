import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, nt:nn gradation, stem tarjonta- ~ tarjonna-.
// Genitive tarjonnan, partitive tarjontaa. Usually singular.
const tarjonta: Word = {
  fi: "tarjonta",
  slug: "tarjonta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B2",
  en: "supply (economics); selection, offering",
  selitys:
    "Se, mitä on tarjolla ostettavaksi: 'kysyntä ja tarjonta'. Tyyppi 9/kala, astevaihtelu nt:nn (tarjonta → tarjonnan). Yleensä yksikössä. Johdettu verbistä tarjota. Vastakohta kysyntä. Vrt. tarjota, tarjous, valikoima.",
  kuva: { alt: "tarjonta – se mitä on tarjolla ostettavaksi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (vartalo tarjonna-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tarjonnan", merkitys: "of the supply" },
      { sija: "partitiivi (yks.)", muoto: "tarjontaa", merkitys: "supply (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "tarjontaan", merkitys: "into the supply" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi tarjonta (vahva nt), genetiivi tarjonnan (heikko nn). Yleensä yksikössä. Johdettu verbistä tarjota. Vastakohta kysyntä. Myös: valikoima (esim. ohjelmatarjonta).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tarjonta" },
          { label: "Partitiivi", form: "tarjontaa" },
          { label: "Genetiivi", form: "tarjonnan" },
          { label: "Inessiivi", form: "tarjonnassa" },
          { label: "Elatiivi", form: "tarjonnasta" },
          { label: "Illatiivi", form: "tarjontaan" },
          { label: "Adessiivi", form: "tarjonnalla" },
          { label: "Ablatiivi", form: "tarjonnalta" },
          { label: "Allatiivi", form: "tarjonnalle" },
          { label: "Essiivi", form: "tarjontana" },
          { label: "Translatiivi", form: "tarjonnaksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tarjota",
      en: "to offer, supply",
      taso: "B1",
      esim: { fi: "Kauppa tarjoaa alennuksia.", en: "The shop offers discounts." },
    },
    {
      fi: "tarjous",
      en: "offer, bid; special deal",
      taso: "B1",
      esim: { fi: "Sain hyvän tarjouksen.", en: "I got a good offer." },
    },
  ],
  synonyymit: [
    { fi: "valikoima", en: "selection, range" },
    { fi: "saatavuus", en: "availability" },
  ],
  esimerkit: {
    A2: { fi: "Tarjonta on runsasta.", en: "The supply is plentiful." },
    B1: { fi: "Kulttuuritarjonta kaupungissa on hyvä.", en: "The cultural offering in the city is good." },
    B2: {
      fi: "Tarjonnan kasvaessa hinnat laskivat ja kuluttajat hyötyivät.",
      en: "As supply grew, prices fell and consumers benefited.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tarjonta;
