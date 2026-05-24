/* ══════════════════════════════════════════
   Admin Pages
   Login · Dashboard · Projects · Edit · Inquiries
   ══════════════════════════════════════════ */

/* ─── Mock Data ─── */
const MOCK_PROJECTS = [
  { id: 1, name: 'hr-documents', title: 'HR 온보딩 자동화 허브', status: 'live', category: '워크플로우', updated: '2026-05-22', views: 3241 },
  { id: 2, name: 'nerdspecs', title: '프로젝트 설명서 자동 생성', status: 'live', category: '도구', updated: '2026-05-20', views: 2189 },
  { id: 3, name: 'hermes-ops', title: 'AI 작업 대시보드', status: 'live', category: '대시보드', updated: '2026-05-18', views: 4512 },
  { id: 4, name: 'Video Pipeline', title: '영상 지식 변환 파이프라인', status: 'draft', category: '파이프라인', updated: '2026-05-15', views: 0 },
  { id: 5, name: 'HTMLvault', title: '지식 관리 도구', status: 'draft', category: '도구', updated: '2026-05-12', views: 0 },
  { id: 6, name: 'mnemo-hook', title: '메모리 도구', status: 'draft', category: '도구', updated: '2026-05-10', views: 0 },
  { id: 7, name: 'ottogi-recruit', title: '채용 콘텐츠 자동화', status: 'draft', category: '자동화', updated: '2026-05-08', views: 0 },
  { id: 8, name: 'chartmind-ai', title: 'AI 차트 분석 보조', status: 'archived', category: '분석', updated: '2026-04-20', views: 876 },
];

const MOCK_INQUIRIES = [
  { id: 1, name: '김민수', email: 'minsu@example.com', subject: '협업 제안 - AI 워크플로우 구축', date: '2026-05-23', status: 'new' },
  { id: 2, name: 'John Smith', email: 'john@company.io', subject: 'Demo request for hr-documents', date: '2026-05-22', status: 'new' },
  { id: 3, name: '이지현', email: 'jihyun@startup.kr', subject: 'nerdspecs 프로젝트 관련 문의', date: '2026-05-20', status: 'replied' },
  { id: 4, name: '田中太郎', email: 'tanaka@corp.jp', subject: 'プロジェクト相談の件', date: '2026-05-18', status: 'replied' },
  { id: 5, name: '박서연', email: 'seoyeon@dev.com', subject: 'hermes-ops 기술 스택 질문', date: '2026-05-15', status: 'closed' },
  { id: 6, name: 'Maria Garcia', email: 'maria@agency.com', subject: 'Partnership inquiry', date: '2026-05-12', status: 'closed' },
];

