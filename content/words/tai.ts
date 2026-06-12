import type { Word } from "@/lib/content-types";

// Coordinating conjunction "tai" (or). Invariant. Used in statements; "vai" is used
// in questions offering alternatives.
const tai: Word = {
  fi: "tai",
  slug: "tai",
  pos: "konjunktio (rinnastuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "or",
  selitys:
    "Rinnastuskonjunktio, joka ilmaisee vaihtoehtoa väitelauseessa. Ei taivuteta. 'Otan teetä tai kahvia.' Kysymyksessä käytä vai (tee vai kahvi?).",
  kuva: { alt: "tai – vaihtoehto" },

  kielioppi: {
    tyyppi: "rinnastuskonjunktio (vaihtoehto); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "tai", merkitys: "or (in statements)" },
      { sija: "vrt.", muoto: "vai", merkitys: "or (in questions)" },
      { sija: "yhdistelmä", muoto: "joko… tai", merkitys: "either… or" },
    ],
    huom:
      "TÄRKEÄ ero: väitteessä 'tai' (Otan teetä tai kahvia), kysymyksessä 'vai' (Otatko teetä vai kahvia?). 'Joko… tai' = either… or; 'tai sitten' = or else.",
  },
  johdokset: [
    {
      fi: "joko… tai",
      en: "either… or",
      taso: "B1",
      esim: { fi: "Joko tulet nyt tai jäät kotiin.", en: "Either you come now or you stay home." },
    },
    {
      fi: "tai sitten",
      en: "or else, or alternatively",
      taso: "B1",
      esim: { fi: "Mennään ulos tai sitten katsotaan elokuva.", en: "Let's go out, or else watch a movie." },
    },
    {
      fi: "taikka",
      en: "or (variant)",
      taso: "B2",
      esim: { fi: "Tee se tänään taikka huomenna.", en: "Do it today or tomorrow." },
    },
  ],
  synonyymit: [
    { fi: "taikka", en: "or (variant)" },
    { fi: "tahi", en: "or (literary, archaic)" },
  ],
  esimerkit: {
    A2: { fi: "Haluatko teetä tai kahvia?", en: "Would you like tea or coffee? (offering either)" },
    B1: { fi: "Voimme mennä junalla tai bussilla.", en: "We can go by train or by bus." },
    B2: {
      fi: "Sinun kannattaa varata liput etukäteen, tai muuten paikat voivat loppua.",
      en: "You should book the tickets in advance, or else the seats may run out.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tai;
