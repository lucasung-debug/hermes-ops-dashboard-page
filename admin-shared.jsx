/* ══════════════════════════════════════════
   Admin Shared Components
   Icons · Sidebar · TopBar · UI Primitives
   ══════════════════════════════════════════ */

/* ─── Icons ─── */
const AdminIcon = ({ name, size = 18 }) => {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    dashboard: <svg {...p}><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="3" y="13" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="8" rx="1.5"/></svg>,
    folder: <svg {...p}><path d="M4 6a1 1 0 011-1h4l2 2h6a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V6z"/></svg>,
    globe: <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3.5 12h17"/><path d="M12 3c-2.5 3.5-2.5 13.5 0 18"/><path d="M12 3c2.5 3.5 2.5 13.5 0 18"/></svg>,
    image: <svg {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="2"/><path d="M21 15l-5-5L5 20"/></svg>,
    mail: <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>,
    chart: <svg {...p}><path d="M3 20h18"/><path d="M7 20V10"/><path d="M12 20V4"/><path d="M17 20V14"/></svg>,
    settings: <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
    logout: <svg {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    search: <svg {...p}><circle cx="10" cy="10" r="7"/><path d="M17 17l4 4"/></svg>,
    plus: <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    edit: <svg {...p}><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>,
    trash: <svg {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V3h6v3"/></svg>,
    eye: <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    upload: <svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    chevronDown: <svg {...p}><polyline points="6 9 12 15 18 9"/></svg>,
    bell: <svg {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    user: <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 00-16 0"/></svg>,
    arrowLeft: <svg {...p}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
    check: <svg {...p}><polyline points="20 6 9 17 4 12"/></svg>,
    x: <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    filter: <svg {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  };
  return icons[name] || null;
};

/* ─── Theme Context ─── */
const ThemeCtx = React.createContext({});
const useTheme = () => React.useContext(ThemeCtx);

const getThemeColors = (variant, accentChoice) => {
  const accents = { blue: '#3b82f6', violet: '#8b5cf6', cyan: '#06b6d4' };
  const accent = accents[accentChoice] || accents.blue;
  const base = {
    accent, accentBg: accent + '18', accentBorder: accent + '30',
    success: '#22c55e', warning: '#f59e0b', error: '#ef4444',
  };
  if (variant === 'compact') return { ...base, bg: '#090a10', surface: '#0f1018', card: '#161821', cardHover: '#1c1e2a', sidebarW: 72, borderRadius: 8 };
  if (variant === 'modern') return { ...base, bg: '#0b0c14', surface: '#11121c', card: '#181a26', cardHover: '#1e2030', sidebarW: 260, borderRadius: 16 };
  return { ...base, bg: '#0a0b11', surface: '#12131b', card: '#1a1c26', cardHover: '#1f2130', sidebarW: 240, borderRadius: 12 };
};

/* ─── Sidebar ─── */
const sidebarItems = [
  { id: 'dashboard', icon: 'dashboard', label: '대시보드' },
  { id: 'projects', icon: 'folder', label: '프로젝트' },
  { id: 'content', icon: 'globe', label: '콘텐츠 (i18n)' },
  { id: 'media', icon: 'image', label: '미디어' },
  { id: 'inquiries', icon: 'mail', label: '문의 관리' },
  { id: 'analytics', icon: 'chart', label: '분석' },
];

const Sidebar = ({ currentPage, onNavigate, variant }) => {
  const theme = useTheme();
  const isCompact = variant === 'compact';
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const sidebarStyle = {
    width: theme.sidebarW, minHeight: '100vh', background: theme.surface,
    borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex',
    flexDirection: 'column', padding: isCompact ? '20px 12px' : '20px 16px',
    transition: 'width 0.25s ease', position: 'fixed', top: 0, left: 0, zIndex: 50,
  };
  const brandStyle = {
    padding: isCompact ? '8px 0 28px' : '8px 8px 28px', fontSize: isCompact ? 11 : 14,
    fontWeight: 600, color: '#f0f0f3', letterSpacing: '-0.3px',
    textAlign: isCompact ? 'center' : 'left', whiteSpace: 'nowrap', overflow: 'hidden',
  };
  const navStyle = { display: 'flex', flexDirection: 'column', gap: 4, flex: 1 };

  const getItemStyle = (id) => {
    const active = currentPage === id || (id === 'projects' && currentPage === 'project-edit');
    const hovered = hoveredItem === id;
    return {
      display: 'flex', alignItems: 'center', gap: 12, padding: isCompact ? '10px 0' : '10px 12px',
      justifyContent: isCompact ? 'center' : 'flex-start',
      borderRadius: variant === 'modern' ? 10 : 8, cursor: 'pointer', transition: 'all 0.15s',
      background: active ? theme.accentBg : hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
      color: active ? theme.accent : hovered ? '#e0e0e5' : 'rgba(255,255,255,0.5)',
      borderLeft: !isCompact && variant === 'classic' && active ? `2px solid ${theme.accent}` : !isCompact && variant === 'classic' ? '2px solid transparent' : 'none',
      fontSize: 13, fontWeight: active ? 500 : 400, border: 'none', fontFamily: 'inherit',
      boxShadow: variant === 'modern' && active ? `0 0 20px ${theme.accent}15` : 'none',
    };
  };

  return (
    <aside style={sidebarStyle}>
      <div style={brandStyle}>{isCompact ? 'VP' : 'Vibe Portfolio'}</div>
      <nav style={navStyle}>
        {sidebarItems.map(item => (
          <button key={item.id} style={getItemStyle(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}
            onClick={() => onNavigate(item.id)} title={isCompact ? item.label : undefined}>
            <AdminIcon name={item.icon} size={isCompact ? 20 : 18} />
            {!isCompact && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <button style={getItemStyle('settings')} onMouseEnter={() => setHoveredItem('settings')} onMouseLeave={() => setHoveredItem(null)} onClick={() => onNavigate('settings')}>
          <AdminIcon name="settings" size={isCompact ? 20 : 18} />{!isCompact && <span>설정</span>}
        </button>
        <button style={{ ...getItemStyle('logout'), color: hoveredItem === 'logout' ? theme.error : 'rgba(255,255,255,0.35)' }}
          onMouseEnter={() => setHoveredItem('logout')} onMouseLeave={() => setHoveredItem(null)}
          onClick={() => onNavigate('login')}>
          <AdminIcon name="logout" size={isCompact ? 20 : 18} />{!isCompact && <span>로그아웃</span>}
        </button>
      </div>
    </aside>
  );
};

/* ─── TopBar ─── */
const TopBar = ({ title, subtitle, children }) => {
  const theme = useTheme();
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#f0f0f3', letterSpacing: '-0.5px', margin: 0 }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{children}</div>
    </header>
  );
};

/* ─── Stats Card ─── */
const StatsCard = ({ label, value, trend, trendUp, icon }) => {
  const theme = useTheme();
  return (
    <div style={{ padding: 22, background: theme.card, border: '1px solid rgba(255,255,255,0.06)', borderRadius: theme.borderRadius, flex: 1, minWidth: 180 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}><AdminIcon name={icon} size={16} /></span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 600, color: '#f0f0f3', letterSpacing: '-1px' }}>{value}</div>
      {trend && <div style={{ marginTop: 8, fontSize: 12, color: trendUp ? theme.success : theme.error, fontWeight: 500 }}>{trendUp ? '↑' : '↓'} {trend}</div>}
    </div>
  );
};

/* ─── Status Badge ─── */
const StatusBadge = ({ status }) => {
  const theme = useTheme();
  const configs = {
    live: { bg: theme.success + '18', color: theme.success, label: 'Live' },
    draft: { bg: theme.warning + '18', color: theme.warning, label: 'Draft' },
    archived: { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', label: 'Archived' },
    new: { bg: theme.accent + '18', color: theme.accent, label: 'New' },
    replied: { bg: theme.success + '18', color: theme.success, label: 'Replied' },
    closed: { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', label: 'Closed' },
  };
  const c = configs[status] || configs.draft;
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 100, background: c.bg, color: c.color, fontSize: 11, fontWeight: 500 }}>
    <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.color }}></span>{c.label}
  </span>;
};

/* ─── Admin Button ─── */
const AdminBtn = ({ children, variant = 'primary', size = 'md', icon, onClick, style: sx }) => {
  const theme = useTheme();
  const [hovered, setHovered] = React.useState(false);
  const base = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, transition: 'all 0.15s', whiteSpace: 'nowrap' };
  const sizes = { sm: { height: 32, padding: '0 12px', fontSize: 12, borderRadius: 6 }, md: { height: 38, padding: '0 18px', fontSize: 13, borderRadius: 8 }, lg: { height: 44, padding: '0 24px', fontSize: 14, borderRadius: 10 } };
  const variants = {
    primary: { background: theme.accent, color: '#fff', opacity: hovered ? 0.9 : 1 },
    secondary: { background: 'transparent', color: '#e0e0e5', border: '1px solid rgba(255,255,255,0.1)', opacity: hovered ? 1 : 0.9 },
    ghost: { background: hovered ? 'rgba(255,255,255,0.05)' : 'transparent', color: 'rgba(255,255,255,0.6)' },
    danger: { background: hovered ? theme.error : theme.error + 'cc', color: '#fff' },
  };
  return <button style={{ ...base, ...sizes[size], ...variants[variant], ...sx }} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    {icon && <AdminIcon name={icon} size={size === 'sm' ? 14 : 16} />}{children}
  </button>;
};

/* ─── Form Controls ─── */
const inputBase = { width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#f0f0f3', fontFamily: 'inherit', fontSize: 13, outline: 'none', transition: 'border-color 0.15s' };

const AdminInput = ({ label, placeholder, value, onChange, type = 'text' }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{label}</label>}
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}
      style={{ ...inputBase, height: 40, padding: '0 12px' }}
      onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
  </div>
);

const AdminTextarea = ({ label, placeholder, value, onChange, rows = 4 }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{label}</label>}
    <textarea placeholder={placeholder} value={value} onChange={onChange} rows={rows}
      style={{ ...inputBase, padding: '10px 12px', resize: 'vertical', lineHeight: 1.6 }}
      onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
  </div>
);

const AdminSelect = ({ label, options, value, onChange }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{label}</label>}
    <select value={value} onChange={onChange} style={{ ...inputBase, height: 40, padding: '0 12px', appearance: 'none', cursor: 'pointer' }}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>
);

/* ─── Language Tabs ─── */
const LanguageTabs = ({ activeLang, onLangChange }) => {
  const theme = useTheme();
  const langs = [{ id: 'ko', label: 'KO' }, { id: 'en', label: 'EN' }, { id: 'zh', label: 'ZH' }, { id: 'ja', label: 'JA' }];
  return (
    <div style={{ display: 'flex', gap: 2, padding: 3, background: 'rgba(255,255,255,0.04)', borderRadius: 8, marginBottom: 20, width: 'fit-content' }}>
      {langs.map(l => (
        <button key={l.id} onClick={() => onLangChange(l.id)} style={{
          padding: '6px 16px', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, fontWeight: 500, letterSpacing: '0.3px', transition: 'all 0.15s',
          background: activeLang === l.id ? theme.accent : 'transparent',
          color: activeLang === l.id ? '#fff' : 'rgba(255,255,255,0.45)',
        }}>{l.label}</button>
      ))}
    </div>
  );
};

/* ─── Media Uploader ─── */
const MediaUploader = ({ label, accept = 'image/*' }) => {
  const theme = useTheme();
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{label}</label>}
      <div style={{
        border: `2px dashed ${hovered ? theme.accent : 'rgba(255,255,255,0.08)'}`,
        borderRadius: theme.borderRadius, padding: '36px 20px', textAlign: 'center',
        background: hovered ? theme.accentBg : 'transparent', transition: 'all 0.2s', cursor: 'pointer',
      }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div style={{ color: hovered ? theme.accent : 'rgba(255,255,255,0.3)', marginBottom: 10 }}><AdminIcon name="upload" size={28} /></div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>클릭하거나 파일을 드래그하세요</p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: '6px 0 0' }}>{accept === 'image/*' ? 'PNG, JPG, SVG (최대 5MB)' : 'MP4, WebM (최대 100MB)'}</p>
      </div>
    </div>
  );
};

