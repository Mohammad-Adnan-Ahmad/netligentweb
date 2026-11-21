import { useState } from "react";
import "../../CSS/ContactUs/FAQs.css";

/* ══════════════════════════════════════
   ICONS (inline SVG, no dependency)
══════════════════════════════════════ */
const Svg = ({ children, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);

const Icons = {
  cap: () => (
    <Svg>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      <line x1="22" y1="9" x2="22" y2="15" />
    </Svg>
  ),
  shield: () => (
    <Svg>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </Svg>
  ),
  clock: () => (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </Svg>
  ),
  laptop: () => (
    <Svg>
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
    </Svg>
  ),
  certificate: () => (
    <Svg>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <polyline points="15 3 15 7 19 7" />
      <circle cx="12" cy="14" r="3" />
      <path d="M10.5 16.5l-1 4 2.5-1.5 2.5 1.5-1-4" />
    </Svg>
  ),
  group: () => (
    <Svg>
      <circle cx="12" cy="8" r="3" />
      <circle cx="5.5" cy="10" r="2.2" />
      <circle cx="18.5" cy="10" r="2.2" />
      <path d="M7 20c0-3 2.2-5 5-5s5 2 5 5" />
      <path d="M2 19c0-2 1.5-3.5 3.5-3.5" />
      <path d="M22 19c0-2-1.5-3.5-3.5-3.5" />
    </Svg>
  ),
  chevron: () => (
    <Svg strokeWidth="2.4">
      <polyline points="6 9 12 15 18 9" />
    </Svg>
  ),
  arrow: () => (
    <Svg strokeWidth="2.2">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </Svg>
  ),
};

/* ══════════════════════════════════════
   FAQ DATA  (edit the answers freely)
══════════════════════════════════════ */
const FAQS = [
  {
    color: "#a855f7",
    q: "Which is a good IT training institute in Bhopal?",
    a: "When choosing an IT training institute in Bhopal, consider the course curriculum, trainer experience, practical training, student projects and career support. Netligent Technologies offers career-focused training programs in Data Analytics, Data Science, Artificial Intelligence, Full Stack Development, Cyber Security, AWS and DevOps.",
  },
  {

    color: "#38bdf8",
    q: "What IT courses are available at Netligent Technologies?",
    a: "Netligent offers a range of professional IT training programs, including: •	Data Analytics Course Data Science Course, Artificial Intelligence and Machine Learning Course, Python Full Stack Developer Course, Java Full Stack Developer Course, Frontend Developer Course, Backend Developer Course, Cyber Security Course, Cyber Security Expert Course, AWS Training, DevOps Training",
  },
  {
    color: "#d946ef",
    q: "Who can join IT courses at Netligent?",
    a: "Netligent offers training programs for college students, freshers, graduates, working professionals and individuals interested in switching to an IT career. The right course depends on your educational background, existing skills and career objectives.",
  },
  {

    color: "#6d8bff",
    q: "Can beginners join IT courses at Netligent Technologies?",
    a: "Yes. Several training programs are suitable for beginners. You can start by learning fundamental concepts and gradually develop technical skills through structured training, practical exercises and projects.",
  },
  {
    color: "#38bdf8",
    q: "Where is Netligent Technologies located in Bhopal?",
    a: "Netligent Technologies is located at 152, 3rd Floor, Saif Complex, Zone-1, MP Nagar, Bhopal, Madhya Pradesh.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent provide practical IT training?",
    a: "Yes. Netligent emphasizes practical learning through assignments, exercises and project-based activities. Students get opportunities to apply programming concepts, understand development workflows, work with relevant technologies and develop project portfolios.",
  },
  {
    color: "#c084fc",
    q: "Which course should I choose to start an IT career?",
    a: "The right course depends on your interests and career goals•	Choose Data Analytics if you enjoy working with data and business insights.•	Choose Data Science if you are interested in statistics, Python and machine learning.•	Choose AI and Machine Learning if you want to explore intelligent systems and automation.•	Choose Full Stack Development if you want to build websites and web applications.•	Choose Cyber Security if you are interested in network security and information protection.•	Choose AWS or DevOps if you want to explore cloud infrastructure and software deployment.You can also speak with a Netligent counsellor to identify a suitable learning path.",
  },
  {
    color: "#c084fc",
    q: "What technologies are covered in the Data Analytics Course in Bhopal?",
    a: "The Data Analytics training program covers Excel, SQL, Python, Power BI and data visualization. Students learn how to collect, clean, analyze and visualize data to support business decisions.",
  },
  {
    color: "#c084fc",
    q: "What will I learn in the Data Science Course in Bhopal?",
    a: "The Data Science course introduces Python programming, statistics, data analysis, machine learning and practical projects. Learners understand how to identify patterns, make predictions and solve problems using data.",
  },
  {
    color: "#c084fc",
    q: "What is covered in the Artificial Intelligence and Machine Learning Course?",
    a: "The AI and Machine Learning course covers AI concepts, machine learning algorithms, model development and practical applications. Learners explore how intelligent systems process information, identify patterns and automate tasks.",
  },
  {
    color: "#c084fc",
    q: "What is the difference between Python Full Stack and Java Full Stack Development?",
    a: "Python Full Stack Development focuses on building web applications using Python-based backend technologies along with frontend development. Java Full Stack Development focuses on Java programming, frontend technologies, databases and enterprise application development. Both programs help learners understand frontend and backend development.",
  },
  {
    color: "#c084fc",
    q: "What will I learn in Frontend Development training?",
    a: "Frontend Development training focuses on creating responsive and interactive websites using HTML, CSS, JavaScript and modern frontend technologies. Learners develop skills to build user-friendly web interfaces.",
  },
  {
    color: "#c084fc",
    q: "What will I learn in Backend Development training?",
    a: "Backend Development training covers server-side programming, databases, application logic and API development. Learners understand how backend systems support websites and software applications.",
  },
  {
    color: "#c084fc",
    q: "What topics are covered in the Cyber Security Course in Bhopal?",
    a: "The Cyber Security course covers cybersecurity fundamentals, networking, operating systems, network security and ethical hacking concepts. Practical security techniques are explored through structured training and lab-based exercises.",
  },
  {
    color: "#c084fc",
    q: "What is included in the Cyber Security Expert Course?",
    a: "The Cyber Security Expert course focuses on advanced cybersecurity topics, including vulnerability assessment, penetration testing, security operations and digital forensics.",
  },
  {
    color: "#c084fc",
    q: "What will I learn in AWS Training in Bhopal?",
    a: "AWS training introduces cloud computing fundamentals and Amazon Web Services. Topics include cloud infrastructure, storage, computing services, networking, security and deployment concepts.",
  },
  {
    color: "#c084fc",
    q: "What technologies are covered in DevOps Training?",
    a: "DevOps training covers Linux, version control, CI/CD workflows, Docker, Kubernetes, cloud infrastructure and automation tools. Learners understand modern software development and deployment processes.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent provide live projects or practical assignments?",
    a: "Netligent follows a project-oriented learning approach that encourages students to apply programming concepts, understand development workflows, use relevant tools and build project portfolios through practical assignments and project activities.",
  },
  {
    color: "#c084fc",
    q: "What is Netli Lab at Netligent?",
    a: "Netli Lab is the practical learning and project-oriented section where students can explore technology applications, understand development activities and view examples of student projects.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent provide resume-building support?",
    a: "Yes. As part of its career preparation approach, Netligent helps learners understand how to present their technical knowledge, projects and skills professionally through resume and portfolio development guidance.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent provide interview preparation?",
    a: "Yes. Netligent includes interview preparation as part of its career preparation approach. Students can practise technical questions, improve communication and prepare for interview opportunities.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent provide placement assistance?",
    a: "Yes. Netligent provides placement assistance and career preparation support according to its applicable placement support process. This may include resume guidance, interview preparation and information about relevant job opportunities. Placement outcomes depend on individual skills, performance and available opportunities.",
  },
  {
    color: "#c084fc",
    q: "Can working professionals join Netligent courses?",
    a: "Yes. Working professionals who want to upgrade their existing skills, explore emerging technologies or prepare for new career opportunities can enquire about suitable training programs and available schedules.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent help students switch to an IT career?",
    a: "Netligent supports career switchers by helping them explore technology domains, identify suitable learning paths and gradually develop technical knowledge through structured training and practical projects.",
  },
  {
    color: "#c084fc",
    q: "How can I enquire about course fees at Netligent?",
    a: "You can contact Netligent directly by phone, email or through the website enquiry form to get updated information about course fees, duration, available batches and admission procedures.",
  },
  {
    color: "#c084fc",
    q: "What is the duration of IT courses at Netligent?",
    a: "Course duration depends on the selected program and its curriculum. Contact the Netligent admission team to confirm the current duration and training schedule for your preferred course.",
  },
  {
    color: "#c084fc",
    q: "Does Netligent offer online and offline IT training?",
    a: "Please contact the admission team to confirm the available learning mode for your selected course and current batch.",
  },
  {
    color: "#c084fc",
    q: "How can I enrol in a course at Netligent Technologies?",
    a: "You can contact the Netligent team to discuss your career goals, explore available courses, understand fees and schedules, and get guidance about the admission process.",
  },
  {
    color: "#c084fc",
    q: "How can I contact Netligent Technologies?",
    a: "You can reach Netligent Technologies through the following contact details: Phone: +91 83495 30962, Email:info@netligent.com, Location: MP Nagar, Bhopal, Madhya Pradesh",
  },
  {
    color: "#c084fc",
    q: "Does Netligent offer career counselling before admission?",
    a: "Yes. You can discuss your education, interests and career goals with the counselling team to identify suitable IT training programs and make an informed course selection.",
  },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
   Props:
   - faqs : override the FAQS list (split evenly into 2 columns)
══════════════════════════════════════ */
export default function FAQs({ faqs = FAQS }) {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx((cur) => (cur === i ? null : i));

  // split into two equal halves (15 + 15)
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  const renderItem = (f, i) => {
    const Icon = Icons[f.icon];
    const open = openIdx === i;
    return (
      <div key={f.q} className={`hf-item${open ? " open" : ""}`}>
        <button
          className="hf-head"
          onClick={() => toggle(i)}
          aria-expanded={open}
          aria-controls={`hf-panel-${i}`}
          id={`hf-btn-${i}`}
        >
       
          <span className="hf-q">{f.q}</span>
          <span className="hf-chev">
            <Icons.chevron />
          </span>
        </button>

        <div
          className="hf-body"
          id={`hf-panel-${i}`}
          role="region"
          aria-labelledby={`hf-btn-${i}`}
        >
          <div className="hf-body-inner">
            <p className="hf-answer">{f.a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="hf-section" aria-labelledby="hf-title">
      <div className="hf-container">
        {/* ══ HEADER ══ */}
        <div className="hf-header">
          <div className="hf-tagrow">
            <span className="hf-line l" />
            <span className="hf-tag">
              <span className="hf-tag-icon">
                <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <circle cx="8" cy="10.5" r="1.3" fill="#8b5cf6" />
                  <circle cx="12" cy="10.5" r="1.3" fill="#8b5cf6" />
                  <circle cx="16" cy="10.5" r="1.3" fill="#8b5cf6" />
                </svg>
              </span>
              FAQ
            </span>
            <span className="hf-line r" />
          </div>

          <h2 className="hf-title" id="hf-title">
            Frequently Asked <span className="hf-title-grad">Questions</span>
          </h2>
          <p className="hf-sub">
            Find quick answers to common queries about our courses, training and placement.
          </p>
        </div>

        {/* ══ TWO COLUMNS (15 + 15) ══ */}
        <div className="hf-cols">
          <div className="hf-list">
            {leftFaqs.map((f, i) => renderItem(f, i))}
          </div>

          <div className="hf-list">
            {rightFaqs.map((f, i) => renderItem(f, i + half))}
          </div>
        </div>
      </div>
    </section>
  );
}