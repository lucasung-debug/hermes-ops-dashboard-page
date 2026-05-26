/* ═══════════════════════════════════════
   i18n - 2-language translations
   KO / EN
   ═══════════════════════════════════════ */

const I18N = {
ko: {
  'nav.about':'원칙','nav.demo':'검증 사례','nav.projects':'아카이브','nav.portfolio':'직무 포트폴리오',
  'about.eye':'AI를 다루는 원칙','about.title':'특별한 방법론은 없습니다. AI에 일을 맡길 때마다 지키는 몇 가지가 있을 뿐입니다.','about.lead':'AI는 사고하지 않고 확률로 다음 토큰을 고릅니다. 믿고 맡기는 대신, 제약을 걸고 결과를 검증합니다.',
  'about.c1.t':'질문을 먼저 좁힌다','about.c1.d':'막연한 요청은 막연한 출력을 부릅니다. 문제를 작은 단위로 나누고, 맡길 역할과 검증할 기준을 먼저 정합니다.',
  'about.c2.t':'가드레일을 친다','about.c2.d':'한 모델에 전부 맡기지 않습니다. 분석가와 구현자, 리뷰어로 나누면 AI가 헤맬 범위가 좁아집니다.',
  'about.c3.t':'검증 루프를 돈다','about.c3.d':'출력을 그대로 쓰지 않습니다. 샘플과 누락 케이스, 화면 동작을 확인하며 고쳐 돌립니다.',
  'about.c4.t':'멈출 때와 버릴 것을 정한다','about.c4.d':'어디서 멈추고 무엇을 버릴지 정합니다. 도구는 바뀌어도 그 기준은 남습니다.',
  'hero.title':'결과물은 AI가 만든다. 무엇을 묻고 무엇을 버릴지, 그 판단은 내가 한다.','hero.lead':'여기 있는 건 AI가 만든 결과물이 아니라, 그것을 만든 판단의 기록입니다.',
  'hero.cta1':'검증 사례 보기','hero.cta2':'직무 포트폴리오',
  'hero.s1.l':'질문','hero.s1.v':'AI에 맡기기 전에 질문부터 좁힙니다. 좋은 답은 거기서 나옵니다.','hero.s2.l':'검증','hero.s2.v':'AI의 답을 그대로 믿지 않습니다. 깨뜨려보고 남는 것만 씁니다.','hero.s3.l':'판단','hero.s3.v':'남길 것과 버릴 것은 직접 정합니다.',
  'case.eye':'증거 사례','case.title':'네 개의 자동화 사례. 질문하고, 검증하고, 판단한 기록.','case.lead':'각 사례는 어떤 질문으로 시작해, 무엇을 검증하고, 무엇을 남기고 버렸는지 보여줍니다.',
  'case.q':'질문','case.v':'검증','case.j':'판단','case.portfolioCta':'직무 포트폴리오에서 보기','case.liveCta':'라이브 보기','case.repoCta':'코드 보기',
  'case.gift.badge':'HR · Automation','case.gift.portfolio':'직무 포트폴리오 dx1','case.gift.title':'경조화환 주문 시스템 자동화','case.gift.q':'카톡과 문자로 건별 접수하던 신청. 누락과 회계 증빙 오류가 반복됐습니다. 질문은 분명했습니다. 이 흐름을 신청자·담당자·업체·회계로 나누면 어디를 자동화할 수 있는가.','case.gift.v':'로그인부터 시트 적재까지 역할별로 설계하고, 빈 신청과 잘못된 입력을 넣어 돌렸습니다.','case.gift.j':'수기 확인을 걷어내고 표준 폼과 자동 알림만 남겼습니다.','case.gift.metric':'휴먼에러 0건, 반복 행정 약 90% 절감.',
  'case.sign.badge':'HR · E-Signature','case.sign.portfolio':'직무 포트폴리오 dx2','case.sign.title':'전자 서명 수집 프로그램','case.sign.q':'생산직 550명의 서약서. 종이와 PC로는 기간이 길고 미제출자 추적이 안 됩니다. 현장에 PC가 없다는 제약을 먼저 받아들였습니다.','case.sign.v':'모바일 입력과 서명 저장, 미제출자 모니터링으로 나눴습니다. 손가락 서명이 현장에서 실제로 입력되는지, 이미지가 깨지지 않는지 직접 확인했습니다.','case.sign.j':'PC 절차를 버리고 모바일 하나로 통일했습니다.','case.sign.metric':'550명 전원 수합, 2주 걸리던 일이 3일로.',
  'case.keyword.badge':'HR · Talent Analytics','case.keyword.portfolio':'직무 포트폴리오 dx3','case.keyword.title':'직무 키워드 분석 에이전트','case.keyword.q':'인터뷰와 설문을 사람이 읽으면 해석이 사람마다 갈립니다. AI를 직무 분석가로 고정하면 그 편차를 줄일 수 있을까. 거기서 시작했습니다.','case.keyword.v':'분류 기준과 출력 포맷, 검수 질문을 반복하며 같은 입력에 같은 결과가 나오는지 봤습니다.','case.keyword.j':'흔들리던 해석을 기준 하나로 고정했습니다.','case.keyword.metric':'정성 데이터의 정량화, 외부 지원자 EVP 600건 분석으로 확장.',
  'case.recruit.badge':'HR · Recruiting','case.recruit.portfolio':'채용홍보 사례','case.recruit.title':'채용공고 자동 생성 도구','case.recruit.q':'채용 정보를 매번 포스터와 문안으로 옮기는 일. 반복도 문제였지만, 브랜드 톤이 흔들리는 쪽이 더 컸습니다.','case.recruit.v':'데이터 구조화와 문안 생성, 결과 검수로 역할을 나누고, 누구나 쓰는 공개 도구로 묶어 돌렸습니다.','case.recruit.j':'수작업 디자인 대신 생성 도구를 택했습니다.','case.recruit.metric':'시트나 AI가 만든 데이터에서 포스터가 바로 나옵니다.',
  'prog.eye':'학습 아카이브','prog.title':'끝나지 않은 작업의 판단 기록.','prog.lead':'프로젝트는 끝나지 않습니다. 더 나은 방법이 보이면 방향을 틀고, 상황이 바뀌면 멈췄다 다시 갑니다. 아래는 그 판단의 기록입니다.',
  'prog.1.status':'방향 전환·대기','prog.1.d':'지식 관리는 HTML보다 마크다운이 낫다고 판단해 방향을 틀었습니다. 지식이 쌓이면 다시 발전시킵니다.',
  'prog.2.status':'대체 완료','prog.2.d':'세션 맥락을 직접 잇는 도구였지만, Obsidian과 hermes의 자동 기록이 더 나아 갈아탔습니다.',
  'prog.3.status':'중단·재개 예정','prog.3.d':'실제로 운영하던 도구입니다. HR 직무를 떠나 멈춰뒀고, 다시 가동할 계획입니다.',
  'prog.4.status':'앱 전환 중','prog.4.d':'지금 AI 에이전트로 웹 도구를 앱으로 전환하는 중입니다.',
  'ft.brand':'바이브 코딩 포트폴리오','ft.copy':'Lucas Sung · AI 판단력 포트폴리오'
},

en: {
  'nav.about':'Principles','nav.demo':'Evidence cases','nav.projects':'Archive','nav.portfolio':'Career Portfolio',
  'about.eye':'Principles for working with AI','about.title':'There is no special methodology. There are only a few rules I keep whenever I assign work to AI.','about.lead':'AI does not think. It chooses the next token by probability. I do not simply trust it with the work; I constrain the task and verify the result.',
  'about.c1.t':'Narrow the question first','about.c1.d':'A vague request produces vague output. I split the problem into smaller units, then define the role to assign and the standard to verify.',
  'about.c2.t':'Set guardrails','about.c2.d':'I do not hand everything to one model. Splitting the work into analyst, implementer, and reviewer narrows the space where AI can drift.',
  'about.c3.t':'Run verification loops','about.c3.d':'I do not use output as-is. I check samples, missing cases, and screen behavior, then revise and run it again.',
  'about.c4.t':'Decide when to stop and what to discard','about.c4.d':'I decide where to stop and what to discard. Tools change, but that standard remains.',
  'hero.title':'AI makes the output. I decide what to ask and what to discard.','hero.lead':'This is not a record of what AI made. It is a record of the judgment that made it possible.',
  'hero.cta1':'View evidence cases','hero.cta2':'Career Portfolio',
  'hero.s1.l':'Questioning','hero.s1.v':'Before assigning work to AI, I narrow the question. Good answers start there.','hero.s2.l':'Verification','hero.s2.v':'I do not trust AI answers as-is. I try to break them and use only what remains.','hero.s3.l':'Judgment','hero.s3.v':'I decide what to keep and what to discard.',
  'case.eye':'Evidence cases','case.title':'Four automation cases. A record of questioning, verifying, and judging.','case.lead':'Each case shows what question started the work, what was verified, and what was kept or discarded.',
  'case.q':'Questioning','case.v':'Verification','case.j':'Judgment','case.portfolioCta':'View in career portfolio','case.liveCta':'Open live site','case.repoCta':'View code',
  'case.gift.badge':'HR · Automation','case.gift.portfolio':'Career portfolio dx1','case.gift.title':'Condolence flower order automation','case.gift.q':'Requests were handled one by one through KakaoTalk and text messages. Missing requests and accounting proof errors kept repeating. The question was clear: if this flow is split into requester, owner, vendor, and accounting, where can it be automated?','case.gift.v':'I designed the flow by role from login to sheet logging, then ran it with empty requests and invalid input.','case.gift.j':'I removed manual confirmation and kept only the standard form and automatic notifications.','case.gift.metric':'0 human errors, about 90% less repetitive administration.',
  'case.sign.badge':'HR · E-Signature','case.sign.portfolio':'Career portfolio dx2','case.sign.title':'E-signature collection program','case.sign.q':'Pledges from 550 production workers. Paper and PC workflows took too long and did not track non-submitters. I first accepted the constraint that the field had no PCs.','case.sign.v':'I split the work into mobile input, signature storage, and non-submitter monitoring. I checked directly whether finger signatures could be entered in the field and whether the images stayed intact.','case.sign.j':'I discarded the PC process and unified everything into one mobile flow.','case.sign.metric':'All 550 signatures collected, a two-week task became three days.',
  'case.keyword.badge':'HR · Talent Analytics','case.keyword.portfolio':'Career portfolio dx3','case.keyword.title':'Job keyword analysis agent','case.keyword.q':'When people read interviews and surveys, interpretation differs by person. I started with this question: if AI is fixed as a job analyst, can that variance be reduced?','case.keyword.v':'I repeated the classification standard, output format, and review questions, then checked whether the same input produced the same result.','case.keyword.j':'I fixed unstable interpretation to one standard.','case.keyword.metric':'Quantified qualitative data, then expanded to 600 external applicant EVP analyses.',
  'case.recruit.badge':'HR · Recruiting','case.recruit.portfolio':'Recruiting promotion case','case.recruit.title':'Recruit poster generator','case.recruit.q':'Moving recruiting information into posters and copy every time was repetitive. The bigger issue was that the brand tone kept shifting.','case.recruit.v':'I split the roles into data structuring, copy generation, and result review, then bundled them into a public tool anyone could use.','case.recruit.j':'I chose a generation tool instead of manual design work.','case.recruit.metric':'Posters come directly from sheet data or AI-made data.',
  'prog.eye':'Learning archive','prog.title':'Judgment records from work that is not finished.','prog.lead':'Projects do not really end. When a better method appears, I change direction. When the situation changes, I pause and return. These are records of those judgments.',
  'prog.1.status':'Redirected · Waiting','prog.1.d':'I judged that Markdown is better than HTML for knowledge management and changed direction. When enough knowledge accumulates, I will develop it again.',
  'prog.2.status':'Replaced','prog.2.d':'This directly connected session context, but Obsidian and hermes automated records became better, so I moved on.',
  'prog.3.status':'Paused · Planned restart','prog.3.d':'This was a tool I actually operated. I paused it after leaving the HR role and plan to restart it.',
  'prog.4.status':'Converting to app','prog.4.d':'I am now converting the web tool into an app with an AI agent.',
  'ft.brand':'Vibe Coding Portfolio','ft.copy':'Lucas Sung · AI Judgment Portfolio'
}
};

function setLang(lang) {
  if (!I18N[lang]) lang = 'ko';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  localStorage.setItem('portfolio-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('portfolio-lang') || 'ko';
  setLang(saved);
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => setLang(btn.dataset.lang))
  );
});
