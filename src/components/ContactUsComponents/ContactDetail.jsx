import React from "react";
import "../../CSS/ContactUs/ContactDetails.css"
import { FaWhatsapp } from "react-icons/fa";
/* ── Card Icons ── */
const IconPhone = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 21l1.65-4.95A8.5 8.5 0 1 1 8.6 19.4L3 21z" />
    <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" strokeLinecap="round" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" fill="#06061a" stroke="none" />
  </svg>
);

/* ── Trust strip Icons ── */
const IconShield = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconTeam = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="3" />
    <path d="M5 20c0-3 3-5 7-5s7 2 7 5" />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13 2L4.09 12.96A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.96A1 1 0 0 0 19 9.5H12.5L13 2z" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);


/* ── Card data ── */
const cards = [
  {
    color: "purple",
    icon: <IconPhone />,
    title: "Call Us",
    tag: "Let's talk!",
    desc: "Speak with our experts and get instant support.",
    pillIcon: <IconPhone />,
    pillText: "+91 83495 30962",
  },
  {
    color: "teal",
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    tag: "Quick & Easy",
    desc: "Chat with us on WhatsApp for quick responses.",
    pillIcon: <FaWhatsapp />,
    pillText: "+91 83495 30962",
  },
  {
    color: "orange",
    icon: <IconMail />,
    title: "Email Us",
    tag: "Drop a mail",
    desc: "Send us your queries anytime, we reply fast.",
    pillIcon: <IconMail />,
    pillText: "info@netligent.com",
  },
  {
    color: "blue",
    icon: <IconPin />,
    title: "Visit Us",
    tag: "Our Location",
    desc: "Come say hello at our office!",
    pillIcon: <IconPin />,
    pillText: "152, 3rd Floor, Saif Complex, Zone-1, MP Magar, Bhopal, Madhya Pradesh, India",
  },
];

/* ── Trust strip data ── */
const trustItems = [
  {
    color: "purple",
    icon: <IconShield />,
    label: "Trusted by",
    value: "10,000+",
    sub: "Happy Learners",
  },
  {
    color: "teal",
    icon: <IconTeam />,
    label: "Expert Team",
    value: "Always Here",
    sub: "to Help You",
  },
  {
    color: "orange",
    icon: <IconBolt />,
    label: "Quick Response",
    value: "Within 24 Hours",
    sub: "Guaranteed",
  },
  {
    color: "blue",
    icon: <IconHeart />,
    label: "Your Success",
    value: "Is Our Mission",
    sub: "Always & Forever",
  },
];

/* ── Component ── */
export default function ContactDetails() {
  return (
    <section className="cs-section">
      {/* Decorative elements */}
  

      {/* ── Header ── */}
      <div className="cs-header">
        <div className="cs-badge">
          <span className="dot" />
          Contact Info
          <span className="dot" />
        </div>

        <h2 className="cs-heading">
          Let's Connect &amp;
          <span className="line2">Create Something Amazing!</span>
        </h2>

        <p className="cs-subtext">
          We'd love to hear from you! Reach out to us through any of the
          following channels and our team will get back to you shortly.
        </p>

      </div>

      {/* ── Cards Grid ── */}
      <div className="cs-cards">
        {cards.map((c, i) => (
          <div key={i} className={`cs-card ${c.color}`}>
            {/* dot grid decoration */}

            <div className="cs-card-dots">
              {Array.from({ length: 9 }).map((_, idx) => (
                <span key={idx} />
              ))}
            </div>
            
             <div className="cs-card-main-icon-title-tag">
              <div className="cs-card-icon">{c.icon}</div>
              <div className="cs-card-title-tag">
                 <span className="cs-card-title">{c.title}</span>
               <span className="cs-card-tag">{c.tag}</span>
              </div>
             
            </div>
           
            <div className="cs-card-divider" />
            <p className="cs-card-desc">{c.desc}</p>

            <a href="#" className="cs-card-pill">
              {c.pillIcon}
              {c.pillText}
            </a>
          </div>
        ))}
      </div>

      {/* ── Trust Strip ── */}
      <div className="cs-trust">
        {trustItems.map((t, i) => (
          <div key={i} className="cs-trust-item">
            <div className={`cs-trust-icon ${t.color}`}>{t.icon}</div>
            <div className="cs-trust-text">
              <span className="cs-trust-label">{t.label}</span>
              <span className="cs-trust-value">{t.value}</span>
              <span className="cs-trust-sub">{t.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

