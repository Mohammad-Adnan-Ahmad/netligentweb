import "../../CSS/PersonalizedAttention.css";

/* ── SVG icon components matching the outlined purple-circle icons in image ── */

const PeopleIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="4"/>
    <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
    <circle cx="22" cy="9" r="3"/>
    <path d="M22 18c2.8.5 5 3.2 5 6.5"/>
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="12"/>
    <circle cx="16" cy="16" r="7"/>
    <circle cx="16" cy="16" r="2.5" fill="#818cf8"/>
    <line x1="22" y1="10" x2="28" y2="4"/>
    <polyline points="24,4 28,4 28,8"/>
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5h22a2 2 0 012 2v12a2 2 0 01-2 2H10l-6 4V7a2 2 0 012-2z"/>
    <line x1="10" y1="12" x2="22" y2="12"/>
    <line x1="10" y1="17" x2="17" y2="17"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4,24 12,14 18,18 28,6"/>
    <polyline points="22,6 28,6 28,12"/>
    <rect x="4" y="24" width="5" height="5" rx="1"/>
    <rect x="13" y="19" width="5" height="10" rx="1"/>
    <rect x="22" y="14" width="5" height="15" rx="1"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3L5 8v8c0 6.6 4.7 12.8 11 14 6.3-1.2 11-7.4 11-14V8L16 3z"/>
    <polyline points="11,16 14,19 21,12"/>
  </svg>
);

/* Icon for the info card — two people with a border */
const BatchIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="11" r="5"/>
    <path d="M4 30c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
    <circle cx="25" cy="11" r="4"/>
    <path d="M25 21c3.5.6 6 3.8 6 8"/>
  </svg>
);

/* ── Feature data ── */
const FEATURES = [
  {
    Icon: PeopleIcon,
    titleWhite: "Focus on",
    titleAccent: ["Quality, Not Quantity"],
    body: "We believe in building strong concepts and real understanding, not just completing a syllabus.",
  },
  {
    Icon: TargetIcon,
    titleWhite: "Personalized",
    titleAccent: ["Learning Path"],
    body: "Every student gets a custom learning plan based on their goals, pace, and progress.",
  },
  {
    Icon: ChatIcon,
    titleWhite: "1-on-1",
    titleAccent: ["Mentor Support"],
    body: "Direct access to mentors for guidance, doubt solving & career advice.",
  },
  {
    Icon: ChartIcon,
    titleWhite: "Regular",
    titleAccent: ["Progress Tracking"],
    body: "We track your progress closely and keep you on the right path to achieve your goals.",
  },
  {
    Icon: ShieldIcon,
    titleWhite: "Better",
    titleAccent: ["Results"],
    body: "Individual attention leads to better confidence, better performance and a brighter future.",
  },
];

/* ── Main Component ── */
export default function PersonalizedAttention() {
  return (
    <section className="pa-section">

      {/* ══ HEADER ══ */}
      <div className="pa-header">

        {/* Centered pill tag */}
        {/* <div className="pa-tag">
          <span style={{ fontSize: 14 }}>👥</span>
          Your Success. Our Priority.
        </div> */}

        {/* Left-aligned title with sparks */}
        <div className="pa-title-wrap">
          {/* Animated spark lines */}
          <div className="pa-sparks">
            <span className="pa-spark" />
            <span className="pa-spark" />
            <span className="pa-spark" />
          </div>

          <h2 className="pa-title">
            <span className="pa-title-line">
              <span className="pa-blue">Personalized </span>
              <span className="pa-white">Attention,</span>
            </span>
            <span className="pa-title-line">
              <span className="pa-purple">Focus on Quality, Not Quantity</span>
            </span>
          </h2>
        </div>

        {/* Centered subtitle */}
        <p className="pa-subtitle">
          At Netligent, we believe every student is unique.<br />
          That's why we focus on you, your goals, and your growth.
        </p>
      </div>

      {/* ══ TOP ROW ══ */}
      <div className="pa-top-row">

        {/* Left: photo card */}
        <div className="pa-photo-card">
          <img
            src="PersonalizedAttention.png"
            alt="Personalized Attention"
            className="pa-photo-img"
          />
        </div>

        {/* Right: info card */}
        <div className="pa-info-card">

          {/* Icon + titles */}
          <div className="pa-info-top">
            <div className="pa-info-icon">
              <BatchIcon />
            </div>
            <div className="pa-info-label">
              <div className="pa-info-title">Small Batch Sizes</div>
              <div className="pa-info-title-sub">
                to Provide Individual Attention
              </div>
            </div>
          </div>

          {/* Body */}
          <p className="pa-info-body">
            We keep our batches small so our mentors can
            understand your strengths, focus on your
            weaknesses, and guide you every step of the way.
          </p>

          {/* Bullet */}
          <div className="pa-info-bullet">
            <span className="pa-bullet-star">☆</span>
            <span className="pa-bullet-text">
              Better Interaction.&nbsp; Faster Doubt Solving.<br />
              Stronger Concept Clarity.
            </span>
          </div>
        </div>
      </div>

      {/* ══ FEATURE CARDS ══ */}
      <div className="pa-features">
        {FEATURES.map((f, i) => (
          <div key={i} className="pa-feat-card">

            {/* Icon + title side by side */}
            <div className="pa-feat-top">
              <div className="pa-feat-icon">
                <f.Icon />
              </div>
              <div className="pa-feat-title">
                {f.titleWhite}{" "}
                {f.titleAccent.map((line, j) => (
                  <span key={j} className="pa-feat-title-accent">{line}</span>
                ))}
              </div>
            </div>

            {/* Body below */}
            <p className="pa-feat-body">{f.body}</p>
          </div>
        ))}
      </div>

      {/* ══ BOTTOM BANNER ══ */}
      <div className="pa-bottom-banner">
        <div className="pa-banner-icon">❤️</div>
        <p className="pa-banner-text">
          We Don't Just Teach, We{" "}
          <span className="pa-banner-cyan">Mentor.</span>
          {"  "}
          We Don't Just Enroll, We{" "}
          <span className="pa-banner-purple">Invest in Your Success.</span>
        </p>
      </div>

    </section>
  );
}