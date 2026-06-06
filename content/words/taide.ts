import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:d gradation, stem taitee- ~ taide.
// Genitive taiteen, partitive taidetta, illative taiteeseen, partitive pl taiteita.
const taide: Word = {
  fi: "taide",
  slug: "taide",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "art",
  selitys:
    "Luova ja esteettinen ilmaisu: 'moderni taide'. Tyyppi 48, astevaihtelu t:d (taide → taiteen). Nominatiivissa heikko d, vartalossa vahva t (taitee-). Johdettu sanasta taitaa. Vrt. taiteilija (artist), taidemuseo (art museum).",
  kuva: { emoji: "🎨", alt: "taide – luova ja esteettinen ilmaisu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:d (taide ↔ taitee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "taiteen", merkitys: "of art" },
      { sija: "partitiivi (yks.)", muoto: "taidetta", merkitys: "art (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "taiteita", merkitys: "arts (partitive pl.)" },
    ],
    huom:
      "Nominatiivissa heikko aste taide (d), mutta vartalossa vahva taitee- (t): genetiivi taiteen, monikon nominatiivi taiteet. Partitiivi taidetta. Vrt. taiteilija = artist, kuvataide = visual art.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "taide" },
          { label: "Partitiivi", form: "taidetta" },
          { label: "Genetiivi", form: "taiteen" },
          { label: "Inessiivi", form: "taiteessa" },
          { label: "Elatiivi", form: "taiteesta" },
          { label: "Illatiivi", form: "taiteeseen" },
          { label: "Adessiivi", form: "taiteella" },
          { label: "Ablatiivi", form: "taiteelta" },
          { label: "Allatiivi", form: "taiteelle" },
          { label: "Essiivi", form: "taiteena" },
          { label: "Translatiivi", form: "taiteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "taiteet" },
          { label: "Partitiivi", form: "taiteita" },
          { label: "Genetiivi", form: "taiteiden / taiteitten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "taiteilija",
      en: "artist",
      taso: "B1",
      esim: { fi: "Hän on tunnettu taiteilija.", en: "He is a well-known artist." },
    },
    {
      fi: "taidemuseo",
      en: "art museum",
      taso: "B1",
      esim: { fi: "Kävimme taidemuseossa viikonloppuna.", en: "We visited the art museum at the weekend." },
    },
    {
      fi: "taiteellinen",
      en: "artistic",
      taso: "B2",
      esim: { fi: "Lopputulos oli hyvin taiteellinen.", en: "The end result was very artistic." },
    },
  ],
  synonyymit: [
    { fi: "taiteenlaji", en: "art form" },
    { fi: "luova ilmaisu", en: "creative expression" },
  ],
  esimerkit: {
    A2: { fi: "Pidän modernista taiteesta.", en: "I like modern art." },
    B1: { fi: "Taide voi herättää voimakkaita tunteita.", en: "Art can evoke strong emotions." },
    B2: {
      fi: "Taiteen tehtävä ei ole vain miellyttää vaan myös haastaa katsoja.",
      en: "The purpose of art is not only to please but also to challenge the viewer.",
    },
  },
  updatedAt: "2026-06-06",
};

export default taide;
