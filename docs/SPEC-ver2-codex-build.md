# SPEC — ver2 Build Instructions for Codex

Date: 2026-05-26
Source of truth: this file + `docs/PLAN-ver2-ai-capability.md` (§0 Cogito is binding).
Audience: Codex (implementer). Claude produced this after Socratic + Cartesian (/doubt) planning and two stop-slop copy passes.

**Rule for the implementer:** The Korean copy blocks below are FINAL. Use them verbatim — do not paraphrase, "improve," or re-translate. Surface assumptions, keep changes surgical, verify before declaring done.

---

## 0. Foundation (do not drift from this)

Cogito: **"나는 AI 시대에 대체되지 않음을 증명한다. 거창한 방법론이 아니라, AI를 다룰 때 내가 실제로 하는 행동 — 질문을 좁히고, 검증하고, 버릴 것을 판단하는 — 과 그것이 만든 실제 성과로."**

Hero thesis (KO, final): **"결과물은 AI가 만든다. 무엇을 묻고 무엇을 버릴지, 그 판단은 내가 한다."**

Capability axes (3, identical in Hero chips and case flow): **질문 / 검증 / 판단**

Section order: Hero → 증거 사례 4개 → AI를 다루는 원칙 → 학습 아카이브.

Languages: **KO + EN only.** Remove ZH and JA.

---

## 1. Section build instructions

### 1.1 Hero (`<section class="hero">`, index.html ~line 64)

| Action | Detail |
|--------|--------|
| Replace H1 | `hero.title` → `결과물은 AI가 만든다. 무엇을 묻고 무엇을 버릴지, 그 판단은 내가 한다.` |
| Replace lead | `hero.lead` → `여기 있는 건 AI가 만든 결과물이 아니라, 그것을 만든 판단의 기록입니다.` |
| Remove badge | Delete `hero.badge` key + its DOM node (`면접용 자동화·효율화 증거 자료`). |
| Replace status-strip → capability chips | Reuse the 3 strip slots as 3 capability chips. Keep `hero.s{1,2,3}.l/.v` keys, change values (below). Restyle the strip block as chips, not "label/value" pairs. |
| Keep CTAs | `hero.cta1` (검증 사례 보기), `hero.cta2` (직무 포트폴리오) stay. |

Chip copy (final):
- `hero.s1.l` = `질문` / `hero.s1.v` = `AI에 맡기기 전에 질문부터 좁힙니다. 좋은 답은 거기서 나옵니다.`
- `hero.s2.l` = `검증` / `hero.s2.v` = `AI의 답을 그대로 믿지 않습니다. 깨뜨려보고 남는 것만 씁니다.`
- `hero.s3.l` = `판단` / `hero.s3.v` = `남길 것과 버릴 것은 직접 정합니다.`

### 1.2 Evidence cases (`<section id="flagship">`, ~line 149) — keep all 4, retell as 질문→검증→판단

**Flow label keys:** retire `case.problem` / `case.method` / `case.proof` / `case.result`. Add 3 new shared labels:
- `case.q` = `질문`
- `case.v` = `검증`
- `case.j` = `판단`

**Per-case body keys:** replace the old `.problem/.method/.proof/.result` with `.q/.v/.j`, and add `.metric` (rendered bold inside the 판단 block as the quantitative proof).

Keep unchanged per case: `.badge`, `.portfolio`, `.title`, and the CTA buttons (`case.repoCta`, `case.liveCta`, `case.portfolioCta`). **Remove `case.{gift,sign,keyword,recruit}.note`** (its role is absorbed by 판단).

Final copy:

**case-gift (경조화환):**
- `.q` = `카톡과 문자로 건별 접수하던 신청. 누락과 회계 증빙 오류가 반복됐습니다. 질문은 분명했습니다. 이 흐름을 신청자·담당자·업체·회계로 나누면 어디를 자동화할 수 있는가.`
- `.v` = `로그인부터 시트 적재까지 역할별로 설계하고, 빈 신청과 잘못된 입력을 넣어 돌렸습니다.`
- `.j` = `수기 확인을 걷어내고 표준 폼과 자동 알림만 남겼습니다.`
- `.metric` = `휴먼에러 0건, 반복 행정 약 90% 절감.`

**case-sign (전자서명):**
- `.q` = `생산직 550명의 서약서. 종이와 PC로는 기간이 길고 미제출자 추적이 안 됩니다. 현장에 PC가 없다는 제약을 먼저 받아들였습니다.`
- `.v` = `모바일 입력과 서명 저장, 미제출자 모니터링으로 나눴습니다. 손가락 서명이 현장에서 실제로 입력되는지, 이미지가 깨지지 않는지 직접 확인했습니다.`
- `.j` = `PC 절차를 버리고 모바일 하나로 통일했습니다.`
- `.metric` = `550명 전원 수합, 2주 걸리던 일이 3일로.`

