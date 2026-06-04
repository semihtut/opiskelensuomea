---
name: finnish-word-entry
description: >
  Create or edit a single Finnish word entry under content/words/<slug>.ts for Opiskelen
  Suomea. Use this skill WHENEVER adding a word, fixing a form, or building a batch of
  vocabulary — verbs, nouns, adjectives, adverbs, conjunctions, pronouns, or phrases. It
  encodes the Word schema, the per-entry verification protocol (Kielitoimiston sanakirja +
  Wiktionary), and the field-by-field checklist that keeps every paradigm correct. Accuracy
  is the brand: never invent a form. Pairs with docs/FINNISH-ACCURACY.md (the rules) and
  docs/CONTENT-MODEL.md (the types).
---

# Finnish Word Entry — Opiskelen Suomea

One word = one typed file at `content/words/<slug>.ts`, exporting a `Word` (see
`lib/content-types.ts` / `docs/CONTENT-MODEL.md`). Pages are derived from it — never put
linguistic content in a component. **Correctness comes before speed** (CLAUDE.md rule 1).

## The non-negotiable: verify before you save

NEVER invent or guess a form. For anything non-trivial, confirm against, in order:

1. **Kielitoimiston sanakirja** — kielitoimistonsanakirja.fi (spelling, meaning, register).
2. **Wiktionary** — en.wiktionary.org, full inflection tables + `Appendix:Finnish
   conjugation/<type>` and `Appendix:Finnish nominal inflection/<type>`.
3. uusikielemme.fi — when a rule itself is unclear.

Trivial forms (regular type-1 present of a transparent stem) can be written directly; the
moment gradation, a stem change, an irregular comparison, an `-ida` verb, or a contracted
stem is involved → **look it up**. The four places mistakes hide (re-scan every batch):
consonant gradation, plural partitive/genitive, irregular comparison, `-ida` positive past.

## Authoring steps

1. **Pick the lemma + slug.** Slug = lowercase dictionary form, ä/ö/å preserved
   (`talo`, `syödä`, `työ`). One canonical entry per word — de-dup against the source list.
2. **Classify.** Set `posClass` (coarse, for filtering/schema) and `pos` (human label with
   detail, e.g. `"verbi (tyyppi 2)"`, `"substantiivi (tyyppi: talo)"`). For verbs, the
   **verb type drives every form** — get it right first (see the type map in FINNISH-ACCURACY).
3. **Meaning.** `en` = concise English gloss(es); `selitys` = short **Finnish** definition.
   Avoid propagating known source errors (e.g. `haluta` = want only; `kertoa` = to tell).
4. **`kielioppi` (always-visible summary).**
   - `tyyppi`: short type/gradation note (e.g. `"tyyppi 1, gradaatio t:d (koti→kodin)"`).
   - `muodot`: 3–4 key `FormRow`s. For **nominals include the partitive sg** (teach it first);
     for **verbs** include present 1sg, past 1sg, and the negative/connegative.
   - `huom`: one usage/irregularity note. **For `-ida` verbs always note** positive past =
     present, differing only in the negative past + participle.
5. **`taivutus` (full tables)** — omit for invariants (most adverbs/conjunctions/phrases).
   - **Verbs:** sections Preesens, Preesens·kielto, Imperfekti, Imperfekti·kielto, Perfekti,
     Perfekti·kielto, Imperatiivi. Negatives = negation verb + connegative; perfect =
     olla + past participle. Verify each person.
   - **Nominals:** "Yksikkö (sijat)" = full singular case set (Nom, Partitiivi, Genetiivi,
     Inessiivi, Elatiivi, Illatiivi, Adessiivi, Ablatiivi, Allatiivi, Essiivi, Translatiivi)
     + "Monikko (avainmuodot)" with at least Nom pl, Partitiivi pl, Genetiivi pl. The UI
     auto-extracts partitive sg/pl from these.
6. **`johdokset`** — 3–4 genuinely related/derived words, each with `taso` (A2/B1/B2) and one
   verified `esim` example. **`synonyymit`** — 2–4 near-synonyms (`fi`/`en`); note register
   differences in `selitys` or a johdos if meaningful.
7. **`esimerkit`** — exactly one `A2`, one `B1`, one `B2` example, each `{fi, en}`,
   natural and correct, using the lemma. Difficulty should climb across the three.
8. **`updatedAt`** — ISO date (today). Drives JSON-LD `dateModified`.

## Per-entry checklist (before saving)

- [ ] Slug = lowercase lemma, ä/ö preserved; exactly one entry for this word.
- [ ] `posClass` + `pos` correct; verb type identified if a verb.
- [ ] `en` accurate (no source-list error); `selitys` is real, idiomatic Finnish.
- [ ] `kielioppi.muodot` includes partitive sg (nominals) / key verb forms; every form verified.
- [ ] `taivutus` present for verbs & nominals, omitted for invariants; gradation + stem
      changes + negatives + plural partitive/genitive all checked against a source.
- [ ] `-ida` verb? `huom` notes positive-past = present.
- [ ] Irregular comparison (hyvä→parempi→paras) not regularized.
- [ ] 3–4 `johdokset` (with level + example), 2–4 `synonyymit`.
- [ ] A2/B1/B2 examples present, correct, increasing in difficulty.
- [ ] `updatedAt` set. Type-checks against the `Word` interface (no `any`).

## Batch habit

Generate in **small verified batches**, not mass dumps. After each batch re-scan the four
error-prone areas above. If uncertain about a single form: stop and verify, or leave that
form out — never commit a guess.