/* ─── Login Page ─── */
const LoginPage = ({ onLogin }) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: theme.bg,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
    }}>
      <div style={{ width: 380, padding: 36, background: theme.card, border: '1px solid rgba(255,255,255,0.08)', borderRadius: theme.borderRadius + 4 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: theme.accentBg, border: `1px solid ${theme.accentBorder}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: theme.accent, marginBottom: 16 }}>
            <AdminIcon name="dashboard" size={22} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: '#f0f0f3', margin: '0 0 6px', letterSpacing: '-0.3px' }}>Admin 로그인</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Vibe Coding Portfolio 관리자</p>
        </div>
        <AdminInput label="이메일" placeholder="admin@example.com" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <AdminInput label="비밀번호" placeholder="••••••••" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, fontSize: 12 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            <input type="checkbox" style={{ accentColor: theme.accent }} /> 로그인 유지
          </label>
          <a href="#" style={{ color: theme.accent, textDecoration: 'none' }}>비밀번호 찾기</a>
        </div>
        <AdminBtn variant="primary" size="lg" onClick={onLogin} style={{ width: '100%' }}>로그인</AdminBtn>
      </div>
    </div>
  );
};

/* ─── Dashboard Page ─── */
const DashboardPage = ({ onNavigate }) => {
  const theme = useTheme();
  const liveCount = MOCK_PROJECTS.filter(p => p.status === 'live').length;
  const newInquiries = MOCK_INQUIRIES.filter(i => i.status === 'new').length;

  const miniChartStyle = {
    height: 180, background: theme.card, border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: theme.borderRadius, padding: 20, position: 'relative', overflow: 'hidden',
  };
  const barData = [35, 52, 48, 72, 58, 85, 92, 78, 95, 68, 110, 105];
  const months = ['6월','7월','8월','9월','10월','11월','12월','1월','2월','3월','4월','5월'];
  const maxBar = Math.max(...barData);

  return (
    <div>
      <TopBar title="대시보드" subtitle="포트폴리오 운영 현황을 한눈에 확인하세요." />
      <div style={{ display: 'flex', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
        <StatsCard label="총 방문자" value="12,847" trend="+23% 이번 달" trendUp icon="eye" />
        <StatsCard label="활성 프로젝트" value={liveCount} icon="folder" />
        <StatsCard label="신규 문의" value={newInquiries} icon="mail" />
        <StatsCard label="페이지뷰" value="45,231" trend="+18% 이번 달" trendUp icon="chart" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 24 }}>
        <div style={miniChartStyle}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#e0e0e5', marginBottom: 4 }}>월별 방문자 추이</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>최근 12개월</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 90 }}>
            {barData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', height: (v / maxBar) * 80, background: i === barData.length - 1 ? theme.accent : theme.accentBg, borderRadius: 3, transition: 'height 0.3s' }}></div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...miniChartStyle, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#e0e0e5', marginBottom: 4 }}>프로젝트 현황</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>상태별 분포</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            {[{ label: 'Live', count: 3, color: theme.success }, { label: 'Draft', count: 4, color: theme.warning }, { label: 'Archived', count: 1, color: 'rgba(255,255,255,0.3)' }].map(s => (
              <div key={s.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</span><span style={{ color: s.color, fontWeight: 500 }}>{s.count}</span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                  <div style={{ height: '100%', width: `${(s.count / 8) * 100}%`, background: s.color, borderRadius: 2, transition: 'width 0.4s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#e0e0e5' }}>최근 프로젝트</span>
            <AdminBtn variant="ghost" size="sm" onClick={() => onNavigate('projects')}>전체보기</AdminBtn>
          </div>
          {MOCK_PROJECTS.slice(0, 4).map(p => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#e0e0e5' }}>{p.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{p.category}</div>
              </div>
              <StatusBadge status={p.status} />
            </div>
          ))}
        </div>

        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#e0e0e5' }}>최근 문의</span>
            <AdminBtn variant="ghost" size="sm" onClick={() => onNavigate('inquiries')}>전체보기</AdminBtn>
          </div>
          {MOCK_INQUIRIES.slice(0, 4).map(q => (
            <div key={q.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#e0e0e5' }}>{q.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{q.subject}</div>
              </div>
              <StatusBadge status={q.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Projects List Page ─── */
const ProjectsPage = ({ onNavigate }) => {
  const theme = useTheme();
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const filtered = MOCK_PROJECTS.filter(p => {
    if (filter !== 'all' && p.status !== filter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.title.includes(search)) return false;
    return true;
  });

  const columns = [
    { key: 'name', label: '프로젝트', render: (v, row) => (
      <div>
        <div style={{ fontWeight: 500, color: '#f0f0f3' }}>{v}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{row.title}</div>
      </div>
    )},
    { key: 'status', label: '상태', render: v => <StatusBadge status={v} /> },
    { key: 'category', label: '카테고리', render: v => <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{v}</span> },
    { key: 'views', label: '조회수', render: v => <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{v.toLocaleString()}</span> },
    { key: 'updated', label: '수정일', render: v => <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{v}</span> },
    { key: 'actions', label: '', render: (_, row) => (
      <div style={{ display: 'flex', gap: 4 }}>
        <AdminBtn variant="ghost" size="sm" icon="edit" onClick={(e) => { e.stopPropagation(); onNavigate('project-edit'); }} />
        <AdminBtn variant="ghost" size="sm" icon="trash" style={{ color: 'rgba(255,255,255,0.3)' }} onClick={e => e.stopPropagation()} />
      </div>
    )},
  ];

  const filterBtns = [
    { id: 'all', label: '전체' }, { id: 'live', label: 'Live' },
    { id: 'draft', label: 'Draft' }, { id: 'archived', label: 'Archived' },
  ];

  return (
    <div>
      <TopBar title="프로젝트 관리" subtitle={`총 ${MOCK_PROJECTS.length}개의 프로젝트`}>
        <AdminBtn variant="primary" size="md" icon="plus" onClick={() => onNavigate('project-edit')}>새 프로젝트</AdminBtn>
      </TopBar>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 4, padding: 3, background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>
          {filterBtns.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              padding: '6px 14px', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 450, fontFamily: 'inherit', transition: 'all 0.15s',
              background: filter === f.id ? theme.accent : 'transparent', color: filter === f.id ? '#fff' : 'rgba(255,255,255,0.45)',
            }}>{f.label}</button>
          ))}
        </div>
        <SearchInput placeholder="프로젝트 검색..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <AdminTable columns={columns} data={filtered} onRowClick={() => onNavigate('project-edit')} />
    </div>
  );
};

/* ─── Project Edit Page ─── */
const ProjectEditPage = ({ onNavigate }) => {
  const theme = useTheme();
  const [lang, setLang] = React.useState('ko');
  const [status, setStatus] = React.useState('live');

  const project = MOCK_PROJECTS[0]; // editing hr-documents

  const i18nData = {
    ko: { title: 'HR 온보딩 자동화 허브', desc: 'HR 온보딩에 필요한 문서 작성, 전자서명, 알림까지 하나의 워크플로우로 자동화한 프로젝트입니다.', bullets: 'Google Workspace와 Slack을 연결한 HR 문서 자동화\n실제 운영 문제를 AI로 해결한 대표 사례' },
    en: { title: 'HR Onboarding Automation Hub', desc: 'A project that automates document creation, e-signatures, and notifications for HR onboarding in a single workflow.', bullets: 'HR document automation connecting Google Workspace and Slack\nA flagship example of solving real operational problems with AI' },
    zh: { title: 'HR 入职自动化中心', desc: '将HR入职所需的文档编写、电子签名、通知整合为一个工作流程的自动化项目。', bullets: '连接 Google Workspace 和 Slack 的 HR 文档自动化\n用 AI 解决实际运营问题的代表案例' },
    ja: { title: 'HR オンボーディング自動化ハブ', desc: 'HRオンボーディングに必要な文書作成、電子署名、通知まで一つのワークフローで自動化したプロジェクトです。', bullets: 'Google WorkspaceとSlackを連携したHR文書自動化\n実際の運営問題をAIで解決した代表事例' },
  };

  const d = i18nData[lang];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <button onClick={() => onNavigate('projects')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <AdminIcon name="arrowLeft" size={20} />
        </button>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 600, color: '#f0f0f3', letterSpacing: '-0.5px', margin: 0 }}>프로젝트 편집</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '2px 0 0' }}>{project.name}</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <AdminBtn variant="secondary" size="md" onClick={() => onNavigate('projects')}>취소</AdminBtn>
          <AdminBtn variant="primary" size="md" icon="check">저장</AdminBtn>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
        {/* Main */}
        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>콘텐츠 (다국어)</div>
          <LanguageTabs activeLang={lang} onLangChange={setLang} />
          <AdminInput label={`프로젝트명 (${lang.toUpperCase()})`} value={d.title} onChange={() => {}} />
          <AdminTextarea label={`설명 (${lang.toUpperCase()})`} value={d.desc} onChange={() => {}} rows={4} />
          <AdminTextarea label={`주요 특징 (${lang.toUpperCase()})`} value={d.bullets} onChange={() => {}} rows={3} />

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '24px 0', paddingTop: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>미디어</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <MediaUploader label="대표 이미지" accept="image/*" />
              <MediaUploader label="데모 영상" accept="video/*" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>설정</div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>상태</label>
              <div style={{ display: 'flex', gap: 2, padding: 3, background: 'rgba(255,255,255,0.04)', borderRadius: 8 }}>
                {['live', 'draft', 'archived'].map(s => (
                  <button key={s} onClick={() => setStatus(s)} style={{
                    flex: 1, padding: '7px 0', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 450, fontFamily: 'inherit', transition: 'all 0.15s', textTransform: 'capitalize',
                    background: status === s ? theme.accent : 'transparent', color: status === s ? '#fff' : 'rgba(255,255,255,0.45)',
                  }}>{s}</button>
                ))}
              </div>
            </div>
            <AdminSelect label="카테고리" value="workflow" onChange={() => {}} options={[
              { value: 'workflow', label: '워크플로우' }, { value: 'tool', label: '도구' },
              { value: 'dashboard', label: '대시보드' }, { value: 'pipeline', label: '파이프라인' },
              { value: 'automation', label: '자동화' }, { value: 'analysis', label: '분석' },
            ]} />
          </div>

          <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>링크</div>
            <AdminInput label="사이트 URL" placeholder="https://" value="https://hr-documents.vercel.app" onChange={() => {}} />
            <AdminInput label="Repository URL" placeholder="https://github.com/..." value="https://github.com/lucasung-debug/hr-documents" onChange={() => {}} />
          </div>

          <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>메타</div>
            <AdminInput label="태그" placeholder="쉼표로 구분" value="HR, 자동화, Google Workspace, Slack" onChange={() => {}} />
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
              마지막 수정: {project.updated} · 조회: {project.views.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Inquiries Page ─── */
const InquiriesPage = () => {
  const theme = useTheme();
  const [filter, setFilter] = React.useState('all');
  const [expanded, setExpanded] = React.useState(null);

  const filtered = filter === 'all' ? MOCK_INQUIRIES : MOCK_INQUIRIES.filter(i => i.status === filter);

  const filterBtns = [
    { id: 'all', label: '전체', count: MOCK_INQUIRIES.length },
    { id: 'new', label: '신규', count: MOCK_INQUIRIES.filter(i => i.status === 'new').length },
    { id: 'replied', label: '답변완료', count: MOCK_INQUIRIES.filter(i => i.status === 'replied').length },
    { id: 'closed', label: '종료', count: MOCK_INQUIRIES.filter(i => i.status === 'closed').length },
  ];

  const columns = [
    { key: 'name', label: '이름', render: v => <span style={{ fontWeight: 500, color: '#f0f0f3' }}>{v}</span> },
    { key: 'email', label: '이메일', render: v => <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: "'JetBrains Mono', monospace" }}>{v}</span> },
    { key: 'subject', label: '제목', render: v => <span style={{ fontSize: 13, color: '#d0d0d5', maxWidth: 260, display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</span> },
    { key: 'date', label: '날짜', render: v => <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{v}</span> },
    { key: 'status', label: '상태', render: v => <StatusBadge status={v} /> },
  ];

  return (
    <div>
      <TopBar title="문의 관리" subtitle={`총 ${MOCK_INQUIRIES.length}건의 문의`} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 4, padding: 3, background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>
          {filterBtns.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              padding: '6px 12px', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 450, fontFamily: 'inherit', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 5,
              background: filter === f.id ? theme.accent : 'transparent', color: filter === f.id ? '#fff' : 'rgba(255,255,255,0.45)',
            }}>
              {f.label}
              <span style={{ fontSize: 10, opacity: 0.7, fontFamily: "'JetBrains Mono', monospace" }}>{f.count}</span>
            </button>
          ))}
        </div>
      </div>
      <AdminTable columns={columns} data={filtered} onRowClick={(row) => setExpanded(expanded === row.id ? null : row.id)} />

      {expanded && (() => {
        const q = MOCK_INQUIRIES.find(i => i.id === expanded);
        if (!q) return null;
        return (
          <div style={{ marginTop: 16, background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24, animation: 'fadeIn 0.2s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: '#f0f0f3', margin: '0 0 4px' }}>{q.subject}</h3>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{q.name} · {q.email} · {q.date}</p>
              </div>
              <StatusBadge status={q.status} />
            </div>
            <div style={{ padding: 16, background: 'rgba(255,255,255,0.02)', borderRadius: 8, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
              안녕하세요. 포트폴리오를 보고 연락드립니다. {q.subject}에 대해 자세한 논의를 하고 싶습니다. 편하신 시간에 회신 부탁드립니다.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <AdminBtn variant="primary" size="sm" icon="mail">답변하기</AdminBtn>
              <AdminBtn variant="secondary" size="sm">종료</AdminBtn>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

/* ─── Content (i18n) Page ─── */
const ContentPage = () => {
  const theme = useTheme();
  const [lang, setLang] = React.useState('ko');
  const [section, setSection] = React.useState('hero');

  const sections = [
    { id: 'hero', label: '히어로' }, { id: 'demo', label: '데모' },
    { id: 'process', label: '과정' }, { id: 'projects', label: '프로젝트' },
    { id: 'faq', label: 'FAQ' }, { id: 'contact', label: '연락' },
  ];

  return (
    <div>
      <TopBar title="콘텐츠 관리 (i18n)" subtitle="포트폴리오 텍스트를 다국어로 관리합니다.">
        <AdminBtn variant="primary" size="md" icon="check">전체 저장</AdminBtn>
      </TopBar>
      <LanguageTabs activeLang={lang} onLangChange={setLang} />
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              padding: '9px 14px', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.15s',
              background: section === s.id ? theme.accentBg : 'transparent', color: section === s.id ? theme.accent : 'rgba(255,255,255,0.5)', fontWeight: section === s.id ? 500 : 400,
            }}>{s.label}</button>
          ))}
        </div>
        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 20 }}>
            {sections.find(s => s.id === section)?.label} · {lang.toUpperCase()}
          </div>
          {section === 'hero' && <>
            <AdminInput label="배지 텍스트" value={lang === 'ko' ? '비개발자 × AI 오케스트레이션' : 'Non-developer × AI Orchestration'} onChange={() => {}} />
            <AdminInput label="타이틀" value={lang === 'ko' ? '여러 AI를 조합해서, 실제 동작하는 서비스를 만듭니다.' : 'I combine multiple AIs to build real, working products.'} onChange={() => {}} />
            <AdminTextarea label="서브타이틀" value={lang === 'ko' ? '개발자가 아닙니다. 하지만 여러 AI 에이전트를 오케스트레이션하면 기획부터 구현, 배포까지 가능합니다.' : "I'm not a developer. But by orchestrating multiple AI agents, I can plan, build, and deploy from start to finish."} onChange={() => {}} rows={3} />
            <AdminInput label="CTA 1" value={lang === 'ko' ? '프로젝트 보기' : 'View Projects'} onChange={() => {}} />
            <AdminInput label="CTA 2" value={lang === 'ko' ? 'GitHub 프로필' : 'GitHub Profile'} onChange={() => {}} />
          </>}
          {section !== 'hero' && (
            <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
              <AdminIcon name="globe" size={32} /><p style={{ marginTop: 12 }}>"{sections.find(s => s.id === section)?.label}" 섹션의 {lang.toUpperCase()} 텍스트를 편집합니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Analytics Page ─── */
const AnalyticsPage = () => {
  const theme = useTheme();
  return (
    <div>
      <TopBar title="분석" subtitle="방문자 통계와 트래픽 데이터를 확인합니다." />
      <div style={{ display: 'flex', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
        <StatsCard label="오늘 방문자" value="342" trend="+12% 어제 대비" trendUp icon="eye" />
        <StatsCard label="평균 체류 시간" value="2:34" icon="chart" />
        <StatsCard label="이탈률" value="38%" trend="-5% 지난주" trendUp icon="chart" />
      </div>
      <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 8 }}>트래픽 소스</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>최근 30일 기준</div>
        {[{ label: 'GitHub', pct: 42, color: theme.accent }, { label: 'Direct', pct: 28, color: '#22c55e' }, { label: 'Search', pct: 18, color: '#f59e0b' }, { label: 'Social', pct: 12, color: '#8b5cf6' }].map(s => (
          <div key={s.label} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{s.pct}%</span>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 3 }}>
              <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: 3, transition: 'width 0.5s' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Settings Page ─── */
const SettingsPage = () => {
  const theme = useTheme();
  return (
    <div>
      <TopBar title="설정" subtitle="사이트 기본 설정을 관리합니다.">
        <AdminBtn variant="primary" size="md" icon="check">저장</AdminBtn>
      </TopBar>
      <div style={{ maxWidth: 640 }}>
        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24, marginBottom: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>기본 정보</div>
          <AdminInput label="사이트 제목" value="Vibe Coding Portfolio" onChange={() => {}} />
          <AdminInput label="사이트 URL" value="https://lucasung-debug.github.io/hermes-ops-dashboard-page/" onChange={() => {}} />
          <AdminTextarea label="사이트 설명" value="비개발자 Lucas Sung이 여러 AI를 오케스트레이션해서 만든 실제 프로덕트 포트폴리오." onChange={() => {}} rows={2} />
        </div>
        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24, marginBottom: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>SEO</div>
          <AdminInput label="OG Title" value="Vibe Coding Portfolio | AI 오케스트레이션 by Lucas Sung" onChange={() => {}} />
          <AdminTextarea label="OG Description" value="비개발자가 여러 AI를 오케스트레이션해서 만든 실제 프로덕트 포트폴리오." onChange={() => {}} rows={2} />
          <AdminInput label="Canonical URL" value="https://lucasung-debug.github.io/hermes-ops-dashboard-page/" onChange={() => {}} />
        </div>
        <div style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, padding: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#e0e0e5', marginBottom: 16 }}>관리자 계정</div>
          <AdminInput label="이메일" value="admin@vibecoding.dev" onChange={() => {}} />
          <AdminInput label="비밀번호 변경" placeholder="새 비밀번호 입력" type="password" onChange={() => {}} />
          <AdminBtn variant="danger" size="sm" style={{ marginTop: 8 }}>비밀번호 변경</AdminBtn>
        </div>
      </div>
    </div>
  );
};

/* ─── Media Page ─── */
const MediaPage = () => {
  const theme = useTheme();
  const placeholders = [
    { name: 'hr-documents-thumb.png', size: '245 KB', type: 'image', date: '2026-05-22' },
    { name: 'nerdspecs-demo.mp4', size: '12.3 MB', type: 'video', date: '2026-05-20' },
    { name: 'hermes-screenshot.png', size: '380 KB', type: 'image', date: '2026-05-18' },
    { name: 'og-image.png', size: '156 KB', type: 'image', date: '2026-05-15' },
    { name: 'pipeline-demo.mp4', size: '8.7 MB', type: 'video', date: '2026-05-12' },
    { name: 'favicon.svg', size: '2 KB', type: 'image', date: '2026-04-20' },
  ];

  return (
    <div>
      <TopBar title="미디어 관리" subtitle="이미지와 영상 파일을 관리합니다.">
        <AdminBtn variant="primary" size="md" icon="upload">업로드</AdminBtn>
      </TopBar>
      <MediaUploader label="" accept="image/*" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginTop: 24 }}>
        {placeholders.map((f, i) => (
          <div key={i} style={{ background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, overflow: 'hidden', transition: 'border-color 0.15s', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '16/10', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.15)' }}>
              <AdminIcon name={f.type === 'video' ? 'eye' : 'image'} size={28} />
            </div>
            <div style={{ padding: '10px 12px' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#e0e0e5', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{f.size} · {f.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Export ─── */
Object.assign(window, {
  LoginPage, DashboardPage, ProjectsPage, ProjectEditPage,
  InquiriesPage, ContentPage, AnalyticsPage, SettingsPage, MediaPage,
});
