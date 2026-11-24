import { useCallback, useEffect, useRef, useState } from "react";
import "../../CSS/TrainingAudience.css";
import { Link } from "react-router-dom";

/* ── Outlined icons (same style as PersonalizedAttention) ── */
const svgProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "#818cf8",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

const CapIcon = () => (
  <svg {...svgProps}>
    <path d="M16 6L3 12l13 6 13-6-13-6z" />
    <path d="M8 15v6c0 2 3.6 4 8 4s8-2 8-4v-6" />
    <line x1="29" y1="12" x2="29" y2="20" />
  </svg>
);

const CodeIcon = () => (
  <svg {...svgProps}>
    <polyline points="11,10 5,16 11,22" />
    <polyline points="21,10 27,16 21,22" />
    <line x1="18" y1="7" x2="14" y2="25" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg {...svgProps}>
    <rect x="4" y="10" width="24" height="16" rx="2" />
    <path d="M12 10V7a2 2 0 012-2h4a2 2 0 012 2v3" />
    <path d="M4 17h24" />
  </svg>
);

const SwitchIcon = () => (
  <svg {...svgProps}>
    <path d="M5 16h8l6-8h8" />
    <path d="M13 16l6 8h8" />
    <polyline points="23,4 27,8 23,12" />
    <polyline points="23,20 27,24 23,28" />
  </svg>
);

/* ── Content ── */
const STEPS = [
  {
    key: "students",
    Icon: CapIcon,
    navLabel: "College Students",
    titleWhite: "For",
    titleAccent: "College Students",
    body: "Start developing technology skills while pursuing your education. Learn programming, analytics, AI, cybersecurity or cloud computing to complement your academic knowledge.",
    tags: ["Programming", "Analytics", "AI", "Cybersecurity", "Cloud Computing"],
  },
  {
    key: "freshers",
    Icon: CodeIcon,
    navLabel: "Freshers & Graduates",
    titleWhite: "For",
    titleAccent: "Freshers and Graduates",
    body: "Build a strong technical foundation, work on practical projects and prepare for entry-level opportunities in the IT industry.",
    tags: ["Strong Foundation", "Practical Projects", "Entry-Level Roles"],
  },
  {
    key: "professionals",
    Icon: BriefcaseIcon,
    navLabel: "Working Professionals",
    titleWhite: "For",
    titleAccent: "Working Professionals",
    body: "Upgrade your existing skills, explore emerging technologies and prepare for new responsibilities or career opportunities.",
    tags: ["Upskilling", "Emerging Technologies", "New Responsibilities"],
  },
  {
    key: "switchers",
    Icon: SwitchIcon,
    navLabel: "Career Switchers",
    titleWhite: "For",
    titleAccent: "Career Switchers",
    body: "Explore technology domains, identify suitable learning paths and gradually develop the technical knowledge needed to move towards an IT career.",
    tags: ["Explore Domains", "Learning Paths", "IT Career"],
  },
];

const N = STEPS.length;

