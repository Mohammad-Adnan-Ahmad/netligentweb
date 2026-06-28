import React from "react";
import "../../CSS/About/OurTeam.css"

const teamMembers = [
  {
    name: "Sujeet Jaiswal",
    title: "Managing Director",
    titleColor: "blue",
    experience: "6+ Years",
    studentsTrained: "5000+",
    role: "Overall leadership, strategic planning, and driving the vision of Netligent.",
    photo: "../../public/man.jfif",
    iconType: "person",
  },
  {
    name: "Vivek Kumar",
    title: "Director",
    titleColor: "blue",
    experience: "5+ Years",
    studentsTrained: "4000+",
    role: "Oversees operations, business development, and ensures quality delivery.",
      photo: "../../public/man.jfif",

    iconType: "chart",
  },
  {
    name: "Pooja Kumari",
    title: "HR Manager",
    titleColor: "blue",
    experience: "4+ Years",
    studentsTrained: "3000+",
    role: "Manages talent, builds a positive culture, and supports team growth.",
    photo: "../../public/man.jfif",

    iconType: "person",
  },
  {
    name: "Abhishek Kumar",
    title: "Web Developer",
    titleColor: "blue",
    experience: "4+ Years",
    studentsTrained: "3500+",
    role: "Leads web development projects and builds innovative digital solutions.",
    photo: "../../public/man.jfif",

    iconType: "code",
  },
];

