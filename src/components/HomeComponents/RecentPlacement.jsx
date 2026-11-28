import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../CSS/Placement.css";

const students = [
  { id: 1, name: "Ajay Meena", role: "Network Engineer", companyLogoURL: "/Matrix_logo.svg", companyLogo: "matrix", company: "Matrix", photo: "/Ajay_Meena.jpg" },
  { id: 2, name: "Shristi Taneja", role: "Security Engineer", companyLogoURL: "/Vibs_Logo.avif", companyLogo: "vibs", company: "VIBS", photo: "/Shristi.jpg" },
  { id: 3, name: "Ansh Bam", role: "Security Engineer", companyLogoURL: "/Vibs_Logo.avif", companyLogo: "vibs", company: "VIBS", photo: "/Ansh.jpg" },
  { id: 4, name: "Shivam Jha", role: "Security Analyst", companyLogoURL: "/NetSquare_logo.png", companyLogo: "netsquare", company: "NETSQUARE", photo: "/Shivam.jpg" },
  { id: 5, name: "Ajay Rai", role: "Front-End Developer", companyLogoURL: "", companyLogo: "aicentral", company: "AlCentral", photo: "/Ajay_Rai.jpg" },
  { id: 6, name: "Pallavi Bajpai", role: "DevOps Engineer", companyLogoURL: "", companyLogo: "aicentral", company: "AlCentral", photo: "/Pallavi.jpg" },
  { id: 7, name: "Harshit Rajput", role: "Penetration Tester", companyLogoURL: "", companyLogo: "aicentral", company: "AlCentral", photo: "/Harshit.jpg" },
  { id: 8, name: "Avahan Soni", role: "Software Engineer", companyLogoURL: "", companyLogo: "aicentral", company: "AlCentral", photo: "/Avahan.jpg" },
  { id: 9, name: "Sagar Tripathi", role: "Server Administrator", companyLogoURL: "/shroti_logo.png", companyLogo: "shroti telecom", company: "Shroti Telecom", photo: "/Sagar.jpg" },
  { id: 10, name: "Shreya Jain", role: "Python Developer", companyLogoURL: "/shroti_logo.png", companyLogo: "shroti telecom", company: "Shroti Telecom", photo: "/Shreya.jpg" },
  { id: 11, name: "Aaditya Kumar", role: "Python Developer", companyLogoURL: "", companyLogo: "aicentral", company: "AlCentral", photo: "/Aaditya.jpg" },
  { id: 12, name: "Jaishankar", role: "Full-Stack Developer", companyLogoURL: "/cyntech_logo.png", companyLogo: "cyntech", company: "Cyntech Solution", photo: "/Jaishankar.jpeg" },
  { id: 13, name: "Kuldeep Mourya", role: "Front-End Developer", companyLogoURL: "/FE_logo.webp", companyLogo: "flourishers", company: "Flourishers Edge", photo: "/Kuldeep.jpg" },
];

/* Descriptive alt text for student photos */
const photoAlt = (s) =>
  `${s.name}, placed as ${s.role} at ${s.company} after IT training at Netligent Technologies, Bhopal`;

/* ─── Structured data (built from the students array) ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Netligent Technologies Student Placements, Placed in Top IT Companies",
  description:
    "Recent placements of Netligent Technologies students in IT roles such as Network Engineer, Security Analyst, Python Developer and Full-Stack Developer.",
  itemListElement: students.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: s.name,
      jobTitle: s.role,
      worksFor: { "@type": "Organization", name: s.company },
      alumniOf: { "@type": "EducationalOrganization", name: "Netligent Technologies" },
    },
  })),
};

/* ─── Helpers ─── */
const NetligentLogo = ({ small }) => (
  <svg
    width={small ? 96 : 120}
    height={small ? 16 : 20}
    viewBox="0 0 120 20"
    fill="none"
    role="img"
    aria-label="Netligent Technologies"
  >
    <rect width="120" height="20" rx="3" fill="#1a1a2e" />
    <text x="6" y="14" fontSize="10" fontWeight="bold" fill="#60b4ff" fontFamily="Arial">NETLIGENT</text>
    <text x="68" y="14" fontSize="8" fill="white" fontFamily="Arial">TECHNOLOGIES</text>
  </svg>
);

