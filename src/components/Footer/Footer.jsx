import React, { useEffect, useRef } from "react";
import "../../CSS/Footer.css";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════
   SVG ICONS
══════════════════════════════════════ */
const Ic = {
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Link: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  BookOpen: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Headset: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  Send: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.1 6.1l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  GradCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  ),
  Medal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="14" r="6"/>
      <path d="M8 14l-4-7h16l-4 7"/>
      <path d="M9.5 9L12 2l2.5 7"/>
      <circle cx="12" cy="14" r="2"/>
    </svg>
  ),
  /* Social */
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  ),
};

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const QUICK_LINKS = [
  {name : "Home", url : "/"},
  {name : "About", url : "/about"},
  {name : "Courses", url : "/our-courses"},
  {name : "Career", url : "/career"},
  {name : "Gallery", url : "/gallery"},
  {name : "Contact", url : "/contact-us"},
]

const POPULAR_COURSES = [
  "Data Science", "Data Analytics", `AI ${"\u0026"} ML`, "Web Development", "DevOps", "Cloud Computing", "Cyber Security",
];

const STUDENT_SUPPORT = [
  "Placement Support","Mock Interviews","Resume Building",
  "Career Guidance","Student Portal","Downloads","FAQs",
];

const CONTACT = [
  {
    Icon: Ic.MapPin,
    text: "152, 3rd Floor, Saif Complex, Zone\u20131, MP Magar, Bhopal, Madhya Pradesh, India",
  },
  { Icon: Ic.Phone,  text: "+91 83495 30962"                  },
  { Icon: Ic.Mail,   text: "info\u0040netligent.com"               },
  { Icon: Ic.Clock,  text: "Mon\u2013Sat: 10:00 AM\u20139:00 PM" },
];

