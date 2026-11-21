
import "../../CSS/Lab/LabHero.css";

/* ══════════════════════════════════════
   FEATURES DATA
══════════════════════════════════════ */
const FEATURES = [
  {
    icon: "</>",
    title: "Real-World Projects",
    body: "Build practical solutions",
  },
  {
    icon: "👥",
    title: "Industry Relevant",
    body: "Work on latest technologies",
  },
  {
    icon: "📊",
    title: "Get Career Ready",
    body: "Stand out to employers",
  },
];

/* ══════════════════════════════════════
   PROJECT CARDS DATA — the 4 floating cards
══════════════════════════════════════ */
const PROJECTS = [
  {
    emoji: "🛒",
    name: "E-Commerce Website",
    tech: "React | Node.js | MongoDB",
    thumbColors: ["#1e40af", "#1d4ed8", "#2563eb", "#1e3a8a"],
  },
  {
    emoji: "📈",
    name: "Data Analysis Dashboard",
    tech: "Python | Pandas | Power BI",
    thumbColors: ["#1e3a8a", "#7c3aed", "#4f46e5", "#1e40af"],
  },
  {
    emoji: "💬",
    name: "Chat Application",
    tech: "MERN Stack",
    thumbColors: ["#4f46e5", "#7c3aed", "#1e40af", "#2d1b69"],
  },
  {
    emoji: "🤖",
    name: "AI Chatbot",
    tech: "Python | OpenAI API",
    thumbColors: ["#1e3a8a", "#1d4ed8", "#4f46e5", "#2563eb"],
  },
];

/* ══════════════════════════════════════
   TECH ICONS on right edge
══════════════════════════════════════ */
const TECH_ICONS = [
  { icon: "🐍", label: "Python" },
  { icon: "⚛️", label: "React"  },
  { icon: "aws", label: "AWS", isAws: true },
  { icon: "🗄️", label: "SQL"   },
  { icon: "🛡️", label: "Sec"   },
];

/* ══════════════════════════════════════
   BOOK STACK
══════════════════════════════════════ */
const BOOKS = [
  "Python",
  "Web Development",
  "Data Science",
  "Cloud & DevOps",
];

/* ══════════════════════════════════════
   PROJECT CARD COMPONENT
══════════════════════════════════════ */
function ProjectCard({ proj }) {
  return (
    <div className="sp-proj-card">
      {/* Thumbnail */}
      <div className="sp-proj-thumb">
        <div className="sp-proj-thumb-inner">
          <div className="sp-thumb-row">
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[0], opacity: 0.8 }} />
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[1], opacity: 0.7, flex: 2 }} />
          </div>
          <div className="sp-thumb-row">
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[2], opacity: 0.6, flex: 3 }} />
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[3], opacity: 0.5 }} />
          </div>
          <div className="sp-thumb-row">
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[1], opacity: 0.4 }} />
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[0], opacity: 0.5, flex: 2 }} />
            <div className="sp-thumb-block" style={{ background: proj.thumbColors[2], opacity: 0.6 }} />
          </div>
        </div>
        {/* Emoji overlay */}
        <span style={{ fontSize: 26, position: "relative", zIndex: 1 }}>{proj.emoji}</span>
      </div>

      {/* Info */}
      <div className="sp-proj-name">{proj.name}</div>
      <div className="sp-proj-tech">{proj.tech}</div>
      <div className="sp-proj-arrow">›</div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function LabHeroSection() {
  return (
    <section className="sp-section">



      <div className="sp-grid">

        {/* ══ LEFT COLUMN ══ */}
        <div className="sp-left">

          {/* Tag */}
          <div className="sp-tag">
            <span>🎓</span>
            Student Projects
          </div>

          {/* Title */}
          <h1 className="sp-title">
            <span className="sp-title-white">Lab </span>
            <span className="sp-title-white">by</span>
            <span className="sp-title-white"> Netligent</span>
            <br />
             </h1>
             <h2 className="sp-subtitle">
                  <span className="sp-title-white">Ideas Into Innovation.</span>
            <span className="sp-title-grad"> Skills Into Solutions. </span>
             </h2>
          
        

          {/* Tagline */}
          <p className="sp-tagline">
            Real Skills. Real Projects.{" "}
            <span className="sp-tagline-accent">Real Career Growth.</span>
          </p>

          {/* Description */}
          <p className="sp-desc">
            Explore the amazing projects built by our students as they learn
            and grow with us. These real-world projects showcase their skills,
            creativity and practical knowledge gained during their training.
          </p>

          {/* 4 features */}
          <div className="sp-features">
            {FEATURES.map((f, i) => (
              <div key={i} className="sp-feat">
                <div className="sp-feat-icon">{f.icon}</div>
                <div className="sp-feat-title">{f.title}</div>
                <div className="sp-feat-body">{f.body}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="sp-btn-row">
            <button className="sp-btn-primary">
              <span className="sp-btn-primary-icon">👁️</span>
              View Student Projects
              <span>→</span>
            </button>

          </div>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div className="sp-right">

          {/* Student photo */}
          {/* <img
            src="/LabHero2.png"
            alt="Student working on laptop"
            className="sp-photo"
          /> */}
        </div>
      </div>
    </section>
  );
}