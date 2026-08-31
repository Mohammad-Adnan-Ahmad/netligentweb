import React from "react";
import "../../CSS/About/WhoWeAre.css";

/* ══════════════════════════════════════
   SVG ICONS
══════════════════════════════════════ */
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

/* ══════════════════════════════════════
   STUDENTS ILLUSTRATION SVG
   Realistic group of 3 students at laptop
══════════════════════════════════════ */
const StudentsIllustration = () => (
  <svg
    viewBox="0 0 520 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", maxWidth: 520, height: "auto" }}
  >
    {/* ── Floor/table glow ── */}
    <ellipse cx="260" cy="390" rx="220" ry="28"
      fill="rgba(139,92,246,0.18)" filter="url(#blur1)" />
    <defs>
      <filter id="blur1"><feGaussianBlur stdDeviation="12"/></filter>
      <filter id="blur2"><feGaussianBlur stdDeviation="8"/></filter>
      <filter id="blur3"><feGaussianBlur stdDeviation="18"/></filter>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(56,189,248,0.15)"/>
        <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
      </radialGradient>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0d2060"/>
        <stop offset="100%" stopColor="#070f30"/>
      </linearGradient>
      <linearGradient id="tableGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a3a"/>
        <stop offset="100%" stopColor="#0d0d20"/>
      </linearGradient>
      <linearGradient id="personGrad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e2a4a"/>
        <stop offset="100%" stopColor="#0e1428"/>
      </linearGradient>
      <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c8a080"/>
        <stop offset="100%" stopColor="#a87858"/>
      </linearGradient>
    </defs>

    {/* ── Table ── */}
    <rect x="30" y="330" width="460" height="28" rx="6" fill="url(#tableGrad)" stroke="rgba(99,119,200,0.2)" strokeWidth="1"/>
    {/* table reflection glow */}
    <rect x="30" y="330" width="460" height="4" rx="2" fill="rgba(56,189,248,0.15)"/>

    {/* ── LAPTOP ── */}
    {/* Laptop base */}
    <rect x="160" y="300" width="200" height="14" rx="4" fill="#1a1a3a" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
    <rect x="168" y="302" width="184" height="10" rx="2" fill="#0e0e28"/>
    {/* Laptop screen */}
    <rect x="150" y="180" width="220" height="130" rx="8" fill="#0a0a20" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5"/>
    <rect x="154" y="184" width="212" height="122" rx="6" fill="url(#screenGrad)"/>
    {/* screen content */}
    <rect x="162" y="192" width="80" height="6" rx="3" fill="rgba(96,165,250,0.5)"/>
    <rect x="162" y="202" width="120" height="4" rx="2" fill="rgba(167,139,250,0.3)"/>
    <rect x="162" y="210" width="100" height="4" rx="2" fill="rgba(167,139,250,0.25)"/>
    {/* code lines */}
    <rect x="162" y="222" width="60" height="3" rx="1.5" fill="rgba(56,189,248,0.4)"/>
    <rect x="170" y="229" width="90" height="3" rx="1.5" fill="rgba(96,165,250,0.35)"/>
    <rect x="170" y="236" width="70" height="3" rx="1.5" fill="rgba(167,139,250,0.3)"/>
    <rect x="162" y="243" width="80" height="3" rx="1.5" fill="rgba(56,189,248,0.3)"/>
    <rect x="170" y="250" width="100" height="3" rx="1.5" fill="rgba(96,165,250,0.25)"/>
    <rect x="162" y="257" width="55" height="3" rx="1.5" fill="rgba(167,139,250,0.25)"/>
    {/* Netligent label on screen */}
    <text x="260" y="295" textAnchor="middle" fontSize="11"
      fontWeight="800" fontFamily="Outfit, sans-serif"
      fill="rgba(96,165,250,0.7)" letterSpacing="1">Netligent</text>
    {/* screen glow */}
    <ellipse cx="260" cy="240" rx="90" ry="55" fill="rgba(59,130,246,0.06)" filter="url(#blur2)"/>
    {/* laptop hinge */}
    <rect x="148" y="310" width="224" height="4" rx="2" fill="#111128"/>
    {/* keyboard hint */}
    <rect x="175" y="304" width="170" height="6" rx="2" fill="#151530"/>

    {/* ── PERSON LEFT (glasses, blue hoodie) ── */}
    {/* body */}
    <ellipse cx="100" cy="380" rx="55" ry="60" fill="#0d1525"/>
    <path d="M50 380 Q70 300 100 280 Q130 300 150 380 Z" fill="#111e38"/>
    {/* neck */}
    <rect x="90" y="248" width="20" height="30" rx="10" fill="#b89070"/>
    {/* head */}
    <ellipse cx="100" cy="230" rx="32" ry="36" fill="#c09070"/>
    {/* hair */}
    <ellipse cx="100" cy="202" rx="35" ry="24" fill="#1a0e08"/>
    <rect x="68" y="202" width="10" height="20" rx="5" fill="#1a0e08"/>
    <rect x="122" y="202" width="10" height="20" rx="5" fill="#1a0e08"/>
    {/* glasses */}
    <rect x="83" y="228" width="14" height="10" rx="3" fill="none" stroke="rgba(150,160,200,0.7)" strokeWidth="1.5"/>
    <rect x="103" y="228" width="14" height="10" rx="3" fill="none" stroke="rgba(150,160,200,0.7)" strokeWidth="1.5"/>
    <line x1="97" y1="233" x2="103" y2="233" stroke="rgba(150,160,200,0.7)" strokeWidth="1.5"/>
    <line x1="83" y1="233" x2="78" y2="231" stroke="rgba(150,160,200,0.7)" strokeWidth="1.5"/>
    <line x1="117" y1="233" x2="122" y2="231" stroke="rgba(150,160,200,0.7)" strokeWidth="1.5"/>
    {/* eyes */}
    <ellipse cx="90" cy="233" rx="4" ry="4.5" fill="#2a1808"/>
    <ellipse cx="110" cy="233" rx="4" ry="4.5" fill="#2a1808"/>
    <circle cx="91" cy="231.5" r="1.4" fill="#fff"/>
    <circle cx="111" cy="231.5" r="1.4" fill="#fff"/>
    {/* smile */}
    <path d="M91 244 Q100 250 109 244" stroke="#a07050" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    {/* arm on table */}
    <path d="M55 320 Q80 330 130 330" stroke="#111e38" strokeWidth="28" strokeLinecap="round" fill="none"/>
    <path d="M90 330 L140 330" stroke="#0d1525" strokeWidth="16" strokeLinecap="round" fill="none"/>
    {/* hand writing */}
    <ellipse cx="138" cy="330" rx="10" ry="7" fill="#c09070"/>
    <rect x="144" y="325" width="2.5" height="16" rx="1" fill="#888" transform="rotate(12,145,333)"/>

    {/* ── PERSON MIDDLE (smiling, dark hoodie) ── */}
    {/* body */}
    <path d="M195 430 Q210 360 255 330 Q300 360 315 430 Z" fill="#0e1a2a"/>
    <rect x="210" y="280" width="90" height="80" rx="20" fill="#0e1a2a"/>
    {/* neck */}
    <rect x="245" y="252" width="20" height="28" rx="10" fill="#b89070"/>
    {/* head */}
    <ellipse cx="255" cy="234" rx="35" ry="40" fill="#c09070"/>
    {/* hair */}
    <ellipse cx="255" cy="202" rx="38" ry="26" fill="#120c06"/>
    <ellipse cx="222" cy="226" rx="10" ry="22" fill="#120c06"/>
    <ellipse cx="288" cy="226" rx="10" ry="22" fill="#120c06"/>
    {/* eyes — looking at screen happy */}
    <path d="M240 230 Q245 226 250 230" stroke="#2a1808" strokeWidth="1.8" fill="none"/>
    <path d="M260 230 Q265 226 270 230" stroke="#2a1808" strokeWidth="1.8" fill="none"/>
    <ellipse cx="245" cy="232" rx="5" ry="5.5" fill="#2a1808"/>
    <ellipse cx="265" cy="232" rx="5" ry="5.5" fill="#2a1808"/>
    <circle cx="246.5" cy="230" r="1.6" fill="#fff"/>
    <circle cx="266.5" cy="230" r="1.6" fill="#fff"/>
    {/* big smile */}
    <path d="M240 248 Q255 260 270 248" stroke="#a07050" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    {/* teeth */}
    <path d="M242 249 Q255 258 268 249" fill="rgba(255,255,255,0.55)"/>
    {/* cheeks */}
    <ellipse cx="236" cy="246" rx="7" ry="4.5" fill="rgba(200,120,100,0.25)"/>
    <ellipse cx="274" cy="246" rx="7" ry="4.5" fill="rgba(200,120,100,0.25)"/>
    {/* arms on keyboard */}
    <path d="M205 310 Q230 325 280 325" stroke="#0e1a2a" strokeWidth="26" strokeLinecap="round" fill="none"/>
    <ellipse cx="285" cy="325" rx="14" ry="9" fill="#c09070"/>

    {/* ── PERSON RIGHT (female, dark blue top) ── */}
    {/* body */}
    <path d="M340 430 Q360 360 400 340 Q440 360 460 430 Z" fill="#0c1826"/>
    <rect x="358" y="280" width="84" height="80" rx="20" fill="#0c1826"/>
    {/* neck */}
    <rect x="390" y="248" width="20" height="28" rx="10" fill="#b89070"/>
    {/* head */}
    <ellipse cx="400" cy="230" rx="34" ry="38" fill="#c09070"/>
    {/* hair — long */}
    <ellipse cx="400" cy="200" rx="37" ry="24" fill="#1a0e08"/>
    <path d="M368 210 Q358 260 365 340 Q380 320 380 280 Q368 260 368 210 Z" fill="#1a0e08"/>
    <path d="M432 210 Q442 260 435 340 Q420 320 420 280 Q432 260 432 210 Z" fill="#1a0e08"/>
    {/* eyebrows */}
    <path d="M385 222 Q392 218 399 222" stroke="#5a3010" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M401 222 Q408 218 415 222" stroke="#5a3010" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* eyes */}
    <ellipse cx="392" cy="230" rx="5" ry="5.5" fill="#2a1808"/>
    <ellipse cx="408" cy="230" rx="5" ry="5.5" fill="#2a1808"/>
    <circle cx="393.5" cy="228" r="1.6" fill="#fff"/>
    <circle cx="409.5" cy="228" r="1.6" fill="#fff"/>
    {/* lower lashes */}
    <path d="M388 235 Q392 238 396 235" stroke="#2a1808" strokeWidth="1" fill="none"/>
    <path d="M404 235 Q408 238 412 235" stroke="#2a1808" strokeWidth="1" fill="none"/>
    {/* nose */}
    <path d="M397 242 Q400 247 403 242" stroke="#a07050" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    {/* smile */}
    <path d="M389 252 Q400 261 411 252" stroke="#a07050" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* teeth */}
    <path d="M391 253 Q400 260 409 253" fill="rgba(255,255,255,0.5)"/>
    {/* earring */}
    <circle cx="367" cy="238" r="3" fill="#c09070"/>
    <circle cx="367" cy="245" r="2" fill="rgba(200,180,150,0.8)"/>
    {/* chin resting on hand */}
    <ellipse cx="380" cy="274" rx="14" ry="10" fill="#c09070"/>
    <path d="M366 278 Q366 300 370 330" stroke="#c09070" strokeWidth="14" strokeLinecap="round" fill="none"/>
    {/* arm propped up */}
    <path d="M370 330 Q380 328 395 328" stroke="#0c1826" strokeWidth="22" strokeLinecap="round" fill="none"/>

    {/* ── notebook beside laptop ── */}
    <rect x="370" y="305" width="70" height="28" rx="4" fill="#0a0a18" stroke="rgba(99,119,200,0.2)" strokeWidth="1"/>
    <line x1="378" y1="311" x2="432" y2="311" stroke="rgba(99,119,200,0.2)" strokeWidth="1"/>
    <line x1="378" y1="316" x2="432" y2="316" stroke="rgba(99,119,200,0.15)" strokeWidth="1"/>
    <line x1="378" y1="321" x2="420" y2="321" stroke="rgba(99,119,200,0.12)" strokeWidth="1"/>

    {/* ── Screen glow on faces ── */}
    <ellipse cx="170" cy="310" rx="60" ry="80"
      fill="rgba(59,130,246,0.06)" filter="url(#blur3)"/>
  </svg>
);

