import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem palvelu-.
// Genitive palvelun, partitive palvelua, illative palveluun, partitive pl palveluja.
const palvelu: Word = {
  fi: "palvelu",
  slug: "palvelu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "service",
  selitys:
    "Asiakkaalle tarjottu apu tai toiminta: 'hyvä palvelu'. Tyyppi 1, ei astevaihtelua. Juuri verbistä palvella. Vrt. asiakaspalvelu (customer service), tuote (product).",
  kuva: { emoji: "🛎️", alt: "palvelu – asiakkaalle tarjottu apu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "palvelun", merkitys: "of the service" },
      { sija: "partitiivi (yks.)", muoto: "palvelua", merkitys: "service (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "palveluja", merkitys: "services (partitive pl.)" },
    ],
    huom:
      "Helppo tyypin 1 sana: palvelu → palvelun, palvelua, palveluun. Monikon partitiivi palveluja (myös palveluita). Vrt. palvella = to serve, palvelin = server.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "palvelu" },
          { label: "Partitiivi", form: "palvelua" },
          { label: "Genetiivi", form: "palvelun" },
          { label: "Inessiivi", form: "palvelussa" },
          { label: "Elatiivi", form: "palvelusta" },
          { label: "Illatiivi", form: "palveluun" },
          { label: "Adessiivi", form: "palvelulla" },
          { label: "Ablatiivi", form: "palvelulta" },
          { label: "Allatiivi", form: "palvelulle" },
          { label: "Essiivi", form: "palveluna" },
          { label: "Translatiivi", form: "palveluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "palvelut" },
          { label: "Partitiivi", form: "palveluja" },
          { label: "Genetiivi", form: "palvelujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "palvella",
      en: "to serve",
      taso: "B1",
      esim: { fi: "Myyjä palveli ystävällisesti.", en: "The salesperson served us kindly." },
    },
    {
      fi: "asiakaspalvelu",
      en: "customer service",
      taso: "B1",
      esim: { fi: "Asiakaspalvelu oli nopeaa.", en: "The customer service was fast." },
    },
    {
      fi: "palvelin",
      en: "server (computing)",
      taso: "B2",
      esim: { fi: "Tiedostot ovat palvelimella.", en: "The files are on the server." },
    },
  ],
  synonyymit: [
    { fi: "huolto", en: "maintenance, service" },
    { fi: "asiointi", en: "transactions, dealings" },
  ],
  esimerkit: {
    A2: { fi: "Palvelu oli hyvää.", en: "The service was good." },
    B1: { fi: "Kaupunki tarjoaa monia palveluja.", en: "The city offers many services." },
    B2: {
      fi: "Verkkopalvelu helpottaa asiointia huomattavasti.",
      en: "The online service makes transactions considerably easier.",
    },
  },
  updatedAt: "2026-06-06",
};

export default palvelu;
