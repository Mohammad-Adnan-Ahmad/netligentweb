import React from "react";
import "../../CSS/CourseDetail/AboutCourse.css";

/* ---------- tiny inline icon set (no external deps) ---------- */
const IconBook = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
const IconTrendUp = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 17 9 11l4 3 7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBranch = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="6" cy="19" r="2" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 7v10M6 12h8a4 4 0 0 0 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconRocket = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 2c3 1 5 4.5 5 8 0 3-1.5 5.5-2.5 6.5L12 19l-2.5-2.5C8.5 15.5 7 13 7 10c0-3.5 2-7 5-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M9 16.5 6.5 19M15 16.5 17.5 19M8 21l1-2M16 21l-1-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconBulb = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.46 1.1 1.2 1.2 2.2h4.8c.1-1 .6-1.74 1.2-2.2A6 6 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
const IconTarget = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);
const IconCheck = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12.5 10.8 15 16 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconUsers = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3.5 20c.6-3.2 3-5 5.5-5s4.9 1.8 5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15.8 20c.4-2.4 1.8-4 3.7-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconGradCap = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M21 9v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconBriefcase = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="7.5" width="18" height="12" rx="1.8" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconShuffle = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 6h3.8c1.4 0 2.6.7 3.4 1.9l4 6.2c.8 1.2 2 1.9 3.4 1.9H21M17 3l4 3-4 3M3 18h3.8c1.4 0 2.6-.7 3.4-1.9l.7-1.1M17 21l4-3-4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconUserStar = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3.5 20c.6-3.4 3-5.3 5.5-5.3s4.9 1.9 5.5 5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="m18.3 10.5.8 1.7 1.9.3-1.4 1.3.3 1.9-1.6-.9-1.6.9.3-1.9-1.4-1.3 1.9-.3.8-1.7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);
const IconPie = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 3v9l7.8 4.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
const IconDatabase = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M5 5.5V12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M5 12v6.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V12" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconBars = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M5 20V11M11 20V6M17 20v-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

/* ---------- content data (edit freely) ---------- */
const whyItems = [
  { icon: IconTrendUp, tone: "blue", title: "High Demand", text: "Build skills that are highly valued and in demand across today's technology-driven industries." },
  { icon: IconBranch, tone: "purple", title: "Practical Skills", text: "Gain hands-on knowledge and real-world skills that you can apply to build and solve problems." },
  { icon: IconRocket, tone: "green", title: "Career Growth", text: "Open doors to rewarding career opportunities and accelerate your professional growth." },
  { icon: IconBulb, tone: "amber", title: "Future Ready", text: "Stay ahead with modern, industry-relevant skills designed for the future of technology." },
];





export default function AboutCourse({about_desc, course_img, courseName, achieveItems, }) {
  const audienceItems = [
  { icon: IconGradCap, tone: "blue", title: "Students & Graduates", text: "Build in-demand skills and start a great career." },
  { icon: IconBriefcase, tone: "purple", title: "Working Professionals", text: "Upskill and grow in your current role." },
  { icon: IconShuffle, tone: "green", title: "Career Switchers", text: "Start a successful career in the field of data." },
  { icon: IconUserStar, tone: "amber", title: "Entrepreneurs & Business Owners", text: "Understand your business better and make smarter moves." },
  { icon: IconBulb, tone: "purple", title: "Anyone Curious About Data", text: "No prior experience needed. Just the will to learn!" },
];
  return (
    <section className="ac">
      <div className="ac__container">
        {/* ---- top row: text column + hero image column ---- */}
        <div className="ac__top">
          {/* LEFT */}
          <div className="ac__left">
            <span className="ac-badge">
              <IconBook className="ac-badge__icon" />
              About This Course
            </span>

            <h2 className="ac-heading">
              About <span className="ac-heading__accent"> This Course</span>
            </h2>


            <p className="ac-desc">
              {about_desc}
            </p>

            <div className="ac-panel ac-course-by-netligent">
             <div className="ac-panel__header">
                 <img src="/netligent_logo.png" alt="netligent logo" width="28" height="28" style={{borderRadius : "20%"}} />
                <h3 className="course-by-netligent">Designed by Netligent</h3>
              </div>
               <p className="">
             This course is thoughtfully designed by <span>Netligent Technologies</span> to give you practical skills, real-world exposure and everything you need to become a <span>job-ready professional</span>
            </p>
            </div>

            <div className="ac-panel">
              <div className="ac-panel__header">
                <span className="ac-panel__icon ac-panel__icon--purple">
                  <IconBars width="18" height="18" />
                </span>
                <h3>Why Learn {courseName}?</h3>
              </div>

              <div className="ac-why-grid">
                {whyItems.map(({ icon: Icon, tone, title, text }) => (
                  <div className="ac-why-item" key={title}>
                    <span className={`ac-icon-circle ac-icon-circle--${tone}`}>
                      <Icon width="24" height="24" />
                    </span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ac__right">
            <div className="ac-hero">
                <img src={course_img} alt="About Course Illustration"/>
            </div>

            <div className="ac-panel ac-achieve">
              <div className="ac-panel__header">
                <span className="ac-panel__icon ac-panel__icon--purple-outline">
                  <IconTarget width="18" height="18" />
                </span>
                <h3>What You Will Achieve</h3>
              </div>

              <ul className="ac-achieve__list">
                {achieveItems.map((item) => (
                  <li key={item}>
                    <span className="ac-check">
                      <IconCheck width="16" height="16" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ---- bottom: who should join ---- */}
        <div className="ac-panel ac-audience">
          <div className="ac-panel__header">
            <span className="ac-panel__icon ac-panel__icon--purple">
              <IconUsers width="18" height="18" />
            </span>
            <h3>Who Should Join?</h3>
          </div>

          <div className="ac-audience__grid">
            {audienceItems.map(({ icon: Icon, tone, title, text }, i) => (
              <div className="ac-audience__item" key={title}>
                {i !== 0 && <span className="ac-audience__divider" aria-hidden="true" />}
                <span className={`ac-icon-circle ac-icon-circle--${tone}`}>
                  <Icon width="24" height="24" />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}