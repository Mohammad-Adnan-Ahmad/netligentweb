import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../CSS/Review.css";

/* ── Data ── */
const STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 13s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    colorClass: "blue",
    value: "98%",
    label: "Students Satisfied",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    colorClass: "indigo",
    value: "2.5K+",
    label: "Successful Students",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    colorClass: "amber",
    value: "95%",
    label: "Placement Rate",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    colorClass: "pink",
    value: "4.9/5",
    label: "Average Rating",
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "Sapna Meena",
    rating: 5,
    text: "I am currently pursuing a Data Science course at Netligent, and my experience so far has been quite positive. The institute provides a structured curriculum that covers important concepts like Python, data analysis, machine learning, and real-world projects.",
    initials: "SM",
  },
  {
    id: 2,
    name: "Shivam Imne",
    rating: 5,
    text: "I had a generally good experience with this coaching center. The faculty is knowledgeable and makes an effort to explain concepts clearly. Teachers are approachable and usually willing to help when students have doubts.",
    initials: "SI",
  },
  {
    id: 3,
    name: "Golu Khateek",
    rating: 5,
    text: "Netligent coaching has been a good experience. The teachers explain concepts clearly and doubts are solved easily. The study environment is focused and supportive. Overall, it’s a good option for preparation.",
    initials: "GK",
  },
  {
    id: 4,
    name: "Sourabh Choudhary",
    rating: 5,
    text: "If you want to become a Cyber Security Expert so you should join Netligent Technologies institute in MP Nagar Bhopal,It is the best institute in Bhopal",
    initials: "SC",
  },
  {
    id: 5,
    name: "Ashwinkumar Prajapati",
    rating: 5,
    text: "I recently joined netligent and Honestly, the cybersecurity class was quite helpful and worth attending. At first, some topics felt a bit technical and difficult to understand, but the instructor made a good effort to explain things in a simple and practical way.",
    initials: "AP",
  },
  {
    id: 6,
    name: "Mohit Sable",
    rating: 5,
    text: "My experience with Netligent Technologies for the cyber security course was very positive. The faculty is knowledgeable and explains topics in a simple way. The course focuses on both theory and practical skills, which helped me understand real-world concepts. Trainers are supportive and always ready to solve doubts. It’s a good place for beginners who want to build a career in cyber security.",
    initials: "MS",
  },
  {
    id: 7,
    name: "Mohit Makoriya",
    rating: 5,
    text: "It was a great experience with this institute.the faculty members are highly trained and have strong knowledge of the cyber security. They explained concepts clearly with practical implementation, which helped me build a strong foundation in Linux, CCNA, Networking etc",
    initials: "MM",
  },
  {
    id: 8,
    name: "Huzefa Khan",
    rating: 5,
    text: "I had a great learning experience at Netligent Technologies LLP , Bhopal. The teaching quality is excellent, and the faculty are knowledgeable, supportive, and dedicated to helping students succeed. They focus on practical, real-world learning with hands-on training and up-to-date course material.",
    initials: "HK",
  },
];

/* ── Star renderer ── */
const Stars = ({ count = 5, filled = 5 }) =>
  Array.from({ length: count }).map((_, i) => (
    <span key={i} className="star-icon">
      {i < filled ? "★" : "☆"}
    </span>
  ));

