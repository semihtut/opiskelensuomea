import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem todistukse-.
// Genitive todistuksen, partitive todistusta, partitive pl todistuksia.
const todistus: Word = {
  fi: "todistus",
  slug: "todistus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "certificate; testimony, proof",
  selitys:
    "1) Virallinen asiakirja, joka todistaa jonkin: 'koulutodistus', 'lääkärintodistus'. 2) Todistajan kertomus oikeudessa. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Verbistä todistaa. Vrt. todistaa, todiste, todistaja.",
  kuva: { emoji: "📜", alt: "todistus – virallinen asiakirja joka todistaa jonkin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo todistukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "todistuksen", merkitys: "of the certificate" },
      { sija: "partitiivi (yks.)", muoto: "todistusta", merkitys: "certificate (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "todistuksia", merkitys: "certificates (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Teonnimi verbistä todistaa. Koulutodistus, työtodistus, lääkärintodistus. Vrt. todiste = piece of evidence.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "todistus" },
          { label: "Partitiivi", form: "todistusta" },
          { label: "Genetiivi", form: "todistuksen" },
          { label: "Inessiivi", form: "todistuksessa" },
          { label: "Elatiivi", form: "todistuksesta" },
          { label: "Illatiivi", form: "todistukseen" },
          { label: "Adessiivi", form: "todistuksella" },
          { label: "Ablatiivi", form: "todistukselta" },
          { label: "Allatiivi", form: "todistukselle" },
          { label: "Essiivi", form: "todistuksena" },
          { label: "Translatiivi", form: "todistukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "todistukset" },
          { label: "Partitiivi", form: "todistuksia" },
          { label: "Genetiivi", form: "todistuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "koulutodistus",
      en: "school report, certificate",
      taso: "B1",
      esim: { fi: "Sain koulutodistuksen keväällä.", en: "I got my school certificate in the spring." },
    },
    {
      fi: "työtodistus",
      en: "work / employment certificate",
      taso: "B2",
      esim: { fi: "Pyysin työnantajalta työtodistuksen.", en: "I asked the employer for a work certificate." },
    },
  ],
  synonyymit: [
    { fi: "asiakirja", en: "document" },
  ],
  esimerkit: {
    A2: { fi: "Tarvitsen lääkärintodistuksen.", en: "I need a doctor's certificate." },
    B1: { fi: "Liitä hakemukseen kopio todistuksesta.", en: "Attach a copy of the certificate to the application." },
    B2: {
      fi: "Todistus osaamisesta avaa ovia työmarkkinoilla.",
      en: "A certificate of competence opens doors in the job market.",
    },
  },
  updatedAt: "2026-06-07",
};

export default todistus;
