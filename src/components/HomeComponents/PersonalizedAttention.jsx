import { useCallback, useEffect, useRef, useState } from "react";
import "../../CSS/PersonalizedAttention.css";

/* ── Icons ── */
const BatchIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="14" cy="11" r="5" />
    <path d="M4 30c0-5.5 4.5-10 10-10s10 4.5 10 10" />
    <circle cx="25" cy="11" r="4" />
    <path d="M25 21c3.5.6 6 3.8 6 8" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <polyline className="pa-check-path" points="6,12.5 10.5,17 18,8" />
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <polyline points={dir === "left" ? "15,5 8,12 15,19" : "9,5 16,12 9,19"} />
  </svg>
);

/* ── Carousel slides: replace src / alt / caption with your real photos ── */
const SLIDES = [
  {
    src: "PersonalizedAttention.png",
    alt: "Mentor guiding students in a small batch at Netligent Technologies",
    caption: "Small batches, bigger focus",
  },
  {
    src: "PersonalizedAttention-2.png",
    alt: "Student getting one-on-one help from a mentor during a class in Netligent",
    caption: "Mentor attention at every desk",
  },
  {
    src: "PersonalizedAttention-3.png",
    alt: "Students discussing and solving doubts together in class",
    caption: "Doubts solved on the spot",
  },
  {
    src: "PersonalizedAttention-4.png",
    alt: "Students working on practical lab exercises with mentor support",
    caption: "Hands-on practice with guidance",
  },
];

/* ── Small-batch points ── */
const POINTS = [
  "More one-on-one time with your mentor in every class",
  "Faster doubt solving, so questions never pile up",
  "Stronger concept clarity through closer guidance",
  "Better interaction and active participation in sessions",
  "Mentors who know your strengths and work on your weaknesses",
];

/* ── Main Component ── */
export default function PersonalizedAttention() {
  const sectionRef = useRef(null);
  const touchX = useRef(null);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [touching, setTouching] = useState(false);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  /* Reveal once on first view; pause autoplay while off-screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      setEntered(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setEntered(true);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const go = useCallback((i) => setIndex((i + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    setTouching(true);
  };
  const onTouchEnd = (e) => {
    setTouching(false);
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  const paused = hovered || touching || !visible;

  return (
    <section
      ref={sectionRef}
      className={`pa-section${entered ? " is-in" : ""}`}
    >
      {/* ══ HEADER ══ */}
      <div className="pa-header">
        <div className="pa-title-wrap">
          <div className="pa-sparks" aria-hidden="true">
            <span className="pa-spark" />
            <span className="pa-spark" />
            <span className="pa-spark" />
          </div>

          <h2 className="pa-title">
            <span className="pa-title-line">
              <span className="pa-blue">Personalized </span>
              <span className="pa-white">Attention,</span>
            </span>
            <span className="pa-title-line">
              <span className="pa-purple">Focus on Quality, Not Quantity</span>
            </span>
          </h2>
        </div>

        <p className="pa-subtitle">
          At Netligent, we believe every student is unique.<br />
          That's why we focus on you, your goals, and your growth.
        </p>
      </div>

      {/* ══ TOP ROW ══ */}
      <div className="pa-top-row">
        {/* Left: image carousel */}
        <div
          className={`pa-carousel${paused ? " is-paused" : ""}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Small batch classes at Netligent"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {SLIDES.map((s, i) => (
            <figure
              key={s.src}
              className={`pa-slide${i === index ? " is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="pa-slide-img"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
              />
              <figcaption className="pa-slide-cap">{s.caption}</figcaption>
            </figure>
          ))}

          <span className="pa-car-shade" aria-hidden="true" />

          {/* progress dots: the active one fills, then advances the slide */}
          <div className="pa-dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`pa-dot${i === index ? " is-active" : i < index ? " is-done" : ""}`}
                onClick={() => go(i)}
                aria-label={`Show photo ${i + 1} of ${SLIDES.length}`}
                aria-current={i === index ? "true" : undefined}
              >
                <span className="pa-dot-track">
                  <span
                    className="pa-dot-fill"
                    onAnimationEnd={i === index ? next : undefined}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="pa-arrows">
            <button type="button" className="pa-arrow" onClick={prev} aria-label="Previous photo">
              <ChevronIcon dir="left" />
            </button>
            <button type="button" className="pa-arrow" onClick={next} aria-label="Next photo">
              <ChevronIcon dir="right" />
            </button>
          </div>
        </div>

        {/* Right: small-batch info card */}
        <div className="pa-info-card">
          <div className="pa-info-top">
            <div className="pa-info-icon">
              <BatchIcon />
            </div>
            <div className="pa-info-label">
              <h3 className="pa-info-title">Small Batch Sizes</h3>
              <p className="pa-info-title-sub">to Provide Individual Attention</p>
            </div>
          </div>

          <p className="pa-info-body">
            We keep our batches small so our mentors can
            understand your strengths, focus on your
            weaknesses, and guide you every step of the way.
          </p>

          <ul className="pa-points">
            {POINTS.map((text, i) => (
              <li key={text} className="pa-point" style={{ "--i": i }}>
                <span className="pa-point-check">
                  <CheckIcon />
                </span>
                <span className="pa-point-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ══ BOTTOM BANNER ══ */}
      <div className="pa-bottom-banner">
        <div className="pa-banner-icon" aria-hidden="true">❤️</div>
        <p className="pa-banner-text">
          We Don't Just Teach, We{" "}
          <span className="pa-banner-cyan">Mentor.</span>
          {"  "}
          We Don't Just Enroll, We{" "}
          <span className="pa-banner-purple">Invest in Your Success.</span>
        </p>
      </div>
    </section>
  );
}