import { useState } from "react";
import "../../CSS/Nav.css";

// ── All courses, grouped by category. "Courses" shows these six category
//    names first; hovering one flies out that category's course list ──
const COURSE_CATEGORIES = [
  {
    category: "Data Programs",
    items: [
      { icon: "📊", title: "Data Science",       sub: "Python · ML · Stats",           href: "#" },
      { icon: "🤖", title: "Machine Learning",   sub: "Supervised · Deep Learning",    href: "#" },
      { icon: "📈", title: "Data Analytics",     sub: "Excel · Power BI · Tableau",    href: "#" },
      { icon: "🗄️", title: "Big Data & Hadoop",  sub: "Spark · Hive · Kafka",           href: "#" },
      { icon: "🧮", title: "Statistics & Maths", sub: "Probability · Linear Algebra",  href: "#" },
      { icon: "💡", title: "Business Analytics", sub: "Strategy · Insights · KPIs",    href: "#" },
    ],
  },
  {
    category: "AI-ML",
    items: [
      { icon: "🧠", title: "Generative AI",        sub: "GPT · Diffusion · LLMs",        href: "#" },
      { icon: "👁️", title: "Computer Vision",       sub: "OpenCV · YOLO · CNNs",          href: "#" },
      { icon: "🗣️", title: "NLP",                   sub: "Transformers · BERT · RAG",     href: "#" },
      { icon: "🚀", title: "MLOps & Deployment",   sub: "Docker · MLflow · FastAPI",     href: "#" },
      { icon: "🔬", title: "Deep Learning",         sub: "PyTorch · TensorFlow · Keras",  href: "#" },
    ],
  },
  {
    category: "Cyber Security",
    items: [
      { icon: "🔐", title: "Ethical Hacking",    sub: "Kali Linux · Metasploit",       href: "#" },
      { icon: "🛡️", title: "Network Security",   sub: "Firewall · IDS · VPN",          href: "#" },
      { icon: "🕵️", title: "SOC & SIEM",         sub: "Splunk · QRadar · Threat Hunt", href: "#" },
      { icon: "🔒", title: "Application Security",sub: "OWASP · Pen Testing · VAPT",   href: "#" },
      { icon: "📜", title: "CompTIA Security+",  sub: "Certification prep",            href: "#" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { icon: "⚛️", title: "React & Next.js",    sub: "Hooks · SSR · App Router",      href: "#" },
      { icon: "🟩", title: "Node.js & Express",  sub: "REST · GraphQL · Sockets",      href: "#" },
      { icon: "🐍", title: "Python & Django",    sub: "DRF · ORM · Celery",            href: "#" },
      { icon: "🎨", title: "UI/UX Design",       sub: "Figma · Tailwind · Design Sys", href: "#" },
      { icon: "📱", title: "React Native",       sub: "Cross-platform Mobile Apps",    href: "#" },
      { icon: "🛒", title: "Full Stack MERN",    sub: "MongoDB · Express · React · Node", href: "#" },
    ],
  },
  {
    category: "Cloud Computing",
    items: [
      { icon: "☁️", title: "AWS Solutions Arch.", sub: "EC2 · S3 · Lambda · RDS",      href: "#" },
      { icon: "🔵", title: "Microsoft Azure",    sub: "AZ-900 · AZ-104 · AZ-305",     href: "#" },
      { icon: "🌐", title: "Google Cloud (GCP)", sub: "GKE · BigQuery · Cloud Run",    href: "#" },
      { icon: "⚙️", title: "DevOps & CI/CD",     sub: "Docker · Jenkins · GitHub Actions",href: "#" },
      { icon: "🏗️", title: "Kubernetes",         sub: "Pods · Helm · Monitoring",      href: "#" },
      { icon: "🔧", title: "Terraform & IaC",   sub: "Infrastructure as Code",        href: "#" },
    ],
  },
  {
    category: "Others",
    items: [
      { icon: "☕", title: "Java Full Stack",    sub: "Spring Boot · Hibernate · Microservices",  href: "#" },
      { icon: "📊", title: "Power BI & Tableau", sub: "DAX · Dashboards · Reports",  href: "#" },
      { icon: "🐍", title: "Python Programming", sub: "Core · OOP · Automation",     href: "#" },
      { icon: "🔁", title: "Git & GitHub",       sub: "Version Control · Workflows",  href: "#" },
      { icon: "📋", title: "Agile & Scrum",      sub: "JIRA · Project Management",    href: "#" },
    ],
  },
];

const COURSES_FOOTER = { label: "Explore all Courses", count: "56 courses" };

// ── Top-level nav links. Only "Courses" carries a dropdown; the rest are plain links ──
const NAV_LINKS = [
  { label: "Home",     href: "#" },
  { label: "About",    href: "#" },
  { label: "Courses",  megaMenu: true },
  { label: "Career",   href: "#" },
  { label: "Services", href: "#" },
  { label: "Gallery",  href: "#" },
];

// ── Courses mega-menu: left column = category names, right column = flyout
//    of whichever category is currently hovered ──
function CoursesMegaMenu({ categories, footer }) {
  const [hoveredCat, setHoveredCat] = useState(categories[0].category);
  const activeCategory = categories.find((c) => c.category === hoveredCat) || categories[0];

  return (
    <div className="courses-mega">
      <div className="courses-mega-flyout">
        {/* Left: category names */}
        <div className="courses-mega-categories">
          {categories.map((cat) => (
            <button
              key={cat.category}
              className={`courses-mega-cat${hoveredCat === cat.category ? " active" : ""}`}
              onMouseEnter={() => setHoveredCat(cat.category)}
              onFocus={() => setHoveredCat(cat.category)}
            >
              {cat.category}
              <span className="courses-mega-cat-arrow">▶</span>
            </button>
          ))}
        </div>

        {/* Right: courses for the hovered category */}
        <div className="courses-mega-panel">
          <div className="dropdown-items two-col">
            {activeCategory.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="dropdown-item"
                onClick={(e) => e.preventDefault()}
              >
                <div
                  className="dropdown-item-icon"
                  style={{
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(129,140,248,0.18)",
                  }}
                >
                  {item.icon}
                </div>
                <div className="dropdown-item-text">
                  <div className="dropdown-item-title">{item.title}</div>
                  <div className="dropdown-item-sub">{item.sub}</div>
                </div>
                <span className="dropdown-item-arrow">▶</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="dropdown-footer courses-mega-footer">
        <button className="dropdown-footer-link">{footer.label} →</button>
        <span className="dropdown-footer-badge">{footer.count}</span>
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [active,         setActive]         = useState(null);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(null); // which top-level mobile accordion is open
  const [mobileCourseCat, setMobileCourseCat] = useState(null); // which category is open inside the mobile Courses accordion

  function toggleMobileItem(label) {
    setMobileOpen((prev) => (prev === label ? null : label));
    setMobileCourseCat(null); // collapse any open category when switching top-level sections
  }

  function toggleMobileCourseCat(category) {
    setMobileCourseCat((prev) => (prev === category ? null : category));
  }

  return (
    <>
      <div className="demo-bg">
        <div className="topbar">

          {/* ── Box 1: Navbar ── */}
          <nav className="navbar">
            {/* <a className="brand" href="#">Netligent Technologies</a> */}
            <div className="brand">
               <img 
            src="/brand_logo.png" 
            alt="Netligent Technologies"
            className="brand-logo"
            />
            </div>
           
            <div className="divider" />

            <ul className="nav-links">
              {NAV_LINKS.map((nav) =>
                nav.megaMenu ? (
                  <li
                    key={nav.label}
                    className="has-mega"
                  >
                    <button
                      className={`nav-link${active === nav.label ? " active" : ""}`}
                      onClick={() => setActive(nav.label)}
                      onMouseEnter={() => setActive(nav.label)}
                      onMouseLeave={() => setActive(null)}
                    >
                      {nav.label}
                      <span className="chevron">▾</span>
                    </button>

                    <CoursesMegaMenu categories={COURSE_CATEGORIES} footer={COURSES_FOOTER} />
                  </li>
                ) : (
                  <li key={nav.label}>
                    <a
                      href={nav.href}
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      {nav.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
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
        <div className={`mobile-menu-wrapper${menuOpen ? " open" : ""}`}>
          <div className="mobile-menu">
            {NAV_LINKS.map((nav) =>
              nav.megaMenu ? (
                <div key={nav.label} className="mobile-nav-item">
                  {/* Top-level accordion toggle: Courses */}
                  <button
                    className={`mobile-link-toggle${mobileOpen === nav.label ? " open" : ""}`}
                    onClick={() => toggleMobileItem(nav.label)}
                  >
                    {nav.label}
                    <span className="chevron">▾</span>
                  </button>

                  {/* Category list */}
                  <div
                    className={`mobile-sub-items${mobileOpen === nav.label ? " open" : ""}`}
                  >
                    {COURSE_CATEGORIES.map((cat) => (
                      <div key={cat.category} className="mobile-course-cat">
                        {/* Second-level accordion toggle: each category */}
                        <button
                          className={`mobile-course-cat-toggle${mobileCourseCat === cat.category ? " open" : ""}`}
                          onClick={() => toggleMobileCourseCat(cat.category)}
                        >
                          {cat.category}
                          <span className="chevron">▾</span>
                        </button>

                        {/* Courses within this category */}
                        <div
                          className={`mobile-sub-items nested${mobileCourseCat === cat.category ? " open" : ""}`}
                        >
                          {cat.items.map((item) => (
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
                  </div>
                </div>
              ) : (
                <a
                  key={nav.label}
                  href={nav.href}
                  className="mobile-link-toggle mobile-link-plain"
                  onClick={(e) => e.preventDefault()}
                >
                  {nav.label}
                </a>
              )
            )}

            <button className="mobile-cta">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}