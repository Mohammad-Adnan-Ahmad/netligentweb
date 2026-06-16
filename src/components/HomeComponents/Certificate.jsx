import "../../CSS/Certificate.css";

// ── Certificate Mockup ────────────────────────────────────────────────────────
function CertificateMockup() {
  return (
    <div className="cert-mockup">
      <img src="Certificate.png" alt="certificate"/>
    </div>
  );
}

// ── Bottom feature strip data ─────────────────────────────────────────────────
const FEATURES = [
  { icon: "🏅", text: "Certified by MSME\nGovt. of India"       },
  { icon: "🛡️", text: "Industry\nRecognized"                     },
  { icon: "💼", text: "Boosts Your\nProfessional Profile"        },
  { icon: "👥", text: "Adds Value to\nYour Career"               },
  { icon: "⭐", text: "Trusted by\nTop Recruiters"               },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function Certificate() {
  return (
    <section className="cert-section">

      {/* ── Header ── */}
      <div className="cert-header">

        {/* Pill tag */}
        <div className="cert-tag">
          <span className="cert-tag-icon">🎖️</span>
          Recognized. Respected. Rewarding.
        </div>

        {/* Title: "Certificate Certified by MSME" */}
        <h2 className="cert-title">
          <span className="cert-title-blue">Certificate </span>
          <span className="cert-title-white">Certified by </span>
          <span className="cert-title-purple">MSME</span>
        </h2>

        {/* Subtitle */}
        <p className="cert-subtitle">
          Our courses come with industry-recognized certification certified by MSME,
          adding real value to your skills and career.
        </p>
      </div>

      {/* ── Two panels ── */}
      <div className="cert-panels">

        {/* ── LEFT panel ── */}
        <div className="cert-panel cert-panel-left">

          {/* Graduation cap icon */}
          <div className="cert-left-header">
              <div className="cert-panel-icon-wrap">🎓</div>

          {/* Title */}
          <h3 className="cert-panel-left-title">
            You Learn.<br />
            We Certify.{" "}
            <span className="accent">You Succeed.</span>
          </h3>
          </div>
        

          {/* Body text */}
          <p className="cert-panel-left-body">
            Every student gets a professional certificate
            in hand, marking a milestone in their
            learning journey.
          </p>

          {/* Students photo */}
          <img
            src="cert_hand.png"
            alt="Students holding certificate"
            className="cert-students-photo"
          />
        </div>

        {/* ── RIGHT panel ── */}
        <div className="cert-panel cert-panel-right">

          {/* Top: shield icon + labels */}
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

          {/* Certificate mockup */}
          <CertificateMockup />
        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <div className="cert-bottom-strip">
        {FEATURES.map((f, i) => (
          <div key={i} className="cert-feature">
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