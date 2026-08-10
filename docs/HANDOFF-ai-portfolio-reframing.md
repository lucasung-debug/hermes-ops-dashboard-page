# AI Portfolio Reframing Handoff

Date: 2026-05-26

## Purpose

This handoff captures the user's latest direction so a planning-focused Claude session can refine the portfolio concept before implementation.

The current page has drifted toward a short-term interview proof page. The user now wants this repository to become a durable portfolio and archive for their AI utilization capability in DX/AX environments.

## Triggering Feedback

The user reviewed the deployed page and identified three visible sections that no longer fit the intended direction:

1. The hero status strip says `용도 / 증거 / 범위` with values like `1차 면접 지참 자료`, `데모 영상·코드·성과`, and `자동화 사례 4개`.
   - Problem: this frames the page as temporary interview collateral.
   - Desired shift: replace it with capability-oriented axes that can remain valid as a long-term AI portfolio.

2. The `원본·라이브 증거` section says `각 사례의 원본 코드와 배포 링크`.
   - Problem: a dedicated source-link section is not important enough to occupy a major page band.
   - Desired shift: remove this section. Source/live links can stay as secondary CTAs inside individual case cards if useful.

3. The `연락하기` section is unnecessary.
   - Problem: it adds generic portfolio-page weight and does not help explain the user's AI capability.
   - Desired shift: remove it unless a future plan finds a specific, non-generic reason to keep it.

The current `AI 조율 방식` section is not wrong, but it is currently too early and too narrow. It should become a secondary section after the page first explains how the user adapts to DX/AX environments and what distinguishes their AI utilization capability.

## New Strategic Direction

The portfolio should not primarily say:

- "I made things with AI."
- "Here are four demo videos."
- "Here are source links."
- "This is interview material."

It should primarily say:

- "In an environment where AI is continuously used, I know how to ask better questions."
- "I treat AI as a system that must be constrained, routed, and verified, not as a thinking agent."
- "I can reduce search space before execution through harness-like structures, validation loops, and clear stopping rules."
- "I can decide what is true, what is useful, what I need to learn next, and what should be discarded."
- "I am building durable AI literacy before broader AGI-level disruption arrives."

## User's Core Thesis

The user believes the most important AI-era capability is not result extraction alone.

The important capabilities are:

1. **Questioning capability**
   - Getting useful answers depends on asking better questions.
   - The portfolio should show how the user frames problems, narrows ambiguity, and asks questions that make AI output usable.

2. **Restraint and search-space control**
   - AI should be understood as a system moved by vast matrices and probability, not as an entity that "thinks."
   - Because of that premise, the user values reducing exploration scope before asking AI to generate or act.
   - This includes guardrails, constraints, validation criteria, and harness engineering.

3. **Harness engineering / verification mindset**
   - The user is interested in structures that make AI output testable and repeatable.
   - Important ideas: bounded tasks, role assignment, evaluation loops, evidence, failure modes, stopping rules, and iteration under constraints.

4. **Metacognition and judgment**
   - In a fast-changing environment, the user needs to identify:
     - what is necessary,
     - what is true,
     - what is unknown,
     - what should be studied next,
     - what should be ignored or cut.
   - The portfolio should show judgment, not just tools.

5. **DX/AX adaptation**
   - The page should explain how the user is adapting to DX and AX environments.
   - It should connect practical work cases to a broader learning posture and operating philosophy.

## Planning Problem For Claude

Claude should refine the page around this question:

> What does this portfolio need to prove about the user's AI utilization capability, if it is meant to be a durable DX/AX portfolio and archive rather than a short-term interview evidence page?

Claude should not immediately write implementation code. The planning output should define:

- the new first-viewport message,
- the replacement for the current status strip,
- the section order,
- what to remove,
- what to keep as evidence,
- what language should replace "AI orchestration" if that term is too narrow,
- how the four existing cases should support the larger thesis,
- what proof patterns can show questioning, restraint, harness thinking, and metacognition.

## Likely Page Shape

This is only a starting hypothesis for Claude to challenge.

1. **Hero: Durable AI capability thesis**
   - Explain the user's stance on using AI in DX/AX work.
   - Avoid temporary phrases like `1차 면접`, `면접 지참`, or `증거 자료`.

2. **Capability axes**
   - Replace `용도 / 증거 / 범위`.
   - Possible axes:
     - `Questioning`
     - `Harness`
     - `Judgment`
   - Alternative Korean labels need careful planning.

3. **DX/AX adaptation narrative**
   - Explain how the user is learning, adapting, and choosing what matters in an AI-saturated workplace.
   - This should likely come before the old `AI 조율 방식`.

4. **Case evidence**
   - Keep the four automation cases, but make them serve the capability thesis.
   - Each case should show more than output:
     - what question was asked,
     - how scope was constrained,
     - what was validated,
     - what judgment was required.

5. **AI operating method**
   - The old `AI 조율 방식` section can move down and be rewritten.
   - It should not be just "role-based AI team"; it should include questioning, guardrails, search-space reduction, and metacognitive learning loops.

6. **Archive / growth record**
   - Keep an archive concept if it helps show durable learning.
   - Avoid generic "contact" or source-link sections unless they directly serve the thesis.

## Must Remove Or Rework

- Remove the standalone `#sources` section.
- Remove the `contact` section.
- Remove the hero `status-strip` as currently written.
- Remove or avoid copy that frames the site mainly as:
  - interview material,
  - source-code directory,
  - simple demo proof page,
  - generic contact page.
- Keep source/live CTAs only where they help individual case credibility.

## Implementation Notes For Codex

After Claude produces the refined plan, Codex should implement it directly in this repository.

Likely touched files:

- `index.html`
- `styles.css`
- `i18n.js`
- `README.md`
- `llms.txt`
- possibly existing plan docs under `docs/`

Important UI constraints:

- Korean, Chinese, Japanese, and English text must not break inside words.
- Keep `word-break: keep-all`, `line-break: strict`, and zero letter spacing unless the new design has a verified reason to change them.
- Avoid large generic card sections that do not support the thesis.
- Maintain large readable demo videos for case evidence.
- Verify with local browser and deployed GitHub Pages before declaring completion.

## Suggested Socratic Starting Questions

1. What is the one capability this portfolio must prove even if all four current projects are replaced later?
2. Is the core identity `AI 활용 역량`, `DX/AX 적응력`, `AI 운영 판단력`, or another phrase?
3. Should the first screen foreground the user's philosophy, the evidence cases, or the capability axes?
4. What is the right Korean vocabulary for:
   - questioning,
   - harness,
   - restraint,
   - search-space reduction,
   - metacognition,
   - judgment?
5. Which parts of the existing page should survive as evidence, and which parts are only remnants of the interview-material framing?