/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function WhoWeAre() {
  return (
    <section className="wwa-section">
      <div className="wwa-container">

        {/* ════ LEFT COLUMN ════ */}
        <div className="wwa-left">

          {/* Badge */}
          <div className="wwa-badge">
            <UsersIcon />
            Who We Are
          </div>

          {/* Title */}
          <h1 className="wwa-title">
            More Than An Institute.
            <br />
            A{" "}
            <span className="t-gradient">Career Transformation Hub.</span>
            
          </h1>

          {/* Body */}
          <p className="wwa-body">
            At Netligent, we are more than just an IT training institute —
            we are a career transformation hub built for the next generation
            of tech professionals.
          </p>

          {/* Founded card */}
          <div className="wwa-founded-card">
            <div className="wwa-cal-icon">
              <CalendarIcon />
            </div>
            <div className="wwa-founded-text">
              <p className="wwa-founded-p">
                Founded on{" "}
                <span className="date-highlight">8th September 2023</span>
                , Netligent was created with a clear mission:
              </p>
              <div className="wwa-mission">
                <div className="wwa-mission-chevron">
                  <ChevronRightIcon />
                </div>
                <p className="wwa-mission-text">
                  To bridge the gap between learning and real-world industry demands.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="wwa-story-section">
            <div className="wwa-story-header">
              <div className="wwa-story-icon">
                <RocketIcon />
              </div>
              <h2 className="wwa-story-title">
                <span>Our </span>
                <span className="t-blue">Story</span>
              </h2>
            </div>

            <p className="wwa-story-body">
              In today's fast-evolving digital world, traditional learning is not enough.
            </p>
            <p className="wwa-story-body">
              That's why Netligent was born — to provide practical, industry-focused
              training that truly prepares students for real careers.
            </p>
          </div>
        </div>

        {/* ════ RIGHT COLUMN ════ */}
        <div className="wwa-right">

          {/* Glowing arch ring */}
         
            <img src="Reception_Netligent.png" 
            alt="Netligent Technologies"
            className="wwa-arch-ring-img"
            />
          {/* Particle dots grid */}
          <div className="wwa-dots-grid" />

        </div>
      </div>

      <div className="wwa-footer">
           <p className="wwa-story-body2">We don't just teach concepts.</p>
            <p className="wwa-story-highlight">
              We build{" "}
              <span className="hl-blue">skills</span>,{" "}
              <span className="hl-purple">confidence</span>, and{" "}
              <span className="hl-cyan">job-ready professionals</span>.
            </p>
        </div>
    </section>
  );
}