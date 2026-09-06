import React from "react";
import "../../CSS/CourseDetail/HeroOfCourseDetail.css"
import { Link } from "react-router-dom";

/* ══════════════════════════════════════
   ICONS
══════════════════════════════════════ */
const Ic = {
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
   COMPONENT
══════════════════════════════════════ */
export default function HeroSection({backgroundURL,course, title, headline, desc, duration, rating, syllabus_link }) {
  const isMobile = window.innerWidth <= 1023;
  
  return (
    
    <div className="ch-page" style={{backgroundImage: isMobile ? "none" : `url(${backgroundURL})`}} >
      <div className="ch-nebula-l" />
      <img src="/AI_Robot.png" className="ch-robot"/>

      {/* ── Top bar ── */}
      <div className="ch-topbar">
        <nav className="ch-breadcrumb">
          <Link to="#">Courses</Link>
          <span className="ch-breadcrumb-sep">›</span>
          <span className="ch-breadcrumb-cur">{course}</span>
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
            <span className="tg">{title}</span>
            {/* <span className="tw">with Gen AI</span> */}
          </h1>

          {/* Tagline */}
          <p className="ch-tagline">
            {headline}
          </p>

          {/* Body */}
          <p className="ch-body">
           {desc}
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
              { Icon: Ic.Clock, label: "Duration", value:`${duration}` },
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
                <div className="ch-rating-num">{rating}</div>
                <div className="ch-rating-label">Course Rating</div>
              </div>
            </div>
            <div className="ch-trust">
              {[
                { Icon: Ic.CheckCircle, text: "Trusted by students" },
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
            <button className="ch-btn-syllabus"
             onClick={() => window.open(`/Syllabus/${syllabus_link}`, "_blank")}>
              <Ic.Download /> Download Syllabus
            </button>
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