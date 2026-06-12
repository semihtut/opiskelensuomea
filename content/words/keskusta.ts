import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 13/katiska, no gradation, stem keskusta-.
// Genitive keskustan, partitive keskustaa, illative keskustaan, partitive pl keskustoja/keskustoita.
const keskusta: Word = {
  fi: "keskusta",
  slug: "keskusta",
  pos: "substantiivi (tyyppi 13/katiska)",
  posClass: "substantiivi",
  level: "A2",
  en: "centre, downtown, city centre",
  selitys:
    "Kaupungin keskeinen alue, jossa on palveluita ja kauppoja: 'mennä keskustaan'. Tyyppi 13, ei astevaihtelua. Partitiivin monikko keskustoja (tai keskustoita). Johdettu sanasta keski. Vrt. kaupunginkeskusta.",
  kuva: { alt: "keskusta – kaupungin keskeinen alue" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 13/katiska; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "keskustan", merkitys: "of the centre" },
      { sija: "partitiivi (yks.)", muoto: "keskustaa", merkitys: "centre (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "keskustoja / keskustoita", merkitys: "centres (partitive pl.)" },
    ],
    huom:
      "Tyyppi 13: partitiivin monikko -oja tai -oita (keskustoja/keskustoita). 'Keskustassa' = downtown (inessiivi), 'keskustaan' = to the centre. Vrt. kaupungin keskusta = city centre.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "keskusta" },
          { label: "Partitiivi", form: "keskustaa" },
          { label: "Genetiivi", form: "keskustan" },
          { label: "Inessiivi", form: "keskustassa" },
          { label: "Elatiivi", form: "keskustasta" },
          { label: "Illatiivi", form: "keskustaan" },
          { label: "Adessiivi", form: "keskustalla" },
          { label: "Ablatiivi", form: "keskustalta" },
          { label: "Allatiivi", form: "keskustalle" },
          { label: "Essiivi", form: "keskustana" },
          { label: "Translatiivi", form: "keskustaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keskustat" },
          { label: "Partitiivi", form: "keskustoja / keskustoita" },
          { label: "Genetiivi", form: "keskustojen / keskustoiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaupunginkeskusta",
      en: "city centre",
      taso: "B1",
      esim: { fi: "Kaupunginkeskusta on kävelyetäisyydellä.", en: "The city centre is within walking distance." },
    },
    {
      fi: "keskeinen",
      en: "central, key",
      taso: "B2",
      esim: { fi: "Sijainti on hyvin keskeinen.", en: "The location is very central." },
    },
    {
      fi: "keskittää",
      en: "to centralize, focus",
      taso: "B2",
      esim: { fi: "Palvelut keskitettiin yhteen paikkaan.", en: "The services were centralized in one place." },
    },
  ],
  synonyymit: [
    { fi: "ydinkeskusta", en: "the very centre" },
    { fi: "sentrumi", en: "centre (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Asun aivan keskustassa.", en: "I live right in the centre." },
    B1: { fi: "Menemme keskustaan ostoksille.", en: "We're going to the centre to shop." },
    B2: {
      fi: "Keskustan vuokrat ovat selvästi korkeammat kuin lähiöissä.",
      en: "Rents in the centre are clearly higher than in the suburbs.",
    },
  },
  updatedAt: "2026-06-06",
};

export default keskusta;
