import { useState } from "react";
import "../../CSS/OurCourses/AllCourses.css";

/* ══════════════════════════════════════
   CATEGORY TABS DATA
══════════════════════════════════════ */
const CATEGORIES = [
  { key: "data",    icon: "📊", label: "Data Program" },
  { key: "aiml",     icon: "🧠", label: "AI / ML" },
  { key: "cyber",    icon: "🛡️", label: "Cyber Security" },
  { key: "web",      icon: "</>", label: "Web Development" },
  { key: "cloud",    icon: "☁️", label: "Cloud Computing" },
  { key: "others",   icon: "⊞", label: "Others" },
];

/* ══════════════════════════════════════
   CATEGORY DETAIL + COURSE DATA
══════════════════════════════════════ */
const CATEGORY_DATA = {
  data: {
    title: "Data Program Courses",
    desc: "Master data-driven skills and tools to analyze, visualize and make smarter business decisions.",
    count: "20+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      {
        color: "blue",
        illus: "📊",
        badge: "🔥 Popular",
        icon: "📊",
        title: "Data Analytics",
        titleLine2: "with Excel & SQL",
        desc: "Learn Excel, SQL and data analysis from basics to advanced level.",
        level: "Beginner to Advanced",
        duration: "12 Weeks",
        modules: "12 Modules",
        rating: "4.8 (2.4K)",
      },
      {
        color: "purple",
        illus: "📈",
        badge: "🔥 Popular",
        icon: "📈",
        title: "Power BI",
        titleLine2: "Data Visualization",
        desc: "Build interactive dashboards and bring your data to life.",
        level: "Beginner to Advanced",
        duration: "10 Weeks",
        modules: "10 Modules",
        rating: "4.9 (1.8K)",
      },
      {
        color: "green",
        illus: "🗄️",
        badge: "↗ Trending",
        icon: "🗄️",
        title: "SQL for Data",
        titleLine2: "Analysis",
        desc: "Master SQL queries and database concepts for real-world analysis.",
        level: "Beginner to Advanced",
        duration: "8 Weeks",
        modules: "8 Modules",
        rating: "4.7 (1.3K)",
      },
      {
        color: "orange",
        illus: "🐍",
        badge: "🔥 Popular",
        icon: "🐍",
        title: "Data Science",
        titleLine2: "with Python",
        desc: "Learn Python, statistics and machine learning for data science.",
        level: "Intermediate to Advanced",
        duration: "16 Weeks",
        modules: "16 Modules",
        rating: "4.8 (2.1K)",
      },
    ],
  },

  aiml: {
    title: "AI / ML Courses",
    desc: "Build intelligent systems and AI-powered solutions with hands-on machine learning training.",
    count: "15+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      { color: "blue",   illus: "🤖", badge: "🔥 Popular",  icon: "🤖", title: "Machine Learning", titleLine2: "Fundamentals", desc: "Learn supervised & unsupervised learning algorithms.", level: "Beginner to Advanced", duration: "14 Weeks", modules: "14 Modules", rating: "4.8 (1.6K)" },
      { color: "purple", illus: "🧠", badge: "↗ Trending",  icon: "🧠", title: "Deep Learning",     titleLine2: "with PyTorch", desc: "Build neural networks for real-world AI applications.", level: "Intermediate to Advanced", duration: "16 Weeks", modules: "16 Modules", rating: "4.9 (1.2K)" },
      { color: "green",  illus: "💬", badge: "🔥 Popular",  icon: "💬", title: "NLP &",             titleLine2: "Generative AI", desc: "Master transformers, LLMs and generative AI tools.", level: "Advanced", duration: "12 Weeks", modules: "12 Modules", rating: "4.7 (980)" },
      { color: "orange", illus: "👁️", badge: "🔥 Popular",  icon: "👁️", title: "Computer",          titleLine2: "Vision", desc: "Image recognition, OpenCV and YOLO based projects.", level: "Intermediate to Advanced", duration: "10 Weeks", modules: "10 Modules", rating: "4.8 (870)" },
    ],
  },

  cyber: {
    title: "Cyber Security Courses",
    desc: "Protect systems, networks and data with hands-on ethical hacking and security training.",
    count: "12+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      { color: "blue",   illus: "🔐", badge: "🔥 Popular",  icon: "🔐", title: "Ethical Hacking",   titleLine2: "Fundamentals", desc: "Learn penetration testing with Kali Linux & Metasploit.", level: "Beginner to Advanced", duration: "12 Weeks", modules: "12 Modules", rating: "4.8 (1.4K)" },
      { color: "purple", illus: "🛰️", badge: "↗ Trending",  icon: "🛰️", title: "Network",          titleLine2: "Security", desc: "Firewalls, IDS/IPS and secure network architecture.", level: "Intermediate", duration: "10 Weeks", modules: "10 Modules", rating: "4.7 (1.0K)" },
      { color: "green",  illus: "🕵️", badge: "🔥 Popular",  icon: "🕵️", title: "SOC &",            titleLine2: "Threat Hunting", desc: "Splunk, QRadar and real-time incident response.", level: "Advanced", duration: "14 Weeks", modules: "14 Modules", rating: "4.8 (760)" },
      { color: "orange", illus: "🔒", badge: "🔥 Popular",  icon: "🔒", title: "Application",       titleLine2: "Security (VAPT)", desc: "OWASP top 10 & vulnerability assessment basics.", level: "Beginner to Advanced", duration: "8 Weeks", modules: "8 Modules", rating: "4.6 (650)" },
    ],
  },

  web: {
    title: "Web Development Courses",
    desc: "Build modern, responsive web applications with the most in-demand frontend & backend stacks.",
    count: "25+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      { color: "blue",   illus: "⚛️", badge: "🔥 Popular",  icon: "⚛️", title: "Full Stack",        titleLine2: "MERN Development", desc: "MongoDB, Express, React and Node.js from scratch.", level: "Beginner to Advanced", duration: "16 Weeks", modules: "16 Modules", rating: "4.9 (2.6K)" },
      { color: "purple", illus: "▲", badge: "↗ Trending",  icon: "▲",  title: "React &",           titleLine2: "Next.js Mastery", desc: "Build production-grade apps with SSR & app router.", level: "Intermediate to Advanced", duration: "10 Weeks", modules: "10 Modules", rating: "4.8 (1.7K)" },
      { color: "green",  illus: "🟩", badge: "🔥 Popular",  icon: "🟩", title: "Node.js &",         titleLine2: "REST APIs", desc: "Build scalable backend services and REST APIs.", level: "Beginner to Advanced", duration: "8 Weeks", modules: "8 Modules", rating: "4.7 (1.3K)" },
      { color: "orange", illus: "🎨", badge: "🔥 Popular",  icon: "🎨", title: "UI/UX",             titleLine2: "Design with Figma", desc: "Design systems, prototyping and user research.", level: "Beginner to Advanced", duration: "8 Weeks", modules: "8 Modules", rating: "4.8 (1.1K)" },
    ],
  },

  cloud: {
    title: "Cloud Computing Courses",
    desc: "Master cloud platforms and DevOps tools to design, deploy and scale modern infrastructure.",
    count: "18+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      { color: "blue",   illus: "☁️", badge: "🔥 Popular",  icon: "☁️", title: "AWS Solutions",     titleLine2: "Architect", desc: "EC2, S3, Lambda, RDS and core AWS services.", level: "Beginner to Advanced", duration: "14 Weeks", modules: "14 Modules", rating: "4.9 (1.9K)" },
      { color: "purple", illus: "🔵", badge: "↗ Trending",  icon: "🔵", title: "Microsoft",         titleLine2: "Azure Fundamentals", desc: "AZ-900, AZ-104 certification-aligned training.", level: "Beginner to Advanced", duration: "10 Weeks", modules: "10 Modules", rating: "4.7 (1.1K)" },
      { color: "green",  illus: "⚙️", badge: "🔥 Popular",  icon: "⚙️", title: "DevOps &",          titleLine2: "CI/CD Pipelines", desc: "Docker, Jenkins, Kubernetes & GitHub Actions.", level: "Intermediate to Advanced", duration: "12 Weeks", modules: "12 Modules", rating: "4.8 (1.4K)" },
      { color: "orange", illus: "🏗️", badge: "🔥 Popular",  icon: "🏗️", title: "Kubernetes &",      titleLine2: "Container Orchestration", desc: "Pods, Helm charts and production-grade clusters.", level: "Advanced", duration: "8 Weeks", modules: "8 Modules", rating: "4.7 (820)" },
    ],
  },

  others: {
    title: "Other Popular Courses",
    desc: "Explore additional career-focused programs across testing, mobile and project management.",
    count: "10+ Courses",
    countLabel: "Curated for your growth",
    countIcon: "🎓",
    courses: [
      { color: "blue",   illus: "☕", badge: "🔥 Popular",  icon: "☕", title: "Java Full Stack",   titleLine2: "Development", desc: "Spring Boot, Hibernate and microservices architecture.", level: "Beginner to Advanced", duration: "16 Weeks", modules: "16 Modules", rating: "4.8 (1.5K)" },
      { color: "purple", illus: "🧪", badge: "↗ Trending",  icon: "🧪", title: "Software Testing", titleLine2: "(Manual + Automation)", desc: "Selenium, JIRA and end-to-end QA workflows.", level: "Beginner to Advanced", duration: "10 Weeks", modules: "10 Modules", rating: "4.6 (980)" },
      { color: "green",  illus: "📱", badge: "🔥 Popular",  icon: "📱", title: "Mobile App",        titleLine2: "Development (React Native)", desc: "Build cross-platform iOS & Android apps.", level: "Intermediate", duration: "12 Weeks", modules: "12 Modules", rating: "4.7 (760)" },
      { color: "orange", illus: "📋", badge: "🔥 Popular",  icon: "📋", title: "Agile &",            titleLine2: "Scrum Management", desc: "JIRA, sprints and modern project management.", level: "Beginner to Advanced", duration: "6 Weeks", modules: "6 Modules", rating: "4.7 (640)" },
    ],
  },
};

