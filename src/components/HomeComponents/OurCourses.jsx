import { useState } from "react";
import "../../CSS/OurCourses.css";
import { BriefcaseIcon, CodeIcon, PeopleIcon, CertIcon, ChartIcon, DataSciIllus, BrainIconIllus, CyberIllus, FullStackIllus, DevOpsIllus, AwsIllus, CCNAIllus} from "../Icons/Icons";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";


/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const PILLS = [
  { Icon: BriefcaseIcon, text: "Industry Relevant\nSyllabus"     },
  { Icon: CodeIcon,      text: "Hands-on\nProjects"              },
  { Icon: PeopleIcon,    text: "Mentor-led\nTraining"            },
  { Icon: CertIcon,      text: "Certification\nPrograms"         },
  { Icon: ChartIcon,     text: "Placement\nAssistance"           },
];

const COURSES = [
   {
    color: "green",
    Illus: LuChartNoAxesCombined,
    circleIcon: "AI",
    title: "Data Analytics",
    desc: "Turn raw data into powerful insights that drive smarter business decisions.",
    bullets: ["Python, Pandas, NumPy", "Data Cleaning & Data Visualization","Excel, SQL & Advanced Analytics"," Power BI & Dashboard Creation"],
    duration: "5 Months",
    level: "Beginner to Advanced",
  },
   {
    color: "blue",
    Illus: DataSciIllus,
    circleIcon: "AI",
    title: "Data Science & AI/ML",
    desc: "Analyze data and build intelligent models that make an impact.",
    bullets: ["Python, Pandas, NumPy", "Machine Learning Algorithms", "Data Visualization"," Power BI & Dashboard Creation"],
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
   {
    color: "green",
    Illus: BrainIconIllus,
    circleIcon: "AI",
    title: "Artificial Intelligence & Machine Learning",
    desc: "Build intelligent systems that learn, adapt, and shape the future.",
    bullets: ["Python, NumPy & Scikit-learn", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "NLP & Real-world AI Projects"],
    duration: "8 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "blue",
    Illus: CyberIllus,
    circleIcon: "AI",
    title: "Cyber Security Essentials",
    desc: "Learn to protect systems, networks and data from cyber threats.",
    bullets: ["VAPT, Cloud Security, Network Security", "SOC, Digital Cyberforensics", "Mobile & Wireless Security, DevSecOps", "Offensive Security, Web App Testing"],
    duration: "8 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "green",
    Illus: FullStackIllus,
    circleIcon: "AI",
    title: "Full Stack Development",
    desc: "Master frontend and backend development with real-world projects.",
    bullets: ["HTML, CSS, JavaScript, React, GSAP", "Node.js, Express, Java, Python", "MongoDB, MySql", "Django, Spring Boot"],
    duration: "8 Months",
    level: "Beginner to Advanced",
  },
   {
    color: "blue",
    Illus: DevOpsIllus,
    circleIcon: "AI",
    title: "AWS DevOps",
    desc: "Deploy faster, scale smarter, and automate everything in the cloud.",
    bullets: ["AWS (EC2, S3, Lambda, IAM)", "CI/CD Pipelines & Automation", "Docker, Kubernetes, Version Control", "Infrastructure as Code (Terraform)"],
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "green",
    Illus: AwsIllus,
    circleIcon: "AI",
    title: "Cloud Computing (AWS)",
    desc: "Build, deploy and manage scalable applications in the cloud.",
    bullets: ["AWS Core Services", "EC2, S3, Lambda, RDS", "VPC", "Real-time Cloud Projects"],
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
  {
    color: "blue",
    Illus: CCNAIllus,
    circleIcon: "AI",
    title: "CCNA & CCNP",
    desc: "Design, secure, and manage modern networks with confidence.",
    bullets: ["Networking Fundamentals & OSI Model", "Routing & Switching (Cisco)", "Network Security & Troubleshooting", "Enterprise Networking Concepts"],
    duration: "3 Months",
    level: "Beginner to Advanced",
  },
];



/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function OurCourses() {
  const [activeCard, setActiveCard] = useState(null);
  

  return (
    <section className="cs-section">

      {/* ══ HEADER ══ */}
      <div className="cs-header">

        {/* Pill tag */}
        <div className="cs-tag">
          <span style={{ fontSize: 16 }}>🎓</span>
          Learn. Practice. Get Hired.
        </div>

        {/* Title with sparks */}
        <div className="cs-title-wrap">
         

          <h2>
          
            <span className="cs-title">AI Powered</span>
            <span className="cs-title cs-title-gradient"> Industry Ready Courses</span>
          </h2>
          <div className="cs-title-underline"/>
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
            <div
              key={i}
              className={`cs-card ${c.color}`}
              onClick={() => setActiveCard(i)}
            >
              {/* POPULAR badge */}
              <div className="cs-popular">Popular</div>

              {/* Illustration area */}
              <div className={`cs-card-icon-area ${c.color}`}>
                <div className={`cs-illus-wrap ${c.color}`}>
                  <c.Illus className='cs-card-illus'/>
                </div>
                <div className="cs-card-circle-icon">{c.circleIcon}</div>
              </div>

              {/* Body */}
              <div className="cs-card-body">
                <div className="cs-card-title">{c.title}</div>
                <div className="cs-card-desc">{c.desc}</div>

                <ul className="cs-card-list">
                  {c.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="cs-bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="cs-card-footer">
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
          <button className="cs-view-btn">
            View All Courses
            <span className="cs-view-btn-icon">›</span>
          </button>
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