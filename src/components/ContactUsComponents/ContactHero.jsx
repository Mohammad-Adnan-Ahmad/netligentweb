import "../../CSS/ContactUs/ContactHero.css"

/* ══════════════════════════════════════
   FEATURES DATA
══════════════════════════════════════ */
const FEATURES = [
  {
    icon: "⏱️",
    title: "Quick Response",
    body: "We value your time and respond quickly.",
  },
  {
    icon: "🎧",
    title: "Always Here",
    body: "Our support team is ready to assist you.",
  },
  {
    icon: "🛡️",
    title: "Your Success",
    body: "We are committed to your career journey.",
  },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function ContactHero() {
  return (
    <section className="ch2-section">

      {/* Ambient glows */}
      <div className="ch2-glow-purple" />
      <div className="ch2-glow-right" />

      {/* Dotted clusters */}
      <div className="ch2-dots-bl" />
      <div className="ch2-dots-br" />


      {/* ══ MAIN GRID ══ */}
      <div className="ch2-grid">

        {/* ── LEFT COLUMN ── */}
        <div className="ch2-left">

          {/* Tag */}
          <div className="ch2-tag">
            <span>✈️</span>
            We'd Love to Hear From You
          </div>

          {/* Title */}
          <h1 className="ch2-title">Let's Connect &amp;<br/>
           <span className="ch2-title-grad">Build Your Future </span></h1>
          {/* Subtitle */}
          <p className="ch2-subtitle">
            Have questions about our courses, admissions, or career support?
            <br />
            Our team is here to help you take the next step with confidence.
          </p>

          {/* 4 features */}
          <div className="ch2-features">
            {FEATURES.map((f, i) => (
              <div key={i} className="ch2-feature">
                <div className="ch2-feat-icon">{f.icon}</div>
                <div className="ch2-feat-title">{f.title}</div>
                <div className="ch2-feat-body">{f.body}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="ch2-btn-row">
            <button className="ch2-btn-call">
              <span className="ch2-call-icon">📞</span>
              Call Us Now
              <span>→</span>
            </button>

            <button className="ch2-btn-wa">
              <span className="ch2-wa-icon">💬</span>
              Chat on WhatsApp
              <span>→</span>
            </button>
          </div>

          {/* Social proof */}
          <div className="ch2-social">
            <div className="ch2-social-text">
              <span className="ch2-social-num">1000+</span> learners trust{" "}
              <span className="ch2-social-brand">Netligent{" "}</span>
              to shape their careers.
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="ch2-right">

          {/* Dashed orbit ring */}
          <div className="ch2-orbit" />

          {/* Person photo */}
          
            {/* <img
              src="Contact_Us_Girl.png"
              alt="Friendly career counselor"
              className="ch2-photo"
            /> */}
        
        </div>
      </div>
    </section>
  );
}