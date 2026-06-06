import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, k–kk gradation, stem asiakkaa-.
// Genitive asiakkaan, partitive asiakasta, illative asiakkaaseen, partitive pl asiakkaita.
const asiakas: Word = {
  fi: "asiakas",
  slug: "asiakas",
  pos: "substantiivi (tyyppi 41/vieras)",
  posClass: "substantiivi",
  level: "A2",
  en: "customer, client",
  selitys:
    "Henkilö, joka ostaa tai käyttää palvelua: 'tyytyväinen asiakas'. Tyyppi 41, astevaihtelu k:kk (asiakas → asiakkaan). Juuri asia + -kas. Vrt. asiakaspalvelu (customer service).",
  kuva: { emoji: "🛍️", alt: "asiakas – palvelua tai tuotetta ostava henkilö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 41/vieras; astevaihtelu k:kk",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "asiakkaan", merkitys: "of the customer" },
      { sija: "partitiivi (yks.)", muoto: "asiakasta", merkitys: "customer (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asiakkaita", merkitys: "customers (partitive pl.)" },
    ],
    huom:
      "Käänteinen astevaihtelu k:kk: nominatiivi asiakas ja partitiivi asiakasta (heikko k), muu taivutus asiakkaa- (vahva kk). Vrt. asiakaspalvelu = customer service, kanta-asiakas = loyal customer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "asiakas" },
          { label: "Partitiivi", form: "asiakasta" },
          { label: "Genetiivi", form: "asiakkaan" },
          { label: "Inessiivi", form: "asiakkaassa" },
          { label: "Elatiivi", form: "asiakkaasta" },
          { label: "Illatiivi", form: "asiakkaaseen" },
          { label: "Adessiivi", form: "asiakkaalla" },
          { label: "Ablatiivi", form: "asiakkaalta" },
          { label: "Allatiivi", form: "asiakkaalle" },
          { label: "Essiivi", form: "asiakkaana" },
          { label: "Translatiivi", form: "asiakkaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asiakkaat" },
          { label: "Partitiivi", form: "asiakkaita" },
          { label: "Genetiivi", form: "asiakkaiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "asiakaspalvelu",
      en: "customer service",
      taso: "B1",
      esim: { fi: "Soitin asiakaspalveluun.", en: "I called customer service." },
    },
    {
      fi: "kanta-asiakas",
      en: "loyal/regular customer",
      taso: "B2",
      esim: { fi: "Olen kaupan kanta-asiakas.", en: "I'm a regular customer of the shop." },
    },
    {
      fi: "asiakassuhde",
      en: "customer relationship",
      taso: "B2",
      esim: { fi: "Hyvä asiakassuhde on tärkeä.", en: "A good customer relationship is important." },
    },
  ],
  synonyymit: [
    { fi: "ostaja", en: "buyer" },
    { fi: "kuluttaja", en: "consumer" },
  ],
  esimerkit: {
    A2: { fi: "Asiakas odottaa kassalla.", en: "The customer is waiting at the checkout." },
    B1: { fi: "Asiakas oli tyytyväinen palveluun.", en: "The customer was satisfied with the service." },
    B2: {
      fi: "Tyytyväinen asiakas palaa ja suosittelee yritystä muille.",
      en: "A satisfied customer returns and recommends the company to others.",
    },
  },
  updatedAt: "2026-06-06",
};

export default asiakas;