const CheckIcon = () => (
  <svg className="sm-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CompanyLogo = ({ company, size = "sm", logoURL, decorative = false }) => {
  if (logoURL) {
    return (
      <img
        src={logoURL}
        alt={decorative ? "" : `${company} logo, hiring partner of Netligent Technologies`}
        loading="lazy"
        decoding="async"
        className={`company-logo-img company-logo-img--${size}`}
      />
    );
  }
  return null;
};

/* Play-once-when-visible hook */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Expanded Card ─── */
function ExpandedCard({ student, onClose }) {
  const nameParts = student.name.split(" ");
  const firstName = nameParts[0];
  const lastName  = nameParts.slice(1).join(" ");

  return (
    <div className="exp-card" onClick={(e) => e.stopPropagation()}>
      <div className="exp-card__sidebar">
        <span className="exp-card__sidebar-text">Congratulations!</span>
      </div>
      <div className="exp-card__body">
        <div className="exp-card__topbar exp-in" style={{ "--d": "0.15s" }}><NetligentLogo /></div>
        <div className="exp-card__hero">
          <div className="exp-card__hero-left">
            <div className="exp-card__got-placed exp-in" style={{ "--d": "0.2s" }}>Got Placed</div>
            <div className="exp-card__name exp-in" style={{ "--d": "0.28s" }}>
              {firstName}{lastName && <><br />{lastName}</>}
            </div>
            <div className="exp-card__placed-label exp-in" style={{ "--d": "0.34s" }}>AT:</div>
            <div className="exp-card__company-logo exp-in" style={{ "--d": "0.4s" }}>
              <CompanyLogo company={student.company} size="lg" logoURL={student.companyLogoURL} />
            </div>
            <div className="exp-card__role-bar exp-in" style={{ "--d": "0.48s" }}>
              <span className="exp-card__role-text">{student.role}</span>
            </div>
          </div>
          <div className="exp-card__hero-right">
            <img
              className="exp-card__photo"
              src={student.photo}
              alt={photoAlt(student)}
              decoding="async"
            />
          </div>
        </div>
        <div className="exp-card__desc exp-in" style={{ "--d": "0.6s" }}>
          <p>
            Netligent Technologies is proud to announce the successful placement of{" "}
            <span className="exp-card__hl">{student.name}</span> as{" "}
            <span className="exp-card__hl">{student.role}</span> at{" "}
            <span className="exp-card__hl">{student.company}</span>, after completing
            job-oriented IT training with our placement support team in Bhopal.
          </p>
          <p className="exp-card__wish">Congratulations, and best wishes for a bright career ahead! 🎉🎊</p>
        </div>
        <button className="exp-card__close" onClick={onClose} aria-label={`Close placement details of ${student.name}`}>✕</button>
      </div>
    </div>
  );
}

/* ─── Small Card ─── */
function SmallCard({ student, onClick, isActive, isClone }) {
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };

  /* 3D tilt + moving glare that follows the pointer */
  const handleMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${((x - 0.5) * 14).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - y) * 12).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };
  const handleLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      className={`sm-card ${isActive ? "sm-card--active" : ""}`}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="button"
      tabIndex={isClone ? -1 : 0}
      onKeyDown={handleKey}
      aria-label={`View placement details of ${student.name}, ${student.role} at ${student.company}`}
    >
      <div className="sm-card__header">
        <CheckIcon />
      </div>
      <div className="sm-card__body">
        <div className="sm-card__photo-wrap">
          <img
            className="sm-card__photo"
            src={student.photo}
            alt={isClone ? "" : photoAlt(student)}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="sm-card__name">{student.name}</div>
        {student.companyLogoURL && (
          <div className="sm-card__logos-row">
            <CompanyLogo company={student.company} logoURL={student.companyLogoURL} decorative={isClone} />
          </div>
        )}
        {student.role && (
          <div className="sm-card__role-badge">
            <div className="sm-card__role-text">{student.role}</div>
          </div>
        )}
      </div>
      <div className="sm-card__hint">View placement story</div>
    </div>
  );
}