/* ══════════════════════════════════════
   BOTTOM FEATURES STRIP DATA
══════════════════════════════════════ */
const FEATURES = [
  { icon: "📖", title: "Hands-on Projects",  body: "Work on real-world industry projects" },
  { icon: "👥", title: "Expert Instructors", body: "Learn from industry professionals" },
  { icon: "📋", title: "Industry Certificate", body: "Earn recognized certification" },
  { icon: "💼", title: "Placement Support",  body: "Get career guidance & placement assistance" },
  { icon: "🔄", title: "Lifetime Access",    body: "Learn at your own pace with lifetime access" },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function AllCourses() {
  const [activeTab, setActiveTab] = useState("data");
  const data = CATEGORY_DATA[activeTab];

  return (
    <section className="cp-section">

      {/* ══ HEADER ══ */}
      <div className="cp-header">
        <div className="cp-tag">
          <span className="cp-tag-star">✦</span>
          <span className="cp-tag-text">
            Industry-Relevant Skills. Future-Ready Careers.
          </span>
        </div>

        <h1 className="cp-title">
          Explore Courses That Drive{" "}
          <span className="cp-title-grad">Real Impact</span>
        </h1>
        <div className="cp-title-underline" />

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
            <span className="cp-detail-title-star">✦</span>
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

          <button className="cp-view-all-btn">
            View All Courses
            <span>→</span>
          </button>
        </div>
      </div>

      {/* ══ COURSE CARDS ══ */}
      <div className="cp-cards">
        {data.courses.map((c, i) => (
          <div key={i} className={`cp-card ${c.color}`}>

            {/* Illustration area */}
            <div className="cp-card-illus">
              <div className="cp-badge">{c.badge}</div>
              <div className="cp-bookmark">🔖</div>
              <span style={{ fontSize: 64 }}>{c.illus}</span>
              <span className="cp-illus-sparkle" style={{ top: "20%", left: "15%", animationDelay: "0s" }}>✦</span>
              <span className="cp-illus-sparkle" style={{ bottom: "18%", right: "20%", animationDelay: "0.7s" }}>✦</span>
            </div>

            {/* Body */}
            <div className="cp-card-body">
              <div className="cp-card-top">
                <div className="cp-card-icon">{c.icon}</div>
                <div className="cp-card-title">
                  {c.title}<br />{c.titleLine2}
                </div>
              </div>

              <p className="cp-card-desc">{c.desc}</p>

              <div className="cp-card-tags">
                <span className="cp-card-tag">{c.level}</span>
                <span className="cp-card-tag">{c.duration}</span>
              </div>

              <div className="cp-card-footer">
                <div className="cp-footer-meta">
                  <span className="cp-footer-item">
                    📅 {c.modules}
                  </span>
                  <span className="cp-footer-item">
                    <span className="cp-footer-star">★</span> {c.rating}
                  </span>
                </div>
                <div className="cp-card-arrow">→</div>
              </div>
            </div>
          </div>
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