import { useState } from "react";
import "../../CSS/Nav.css";

// ── Dropdown data for every nav link ─────────────────────────────────────────
const NAV_DATA = [
  {
    label: "Data Programs",
    items: [
      { icon: "📊", title: "Data Science",       sub: "Python · ML · Stats",           href: "#" },
      { icon: "🤖", title: "Machine Learning",   sub: "Supervised · Deep Learning",    href: "#" },
      { icon: "📈", title: "Data Analytics",     sub: "Excel · Power BI · Tableau",    href: "#" },
      { icon: "🗄️", title: "Big Data & Hadoop",  sub: "Spark · Hive · Kafka",           href: "#" },
      { icon: "🧮", title: "Statistics & Maths", sub: "Probability · Linear Algebra",  href: "#" },
      { icon: "💡", title: "Business Analytics", sub: "Strategy · Insights · KPIs",    href: "#" },
    ],
    footer: { label: "Explore all Data Programs", count: "12 courses" },
    twoCol: true,
  },
  {
    label: "AI-ML",
    items: [
      { icon: "🧠", title: "Generative AI",        sub: "GPT · Diffusion · LLMs",        href: "#" },
      { icon: "👁️", title: "Computer Vision",       sub: "OpenCV · YOLO · CNNs",          href: "#" },
      { icon: "🗣️", title: "NLP",                   sub: "Transformers · BERT · RAG",     href: "#" },
      { icon: "🚀", title: "MLOps & Deployment",   sub: "Docker · MLflow · FastAPI",     href: "#" },
      { icon: "🔬", title: "Deep Learning",         sub: "PyTorch · TensorFlow · Keras",  href: "#" },
    ],
    footer: { label: "View all AI-ML tracks", count: "8 courses" },
    twoCol: false,
  },
  {
    label: "Cyber Security",
    items: [
      { icon: "🔐", title: "Ethical Hacking",    sub: "Kali Linux · Metasploit",       href: "#" },
      { icon: "🛡️", title: "Network Security",   sub: "Firewall · IDS · VPN",          href: "#" },
      { icon: "🕵️", title: "SOC & SIEM",         sub: "Splunk · QRadar · Threat Hunt", href: "#" },
      { icon: "🔒", title: "Application Security",sub: "OWASP · Pen Testing · VAPT",   href: "#" },
      { icon: "📜", title: "CompTIA Security+",  sub: "Certification prep",            href: "#" },
    ],
    footer: { label: "Explore Cybersecurity paths", count: "7 courses" },
    twoCol: false,
  },
  {
    label: "Web Development",
    items: [
      { icon: "⚛️", title: "React & Next.js",    sub: "Hooks · SSR · App Router",      href: "#" },
      { icon: "🟩", title: "Node.js & Express",  sub: "REST · GraphQL · Sockets",      href: "#" },
      { icon: "🐍", title: "Python & Django",    sub: "DRF · ORM · Celery",            href: "#" },
      { icon: "🎨", title: "UI/UX Design",       sub: "Figma · Tailwind · Design Sys", href: "#" },
      { icon: "📱", title: "React Native",       sub: "Cross-platform Mobile Apps",    href: "#" },
      { icon: "🛒", title: "Full Stack MERN",    sub: "MongoDB · Express · React · Node", href: "#" },
    ],
    footer: { label: "Browse all Web courses", count: "14 courses" },
    twoCol: true,
  },
  {
    label: "Cloud Computing",
    items: [
      { icon: "☁️", title: "AWS Solutions Arch.", sub: "EC2 · S3 · Lambda · RDS",      href: "#" },
      { icon: "🔵", title: "Microsoft Azure",    sub: "AZ-900 · AZ-104 · AZ-305",     href: "#" },
      { icon: "🌐", title: "Google Cloud (GCP)", sub: "GKE · BigQuery · Cloud Run",    href: "#" },
      { icon: "⚙️", title: "DevOps & CI/CD",     sub: "Docker · Jenkins · GitHub Actions",href: "#" },
      { icon: "🏗️", title: "Kubernetes",         sub: "Pods · Helm · Monitoring",      href: "#" },
      { icon: "🔧", title: "Terraform & IaC",   sub: "Infrastructure as Code",        href: "#" },
    ],
    footer: { label: "View all Cloud programs", count: "10 courses" },
    twoCol: true,
  },
  {
    label: "Others",
    items: [
      { icon: "☕", title: "Java Full Stack",    sub: "Spring Boot · Hibernate · Microservices",  href: "#" },
      { icon: "📊", title: "Power BI & Tableau", sub: "DAX · Dashboards · Reports",  href: "#" },
      { icon: "🐍", title: "Python Programming", sub: "Core · OOP · Automation",     href: "#" },
      { icon: "🔁", title: "Git & GitHub",       sub: "Version Control · Workflows",  href: "#" },
      { icon: "📋", title: "Agile & Scrum",      sub: "JIRA · Project Management",    href: "#" },
    ],
    footer: { label: "See all other programs", count: "9 courses" },
    twoCol: false,
  },
];

