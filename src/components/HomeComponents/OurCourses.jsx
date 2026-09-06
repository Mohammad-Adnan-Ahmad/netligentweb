import { useState } from "react";
import "../../CSS/OurCourses.css";
import { BriefcaseIcon, CodeIcon, PeopleIcon, CertIcon, ChartIcon, DataSciIllus, BrainIconIllus, CyberIllus, FullStackIllus, DevOpsIllus, AwsIllus, CCNAIllus, PythonIcon, CyberSecurityIcon, JavaIcon } from "../Icons/Icons";
import { LuChartNoAxesCombined, LuCode } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";


/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const PILLS = [
  { Icon: BriefcaseIcon, text: "Industry Relevant\nSyllabus" },
  { Icon: CodeIcon, text: "Hands-on\nProjects" },
  { Icon: PeopleIcon, text: "Mentor-led\nTraining" },
  { Icon: CertIcon, text: "Certification\nPrograms" },
  { Icon: ChartIcon, text: "Placement\nAssistance" },
];

const COURSES = [
  {
    color: "green",
    Illus: LuChartNoAxesCombined,
    slug: "data-analytics-course-in-bhopal",
    circleIcon: "AI",
    title: "Data Analytics",
    desc: "Turn raw data into powerful insights that drive smarter business decisions.",
    bullets: ["Python, Pandas, NumPy", "Data Cleaning & Data Visualization", "Excel, SQL & Advanced Analytics", " Power BI & Dashboard Creation"],
    duration: "5 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "blue",
    Illus: DataSciIllus,
    slug: "data-science-course-in-bhopal",
    circleIcon: "AI",
    title: "Data Science with Gen AI",
    desc: "Analyze data and build intelligent models that make an impact.",
    bullets: ["Python, Pandas, NumPy", "Machine Learning Algorithms", "Data Visualization", " Power BI & Dashboard Creation"],
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "green",
    Illus: BrainIconIllus,
    slug: 'ai-ml-course-in-bhopal',
    circleIcon: "AI",
    title: "AI & ML Fundamentals",
    desc: "Build intelligent systems that learn, adapt, and shape the future.",
    bullets: ["Python, NumPy & Scikit-learn", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "NLP & Real-world AI Projects"],
    duration: "8 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "blue",
    Illus: CyberIllus ,
    slug: 'cyber-security-course-in-bhopal',
    circleIcon: "AI",
    title: "Professional Certificate in Cyber Security",
    desc: "Learn to protect systems, networks and data from cyber threats.",
    bullets: ["Networking, Network Security", "CCNA, Linux", "Windows Server", "Offensive Security with Kaali Linux"],
    duration: "8 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "green",
    Illus: CyberSecurityIcon,
    slug: 'professional-cyber-security-course-in-bhopal',
    circleIcon: "AI",
    title: "Masters Diploma in Cyber Defense & DevSecOps",
    desc: "Master Cyber Defense. Automate Security. Protect Modern Infrastructure.",
    bullets: ["Networking, Windows Server, CCNA", "Linux, Kaali Linux, Cloud Security", "DevOps & DevSecOps Integration", "Digital Cyberforensics, Mobile & Wireless Security"],
    duration: "12 Months",
    level: "Beginner to Advanced",
  },

  {
    color: "blue",
    Illus: PythonIcon,
    slug: 'python-full-stack-developer-course-in-bhopal',
    circleIcon: "AI",
    title: "Python Full Stack Web Development",
    desc: "From Beginner to Full Stack Developer. Build Modern Web Applications.",
    bullets: ["HTML, CSS, JavaScript, React, GSAP", "Core Python & OOP, MySQL", "Django, FastAPI", "REST APIs & Deployment"],
    duration: "8 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "green",
    Illus: JavaIcon,
    slug: 'java-full-stack-developer-course-in-bhopal',
    circleIcon: "AI",
    title: "Java Full Stack Web Development",
    desc: "Become an Enterprise Full Stack Developer. Code. Build. Deploy.",
    bullets: ["HTML, CSS, JavaScript, React, GSAP", "Core Java & OOP, MySQL", "Spring Boot & Hibernate", "REST APIs & Deployment"],

    duration: "8 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "blue",
    Illus: DevOpsIllus,
    slug : "devops-training-in-bhopal",
    circleIcon: "AI",
    title: "AWS DevOps",
    desc: "Deploy faster, scale smarter, and automate everything in the cloud.",
    bullets: ["AWS (EC2, S3, Lambda, IAM)", "CI/CD Pipelines & Automation", "Docker, Kubernetes, Version Control", "Infrastructure as Code (Terraform)"],
    duration: "6 Months",
    level: "Beginner to Advanced",
  },

];