**case-keyword (직무키워드):**
- `.q` = `인터뷰와 설문을 사람이 읽으면 해석이 사람마다 갈립니다. AI를 직무 분석가로 고정하면 그 편차를 줄일 수 있을까. 거기서 시작했습니다.`
- `.v` = `분류 기준과 출력 포맷, 검수 질문을 반복하며 같은 입력에 같은 결과가 나오는지 봤습니다.`
- `.j` = `흔들리던 해석을 기준 하나로 고정했습니다.`
- `.metric` = `정성 데이터의 정량화, 직무 키워드 EVP 600건 분석으로 확장.`

**case-recruit (채용공고):**
- `.q` = `채용 정보를 매번 포스터와 문안으로 옮기는 일. 반복도 문제였지만, 브랜드 톤이 흔들리는 쪽이 더 컸습니다.`
- `.v` = `데이터 구조화와 문안 생성, 결과 검수로 역할을 나누고, 누구나 쓰는 공개 도구로 묶어 돌렸습니다.`
- `.j` = `수작업 디자인 대신 생성 도구를 택했습니다.`
- `.metric` = `시트나 AI가 만든 데이터에서 포스터가 바로 나옵니다.`

Update `case.eye/title/lead` to fit the 질문→검증→판단 framing:
- `case.eye` = `증거 사례` (keep)
- `case.title` = `네 개의 자동화 사례. 질문하고, 검증하고, 판단한 기록.`
- `case.lead` = `각 사례는 어떤 질문으로 시작해, 무엇을 검증하고, 무엇을 남기고 버렸는지 보여줍니다.`

### 1.3 "AI를 다루는 원칙" (reuse `<section id="about">`, ~line 112 — MOVE to after cases)

Move this section so it renders *after* `#flagship`. Rewrite:
- `about.eye` = `AI를 다루는 원칙`
- `about.title` = `특별한 방법론은 없습니다. AI에 일을 맡길 때마다 지키는 몇 가지가 있을 뿐입니다.`
- `about.lead` = `AI는 사고하지 않고 확률로 다음 토큰을 고릅니다. 믿고 맡기는 대신, 제약을 걸고 결과를 검증합니다.`
- **Remove** `about.intro1`, `about.intro2` (drop the intro-prose block; the 4 principle cards carry it).

Principle cards (reuse `about.c1..c4`):
- `c1.t` = `질문을 먼저 좁힌다` / `c1.d` = `막연한 요청은 막연한 출력을 부릅니다. 문제를 작은 단위로 나누고, 맡길 역할과 검증할 기준을 먼저 정합니다.`
- `c2.t` = `가드레일을 친다` / `c2.d` = `한 모델에 전부 맡기지 않습니다. 분석가와 구현자, 리뷰어로 나누면 AI가 헤맬 범위가 좁아집니다.`
- `c3.t` = `검증 루프를 돈다` / `c3.d` = `출력을 그대로 쓰지 않습니다. 샘플과 누락 케이스, 화면 동작을 확인하며 고쳐 돌립니다.`
- `c4.t` = `멈출 때와 버릴 것을 정한다` / `c4.d` = `어디서 멈추고 무엇을 버릴지 정합니다. 도구는 바뀌어도 그 기준은 남습니다.`

### 1.4 학습 아카이브 (reuse `<section id="supporting">`, ~line 222)

Frame = **status + judgment** (NOT "배운 것/버린 것" — that framing was wrong; these projects were not failures but live judgments). Each item: project name + a status badge + one-line judgment. **Drop `ottogi-recruit` (now case ④) and `chartmind-ai` (a throwaway Manus token-experiment; excluded to protect credibility).** Result: **4 items.**

- `prog.eye` = `학습 아카이브`
- `prog.title` = `끝나지 않은 작업의 판단 기록.`
- `prog.lead` = `프로젝트는 끝나지 않습니다. 더 나은 방법이 보이면 방향을 틀고, 상황이 바뀌면 멈췄다 다시 갑니다. 아래는 그 판단의 기록입니다.`

Replace single `prog.N` with `prog.N.status` (badge) + `prog.N.d` (judgment). Project names stay hardcoded (English identifiers, no translation needed):

