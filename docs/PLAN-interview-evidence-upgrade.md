# Interview Evidence Upgrade Plan

## Target

Rework the Hermes evidence page into a first-round interview support surface. The page must help explain automation and efficiency projects visually, with the interviewer able to inspect the cases, demo video, and source evidence without hitting broken or vague links.

Primary interview prompt:

- Show visually detailed examples of automation and efficiency work.
- Explain selected projects and planning experience in a limited interview slot.
- Mask or avoid confidential production data.

## Current Findings

- Demo playback is inconsistent: only the first case video has `autoplay`; the other three have `muted loop playsinline controls` but no `autoplay`.
- Demo media is too small for interview use: desktop layout gives the video the smaller column, with `minmax(360px, 0.92fr)` and `min-height: 220px`; mobile falls to `180px`.
- Code/source CTAs are incomplete: only the recruit poster case has a code link.
- FAQ is not useful for the interview surface. It repeats explanation instead of helping the interviewer inspect proof.
- The live career portfolio backlinks are now correct, but case-level proof still needs clearer source links and stronger visual hierarchy.

## Reference Source

Reference archive:

- `C:\Users\propo\Downloads\drive-download-20260525T094155Z-3-001.zip`
- Nested source inspected: `vibelabs_dist_20260523.zip`

Useful patterns from the VibeLabs source:

- Pinboard-style hero/status area for "currently running / important proof".
- Large service cards with clear label, state, short description, and direct CTA.
- Smaller utility cards for secondary links.
- Strong link affordance: label + arrow + hover movement.
- Section strategy: operational hub first, supporting boards later.

Do not copy:

- Large Rails architecture, admin features, forum/Q&A mechanics, heavy gradients as a full visual theme.

## Five-Cycle Refinement

### Cycle 1 - Problem Fit

Goal: make the page answer the interviewer's request, not general portfolio questions or an explanation of the interview process.

Decision:

- Rename the page intent from broad "DX evidence surface" toward "automation/efficiency interview proof".
- Keep four flagship cases, but present them as inspectable proof blocks.
- Replace FAQ with source and live evidence links, not interview-process guidance.

Acceptance:

- No nav item or section titled FAQ/question remains.
- First viewport states that this is a masked, demo-based proof page for discussing automation cases.

### Cycle 2 - Demo Visibility and Playback

Goal: the demo video must be obvious, large, and reliably playing when the interviewer looks at it.

Implementation direction:

- Add `autoplay muted loop playsinline preload="auto"` to all four videos.
- Add a small JS playback guard:
  - attempt `video.play()` after DOM load,
  - replay when a video enters viewport,
  - leave controls visible for manual recovery if browser policy blocks autoplay.
- Increase video priority:
  - desktop: use video-first or 55/45 layout with video at least `520px` wide on common laptop widths,
  - mobile: keep 16:9 with minimum `220px`,
  - add "확대 보기" / focus mode if time allows.
- Use `object-fit: contain` instead of `cover` if any UI text is cropped.

Acceptance:

- All four videos expose `autoplay=true`, `muted=true`, `loop=true`, `playsInline=true`.
- In browser verification, at least the first visible video has `paused === false` after load or intersection.
- No video text is cropped at desktop and mobile widths.

### Cycle 3 - Source and Proof Links

Goal: every case has direct, credible proof links.

Verified public source links:

| Case | Code link | Live link |
| --- | --- | --- |
| 경조화환 주문 시스템 자동화 | `https://github.com/lucasung-debug/gyeongjo-flow` | optional GitHub Pages if enabled later |
| 전자 서명 수집 프로그램 | `https://github.com/lucasung-debug/hr-documents` | `https://hr-documents.vercel.app` |
| 직무 키워드 분석 | `https://github.com/lucasung-debug/job-keyword-mining` | optional GitHub Pages if enabled later |
| 채용공고 자동 생성 도구 | `https://github.com/lucasung-debug/ottogi-recruit` | `https://ottogi-recruit.vercel.app` |

Implementation direction:

- Add `case.*.repoUrl` / static anchor links in HTML for all four cases.
- Add "코드 보기" to all four cases.
- Add "라이브 보기" only where the live app is confirmed.
- Keep "직무 포트폴리오에서 보기" as contextual backlink.

Acceptance:

- Every evidence card has at least two CTAs: source/code and career portfolio.
- Recruit and e-sign cards have live links.
- All external links return HTTP 200 or a known expected GitHub page status.

### Cycle 4 - Case Evidence Structure

Goal: each case should be explainable in 2-3 minutes.

Recommended card structure:

1. Evidence header: case name, HR operation area, confidentiality note.
2. Large demo panel: video, visible controls, direct source/live buttons.
3. Four proof chips:
   - Problem
   - Design / AI role split
   - Validation
   - Result
4. Design point line:
   - "설계 포인트: 어떤 병목을 어떻게 시스템으로 바꿨는가"

Borrowed VibeLabs pattern:

- Use a "service hub" card hierarchy: one big visual proof area plus compact metadata cards.
- Use direct CTA labels with arrows rather than generic small buttons.

Acceptance:

- A reviewer can scan one case without reading all paragraphs.
- Each case has a visible "what I owned" or "설계 포인트" line.
- Confidentiality is handled by a short "dummy data / masked data" note.

### Cycle 5 - Final Page Shape and Execution Order

Final page shape:

1. Hero: "면접용 자동화/효율화 증거 자료" with 4-case status strip.
2. Evidence cases: four large video-first cards.
3. Source archive: compact link grid for repositories and live demos.
4. Contact/footer.

Remove:

- FAQ section and FAQ JSON-LD.
- Nav entry for FAQ/question.
- Any CTA to dead GitHub Pages career portfolio URL.

Keep:

- Multilingual i18n only if the page remains public; Korean copy is the priority for the interview.
- `llms.txt`, README, and JSON-LD alignment after visible content changes.

## Implementation Plan

### Phase A - Fast Interview Fix

Files:

- `index.html`
- `styles.css`
- `i18n.js`
- `README.md`
- `llms.txt`

Tasks:

- Add autoplay to all videos and JS playback guard.
- Resize evidence cards to video-first layout.
- Add all repo/live CTAs.
- Remove FAQ section, FAQ nav, FAQ i18n entries, and FAQ JSON-LD.
- Replace FAQ with source and live evidence.

Verification:

- `node --check i18n.js`
- JSON-LD parse check
- `rg` check that old FAQ/nav strings and dead career GitHub Pages links are gone
- Browser check on desktop and mobile:
  - videos visible and not cropped,
  - autoplay attempted,
  - all CTA hrefs present,
  - no console errors from the playback guard.

### Phase B - Presentation Polish

Tasks:

- Add case-level "설계 포인트" lines.
- Add compact source archive grid inspired by VibeLabs service-card structure.
- Add optional focus-mode overlay for video if interview laptop screen is small.

Verification:

- Full-page screenshot desktop/mobile.
- Link check for GitHub and live demo CTAs.
- Manual scan check that the page stays focused on evidence, not interview-process instructions.

## Stop Condition

The plan is complete when:

- The page no longer behaves like a general FAQ portfolio page.
- The four demos are large and reliably playable.
- Every case has direct source evidence.
- The page can be used immediately in the first interview as a visual explanation aid.
