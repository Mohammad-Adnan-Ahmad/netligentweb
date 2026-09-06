import { useState } from "react";
import "../../CSS/OurCourses/AllCourses.css";
import { BriefcaseIcon, CodeIcon, PeopleIcon, CertIcon, ChartIcon, DataSciIllus, BrainIconIllus, CyberIllus, FullStackIllus, DevOpsIllus, AwsIllus, CCNAIllus, CyberSecurityIcon, PythonIcon, JavaIcon, BackendIcon} from "../Icons/Icons";
import { LuChartNoAxesCombined, LuCode, LuFileCode } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { TbCloudComputingFilled } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";
/* ══════════════════════════════════════
   CATEGORY TABS DATA
══════════════════════════════════════ */
const CATEGORIES = [
  { key: "data",   icon: "📊",  label: "Data Program" },
  // { key: "aiml",    icon: "🧠",  label: "AI / ML" },
  { key: "cyber",   icon: "🛡️",  label: "Cyber Security" },
  { key: "web",     icon: "< >", label: "Web Development" },
  { key: "cloud",   icon: "☁️",  label: "Cloud Computing" },
  // { key: "others",  icon: "⊞",  label: "Others" },
];

/* ══════════════════════════════════════
   CATEGORY DETAIL + COURSE DATA
   Each course now uses the OurCourses card shape:
   color, illus (emoji/icon), circleIcon, title, desc, bullets[], duration, level
══════════════════════════════════════ */
const CATEGORY_DATA = {
  data: {
    title: "📊 Data Program Courses",
    
    desc: "Master data-driven skills and tools to analyze, visualize and make smarter business decisions.",
    count: "10+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      {
        color: "green",
        slug: "data-analytics-course-in-bhopal",
        illus: LuChartNoAxesCombined,
        circleIcon: "AI",
        title: "Data Analytics",
        desc: "Turn raw data into powerful insights that drive smarter business decisions.",
        bullets: ["Python, Pandas, NumPy", "Data Cleaning & Visualization", "Excel, SQL & Advanced Analytics", "Power BI & Dashboard Creation"],
        duration: "5 Months",
        level: "Beginner to Advanced",
      },
      // {
      //   color: "blue",
      //   slug: "Power BI",
      //   illus: "📈",
      //   circleIcon: "AI",
      //   title: "Power BI Data Visualization",
      //   desc: "Build interactive dashboards and bring your data to life.",
      //   bullets: ["Power Query & Data Modeling", "DAX Formulas", "Interactive Dashboards", "Real-world Business Reports"],
      //   duration: "3 Months",
      //   level: "Beginner to Advanced",
      // },
      // {
      //   color: "green",
      //   slug: "SQL",
      //   illus: "🗄️",
      //   circleIcon: "AI",
      //   title: "SQL for Data Analysis",
      //   desc: "Master SQL queries and database concepts for real-world analysis.",
      //   bullets: ["Joins, Subqueries & CTEs", "Window Functions", "Database Design", "Real-time Case Studies"],
      //   duration: "2 Months",
      //   level: "Beginner to Advanced",
      // },
      {
        color: "blue",
        illus: DataSciIllus,
        slug: "data-science-course-in-bhopal",
        circleIcon: "AI",
        title: "Data Science with GenAI",
        desc: "Analyze data and build intelligent models that make an impact.",
        bullets: ["Python, Pandas, NumPy", "Machine Learning Algorithms", "Data Visualization", "Power BI & Dashboard Creation"],
        duration: "6 Months",
        level: "Beginner to Advanced",
      },
      {
        color: "green",
        illus: BrainIconIllus,
        slug : 'ai-ml-course-in-bhopal',
        circleIcon: "AI",
        title: "AI & ML Fundamentals",
        desc: "Build intelligent systems that learn, adapt, and shape the future.",
        bullets: ["Python, NumPy & Scikit-learn", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "NLP & Real-world AI Projects"],
        duration: "8 Months",
        level: "Beginner to Advanced",
      },
    ],
  },

  // aiml: {
  //   title: "🧠 AI / ML Courses",
  //   desc: "Build intelligent systems and AI-powered solutions with hands-on machine learning training.",
  //   count: "15+ Courses",
  //   countLabel: "Curated for your growth",
  //   countIcon: "🎓",
  //   courses: [
  //     {
  //       color: "green",
  //       illus: "🧠",
  //       circleIcon: "AI",
  //       title: "Artificial Intelligence & Machine Learning",
  //       desc: "Build intelligent systems that learn, adapt, and shape the future.",
  //       bullets: ["Python, NumPy & Scikit-learn", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "NLP & Real-world AI Projects"],
  //       duration: "8 Months",
  //       level: "Beginner to Advanced",
  //     },
  //     {
  //       color: "blue",
  //       illus: "🤖",
  //       circleIcon: "AI",
  //       title: "Machine Learning Fundamentals",
  //       desc: "Learn supervised & unsupervised learning algorithms.",
  //       bullets: ["Regression & Classification", "Clustering Techniques", "Model Evaluation & Tuning", "End-to-End ML Projects"],
  //       duration: "4 Months",
  //       level: "Beginner to Advanced",
  //     },
  //     {
  //       color: "green",
  //       illus: "💬",
  //       circleIcon: "AI",
  //       title: "NLP & Generative AI",
  //       desc: "Master transformers, LLMs and generative AI tools.",
  //       bullets: ["Text Preprocessing & Embeddings", "Transformers & Attention", "LLMs & Prompt Engineering", "Generative AI Projects"],
  //       duration: "3 Months",
  //       level: "Advanced",
  //     },
  //     {
  //       color: "blue",
  //       illus: "👁️",
  //       circleIcon: "AI",
  //       title: "Computer Vision",
  //       desc: "Image recognition, OpenCV and YOLO based projects.",
  //       bullets: ["Image Processing with OpenCV", "CNNs & Object Detection", "YOLO & Real-time Detection", "Computer Vision Projects"],
  //       duration: "3 Months",
  //       level: "Intermediate to Advanced",
  //     },
  //   ],
  // },

  cyber: {
    title: "🛡️ Cyber Security Courses",
    desc: "Protect systems, networks and data with hands-on ethical hacking and security training.",
    count: "12+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      {
        color: "green",
        illus: CyberSecurityIcon,
        slug : 'cyber-security-course-in-bhopal',
        circleIcon: "AI",
        title: "Professional Certificate in Cyber Security",
        desc: "Learn to protect systems, networks and data from cyber threats.",
        bullets: ["Networking, Network Security", "CCNA, Linux", "Windows Server", "Offensive Security with Kaali Linux"],
        duration: "8 Months",
        level: "Beginner to Advanced",
      },
      {
        color: "blue",
        illus: CyberIllus,
        slug : 'professional-cyber-security-course-in-bhopal',
        circleIcon: "AI",
        title: "Masters Diploma in Cyber Defense & DevSecOps",
        desc: "Master Cyber Defense. Automate Security. Protect Modern Infrastructure.",
        bullets: ["Networking, Windows Server, CCNA", "Linux, Kaali Linux, Cloud Security", "DevOps & DevSecOps Integration", "Digital Cyberforensics, Mobile & Wireless Security"],
        duration: "12 Months",
        level: "Beginner to Advanced",
      },
    ],
  },

  web: {
    title: "</> Web Development Courses",
    desc: "Build modern, responsive web applications with the most in-demand frontend & backend stacks.",
    count: "25+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      {
        color: "green",
        illus: PythonIcon,
        slug : 'python-full-stack-developer-course-in-bhopal',
        circleIcon: "AI",
        title: "Python Full Stack Web Development",
        desc: "From Beginner to Full Stack Developer. Build Modern Web Applications.",
        bullets: ["HTML, CSS, JavaScript, React, GSAP", "Core Python & OOP, MySQL", "Django, FastAPI", "REST APIs & Deployment"],
        duration: "8 Months",
        level: "Beginner to Advanced",
      },
       {
        color: "blue",
        illus: JavaIcon,
        slug : 'java-full-stack-developer-course-in-bhopal',
        circleIcon: "AI",
        title: "Java Full Stack Web Development",
        desc: "Become an Enterprise Full Stack Developer. Code. Build. Deploy.",
        bullets: ["HTML, CSS, JavaScript, React, GSAP","Core Java & OOP, MySQL", "Spring Boot & Hibernate", "REST APIs & Deployment"],
        duration: "6 Months",
        level: "Beginner to Advanced",
      },
      {
        color: "green",
        illus: FaLaptopCode,
        slug : 'frontend-developer-course-in-bhopal',
        circleIcon: "AI",
        title: "Front-End Development with AI",
        desc: "Design Beautiful Interfaces. Create Amazing User Experiences.",
        bullets: ["HTML5, CSS3, Tailwind", "JavaScript, GSAP, Fetch API", "React, Next.js, Framer Motion", "Responsive Web Design"],
        duration: "5 Months",
        level: "Beginner to Advanced",
      },
          {
        color: "blue",
        illus: BackendIcon,
        slug : 'backend-developer-course-in-bhopal',
        circleIcon: "AI",
        title: "Back-End Development with AI",
        desc: "Power the Web with Scalable Servers and APIs.",
        bullets: ["Python / Java", "MySQL", "Django / Spring Boot", "Rest API"],
        duration: "6 Months",
        level: "Beginner to Advanced",
      },
    ],
  },

  cloud: {
    title: "☁️ Cloud Computing Courses",
    desc: "Master cloud platforms and DevOps tools to design, deploy and scale modern infrastructure.",
    count: "18+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      {
        color: "green",
        illus: TbCloudComputingFilled,
        slug : 'aws-training-in-bhopal',
        circleIcon: "AI",
        title: "Cloud Computing (AWS)",
        desc: "Build, deploy and manage scalable applications in the cloud.",
        bullets: ["AWS Core Services", "EC2, S3, Lambda, RDS", "VPC", "Real-time Cloud Projects"],
        duration: "6 Months",
        level: "Beginner to Advanced",
      },
      {
        color: "blue",
        illus: DevOpsIllus,
        slug : "devops-training-in-bhopal",
        circleIcon: "AI",
        title: "AWS DevOps",
        desc: "Deploy faster, scale smarter, and automate everything in the cloud.",
        bullets: ["AWS (EC2, S3, Lambda, IAM)", "CI/CD Pipelines & Automation", "Docker, Kubernetes, Version Control", "Infrastructure as Code (Terraform)"],
        duration: "6 Months",
        level: "Beginner to Advanced",
      },
    ],
  },

  // others: {
  //   title: "⊞ Other Popular Courses",
  //   desc: "Explore additional career-focused programs across testing, mobile and project management.",
  //   count: "10+ Courses",
  //   countLabel: "Curated for your growth",
  //   countIcon: "🎓",
  //   courses: [
  //     {
  //       color: "green",
  //       // illus: "☕",
  //       circleIcon: "AI",
  //       title: "Java Full Stack Development",
  //       desc: "Spring Boot, Hibernate and microservices architecture.",
  //       bullets: ["Core Java & OOP", "Spring Boot & Hibernate", "Microservices Architecture", "REST APIs & Deployment"],
  //       duration: "6 Months",
  //       level: "Beginner to Advanced",
  //     },
  //     {
  //       color: "blue",
  //       // illus: "🧪",
  //       circleIcon: "AI",
  //       title: "Software Testing (Manual + Automation)",
  //       desc: "Selenium, JIRA and end-to-end QA workflows.",
  //       bullets: ["Manual Testing Fundamentals", "Selenium Automation", "JIRA & Bug Tracking", "End-to-End QA Workflows"],
  //       duration: "3 Months",
  //       level: "Beginner to Advanced",
  //     },
  //     {
  //       color: "green",
  //       // illus: "📱",
  //       circleIcon: "AI",
  //       title: "Mobile App Development (React Native)",
  //       desc: "Build cross-platform iOS & Android apps.",
  //       bullets: ["React Native Fundamentals", "Navigation & State Management", "Native Modules & APIs", "App Store Deployment"],
  //       duration: "4 Months",
  //       level: "Intermediate",
  //     },
  //     {
  //       color: "blue",
  //       // illus: "📋",
  //       circleIcon: "AI",
  //       title: "Agile & Scrum Management",
  //       desc: "JIRA, sprints and modern project management.",
  //       bullets: ["Agile Principles & Scrum Framework", "Sprint Planning", "JIRA Hands-on", "Real-world PM Scenarios"],
  //       duration: "1.5 Months",
  //       level: "Beginner to Advanced",
  //     },
  //   ],
  // },
};