| Item | name | `.status` (badge) | `.d` (judgment, FINAL — user-confirmed) |
|------|------|-------------------|------------------------------------------|
| 1 | HTMLvault | `방향 전환·대기` | `지식 관리는 HTML보다 마크다운이 낫다고 판단해 방향을 틀었습니다. 지식이 쌓이면 다시 발전시킵니다.` |
| 2 | mnemo-hook | `대체 완료` | `세션 맥락을 직접 잇는 도구였지만, Obsidian과 hermes의 자동 기록이 더 나아 갈아탔습니다.` |
| 3 | hr-newsletter-automation | `중단·재개 예정` | `실제로 운영하던 도구입니다. HR 직무를 떠나 멈춰뒀고, 다시 가동할 계획입니다.` |
| 4 | moneyfit | `앱 전환 중` | `지금 AI 에이전트로 웹 도구를 앱으로 전환하는 중입니다.` |

DOM: each `progress-card` renders `<h3>{name}</h3>` + a status badge element + `<p>{judgment}</p>`. Add a small badge style if none exists, consistent with the light-premium tone. All 4 are **user-confirmed** — no inference remaining.

### 1.5 Removals

- **Delete `<section id="sources">`** (~line 241) and all `sources.*` keys.
- **Delete the contact `<section>`** (~line 258) and all `ct.*` keys.
- **Nav cleanup:** remove `nav.sources`; remove `nav.process` if its target section no longer exists. Update labels: `nav.about` → `원칙`, `nav.projects` → `아카이브`. Verify no nav anchor points to a removed section.
- Confirm `back-to-top` and footer still work after section removal.

---

## 2. i18n.js changes

1. **Delete the entire `zh:` and `ja:` objects.** Keep only `ko` and `en`. Update the file header comment (`KO / EN`).
2. **Remove the ZH/JA options from the language switcher** in `index.html` (and any JS that lists available languages).
3. **Key churn summary:**
   - Removed keys: `hero.badge`, `case.problem/method/proof/result`, `case.*.note`, `about.intro1/2`, all `sources.*`, all `ct.*`, `prog.1..6` (old single form), `nav.sources`.
   - New keys: `case.q/v/j`, `case.{gift,sign,keyword,recruit}.{q,v,j,metric}`, `prog.{1..4}.{status,d}`.
   - Reused keys with new values: `hero.title`, `hero.lead`, `hero.s1..s3.l/v`, `case.title/lead`, `about.eye/title/lead`, `about.c1..c4.t/d`, `prog.eye/title/lead`, `nav.about/projects`.
4. **EN copy:** translate every final KO string above into EN with the SAME register — declarative, professional, no marketing fluff, no em dashes. Mirror sentence rhythm where possible. **Do not invent facts**; keep metrics identical. Produce EN and have the user review before publish (see §5).
5. **hangul-only hook:** editing `i18n.js` directly may be blocked. Apply changes via a Python patch script run through Bash, then `node --check i18n.js` to validate syntax. Delete the script after.

---

## 3. Metadata

- **JSON-LD in index.html:** keep `ItemList` = the 4 cases; remove any FAQ structured data and the sources list. Update `description` meta to reflect "judgment over output" framing (no "interview material" wording).
- **README.md:** redefine flagship as the 4 cases serving the cogito; remove kanban/old-structure remnants; state the durable-AI-capability framing and the job-portfolio link relationship.
- **llms.txt:** re-align `Flagship evidence projects` to the 4 cases + learning archive; drop sources/contact structure.

---

## 4. Constraints (must not violate)

- KO/EN must not break inside words: keep `word-break: keep-all`, `line-break: strict`, zero letter-spacing unless a verified design reason changes them.
- safehouse write-allowed paths: `Desktop/AI`, `.claude`, `ObsidianVault`.
- Keep demo videos large and readable; do not shrink them.
- No new generic card sections beyond what this spec defines.
- **Push only after the user approves.** Work locally → verify → approve → push.

---

## 5. Verification checklist (before declaring done)

1. `python -m http.server 8765` from the repo root.
2. Hero shows new thesis + lead + 3 chips (질문/검증/판단). No "면접/증거 자료" wording anywhere.
3. 4 case cards render 질문→검증→판단 with bold metric; all 4 demo videos play; console errors = 0.
4. "AI를 다루는 원칙" renders AFTER the cases.
5. Archive shows 5 items, each with 배운 것 / 버린 것. ottogi-recruit not duplicated here.
6. `#sources` and contact sections gone; no dead nav anchors.
7. Language switcher shows ONLY KO/EN; toggling shows no missing keys in either.
8. JSON-LD valid; `llms.txt` matches the on-screen 4 cases.
9. Verify on local AND deployed GitHub Pages.

---

## 6. Open items (resolve with user, not by guessing)

- ~~Archive facts~~ — **RESOLVED.** Archive reframed to status+judgment; all 4 items user-confirmed; chartmind-ai dropped.
- **EN copy** — generate from final KO, same register (declarative, professional, no em dashes); user reviews before publish. This is the only remaining copy gap.
- Section name "AI를 다루는 원칙" is locked. Sub-layout (chip vs card) is implementer's call within existing light-premium style.
