import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem asunto- ~ asunno-.
// Genitive asunnon, partitive asuntoa, illative asuntoon, partitive pl asuntoja.
const asunto: Word = {
  fi: "asunto",
  slug: "asunto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "apartment, flat, dwelling",
  selitys:
    "Paikka, jossa ihminen asuu: 'vuokra-asunto'. Tyyppi 1, astevaihtelu nt:nn (asunto → asunnon). Partitiivin monikko asuntoja. Johdettu verbistä asua. Vrt. asuntolaina, kerrostalo.",
  kuva: { emoji: "🏠", alt: "asunto – paikka, jossa ihminen asuu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (asunto ↔ asunno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "asunnon", merkitys: "of the apartment" },
      { sija: "partitiivi (yks.)", muoto: "asuntoa", merkitys: "apartment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asuntoja", merkitys: "apartments (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nt → nn: genetiivi asunnon, inessiivi asunnossa. Vahva aste nt säilyy partitiivissa asuntoa ja monikossa asuntoja. 'Vuokra-asunto' = rental flat. Vrt. asua = to live.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "asunto" },
          { label: "Partitiivi", form: "asuntoa" },
          { label: "Genetiivi", form: "asunnon" },
          { label: "Inessiivi", form: "asunnossa" },
          { label: "Elatiivi", form: "asunnosta" },
          { label: "Illatiivi", form: "asuntoon" },
          { label: "Adessiivi", form: "asunnolla" },
          { label: "Ablatiivi", form: "asunnolta" },
          { label: "Allatiivi", form: "asunnolle" },
          { label: "Essiivi", form: "asuntona" },
          { label: "Translatiivi", form: "asunnoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asunnot" },
          { label: "Partitiivi", form: "asuntoja" },
          { label: "Genetiivi", form: "asuntojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vuokra-asunto",
      en: "rental apartment",
      taso: "B1",
      esim: { fi: "Etsimme vuokra-asuntoa keskustasta.", en: "We're looking for a rental apartment in the centre." },
    },
    {
      fi: "asuntolaina",
      en: "mortgage, home loan",
      taso: "B2",
      esim: { fi: "Maksamme asuntolainaa joka kuukausi.", en: "We pay the mortgage every month." },
    },
    {
      fi: "omistusasunto",
      en: "owner-occupied home",
      taso: "B2",
      esim: { fi: "He ostivat omistusasunnon.", en: "They bought an owner-occupied home." },
    },
  ],
  synonyymit: [
    { fi: "koti", en: "home" },
    { fi: "kämppä", en: "pad, place (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on pieni asunto.", en: "I have a small apartment." },
    B1: { fi: "Muutimme isompaan asuntoon.", en: "We moved to a bigger apartment." },
    B2: {
      fi: "Asuntojen hinnat ovat nousseet kaupungissa nopeasti.",
      en: "Apartment prices have risen quickly in the city.",
    },
  },
  updatedAt: "2026-06-06",
};

export default asunto;
