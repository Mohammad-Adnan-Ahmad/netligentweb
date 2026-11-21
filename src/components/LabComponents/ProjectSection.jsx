import { useMemo, useState } from "react";
import "../../CSS/Lab/ProjectSection.css";

/* ══════════════════════════════════════
   INLINE ICONS (no extra dependency)
══════════════════════════════════════ */
const Svg = ({ children, size = 20, stroke = 1.8, fill = "none", ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

const Icons = {
  code: (p) => (
    <Svg {...p}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </Svg>
  ),
  bars: (p) => (
    <Svg {...p}>
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </Svg>
  ),
  brain: (p) => (
    <Svg {...p}>
      <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 5 1V4a3 3 0 0 0-3 0z" />
      <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-5 1" />
    </Svg>
  ),
  shield: (p) => (
    <Svg {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </Svg>
  ),
  cloud: (p) => (
    <Svg {...p}>
      <path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9.5 4.5 4.5 0 0 1 17.5 18z" />
    </Svg>
  ),
  grid: (p) => (
    <Svg {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Svg>
  ),
  external: (p) => (
    <Svg {...p}>
      <path d="M14 4h6v6" />
      <line x1="20" y1="4" x2="11" y2="13" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </Svg>
  ),
  arrow: (p) => (
    <Svg {...p}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </Svg>
  ),
  playCircle: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9.5" />
      <polygon points="10 8 16 12 10 16" fill="currentColor" />
    </Svg>
  ),
  github: (p) => (
    <Svg {...p} stroke={0} fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </Svg>
  ),
};

/* ══════════════════════════════════════
   CATEGORIES (tabs)
══════════════════════════════════════ */
const CATEGORIES = [
  {
    key: "web",
    label: "Web Development",
    badge: "Web Development",
    icon: Icons.code,
    heading: "Web Development Projects",
    sub: "Modern web applications built using the latest technologies and best practices.",
    link: "View All Web Development Projects",
  },
  {
    key: "data",
    label: "Data Analytics",
    badge: "Data Analytics",
    icon: Icons.bars,
    heading: "Data Analytics Projects",
    sub: "Dashboards and insights built from real datasets using modern analytics tools.",
    link: "View All Data Analytics Projects",
  },
  {
    key: "ai",
    label: "AI & ML",
    badge: "AI & ML",
    icon: Icons.brain,
    heading: "AI & ML Projects",
    sub: "Intelligent models and applications powered by machine learning.",
    link: "View All AI & ML Projects",
  },
  {
    key: "cyber",
    label: "Cyber Security",
    badge: "Cyber Security",
    icon: Icons.shield,
    heading: "Cyber Security Projects",
    sub: "Hands-on security labs, audits and penetration-testing projects.",
    link: "View All Cyber Security Projects",
  },
  {
    key: "cloud",
    label: "Cloud Computing",
    badge: "Cloud Computing",
    icon: Icons.cloud,
    heading: "Cloud Computing Projects",
    sub: "Scalable deployments and automation pipelines built on the cloud.",
    link: "View All Cloud Computing Projects",
  },
  {
    key: "all",
    label: "All Projects",
    badge: "",
    icon: Icons.grid,
    heading: "All Projects",
    sub: "Explore projects built by our students across every program.",
    link: "View All Projects",
  },
];

/* ══════════════════════════════════════
   PROJECT DATA
   Add real links via: video, github, live
   thumb = which CSS mock screenshot to draw
══════════════════════════════════════ */
const PROJECTS = {
  web: [
    { thumb: "task", play: true, title: "Task Manager Application", desc: "A full-stack task management application with user authentication, CRUD operations and a clean, responsive UI.", tech: ["React", "Node.js", "MongoDB", "Tailwind"] },
    { thumb: "shop", title: "E-Commerce Website", desc: "A modern e-commerce platform with product listing, cart, payment integration and admin panel.", tech: ["React", "Node.js", "MongoDB", "Stripe"] },
    { thumb: "social", play: true, title: "Social Media Web App", desc: "A real-time social media platform with chat, posts, likes, and user profiles.", tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"] },
    { thumb: "portfolio", title: "Personal Portfolio Website", desc: "A responsive portfolio website with animations, projects, and contact form.", tech: ["React", "Tailwind", "Framer Motion"] },
    { thumb: "blog", title: "Blog Platform", desc: "A simple blog application with rich text editor, comments and categories.", tech: ["Next.js", "MongoDB", "Tailwind"] },
    { thumb: "chat", title: "Real-Time Chat Application", desc: "A chat application with online status, group chat and file sharing.", tech: ["React", "Socket.io", "Node.js", "MongoDB"] },
    { thumb: "weather", title: "Weather Forecast App", desc: "Get real-time weather updates with location search and 5-day forecast.", tech: ["React", "OpenWeather API", "Tailwind"] },
    { thumb: "admin", title: "Admin Dashboard", desc: "A complete admin dashboard with analytics, user management and reports.", tech: ["React", "Redux", "Node.js", "Chart.js"] },
  ],
  data: [
    { thumb: "analytics", title: "Sales Analytics Dashboard", desc: "Interactive dashboard tracking revenue, regions and product performance.", tech: ["Python", "Pandas", "Power BI"] },
    { thumb: "analytics", title: "HR Analytics Report", desc: "Attrition and hiring insights built from employee datasets.", tech: ["Excel", "SQL", "Power BI"] },
    { thumb: "analytics", title: "Customer Churn Prediction", desc: "Predicts which customers are likely to leave using classification models.", tech: ["Python", "Scikit-learn", "Pandas"] },
    { thumb: "analytics", title: "COVID-19 Data Explorer", desc: "Visual exploration of trends, waves and vaccination data.", tech: ["Python", "Matplotlib", "Seaborn"] },
  ],
  ai: [
    { thumb: "ai", title: "AI Chatbot", desc: "A conversational assistant that answers questions using a language model API.", tech: ["Python", "OpenAI API", "Flask"] },
    { thumb: "ai", title: "Image Classifier", desc: "Classifies images into categories with a trained convolutional network.", tech: ["Python", "TensorFlow", "OpenCV"] },
    { thumb: "ai", title: "Sentiment Analysis", desc: "Detects positive and negative sentiment in product reviews.", tech: ["Python", "NLP", "Scikit-learn"] },
    { thumb: "ai", title: "Recommendation Engine", desc: "Suggests movies and products based on user behaviour.", tech: ["Python", "Pandas", "Scikit-learn"] },
  ],
  cyber: [
    { thumb: "cyber", title: "Vulnerability Scanner", desc: "Scans hosts for open ports and common vulnerabilities and reports findings.", tech: ["Python", "Nmap", "Kali Linux"] },
    { thumb: "cyber", title: "Network Traffic Analyzer", desc: "Captures and inspects packets to detect suspicious activity.", tech: ["Wireshark", "Python", "Scapy"] },
    { thumb: "cyber", title: "Password Strength Auditor", desc: "Audits password hashes and scores their resistance to attacks.", tech: ["Python", "Hashcat"] },
    { thumb: "cyber", title: "Web App Pen-Test Report", desc: "End-to-end penetration test of a demo web app with remediation notes.", tech: ["Burp Suite", "OWASP", "SQLMap"] },
  ],
  cloud: [
    { thumb: "cloud", title: "Serverless REST API", desc: "A scalable REST API running entirely on serverless services.", tech: ["AWS Lambda", "API Gateway", "DynamoDB"] },
    { thumb: "cloud", title: "CI/CD Pipeline", desc: "Automated build, test and deploy pipeline for a web application.", tech: ["Jenkins", "Docker", "GitHub Actions"] },
    { thumb: "cloud", title: "Static Site on S3", desc: "Fast, secure static website hosting with a global CDN.", tech: ["AWS S3", "CloudFront", "Route 53"] },
    { thumb: "cloud", title: "Kubernetes Deployment", desc: "Containerised app deployed and scaled on a Kubernetes cluster.", tech: ["Kubernetes", "Docker", "Helm"] },
  ],
};

/* Tech chip → colour class */
const CHIP_MAP = {
  react: "react",
  nodejs: "node",
  mongodb: "mongo",
  tailwind: "tailwind",
  stripe: "stripe",
  nextjs: "next",
  socketio: "socket",
  postgresql: "postgres",
  framermotion: "framer",
  redux: "redux",
  chartjs: "chartjs",
  openweatherapi: "weather",
};
const chipClass = (t) => {
  const k = t.toLowerCase().replace(/[^a-z0-9]/g, "");
  return CHIP_MAP[k] ? `spj-chip spj-chip--${CHIP_MAP[k]}` : "spj-chip";
};

/* ══════════════════════════════════════
   MOCK SCREENSHOTS (pure CSS/JSX)
   Swap for real <img> screenshots anytime.
══════════════════════════════════════ */

function Thumb({ type }) {
  switch (type) {
    case "task":
      return (
        <div className="spj-mock light">
        
        </div>
      );
    case "shop":
      return (
        <div className="spj-mock light">
         
        </div>
      );
    case "social":
      return (
        <div className="spj-mock dark">
         
        </div>
      );
    case "portfolio":
      return (
        <div className="spj-mock dark">
          
        </div>
      );
    case "blog":
      return (
        <div className="spj-mock light">
          
        </div>
      );
    case "chat":
      return (
        <div className="spj-mock dark">
          
        </div>
      );
    case "weather":
      return (
        <div className="spj-mock blue">
         
        </div>
      );
    case "admin":
      return (
        <div className="spj-mock light">
          
        </div>
      );
    case "analytics":
      return (
        <div className="spj-mock light">
         
        </div>
      );
    case "ai":
      return (
        <div className="spj-mock dark">
          
        </div>
      );
    case "cyber":
      return (
        <div className="spj-mock green">
          
        </div>
      );
    case "cloud":
      return (
        <div className="spj-mock cloud">
         
        </div>
      );
    default:
      return <div className="spj-mock dark" />;
  }
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function ProjectSection() {
  const [active, setActive] = useState("web");
  const category = CATEGORIES.find((c) => c.key === active);
  const HeadIcon = category.icon;

  const projects = useMemo(() => {
    if (active === "all") {
      return CATEGORIES.filter((c) => c.key !== "all").flatMap((c) =>
        PROJECTS[c.key].map((p) => ({ ...p, badge: c.badge }))
      );
    }
    return PROJECTS[active].map((p) => ({ ...p, badge: category.badge }));
  }, [active, category.badge]);

  return (
    <section className="spj-section">

   
      {/* ══ HEADER ══ */}
      <div className="spj-header">
        <div className="spj-header-text">

          <h3 className="spj-title">
            Our<span className="spj-title-grad"> Students'  Projects</span>
          </h3>

          <p className="spj-tagline">
            Turning Learning Into Real-World Solutions.{" "}

          </p>

          <p className="spj-desc">
            Explore real-world projects that demonstrate creativity, technical expertise, and practical problem-solving. From Web Development and Data Analytics to AI & Machine Learning, Cyber Security, and Cloud Computing, discover innovative solutions built with modern technologies.
          </p>
        </div>
      </div>

      {/* ══ CATEGORY TABS ══ */}
      <div className="spj-tabs" role="tablist" aria-label="Project categories">
        {CATEGORIES.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.key}
              data-key={c.key}
              role="tab"
              aria-selected={active === c.key}
              className={`spj-tab${active === c.key ? " active" : ""}`}
              onClick={() => setActive(c.key)}
            >
              <span className="spj-tab-icon"><Icon /></span>
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="spj-divider" />

      {/* ══ CATEGORY HEADING ══ */}
      <div className="spj-cat-head">
        <div className="spj-cat-icon"><HeadIcon /></div>
        <div>
          <h2 className="spj-cat-title">{category.heading}</h2>
          <p className="spj-cat-sub">{category.sub}</p>
        </div>
        <button className="spj-cat-link" onClick={() => setActive("all")}>
          {category.link}
          <Icons.arrow size={18} />
        </button>
      </div>

      {/* ══ PROJECT CARDS ══
          key={active} remounts the grid so the entrance animation replays on tab change */}
      <div className="spj-grid" key={active}>
        {projects.map((p, i) => (
          <article key={`${p.title}-${i}`} className="spj-card" style={{ "--i": i }}>

            <div className="spj-card-top">
              <span className="spj-badge">{p.badge}</span>
              <a
                className="spj-ext"
                href={p.live || "#"}
                target={p.live ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={(e) => !p.live && e.preventDefault()}
                aria-label={`Open ${p.title}`}
              >
                <Icons.external />
              </a>

              <div className="spj-screen">
                <Thumb type={p.thumb} />
              </div>
              {p.play && <span className="spj-play" />}
            </div>

            <div className="spj-card-body">
              <h3 className="spj-card-title">{p.title}</h3>
              <p className="spj-card-desc">{p.desc}</p>

              <div className="spj-chips">
                {p.tech.map((t) => (
                  <span key={t} className={chipClass(t)}>{t}</span>
                ))}
              </div>

              <div className="spj-card-foot">
                <a
                  className="spj-link"
                  href={p.video || "#"}
                  target={p.video ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => !p.video && e.preventDefault()}
                >
                  <Icons.playCircle /> Video Demo
                </a>
                <a
                  className="spj-link"
                  href={p.github || "#"}
                  target={p.github ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => !p.github && e.preventDefault()}
                >
                  <Icons.github /> GitHub
                </a>
                <a
                  className="spj-go"
                  href={p.live || "#"}
                  target={p.live ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => !p.live && e.preventDefault()}
                  aria-label={`View ${p.title}`}
                >
                  <Icons.arrow />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}