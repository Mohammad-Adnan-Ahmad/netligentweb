import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/ContactUs/ContactForm.css";

/* ══ Icons ══ */
const IconPaperPlane = () => (
  <svg viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13 2L4.09 12.96A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.96A1 1 0 0 0 19 9.5H12.5L13 2z" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 16a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 9h8M8 13h4" />
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
    <polyline points="10 9 9 9 8 9" />
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


/* ══ Validation ══ */
const NAME_REGEX = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/; // 10-digit Indian mobile number, no leading 0/+91

const SUBJECT_OPTIONS = [
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

/* ── Component ── */
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Live-validate once a field has been touched (or after a submit attempt)
    if (touched[name] || submitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
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
    setTouched(
      fieldNames.reduce((acc, name) => ({ ...acc, [name]: true }), {})
    );

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
        toast.success("Thank You For Contact Us ! We'll get back to you shortly.");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setTouched({});
        setSubmitted(false);
         setLoading(false);
       
      } else {
        toast.error("Something went wrong. Please try again.");
      
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };
  const fieldClass = (name) =>
    `cf-field-inner${errors[name] ? " cf-field-error" : ""}`;

  const wrapperClass = (name) =>
    `cf-field${errors[name] ? " cf-field-has-error" : ""}`;

  return (
    <section className="cf-section">
      <ToastContainer className='toast'
        position="top-right"
        autoClose={4000}
        theme="dark"
        newestOnTop
      />

      {/* ══════ LEFT ══════ */}
      <div className="cf-left">
        <div className="cf-star" />

        {/* Badge */}
        <div className="cf-badge">
          <IconPaperPlane />
          Contact Us
        </div>

        {/* Heading */}
        <h2 className="cf-heading">
          We're Here to
          <span className="line2">Help You Succeed!</span>
        </h2>

        {/* Description */}
        <p className="cf-desc">
          Have a question, need guidance, or want to know more about
          our courses? Fill out the form and our team will get back
          to you as soon as possible.
        </p>

        {/* Feature mini-cards */}
        <div className="cf-features">
          <div className="cf-feat">
            <div className="cf-feat-icon purple">
              <IconBolt />
            </div>
            <span className="cf-feat-title">Quick Response</span>
            <span className="cf-feat-sub">We reply within 24 hours</span>
          </div>
          <div className="cf-feat">
            <div className="cf-feat-icon teal">
              <IconShield />
            </div>
            <span className="cf-feat-title">100% Reliable</span>
            <span className="cf-feat-sub">Your information is safe with us</span>
          </div>
          <div className="cf-feat">
            <div className="cf-feat-icon orange">
              <IconPeople />
            </div>
            <span className="cf-feat-title">Expert Support</span>
            <span className="cf-feat-sub">Get help from our experts</span>
          </div>
        </div>

        {/* Prefer to talk box */}
        <div className="cf-talk-box">
          <div className="cf-talk-icon">
            <IconChat />
          </div>
          <div className="cf-talk-content">
            <span className="cf-talk-title">Prefer to talk?</span>
            <span className="cf-talk-sub">Our counselors are ready to help you.</span>
            <a href="tel:+918349112152" className="cf-talk-phone">
              <IconPhone />
              +91 83495 30962
            </a>
          </div>
          {/* handwritten Let's Connect! */}
          <span className="cf-talk-handwritten">
            Let's<br />Connect!
          </span>
        </div>

        {/* Bottom handwritten line */}
        <div className="cf-handwritten-wrap">
          <span className="cf-handwritten">
            We're just a <span className="hw-accent">message</span> away!
          </span>
        </div>
      </div>

      {/* ══════ RIGHT – FORM CARD ══════ */}
      <div className="cf-right">
        <div className="cf-form-card">

          {/* dot grid */}
          <div className="cf-form-dots">
            {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
          </div>

          {/* Header */}
          <div className="cf-form-header">
            <div className="cf-form-header-icon">
              <IconMail />
            </div>
            <div className="cf-form-header-text">
              <span className="cf-form-header-title">Send Us a Message</span>
              <span className="cf-form-header-sub">We'll get back to you shortly!</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="cf-grid">

              {/* Your Name */}
              <div className={wrapperClass("name")}>
                <label className="cf-field-label">
                  <IconUser /> Your Name <span className="cf-required">*</span>
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
                  <span className="cf-error-msg">
                    <IconAlert /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Address */}
              <div className={wrapperClass("email")}>
                <label className="cf-field-label">
                  <IconEnvelope /> Email Address <span className="cf-required">*</span>
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
                  <span className="cf-error-msg">
                    <IconAlert /> {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className={wrapperClass("phone")}>
                <label className="cf-field-label">
                  <IconPhoneSmall /> Phone Number <span className="cf-required">*</span>
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
                  <span className="cf-error-msg">
                    <IconAlert /> {errors.phone}
                  </span>
                )}
              </div>

              {/* Subject – dropdown */}
              <div className={`${wrapperClass("subject")} cf-field-select`}>
                <label className="cf-field-label">
                  <IconDoc /> Interested In <span className="cf-required">*</span>
                </label>
                <div className={`${fieldClass("subject")} cf-select-wrap`}>
                  <IconDoc />
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="cf-select"
                    aria-invalid={!!errors.subject}
                  >
                    <option value="" disabled>What is this regarding?</option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {/* custom chevron */}
                  <svg className="cf-chevron" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {errors.subject && (
                  <span className="cf-error-msg">
                    <IconAlert /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message – full width */}
              <div className={`${wrapperClass("message")} cf-full message`}>
                <label className="cf-field-label">
                  <IconPencil /> Your Message <span className="cf-required">*</span>
                </label>
                <div className={fieldClass("message")}>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your query..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                  />
                </div>
                {errors.message && (
                  <span className="cf-error-msg">
                    <IconAlert /> {errors.message}
                  </span>
                )}
              </div>

            </div>

            {/* Submit */}
            <button type="submit" className="cf-submit" disabled={loading}>
              <IconPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Security note */}
            <div className="cf-secure">
              <IconLock />
              Your information is 100% secure and confidential.
            </div>
          </form>

        </div>
      </div>

    </section>
  );
}