/* ── Component ── */
export default function TrainingAudience() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [ctaOn, setCtaOn] = useState(false);
  const [inView, setInView] = useState(false);

  /* Scroll-linked state: --p (0→1) drives CSS, `active` picks the card.
     The section is (N + 1) scroll-units tall: one unit per card, and the
     last unit holds the final card while the CTA appears. */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      el.style.setProperty("--p", p.toFixed(4));

      const units = p * (N + 1);
      setActive(Math.min(N - 1, Math.floor(units)));
      setCtaOn(units >= N);
      if (rect.top < window.innerHeight * 0.75) setInView(true);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* Click a nav item → scroll to the middle of that card's scroll-unit */
  const jumpTo = useCallback((i) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + ((i + 0.5) / (N + 1)) * total,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="training-for-everyone"
      className={`ta-section${inView ? " is-in" : ""}`}
      aria-labelledby="ta-heading"
      style={{ "--steps": N }}
    >
      <div className="ta-stage">
        {/* ── Ambient background (scroll-linked) ── */}
        <div className="ta-bg" aria-hidden="true">
          <span className="ta-grid" />
          <span className="ta-orb ta-orb-a" />
          <span className="ta-orb ta-orb-b" />
          <span className="ta-ring" />
        </div>

        <div className="ta-inner">
          {/* ── Left: heading + audience navigation ── */}
          <div className="ta-left">
            <header className="ta-head">
              <div className="ta-title-wrap">
                <div className="ta-sparks" aria-hidden="true">
                  <span className="ta-spark" />
                  <span className="ta-spark" />
                  <span className="ta-spark" />
                </div>
                <h2 className="ta-title" id="ta-heading">
                  <span className="ta-title-line ta-white">
                    Training Designed for
                  </span>
                  <span className="ta-title-line ta-purple">
                    Students, Freshers and Working Professionals
                  </span>
                </h2>
              </div>
              <p className="ta-subtitle">
                Every learner has different career goals. Our training programs
                are designed to support people at different stages of their
                professional journey.
              </p>
            </header>

            <nav
              className="ta-nav"
              aria-label="Choose a learner type"
              style={{ "--active": active }}
            >
              <span className="ta-rail" aria-hidden="true">
                <span className="ta-rail-fill" />
              </span>
              <ul className="ta-nav-list">
                {STEPS.map(({ key, Icon, navLabel }, i) => (
                  <li key={key}>
                    <button
                      type="button"
                      className={`ta-nav-item${
                        i === active ? " is-active" : i < active ? " is-done" : ""
                      }`}
                      onClick={() => jumpTo(i)}
                      aria-current={i === active ? "true" : undefined}
                    >
                      <span className="ta-nav-dot">
                        <Icon />
                      </span>
                      <span className="ta-nav-label">{navLabel}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Right: card deck + CTA ── */}
          <div className="ta-right">
            <ol className="ta-deck">
              {STEPS.map(({ key, Icon, titleWhite, titleAccent, body, tags }, i) => {
                const off = i - active;
                const state = off === 0 ? "active" : off < 0 ? "past" : "next";
                return (
                  <li
                    key={key}
                    className="ta-card"
                    data-state={state}
                    style={{
                      "--d": Math.abs(off),
                      zIndex: off === 0 ? 20 : off < 0 ? 10 - Math.abs(off) : 0,
                    }}
                  >
                    <span className="ta-card-glow" aria-hidden="true" />
                    <div className="ta-card-top ta-anim" style={{ "--i": 0 }}>
                      <div className="ta-card-icon">
                        <Icon />
                      </div>
                      <h3 className="ta-card-title">
                        <span className="ta-card-title-white">{titleWhite}</span>{" "}
                        <span className="ta-card-title-accent">{titleAccent}</span>
                      </h3>
                    </div>
                    <p className="ta-card-body ta-anim" style={{ "--i": 1 }}>
                      {body}
                    </p>
                    <ul className="ta-chips ta-anim" style={{ "--i": 2 }}>
                      {tags.map((t) => (
                        <li key={t} className="ta-chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>

            <div className="ta-cta-slot">
              <div className="ta-hint" aria-hidden="true" data-hide={ctaOn}>
                <span className="ta-hint-mouse">
                  <span className="ta-hint-wheel" />
                </span>
                Keep scrolling
              </div>

              <div className={`ta-cta${ctaOn ? " is-on" : ""}`}>
                {/* swap for <Link to="/courses"> if you use react-router */}
                <Link
                  to="our-courses/"
                  className="ta-cta-btn"
                  tabIndex={ctaOn ? 0 : -1}
                >
                  <span>Find the Right Course for Your Career</span>
                  <svg
                    className="ta-cta-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <polygon points="15.5,8.5 13.5,13.5 8.5,15.5 10.5,10.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <span className="ta-progress" aria-hidden="true" />
      </div>
    </section>
  );
}