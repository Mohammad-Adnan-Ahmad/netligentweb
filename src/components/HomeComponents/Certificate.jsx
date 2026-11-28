import { useEffect, useRef, useState } from "react";
import "../../CSS/Certificate.css";

/* Play-once-when-visible hook */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
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
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Certificate Mockup (soft 3D tilt + moving light on pointer) ──────────────
function CertificateMockup() {
  const handleMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${((x - 0.5) * 8).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - y) * 6).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };
  const handleLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="cert-mockup-stage">
      <div className="cert-mockup" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <img src="Certificate.png" alt="Netligent Certificate" />
      </div>
    </div>
  );
}

// ── Bottom feature strip data ─────────────────────────────────────────────────
const FEATURES = [
  { icon: "🏅", text: "Certified by MSME\nGovt. of India" },
  { icon: "🛡️", text: "Industry\nRecognized" },
  { icon: "💼", text: "Boosts Your\nProfessional Profile" },
  { icon: "👥", text: "Adds Value to\nYour Career" },
  { icon: "⭐", text: "Trusted by\nTop Recruiters" },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function Certificate() {
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} className={`cert-section ${inView ? "is-in" : ""}`}>

      {/* ── Header ── */}
      <div className="cert-header">
        <div className="cert-tag cert-fade" style={{ "--d": "0s" }}>
          <span className="cert-tag-icon">🎖️</span>
          Recognized. Respected. Rewarding.
        </div>

        <h2 className="cert-title">
          <span className="cert-word"><span className="cert-word-in cert-title-blue" style={{ "--d": "0.12s" }}>Certificate&nbsp;</span></span>
          <span className="cert-word"><span className="cert-word-in cert-title-white" style={{ "--d": "0.24s" }}>Certified by&nbsp;</span></span>
          <span className="cert-word"><span className="cert-word-in cert-title-purple" style={{ "--d": "0.36s" }}>MSME</span></span>
        </h2>

        <p className="cert-subtitle cert-fade" style={{ "--d": "0.5s" }}>
          Our courses come with industry-recognized certification certified by MSME,
          adding real value to your skills and career.
        </p>
      </div>

      {/* ── Two panels ── */}
      <div className="cert-panels">

        {/* ── LEFT panel ── */}
        <div className="cert-panel cert-panel-left cert-from-left" style={{ "--d": "0.6s" }}>
          <div className="cert-left-header">
            <div className="cert-panel-icon-wrap">🎓</div>
            <h3 className="cert-panel-left-title">
              You Learn.<br />
              We Certify.{" "}
              <span className="accent">You Succeed.</span>
            </h3>
          </div>

          <p className="cert-panel-left-body">
            Every student gets a professional certificate
            in hand, marking a milestone in their
            learning journey.
          </p>

          <img
            src="cert_hand.png"
            alt="Netligent Certificate"
            className="cert-students-photo"
          />
        </div>

        {/* ── RIGHT panel ── */}
        <div className="cert-panel cert-panel-right cert-from-right" style={{ "--d": "0.75s" }}>
          <div className="cert-panel-right-top">
            <div className="cert-panel-shield">🛡️</div>
            <div className="cert-panel-right-labels">
              <div className="cert-panel-right-title">
                Industry-Recognized Certification
              </div>
              <div className="cert-panel-right-sub">
                Certified by MSME
              </div>
            </div>
          </div>

          <CertificateMockup />
        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <div className="cert-bottom-strip">
        {FEATURES.map((f, i) => (
          <div key={i} className="cert-feature" style={{ "--d": `${1.3 + i * 0.1}s` }}>
            <div className="cert-feature-icon">{f.icon}</div>
            <div className="cert-feature-text">
              {f.text.split("\n").map((line, j) => (
                <span key={j} style={{ display: "block" }}>{line}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}