# Finnish Accuracy — the correctness bible

This product teaches Finnish to the public. Correctness is the brand. This document is the
reference behind the non-negotiable accuracy rule in `CLAUDE.md`. Read it before generating
or reviewing linguistic content.

## Golden rules

1. **Never invent a form.** If you are not certain, verify or leave it out.
2. **Verify all non-trivial paradigms** against authoritative sources (below).
3. **The source word list is a draft, not truth** — de-duplicate and correct it.
4. **Quality over speed.** Generate in small batches; re-check every gradation/irregular.

## Verification sources (in order of authority)

1. **Kielitoimiston sanakirja** — kielitoimistonsanakirja.fi (official dictionary of the
   Institute for the Languages of Finland). The arbiter for spelling, meaning, register.
2. **Wiktionary** — en.wiktionary.org, esp. the full inflection tables and
   "Appendix:Finnish conjugation/<type>". Good for complete paradigms.
3. Cross-check uusikielemme.fi for grammar explanations when a rule is unclear.

## What MUST be verified (high error risk)

- **Consonant gradation**: k/p/t alternations and special cases (nt:nn *antaa→annan*;
  k:– *aika→ajan*; t:d *koti→kodin*, *vesi→veden*). Direction (strong↔weak) varies by type.
- **Stem changes**: *vesi→vede-*, *mies→miehe-*, *lapsi→lapse-*, nominal *-nen→-se-*
  (*nainen→naise-*), *-si* nouns.
- **`-ida` / `-oida` verbs** (verb type 2): the positive past is **identical to the present**
  (*voin* = "I can" / "I could"); they differ only in the negative past (*en voinut*) and
  participle (*voinut/voineet*). Always note this in `huom`.
- **Irregular comparison**: *hyvä → parempi → paras* (not *hyvempi*); *pitkä → pidempi*;
  *uusi → uudempi*.
- **Contracted -s / -ut / -in adjectives & nouns**: *kaunis→kaunii-*, *lyhyt→lyhye-*,
  *puhdas→puhtaa-*, *avain→avaime-*.
- **Plural stems & plural partitive/genitive**: often the trickiest forms (*kaunis→kauniita,
  kauniiden*; *aika→aikoja, aikojen*).
- **Verb type classification** drives everything below; get it right first.

## Verb types (quick map — verify forms per word)

| Type | Infinitive ends | Example | Present 1sg | Past 1sg |
|------|-----------------|---------|-------------|----------|
| 1 | -a/-ä (V+a) | puhua | puhun | puhuin |
| 2 | -da/-dä | syödä, voida | syön, voin | söin, voin* |
| 3 | -la/-na/-ra/-sta | tulla, mennä | tulen, menen | tulin, menin |
| 4 | -ata/-ätä | tavata, haluta | tapaan, haluan | tapasin, halusin |
| 5 | -ita/-itä | tarvita | tarvitsen | tarvitsin |
| 6 | -eta/-etä | vanheta | vanhenen | vanhenin |

\* `-ida` subgroup of type 2: positive past = present (see above).

## Cases (the full set; partitive is the priority to teach)

Nom, **Partitive** (sg+pl — the hardest, teach it prominently), Gen, Iness (-ssa/-ssä),
Elat (-sta/-stä), Illat (-Vn/-hVn/-seen), Adess (-lla/-llä), Ablat (-lta/-ltä),
Allat (-lle), Essiivi (-na/-nä), Translat (-ksi). Local cases: internal (ssa/sta/Vn) vs
external (lla/lta/lle). `koti` uses special adverbials: *kotona / kotoa / kotiin*.

## Verb negation & compound tenses (formation)

- Negative = negation verb (en/et/ei/emme/ette/eivät) + connegative stem
  (present: *en syö*; past: *en syönyt* / plural *emme syöneet* — past participle).
- Perfect = *olla* (present) + past participle (*olen syönyt / olemme syöneet*).
- Pluperfect = *olla* (past) + past participle (*olin syönyt*). (Add when program reaches B-level.)
- Imperative: 2sg = connegative-ish stem (*syö!*), 2pl *-kaa/-kää* (*syökää!*);
  negative *älä syö / älkää syökö*.

## Known errors in the source list (wordmastery.org) — do NOT propagate

- `haluta` glossed "to want/love" → **want** only (love = *rakastaa*).
- "likaista" → correct infinitive **liata**.
- "ukostaa" → **ukkostaa** (to thunder).
- "miuata" → **naukua / maukua** (to meow).
- "kertoa" listed as "to multiply" → primary meaning **to tell**; multiply sense is marginal.
- Many "prepositions" are postpositions/case endings; `koska` = **because**, not "about".
- Massive duplication (saada, koska, vaikka, uusi, lopulta, pronouns…) → de-dup to ~900 unique.
- Missing essentials: **mennä, syödä, juoda** and others → add deliberately.

## Final-pass habit

After creating any batch, re-scan specifically for: gradation correctness, plural
partitive/genitive, irregular comparison, and `-ida` past notes. These four are where
mistakes hide.
