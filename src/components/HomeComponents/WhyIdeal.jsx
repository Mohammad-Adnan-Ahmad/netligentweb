import { useEffect, useRef, useState } from "react";
import "../../CSS/WhyIdeal.css";
import {MentorIcon, IconTrophy, CurriculumIcon, RocketIcon, ShieldCheckIcon, GroupIcon, CertBadgeIcon, HeadsetIcon} from '../Icons/Icons'
/* ════════════════════════════════════
   DATA
════════════════════════════════════ */
const FEATURES_ROW1 = [
   {
    Icon: GroupIcon,
    title: "Small Batch Sizes and Personal Attention",
    body: "Get an interactive learning experience with opportunities to ask questions, discuss concepts and receive individual guidance.",
  },
  {
    Icon: MentorIcon,
    title: "Experienced Trainers and Mentors",
    body: "Learn with guidance from experienced trainers who help simplify complex topics, resolve doubts and strengthen your technical foundation.",
  },
  {
    Icon: CurriculumIcon,
    title: "Industry-Relevant IT Courses",
    body: "Learn technologies and tools used across modern IT environments. Our programs cover software development, data analytics, artificial intelligence, cybersecurity and cloud computing.",
  },
  {
    Icon: RocketIcon,
    title: "Hands-On Practical Training",
    body: "Apply what you learn through practical assignments, exercises and real-world projects. Develop a better understanding of technical concepts by working with industry-relevant tools and technologies.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Career and Placement Assistance",
    body: "Prepare for professional opportunities through career guidance, resume development, interview preparation and placement assistance.",
  },
  
  {
    Icon: CertBadgeIcon,
    title: "Certification and Skill Development",
    body: "Strengthen your professional profile through course completion and relevant certification opportunities. Ask our counsellors about the certification details for your chosen program.",
  },
   {
    Icon: IconTrophy,
    title: "Future-Ready Skills",
    body: "Stay ahed with in-demand technologies and future-ready skill sets.",
  },

  {
    Icon: HeadsetIcon,
    title: "Support, Always There",
    body: "From doubt clearing to career guidance – we're with you at every step.",
  },
];


const BULLETS = [
  "Industry-Relevant IT Courses designed by experts",
  "Practical learning with real-world projects",
  "100% focus on skills, confidence & career growth",
];

/* Count-up hook */
function useCountUp(target, started) {
  const [val, setVal] = useState(0);
  const hasDecimal = String(target).includes(".");
  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const steps = 80;
    const id = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame / steps, 3);
      const raw = ease * target;
      setVal(hasDecimal ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (frame >= steps) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [started, target, hasDecimal]);
  return hasDecimal ? val.toFixed(1) : val;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.value, started);
  return (
    <div className="wi-stat-card">
      <div className="wi-stat-icon"><stat.Icon /></div>
      <div className="wi-stat-num">
        <span className={`wi-stat-big ${stat.color}`}>
          {count}{stat.suffix}
        </span>
        {stat.unit && <span className="wi-stat-unit">{stat.unit}</span>}
      </div>
      <div className="wi-stat-label">
        {stat.label.split("\n").map((l, i) => (
          <span key={i} style={{ display: "block" }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
export default function WhyIdeal() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wi-section" ref={sectionRef}>

      {/* ══ MAIN BODY ══ */}
      <div className="wi-body">

        {/* ── LEFT PANEL ── */}
        <div className="wi-left">
          {/* Background photo */}
          
          {/* Content */}
          <div className="wi-left-content">

        

            {/* Title line 1 */}
            <h2 className="wi-title">Why Choose</h2>

            {/* Title line 2 + sparkle */}
            <div className="wi-title-row2">
              <h2 className="wi-title-gradient">Netligent</h2>
              <span className="wi-sparkle">✦</span>
            </div>

            {/* Underline */}
            <div className="wi-title-underline" />

            {/* Tagline */}
            <p className="wi-tagline">
              A Career-Focused{" "}
              <span className="wi-tagline-blue">IT Training Institute </span>{" "}
              <span className="wi-tagline-purple">in Bhopal</span>
            </p>

            {/* Body */}
            <p className="wi-body-text">
              Choosing the right training institute is an important step towards building a successful career in technology. At Netligent Technologies, we focus on helping learners understand concepts, develop practical skills and gain confidence through structured training.
            
            </p>

            {/* Bullets */}
            <ul className="wi-bullets">
              {BULLETS.map((b, i) => (
                <li key={i} className="wi-bullet">
                  <span className="wi-check">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="wi-right">

          {/* Row 1: 4 feature cards */}
          <div className="wi-row">
            {FEATURES_ROW1.map((f, i) => (
              <div key={i} className="wi-card">
                <div className="wi-card-icon"><f.Icon /></div>
                <div className="wi-card-title">{f.title}</div>
                <div className="wi-card-body">{f.body}</div>
              </div>
            ))}
            
          </div>
        </div>
      </div>


    </section>
  );
}