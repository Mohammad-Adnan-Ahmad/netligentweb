import React from "react";
import "../../CSS/About/OurJourney.css";
import Netligent_Journey from "../../assets/Netligent_Journey.png";

/* ------------------------------------------------------------------ */
/*  Small inline line-icons (no external icon library required)        */
/* ------------------------------------------------------------------ */
const Icon = {
  Badge: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M12 2l2.5 5 5.5.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9L9.5 7 12 2z" />
    </svg>
  ),
  Rocket: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M14.5 2.5c2 1 4 3 5 5-1 3.5-3.5 6.5-6.5 8.5l-3-3c2-3 5-5.5 8.5-6.5-1-1-3-3-5-4z" />
      <path d="M9 15l-4 4M4 20l1.5-4.5M4 20l4.5-1.5" />
      <path d="M13.5 9.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
      <path d="M9 15c-2-1-3-2-4-4 1.2-.3 3-.3 4.3.5" />
      <path d="M14.5 20c1-1 2-2.8 4-4-.3 1.2-.3 3 .5 4.3" />
    </svg>
  ),
  BadgeUsers: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M12 2l1 2h-2l1-2z" />
    </svg>
  ),
  Users: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="9" cy="8" r="2.6" />
      <circle cx="16.5" cy="9.2" r="2.1" />
      <path d="M3.5 19c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <path d="M15 14.2c2.3.3 4 2.3 4 4.8" />
    </svg>
  ),
  TrendUp: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M3 17l6-6 4 4 7-8" />
      <path d="M15 7h5v5" />
    </svg>
  ),
  Target: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <path d="M12 3v3M21 12h-3" />
    </svg>
  ),
  GradCap: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M2 8l10-4 10 4-10 4-10-4z" />
      <path d="M6 10.5v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
      <path d="M22 8v6" />
    </svg>
  ),
  DocCert: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M6 3h9l3 3v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <circle cx="9.5" cy="14.2" r="2" />
      <path d="M8.3 15.9l-.6 2.4 1.8-.9 1.8.9-.6-2.4" />
      <path d="M8 8h6M8 10.6h4" />
    </svg>
  ),
  Handshake: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M2 11l4-3 3 2 3-2 2.2 1.6" />
      <path d="M22 11l-4-3-6 4.3-2-1.4-3.6 2.6a1.4 1.4 0 001.7 2.2L9 14" />
      <path d="M9 14.8l1.6 1.2a1.5 1.5 0 002.2-.3" />
      <path d="M12.8 15.7l1.3 1a1.5 1.5 0 002.1-.4" />
    </svg>
  ),
  Medal: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M12 11.3l.9 1.9 2.1.3-1.5 1.5.4 2.1-1.9-1-1.9 1 .4-2.1-1.5-1.5 2.1-.3z" />
      <path d="M9 3l-3 6M15 3l3 6" />
    </svg>
  ),
  Community: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="7" cy="8" r="2.3" />
      <circle cx="17" cy="8" r="2.3" />
      <circle cx="12" cy="7" r="2.6" />
      <path d="M2.5 19c0-2.8 2-5 4.5-5M21.5 19c0-2.8-2-5-4.5-5" />
      <path d="M7 19c0-2.9 2.2-5.2 5-5.2s5 2.3 5 5.2" />
    </svg>
  ),
  Flag: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M6 3v18" />
      <path d="M6 4h11l-2.5 4L17 12H6" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const TIMELINE = [
  {
    icon: Icon.Rocket,
    color: "blue",
    year: "2023",
    title: "The Beginning",
    text: "Founded on 8th September 2023 with a clear mission to bridge the gap between learning and real-world industry demands.",
  },
  {
    icon: Icon.BadgeUsers,
    color: "blue",
    year: "2024",
    title: "Building The Foundation",
    text: "Launched industry-focused training programs designed by experts to deliver practical skills and real impact.",
  },
  {
    icon: Icon.Users,
    color: "purple",
    year: "2024 – 2025",
    title: "Growing Together",
    text: "Empowered 300+ students with in-demand skills and hands-on experience, building a strong community of future tech leaders.",
  },
  {
    icon: Icon.TrendUp,
    color: "purple",
    year: "2025",
    title: "Expanding Our Impact",
    text: "Strengthened industry collaborations and enhanced our programs to create more opportunities for students across India.",
  },
  {
    icon: Icon.Target,
    color: "red",
    year: "The Future",
    title: "A Journey That Continues",
    text: "We're just getting started. Our journey continues towards building a skilled, confident, and future-ready India.",
  },
];

const STATS = [
  {
    icon: Icon.GradCap,
    color: "blue",
    value: "200+",
    label: "Students Trained",
    text: "Empowering learners with industry-ready skills.",
  },
  {
    icon: Icon.DocCert,
    color: "blue",
    value: "20+",
    label: "Courses Offered",
    text: "Practical, hands-on programs for real-world success.",
  },
  {
    icon: Icon.Handshake,
    color: "purple",
    value: "15+",
    label: "Industry Partners",
    text: "Strong collaborations driving better opportunities.",
  },
  {
    icon: Icon.Medal,
    color: "red",
    value: "100%",
    label: "Placement Focused",
    text: "Committed to building careers, not just skills.",
  },
  {
    icon: Icon.Flag,
    color: "red",
    value: "1",
    label: "Mission",
    text: "To transform youth potential into professional success.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function OurJourney() {
  return (
    <section className="oj-section">
      <div className="oj-container">
        {/* ---------- Top: heading + hero image ---------- */}
        <div className="oj-top">
          <div className="oj-intro">
            <span className="oj-badge">
              <Icon.Badge className="oj-badge-icon" />
              OUR JOURNEY
            </span>

            <h2 className="oj-heading">
              <span className="oj-heading-dark">From Steps Today,</span>
              <span className="oj-heading-gradient">To Impact Tomorrow.</span>
            </h2>
            <span className="oj-heading-rule" />

            <p className="oj-desc">
              Our journey is built on purpose, powered by people, and driven
              by technology. From our humble beginning to the future we're
              building — every step has a story.
            </p>
          </div>

          <div className="oj-hero">
            <div className="oj-hero-shape">
              <img src={Netligent_Journey} alt="Idea to Impact roadmap" />
            </div>
            <span className="oj-hero-arc oj-hero-arc--purple" />
            <span className="oj-hero-arc oj-hero-arc--red" />
            <span className="oj-hero-dots" />
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <div className="oj-timeline">
          <div className="oj-timeline-line" aria-hidden="true">
            <span className="oj-timeline-dot" />
          </div>

          <div className="oj-timeline-row">
            {TIMELINE.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div className="oj-timeline-col" key={i}>
                  <div className={`oj-timeline-icon oj-c-${item.color}`}>
                    <ItemIcon className="oj-icon-svg" />
                  </div>

                  <div className="oj-timeline-card">
                    <div className={`oj-year oj-c-${item.color}`}>{item.year}</div>
                    <h3 className="oj-card-title">{item.title}</h3>
                    <span className={`oj-card-rule oj-c-${item.color}`} />
                    <p className="oj-card-text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- Stats bar ---------- */}
        <div className="oj-stats">
          {STATS.map((s, i) => {
            const StatIcon = s.icon;
            return (
              <div className="oj-stat" key={i}>
                <div className={`oj-stat-icon oj-c-${s.color}`}>
                  <StatIcon className="oj-icon-svg" />
                </div>
                <div className="oj-stat-body">
                  <div className={`oj-stat-value oj-c-${s.color}`}>{s.value}</div>
                  <div className="oj-stat-label">{s.label}</div>
                  <div className="oj-stat-text">{s.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}