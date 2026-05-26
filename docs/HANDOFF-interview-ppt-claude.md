# Claude handoff: interview PPT planning

## Goal

Create a compact interview presentation deck based on the current HR operations portfolio and the public AI evidence page.

The deck is not a full portfolio replacement. It should be a conversation index for an interview: 5 to 7 slides, with QR codes routing the interviewer to detailed evidence.

## Interview request from company

The company asked the candidate to bring material that explains:

1. Automation / efficiency cases the candidate built and operated, with visual detail.
2. Other projects, planning experiences, or work cases the candidate wants to emphasize.

They also asked the candidate to mask confidential information and preferably present from a personal laptop.

## Current positioning decision

Main positioning should be:

> 문제를 구조로 바꾸고, 운영이 흔들리지 않게 만드는 HR Generalist

Reason:

- The portfolio evidence is stronger around operations stabilization than around "automation builder" alone.
- Automation is a method, not the identity.
- The candidate should be positioned as an HR Generalist who connects recruiting, attendance, general affairs, compliance, and automation so the company can operate reliably.
- For Paytalab, the fit should be framed as someone who helps specialists work better by removing operational gaps, handoff friction, and repeated manual work.

Do not over-index on "AI tool builder" or "developer." The strongest narrative is HR operations judgment plus practical system-building.

## Core evidence available

From HR operations portfolio:

- 700-person manufacturing site HR operations.
- Recruiting operations, attendance management, contractor / dispatched worker management, payroll support, government subsidy administration.
- Attendance manual correction errors reduced by 85%.
- Production worker applicants increased by 217%.
- Attendance tagging recognition improved by 12 percentage points.
- 52-hour violation claims: 0.
- M/H-based contractor and dispatched worker cost settlement reached zero calculation errors.
- Labor cost dashboard participation.
- Government labor cost subsidy operation.
- Labor office interpretation inquiries and public authority support.
- Labor-management council material preparation and union response support.
- Costco / BRCGS global audit human-rights response.
- Company monthly / annual event planning and operation.

From public AI evidence page:

- Condolence flower order automation: 0 human errors, about 90% less repetitive administration.
- E-signature collection program: all 550 signatures collected, two-week task shortened to three days.
- Job keyword analysis agent: qualitative data quantified, expanded to 600 external applicant EVP analyses.
- Recruiting poster generator: recruiting poster and copy generated directly from sheet or AI-created data.
- Site narrative: question, verification, judgment. The value is not the AI output itself, but the candidate's ability to define the question, test the answer, and decide what to keep or discard.

## Recommended slide spine

1. Cover / thesis
   - Title: 문제를 구조로 바꾸고, 운영이 흔들리지 않게 만드는 HR Generalist
   - Subtitle: 채용, 근태, 총무, 컴플라이언스, 자동화를 연결해 안정적인 운영을 만듭니다.
   - Include QR to evidence page.

2. Why this material
   - Connect directly to the company's request.
   - Message: today is not a product demo. It is an explanation of how I diagnose work, structure operations, and create reusable systems.

3. Operating range
   - Show HR Generalist scope as connected lanes:
     - Recruiting operations
     - Attendance / working-hour management
     - Contractor / dispatched worker administration
     - Payroll and subsidy support
     - Labor / audit / compliance support
     - General affairs and internal events
     - Automation as operating infrastructure

4. Measured HR operations outcomes
   - Feature the four strongest numbers:
     - 85% fewer manual attendance corrections
     - 0 working-hour violation claims
     - 217% more production applicants
     - 12 percentage point tagging recognition improvement
   - Tone: these are operating results, not tool screenshots.

5. Automation as operating method
   - Use the public evidence cases:
     - Flower order automation
     - E-signature collection
     - Job keyword analysis
     - Recruiting poster generator
   - For each, show "problem -> structure -> result" or "question -> verification -> judgment."

6. Fit for Paytalab
   - Message: in a growing company, specialists need clean handoffs and reliable operating rhythms.
   - Candidate role: connect fragmented work, standardize repeated processes, protect operational accuracy, and help each specialist focus on higher-value work.

7. Conversation map / QR appendix
   - Put QR codes for:
     - Public AI evidence page: https://lucasung-debug.github.io/hermes-ops-dashboard-page/
     - HR career portfolio: https://smjportfolio.com/
   - Optional: include separate links to resume or PDF only if the final interviewer flow needs it.

## Copy direction

Use Korean as the primary language. Tone should be concise, professional, and confident.

Avoid:

- Overclaiming as a developer.
- Saying automation replaces HR expertise.
- Making AI the main identity.
- Dense paragraphs.
- Decorative Korean text inside generated images.

Prefer:

- Editable PPT text.
- Native charts / shapes.
- Deterministic QR codes.
- Short headlines with one clear takeaway per slide.
- Evidence-first wording.

## Visual direction

Use the current portfolio visual system as reference:

- Clean white / light gray background.
- Primary blue around `#0d9abf`.
- Slate text.
- Rounded but restrained cards.
- Pretendard or a Korean-safe sans font.
- No dark dramatic theme.
- No purple-heavy gradient theme.

The deck should feel like an operations briefing, not a marketing hero page.

## Important implementation note

For QR codes, generate real deterministic QR codes from the URLs. Do not use AI image generation for QR.

For Korean text, keep it as native PPT text. If images are generated, use them only as background or abstract support visuals without embedded Korean copy.

## Suggested Claude prompt

Use this prompt with Claude:

```text
아래 핸드오프를 기준으로 면접용 PPT 장표 기획을 한 번 더 압박 검토해줘.

목표는 5~7장짜리 대화용 인덱스 장표다. 자동화 사례만 설명하는 자료가 아니라, 채용·근태·총무·컴플라이언스·자동화 사이의 운영 빈틈을 구조화해 회사가 안정적으로 돌아가게 만드는 HR Generalist 포지셔닝이어야 한다.

중심 문장:
"문제를 구조로 바꾸고, 운영이 흔들리지 않게 만드는 HR Generalist"

검토할 것:
1. 이 포지셔닝이 포트폴리오 증거와 맞는지
2. 면접 회사 요청사항 1번과 2번을 모두 충족하는지
3. 자동화 사례가 과하게 개발자처럼 보이지 않는지
4. Paytalab에 맞춘 적합성 장표가 충분히 설득력 있는지
5. 5~7장 장표 순서와 각 장의 핵심 카피를 더 선명하게 만들 수 있는지

최종 산출물은 슬라이드별 제목, 한 줄 메시지, 넣을 증거, 말로 보충할 포인트로 정리해줘.
```
