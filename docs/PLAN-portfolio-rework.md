# 바이브코딩 포트폴리오 페이지 — 검증 surface 전면 재구성 (doubt 기반)

## Context (왜 이 변경인가)

`hermes-ops-dashboard-page`(공개 바이브코딩 포트폴리오)는 "무작정 바꾸다 뒤틀린" 상태다:
- 라이브 화면(데모 4탭 + 대표 프로젝트 4카드)과 메타데이터(README/llms.txt/JSON-LD)가 서로 다른 프로젝트를 가리킴 (flagship=hr-documents·nerdspecs·Video Pipeline ≠ 실제 4사례)
- 레포 description이 아직 옛 "칸반 대시보드 미러"
- 데모 4탭과 대표 프로젝트 4카드가 **같은 4개를 중복** 서술
- (부차) 스크롤 reveal이 초기 뷰포트 요소를 안 켜서 첫인상이 휑함

**/doubt로 전제를 해체한 결과 확정된 코기토:**
> "이 페이지는 내 직무 포트폴리오(`hr-ops-portfolio`)의 DX 사례가 실제 작동함을, **'AI를 어떻게 조율했는가(과정·방법론)'로 증명**하는 검증 surface다. 직무 포트폴리오 → 이 페이지 CTA 연결이 완성점."

**확정 사항 (악마의 심문 결과):**
1. 1순위 목적 = 직무 포트폴리오 DX 사례 **검증** / 2순위 = 발전 아카이브 / 3순위 = 협업 문의
2. 가장 강한 증거 = **과정·방법론** (데모영상은 증명 보조, 메인 아님)
3. "비개발자" = 솔직하게, 과장·은폐 없이
4. 구조가 목적과 안 맞음 → **전면 재구성** 필요
5. 최종 목표 = `hr-ops-portfolio`에서 이 페이지로 **CTA 연결**

**검증 대상 정렬 (hr-ops-portfolio `content.js` `dxCases`):**
| 직무 포폴 | 바이브코딩 페이지 사례 |
|---|---|
| dx1 경조화환 자동화 | 경조화환 (gyeongjo-flow.mp4) |
| dx2 전자서명 수집 | 전자서명 (hr-esign.mp4) |
| dx3 직무키워드 분석 | 직무키워드 (job-keyword-mining.mp4) |
| (직무포폴 "직무분석 기반 채용홍보" 사례) | 채용공고 자동생성 ottogi (ottogi-recruit.mp4) |
→ ottogi는 "채용 홍보" 맥락으로 **4개 사례 모두 검증 블록**에 포함.

---

## Step 0 — Ultraplan 준비 (즉시 실행, 승인 시 먼저 수행)

이 세션 cwd(`C:\Users\propo`)가 git 레포가 아니라 Ultraplan이 실패함. 작업 레포는 이미 존재하므로 Plan을 그 안에 배치한다:

1. 이 Plan 파일을 작업 레포 안으로 복사:
   `C:\Users\propo\.claude\plans\witty-bouncing-hopper.md`
   → `C:\Users\propo\Desktop\AI\hermes-ops-dashboard-page\docs\PLAN-portfolio-rework.md`
   (대상 레포에 `docs/`가 없으면 생성)
2. `git -C ...\hermes-ops-dashboard-page status`로 배치 확인 (working tree에 두기만; 커밋·push는 마스터 승인 후)
3. 마스터 안내: 새 터미널에서 `cd C:\Users\propo\Desktop\AI\hermes-ops-dashboard-page` → `claude` 실행 →
   프롬프트 "docs/PLAN-portfolio-rework.md 읽고 Ultraplan으로 정제해줘"
   → cwd가 git 레포라 Ultraplan 정상 동작 + Plan이 번들에 포함됨

> Step 0은 "Ultraplan 정제용 준비"일 뿐, 아래 Phase A/B 구현은 정제·승인 이후 진행.

---

## 새 정보구조(IA): 현재 → 재구성

| 현재 섹션 | 재구성 후 | 근거(코기토 연역) |
|---|---|---|
| Hero (비개발자×오케스트레이션) | **Hero — 검증 surface 정체성** + 직무포폴 역링크 | 들어온 사람이 "여기가 DX 증거 페이지"임을 즉시 인지 |
| About 4카드 + Process 4단계 | **"AI 조율 방식" 1섹션**으로 압축 | 추상 역량/일반론은 검증에 약함 → 핵심만 |
| Demo 4탭 **+** Projects 4카드 (중복) | **사례별 검증 블록 4개**로 통합 | 각 블록 = 문제 → AI 조율 과정·방법론(주인공) → 데모영상(증명) → 정량 성과 → 직무포폴 DX 연결 배지 |
| In Progress 6개 | **"확장 중" 아카이브**로 강등·정직 표기 | 검증과 무관(연역 불가) → 2순위 목적으로 축소 |
| FAQ | 검증·협업 관점으로 갱신 | |
| Contact | **+ 직무 포트폴리오 CTA** | 최종 목표(상호 연결) |

**핵심 컴포넌트 = "사례별 검증 블록"** (4개 반복):
```
[사례 배지: HR·E-Signature 등]  [직무포폴 DX 연결 배지: "직무 포트폴리오 dx2"]
제목 (예: 전자 서명 수집 프로그램)
① 문제: 무엇이 고통이었나
② AI 조율 과정·방법론 (주인공): 어떤 AI를 / 어떤 역할로 / 어떻게 검증했나
③ 증명: 데모영상 + 정량 성과(550명 2주→3일 등)
④ 증거 링크: 라이브/코드(있으면) + "직무 포트폴리오에서 보기"
```