/* ── Responsive cards-per-view ── */
function useCardsPerView() {
  const [n, setN] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 680) setN(1);
      else if (w <= 1100) setN(2);
      else setN(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

/* ── Truncate review text to a fixed character length, without cutting mid-word ── */
const TRUNCATE_LEN = 100;
function truncate(text) {
  if (text.length <= TRUNCATE_LEN) return text;
  return text.slice(0, TRUNCATE_LEN).replace(/\s+\S*$/, "") + "…";
}

/* ── Main Component ── */
export default function Reviews() {
  const cardsPerView = useCardsPerView();
  const pageCount = Math.max(1, Math.ceil(REVIEWS.length / cardsPerView));
  const [activeDot, setActiveDot] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // Full review currently expanded above the carousel (or null)
  const [expanded, setExpanded] = useState(null);

  // Keep activeDot in range whenever the number of pages changes (e.g. resize)
  useEffect(() => {
    setActiveDot((p) => (p > pageCount - 1 ? 0 : p));
  }, [pageCount]);

  const goTo = useCallback(
    (idx) => setActiveDot(((idx % pageCount) + pageCount) % pageCount),
    [pageCount]
  );
  const next = useCallback(() => goTo(activeDot + 1), [activeDot, goTo]);
  const prev = useCallback(() => goTo(activeDot - 1), [activeDot, goTo]);

  // Autoplay — pauses on hover/touch/manual interaction/expanded review
  useEffect(() => {
    if (paused || pageCount <= 1 || expanded) return;
    const id = setInterval(() => setActiveDot((p) => (p + 1) % pageCount), 5500);
    return () => clearInterval(id);
  }, [paused, pageCount, expanded]);

  const pages = [];
  for (let i = 0; i < REVIEWS.length; i += cardsPerView) {
    pages.push(REVIEWS.slice(i, i + cardsPerView));
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true);
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      touchDeltaX.current < 0 ? next() : prev();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <section className="sr-section">
      <div className="sr-container">

        {/* Header */}
        <div className="sr-header">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div className="sr-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              WHAT OUR STUDENTS SAY
            </div>
          </div>

          <h2 className="sr-title">
            <span className="highlight-blue">Real Reviews</span>{" "}
            <span className="highlight-white">from</span>{" "}
            <span className="highlight-purple">Real Students</span>
          </h2>

          <p className="sr-subtitle">
            We take pride in the success of our students. Here's what they have to say
            about their learning journey with us.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="sr-stats">
          {/* Overall Rating */}
          <div className="sr-overall">
            <span className="sr-overall-score">4.9</span>
            <div className="sr-overall-stars">
              <Stars filled={5} />
            </div>
            <span className="sr-overall-label">Overall Rating</span>
            <span className="sr-overall-sub">Based on 2,500+ Reviews</span>
          </div>

          {/* Stat Items */}
          <div className="sr-stats-grid">
            {STATS.map((s, i) => (
              <div className="sr-stat-item" key={i}>
                <div className={`sr-stat-icon ${s.colorClass}`}>{s.icon}</div>
                <div>
                  <div className="sr-stat-value">{s.value}</div>
                  <div className="sr-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded full review — opens above the review rows */}
        {expanded && (
          <div className="sr-expanded-panel" key={expanded.id}>
            <button
              className="sr-expanded-close"
              onClick={() => setExpanded(null)}
              aria-label="Close review"
            >
              &#10005;
            </button>
            <div className="sr-card-header">
              <div className="sr-avatar-wrap">
                <div className="sr-avatar-placeholder">{expanded.initials}</div>
              </div>
              <div className="sr-card-meta">
                <span className="sr-card-name">{expanded.name}</span>
                <div className="sr-card-stars">
                  <Stars filled={expanded.rating} />
                </div>
              </div>
            </div>
            <p className="sr-expanded-body">{expanded.text}</p>
          </div>
        )}

        {/* Review Carousel */}
        <div
          className="sr-cards-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="sr-cards-track"
            style={{ transform: `translateX(-${activeDot * 100}%)` }}
          >
            {pages.map((page, pIdx) => (
              <div
                className="sr-cards-page"
                key={pIdx}
                style={{ gridTemplateColumns: `repeat(${cardsPerView}, 1fr)` }}
              >
                {page.map((r) => (
                  <div className="sr-card" key={r.id}>
                    {/* Big quote mark */}
                    <span className="sr-card-quote">"</span>

                    {/* Card Header */}
                    <div className="sr-card-header">
                      <div className="sr-avatar-wrap">
                        <div className="sr-avatar-placeholder">{r.initials}</div>
                      </div>
                      <div className="sr-card-meta">
                        <span className="sr-card-name">{r.name}</span>
                        <div className="sr-card-stars">
                          <Stars filled={r.rating} />
                        </div>
                      </div>
                    </div>

                    {/* Review Text — truncated to 150 characters */}
                    <p className="sr-card-body">{truncate(r.text)}</p>

                    <button
                      className="sr-readmore"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(r);
                      }}
                    >
                      Read more
                    </button>

                    <div className="sr-company" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="sr-pagination">
            <div className="sr-dots">
              {Array.from({ length: pageCount }).map((_, i) => (
                <div
                  key={i}
                  className={`sr-dot ${activeDot === i ? "active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}