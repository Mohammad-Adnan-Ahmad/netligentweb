import React, { useEffect, useRef, useState } from "react";
import '../../CSS/Placementprocess.css'
import { Link } from "react-router-dom";

/* ══════════════════════════════════════════
   SVG ICONS
══════════════════════════════════════════ */
const Icons = {
  Rocket:   () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>),
  Target:   () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>),
  Resume:   () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>),
  Users:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  Code:     () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  Chart:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>),
  Star:     () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  Clock:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Arrow:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>),
  Phone:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.1 6.1l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
  Shield:   () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>),
  Briefcase:() => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" strokeLinecap="round"/></svg>),
};
const PHONE_NUMBER = "+918349530962";   

/* ══════════════════════════════════════════
   STEPS DATA
══════════════════════════════════════════ */
const STEPS = [
  {
    tag: "Step 01",  tagClass: "tag-blue",
    nodeClass: "pp-node-blue", cardClass: "pp-card-blue",
    icon: <Icons.Rocket />,
    title: "Enroll & Begin Your Journey",
    desc: "Start your IT career transformation from day one. Our counsellors map your goals to the perfect course and create a tailored learning roadmap.",
    bullets: ["One-on-one career counselling session", "Customised learning path creation", "Access to LMS, study material & community"],
    duration: "Day 1",
    status: "Foundation",
  },
  {
    tag: "Step 02", tagClass: "tag-purple",
    nodeClass: "pp-node-purple", cardClass: "pp-card-purple",
    icon: <Icons.Code />,
    title: "Hands-On Training & Projects",
    desc: "Master in-demand skills through live classes, real-world projects, and weekly assessments guided by industry professionals.",
    bullets: ["Live instructor-led sessions", "3–5 industry-grade capstone projects", "Weekly assessments & concept quizzes"],
    duration: "Weeks 1–12",
    status: "Core Training",
  },
  {
    tag: "Step 03", tagClass: "tag-cyan",
    nodeClass: "pp-node-cyan", cardClass: "pp-card-cyan",
    icon: <Icons.Resume />,
    title: "Resume & Portfolio Building",
    desc: "Our placement team works directly with you to craft an ATS-optimised resume and a standout GitHub/portfolio that gets recruiters to stop scrolling.",
    bullets: ["ATS-friendly resume crafted by experts", "LinkedIn profile optimisation", "GitHub portfolio review & improvements"],
    duration: "Week 10–13",
    status: "Profile Building",
  },
  {
    tag: "Step 04", tagClass: "tag-green",
    nodeClass: "pp-node-green", cardClass: "pp-card-green",
    icon: <Icons.Users />,
    title: "Mock Interviews & Soft Skills",
    desc: "Simulate real interview environments with our expert mentors. Build confidence, sharpen communication, and master technical & HR rounds.",
    bullets: ["Unlimited 1-on-1 mock interviews", "DSA, system design & HR prep", "Communication & confidence workshops"],
    duration: "Week 12–15",
    status: "Interview Prep",
  },
  {
    tag: "Step 05", tagClass: "tag-orange",
    nodeClass: "pp-node-orange", cardClass: "pp-card-orange",
    icon: <Icons.Target />,
    title: "Company Referrals & Job Drives",
    desc: "Get direct introductions to our 15+ hiring partners. Exclusive off-campus drives, job referrals, and priority access to opportunities reserved for our students.",
    bullets: ["Exclusive off-campus placement drives", "Direct referrals to hiring partners", "Priority access to 500+ job openings"],
    duration: "Week 14–18",
    status: "Job Drives",
  },
  {
    tag: "Step 06", tagClass: "tag-pink",
    nodeClass: "pp-node-pink", cardClass: "pp-card-pink",
    icon: <Icons.Chart />,
    title: "Offer Negotiation Support",
    desc: "Don't settle for less. Our team helps you evaluate multiple offers, understand CTCs, and confidently negotiate the package you deserve.",
    bullets: ["CTC breakdown & offer evaluation", "Salary negotiation coaching", "Joining date & notice period guidance"],
    duration: "As Required",
    status: "Negotiation",
  },
  {
    tag: "Step 07", tagClass: "tag-gold",
    nodeClass: "pp-node-gold", cardClass: "pp-card-gold",
    icon: <Icons.Star />,
    title: "Placement & Beyond",
    desc: "You get placed — and we keep supporting you. Alumni network access, mentorship for your first 90 days, and upskilling resources for career growth.",
    bullets: ["Post-placement mentorship (90 days)", "Alumni network & referral access", "Free upskilling workshops for life"],
    duration: "After Placement",
    status: "Lifelong",
  },
];


