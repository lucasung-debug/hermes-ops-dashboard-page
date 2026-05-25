/* ═══════════════════════════════════════
   i18n — 4-language translations
   KO / EN / ZH / JA
   ═══════════════════════════════════════ */

const I18N = {
ko: {
  'nav.about':'조율 방식','nav.demo':'검증 사례','nav.projects':'확장 중','nav.process':'과정','nav.sources':'원본 링크','nav.portfolio':'직무 포트폴리오',
  'about.eye':'AI 조율 방식','about.title':'코드를 대신 쓰는 AI가 아니라, 역할을 나눈 AI 팀으로 검증합니다.','about.lead':'핵심은 "AI로 만들었다"가 아니라 어떤 문제를 어떤 역할의 AI에게 맡기고, 결과를 어떻게 확인해 업무 성과로 연결했는지입니다.',
  'about.intro1':'저는 개발 직무 출신이 아닙니다. 그래서 더 명확하게 문제를 쪼개고, AI에게 맡길 역할과 사람이 직접 검증할 기준을 먼저 정합니다.',
  'about.intro2':'각 사례는 문제 정의, AI 역할 분담, 산출물 검증, 실제 업무 적용의 순서로 남겼습니다. 이 페이지는 그 과정을 직무 포트폴리오의 증거로 연결하는 공개 검증 surface입니다.',
  'about.c1.t':'문제 정의','about.c1.d':'반복 행정, 누락, 품질 편차처럼 실제 업무에서 아픈 지점을 먼저 고정하고 자동화 가능한 단위로 나눕니다.',
  'about.c2.t':'역할 분담','about.c2.d':'Claude, ChatGPT, 자동화 도구를 분석가, 구현자, 리뷰어, 문서화 담당처럼 나눠 한 모델에 의존하지 않습니다.',
  'about.c3.t':'검증 루프','about.c3.d':'출력물을 그대로 믿지 않고 샘플 데이터, 누락 케이스, 화면 동작, 운영 흐름을 확인하며 반복 수정합니다.',
  'about.c4.t':'업무 연결','about.c4.d':'데모로 끝내지 않고 실제 채용, 서명 수집, 화환 접수, 직무 분석 업무의 시간과 오류를 줄이는 방향으로 연결합니다.',
  'hero.badge':'면접용 자동화·효율화 증거 자료','hero.title':'영상과 코드로 보는 자동화 사례.','hero.lead':'자동화·효율화 구축 사례를 노트북 화면에서 바로 설명할 수 있도록 정리했습니다. 모든 데모는 더미 데이터 또는 마스킹된 흐름으로 구성했습니다.',
  'hero.cta1':'검증 사례 보기','hero.cta2':'직무 포트폴리오',
  'hero.s1.l':'용도','hero.s1.v':'1차 면접 지참 자료','hero.s2.l':'증거','hero.s2.v':'데모 영상·코드·성과','hero.s3.l':'범위','hero.s3.v':'자동화 사례 4개',
  'case.eye':'검증 사례','case.title':'직무 포트폴리오의 DX 사례를 4개 증거 블록으로 통합했습니다.','case.lead':'각 블록은 문제, AI 조율 과정, 데모 영상, 정량 성과를 한 자리에서 보여줍니다.',
  'case.problem':'문제','case.method':'AI 조율 과정','case.proof':'증명','case.result':'성과','case.portfolioCta':'직무 포트폴리오에서 보기','case.liveCta':'라이브 보기','case.repoCta':'코드 보기',
  'case.gift.badge':'HR · Automation','case.gift.portfolio':'직무 포트폴리오 dx1','case.gift.title':'경조화환 주문 시스템 자동화','case.gift.problem':'카톡·문자로 건별 접수하던 경조사 신청은 누락, 전달 지연, 회계 증빙 오류가 생기기 쉬웠습니다.','case.gift.method':'업무 흐름을 신청자·담당자·업체·회계로 분해하고, AI에게 로그인/폼/알림/시트 적재 로직을 역할별로 설계·검토하게 했습니다.','case.gift.proof':'재현 데모는 보안 로그인, 신청 입력, 자동 알림, 접수 데이터 적재 흐름을 보여줍니다.','case.gift.result':'휴먼에러 0건, 반복 행정 약 90% 절감.',
  'case.sign.badge':'HR · E-Signature','case.sign.portfolio':'직무 포트폴리오 dx2','case.sign.title':'전자 서명 수집 프로그램','case.sign.problem':'생산직 550명의 서약서 서명을 종이와 PC 중심으로 받으면 기간이 길고 미제출자 추적이 어렵습니다.','case.sign.method':'AI에게 모바일 입력 UX, Canvas 서명 저장, Google Sheets 적재, 미제출자 모니터링 흐름을 나눠 설계하게 하고 실제 현장 제약으로 검증했습니다.','case.sign.proof':'재현 데모는 휴대폰 서명 입력, 이미지 변환, 제출 데이터 확인 흐름을 보여줍니다.','case.sign.result':'550명 전원 수합, 약 2주 작업을 3일로 단축.',
  'case.keyword.badge':'HR · Talent Analytics','case.keyword.portfolio':'직무 포트폴리오 dx3','case.keyword.title':'직무 키워드 분석 에이전트','case.keyword.problem':'인터뷰와 설문 텍스트를 사람이 읽어 직무별 역량으로 정리하면 기준이 흔들리고 시간이 많이 걸립니다.','case.keyword.method':'AI를 직무 분석가 페르소나로 고정하고, 분류 기준·출력 포맷·검수 질문을 반복해 결과 편차를 줄였습니다.','case.keyword.proof':'재현 데모는 텍스트 입력에서 키워드 추출, 직무별 정리, 분석 결과 표준화까지의 흐름을 보여줍니다.','case.keyword.result':'정성 데이터의 직무별 역량 정량화, 외부 지원자 EVP 600건+ 분석으로 확장.',
  'case.recruit.badge':'HR · Recruiting','case.recruit.portfolio':'채용홍보 사례','case.recruit.title':'채용공고 자동 생성 도구','case.recruit.problem':'채용 정보를 매번 포스터와 홍보 문안으로 바꾸는 작업은 반복적이고, 브랜드 톤을 유지하기 어렵습니다.','case.recruit.method':'AI에게 채용 데이터 구조화, 포스터 문안 생성, 화면 구현, 결과 검수 역할을 나눠 맡기고 배포 가능한 공개 도구로 묶었습니다.','case.recruit.proof':'재현 데모는 채용 데이터 입력에서 브랜디드 채용 포스터 생성까지의 실제 동작을 보여줍니다.','case.recruit.result':'Google Sheets 또는 AI 생성 채용 데이터에서 포스터 이미지를 자동 생성하는 공개 배포 프로젝트.',
  'case.gift.note':'설계 포인트: 흩어진 카톡/문자 접수를 표준 폼과 자동 알림 흐름으로 바꾼 방식.','case.sign.note':'설계 포인트: PC 접근이 어려운 현장직 서명 수집을 모바일 입력, 해시, PDF 생성 흐름으로 바꾼 방식.','case.keyword.note':'설계 포인트: 정성 인터뷰·설문 텍스트를 직무별 역량 키워드로 안정적으로 분류한 방식.','case.recruit.note':'설계 포인트: 채용 정보를 포스터와 홍보 문구로 바꾸는 반복 작업을 생성 도구로 만든 방식.',
  'prog.eye':'확장 중','prog.title':'검증 대상 밖의 발전 아카이브.','prog.lead':'아래 항목은 현재 페이지의 핵심 검증 사례가 아니라, 이후 확장 중인 작업으로 분리해 둡니다.',
  'prog.1':'AI 리서치 결과를 저장하고, 출처와 주장의 관계를 정리하는 지식 관리 도구입니다.','prog.2':'AI 세션 사이의 맥락 손실을 줄이기 위한 메모리 도구입니다.','prog.3':'채용 데이터를 포스터와 콘텐츠로 자동 변환하는 도구입니다.','prog.4':'HR 뉴스를 자동으로 수집·정리해서 뉴스레터로 발행하는 자동화 도구입니다.','prog.5':'AI로 주식 차트를 분석하고 해석을 도와주는 보조 도구입니다.','prog.6':'지출 기록, 투자 추적, 세금 관리를 하나로 묶는 개인 재무 도구입니다.',
  'sources.eye':'원본·라이브 증거','sources.title':'각 사례의 원본 코드와 배포 링크.','sources.lead':'데모 영상에서 보이는 흐름을 직접 확인할 수 있는 공개 원본과 라이브 링크입니다.',
  'ct.eye':'연락','ct.title':'연락하기.','ct.lead':'직무 포트폴리오에서 DX 사례를 봤다면, 이 페이지에서 실제 동작 증거와 조율 과정을 확인할 수 있습니다.','ct.cta1':'직무 포트폴리오 보기','ct.cta.issue':'GitHub Issue','ct.cta2':'GitHub 프로필',
  'ft.brand':'바이브 코딩 포트폴리오','ft.copy':'Lucas Sung · HR DX 검증 포트폴리오'
},

en: {
  'nav.about':'Method','nav.demo':'Evidence','nav.projects':'Expanding','nav.process':'Process','nav.sources':'Sources','nav.portfolio':'Career Portfolio',
  'about.eye':'AI coordination method','about.title':'I verify with a role-based AI team, not an AI that simply writes code.','about.lead':'The point is not "made with AI." The point is which problem was assigned to which AI role, how the output was checked, and how it became workplace impact.',
  'about.intro1':'I am not from a developer role. That makes me split problems more explicitly and define both the AI responsibilities and the human verification criteria first.',
  'about.intro2':'Each case is documented as problem definition, AI role assignment, output verification, and real workplace application. This page connects that process to my career portfolio as public evidence.',
  'about.c1.t':'Problem framing','about.c1.d':'I first lock the real pain points, such as repetitive admin work, missing submissions, and quality variance, then split them into automatable units.',
  'about.c2.t':'Role assignment','about.c2.d':'Claude, ChatGPT, and automation tools are assigned as analyst, implementer, reviewer, and documenter instead of relying on one model.',
  'about.c3.t':'Verification loop','about.c3.d':'I do not trust output as-is. I check sample data, missing cases, screen behavior, and operating flows, then iterate.',
  'about.c4.t':'Workplace connection','about.c4.d':'The work does not stop at demos. It is connected to hiring, signature collection, flower order intake, and job analysis workflows that reduce time and errors.',
  'hero.badge':'Automation and efficiency evidence','hero.title':'Automation cases with demos and code.','hero.lead':'This page organizes automation and efficiency cases so they can be explained directly on a laptop screen. All demos use dummy data or masked flows.',
  'hero.cta1':'View evidence cases','hero.cta2':'Career Portfolio',
  'hero.s1.l':'Use','hero.s1.v':'First interview material','hero.s2.l':'Evidence','hero.s2.v':'Demo, code, result','hero.s3.l':'Scope','hero.s3.v':'4 automation cases',
  'case.eye':'Evidence cases','case.title':'Four evidence blocks verify the DX cases in the career portfolio.','case.lead':'Each block brings together the problem, AI coordination process, demo video, and measured result.',
  'case.problem':'Problem','case.method':'AI coordination','case.proof':'Proof','case.result':'Result','case.portfolioCta':'View in career portfolio','case.liveCta':'Open live site','case.repoCta':'View code',
  'case.gift.badge':'HR · Automation','case.gift.portfolio':'Career portfolio dx1','case.gift.title':'Condolence flower order automation','case.gift.problem':'Requests handled one by one through chat or text were easy to miss, delay, or misalign with accounting proof.','case.gift.method':'I split the workflow into requester, owner, vendor, and accounting roles, then had AI design and review login, form, notification, and sheet-logging logic.','case.gift.proof':'The demo shows secure login, request entry, automatic notification, and request data logging.','case.gift.result':'Zero human errors and about 90% less repetitive admin work.',
  'case.sign.badge':'HR · E-Signature','case.sign.portfolio':'Career portfolio dx2','case.sign.title':'E-signature collection program','case.sign.problem':'Collecting pledges from 550 production workers through paper or PC workflows took too long and made non-submitter tracking difficult.','case.sign.method':'I assigned AI to design mobile input UX, Canvas signature storage, Google Sheets logging, and non-submitter monitoring, then verified against field constraints.','case.sign.proof':'The demo shows mobile signature input, image conversion, and submitted-data review.','case.sign.result':'Collected all 550 signatures and reduced an about two-week task to three days.',
  'case.keyword.badge':'HR · Talent Analytics','case.keyword.portfolio':'Career portfolio dx3','case.keyword.title':'Job keyword analysis agent','case.keyword.problem':'Reading interview and survey text manually to organize role competencies is slow and creates inconsistent criteria.','case.keyword.method':'I fixed the AI as a job analyst persona and iterated classification rules, output format, and review questions to reduce variance.','case.keyword.proof':'The demo shows text input, keyword extraction, role-based grouping, and standardized analysis output.','case.keyword.result':'Converted qualitative data into role-specific competencies and expanded to 600+ external applicant EVP analyses.',
  'case.recruit.badge':'HR · Recruiting','case.recruit.portfolio':'Recruiting promotion case','case.recruit.title':'Recruit poster generator','case.recruit.problem':'Turning job data into posters and promotion copy every time is repetitive, and maintaining brand tone is hard.','case.recruit.method':'I split AI work into job-data structuring, poster copy, screen implementation, and output review, then bundled it into a deployable public tool.','case.recruit.proof':'The demo shows actual flow from job data input to branded recruit poster generation.','case.recruit.result':'A public deployed project that auto-generates poster images from Google Sheets or AI-generated job data.',
  'case.gift.note':'Design point: how scattered chat/text requests became a standardized form and notification flow.','case.sign.note':'Design point: how mobile input, hashing, and PDF generation solved field-worker signature collection.','case.keyword.note':'Design point: how qualitative interview and survey text became stable role-based keyword groups.','case.recruit.note':'Design point: how repetitive job-posting copy and poster work became a generation tool.',
  'prog.eye':'Expanding','prog.title':'Development archive outside the core evidence scope.','prog.lead':'These items are separated as later expansion work, not as the main evidence cases on this page.',
  'prog.1':'A knowledge management tool for saving AI research and organizing source-claim relationships.','prog.2':'Memory tooling to reduce context loss between AI sessions.','prog.3':'Automatically converting recruitment data into posters and content.','prog.4':'Automating HR news collection, curation, and newsletter publishing.','prog.5':'An AI-assisted stock chart analysis and interpretation tool.','prog.6':'Personal finance tool combining spending, investments, and tax management.',
  'sources.eye':'Source and live evidence','sources.title':'Source code and live links for each case.','sources.lead':'Public repositories and live URLs connected to the flows shown in the demo videos.',
  'ct.eye':'Contact','ct.title':'Get in touch.','ct.lead':'If you came from the career portfolio DX cases, this page lets you inspect the working evidence and coordination process.','ct.cta1':'View career portfolio','ct.cta.issue':'GitHub Issue','ct.cta2':'GitHub Profile',
  'ft.brand':'Vibe Coding Portfolio','ft.copy':'Lucas Sung · HR DX Evidence Portfolio'
},

zh: {
  'nav.about':'编排方式','nav.demo':'验证案例','nav.projects':'扩展中','nav.process':'流程','nav.sources':'源码链接','nav.portfolio':'职业作品集',
  'about.eye':'AI编排方式','about.title':'不是让AI代写代码，而是用分工明确的AI团队来验证。','about.lead':'重点不是“用AI做出来”，而是把什么问题交给什么AI角色、如何确认结果、如何连接到业务成果。',
  'about.intro1':'我不是开发岗位出身。因此我会更明确地拆分问题，先定义AI负责的角色和人需要验证的标准。',
  'about.intro2':'每个案例都按问题定义、AI角色分工、产出验证、实际业务应用记录。这个页面把这些过程连接为职业作品集的公开证据。',
  'about.c1.t':'问题定义','about.c1.d':'先固定重复行政、遗漏、质量偏差等真实痛点，再拆分成可自动化的单元。',
  'about.c2.t':'角色分工','about.c2.d':'把Claude、ChatGPT和自动化工具分成分析、实现、审查、文档等角色，而不是依赖单一模型。',
  'about.c3.t':'验证循环','about.c3.d':'不直接相信输出，而是检查样本数据、遗漏情况、页面动作和运营流程，并持续迭代。',
  'about.c4.t':'业务连接','about.c4.d':'不止于演示，而是连接招聘、签名收集、花篮申请、职务分析等实际业务，减少时间和错误。',
  'hero.badge':'自动化与效率化证据','hero.title':'用视频和代码查看自动化案例。','hero.lead':'这个页面整理自动化和效率化案例，方便在笔记本屏幕上直接说明。所有演示均使用虚拟数据或脱敏流程。',
  'hero.cta1':'查看验证案例','hero.cta2':'职业作品集',
  'hero.s1.l':'用途','hero.s1.v':'一面携带资料','hero.s2.l':'证据','hero.s2.v':'演示·代码·成果','hero.s3.l':'范围','hero.s3.v':'4个自动化案例',
  'case.eye':'验证案例','case.title':'用4个证据模块验证职业作品集中的DX案例。','case.lead':'每个模块集中展示问题、AI编排过程、演示视频和量化成果。',
  'case.problem':'问题','case.method':'AI编排过程','case.proof':'证明','case.result':'成果','case.portfolioCta':'在职业作品集中查看','case.liveCta':'查看线上版','case.repoCta':'查看代码',
  'case.gift.badge':'HR · 自动化','case.gift.portfolio':'职业作品集 dx1','case.gift.title':'吊唁花篮订购系统自动化','case.gift.problem':'通过聊天或短信逐件接收申请，容易遗漏、延迟，也容易与会计凭证不一致。','case.gift.method':'将流程拆成申请人、负责人、供应商、会计，并让AI分别设计和审查登录、表单、通知、表格记录逻辑。','case.gift.proof':'演示展示安全登录、申请输入、自动通知和接收数据记录流程。','case.gift.result':'人为错误0件，重复行政工作约减少90%。',
  'case.sign.badge':'HR · 电子签名','case.sign.portfolio':'职业作品集 dx2','case.sign.title':'电子签名收集程序','case.sign.problem':'用纸质或PC流程收集550名生产员工签名，周期长，也难以追踪未提交者。','case.sign.method':'让AI分别设计移动输入体验、Canvas签名保存、Google Sheets记录和未提交监控，并用现场限制验证。','case.sign.proof':'演示展示手机签名输入、图像转换和提交数据确认。','case.sign.result':'550名全部收集完成，约2周工作缩短到3天。',
  'case.keyword.badge':'HR · 人才分析','case.keyword.portfolio':'职业作品集 dx3','case.keyword.title':'职务关键词分析代理','case.keyword.problem':'人工阅读访谈和问卷文本来整理职务能力，耗时长，标准也容易不一致。','case.keyword.method':'将AI固定为职务分析师角色，反复调整分类标准、输出格式和检查问题，降低结果偏差。','case.keyword.proof':'演示展示文本输入、关键词提取、按职务整理和标准化分析输出。','case.keyword.result':'把定性数据量化为职务能力，并扩展到600+份外部应聘者EVP分析。',
  'case.recruit.badge':'HR · 招聘','case.recruit.portfolio':'招聘宣传案例','case.recruit.title':'招聘海报自动生成工具','case.recruit.problem':'每次把招聘信息转换成海报和宣传文案都很重复，也难以保持品牌语气一致。','case.recruit.method':'把AI工作拆成招聘数据结构化、海报文案、页面实现、结果检查，并打包为可部署的公开工具。','case.recruit.proof':'演示展示从招聘数据输入到品牌招聘海报生成的实际流程。','case.recruit.result':'可公开访问的部署项目，可从Google Sheets或AI生成的招聘数据自动生成海报图片。',
  'case.gift.note':'设计重点：把分散的聊天/短信申请改为标准表单和自动通知流程。','case.sign.note':'设计重点：用移动输入、哈希和PDF生成解决现场员工签名收集。','case.keyword.note':'设计重点：把定性访谈和问卷文本稳定分类为职务关键词。','case.recruit.note':'设计重点：把反复制作招聘文案和海报的工作改为生成工具。',
  'prog.eye':'扩展中','prog.title':'核心验证范围外的发展档案。','prog.lead':'这些项目不是本页面的核心验证案例，而是后续扩展工作。',
  'prog.1':'保存AI研究结果，整理来源与论点关系的知识管理工具。','prog.2':'减少AI会话间上下文丢失的记忆工具。','prog.3':'自动将招聘数据转化为海报和内容。','prog.4':'自动收集整理HR新闻并发布为通讯的自动化工具。','prog.5':'AI辅助股票图表分析和解读工具。','prog.6':'整合支出记录、投资追踪和税务管理的个人财务工具。',
  'sources.eye':'源码与线上证据','sources.title':'每个案例的源代码和部署链接。','sources.lead':'与演示视频中的流程相连接的公开仓库和线上地址。',
  'ct.eye':'联系','ct.title':'联系我们。','ct.lead':'如果你从职业作品集的DX案例来到这里，可以在本页查看实际运行证据和AI编排过程。','ct.cta1':'查看职业作品集','ct.cta.issue':'GitHub Issue','ct.cta2':'GitHub主页',
  'ft.brand':'Vibe Coding 作品集','ft.copy':'Lucas Sung · HR DX验证作品集'
},

ja: {
  'nav.about':'調整方式','nav.demo':'検証事例','nav.projects':'拡張中','nav.process':'プロセス','nav.sources':'原本リンク','nav.portfolio':'職務ポートフォリオ',
  'about.eye':'AI調整方式','about.title':'コードを代わりに書くAIではなく、役割を分けたAIチームで検証します。','about.lead':'重要なのは「AIで作った」ことではなく、どの問題をどのAIの役割に任せ、結果をどう確認し、業務成果につなげたかです。',
  'about.intro1':'私は開発職出身ではありません。だからこそ問題を明確に分解し、AIに任せる役割と人が検証する基準を先に定義します。',
  'about.intro2':'各事例は、問題定義、AI役割分担、成果物検証、実務適用の順に記録しています。このページはその過程を職務ポートフォリオの証拠としてつなげる公開検証ページです。',
  'about.c1.t':'問題定義','about.c1.d':'反復作業、漏れ、品質のばらつきなど実務上の痛点を先に固定し、自動化できる単位に分解します。',
  'about.c2.t':'役割分担','about.c2.d':'Claude、ChatGPT、自動化ツールを分析者、実装者、レビュアー、文書化担当のように分け、単一モデルに依存しません。',
  'about.c3.t':'検証ループ','about.c3.d':'出力をそのまま信じず、サンプルデータ、漏れケース、画面動作、運用フローを確認しながら反復修正します。',
  'about.c4.t':'業務接続','about.c4.d':'デモで終わらせず、採用、署名収集、花輪受付、職務分析の時間とエラーを減らす形につなげます。',
  'hero.badge':'自動化・効率化の証拠資料','hero.title':'動画とコードで見る自動化事例。','hero.lead':'自動化・効率化の構築事例をノートPC画面で直接説明できるように整理しました。すべてのデモはダミーデータまたはマスキング済みの流れで構成しています。',
  'hero.cta1':'検証事例を見る','hero.cta2':'職務ポートフォリオ',
  'hero.s1.l':'用途','hero.s1.v':'一次面接持参資料','hero.s2.l':'証拠','hero.s2.v':'デモ・コード・成果','hero.s3.l':'範囲','hero.s3.v':'自動化事例4件',
  'case.eye':'検証事例','case.title':'職務ポートフォリオのDX事例を4つの証拠ブロックで統合しました。','case.lead':'各ブロックは問題、AI調整過程、デモ動画、定量成果を一か所で示します。',
  'case.problem':'問題','case.method':'AI調整過程','case.proof':'証明','case.result':'成果','case.portfolioCta':'職務ポートフォリオで見る','case.liveCta':'ライブを見る','case.repoCta':'コードを見る',
  'case.gift.badge':'HR · 自動化','case.gift.portfolio':'職務ポートフォリオ dx1','case.gift.title':'慶弔花輪注文システム自動化','case.gift.problem':'チャットやSMSで個別に受け付ける慶弔申請は、漏れ、遅延、会計証憑の不一致が起きやすい状態でした。','case.gift.method':'申請者、担当者、業者、会計にフローを分解し、AIにログイン、フォーム、通知、シート記録ロジックを役割別に設計・レビューさせました。','case.gift.proof':'デモでは安全ログイン、申請入力、自動通知、受付データ記録の流れを示します。','case.gift.result':'ヒューマンエラー0件、反復事務を約90%削減。',
  'case.sign.badge':'HR · 電子署名','case.sign.portfolio':'職務ポートフォリオ dx2','case.sign.title':'電子署名収集プログラム','case.sign.problem':'生産職550名の署名を紙やPC中心で集めると期間が長く、未提出者の追跡も困難です。','case.sign.method':'AIにモバイル入力UX、Canvas署名保存、Google Sheets記録、未提出者モニタリングを分けて設計させ、現場制約で検証しました。','case.sign.proof':'デモではスマホ署名入力、画像変換、提出データ確認の流れを示します。','case.sign.result':'550名全員分を収集し、約2週間の作業を3日に短縮。',
  'case.keyword.badge':'HR · タレント分析','case.keyword.portfolio':'職務ポートフォリオ dx3','case.keyword.title':'職務キーワード分析エージェント','case.keyword.problem':'インタビューやアンケートテキストを人が読んで職務別能力に整理すると、基準がぶれやすく時間もかかります。','case.keyword.method':'AIを職務分析者ペルソナに固定し、分類基準、出力形式、検査質問を反復して結果のばらつきを減らしました。','case.keyword.proof':'デモではテキスト入力、キーワード抽出、職務別整理、標準化された分析出力を示します。','case.keyword.result':'定性データを職務別能力に定量化し、外部応募者EVP分析600件以上へ拡張。',
  'case.recruit.badge':'HR · 採用','case.recruit.portfolio':'採用広報事例','case.recruit.title':'採用ポスター自動生成ツール','case.recruit.problem':'採用情報を毎回ポスターや広報文に変換する作業は反復的で、ブランドトーンの維持も難しいです。','case.recruit.method':'AIの作業を採用データ構造化、ポスター文案、画面実装、結果検査に分け、公開可能なツールとしてまとめました。','case.recruit.proof':'デモでは採用データ入力からブランド採用ポスター生成までの実際の流れを示します。','case.recruit.result':'Google SheetsまたはAI生成の採用データからポスター画像を自動生成する公開デプロイ済みプロジェクト。',
  'case.gift.note':'設計ポイント：分散したチャット・SMS受付を標準フォームと自動通知の流れに変えた方法。','case.sign.note':'設計ポイント：PC利用が難しい現場職の署名収集をモバイル入力、ハッシュ、PDF生成で解決した方法。','case.keyword.note':'設計ポイント：定性インタビューとアンケート文を職務別キーワードに安定分類した方法。','case.recruit.note':'設計ポイント：採用情報をポスターと広報文にする反復作業を生成ツールにした方法。',
  'prog.eye':'拡張中','prog.title':'核心検証範囲外の発展アーカイブ。','prog.lead':'以下は現在ページの核心検証事例ではなく、今後拡張中の作業として分離しています。',
  'prog.1':'AIリサーチ結果を保存し、出典と主張の関係を整理するナレッジ管理ツールです。','prog.2':'AIセッション間のコンテキスト損失を減らすメモリツールです。','prog.3':'採用データをポスターやコンテンツに自動変換するツールです。','prog.4':'HRニュースを自動収集・整理してニュースレターとして発行する自動化ツールです。','prog.5':'AIで株式チャートを分析し解釈を支援する補助ツールです。','prog.6':'支出記録、投資追跡、税務管理を統合する個人ファイナンスツールです。',
  'sources.eye':'原本・ライブ証拠','sources.title':'各事例のソースコードと公開リンク。','sources.lead':'デモ動画で見える流れを確認できる公開リポジトリとライブURLです。',
  'ct.eye':'連絡','ct.title':'お問い合わせ。','ct.lead':'職務ポートフォリオのDX事例から来た場合、このページで実際の動作証拠とAI調整過程を確認できます。','ct.cta1':'職務ポートフォリオを見る','ct.cta.issue':'GitHub Issue','ct.cta2':'GitHubプロフィール',
  'ft.brand':'Vibe Coding ポートフォリオ','ft.copy':'Lucas Sung · HR DX検証ポートフォリオ'
}
};

function setLang(lang) {
  if (!I18N[lang]) return;
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
