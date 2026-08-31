import React from "react";
import "../../CSS/CourseDetail/HeroOfCourseDetail.css"
import { Link } from "react-router-dom";

/* ══════════════════════════════════════
   ICONS
══════════════════════════════════════ */
const Ic = {
  ChevRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  GradCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Play: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  ),
  Levels: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  UserCheck: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  ),

  Download: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  CheckCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  PieChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  Database: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  FileChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="8" y2="17" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="16" y1="15" x2="16" y2="17" />
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

/* ══════════════════════════════════════
   PERSON + DASHBOARD SVG illustration
══════════════════════════════════════ */
const PersonSVG = () => (
  <svg viewBox="0 0 420 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="ch-person-svg">
    <defs>
      <radialGradient id="pg1" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#c8a070" />
        <stop offset="65%" stopColor="#a07848" />
        <stop offset="100%" stopColor="#805828" />
      </radialGradient>
      <radialGradient id="pg2" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#1e3060" />
        <stop offset="100%" stopColor="#0c1a38" />
      </radialGradient>
      <radialGradient id="laptopScreen" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0d2060" />
        <stop offset="100%" stopColor="#060f2a" />
      </radialGradient>
      <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#181830" />
        <stop offset="100%" stopColor="#0c0c20" />
      </linearGradient>
      <filter id="personGlow"><feGaussianBlur stdDeviation="10" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      <filter id="softBlur"><feGaussianBlur stdDeviation="5" /></filter>
    </defs>

    {/* Purple glow under person */}
    <ellipse cx="210" cy="520" rx="180" ry="30"
      fill="rgba(139,92,246,0.22)" filter="url(#softBlur)" />

    {/* Desk */}
    <rect x="20" y="440" width="380" height="22" rx="6" fill="url(#deskGrad)"
      stroke="rgba(80,80,180,0.25)" strokeWidth="1" />
    {/* desk glow strip */}
    <rect x="20" y="440" width="380" height="3" rx="2"
      fill="rgba(139,92,246,0.3)" filter="url(#softBlur)" />

    {/* ── LAPTOP ── */}
    {/* screen */}
    <rect x="110" y="315" width="210" height="135" rx="8"
      fill="#060d22" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
    <rect x="115" y="320" width="200" height="126" rx="5"
      fill="url(#laptopScreen)" />
    {/* screen content — code lines */}
    <rect x="123" y="330" width="70" height="4" rx="2" fill="rgba(96,165,250,0.55)" />
    <rect x="123" y="338" width="100" height="3" rx="1.5" fill="rgba(167,139,250,0.4)" />
    <rect x="123" y="344" width="80" height="3" rx="1.5" fill="rgba(167,139,250,0.35)" />
    <rect x="123" y="352" width="55" height="3" rx="1.5" fill="rgba(56,189,248,0.4)" />
    <rect x="131" y="358" width="85" height="3" rx="1.5" fill="rgba(96,165,250,0.3)" />
    <rect x="131" y="364" width="65" height="3" rx="1.5" fill="rgba(167,139,250,0.28)" />
    {/* bar chart vis */}
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={168 + i * 18} y={406 - [28, 40, 22, 34, 18][i]}
        width="12" height={[28, 40, 22, 34, 18][i]} rx="3"
        fill={`rgba(59,130,246,${0.6 - i * 0.06})`} />
    ))}
    <line x1="158" y1="408" x2="268" y2="408" stroke="rgba(99,119,200,0.3)" strokeWidth="1" />
    {/* laptop base */}
    <rect x="100" y="450" width="230" height="14" rx="4"
      fill="#111128" stroke="rgba(60,60,120,0.35)" strokeWidth="1" />
    <rect x="108" y="452" width="214" height="10" rx="2" fill="#0c0c22" />
    {/* hinge */}
    <rect x="98" y="448" width="234" height="5" rx="2" fill="#0e0e28" />

    {/* ── PERSON BODY ── */}
    {/* clothing — dark blue shirt */}
    <path d="M100 550 Q120 460 210 430 Q300 460 320 550 Z" fill="#0c1830" />
    <rect x="120" y="400" width="180" height="80" rx="20" fill="#0e1c38" />
    {/* collar */}
    <path d="M190 398 L210 420 L230 398" stroke="rgba(80,100,160,0.3)" strokeWidth="1.5" fill="none" />

    {/* arms */}
    {/* left arm — extended toward laptop */}
    <path d="M125 420 Q95 438 80 460" stroke="#0e1c38" strokeWidth="26" strokeLinecap="round" fill="none" />
    <ellipse cx="76" cy="462" rx="15" ry="10" fill="#b89068" />
    {/* right arm */}
    <path d="M295 420 Q320 435 340 455" stroke="#0c1830" strokeWidth="24" strokeLinecap="round" fill="none" />
    <ellipse cx="343" cy="457" rx="14" ry="10" fill="#b89068" />

    {/* neck */}
    <rect x="196" y="368" width="28" height="35" rx="14" fill="#c8a070" />

    {/* HEAD */}
    <ellipse cx="210" cy="340" rx="48" ry="52" fill="url(#pg1)" />

    {/* hair — pulled back ponytail */}
    <ellipse cx="210" cy="302" rx="52" ry="30" fill="#0e0808" />
    {/* sides */}
    <path d="M163 320 Q155 345 160 375 Q170 365 168 340 Z" fill="#0e0808" />
    <path d="M257 320 Q265 345 260 375 Q250 365 252 340 Z" fill="#0e0808" />
    {/* ponytail */}
    <path d="M258 315 Q280 310 285 330 Q282 350 265 355" stroke="#0e0808" strokeWidth="14" strokeLinecap="round" fill="none" />

    {/* GLASSES */}
    <rect x="183" y="340" width="20" height="14" rx="5"
      fill="rgba(10,20,50,0.4)" stroke="rgba(150,160,200,0.6)" strokeWidth="1.8" />
    <rect x="208" y="340" width="20" height="14" rx="5"
      fill="rgba(10,20,50,0.4)" stroke="rgba(150,160,200,0.6)" strokeWidth="1.8" />
    <line x1="203" y1="347" x2="208" y2="347" stroke="rgba(150,160,200,0.6)" strokeWidth="1.8" />
    <line x1="183" y1="347" x2="177" y2="345" stroke="rgba(150,160,200,0.6)" strokeWidth="1.8" />
    <line x1="228" y1="347" x2="235" y2="345" stroke="rgba(150,160,200,0.6)" strokeWidth="1.8" />

    {/* eyes */}
    <ellipse cx="193" cy="348" rx="5.5" ry="5" fill="#2a1808" />
    <ellipse cx="218" cy="348" rx="5.5" ry="5" fill="#2a1808" />
    <circle cx="194.5" cy="346" r="1.8" fill="#fff" />
    <circle cx="219.5" cy="346" r="1.8" fill="#fff" />

    {/* eyebrows */}
    <path d="M185 338 Q193 334 201 338" stroke="#3a1808" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M210 338 Q218 334 226 338" stroke="#3a1808" strokeWidth="2.2" fill="none" strokeLinecap="round" />

    {/* nose */}
    <path d="M207 358 Q210 363 213 358" stroke="#a07848" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* smile */}
    <path d="M198 370 Q210 380 222 370" stroke="#a07848" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M200 371 Q210 379 220 371" fill="rgba(255,255,255,0.45)" />

    {/* cheek blush */}
    <ellipse cx="182" cy="366" rx="8" ry="5" fill="rgba(200,100,100,0.2)" />
    <ellipse cx="238" cy="366" rx="8" ry="5" fill="rgba(200,100,100,0.2)" />

    {/* ear stud */}
    <circle cx="163" cy="352" r="3.5" fill="#c8a070" />
    <circle cx="163" cy="358" r="2.5" fill="rgba(220,180,120,0.7)" />
  </svg>
);

