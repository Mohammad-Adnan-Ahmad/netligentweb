import React, { useEffect, useRef, useState } from "react";
import "../../CSS/NetliLabSection.css";
import { Link } from "react-router-dom";

/* ---------- Small reusable icons ---------- */
const IconCode = () => (
  <svg viewBox="0 0 64 64" className="nl-ico" aria-hidden="true">
    <rect x="10" y="10" width="44" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M4 48h56l-5 6H9z" fill="currentColor" />
    <path d="M27 20l-6 7 6 7M37 20l6 7-6 7M33 18l-3 18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconGear = () => (
  <svg viewBox="0 0 64 64" className="nl-ico nl-ico--gear" aria-hidden="true">
    <path
      d="M27 5h10l2 8 5 2 7-4 7 7-4 7 2 5 8 2v10l-8 2-2 5 4 7-7 7-7-4-5 2-2 8H27l-2-8-5-2-7 4-7-7 4-7-2-5-8-2V27l8-2 2-5-4-7 7-7 7 4 5-2z"
      transform="translate(0 0) scale(.92) translate(2.5 2.5)"
      fill="currentColor"
    />
    <circle cx="32" cy="32" r="10" fill="#071558" />
    <circle cx="32" cy="32" r="5" fill="currentColor" />
  </svg>
);

const IconTools = () => (
  <svg viewBox="0 0 64 64" className="nl-ico" aria-hidden="true">
    <path d="M8 18l10-10 8 8-4 4 22 22 4-4 8 8-10 10-8-8 4-4L16 26l-4 4z" fill="currentColor" />
    <path d="M56 8a10 10 0 0 0-13 12L12 51a4 4 0 0 0 6 6l31-31A10 10 0 0 0 58 12l-6 6-5-1-1-5z" fill="currentColor" opacity=".85" />
  </svg>
);

const IconTrophy = () => (
  <svg viewBox="0 0 64 64" className="nl-ico" aria-hidden="true">
    <path d="M18 6h28v16a14 14 0 0 1-28 0z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <path d="M18 12H8c0 10 4 16 12 18M46 12h10c0 10-4 16-12 18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 36v10M22 56h20M25 46h14v10H25z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 64 64" className="nl-rocket" aria-hidden="true">
    <path d="M44 6c8 0 14 6 14 14 0 12-12 24-24 26L18 30C20 18 32 6 44 6z" fill="#fff" />
    <circle cx="42" cy="22" r="5" fill="#2a6bff" />
    <path d="M18 30l-10 2 6 6M34 46l-2 10-6-6M14 42c-4 2-6 8-6 14 6 0 12-2 14-6z" fill="#fff" />
  </svg>
);

/* ---------- Data ---------- */
const approach = [
  { icon: <IconCode />, label: ["Apply Programming", "Concepts to", "Practical Problems"] },
  { icon: <IconGear />, label: ["Understand", "Development", "Workflows"] },
  { icon: <IconTools />, label: ["Work with Relevant", "Tools and", "Technologies"] },
  { icon: <IconTrophy />, label: ["Develop", "Project Portfolios"] },
];

/* ---------- Component ---------- */
export default function NetliLabSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  /* Play the entrance sequence once, when ~25% of the section is visible */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Soft mouse parallax for the right image (desktop / fine pointers only) */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--px", 0);
      el.style.setProperty("--py", 0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`nl-section ${inView ? "is-in" : ""}`}>
      <div className="nl-container">
        <div className="nl-right-wrap">
          <img src="NetliLab.png" alt="NetliLab" className="nl-right-img" />
        </div>

        {/* ================= LEFT ================= */}
        <div className="nl-left">
          <h2 className="nl-title">
            <span className="nl-title-line">
              <span className="nl-reveal" style={{ "--d": "0.05s" }}>Learn Through </span>
            </span>
            <span className="nl-title-line">
              <span className="nl-reveal" style={{ "--d": "0.18s" }}>
                <span className="nl-grad-cyan">Practical</span>{" "}
                <span className="nl-grad-purple">Projects</span>
              </span>
            </span>
            <span className="nl-title-line nl-title-at">
              <span className="nl-reveal" style={{ "--d": "0.31s" }}>
                <span className="nl-at">at </span>
                <span className="nl-pill">
                  <span className="nl-pill-inner">NETLIGENT</span>
                </span>
              </span>
            </span>
          </h2>

          <p className="nl-lead nl-fade" style={{ "--d": "0.55s" }}>
            Technical knowledge becomes more meaningful when you apply it to{" "}
            <span className="nl-cyan">practical challenges.</span>
          </p>

          <p className="nl-desc nl-fade" style={{ "--d": "0.7s" }}>
            At Netligent, project-based learning helps students understand how technologies work in
            real development and IT environments. Through practical
            assignments and project activities, learners can strengthen their problem-solving
            abilities and build confidence.
          </p>

          <div className="nl-approach nl-fade" style={{ "--d": "0.85s" }}>
            <div className="nl-approach-tag">
              Our Project-<span className="nl-cyan">Oriented</span> Approach Encourages Learners To:
            </div>
            <ul className="nl-approach-list">
              {approach.map((item, i) => (
                <li
                  className="nl-approach-item"
                  key={i}
                  style={{ "--i": i, "--d": `${1.05 + i * 0.12}s` }}
                >
                  <div className="nl-approach-icon">{item.icon}</div>
                  <p>
                    {item.label.map((l, j) => (
                      <span key={j}>{l}</span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="nl-cta-row nl-fade" style={{ "--d": "1.6s" }}>
            <Link to="/netli-lab/" className="nl-btn">
              <IconRocket />
              <span>Explore Student Projects</span>
              <svg className="nl-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}