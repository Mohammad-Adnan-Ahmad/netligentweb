import "../../CSS/OurCourses/CoursesHero.css";

/* ══════════════════════════════════════
   FEATURE MINI-ITEMS DATA
══════════════════════════════════════ */
const FEATURES = [
  { icon: "👤", title: "Expert Instructors", body: "Learn from industry professionals" },
  { icon: "💼", title: "Practical Learning",  body: "Hands-on projects & real case studies" },
 
];


/* ══════════════════════════════════════
   FLOATING COURSE CARDS DATA
══════════════════════════════════════ */
const FLOAT_CARDS = [
  {
    cls: "ch-card-1",
    icon: "📈",
    title: "Data Analytics",
    body: "Turn Data Into Powerful Insights",
  },
  {
    cls: "ch-card-2",
    icon: "</>",
    title: "Web Development",
    body: "Build Responsive Web Applications",
  },
  {
    cls: "ch-card-3",
    icon: "🧠",
    title: "AI & Machine Learning",
    body: "Build Intelligent AI-Powered Solutions",
  },
  {
    cls: "ch-card-4",
    icon: "☁️",
    title: "Cloud Computing",
    body: "Master Cloud & DevOps Technologies",
  },
  {
    cls: "ch-card-5",
    icon: "🛡️",
    title: "Cyber Security",
    body: "Protect Systems. Secure the Future",
  },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function CoursesHero() {
  return (
    <section className="ch-section">
      <div className="ch-glow-blue" />
      <div className="ch-glow-purple" />

      <div className="ch-grid">

        {/* ── LEFT COLUMN ── */}
        <div className="ch-left">

          {/* Tag */}
          <div className="ch-tag">
            <span className="ch-tag-icon">🚀</span>
            <span>Learn.</span>{" "}
            <span>Build.</span>{" "}
            <span>Grow.</span>{" "}
            <span>Succeed.</span>
          </div>

          {/* Title */}
          <h1 className="ch-title">
            Explore <span className="ch-title-grad">Courses</span><br />
            That Shape Your
          </h1>

          {/* FUTURE handwritten */}
          <div className="ch-future-wrap">
            <span className="ch-future">Future</span>
            <div className="ch-future-underline" />
          </div>

          {/* Subtitle */}
          <p className="ch-subtitle">
            Industry-focused courses designed to equip you with
            in-demand skills and real-world expertise.
          </p>

          {/* 3 feature mini-items */}
          <div className="ch-features">
            {FEATURES.map((f, i) => (
              <div key={i} className="ch-feature">
                <div className="ch-feature-icon">{f.icon}</div>
                <div>
                  <div className="ch-feature-title">{f.title}</div>
                  <div className="ch-feature-body">{f.body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="ch-cta-row">
            <button className="ch-btn-primary">
              Explore Courses
              <span className="ch-btn-arrow">→</span>
            </button>
            <button className="ch-btn-secondary">
              Talk to Counsellor
              <span>🎧</span>
            </button>
          </div>
        </div>      
      </div>
    </section>
  );
}