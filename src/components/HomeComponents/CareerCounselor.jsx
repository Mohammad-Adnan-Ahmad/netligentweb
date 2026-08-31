import React, { useState } from "react";
import "../../CSS/CareerCounselor.css";
import { Target, Map, Chat , Headset, User, Phone, Mail, GradCap, Clock, Arrow, Shield, Users, Eye, Bell} from "../Icons/Icons";
import CustomDropdown from "../Others/Customdropdown";
/* ══════════════════════════════════
   DATA
══════════════════════════════════ */
const FEATURES = [
  { icon: <Target />, name: "Personalized Guidance",        desc: "Get course & career advice tailored to you." },
  { icon: <Map />,    name: "Career Roadmap",                desc: "Clear roadmap to build your dream career." },
  { icon: <Chat />,   name: "Free Consultation",       desc: "Expert guidance with no strings attached." },
];

const INTERESTS = [
  { value: "Full Stack Development",     icon: "💻" },
  { value: "Cloud Computing (AWS)",      icon: "☁️" },
  { value: "Cyber Security Essentials",  icon: "🔐" },
  { value: "Data Science & AI/ML",       icon: "🤖" },
  { value: "Database Management",        icon: "🗄️" },
  { value: "UI/UX Design",               icon: "🎨" },
  { value: "DevOps Engineering",         icon: "⚙️" },
  { value: "Software Testing (QA)",      icon: "🧪" },
  { value: "Mobile App Development",     icon: "📱" },
];

const TIMES = [
  { value: "Morning (9am – 12pm)",   icon: "🌅" },
  { value: "Afternoon (12pm – 4pm)", icon: "☀️" },
  { value: "Evening (4pm – 8pm)",    icon: "🌆" },
  { value: "Weekend Morning",         icon: "🌄" },
  { value: "Flexible",                icon: "🕐" },
];

/* ══════════════════════════════════
   COMPONENT
══════════════════════════════════ */
export default function CareerCounsellors() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", interest:"", time:"" });
  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section className="cc-section">
      <div className="cc-inner">
        <div className="cc-grid">
          <img src="Counselor.png" alt="Counsellor Image" className="cc-img"/>
          {/* ════ LEFT ════ */}
          <div className="cc-left">

            {/* Badge */}
            <div className="cc-badge">
              <Headset />
              We're Here to Help
            </div>
            {/* Title */}
            <h3 className="cc-title">
              Speak to Our<br/>
              <span className="cc-title-line2">Career Counsellors</span>
              <span className="cc-title-star">✦</span>
            </h3>

            {/* Tagline */}
            <p className="cc-tagline">
              Clarity Today. &nbsp; Confident Tomorrow. &nbsp;
              <span className="tg-blue">Better Career.</span>
            </p>

            {/* Body */}
            <p className="cc-body-text">
              Not sure which course is right for you? Let our experts understand your goals
              and help you choose the perfect path to success.
            </p>

            {/* 4 Feature boxes — horizontal row */}
            <div className="cc-feats">
              {FEATURES.map((f,i) => (
                <div className="cc-feat" key={i}>
                  <div className="cc-feat-icon">{f.icon}</div>
                  <div className="cc-feat-name" style={{whiteSpace:"pre-line"}}>{f.name}</div>
                  <p className="cc-feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>

          </div>{/* /cc-left */}

          {/* ════ FORM CARD ════ */}
          <div className="cc-form-col">
      
            {/* floating headset icon above card */}
            <div className="cc-form-hd-icon">
              <Headset />
            </div>

            <div className="cc-form-card">
              <span className="cc-fh-main">Book a Free</span>
              <span className="cc-fh-sub">Career Guidance Call</span>
              <p className="cc-fh-note">Drop your details, we&apos;ll reach out soon.</p>

              <div className="cc-fields">

                {/* Full Name */}
                <div className="cc-field">
                  <div className="cc-field-icon-wrap"><User /></div>
                  <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={set}/>
                </div>

                {/* Phone */}
                <div className="cc-field">
                  <div className="cc-field-icon-wrap"><Phone /></div>
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={set}/>
                </div>

                {/* Email */}
                <div className="cc-field">
                  <div className="cc-field-icon-wrap"><Mail /></div>
                  <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={set}/>
                </div>

                {/* Interested In */}
                <CustomDropdown
                  icon={<GradCap />}
                  placeholder="Interested In"
                  options={INTERESTS}
                  value={form.interest}
                  onChange={val => setForm(p => ({ ...p, interest: val }))}
                />

                <CustomDropdown
                  icon={<Clock />}
                  placeholder="Preferred Time"
                  options={TIMES}
                  value={form.time}
                  onChange={val => setForm(p => ({ ...p, time: val }))}
                />

                {/* CTA */}
                <button className="cc-btn" type="button"
                  onClick={() => alert("Thank you! Our counsellor will contact you shortly.")}>
                  Book My Free Call &nbsp;<Arrow />
                </button>

              </div>

              {/* Security note */}
              <div className="cc-secure">
                <Shield />
                <span>Your information is safe and secure with us.</span>
              </div>
            </div>
          </div>
        </div>{/* /cc-grid */}
      </div>{/* /cc-inner */}
    </section>
  );
}