// ── Dropdown panel component ──────────────────────────────────────────────────
function Dropdown({ data }) {
  return (
    <div className="dropdown">
      {/* Header label */}
      <div className="dropdown-header">
        <span className="dropdown-header-label">{data.label}</span>
      </div>

      {/* Items */}
      <div className={`dropdown-items${data.twoCol ? " two-col" : ""}`}>
        {data.items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="dropdown-item"
            onClick={(e) => e.preventDefault()}
          >
            {/* Icon */}
            <div
              className="dropdown-item-icon"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(129,140,248,0.18)",
              }}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div className="dropdown-item-text">
              <div className="dropdown-item-title">{item.title}</div>
              <div className="dropdown-item-sub">{item.sub}</div>
            </div>

            {/* Arrow */}
            <span className="dropdown-item-arrow">▶</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="dropdown-footer">
        <button className="dropdown-footer-link">
          {data.footer.label} →
        </button>
        <span className="dropdown-footer-badge">{data.footer.count}</span>
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [active,       setActive]       = useState(null);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(null); // which mobile accordion is open

  function toggleMobileItem(label) {
    setMobileOpen((prev) => (prev === label ? null : label));
  }

  return (
    <>
      <div className="demo-bg">
        <div className="topbar">

          {/* ── Box 1: Navbar ── */}
          <nav className="navbar">
            <a className="brand" href="#">Netligent Technologies</a>
            <div className="divider" />

            <ul className="nav-links">
              {NAV_DATA.map((nav) => (
                <li key={nav.label}>
                  {/* Trigger button */}
                  <button
                    className={`nav-link${active === nav.label ? " active" : ""}`}
                    onClick={() => setActive(nav.label)}
                    onMouseEnter={() => setActive(nav.label)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {nav.label}
                    <span className="chevron">▾</span>
                  </button>

                  {/* Dropdown */}
                  <Dropdown data={nav} />
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </nav>

          {/* ── Box 2: Contact Us ── */}
          <div className="cta-box">
            <button className="cta-btn">Contact Us</button>
          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        {menuOpen && (
          <div className="mobile-menu" style={{ display: "flex" }}>
            {NAV_DATA.map((nav) => (
              <div key={nav.label} className="mobile-nav-item">
                {/* Accordion toggle */}
                <button
                  className={`mobile-link-toggle${mobileOpen === nav.label ? " open" : ""}`}
                  onClick={() => toggleMobileItem(nav.label)}
                >
                  {nav.label}
                  <span className="chevron">▾</span>
                </button>

                {/* Sub-items */}
                <div
                  className={`mobile-sub-items${mobileOpen === nav.label ? " open" : ""}`}
                >
                  {nav.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="mobile-sub-item"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="mobile-sub-item-icon">{item.icon}</span>
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <button className="mobile-cta">Contact Us</button>
          </div>
        )}
      </div>
    </>
  );
}