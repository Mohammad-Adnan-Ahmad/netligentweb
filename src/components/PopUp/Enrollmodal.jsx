import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EnrollModal.css";

/* ══ Icons (kept consistent with the ContactForm icon set) ══ */
const IconPaperPlane = () => (
  <svg viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconEnvelope = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const IconPhoneSmall = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IconPencil = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="13" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconSpark = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24">
    <path d="M8 12l3 3 8-8" />
    <path d="M3 12l3-3 4 4-3 3-4-4z" />
  </svg>
);

/* ══ Validation — identical rules to ContactForm ══ */
const NAME_REGEX = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

export const SUBJECT_OPTIONS = [
  { value: "data-science", label: "Data Science" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "ai-ml", label: "AI & ML" },
  { value: "devops", label: "DevOps" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "cyber-security", label: "Cyber Security" },
  { value: "web-development", label: "Web Development" },
  { value: "others", label: "Others" },
];

const validateField = (name, value) => {
  const v = value.trim();
  switch (name) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (!NAME_REGEX.test(v)) return "Name should contain letters only.";
      return "";
    case "email":
      if (!v) return "Please enter your email address.";
      if (!EMAIL_REGEX.test(v)) return "Please enter a valid email address.";
      return "";
    case "phone":
      if (!v) return "Please enter your phone number.";
      if (!PHONE_REGEX.test(v.replace(/\s+/g, "")))
        return "Enter a valid 10-digit mobile number.";
      return "";
    case "subject":
      if (!v) return "Please select what you're interested in.";
      return "";
    case "message":
      if (!v) return "Please enter your message.";
      if (v.length < 10) return "Message should be at least 10 characters.";
      return "";
    default:
      return "";
  }
};

/* ══ Course-specific left-panel copy ══
   Keyed by the same value used in SUBJECT_OPTIONS, so a course card's
   "Enroll Now" button can pass its own subject value straight in. */
export const COURSE_CONTENT = {
  "data-science": {
    kicker: "Data Science cohort",
    heading: "Every dataset has a decision hiding in it.",
    blurb:
      "Learn to find it — from Python and statistics through to models recruiters actually ask about in interviews.",
    points: [
      { icon: <IconTarget />, text: "Live projects on real, messy datasets" },
      { icon: <IconSpark />, text: "Doubt-clearing with working data scientists" },
      { icon: <IconHandshake />, text: "Placement drive access on completion" },
    ],
  },
  "data-analytics": {
    kicker: "Data Analytics cohort",
    heading: "Numbers only matter once someone acts on them.",
    blurb:
      "Build the Excel-to-SQL-to-dashboard skillset that turns raw numbers into calls a business can actually make.",
    points: [
      { icon: <IconTarget />, text: "Hands-on with Excel, SQL and Power BI" },
      { icon: <IconSpark />, text: "Case studies from hiring-partner companies" },
      { icon: <IconHandshake />, text: "Resume and interview prep included" },
    ],
  },
  "ai-ml": {
    kicker: "AI & ML cohort",
    heading: "Models don't teach themselves. Mentors help.",
    blurb:
      "Go from the maths behind machine learning to deploying models, with weekly reviews from people who've shipped them.",
    points: [
      { icon: <IconTarget />, text: "Build and deploy your own ML projects" },
      { icon: <IconSpark />, text: "Weekly 1:1 mentor project reviews" },
      { icon: <IconHandshake />, text: "Direct referrals to hiring partners" },
    ],
  },
  devops: {
    kicker: "DevOps cohort",
    heading: "Ship faster, break less.",
    blurb:
      "Get comfortable with the pipelines, containers and cloud tooling that keep production software running.",
    points: [
      { icon: <IconTarget />, text: "CI/CD, Docker and Kubernetes labs" },
      { icon: <IconSpark />, text: "Infra you build and monitor yourself" },
      { icon: <IconHandshake />, text: "Placement support once you're job-ready" },
    ],
  },
  "cloud-computing": {
    kicker: "Cloud Computing cohort",
    heading: "The cloud rewards people who can actually run it.",
    blurb:
      "Get hands-on with the platforms companies deploy on daily, not just the slide-deck version of cloud architecture.",
    points: [
      { icon: <IconTarget />, text: "Hands-on labs across major cloud platforms" },
      { icon: <IconSpark />, text: "Certification-aligned curriculum" },
      { icon: <IconHandshake />, text: "Placement assistance after training" },
    ],
  },
  "cyber-security": {
    kicker: "Cyber Security cohort",
    heading: "Someone has to think like the attacker first.",
    blurb:
      "Learn the tools and thinking behind real security work — from network defence to ethical hacking practice.",
    points: [
      { icon: <IconTarget />, text: "Practical labs, not just theory slides" },
      { icon: <IconSpark />, text: "Mentors with live security experience" },
      { icon: <IconHandshake />, text: "Placement drives with security teams" },
    ],
  },
  "web-development": {
    kicker: "Web Development cohort",
    heading: "Every product you use started as a form like this one.",
    blurb:
      "Build full-stack projects from scratch and leave with a portfolio, not just a certificate.",
    points: [
      { icon: <IconTarget />, text: "Full-stack projects for your portfolio" },
      { icon: <IconSpark />, text: "Code reviews from working developers" },
      { icon: <IconHandshake />, text: "Placement support on completion" },
    ],
  },
  others: {
    kicker: "Get started",
    heading: "Tell us what you're aiming for. We'll map the path.",
    blurb:
      "Share a few details and our counsellors will get back to you with the right course and timeline for you.",
    points: [
      { icon: <IconTarget />, text: "Guidance tailored to your goal" },
      { icon: <IconSpark />, text: "A real counsellor, not a chatbot" },
      { icon: <IconHandshake />, text: "Placement support once you enrol" },
    ],
  },
};

