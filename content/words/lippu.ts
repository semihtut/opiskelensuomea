import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, pp:p gradation, stem lippu- ~ lipu-.
// Genitive lipun, partitive lippua, illative lippuun, partitive pl lippuja.
const lippu: Word = {
  fi: "lippu",
  slug: "lippu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "ticket; flag",
  selitys:
    "Matkaan tai tapahtumaan oikeuttava kortti, tai kankainen tunnus: 'ostaa lippu' / 'Suomen lippu'. Tyyppi 1, astevaihtelu pp:p (lippu → lipun). Vrt. pääsylippu (admission ticket), lipunmyynti (ticket sales).",
  kuva: { alt: "lippu – matkaan oikeuttava kortti tai tunnus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu pp:p (lippu ↔ lipu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lipun", merkitys: "of the ticket" },
      { sija: "partitiivi (yks.)", muoto: "lippua", merkitys: "ticket (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lippuja", merkitys: "tickets (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa pp → p: genetiivi lipun, adessiivi lipulla. Vahva aste pp säilyy partitiivissa lippua ja illatiivissa lippuun. Kaksi merkitystä: ticket ja flag.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lippu" },
          { label: "Partitiivi", form: "lippua" },
          { label: "Genetiivi", form: "lipun" },
          { label: "Inessiivi", form: "lipussa" },
          { label: "Elatiivi", form: "lipusta" },
          { label: "Illatiivi", form: "lippuun" },
          { label: "Adessiivi", form: "lipulla" },
          { label: "Ablatiivi", form: "lipulta" },
          { label: "Allatiivi", form: "lipulle" },
          { label: "Essiivi", form: "lippuna" },
          { label: "Translatiivi", form: "lipuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "liput" },
          { label: "Partitiivi", form: "lippuja" },
          { label: "Genetiivi", form: "lippujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pääsylippu",
      en: "admission ticket",
      taso: "B1",
      esim: { fi: "Pääsylippu maksoi kymmenen euroa.", en: "The admission ticket cost ten euros." },
    },
    {
      fi: "menolippu",
      en: "one-way ticket",
      taso: "B2",
      esim: { fi: "Ostin vain menolipun.", en: "I bought only a one-way ticket." },
    },
    {
      fi: "lipunmyynti",
      en: "ticket sales, box office",
      taso: "B2",
      esim: { fi: "Lipunmyynti alkaa tunti ennen.", en: "Ticket sales start an hour before." },
    },
  ],
  synonyymit: [
    { fi: "pääsylippu", en: "admission ticket" },
    { fi: "matkalippu", en: "travel ticket" },
  ],
  esimerkit: {
    A2: { fi: "Ostin junalipun.", en: "I bought a train ticket." },
    B1: { fi: "Liput myytiin loppuun nopeasti.", en: "The tickets sold out quickly." },
    B2: {
      fi: "Suomen lippu nostetaan salkoon juhlapäivinä.",
      en: "The flag of Finland is raised on the flagpole on holidays.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lippu;