/* ══════════════════════════════════════
   AVATAR PLACEHOLDER COLORS
══════════════════════════════════════ */
const AVATAR_COLORS = [
  ["#2d1f6a", "#1a1040", "RS"],
  ["#1a3060", "#0d1a38", "AV"],
  ["#1a1a50", "#0d0d2a", "KP"],
  ["#2a1040", "#180828", "NS"],
  ["#0d2840", "#061820", "MK"],
];

/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function HeroSection() {
  return (
    <div className="ch-page" style={{backgroundImage:"url(/DataAnalytics.png)"}} >
      <div className="ch-nebula-l" />
 

      {/* ── Top bar ── */}
      <div className="ch-topbar">
        <nav className="ch-breadcrumb">
          <Link to="#">Courses</Link>
          <span className="ch-breadcrumb-sep">›</span>
          <span className="ch-breadcrumb-cur">Data Analytics</span>
        </nav>
      </div>

      {/* ── Hero grid ── */}
      <div className="ch-hero">

        {/* ════ LEFT ════ */}
        <div className="ch-left-details">

          {/* Badge */}
          <div className="ch-course-badge">
            <Ic.BarChart /> In-Demand Career Course
          </div>

          {/* Title */}
          <h1 className="ch-title-detail">
            <span className="tw">Data </span>
            <span className="tg">Analytics</span>
          </h1>

          {/* Tagline */}
          <p className="ch-tagline">
            From Data to Decisions. From You to Industry Expert.
          </p>

          {/* Body */}
          <p className="ch-body">
            Master data analysis, visualization, and decision-making using Excel, SQL,
            Python, Power BI and real-world projects. Build in-demand skills and
            kickstart your career in data.
          </p>

          {/* Features */}
          <div className="ch-features-details">
            {[
              { Icon: Ic.Users, label: "Industry Expert\nTrainers" },
              { Icon: Ic.Briefcase, label: "Real World\nProjects" },
              { Icon: Ic.Shield, label: "100% Placement\nAssistance" },
              { Icon: Ic.GradCap, label: "Certificate of\nCompletion" },
            ].map(({ Icon, label }, i) => (
              <div className="ch-feat-item" key={i}>
                <div className="ch-feat-icon"><Icon /></div>
                <span className="ch-feat-text" style={{ whiteSpace: "pre-line" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Info bar */}
          <div className="ch-info-bar">
            {[
              { Icon: Ic.Clock, label: "Duration", value: "3 Months" },
              { Icon: Ic.Play, label: "Mode", value: "Online / Offline" },
              { Icon: Ic.Levels, label: "Level", value: "Beginner to Advanced" },
            ].map(({ Icon, label, value }, i) => (
              <div className="ch-info-item" key={i}>
                <div className="ch-info-icon"><Icon /></div>
                <div>
                  <span className="ch-info-label">{label}</span>
                  <span className="ch-info-value">{value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment bar */}
          <div className="ch-enroll-bar">
            <div className="ch-rating">
              <span className="ch-star-icon">★</span>
              <div>
                <div className="ch-rating-num">4.8/5</div>
                <div className="ch-rating-label">Course Rating</div>
              </div>
            </div>
            <div className="ch-trust">
              {[
                { Icon: Ic.Shield, text: "Trusted by students" },
                { Icon: Ic.CheckCircle, text: "Expert Guidance" },
                { Icon: Ic.CheckCircle, text: "Lifetime Access" },
              ].map(({ Icon, text }, i) => (
                <div className="ch-trust-item" key={i}>
                  <Icon /> {text}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="ch-btns">
            <Link to="#enroll" className="ch-btn-enroll">
              Enroll Now
            </Link>
            <Link to="#syllabus" className="ch-btn-syllabus"
              onClick={e => e.preventDefault()}>
              <Ic.Download /> Download Syllabus
            </Link>
          </div>


        </div>

        {/* ════ RIGHT ════ */}
        <div className="ch-right" 
        >

        </div>
      </div>
    </div>
  );
}