import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem vaihtoehto- ~ vaihtoehdo-.
// Genitive vaihtoehdon, partitive vaihtoehtoa, partitive pl vaihtoehtoja.
const vaihtoehto: Word = {
  fi: "vaihtoehto",
  slug: "vaihtoehto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "alternative, option",
  selitys:
    "Toinen mahdollinen valinta tai ratkaisu: 'meillä on kaksi vaihtoehtoa'. Tyyppi 1/valo, astevaihtelu t:d (vaihtoehto → vaihtoehdon). Yhdyssana vaihto + ehto. Vrt. vaihtaa, ehto, vaihtoehtoinen.",
  kuva: { alt: "vaihtoehto – toinen mahdollinen valinta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (vartalo vaihtoehdo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaihtoehdon", merkitys: "of the alternative" },
      { sija: "partitiivi (yks.)", muoto: "vaihtoehtoa", merkitys: "alternative (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaihtoehtoja", merkitys: "alternatives (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d: nominatiivi vaihtoehto (vahva t), genetiivi vaihtoehdon (heikko d). Yhdyssana vaihto + ehto, taipuu kuten ehto. 'Ei ole muuta vaihtoehtoa' = there is no other option. Vrt. vaihtoehtoinen = alternative (adj.).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vaihtoehto" },
          { label: "Partitiivi", form: "vaihtoehtoa" },
          { label: "Genetiivi", form: "vaihtoehdon" },
          { label: "Inessiivi", form: "vaihtoehdossa" },
          { label: "Elatiivi", form: "vaihtoehdosta" },
          { label: "Illatiivi", form: "vaihtoehtoon" },
          { label: "Adessiivi", form: "vaihtoehdolla" },
          { label: "Ablatiivi", form: "vaihtoehdolta" },
          { label: "Allatiivi", form: "vaihtoehdolle" },
          { label: "Essiivi", form: "vaihtoehtona" },
          { label: "Translatiivi", form: "vaihtoehdoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaihtoehdot" },
          { label: "Partitiivi", form: "vaihtoehtoja" },
          { label: "Genetiivi", form: "vaihtoehtojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaihtoehtoinen",
      en: "alternative (adjective)",
      taso: "B2",
      esim: { fi: "Etsimme vaihtoehtoista reittiä.", en: "We're looking for an alternative route." },
    },
    {
      fi: "vaihtaa",
      en: "to change, swap",
      taso: "A2",
      esim: { fi: "Vaihdoin suunnitelmaa.", en: "I changed the plan." },
    },
  ],
  synonyymit: [
    { fi: "valinta", en: "choice" },
    { fi: "mahdollisuus", en: "possibility, option" },
  ],
  esimerkit: {
    A2: { fi: "Onko muita vaihtoehtoja?", en: "Are there other options?" },
    B1: { fi: "Valitsin halvemman vaihtoehdon.", en: "I chose the cheaper option." },
    B2: {
      fi: "Kun kaikki vaihtoehdot oli punnittu, päätös oli yllättävän helppo.",
      en: "Once all the alternatives had been weighed, the decision was surprisingly easy.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaihtoehto;
