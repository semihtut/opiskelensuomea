import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, kk:k gradation, stem lomakkee- ~ lomake.
// Genitive lomakkeen, partitive lomaketta, illative lomakkeeseen, partitive pl lomakkeita.
const lomake: Word = {
  fi: "lomake",
  slug: "lomake",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "form (to fill in)",
  selitys:
    "Valmis asiakirjapohja, johon täytetään tietoja: 'täyttää lomake', 'hakemuslomake'. Tyyppi 48/hame, astevaihtelu kk:k (lomake → lomakkeen). Sanasta loma ('aukko') + -ke. Vrt. täyttää, hakemus, kyselylomake.",
  kuva: { alt: "lomake – valmis asiakirjapohja johon täytetään tietoja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu kk:k (lomake ~ lomakkee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lomakkeen", merkitys: "of the form" },
      { sija: "partitiivi (yks.)", muoto: "lomaketta", merkitys: "form (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "lomakkeeseen", merkitys: "into the form" },
    ],
    huom:
      "Tyyppi 48/hame: nominatiivi lomake (heikko k), vartalo lomakkee- vahvistuu (lomakkeen, lomakkeella). Partitiivi lomaketta, partitiivin monikko lomakkeita. Vrt. hakemuslomake, kyselylomake, verkkolomake.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lomake" },
          { label: "Partitiivi", form: "lomaketta" },
          { label: "Genetiivi", form: "lomakkeen" },
          { label: "Inessiivi", form: "lomakkeessa" },
          { label: "Elatiivi", form: "lomakkeesta" },
          { label: "Illatiivi", form: "lomakkeeseen" },
          { label: "Adessiivi", form: "lomakkeella" },
          { label: "Ablatiivi", form: "lomakkeelta" },
          { label: "Allatiivi", form: "lomakkeelle" },
          { label: "Essiivi", form: "lomakkeena" },
          { label: "Translatiivi", form: "lomakkeeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lomakkeet" },
          { label: "Partitiivi", form: "lomakkeita" },
          { label: "Genetiivi", form: "lomakkeiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hakemuslomake",
      en: "application form",
      taso: "B1",
      esim: { fi: "Täytä hakemuslomake huolellisesti.", en: "Fill in the application form carefully." },
    },
    {
      fi: "verkkolomake",
      en: "online form",
      taso: "B2",
      esim: { fi: "Hakemus lähetetään verkkolomakkeella.", en: "The application is sent via an online form." },
    },
  ],
  synonyymit: [
    { fi: "kaavake", en: "form (synonym)" },
  ],
  esimerkit: {
    A2: { fi: "Täytä tämä lomake.", en: "Fill in this form." },
    B1: { fi: "Lähetin lomakkeen postitse.", en: "I sent the form by post." },
    B2: {
      fi: "Lomakkeessa pyydetään henkilötiedot ja allekirjoitus.",
      en: "The form asks for personal details and a signature.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lomake;