/* ══════════════════════════════════════
   ANIMATED WAVE CANVAS (matches other sections)
══════════════════════════════════════ */
function WaveCanvas() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0;

    const DOTS = Array.from({ length: 130 }, () => ({
      x:  Math.random(),
      y:  0.1 + Math.random() * 0.85,
      r:  0.5 + Math.random() * 1.6,
      sp: 0.003 + Math.random() * 0.009,
      ph: Math.random() * Math.PI * 2,
      blue: Math.random() > 0.4,
    }));

    const WAVES = [
      { yp:0.28, amp:28, f:0.007,  sp:0.48, col:"rgba(79,70,229,0.42)",   lw:2.0 },
      { yp:0.45, amp:22, f:0.011,  sp:0.76, col:"rgba(99,102,241,0.32)",  lw:1.5 },
      { yp:0.60, amp:34, f:0.0058, sp:0.34, col:"rgba(109,40,217,0.38)",  lw:2.4 },
      { yp:0.74, amp:18, f:0.014,  sp:0.96, col:"rgba(167,139,250,0.24)", lw:1.2 },
      { yp:0.86, amp:14, f:0.019,  sp:1.22, col:"rgba(192,132,252,0.18)", lw:0.9 },
    ];

    function draw() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      t += 0.013;

      WAVES.forEach(w => {
        const bY = H * w.yp;
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 2) {
          const y = bY
            + Math.sin(x * w.f + t * w.sp) * w.amp
            + Math.sin(x * w.f * 1.85 + t * w.sp * 1.4) * w.amp * 0.4;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        const g = ctx.createLinearGradient(0, bY - w.amp, 0, H);
        g.addColorStop(0, w.col);
        g.addColorStop(1, "rgba(7,9,26,0)");
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        for (let x = 0; x <= W; x += 2) {
          const y = bY
            + Math.sin(x * w.f + t * w.sp) * w.amp
            + Math.sin(x * w.f * 1.85 + t * w.sp * 1.4) * w.amp * 0.4;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w.col;
        ctx.lineWidth   = w.lw;
        ctx.shadowBlur  = 14;
        ctx.shadowColor = w.col;
        ctx.stroke();
        ctx.shadowBlur  = 0;
      });

      DOTS.forEach(d => {
        const x = d.x * W;
        const y = d.y * H + Math.sin(t * d.sp * 55 + d.ph) * 9;
        const a = Math.max(0.05, Math.min(0.85, 0.4 + Math.sin(t * d.sp * 40 + d.ph) * 0.35));
        const c = d.blue ? "#4f46e5" : "#818cf8";
        ctx.beginPath();
        ctx.arc(x, y, d.r, 0, Math.PI * 2);
        ctx.fillStyle   = c;
        ctx.globalAlpha = a;
        ctx.shadowBlur  = 8;
        ctx.shadowColor = c;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur  = 0;
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return <canvas ref={canvasRef} className="fv-wave-canvas" />;
}
/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function Footer() {
 

  return (
    <footer className="ft-footer">

      {/* ── CTA Banner ── */}
      <div className="ft-cta-wrap">
        <div className="ft-cta-bar">
          <p className="ft-cta-text">Ready to build your future with Netligent?</p>
          <Link to="/contact-us">
            <button className="ft-cta-btn">
            Get in Touch <Ic.ArrowRight />
          </button>
          </Link>
        
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="ft-body">

        {/* Col 1 — Brand */}
        <div className="ft-brand">
          <div className="ft-logo">
            <div className="ft-logo-text">Netligent Technologies</div>
            <span className="ft-logo-sub">Empowering Futures</span>
          </div>

          <p className="ft-brand-desc">
            Netligent is a leading IT training institute committed to delivering
            industry-focused education, hands-on experience, and placement support
            to help students build successful careers.
          </p>

          <div className="ft-socials">
            {[
              { Icon: Ic.Facebook,  label: "Facebook", link : "https://www.facebook.com/profile.php?id=61551170937539"},
              { Icon: Ic.Instagram, label: "Instagram", link : "https://www.instagram.com/netligenttechnologies/"},
              { Icon: Ic.LinkedIn,  label: "LinkedIn", link : "https://www.linkedin.com/company/99984299/admin/dashboard/"  },
              { Icon: Ic.YouTube,   label: "YouTube", cls: "yt", link : "https://www.youtube.com/@Netligent"},
             
            ].map(({ Icon, label, cls, link }) => (
              <Link
                key={label}
                to={link}
                className={`ft-social-btn ${cls || ""}`}
                aria-label={label}
                target="_blank"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <div className="ft-col-header">
            <Ic.Link />
            <span>Quick Links</span>
          </div>
          <ul className="ft-links">
            {QUICK_LINKS.map((links) => (
              <li key={links.name}>
                <Link to={links.url}>
                  <Ic.ChevronRight /> {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Popular Courses */}
        <div>
          <div className="ft-col-header">
            <Ic.BookOpen />
            <span>Popular Courses</span>
          </div>
          <ul className="ft-links">
            {POPULAR_COURSES.map((item) => (
              <li key={item}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <Ic.ChevronRight /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

         {/* Col 5 — Contact Us */}
        <div>
          <div className="ft-col-header">
            <Ic.Send />
            <span>Contact Us</span>
        </div>
          <ul className="ft-contact-list">
            {CONTACT.map(({ Icon, text }, i) => (
              <li className="ft-contact-item" key={i}>
                <div className="ft-contact-icon">
                  <Icon />
                </div>
                <div className="ft-contact-text" style={{ whiteSpace: "pre-line" }}>
                  {text}
                </div>
              </li>
            ))}
          </ul>

        </div>

      {/* Col 4 — Google Business Profile */}
        <div>
          <div className="ft-col-header">
            <Ic.MapPin />
            <span>Find Us on Google</span>
          </div>

          <div className="ft-gmb-embed">
            <iframe
              title="Netligent Technologies - Google Business Profile"
              src="https://www.google.com/maps?q=Netligent+Technologies+Saif+Complex+Zone-1+MP+Nagar+Bhopal&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
             <Link to="https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-gmb-link"
            >
             View on Google &amp; Leave a Review
            </Link>
          </div>
        </div>

        
       

      </div>{/* /ft-body */}



   

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <p className="ft-bottom-copy">
          {"\u00A9"} 2023 Netligent Technologies LLP. All Rights Reserved.
        </p>
        <div className="ft-bottom-links">
          {["Privacy Policy", `Terms ${"\u0026"}  Conditions`].map((lnk, i) => (
            <Link
              key={lnk}
              to="#"
              className="ft-bottom-link"
              onClick={(e) => e.preventDefault()}
              style={i === 0 ? { borderRight: "1px solid rgba(99,119,200,0.18)" } : {}}
            >
              {lnk}
            </Link>
          ))}
        </div>
      </div>
   {/* ══ ANIMATED WAVE ══ */}
      <WaveCanvas />
    </footer>
  );
}