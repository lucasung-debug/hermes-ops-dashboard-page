# PLAN — ver2: Durable AI Capability Portfolio

Date: 2026-05-26
Source: refines `docs/HANDOFF-ai-portfolio-reframing.md` via Socratic + Cartesian (/doubt) planning sessions.
Status: **Planning approved-pending.** Do not write implementation code until the user confirms this plan. Codex implements after confirmation.

---

## 0. Cogito (Cartesian foundation — the load-bearing truth)

A /doubt session dismantled the ver2 assumptions and rebuilt them on one undeniable truth. Everything below is deduced from this. If this changes, re-examine everything.

> **"나는 AI 시대에 대체되지 않음을 증명한다. 거창한 방법론이 아니라, AI를 다룰 때 내가 실제로 하는 행동 — 질문을 좁히고, 검증하고, 버릴 것을 판단하는 — 과 그것이 만든 실제 성과로."**

Deductions that survived the doubt:

- **Differentiator = practice, not claim.** Everyone says "control and verify AI." The proof is the gap between *saying* it and *having actually done it* across the 4 cases. (A3 reframed: short philosophy, deep practice)
- **The page is an entrance, not the archive.** Deep evidence lives in repos + the job portfolio; the page summarizes and routes there. (A4)
- **Durability is identity, not artifacts.** What is durable is neither the 4 cases (replaceable) nor a formal "methodology" (the user claims none) — it is *being a person who works this way*. The cases are snapshots of that. (A5 resolved)
- **No "methodology" framing.** Show concrete actions and real results, not a system. This resolves the user's own hesitation about claiming a formal method.
- **Results carry proof.** Because the claim is "not replaceable," quantitative outcomes (human-error 0, ~90% admin cut, 550 people in 3 days) move forward as evidence, not footnotes.

---

## 1. Decision Record (locked)

These were resolved with the user. Treat them as fixed constraints.

| # | Decision | Value |
|---|----------|-------|
| D1 | Primary purpose | **Capability proof AND durable archive, equal weight.** Not interview collateral. |
| D2 | Core identity (cogito) | "대체되지 않음을 실천의 증거로 증명한다." Proof, not growth/accumulation. See §0. |
| D3 | Hero thesis (KO, final) | **"결과물은 AI가 만든다. 무엇을 묻고 무엇을 버릴지, 그 판단은 내가 한다."** (판단 = 대체 불가능한 핵심) |
| D4 | Capability axes (3) | **질문 / 검증 / 판단** — used both as Hero chips and as the case-evidence flow. The two must stay identical. |
| D5 | Case evidence flow | Each of the 4 cases is retold as **질문했는가 → 검증했는가 → 판단했는가** (3 steps, matching D4). Output/demo is proof inside step 2, not the headline. |
| D6 | Operating-method section | Rename "AI 조율 방식 / orchestration" → **"AI를 다루는 원칙"**. Move it *below* the cases. |
| D7 | Archive form | **Learning-log style.** Each archive item gains a metacognition line: what was learned / what was discarded. |
| D8 | Section order | Hero → Case evidence (4) → AI를 다루는 원칙 → Learning archive. |
| D9 | Language scope | **KO + EN only.** Remove ZH and JA from `i18n.js` and the language switcher. |
| D10 | Removals | Remove hero `status-strip` (용도/증거/범위), the `#sources` section, and the `contact` section. |

### Where the 5 capabilities land (so none is lost)

The user's thesis rests on 5 capabilities. They collapse into the 3 axes as follows — implementers must preserve all five in copy:

| User capability | Lives in axis |
|-----------------|---------------|
| Questioning (질문력) | **질문** |
| Restraint / search-space control (절제·탐색공간 통제) | **질문** (asking a sharper question narrows the search space *before* execution) |
| Harness / verification mindset (하네스·검증) | **검증** |
| Metacognition & judgment (메타인지·판단) | **판단** |
| DX/AX adaptation (DX/AX 적응) | spans all three; surfaced explicitly in "AI를 다루는 원칙" + the learning archive |

---

## 2. Information Architecture: before → after

| Current section (index.html) | ver2 | Action |
|---|---|---|
| `hero` + `status-strip` (line ~64) | **Hero: thesis + 3 axis chips** | Replace H1 `영상과 코드로 보는 자동화 사례.` with D3 thesis. Replace status-strip with 3 chips `질문 / 검증 / 판단`. |
| `#about` "역할 나눈 AI 팀으로 검증" (line ~112) | **"AI를 다루는 원칙"** | Rename, rewrite, and **move down** (after cases). Must include questioning, guardrails/search-space reduction, verification loops, metacognitive learning — not just "role-based AI team". |
| `#flagship` 4 cases (line ~149) | **Case evidence 4 (kept)** | Keep all 4. Retell each as 질문→검증→판단 (D5). Source/live links survive only as secondary CTAs inside each card. |
| `#supporting` archive 6 (line ~222) | **Learning archive (kept, upgraded)** | Each item gains a "배운 것 / 버린 것" line (D7). Keep equal visual weight to cases. |
| `#sources` (line ~241) | — | **Remove** (D10). |
| `contact` (line ~258) | — | **Remove** (D10). |

