
import "../../CSS/PageNotFound.css";



/* ══════════════════════════════════════
   ICONS
══════════════════════════════════════ */
const Ic = {
  Saturn:   () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="5"/>
      <path d="M2 12c0-1 8-6 20-3" strokeLinecap="round"/>
    </svg>
  ),
  Home:     () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Compass:  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  Headset:  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  Map:      () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  ),
  Rocket:   () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
};



/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function PageNotFound() {
  return (
    <div className="nf-page">
      {/* ════ HERO ROW ════ */}
      <div className="nf-hero">

        {/* ── LEFT ── */}
        <div className="nf-left">

          {/* Badge */}
          <div className="nf-badge">
            <Ic.Saturn />
            Oops! You're Lost
          </div>

          {/* Giant 404 */}
          <div className="nf-404">
            <span className="nf-404-4l">4</span>
            <span className="nf-404-0">0</span>
            <span className="nf-404-4r">4</span>
          </div>

          {/* Heading */}
          <h1 className="nf-heading">
            <span className="hw">Page </span>
            <span className="hg">Not Found</span>
          </h1>
          <div className="nf-heading-line" />

          {/* Body */}
          <p className="nf-body">
            Looks like you've wandered off the path.
            Don't worry, even the best explorers
            need a map sometimes.
          </p>

          {/* Buttons */}
          <div className="nf-btns">
            <a href="/" className="nf-btn-primary">
              <Ic.Home /> Back to Home
            </a>
            <a href="#" className="nf-btn-secondary" onClick={e => e.preventDefault()}>
              <Ic.Compass /> Explore More
            </a>
          </div>

          {/* Help line */}
          <div className="nf-help">
            <div className="nf-help-icon">
              <Ic.Headset />
            </div>
            <p className="nf-help-text">
              Need Help?{" "}
              <a href="#" className="contact-link" onClick={e => e.preventDefault()}>Contact</a>
              {" "}our support team,<br />we're here for you!
            </p>
          </div>
        </div>


      </div>{/* /nf-hero */}

      {/* ════ BOTTOM STRIP ════ */}
      <div className="nf-strip-wrap">
        <div className="nf-strip">
          {[
            { Icon: Ic.Compass, text: "You might have typed the address incorrectly." },
            { Icon: Ic.Map,     text: "The page you're looking for may have been moved or doesn't exist." },
            { Icon: Ic.Rocket,  text: "Let's get you back on track and find your way!" },
          ].map(({ Icon, text }, i) => (
            <div className="nf-strip-item" key={i}>
              <div className="nf-strip-icon">
                <Icon />
              </div>
              <p className="nf-strip-text">{text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}