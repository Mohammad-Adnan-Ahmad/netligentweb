import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../CSS/Placement.css";

const students = [
  { id: 1, name: "Ajay Meena", role: "Network Engineer", companyLogoURL: "Matrix_logo.svg", companyLogo: "matrix", company: "Matrix", photo: "Ajay_Meena.jpg" },
  { id: 2, name: "Shristi Taneja", role: "Security Engineer", companyLogoURL: "Vibs_Logo.avif", companyLogo: "vibs", company: "VIBS", photo: "Shristi.jpg" },
  { id: 3, name: "Ansh Bam", role: "Security Engineer", companyLogoURL: "Vibs_Logo.avif", companyLogo: "vibs", company: "VIBS", photo: "Ansh.jpg" },
  { id: 4, name: "Shivam Jha", role: "Security Analyst", companyLogoURL: "NetSquare_logo.png", companyLogo: "netsquare", company: "NETSQUARE", photo: "Shivam.jpg" },
  { id: 5, name: "Ajay Rai", role: "Front-End Developer", companyLogoURL: "aicentral_logo.png", companyLogo: "aicentral", company: "AlCentral", photo: "Ajay_Rai.jpg" },
  { id: 6, name: "Pallavi Bajpai", role: "DevOps Engineer", companyLogoURL: "aicentral_logo.png", companyLogo: "aicentral", company: "AlCentral", photo: "Pallavi.jpg" },
  { id: 7, name: "Harshit Rajput", role: "Penetration Tester", companyLogoURL: "aicentral_logo.png", companyLogo: "aicentral", company: "AlCentral", photo: "Harshit.jpg" },
  { id: 8, name: "Avahan Soni", role: "Software Engineer", companyLogoURL: "aicentral_logo.png", companyLogo: "aicentral", company: "AlCentral", photo: "Avahan.jpg" },
  { id: 9, name: "Sagar Tripathi", role: "Server Administrator", companyLogoURL: "shroti_logo.png", companyLogo: "shroti telecom", company: "Shroti Telecom", photo: "Sagar.jpg" },
  { id: 10, name: "Shreya Jain", role: "Python Developer", companyLogoURL: "shroti_logo.png", companyLogo: "shroti telecom", company: "Shroti Telecom", photo: "Shreya.jpg" },
  { id: 11, name: "Aaditya Kumar", role: "Python Developer", companyLogoURL: "aicentral_logo.png", companyLogo: "aicentral", company: "AlCentral", photo: "Aaditya.jpg" },
  { id: 12, name: "Jaishankar", role: "Full-Stack Developer", companyLogoURL: "cyntech_logo.png", companyLogo: "cyntech", company: "Cyntech Solution", photo: "Jaishankar.jpeg" },
  { id: 13, name: "Kuldeep Mourya", role: "Front-End Developer", companyLogoURL: "FE_logo.webp", companyLogo: "flourishers", company: "Flourishers Edge", photo: "Kuldeep.jpg" },
];

/* ─── Helpers ─── */
const CromaLogo = ({ small }) => (
  <svg width={small ? 48 : 60} height={small ? 16 : 20} viewBox="0 0 60 20" fill="none">
    <rect width="60" height="20" rx="3" fill="#1a1a2e" />
    <text x="4" y="14" fontSize="10" fontWeight="bold" fill="#FF6B35" fontFamily="Arial">CROMA</text>
    <text x="38" y="14" fontSize="8" fill="white" fontFamily="Arial">CAMPUS</text>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CompanyLogo = ({ type, size = "sm", logoURL }) => {
  if (logoURL) {
    return <img src={logoURL} alt={type} className={`company-logo-img company-logo-img--${size}`} />;
  }
  return null;
};

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
        <div className="exp-card__topbar"><CromaLogo /></div>
        <div className="exp-card__hero">
          <div className="exp-card__hero-left">
            <div className="exp-card__got-placed">Got Placed</div>
            <div className="exp-card__name">
              {firstName}{lastName && <><br />{lastName}</>}
            </div>
            <div className="exp-card__placed-label">PLACED AT:</div>
            <div className="exp-card__company-logo">
              <CompanyLogo type={student.companyLogo} size="lg" logoURL={student.companyLogoURL} />
            </div>
            <div className="exp-card__role-bar">
              <span className="exp-card__role-label">Job Role:</span>
              <span className="exp-card__role-text">{student.role}</span>
            </div>
          </div>
          <div className="exp-card__hero-right">
            <img className="exp-card__photo" src={student.photo} alt={student.name} />
          </div>
        </div>
        <div className="exp-card__desc">
          <p>
            We are incredibly proud to announce the successful placement of{" "}
            <span className="exp-card__hl">{student.name}</span> into the role of{" "}
            <span className="exp-card__hl">{student.role}</span> at{" "}
            <span className="exp-card__hl">{student.company}</span>.
          </p>
          <p className="exp-card__wish">We wish good luck for your bright future... 🎉🎊</p>
        </div>
        <button className="exp-card__close" onClick={onClose} aria-label="Close">✕</button>
      </div>
    </div>
  );
}

