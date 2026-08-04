import "../../CSS/About/OurTeam.css";

/* ══════════════════════════════════════
   TEAM DATA
══════════════════════════════════════ */
const TEAM = [
  {
      photo: "Director.png",
    name: "Mudassir Ahmed Hashmi",
    role: "Managing Director",
    role2: "Cloud, DevOps & Cyber Security Trainer",
    experience: "15+ Years",
    students: "5000+",

  },
  {
    photo: "Director2.png",
    name: "Anish Panicker",
    role: "Program Director",
    role2: "Cyber Security Expert",
    experience: "15+ Years",
    students: "5000+",
  },
  {
    photo: "PD_Trainer.png",
    name: "Yousuf Ali Haqqani",
    role: "Soft Skills Specialist",
    role2: "PD Trainer",
    experience: "12+ Years",
    students: "6000+",
  },
  {
    photo: "Manager.png",
    name: "Mohammad Adnan",
    role: "Center Manager",
    role2: "Web Development & Data Science Trainer",
    experience: "2+ Years",
    students: "500+"
  },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function OurTeam() {
  return (
    <section className="et-section">

      {/* Ambient glows */}
      <div className="et-glow-l" />
      <div className="et-glow-r" />

      {/* Dot clusters */}
      <div className="et-dots-l" />
      <div className="et-dots-r" />

      {/* Horizontal glow lines flanking header */}
      <div className="et-line-l" />
      <div className="et-line-r" />

      {/* ══ HEADER ══ */}
      <div className="et-header">
        <div className="et-tag">
          <span>👥</span>
          Our Team
        </div>

        <h2 className="et-title">
          The Experts Behind{" "}
          <span className="et-title-grad">Netligent</span>
        </h2>

        <p className="et-subtitle">
          Experienced. Passionate. Committed to Your Success.
        </p>
      </div>

      {/* ══ TEAM CARDS ══ */}
      <div className="et-cards">
        {TEAM.map((m, i) => (
          <div key={i} className="et-card">
            {/* Photo */}
            <div className="et-card-photo-wrap">
              <img
                src={m.photo}
                alt={m.name}
                className="et-card-photo"
                loading="lazy"
              />
              <div className="et-card-photo-fade" />
            </div>

            {/* Body */}
            <div className="et-card-body">

              {/* Name & role */}
              <div className="et-card-name">{m.name}</div>
              <div className="et-card-role">{m.role} <br/>
              <span>{m.role2}</span>
              </div>
          

              {/* Stats chips */}
              <div className="et-stats-row">
                <div className="et-stat-chip">
                  <span className="et-stat-icon">💼</span>
                  <div>
                    <span className="et-stat-label">Experience</span>
                    <span className="et-stat-value">{m.experience}</span>
                  </div>
                </div>
                <div className="et-stat-chip">
                  <span className="et-stat-icon">🎓</span>
                  <div>
                    <span className="et-stat-label">Students Trained</span>
                    <span className="et-stat-value">{m.students}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}