import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, tt:t gradation, stem viittaa- ~ viita-.
// Present minä viittaan, hän viittaa; imperfect minä viittasin; NUT viitannut. Governs illative.
const viitata: Word = {
  fi: "viitata",
  slug: "viitata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to refer, allude; to gesture, point",
  selitys:
    "Osoittaa tai viitata johonkin eleellä tai puheessa: 'viitata aiempaan tutkimukseen'. Tyyppi 4 (-ata), Kotus 73/salata, astevaihtelu tt:t (viittaan vahva tt, viitata/viitannut heikko t). Hallitsee illatiivia. Vrt. viittaus, viite.",
  kuva: { alt: "viitata – osoittaa johonkin eleellä tai puheessa" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata), Kotus 73/salata; astevaihtelu tt:t (viittaa- ~ viita-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "viittaan", merkitys: "I refer" },
      { sija: "imperfekti (minä)", muoto: "viittasin", merkitys: "I referred" },
      { sija: "NUT-partisiippi", muoto: "viitannut", merkitys: "(have) referred" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva viittaa- (viittaan, viittasin), heikko infinitiivissä ja NUT-muodossa (viitata, viitannut). Hallitsee illatiivia: 'viitata johonkin'. Myös: nostaa käsi (viitata oppitunnilla). Vrt. viittaus = reference.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "viittaan" },
          { label: "sinä", form: "viittaat" },
          { label: "hän", form: "viittaa" },
          { label: "me", form: "viittaamme" },
          { label: "te", form: "viittaatte" },
          { label: "he", form: "viittaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en viittaa" },
          { label: "hän", form: "ei viittaa" },
          { label: "he", form: "eivät viittaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "viittasin" },
          { label: "sinä", form: "viittasit" },
          { label: "hän", form: "viittasi" },
          { label: "me", form: "viittasimme" },
          { label: "te", form: "viittasitte" },
          { label: "he", form: "viittasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen viitannut" },
          { label: "hän", form: "on viitannut" },
          { label: "he", form: "ovat viitanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "viittaa!" },
          { label: "te", form: "viitatkaa!" },
          { label: "kielto (sinä)", form: "älä viittaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viittaus",
      en: "reference, allusion",
      taso: "B2",
      esim: { fi: "Tekstissä on viittaus lähteeseen.", en: "The text has a reference to a source." },
    },
    {
      fi: "viite",
      en: "reference (number), citation",
      taso: "B2",
      esim: { fi: "Lisää lähdeviite loppuun.", en: "Add the source reference at the end." },
    },
  ],
  synonyymit: [
    { fi: "vihjata", en: "to hint" },
    { fi: "osoittaa", en: "to point, indicate" },
  ],
  esimerkit: {
    A2: { fi: "Oppilas viittasi ja vastasi.", en: "The pupil raised a hand and answered." },
    B1: { fi: "Hän viittasi puheessaan aiempiin tapahtumiin.", en: "In his speech he referred to earlier events." },
    B2: {
      fi: "Artikkeli viittaa useisiin tutkimuksiin, jotka tukevat väitettä.",
      en: "The article refers to several studies that support the claim.",
    },
  },
  updatedAt: "2026-06-07",
};

export default viitata;
