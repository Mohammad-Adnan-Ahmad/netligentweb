import React from 'react';
import '../../CSS/Infrastructure.css';

/* ── SVG Icons ── */
const IconGrid     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>;
const IconUsers    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconMonitor  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
const IconSofa     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M2 11a2 2 0 1 1 4 0v3h12v-3a2 2 0 1 1 4 0v5H2v-5z"/><path d="M6 19v2M18 19v2"/></svg>;
const IconWifi     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>;
const IconShield   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconArrow    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>;
const IconCamera   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
const IconChevron  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>;

/* ── Feature strip data ── */
const FEATURES = [
  { icon: <IconUsers />,   color: 'blue',   title: 'Modern Classrooms', sub: 'Smart & Spacious'    },
  { icon: <IconMonitor />, color: 'pink',   title: 'High-End Labs',     sub: 'Industry Standard'  },
  { icon: <IconSofa />,    color: 'orange', title: 'Student Lounge',    sub: 'Relax & Recharge'   },
  { icon: <IconWifi />,    color: 'green',  title: 'Speed Wi-Fi',  sub: 'Always Connected'   },
];

/* ── Gallery cells — swap src with your own images anytime ── */
const CELLS = [
  { src: 'Lab1.jpeg', label: 'Netligent Infrastructure' },
  { src: 'Lab2.jpg', label: 'Netligent Infrastructure' },
  { src: 'Lab1_Front.jpg', label: 'Netligent Infrastructure' },
  { src: 'Gallery.jpg', label: 'Netligent Infrastructure' },
  { src: 'Lab2_Front.jpg', label: 'Netligent Infrastructure' },
  { src: 'Gallery_Front.jpg', label: 'Netligent Infrastructure' },
];

export default function Infrastructure() {
  return (
    <section className="infra-section">

      {/* ── Header ── */}
      <div className="infra-header">
        <div className="infra-eyebrow">
          <IconGrid />
          OUR INFRASTRUCTURE
        </div>
        <h2 className="infra-title">
          Built for Learning.{' '}
          <span className="hl">Designed for Success.</span>
        </h2>
        <p className="infra-subtitle">
          Explore the world-class infrastructure and modern facilities that
          create the perfect environment for growth and innovation.
        </p>
      </div>

      {/* ── Feature strip ── */}
      <div className="infra-strip">
        {FEATURES.map((f, i) => (
          <React.Fragment key={f.title}>
            <div className="strip-item">
              <div className={`strip-icon ${f.color}`}>{f.icon}</div>
              <div>
                <div className="strip-label">{f.title}</div>
                <div className="strip-sub">{f.sub}</div>
              </div>
            </div>
            {i < FEATURES.length - 1 && <div className="strip-divider" />}
          </React.Fragment>
        ))}
      </div>

      {/* ── Gallery ── */}
      <div className="gallery-wrap">
        <div className="gallery-grid">

          {/* Hero cell — lobby / reception */}
          <div className="cell cell-hero">
            <img
              src="Recption.jpg"
              alt="Netligent Infrastructure"
              loading="lazy"
            />
            <div className="hero-overlay">
              <h3>Welcome to <span>Netligent</span></h3>
              <p>
                Where ambition meets opportunity.<br />
                Step into a place built to inspire and empower.
              </p>
            </div>
            <button className="hero-btn" aria-label="Explore campus">
              <IconArrow />
            </button>
          </div>

          {/* 6 small cells */}
          {CELLS.map((c) => (
            <div key={c.label} className="cell cell-small">
              <img src={c.src} alt={c.label} loading="lazy" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}