/* ─── Small Card ─── */
function SmallCard({ student, onClick, isActive }) {
  return (
    <div className={`sm-card ${isActive ? "sm-card--active" : ""}`} onClick={onClick}>
      <div className="sm-card__header">
        <CheckIcon />
        <span>GOT PLACED</span>
      </div>
      <div className="sm-card__body">
        <div className="sm-card__congrats">Congratulations</div>
        <div className="sm-card__photo-wrap">
          <img className="sm-card__photo" src={student.photo} alt={student.name} />
        </div>
        <div className="sm-card__name">{student.name}</div>
        {student.companyLogoURL && (
          <div className="sm-card__logos-row">
            <CompanyLogo type={student.companyLogo} logoURL={student.companyLogoURL} />
          </div>
        )}
        {student.role && (
          <div className="sm-card__role-badge">
            <div className="sm-card__role-label">Job Role:</div>
            <div className="sm-card__role-text">{student.role}</div>
          </div>
        )}
      </div>
      <div className="sm-card__hint">Click to view details</div>
    </div>
  );
}

/* ─── Marquee Slider ─── */
function MarqueeSlider({ onCardClick, activeId }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const isPausedRef = useRef(false);

  /* We duplicate cards so the loop feels truly infinite */
  const loopStudents = [...students, ...students, ...students];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardW  = 216; /* card width + gap */
    const totalW = cardW * students.length;

    /* Start from the middle set so both directions work */
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

  const pauseSlider = () => {
    if (!isPausedRef.current) {
      tweenRef.current?.pause();
      isPausedRef.current = true;
    }
  };

  const resumeSlider = () => {
    if (isPausedRef.current) {
      tweenRef.current?.resume();
      isPausedRef.current = false;
    }
  };

  return (
    <div
      className="marquee-viewport"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      {/* Edge fade masks */}
      <div className="marquee-fade marquee-fade--left"  aria-hidden="true" />
      <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

      <div className="marquee-track" ref={trackRef}>
        {loopStudents.map((student, idx) => (
          <div className="marquee-item" key={`${student.id}-${idx}`}>
            <SmallCard
              student={student}
              isActive={activeId === student.id}
              onClick={(e) => {
                e.stopPropagation();
                onCardClick(student.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page Root ─── */
export default function StudentPlaced() {
  const [expandedId, setExpandedId] = useState(null);
  const expandedStudent = students.find((s) => s.id === expandedId);

  return (
    <div className="sp-page" onClick={() => setExpandedId(null)}>
      {/* Header */}
      <div className="ps-label-wrap">
        <span className="ps-label">PLACEMENTS</span>
      </div>
      <h2 className="ps-heading">
        Our Students. Top Companies.
        <br />
        <span className="ps-heading-grad">Bright Futures.</span>
      </h2>
      <p className="ps-sub">
        We take pride in the amazing careers our students build.
        Here are some of our recent placements.
      </p>
      <div className="ps-divider" />

      {/* Expanded detail card */}
      {expandedStudent && (
        <div className="sp-expanded-wrap" onClick={(e) => e.stopPropagation()}>
          <ExpandedCard
            student={expandedStudent}
            onClose={() => setExpandedId(null)}
          />
        </div>
      )}

      {/* Infinite marquee */}
      <MarqueeSlider
        onCardClick={(id) => setExpandedId((prev) => (prev === id ? null : id))}
        activeId={expandedId}
      />

      {/* Dot indicators */}
      <div className="sp-dots" aria-hidden="true">
        {students.map((s) => (
          <button
            key={s.id}
            className={`sp-dot ${expandedId === s.id ? "sp-dot--active" : ""}`}
            onClick={(e) => { e.stopPropagation(); setExpandedId((prev) => prev === s.id ? null : s.id); }}
            aria-label={`View ${s.name}`}
          />
        ))}
      </div>
    </div>
  );
}