/* ══════════════════════════════════════════
   CUSTOM HOOK — Intersection Observer
══════════════════════════════════════════ */
function useScrollReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── single step wrapper with own observer ── */
function StepItem({ step, index }) {
  const [ref, visible] = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      className={`pp-step ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      {/* Connector line (odd: right→center, even: center→left) */}
      <div className="pp-connector" />

      {/* Left / Right Card */}
      <div className={`pp-step-card ${step.cardClass}`}>
        <div className={`pp-card-tag ${step.tagClass}`}>
          <span>◆</span> {step.tag}
        </div>
        <h3 className="pp-card-title">{step.title}</h3>
        <p className="pp-card-desc">{step.desc}</p>
        <ul className="pp-card-bullets">
          {step.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="pp-card-footer">
          <div className="pp-card-duration">
            <Icons.Clock /> {step.duration}
          </div>
          <span className="pp-card-status">{step.status}</span>
        </div>
      </div>

      {/* Center node */}
      <div className="pp-step-node">
        <div className={`pp-node-circle ${step.nodeClass}`}>
          <svg className="pp-node-svg" style={{ stroke: "currentColor" }}>
            {step.icon.props.children}
          </svg>
          <span className="pp-node-num">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Empty side */}
      <div className="pp-step-empty" />
    </div>
  );
}

/* ══════════════════════════════════════════
   SPINE FILL — tracks scroll progress
══════════════════════════════════════════ */
function SpineFill({ timelineRef }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const tl = timelineRef.current;
      const fill = fillRef.current;
      if (!tl || !fill) return;
      const rect = tl.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = rect.height;
      const scrolled = Math.max(0, winH - rect.top);
      const pct = Math.min(100, (scrolled / (total + winH)) * 185);
      fill.style.height = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="pp-spine-fill" ref={fillRef} />;
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function PlacementProcess() {
  const [statsRef, statsVisible]   = useScrollReveal(0.2);
  const [bannerRef, bannerVisible] = useScrollReveal(0.2);
  const timelineRef = useRef(null);
  
   const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };
  return (
    <section className="pp-section">
      {/* Background glow blobs */}
      <div className="pp-glow-left"  />
      <div className="pp-glow-right" />
      <div className="pp-glow-center"/>

      <div className="pp-container">

        {/* ── Badge ── */}
        <div className="pp-badge-wrap">
          <div className="pp-badge">
            <Icons.Briefcase />
            From Training to Placement
          </div>
        </div>

        {/* ── Header ── */}
        <div className="pp-header">
          <h2 className="pp-title">
            Your <span className="t-blue">Placement</span> Journey,<br />
            <span className="t-purple">Step by Step</span>
          </h2>
          <p className="pp-subtitle">
            A structured, mentor-driven process designed to take you from
            learner to placed professional — with support at every stage.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="pp-timeline" ref={timelineRef}>
          {/* Vertical spine */}
          <div className="pp-spine">
            <SpineFill timelineRef={timelineRef} />
          </div>

          {STEPS.map((step, i) => (
            <StepItem key={i} step={step} index={i} />
          ))}
        </div>


        {/* ── Bottom Banner ── */}
        <div
          ref={bannerRef}
          className={`pp-banner ${bannerVisible ? "visible" : ""}`}
        >
          <div className="pp-banner-left">
            <h3 className="pp-banner-title">
              Ready to Start Your{" "}
              <span className="bt-blue">Placement</span>{" "}
              <span className="bt-purple">Journey?</span>
            </h3>
            <p className="pp-banner-sub">
              Join thousands of students who trusted Netligent and landed their dream jobs.
              <br />Our counsellors are just one call away — completely free.
            </p>
          </div>
          <div className="pp-banner-right">
            <button className="pp-btn-secondary" onClick={handleCallClick}>
              <Icons.Phone /> Talk to a Counsellor
            </button>
            <Link to="our-courses">
               <button className="pp-btn-primary">
              Start Your Journey <Icons.Arrow />
            </button>
            </Link>
           
          </div>
        </div>

      </div>
    </section>
  );
}