/* ─── Search Input ─── */
const SearchInput = ({ placeholder = '검색...', value, onChange }) => (
  <div style={{ position: 'relative', minWidth: 200 }}>
    <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}><AdminIcon name="search" size={15} /></span>
    <input placeholder={placeholder} value={value} onChange={onChange}
      style={{ ...inputBase, height: 36, padding: '0 12px 0 34px', fontSize: 12, borderRadius: 8 }}
      onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
  </div>
);

/* ─── Data Table ─── */
const AdminTable = ({ columns, data, onRowClick }) => {
  const [hoveredRow, setHoveredRow] = React.useState(null);
  return (
    <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {columns.map(col => (
              <th key={col.key} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} onClick={() => onRowClick?.(row, i)}
              onMouseEnter={() => setHoveredRow(i)} onMouseLeave={() => setHoveredRow(null)}
              style={{ borderBottom: i < data.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', background: hoveredRow === i ? 'rgba(255,255,255,0.02)' : 'transparent', cursor: onRowClick ? 'pointer' : 'default', transition: 'background 0.1s' }}>
              {columns.map(col => (
                <td key={col.key} style={{ padding: '12px 16px', color: '#e0e0e5', whiteSpace: 'nowrap' }}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ─── Page Shell (Sidebar + Content) ─── */
const AdminShell = ({ currentPage, onNavigate, variant, children }) => {
  const theme = useTheme();
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: theme.bg }}>
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} variant={variant} />
      <main style={{ flex: 1, marginLeft: theme.sidebarW, padding: '28px 32px 48px', minHeight: '100vh', transition: 'margin-left 0.25s ease' }}>
        {children}
      </main>
    </div>
  );
};

/* ─── Export ─── */
Object.assign(window, {
  AdminIcon, ThemeCtx, useTheme, getThemeColors,
  Sidebar, TopBar, StatsCard, StatusBadge,
  AdminBtn, AdminInput, AdminTextarea, AdminSelect,
  LanguageTabs, MediaUploader, SearchInput, AdminTable, AdminShell,
});
