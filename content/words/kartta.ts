import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, tt:t gradation, stem kartta- ~ karta-.
// Genitive kartan, partitive karttaa, illative karttaan, partitive pl karttoja.
const kartta: Word = {
  fi: "kartta",
  slug: "kartta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "map",
  selitys:
    "Piirretty kuva alueesta tai paikoista: 'katsoa kartasta'. Tyyppi 9, astevaihtelu tt:t (kartta → kartan). Partitiivin monikko karttoja. Lainasana ruotsista. Vrt. karttapallo, aarrekartta.",
  kuva: { emoji: "🗺️", alt: "kartta – piirretty kuva alueesta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu tt:t (kartta ↔ karta-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kartan", merkitys: "of the map" },
      { sija: "partitiivi (yks.)", muoto: "karttaa", merkitys: "map (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "karttoja", merkitys: "maps (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi kartan, adessiivi kartalla. Vahva aste tt säilyy partitiivissa karttaa ja monikossa karttoja (a → o). 'Katsoa kartasta' = to check on the map.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kartta" },
          { label: "Partitiivi", form: "karttaa" },
          { label: "Genetiivi", form: "kartan" },
          { label: "Inessiivi", form: "kartassa" },
          { label: "Elatiivi", form: "kartasta" },
          { label: "Illatiivi", form: "karttaan" },
          { label: "Adessiivi", form: "kartalla" },
          { label: "Ablatiivi", form: "kartalta" },
          { label: "Allatiivi", form: "kartalle" },
          { label: "Essiivi", form: "karttana" },
          { label: "Translatiivi", form: "kartaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kartat" },
          { label: "Partitiivi", form: "karttoja" },
          { label: "Genetiivi", form: "karttojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "karttapallo",
      en: "globe",
      taso: "B2",
      esim: { fi: "Luokassa oli iso karttapallo.", en: "There was a big globe in the classroom." },
    },
    {
      fi: "tiekartta",
      en: "road map",
      taso: "B1",
      esim: { fi: "Ostimme tiekartan huoltoasemalta.", en: "We bought a road map at the service station." },
    },
    {
      fi: "kartoittaa",
      en: "to map, chart, survey",
      taso: "B2",
      esim: { fi: "Tutkijat kartoittivat alueen.", en: "The researchers mapped the area." },
    },
  ],
  synonyymit: [
    { fi: "kartasto", en: "atlas" },
    { fi: "pohjapiirros", en: "floor plan" },
  ],
  esimerkit: {
    A2: { fi: "Katso kartasta, missä asema on.", en: "Check on the map where the station is." },
    B1: { fi: "Eksyimme, koska kartta oli vanha.", en: "We got lost because the map was old." },
    B2: {
      fi: "Nykyään harva käyttää paperikarttaa, kun puhelimessa on navigaattori.",
      en: "Nowadays few people use a paper map, since the phone has a navigator.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kartta;