/* ─── Marquee Slider ─── */
function MarqueeSlider({ onCardClick, activeId, inView }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  /* Duplicate cards so the loop feels truly infinite */
  const loopStudents = [...students, ...students, ...students];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardW  = 216; /* card width + gap */
    const totalW = cardW * students.length;

    gsap.set(track, { x: -totalW });

    tweenRef.current = gsap.to(track, {
      x: `-=${totalW}`,
      duration: students.length * 3.2,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalW),
      },
    });

    return () => tweenRef.current?.kill();
  }, []);

  /* On first reveal the track starts fast and settles into its calm pace */
  useEffect(() => {
    if (!inView || !tweenRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      tweenRef.current,
      { timeScale: 9 },
      { timeScale: 1, duration: 2.4, ease: "power3.out", overwrite: true }
    );
  }, [inView]);

  /* Smooth brake / smooth restart instead of a hard pause */
  const pauseSlider = () =>
    gsap.to(tweenRef.current, { timeScale: 0, duration: 0.7, ease: "power2.out", overwrite: true });

  const resumeSlider = () =>
    gsap.to(tweenRef.current, { timeScale: 1, duration: 1.1, ease: "power2.inOut", overwrite: true });

  return (
    <div
      className="marquee-viewport"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
      role="region"
      aria-label="Netligent Technologies recently placed students"
    >
      <div className="marquee-fade marquee-fade--left"  aria-hidden="true" />
      <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

      <div className="marquee-track" ref={trackRef}>
        {loopStudents.map((student, idx) => {
          const isClone = idx >= students.length;
          return (
            <div
              className="marquee-item"
              key={`${student.id}-${idx}`}
              aria-hidden={isClone ? "true" : undefined}
            >
              <SmallCard
                student={student}
                isClone={isClone}
                isActive={activeId === student.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick(student.id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Page Root ─── */
export default function StudentPlaced() {
  const [sectionRef, inView] = useInView(0.2);
  const [expandedId, setExpandedId] = useState(null);

  /* `shown` lags behind `expandedId` so the card can animate out before unmounting */
  const [shown, setShown] = useState(null);
  useEffect(() => {
    if (expandedId !== null) {
      setShown(expandedId);
      return;
    }
    const t = setTimeout(() => setShown(null), 700);
    return () => clearTimeout(t);
  }, [expandedId]);

  const shownStudent = students.find((s) => s.id === shown);

  /* Esc closes the detail card */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setExpandedId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sp-page ${inView ? "is-in" : ""}`}
      onClick={() => setExpandedId(null)}
      aria-labelledby="student-placements-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <div className="ps-label-wrap ps-fade" style={{ "--d": "0s" }}>
        <span className="ps-label">IT PLACEMENTS </span>
      </div>
      <h2 className="ps-heading" id="student-placements-heading">
        <span className="ps-line">
          <span className="ps-reveal" style={{ "--d": "0.12s" }}>Netligent Student Placements</span>
        </span>
        <span className="ps-line">
          <span className="ps-reveal ps-heading-grad" style={{ "--d": "0.26s" }}>Placed in Top IT Companies</span>
        </span>
      </h2>
      <p className="ps-sub ps-fade" style={{ "--d": "0.45s" }}>
        Netligent Technologies, a leading IT training and placement institute in Bhopal,
        has helped students start careers as Network Engineers, Security Analysts, Python
        Developers, Full-Stack Developers and more. Meet our recently placed students
        and the companies that hired them.
      </p>
      <div className="ps-divider" />

      {/* Expanded detail card: the shell grows open and closed smoothly */}
      <div
        className={`sp-expanded-shell ${expandedId !== null ? "is-open" : ""}`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={expandedId === null}
      >
        <div className="sp-expanded-inner">
          {shownStudent && (
            <ExpandedCard
              key={shownStudent.id}
              student={shownStudent}
              onClose={() => setExpandedId(null)}
            />
          )}
        </div>
      </div>

      {/* Infinite marquee */}
      <MarqueeSlider
        inView={inView}
        onCardClick={(id) => setExpandedId((prev) => (prev === id ? null : id))}
        activeId={expandedId}
      />

      {/* Dot indicators */}
      <div className="sp-dots">
        {students.map((s, i) => (
          <button
            key={s.id}
            className={`sp-dot ${expandedId === s.id ? "sp-dot--active" : ""}`}
            style={{ "--i": i }}
            onClick={(e) => { e.stopPropagation(); setExpandedId((prev) => prev === s.id ? null : s.id); }}
            aria-label={`View placement of ${s.name}`}
          />
        ))}
      </div>
    </section>
  );
}