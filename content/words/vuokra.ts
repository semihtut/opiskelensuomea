import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem vuokra-.
// Genitive vuokran, partitive vuokraa, illative vuokraan, partitive pl vuokria.
const vuokra: Word = {
  fi: "vuokra",
  slug: "vuokra",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "rent",
  selitys:
    "Maksu, jonka asukas maksaa asunnosta: 'maksaa vuokra'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko vuokria. Vrt. vuokra-asunto (rental flat), vuokranantaja (landlord), vuokrata.",
  kuva: { alt: "vuokra – maksu asunnosta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vuokran", merkitys: "of the rent" },
      { sija: "partitiivi (yks.)", muoto: "vuokraa", merkitys: "rent (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vuokria", merkitys: "rents (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10, ei astevaihtelua. Partitiivin monikko vuokria. 'Asua vuokralla' = to live in a rental (adessiivi). Vrt. vuokranantaja = landlord, vuokralainen = tenant.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vuokra" },
          { label: "Partitiivi", form: "vuokraa" },
          { label: "Genetiivi", form: "vuokran" },
          { label: "Inessiivi", form: "vuokrassa" },
          { label: "Elatiivi", form: "vuokrasta" },
          { label: "Illatiivi", form: "vuokraan" },
          { label: "Adessiivi", form: "vuokralla" },
          { label: "Ablatiivi", form: "vuokralta" },
          { label: "Allatiivi", form: "vuokralle" },
          { label: "Essiivi", form: "vuokrana" },
          { label: "Translatiivi", form: "vuokraksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vuokrat" },
          { label: "Partitiivi", form: "vuokria" },
          { label: "Genetiivi", form: "vuokrien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vuokrata",
      en: "to rent",
      taso: "B1",
      esim: { fi: "Vuokrasimme mökin viikoksi.", en: "We rented a cottage for a week." },
    },
    {
      fi: "vuokranantaja",
      en: "landlord",
      taso: "B2",
      esim: { fi: "Vuokranantaja korotti vuokraa.", en: "The landlord raised the rent." },
    },
    {
      fi: "vuokralainen",
      en: "tenant",
      taso: "B2",
      esim: { fi: "Uusi vuokralainen muutti sisään.", en: "The new tenant moved in." },
    },
  ],
  synonyymit: [
    { fi: "vuokramaksu", en: "rental payment" },
    { fi: "hyyry", en: "rent (dialectal)" },
  ],
  esimerkit: {
    A2: { fi: "Vuokra on liian korkea.", en: "The rent is too high." },
    B1: { fi: "Maksan vuokran joka kuun alussa.", en: "I pay the rent at the start of each month." },
    B2: {
      fi: "Keskustan vuokrat ovat nousseet viime vuosina huomattavasti.",
      en: "Rents in the centre have risen considerably in recent years.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vuokra;