/* ── SVG Icons ── */
const PersonIcon = () => (
  <svg
    style={{
      width: "300px",
      height: "300px",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
  >
    <defs>
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#64E5FF" />
        <stop offset="50%" stop-color="#3B82F6" />
        <stop offset="100%" stop-color="#8B5CF6" />
      </linearGradient>
    </defs>

    {/* <rect width="100" height="100" fill="#030712" rx="16" /> */}

    <rect
      x="15"
      y="15"
      width="70"
      height="70"
      rx="18"
      fill="none"
      stroke="url(#neonGradient)"
      stroke-width="2"
      opacity="0.8"
    />

    <g
      fill="none"
      stroke="url(#neonGradient)"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="50" cy="40" r="8" />
      <path d="M36 63 c0-6 4-10 14-10 s14 4 14 10" />

      <path d="M37 36 a 6 6 0 1 0 -2 11" opacity="0.7" />
      <path d="M26 60 c0-4 3-7 8-8" opacity="0.7" />

      <path d="M63 36 a 6 6 0 1 1 2 11" opacity="0.7" />
      <path d="M74 60 c0-4-3-7-8-8" opacity="0.7" />
    </g>
  </svg>
);

const ChartIcon = () => (
  <svg
    style={{
      width: "300px",
      height: "300px",
    }}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="purpleGrad" x1="0" y1="0" x2="120" y2="120">
        <stop offset="0%" stop-color="#D946EF" />
        <stop offset="100%" stop-color="#7C3AED" />
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect
      x="18"
      y="18"
      width="84"
      height="84"
      rx="14"
      stroke="url(#purpleGrad)"
      stroke-width="2"
      filter="url(#glow)"
    />

    <rect
      x="36"
      y="64"
      width="8"
      height="16"
      stroke="url(#purpleGrad)"
      stroke-width="2"
    />

    <rect
      x="50"
      y="56"
      width="8"
      height="24"
      stroke="url(#purpleGrad)"
      stroke-width="2"
    />

    <rect
      x="64"
      y="48"
      width="8"
      height="32"
      stroke="url(#purpleGrad)"
      stroke-width="2"
    />

    <rect
      x="78"
      y="40"
      width="8"
      height="40"
      stroke="url(#purpleGrad)"
      stroke-width="2"
    />

    <path
      d="M38 48 L54 36 L66 44 L84 28"
      stroke="url(#purpleGrad)"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      filter="url(#glow)"
    />

    <path
      d="M78 28H84V34"
      stroke="url(#purpleGrad)"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
        stroke="#ec4899"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </g>
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GradCapIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
    <polyline points="7 11.5 7 17.5 12 20.5 17 17.5 17 11.5" />
  </svg>
);

const TeamIconLarge = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const getRoleIcon = (type) => {
  if (type === "chart") return <ChartIcon />;
  if (type === "code") return <CodeIcon />;
  return <PersonIcon />;
};

const getCardTopIcon = (type) => {
  if (type === "chart") return <ChartIcon />;
  if (type === "code") return <CodeIcon />;
  return <PersonIcon />;
};

export default function OurTeam() {
  return (
    <section className="ot-section">
      <div className="main_image">
        <img src="./about_background.png" alt="" />
        <div></div>
      </div>

      {/* ── Decorative corner glows ── */}
      <div className="ot-glow ot-glow--tl" />
      <div className="ot-glow ot-glow--br" />

      <div className="ot-container">
        {/* ── Badge ── */}
        <div className="ot-badge">
          <span className="ot-badge__icon">
            <TeamIconLarge />
          </span>
          OUR TEAM
        </div>

        {/* ── Heading ── */}
        <h2 className="ot-heading">
          <svg
            width="200"
            height="60"
            viewBox="0 0 680 60"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Neon light streak line</title>
            <defs>
              <filter id="blur1">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
              <filter id="blur4">
                <feGaussianBlur stdDeviation="4" />
              </filter>
              <filter id="blur10">
                <feGaussianBlur stdDeviation="10" />
              </filter>
              <linearGradient id="streakLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0010aa" stop-opacity="0" />
                <stop offset="60%" stop-color="#2244ff" stop-opacity="0.3" />
                <stop offset="85%" stop-color="#6688ff" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#aaccff" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient
                id="streakRight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
                <stop offset="20%" stop-color="#88aaff" stop-opacity="0.5" />
                <stop offset="60%" stop-color="#2244ff" stop-opacity="0.1" />
                <stop offset="100%" stop-color="#000088" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="thinLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0020cc" stop-opacity="0" />
                <stop offset="50%" stop-color="#88aaff" stop-opacity="0.6" />
                <stop offset="75%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="90%" stop-color="#aabbff" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#002288" stop-opacity="0" />
              </linearGradient>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="20%" stop-color="#a0c8ff" stop-opacity="0.95" />
                <stop offset="60%" stop-color="#3060ff" stop-opacity="0.5" />
                <stop offset="100%" stop-color="#0010aa" stop-opacity="0" />
              </radialGradient>
              <radialGradient id="outerHaze" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#2244cc" stop-opacity="0.4" />
                <stop offset="60%" stop-color="#1122aa" stop-opacity="0.1" />
                <stop offset="100%" stop-color="#000088" stop-opacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="428"
              cy="30"
              rx="200"
              ry="22"
              fill="#3355ff"
              opacity="0.15"
              filter="url(#blur10)"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="140"
              ry="14"
              fill="#4466ff"
              opacity="0.25"
              filter="url(#blur10)"
            />

            <rect
              x="40"
              y="27"
              width="388"
              height="6"
              rx="3"
              fill="url(#streakLeft)"
              filter="url(#blur4)"
              opacity="0.85"
            />
            <rect
              x="40"
              y="28.5"
              width="388"
              height="3"
              rx="1.5"
              fill="url(#streakLeft)"
              filter="url(#blur1)"
              opacity="0.95"
            />

            <rect
              x="428"
              y="27"
              width="200"
              height="6"
              rx="3"
              fill="url(#streakRight)"
              filter="url(#blur4)"
              opacity="0.85"
            />
            <rect
              x="428"
              y="28.5"
              width="200"
              height="3"
              rx="1.5"
              fill="url(#streakRight)"
              filter="url(#blur1)"
              opacity="0.95"
            />

            <rect
              x="40"
              y="29.2"
              width="588"
              height="1.6"
              rx="0.8"
              fill="url(#thinLine)"
              opacity="1"
            />

            <ellipse
              cx="428"
              cy="30"
              rx="18"
              ry="18"
              fill="url(#outerHaze)"
              filter="url(#blur10)"
              opacity="0.8"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="10"
              ry="10"
              fill="url(#coreGlow)"
              filter="url(#blur4)"
              opacity="0.95"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="5"
              ry="5"
              fill="#ddeeff"
              opacity="0.95"
              filter="url(#blur1)"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="2"
              ry="2"
              fill="#ffffff"
              opacity="1"
            />
          </svg>
          The Experts Behind{" "}
          <span className="ot-heading__brand">Netligent</span>
          <svg
            width="200"
            height="60"
            viewBox="0 0 680 60"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Neon light streak line</title>
            <defs>
              <filter id="blur1">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
              <filter id="blur4">
                <feGaussianBlur stdDeviation="4" />
              </filter>
              <filter id="blur10">
                <feGaussianBlur stdDeviation="10" />
              </filter>
              <linearGradient id="streakLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0010aa" stop-opacity="0" />
                <stop offset="60%" stop-color="#2244ff" stop-opacity="0.3" />
                <stop offset="85%" stop-color="#6688ff" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#aaccff" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient
                id="streakRight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
                <stop offset="20%" stop-color="#88aaff" stop-opacity="0.5" />
                <stop offset="60%" stop-color="#2244ff" stop-opacity="0.1" />
                <stop offset="100%" stop-color="#000088" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="thinLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0020cc" stop-opacity="0" />
                <stop offset="50%" stop-color="#88aaff" stop-opacity="0.6" />
                <stop offset="75%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="90%" stop-color="#aabbff" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#002288" stop-opacity="0" />
              </linearGradient>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="20%" stop-color="#a0c8ff" stop-opacity="0.95" />
                <stop offset="60%" stop-color="#3060ff" stop-opacity="0.5" />
                <stop offset="100%" stop-color="#0010aa" stop-opacity="0" />
              </radialGradient>
              <radialGradient id="outerHaze" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#2244cc" stop-opacity="0.4" />
                <stop offset="60%" stop-color="#1122aa" stop-opacity="0.1" />
                <stop offset="100%" stop-color="#000088" stop-opacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="428"
              cy="30"
              rx="200"
              ry="22"
              fill="#3355ff"
              opacity="0.15"
              filter="url(#blur10)"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="140"
              ry="14"
              fill="#4466ff"
              opacity="0.25"
              filter="url(#blur10)"
            />

            <rect
              x="40"
              y="27"
              width="388"
              height="6"
              rx="3"
              fill="url(#streakLeft)"
              filter="url(#blur4)"
              opacity="0.85"
            />
            <rect
              x="40"
              y="28.5"
              width="388"
              height="3"
              rx="1.5"
              fill="url(#streakLeft)"
              filter="url(#blur1)"
              opacity="0.95"
            />

            <rect
              x="428"
              y="27"
              width="200"
              height="6"
              rx="3"
              fill="url(#streakRight)"
              filter="url(#blur4)"
              opacity="0.85"
            />
            <rect
              x="428"
              y="28.5"
              width="200"
              height="3"
              rx="1.5"
              fill="url(#streakRight)"
              filter="url(#blur1)"
              opacity="0.95"
            />

            <rect
              x="40"
              y="29.2"
              width="588"
              height="1.6"
              rx="0.8"
              fill="url(#thinLine)"
              opacity="1"
            />

            <ellipse
              cx="428"
              cy="30"
              rx="18"
              ry="18"
              fill="url(#outerHaze)"
              filter="url(#blur10)"
              opacity="0.8"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="10"
              ry="10"
              fill="url(#coreGlow)"
              filter="url(#blur4)"
              opacity="0.95"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="5"
              ry="5"
              fill="#ddeeff"
              opacity="0.95"
              filter="url(#blur1)"
            />
            <ellipse
              cx="428"
              cy="30"
              rx="2"
              ry="2"
              fill="#ffffff"
              opacity="1"
            />
          </svg>
        </h2>

        <p className="ot-subheading">
          Experienced. Passionate. Committed to Your Success.
        </p>
        <div className="color_line"></div>
        {/* ── Cards grid ── */}
        <div className="corner_blue_line_left"></div>
        <div className="ot-grid">
          {teamMembers.map((member, i) => (
            <div className="ot-card" key={i}>
              {/* card top icon */}
              <div className="ot-card__top-icon">
                {getCardTopIcon(member.iconType)}
              </div>

              {/* photo */}
              <div className="ot-card__photo-wrap">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="ot-card__photo"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="ot-card__photo-fallback">
                  <PersonIcon />
                </div>
              </div>

              {/* name & title */}
              <h3 className="ot-card__name">{member.name}</h3>
              <p className="ot-card__title">{member.title}</p>

              {/* stats row */}
              <div className="ot-card__stats">
                <div className="ot-stat">
                  <span className="ot-stat__icon">
                    <BriefcaseIcon />
                  </span>
                  <div className="ot-stat__text">
                    <span className="ot-stat__label">Experience</span>
                    <span className="ot-stat__value">{member.experience}</span>
                  </div>
                </div>
                <div className="ot-stat">
                  <span className="ot-stat__icon">
                    <GradCapIcon />
                  </span>
                  <div className="ot-stat__text">
                    <span className="ot-stat__label">Students Trained</span>
                    <span className="ot-stat__value">
                      {member.studentsTrained}
                    </span>
                  </div>
                </div>
              </div>

              {/* role block */}
              <div className="ot-card__role-block">
                <span className="ot-card__role-icon">
                  {getRoleIcon(member.iconType)}
                </span>
                <div className="ot-card__role-text">
                  <span className="ot-card__role-label">Role</span>
                  <p className="ot-card__role-desc">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="pink-border">{/* <div class="pink-arc"></div> */}</div>
        {/* ── Footer banner ── */}
        <div className="ot-footer-banner">
          <div className="ot-footer-banner__icon">
            <TeamIconLarge />
          </div>
          <div className="straing-line"></div>
          <p className="ot-footer-banner__text">
            Together, we combine creativity, expertise, and dedication to
            empower{" "}
            <span className="ot-footer-banner__highlight">
              your future in technology.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
