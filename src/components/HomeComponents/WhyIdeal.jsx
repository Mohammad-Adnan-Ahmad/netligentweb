import { useEffect, useRef, useState } from "react";
import "../../CSS/WhyIdeal.css";
import {MentorIcon, IconTrophy, CurriculumIcon, RocketIcon, ShieldCheckIcon, GroupIcon, CertBadgeIcon, HeadsetIcon} from '../Icons/Icons'
/* ════════════════════════════════════
   DATA
════════════════════════════════════ */
const FEATURES_ROW1 = [
   {
    Icon: GroupIcon,
    title: "Small Batches, Big Impact",
    body: "Focused attention, better interaction and personalized mentorship.",
  },
  {
    Icon: MentorIcon,
    title: "Industry Experts as Mentors",
    body: "Learn from professionals with 20+ years of real-world industry experience.",
  },
  {
    Icon: CurriculumIcon,
    title: "Industry-Aligned Curriculum",
    body: "Our courses are designed as per current industry trends and job requirements.",
  },
  {
    Icon: RocketIcon,
    title: "Hands-on Learning That Sticks",
    body: "Work on real projects, case studies & assignments to build practical expertise.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Placement Support That Works",
    body: "Resume building, mock interviews & strong hiring partner network.",
  },
  
  {
    Icon: CertBadgeIcon,
    title: "Recognized Certification",
    body: "Earn industry-recognized certifications that boost your profile.",
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
  "Industry-relevant curriculum designed by experts",
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
            <h2 className="wi-title">Why We're the</h2>

            {/* Title line 2 + sparkle */}
            <div className="wi-title-row2">
              <h2 className="wi-title-gradient">Ideal Option?</h2>
              <span className="wi-sparkle">✦</span>
            </div>

            {/* Underline */}
            <div className="wi-title-underline" />

            {/* Tagline */}
            <p className="wi-tagline">
              Smart Training.{" "}
              <span className="wi-tagline-blue">Real Skills.</span>{" "}
              <span className="wi-tagline-purple">Great Careers.</span>
            </p>

            {/* Body */}
            <p className="wi-body-text">
              At Netligent Technologies, we specialize in smart IT training,
              tailoring our approach to enhance your skills and facilitate
              successful placement opportunities. It is a{" "}
              <span className="wi-body-link">Best IT Training
              Institute for Web development, Cyber Security in Bhopal.</span>
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