/* ══════════════════════════════════════
   BOTTOM FEATURES STRIP DATA
══════════════════════════════════════ */
const FEATURES = [
  { icon: "📖", title: "Hands-on Projects",    body: "Work on real-world industry projects" },
  { icon: "👥", title: "Expert Instructors",   body: "Learn from industry professionals" },
  { icon: "📋", title: "Industry Certificate", body: "Earn recognized certification" },
  { icon: "💼", title: "Placement Support",    body: "Get career guidance & placement assistance" },
  { icon: "🔄", title: "Lifetime Access",      body: "Learn at your own pace with lifetime access" },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function AllCourses() {
  const [activeTab, setActiveTab]   = useState("data");
  const [activeCard, setActiveCard] = useState(null);
  const data = CATEGORY_DATA[activeTab];

  return (
    <section className="cp-section" id="course-section">

      {/* ══ HEADER ══ */}
      <div className="cp-header">
        <div className="cp-tag">
          <span className="cp-tag-star">✦</span>
          <span className="cp-tag-text">
            Future-Ready Courses.
          </span>
        </div>

        <h1 className="cp-title">
          AI Powered{" "}
          <span className="cp-title-grad">Industry Ready Courses</span>
        </h1>
       

        <p className="cp-subtitle">
          Choose from our wide range of{" "}
          <span className="cp-subtitle-accent">industry-focused</span>{" "}
          programs and start your journey to success today.
        </p>
      </div>

      {/* ══ CATEGORY TABS ══ */}
      <div className="cp-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            className={`cp-tab ${activeTab === c.key ? "active" : ""}`}
            onClick={() => setActiveTab(c.key)}
          >
            <span className="cp-tab-icon">{c.icon}</span>
            {c.label}
          </button>
        ))}
      </div>

      {/* ══ CATEGORY DETAIL ROW ══ */}
      <div className="cp-detail-row">
        <div className="cp-detail-left">
          <div className="cp-detail-title">
            {data.title}
          </div>
          <p className="cp-detail-desc">{data.desc}</p>
        </div>

        <div className="cp-detail-right">
          <div className="cp-count-block">
            <div className="cp-count-icon">{data.countIcon}</div>
            <div>
              <div className="cp-count-num">{data.count}</div>
              <div className="cp-count-label">{data.countLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ COURSE CARDS — styled exactly like OurCourses .cs-card ══ */}
      <div className="cp-cards">
        {data.courses.map((c, i) => (
          <Link to={`/our-courses/${c.slug}`}  key={i}>
              <div
           
            className={`cp-card ${c.color}`}
            onClick={() => setActiveCard(i)}
          >
            {/* POPULAR badge */}
            <div className="cp-card-popular">Popular</div>

            {/* Illustration area */}
            <div className={`cp-card-icon-area ${c.color}`}>
              <div className={`cp-card-illus-wrap ${c.color}`}>
                <c.illus className='css-card-illus' />
              </div>
              <div className="cp-card-circle-icon">{c.circleIcon}</div>
            </div>

            {/* Body */}
            <div className="cp-card-body">
              <div className="cp-card-title">{c.title}</div>
              <div className="cp-card-desc">{c.desc}</div>

              <ul className="cp-card-list">
                {c.bullets.map((b, j) => (
                  <li key={j}>
                    <span className="cp-bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="cp-card-footer">
                <div className="cp-footer-item">
                  <span className="cp-footer-icon">⏱</span>
                  <span className="cp-footer-duration">{c.duration}</span>
                </div>
                <div className="cp-footer-item">
                  <span className="cp-footer-icon">📊</span>
                  {c.level}
                </div>
              </div>
            </div>
          </div>
          </Link>
        
        ))}
      </div>

      {/* ══ BOTTOM FEATURES STRIP ══ */}
      <div className="cp-features-strip">
        {FEATURES.map((f, i) => (
          <div key={i} className="cp-feature">
            <div className="cp-feature-icon">{f.icon}</div>
            <div>
              <div className="cp-feature-title">{f.title}</div>
              <div className="cp-feature-body">{f.body}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}