---

## 3. Hero spec

- **H1 (thesis):** `결과물은 AI가 만든다. 무엇을 묻고 무엇을 버릴지, 그 판단은 내가 한다.`
- **Axis chips (replace status-strip):** three chips — `질문` · `검증` · `판단`. Each chip carries a one-line gloss:
  - 질문 — "더 나은 질문으로 탐색 범위를 먼저 좁힌다."
  - 검증 — "AI 출력을 테스트 가능한 구조로 검증한다."
  - 판단 — "무엇이 참이고 무엇을 버릴지 판단한다."
- **Remove** all temporary framing: `1차 면접`, `면접 지참`, `증거 자료`, `데모 영상·코드·성과`, `자동화 사례 4개`.
- EN mirror required (D9).

## 4. Case evidence spec (4 cases)

Keep: 경조화환 주문 시스템 / 전자 서명 수집 / 직무 키워드 분석 / 채용공고 자동 생성.

Each card is rewritten to the **질문 → 검증 → 판단** flow:

```
[case badge]                         [optional: 직무 포트폴리오 연결]
Title
① 질문  — what problem, and what sharper question narrowed the AI's scope?
② 검증  — how the AI output was constrained & tested  (demo video + metric live here as proof)
③ 판단  — what was decided as true/useful, and what was cut or rejected?
(secondary CTA: live/source link — only if it adds credibility)
```

- Keep large readable demo videos as proof inside ②.
- The case flow labels **must equal** the Hero axes (질문/검증/판단).

## 5. "AI를 다루는 원칙" spec (moved below cases)

Replaces the old `#about`. Must articulate the operating philosophy, not a tool list:

- Premise: AI is a system moved by matrices and probability, **not a thinking agent** — so it must be constrained, routed, and verified.
- Cover: questioning, guardrails / search-space reduction, verification loops, stopping rules, and metacognitive learning.
- Tie to DX/AX adaptation: how the user keeps deciding what is necessary, true, unknown, worth learning next, and worth discarding.

## 6. Learning archive spec

Upgrade the 6 `#supporting` items to learning-log entries. Per item add:

- **배운 것** — one concrete lesson from building/using it.
- **버린 것** — one thing dropped, deprioritized, or proven wrong.

This makes the archive *evidence of judgment*, equal in weight to the cases (D1).

## 7. Language scope change (D9)

- `i18n.js`: keep `I18N.ko` and `I18N.en`; **remove `I18N.zh` and `I18N.ja`** entirely.
- Remove ZH/JA from the language switcher UI in `index.html`.
- Net effect: new philosophy/archive copy only needs KO + EN — halves the sync burden and the past "missing-key" risk.

---

## 8. Files to touch & implementation constraints

Likely touched: `index.html`, `i18n.js`, `styles.css`, `README.md`, `llms.txt`, plus JSON-LD/meta in `index.html`.

Hard constraints (from HANDOFF + repo history — do not violate):

- **hangul-only hook false-positive:** `i18n.js` triggers a write block. Multilingual edits go through a Python patch script run via Bash, then `node --check` for syntax. (With ZH/JA removed the file shrinks, but the hook may still fire.)
- **safehouse:** write-allowed paths are `Desktop/AI`, `.claude`, `ObsidianVault`.
- **No word-breaking** inside KO/EN words: keep `word-break: keep-all`, `line-break: strict`, zero letter-spacing unless a verified design reason changes them.
- **No large generic card sections** that don't serve the thesis.
- Keep demo videos large and readable.
- **Push only after user approval.** Work locally → verify → approve → push.
- Update JSON-LD (`ItemList` = 4 cases), remove FAQ/sources structured data, refresh `description` meta. `llms.txt` re-aligned to the 4 cases + learning archive.

## 9. Verification (end-to-end, before declaring done)

1. Local server: `python -m http.server 8765`.
2. Browser check: Hero thesis + 3 chips render; 4 case cards show 질문/검증/판단; 4 demo videos play; console errors = 0.
3. Language toggle shows **only** KO/EN, no missing keys.
4. Removed sections (status-strip, #sources, contact) are gone; no dead nav links to them.
5. JSON-LD valid; `llms.txt` matches on-screen 4 cases.
6. Verify on local AND deployed GitHub Pages before completion.

---

## 10. Open items for implementation phase

- Per-case actual content for 질문/검증/판단 steps — pull from the user or existing research during build (the cases' real "what question / what was cut" detail is not yet written).
- Exact EN wording for the new philosophy/archive copy.
- "AI를 다루는 원칙" section name is locked (D6), but its sub-headings are an implementation-time detail.
