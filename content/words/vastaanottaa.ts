import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem vastaanotta- ~ vastaanota-.
// Present minä vastaanotan, hän vastaanottaa; imperfect minä vastaanotin; NUT vastaanottanut.
const vastaanottaa: Word = {
  fi: "vastaanottaa",
  slug: "vastaanottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to receive, accept",
  selitys:
    "Ottaa vastaan jotakin tai jotakuta: 'vastaanottaa vieraita', 'vastaanottaa viesti'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (vastaanotan). Yhdysverbi vastaan + ottaa. Vrt. vastaanotto, vastaanottaja, ottaa.",
  kuva: { alt: "vastaanottaa – ottaa vastaan jotakin tai jotakuta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (vastaanota- ~ vastaanotta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vastaanotan", merkitys: "I receive" },
      { sija: "imperfekti (minä)", muoto: "vastaanotin", merkitys: "I received" },
      { sija: "NUT-partisiippi", muoto: "vastaanottanut", merkitys: "(have) received" },
    ],
    huom:
      "Yhdysverbi vastaan + ottaa, taipuu kuten ottaa (otan/otin). Astevaihtelu tt:t: vastaanotan, vastaanotin, mutta vastaanottaa, vastaanottanut. Vrt. vastaanotto = reception, vastaanottaja = recipient.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vastaanotan" },
          { label: "sinä", form: "vastaanotat" },
          { label: "hän", form: "vastaanottaa" },
          { label: "me", form: "vastaanotamme" },
          { label: "te", form: "vastaanotatte" },
          { label: "he", form: "vastaanottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vastaanota" },
          { label: "hän", form: "ei vastaanota" },
          { label: "he", form: "eivät vastaanota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vastaanotin" },
          { label: "sinä", form: "vastaanotit" },
          { label: "hän", form: "vastaanotti" },
          { label: "me", form: "vastaanotimme" },
          { label: "te", form: "vastaanotitte" },
          { label: "he", form: "vastaanottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vastaanottanut" },
          { label: "hän", form: "on vastaanottanut" },
          { label: "he", form: "ovat vastaanottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vastaanota!" },
          { label: "te", form: "vastaanottakaa!" },
          { label: "kielto (sinä)", form: "älä vastaanota" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastaanotto",
      en: "reception, receiving",
      taso: "B1",
      esim: { fi: "Lääkärin vastaanotto on klo 9.", en: "The doctor's reception is at 9." },
    },
    {
      fi: "vastaanottaja",
      en: "recipient, receiver",
      taso: "B2",
      esim: { fi: "Viestin vastaanottaja oli väärä.", en: "The recipient of the message was wrong." },
    },
  ],
  synonyymit: [
    { fi: "saada", en: "to get, receive" },
    { fi: "ottaa vastaan", en: "to take in, accept" },
  ],
  esimerkit: {
    A2: { fi: "Vastaanotin paketin tänään.", en: "I received the parcel today." },
    B1: { fi: "Yritys vastaanottaa hakemuksia maanantaihin asti.", en: "The company accepts applications until Monday." },
    B2: {
      fi: "Uusi johtaja vastaanotettiin lämpimästi koko henkilökunnan toimesta.",
      en: "The new manager was warmly received by the entire staff.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vastaanottaa;
