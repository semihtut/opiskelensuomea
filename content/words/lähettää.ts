import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem lähettä- ~ lähetä-.
// Present minä lähetän, hän lähettää; imperfect minä lähetin, hän lähetti; NUT lähettänyt.
const lähettää: Word = {
  fi: "lähettää",
  slug: "lähettää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to send; to broadcast",
  selitys:
    "Toimittaa jotakin toiselle, esim. viesti tai paketti: 'lähettää sähköposti'. Tyyppi 1 (-ää), astevaihtelu tt:t (lähetän ~ lähettää). Johdettu sanasta lähteä. Vrt. lähetys (broadcast/shipment), lähettäjä.",
  kuva: { alt: "lähettää – toimittaa jotakin toiselle" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (lähetän ↔ lähettää)",
    muodot: [
      { sija: "preesens (minä)", muoto: "lähetän", merkitys: "I send" },
      { sija: "imperfekti (minä)", muoto: "lähetin", merkitys: "I sent" },
      { sija: "NUT-partisiippi", muoto: "lähettänyt", merkitys: "(have) sent" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (lähetän, lähetin), vahva aste tt hän/he- ja perusmuodossa (lähettää, lähetti). 'Lähettää jollekulle jotakin' (allatiivi + objekti). Vrt. lähetys = broadcast.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lähetän" },
          { label: "sinä", form: "lähetät" },
          { label: "hän", form: "lähettää" },
          { label: "me", form: "lähetämme" },
          { label: "te", form: "lähetätte" },
          { label: "he", form: "lähettävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lähetä" },
          { label: "hän", form: "ei lähetä" },
          { label: "he", form: "eivät lähetä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lähetin" },
          { label: "sinä", form: "lähetit" },
          { label: "hän", form: "lähetti" },
          { label: "me", form: "lähetimme" },
          { label: "te", form: "lähetitte" },
          { label: "he", form: "lähettivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen lähettänyt" },
          { label: "hän", form: "on lähettänyt" },
          { label: "he", form: "ovat lähettäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lähetä!" },
          { label: "te", form: "lähettäkää!" },
          { label: "kielto (sinä)", form: "älä lähetä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lähetys",
      en: "broadcast; shipment",
      taso: "B1",
      esim: { fi: "Suora lähetys alkaa kohta.", en: "The live broadcast starts soon." },
    },
    {
      fi: "lähettäjä",
      en: "sender",
      taso: "B1",
      esim: { fi: "Kuka oli viestin lähettäjä?", en: "Who was the sender of the message?" },
    },
    {
      fi: "lähetti",
      en: "messenger, courier",
      taso: "B2",
      esim: { fi: "Lähetti toi paketin ovelle.", en: "The courier brought the parcel to the door." },
    },
  ],
  synonyymit: [
    { fi: "postittaa", en: "to mail, post" },
    { fi: "toimittaa", en: "to deliver" },
  ],
  esimerkit: {
    A2: { fi: "Lähetän sinulle viestin.", en: "I'll send you a message." },
    B1: { fi: "Hän lähetti paketin postissa.", en: "She sent the parcel by post." },
    B2: {
      fi: "Muista lähettää hakemus ennen määräajan umpeutumista.",
      en: "Remember to send the application before the deadline expires.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lähettää;