---

## 수정 파일 & 작업

### Phase A — 바이브코딩 페이지 재구성 (레포: hermes-ops-dashboard-page, 로컬 `C:\Users\propo\Desktop\AI\hermes-ops-dashboard-page`)

1. **index.html**
   - Hero 카피를 "검증 surface" 정체성으로 (`hero.*` 텍스트)
   - About+Process → "AI 조율 방식" 1섹션으로 병합·축소
   - Demo 섹션 + Projects 섹션 → **사례별 검증 블록 4개**로 통합 (각 사례에 ①문제 ②AI조율과정 ③데모+성과 ④증거링크/직무포폴배지). 기존 `demos/*.mp4` 4개 재사용
   - 내부 식별자 정리: `data-tab`/`data-panel`의 옛 이름(`pipeline`/`nerdspecs`/`hermes`) → 의미 일치 이름(`recruit`/`gift`/`kw`/`sign`)
   - In Progress(`#supporting`) → "확장 중" 축소 섹션
   - nav/footer "직무 포트폴리오" `href="#"` → 실제 `hr-ops-portfolio` 라이브 URL (Phase B에서 URL 확정)
   - **JSON-LD 갱신**: `ItemList`(flagship)을 4사례로, `FAQPage` 갱신, description meta 갱신
   - **reveal 버그 수정**: `index.html` 하단 스크립트의 IntersectionObserver에 (a) 로드 시 초기 뷰포트 요소 즉시 표시 (b) IO 미발동/미지원 fallback 전체 노출 추가 (`revealObs` 블록, 현 line ~367)
2. **i18n.js** — 위 카피 변경을 KO/EN/ZH/JA 4개 언어 모두 동기화 (`I18N.ko/en/zh/ja`). 신규 키(검증 블록 과정·방법론 텍스트) 추가, 사라진 키 정리
3. **styles.css** — 검증 블록 레이아웃 보강 (필요 최소). 기존 라이트 프리미엄 톤 유지
4. **README.md** — flagship을 4사례로 재정의, "칸반 미러/`site/index.html` 생성" 등 옛 구조 문구 제거, 직무 포트폴리오 검증 관계 명시
5. **llms.txt** — `Flagship evidence projects`를 4사례(경조·서명·키워드·채용)로 재작성, supporting/AEO 구조 정합
6. **레포 description** — `gh repo edit`로 "Public vibe-coding evidence page that verifies the DX cases in Lucas Sung's HR job portfolio" 류로 교체 (칸반 흔적 제거)

### Phase B — CTA 상호 연결 (최종 목표)

7. **hr-ops-portfolio** (레포: hr-ops-portfolio) — DX 사례(dx1/2/3)와 채용홍보 사례에 **"실제 작동 증거 보기 →"** CTA를 바이브코딩 페이지의 해당 사례 앵커로 연결. 데이터 원본이 `content.js`(Notion 생성)이므로, 수정 지점(템플릿 vs 생성물)을 먼저 확인 후 진행
8. 바이브코딩 페이지 → hr-ops-portfolio 역링크 확정 (Phase A 1의 직무포폴 링크와 짝)

> Phase A(도착지 정비)를 먼저 완료해야 Phase B(CTA 연결)가 의미를 가짐.

---

## 실행 제약 (HANDOFF.md 함정 — 반드시 준수)

- **hangul-only 훅 오탐**: `i18n.js`엔 중/일 텍스트가 있어 Edit/Write가 차단됨 → 다국어 파일 수정은 **Bash로 python 패치 스크립트** 작성·실행 후 삭제, `node --check`로 문법 검증
- **safehouse**: 쓰기 허용 경로 = `Desktop/AI`, `.claude`, `ObsidianVault`. 위험 JS 패턴(DOM 직접삽입 등)이 본문에 들면 Write 차단 → 원본 복사 + 부분 Edit
- **푸시는 마스터 승인 후에만**. 작업은 로컬(`Desktop/AI/hermes-ops-dashboard-page`)에서 → 검증 → 승인 → push
- i18n 4개 언어 누락 없이 동기화 (과거 About 16키 누락 버그 전례)

---

## 검증 방법 (end-to-end)

1. 로컬 서버: `python -m http.server 8765` (Desktop/AI/hermes-ops-dashboard-page)
2. Playwright MCP로:
   - 초기 로드 시 첫 화면 요소 보이는지 (reveal 수정 확인)
   - 4개 검증 블록 렌더 + 데모영상 4개 재생 + 콘솔 에러 0
   - 4개 언어 전환 시 누락 키 없는지 (KO/EN/ZH/JA)
   - 직무포폴 CTA/역링크 클릭 동작
3. JSON-LD 유효성 + llms.txt ↔ 화면 4사례 일치 재확인
4. Phase B: hr-ops-portfolio 로컬 서버에서 DX 사례 CTA → 바이브코딩 페이지 앵커 이동 확인
5. 통과 후에만 각 레포 push, GitHub Pages 빌드 폴링

---

## 미결 / Plan 승인 후 확정할 점

- 검증 블록의 "AI 조율 과정·방법론" 본문 = 각 사례별 실제 조율 내용 필요 → 마스터 인터뷰 or 기존 research/HANDOFF에서 추출 (실행 중 사례별로 확인)
- Phase B의 hr-ops-portfolio `content.js` 수정 방식(템플릿/생성물)은 해당 레포 구조 확인 후 결정
- 디자인 세부(검증 블록 비주얼)는 현 라이트 프리미엄 톤 유지 + 필요 시 frontend 설계 보강
