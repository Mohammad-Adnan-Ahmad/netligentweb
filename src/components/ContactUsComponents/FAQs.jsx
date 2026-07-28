import { useState } from "react";
import "../../CSS/ContactUs/FAQs.css";

/* ══════════════════════════════════════
   FAQ DATA  — icon, iconBg, question, answer
══════════════════════════════════════ */
const FAQS = [
  {
    icon: "❓",
    iconBg: "rgba(139,92,246,0.22)",
    iconBorder: "rgba(139,92,246,0.5)",
    question: "How can I contact Netligent Technologies?",
    answer:
      "You can reach us via phone, email, WhatsApp, or by visiting our office. All our contact details are available in the Contact Info section above.",
    defaultOpen: true,
  },
  {
    icon: "👥",
    iconBg: "rgba(20,184,166,0.16)",
    iconBorder: "rgba(20,184,166,0.5)",
    question: "What are your working hours?",
    answer:
      "We are available Monday to Saturday, 9:00 AM to 7:00 PM IST. Our online support team is available 24/7 via WhatsApp for urgent queries.",
  },
  {
    icon: "🎓",
    iconBg: "rgba(249,115,22,0.16)",
    iconBorder: "rgba(249,115,22,0.5)",
    question: "Do you offer online courses or support?",
    answer:
      "Yes! All our courses are available both online and offline. You can attend live classes, access recorded sessions, and get mentor support from anywhere.",
  },
  {
    icon: "💳",
    iconBg: "rgba(56,189,248,0.16)",
    iconBorder: "rgba(56,189,248,0.5)",
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and EMI options. Flexible payment plans are available to suit every student's budget.",
  },
  {
    icon: "🏅",
    iconBg: "rgba(168,85,247,0.18)",
    iconBorder: "rgba(168,85,247,0.5)",
    question: "Can I visit your office before enrolling?",
    answer:
      "Absolutely! We welcome walk-in visits. Our office is open Monday to Saturday. You can also schedule a free counselling session before joining.",
  },
  {
    icon: "💬",
    iconBg: "rgba(20,184,166,0.16)",
    iconBorder: "rgba(20,184,166,0.5)",
    question: "How quickly will I get a response?",
    answer:
      "We typically respond within a few hours. WhatsApp and phone queries are answered the fastest. Emails are responded to within 24 hours on business days.",
  },
];

/* ══════════════════════════════════════
   BOTTOM FEATURES DATA
══════════════════════════════════════ */
const BOTTOM_FEATS = [
  { icon: "⚡", title: "Quick Answers",   body: "Get instant solutions to your queries." },
  { icon: "🛡️", title: "Trusted Support",  body: "Our team is reliable and always here." },
  { icon: "👍", title: "Student First",    body: "Your satisfaction is our top priority." },
  { icon: "😊", title: "We Care",          body: "Helping you learn, grow and succeed." },
];

/* ══════════════════════════════════════
   PAPER PLANE SVG
══════════════════════════════════════ */
function PaperPlane() {
  return (
    <svg className="faq-plane" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M44 4 L4 20 L18 26 L24 44 L44 4Z"
        stroke="#818cf8"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M18 26 L44 4" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path
        d="M44 4 L4 20 L18 26 L24 44 L44 4Z"
        stroke="rgba(129,140,248,0.3)"
        strokeWidth="6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Dashed trail */}
      <path
        d="M18 26 Q10 34 4 42"
        stroke="rgba(129,140,248,0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-glow" />

      {/* ══ MAIN GRID ══ */}
      <div className="faq-grid">

        {/* ── LEFT COLUMN ── */}
        <div className="faq-left">

          {/* Tag */}
          <div className="faq-tag">
            <span>❓</span>
            FAQs
          </div>

          {/* Title */}
          <h2 className="faq-title">Got Questions?
          <span className="faq-title-grad">We've Got Answers!</span>
          </h2>
    

          {/* Subtitle */}
          <p className="faq-subtitle">
            Here are some common questions our students
            and visitors ask. If you need more help, our team
            is always here for you!
          </p>

          {/* ── FAQ 3D Illustration ── */}
          <div className="faq-illus">
            <img 
            src="/FAQs.png" 
            alt="FAQs"
            className="faq-illus-img"
            />
          </div>

          {/* ── Still have a question? ── */}
          <div className="faq-still-box">
            <div className="faq-still-icon">🎧</div>
            <div className="faq-still-texts">
              <div className="faq-still-title">Still have a question?</div>
              <div className="faq-still-body">Our support team is ready to help you personally.</div>
            </div>
            <button className="faq-contact-btn">
              Contact Us <span>→</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Accordion ── */}
        <div className="faq-right">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${openIdx === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              {/* Header */}
              <div className="faq-item-header">
                <div
                  className="faq-item-icon"
                  style={{
                    background: f.iconBg,
                    border: `1.5px solid ${f.iconBorder}`,
                  }}
                >
                  {f.icon}
                </div>

                <div className="faq-item-question">{f.question}</div>

                <div className="faq-chevron">
                  {openIdx === i ? "∧" : "∨"}
                </div>
              </div>

              {/* Answer */}
              <div className="faq-item-body">
                <p className="faq-item-answer">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}