/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function OurCourses({ badge }) {
  const [activeCard, setActiveCard] = useState(null);


  return (
    <section className="cs-section">

      {/* ══ HEADER ══ */}
      <div className="cs-header">

        {/* Pill tag */}
        <div className="cs-tag">
          <span style={{ fontSize: 16 }}>🎓</span>
          {badge}
        </div>

        {/* Title with sparks */}
        <div className="cs-title-wrap">
          <h2>
            <span className="cs-title">AI Powered</span><br />
            <span className="cs-title cs-title-gradient"> Industry Ready Courses</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="cs-subtitle">
          Curated by industry experts. Designed for{" "}
          <span className="cs-sub-blue">real world.</span>{" "}
          Built for{" "}
          <span className="cs-sub-purple">your success.</span>
        </p>
      </div>

      {/* ══ FEATURE PILLS ══ */}
      <div className="cs-pills">
        {PILLS.map((p, i) => (
          <div key={i} className="cs-pill">
            <div className="cs-pill-icon"><p.Icon /></div>
            <div className="cs-pill-text">
              {p.text.split("\n").map((l, j) => (
                <span key={j} style={{ display: "block" }}>{l}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ══ COURSE CARDS ══ */}
      <div className="cs-cards-area">
        <div className="cs-cards">
          {COURSES.map((c, i) => (
            <Link to={`/our-courses/${c.slug}`} key={i}>
              <div
                key={i}
                className={`css-card ${c.color}`}
                onClick={() => setActiveCard(i)}
              >
                {/* POPULAR badge */}
                <div className="cs-popular">Popular</div>

                {/* Illustration area */}
                <div className={`css-card-icon-area ${c.color}`}>
                  <div className={`cs-illus-wrap ${c.color}`}>
                    <c.Illus className='css-card-illus' />
                  </div>
                  <div className="css-card-circle-icon">{c.circleIcon}</div>
                </div>

                {/* Body */}
                <div className="css-card-body">
                  <div className="css-card-title">{c.title}</div>
                  <div className="css-card-desc">{c.desc}</div>

                  <ul className="css-card-list">
                    {c.bullets.map((b, j) => (
                      <li key={j}>
                        <span className="cs-bullet-dot" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="css-card-footer">
                    <div className="cs-footer-item">
                      <span className="cs-footer-icon">⏱</span>
                      <span className={`cs-footer-duration`}>{c.duration}</span>
                    </div>
                    <div className="cs-footer-item">
                      <span className="cs-footer-icon">📊</span>
                      {c.level}
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>

      {/* ══ BOTTOM ROW ══ */}
      <div className="cs-bottom">

        {/* Left text */}
        <div>
          <div className="cs-more-title">
            More Courses.<br />
            More <span className="cs-more-accent">Opportunities.</span>
          </div>
          <p className="cs-more-body">
            Explore our wide range of career-focused
            courses and kickstart your IT journey.
          </p>
        </div>



        {/* Right CTA */}
        <div className="cs-cta-block">
          <div className="cs-cta-hint">
            Don't see what you're<br />looking for?
          </div>
          <Link to="our-courses">
            <button className="cs-view-btn">
              View All Courses
              <span className="cs-view-btn-icon">›</span>
            </button>
          </Link>

        </div>
      </div>

      {/* ══ FOOTER BAR ══ */}
      <div className="cs-footer-bar">
        <div className="cs-footer-rocket">🚀</div>
        <p className="cs-footer-text">
          Industry-focused. Skills-first. Placement-driven.
          {" "}That's the{" "}
          <span className="cs-footer-brand">Netligent Way.</span>
        </p>
      </div>

    </section>
  );
}