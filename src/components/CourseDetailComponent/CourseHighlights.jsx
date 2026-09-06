import React from 'react'
import "../../CSS/CourseDetail/CourseHighlights.css"



/* ---------------------------------------------
   Inline icons (no external icon library needed)
--------------------------------------------- */
const IconWrap = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);
 
const GraduationCapIcon = () => (
  <IconWrap>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    <path d="M22 10v6" />
  </IconWrap>
);
 
const LaptopCodeIcon = () => (
  <IconWrap>
    <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
    <path d="M9 8.5 7 11l2 2.5" />
    <path d="M15 8.5 17 11l-2 2.5" />
    <path d="M2 19.5h20" />
  </IconWrap>
);
 
const CertificateIcon = () => (
  <IconWrap>
    <path d="M6 3h9l4 4v10a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 17V4.5A1.5 1.5 0 0 1 6 3Z" />
    <path d="M8.5 8h6" />
    <path d="M8.5 11h3.5" />
    <circle cx="9" cy="16.5" r="2.3" />
    <path d="m7.4 18.3-.6 2.4 2.2-1 2.2 1-.6-2.4" />
  </IconWrap>
);
 
const BriefcaseIcon = () => (
  <IconWrap>
    <rect x="2.5" y="7.5" width="19" height="12" rx="2" />
    <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
    <path d="M2.5 12.5h19" />
  </IconWrap>
);
 
const UserStarIcon = () => (
  <IconWrap>
    <circle cx="10" cy="8" r="3.5" />
    <path d="M4 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
    <path d="m18 8 .9 1.9 2.1.3-1.5 1.5.35 2.1L18 12.85 16.15 13.8l.35-2.1-1.5-1.5 2.1-.3L18 8Z" />
  </IconWrap>
);
 
const MonitorLiveIcon = () => (
  <IconWrap>
    <rect x="3" y="4" width="18" height="13" rx="1.5" />
    <circle cx="12" cy="9" r="2" />
    <path d="M9 14c0-1.7 1.3-3 3-3s3 1.3 3 3" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </IconWrap>
);
 
const GrowthIcon = () => (
  <IconWrap>
    <path d="M4 20V11" />
    <path d="M10 20V7" />
    <path d="M16 20v-9" />
    <path d="M20 20V4" />
  </IconWrap>
);
 
const HeadsetIcon = () => (
  <IconWrap>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M19 19v.5A3.5 3.5 0 0 1 15.5 23H13" />
  </IconWrap>
);
 
const RocketIcon = () => (
  <IconWrap>
    <path d="M12 2c2.5 2 4 5.3 4 8.8 0 2-.6 3.8-1.6 5.2H9.6C8.6 14.6 8 12.8 8 10.8 8 7.3 9.5 4 12 2Z" />
    <circle cx="12" cy="9.5" r="1.6" />
    <path d="M9 16.5 6.5 19c-.5.5-.5 2 0 2.5.5.5 2 .5 2.5 0L11.5 19" />
    <path d="M15 16.5 17.5 19c.5.5.5 2 0 2.5-.5.5-2 .5-2.5 0L12.5 19" />
  </IconWrap>
);
 
const UsersIcon = () => (
  <IconWrap>
    <circle cx="9" cy="8" r="3" />
    <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
    <path d="M16 4.3a3 3 0 0 1 0 5.9" />
    <path d="M18.5 13.8c2 .7 3.5 2.6 3.5 4.7" />
  </IconWrap>
);
 
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.8-4.6 6.6-.9L12 2.5Z" />
  </svg>
);
 
const AwardIcon = () => (
  <IconWrap>
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="m8.2 13.2-1.4 7 5.2-2.6 5.2 2.6-1.4-7" />
  </IconWrap>
);
 
const BadgeIcon = () => (
  <IconWrap>
    <circle cx="12" cy="9" r="6.2" />
    <path d="m8.4 14.2-1.2 6 4.8-2.4 4.8 2.4-1.2-6" />
  </IconWrap>
);
 
/* ---------------------------------------------
   Content
--------------------------------------------- */
const highlights = [
  {
    icon: <GraduationCapIcon />,
    color: "purple",
    title: "Industry Relevant Curriculum",
    description:
      "Learn essential skills with an updated curriculum designed by industry experts.",
  },
  {
    icon: <LaptopCodeIcon />,
    color: "blue",
    title: "Hands-on Projects",
    description:
      "Work on real-world projects and build a portfolio that makes you stand out.",
  },
  {
    icon: <CertificateIcon />,
    color: "teal",
    title: "Certificate of Completion",
    description:
      "Earn a recognized certificate to validate your skills and boost your career.",
  },
  {
    icon: <BriefcaseIcon />,
    color: "orange",
    title: "100% Placement Assistance",
    description:
      "Get interview opportunities, resume support and 100% placement assistance.",
  },
  {
    icon: <UserStarIcon />,
    color: "pink",
    title: "Expert Trainers",
    description:
      "Learn from experienced professionals with years of real-world industry experience.",
  },
  {
    icon: <MonitorLiveIcon />,
    color: "cyan",
    title: "Live & Interactive Sessions",
    description:
      "Attend live classes, ask questions and get personalized guidance from mentors.",
  },
  {
    icon: <GrowthIcon />,
    color: "gold",
    title: "Career Growth Support",
    description:
      "Get career guidance, interview preparation and soft skills training to grow faster.",
  },
  {
    icon: <HeadsetIcon />,
    color: "purple",
    title: "Lifetime Support",
    description:
      "Get lifetime access to resources and support even after course completion.",
  },
];
 
 
/* ---------------------------------------------
   Component
--------------------------------------------- */
const CourseHighlights = () => {
  return (
    <section className="cshl-section">
      <div className="cshl-glow cshl-glow-left" aria-hidden="true" />
      <div className="cshl-glow cshl-glow-right" aria-hidden="true" />
 
      <div className="cshl-container">
        <div className="cshl-header">
          <span className="cshl-eyebrow">
            <BadgeIcon />
            Course Highlights
          </span>
 
          <h2 className="cshl-heading">
            Why This Course <span className="cshl-heading-accent">Stands Out</span>
          </h2>
 
          <p className="cshl-subheading">
            Industry-focused curriculum designed to give you practical skills,
            real-world experience and career support.
          </p>

        </div>
 
        <div className="cshl-grid">
          {highlights.map((item, index) => (
            <div className="cshl-card" key={index}>
              <div className={`cshl-icon-circle cshl-icon-${item.color}`}>
                {item.icon}
              </div>
              <h3 className="cshl-card-title">{item.title}</h3>
              <span className={`cshl-underline cshl-underline-${item.color}`} />
              <p className="cshl-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};
 
export default CourseHighlights;