/**
 * EnrollModal
 * Props:
 *  - isOpen: boolean
 *  - onClose: () => void
 *  - course: one of SUBJECT_OPTIONS[].value — decides the left-panel copy
 *            and pre-fills the Subject field (defaults to "others")
 */
export default function EnrollModal({ isOpen, onClose, course = "others" }) {
  const content = COURSE_CONTENT[course] || COURSE_CONTENT.others;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: course,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const panelRef = useRef(null);

  // Keep the pre-selected subject in sync with the course that opened the modal
  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, subject: course }));
    }
  }, [isOpen, course]);

  // Escape-to-close + body scroll lock while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name] || submitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const fieldNames = Object.keys(form);
    const newErrors = {};
    fieldNames.forEach((name) => {
      newErrors[name] = validateField(name, form[name]);
    });
    setErrors(newErrors);
    setTouched(fieldNames.reduce((acc, name) => ({ ...acc, [name]: true }), {}));

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      toast.error("Please fix the highlighted fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mgawalyk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("Thanks for enrolling! We'll get back to you shortly.");
        setForm({ name: "", email: "", phone: "", subject: course, message: "" });
        setErrors({});
        setTouched({});
        setSubmitted(false);
        setLoading(false);
        onClose?.();
      } else {
        toast.error("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      setLoading(false);
    }
  };

  const fieldClass = (name) => `em-field-inner${errors[name] ? " em-field-error" : ""}`;
  const wrapperClass = (name) => `em-field${errors[name] ? " em-field-has-error" : ""}`;

  return (
    <div className="em-backdrop" onMouseDown={handleBackdropClick} role="dialog" aria-modal="true" aria-label="Enroll now">
      <ToastContainer position="top-right" autoClose={4000} theme="dark" newestOnTop />

      <div className="em-panel" ref={panelRef}>
        <button type="button" className="em-close" onClick={onClose} aria-label="Close">
          <IconClose />
        </button>

        {/* ══ LEFT — course copy ══ */}
        <div className="em-left">
          <div className="em-left-pattern" />
          <span className="em-kicker">{content.kicker}</span>
          <h2 className="em-heading">{content.heading}</h2>
          <p className="em-blurb">{content.blurb}</p>

          <ul className="em-points">
            {content.points.map((p, i) => (
              <li key={i} className="em-point">
                <span className="em-point-icon">{p.icon}</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="em-left-foot">
            Seats for this cohort are limited to keep mentor attention high.
          </div>
        </div>

        {/* ══ RIGHT — form ══ */}
        <div className="em-right">
          <div className="em-form-header">
            <span className="em-form-title">Reserve your seat</span>
            <span className="em-form-sub">Takes less than a minute.</span>
          </div>

          <form onSubmit={handleSubmit} noValidate className="em-form">
            <div className={wrapperClass("name")}>
              <label className="em-label">
                <IconUser /> Your Name <span className="em-required">*</span>
              </label>
              <div className={fieldClass("name")}>
                <IconUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                />
              </div>
              {errors.name && (
                <span className="em-error-msg">
                  <IconAlert /> {errors.name}
                </span>
              )}
            </div>

            <div className={wrapperClass("email")}>
              <label className="em-label">
                <IconEnvelope /> Email Address <span className="em-required">*</span>
              </label>
              <div className={fieldClass("email")}>
                <IconEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                />
              </div>
              {errors.email && (
                <span className="em-error-msg">
                  <IconAlert /> {errors.email}
                </span>
              )}
            </div>

            <div className={wrapperClass("phone")}>
              <label className="em-label">
                <IconPhoneSmall /> Phone Number <span className="em-required">*</span>
              </label>
              <div className={fieldClass("phone")}>
                <IconPhoneSmall />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                  aria-invalid={!!errors.phone}
                />
              </div>
              {errors.phone && (
                <span className="em-error-msg">
                  <IconAlert /> {errors.phone}
                </span>
              )}
            </div>

            <div className={`${wrapperClass("subject")} em-field-select`}>
              <label className="em-label">
                <IconDoc /> Interested In <span className="em-required">*</span>
              </label>
              <div className={`${fieldClass("subject")} em-select-wrap`}>
                <IconDoc />
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="em-select"
                  aria-invalid={!!errors.subject}
                >
                  <option value="" disabled>
                    What is this regarding?
                  </option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <svg className="em-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              {errors.subject && (
                <span className="em-error-msg">
                  <IconAlert /> {errors.subject}
                </span>
              )}
            </div>

            <div className={`${wrapperClass("message")} em-full`}>
              <label className="em-label">
                <IconPencil /> Your Message <span className="em-required">*</span>
              </label>
              <div className={fieldClass("message")}>
                <textarea
                  name="message"
                  placeholder="Tell us a bit about your background or when you'd like to start..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                />
              </div>
              {errors.message && (
                <span className="em-error-msg">
                  <IconAlert /> {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="em-submit" disabled={loading}>
              <IconPaperPlane />
              {loading ? "Sending..." : "Enroll Now"}
            </button>

            <div className="em-secure">
              <IconLock />
              Your information is 100% secure and confidential.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}