import { useState, useEffect, useRef } from "react";
import "../../CSS/OurCourses/CoursesCTA.css";

const PHONE_NUMBER = "+918349530962";   
/* ══════════════════════════════════════
   FEATURE LIST DATA
══════════════════════════════════════ */
const FEATURES = [
  {
    icon: "📖",
    title: "Learn in Demand Skills",
    body: "Stay ahead with industry-relevant courses.",
  },
  {
    icon: "🚀",
    title: "Hands-on Projects",
    body: "Build real-world projects and boost your portfolio.",
  },
  {
    icon: "🏅",
    title: "Get Certified",
    body: "Earn recognized certificates that build your credibility.",
  },
  {
    icon: "💼",
    title: "Land Your Dream Job",
    body: "Get placement support and kickstart your career.",
  },
];

/* ══════════════════════════════════════
   FLOATING CARDS DATA
══════════════════════════════════════ */
const FLOAT_CARDS = [
  { cls: "cta-card-1", icon: "🎓", title: "Expert Trainers", body: "Learn from the best in the industry." },
  { cls: "cta-card-2", icon: "📊", title: "Learn. Practice. Succeed.", body: "" },
  { cls: "cta-card-3", icon: "👥", title: "Career Support",  body: "We're with you every step." },
  { cls: "cta-card-4", icon: "🥇", title: "Trusted by 10K+ Learners", body: "" },
];

/* ══════════════════════════════════════
   AVATAR IMAGES
══════════════════════════════════════ */
const AVATARS = [
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
];

/* ══════════════════════════════════════
   COUNTDOWN HOOK
   Counts down to a fixed target date/time.
   Adjust the seconds below to control the offer end time.
══════════════════════════════════════ */
function useCountdown() {
  // Target: 2 days, 14 hours, 36 minutes, 48 seconds from first load
  const targetRef = useRef(
    new Date(Date.now() + (2 * 24 * 60 * 60 + 14 * 60 * 60 + 36 * 60 + 48) * 1000)
  );
  const [time, setTime] = useState({ days: "02", hours: "14", minutes: "36", seconds: "48" });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetRef.current.getTime() - Date.now());
      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({
        days:    String(days).padStart(2, "0"),
        hours:   String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/* ══════════════════════════════════════
   CURVED ARROW DECORATION (SVG)
══════════════════════════════════════ */
function ArrowDecor() {
  return (
    <svg className="cta-arrow-decor" width="60" height="40" viewBox="0 0 60 40" fill="none">
      <path
        d="M4 8 C 20 4, 40 4, 50 18"
        stroke="#a855f7"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M44 14 L50 18 L46 24"
        stroke="#a855f7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function CoursesCTA() {
  const time = useCountdown();
const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };
  return (
    <section className="cta-section">
      <div className="cta-grid">

        {/* ── LEFT COLUMN ── */}
        <div className="cta-left">


          {/* Title */}
          <h2 className="cta-title">Ready to Upgrade</h2>
          <div className="cta-title-line2-wrap">
            <span className="cta-title-grad">Your Skills?</span>
         
          </div>

          {/* Subtitle */}
          <p className="cta-subtitle">
            Join thousands of learners who are transforming their careers
            with expert-led courses and real-world learning.
          </p>

          {/* 4 feature columns */}
          <div className="cta-features">
            {FEATURES.map((f, i) => (
              <div key={i} className="cta-feature">
                <div className="cta-feature-icon">{f.icon}</div>
                <div className="cta-feature-title">{f.title}</div>
                <div className="cta-feature-body">{f.body}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="cta-btn-row">
            <button className="cta-btn-primary" onClick={handleCallClick}>

              📞Call to Our Career Counselor
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="cta-right">
            <img src="CTACourse.png" 
                  alt="CTA Student"
                  className="cta-right-img"
                  />
        </div>
      </div>
    </section>
  );
}