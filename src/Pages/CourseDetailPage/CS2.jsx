import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function CS2() {
  const achieveItems = [
    "Identify and respond to advanced cybersecurity threats.",
    "Implement security practices across modern IT environments.",
    "Integrate security into development and DevOps workflows.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];
  
const cyberSecurityExpertSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.netligent.com/our-courses/cyber-security-expert-course-in-bhopal/#course",
      "name": "Cyber Security Expert Course",
      "description": "Advance your cybersecurity skills with professional training in advanced ethical hacking, penetration testing, network defense, web application security, vulnerability assessment, malware analysis, digital forensics, cryptography, and incident response. Gain practical experience with cybersecurity tools, security testing methodologies, and real-world security projects.",
      "url": "https://www.netligent.com/our-courses/cyber-security-expert-course-in-bhopal/",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://www.netligent.com/#organization",
        "name": "Netligent Technologies",
        "url": "https://www.netligent.com/"
      },
      "inLanguage": "en",
      "educationalLevel": "Advanced",
      "about": [
        "Advanced Cyber Security",
        "Ethical Hacking",
        "Advanced Penetration Testing",
        "Network Penetration Testing",
        "Web Application Penetration Testing",
        "Vulnerability Assessment",
        "OWASP Top 10",
        "Network Defense",
        "Firewall Security",
        "Intrusion Detection and Prevention Systems",
        "Malware Analysis",
        "Digital Forensics",
        "Cryptography",
        "Wireless Network Security",
        "Cloud Security",
        "Security Auditing",
        "Incident Response",
        "Threat Intelligence",
        "Security Operations Center",
        "SIEM",
        "Cybersecurity Tools",
        "Real-World Cyber Security Projects"
      ],
      "hasPart": {
        "@id": "https://www.netligent.com/our-courses/cyber-security-expert-course-in-bhopal/#curriculum"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.netligent.com/our-courses/cyber-security-expert-course-in-bhopal/#curriculum",
      "name": "Masters Diploma in Cyber Defense & DevSecOps",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Advanced Ethical Hacking and Information Gathering"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Advanced Vulnerability Assessment and Penetration Testing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Network and Wireless Security Testing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Web Application Security and OWASP Top 10"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Malware Analysis, Cryptography and Digital Forensics"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Network Defense, SIEM and Incident Response"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Cloud Security, Threat Intelligence and Advanced Practical Projects"
        }
      ]
    }
  ]
};

  return (
    <>
      <Head>
        <title>Professional Cyber Security Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Master advanced Cyber Defense and DevSecOps with practical cybersecurity, offensive security, secure development, security automation and real-world projects." />

        <meta name="keywords" content="cyber security course in bhopal, cyber security in bhopal, best cyber security institute in bhopal, cyber security bhopal, best cyber security in bhopal, best institute for cyber security in bhopal, cyber security institute in bhopal, cyber security training in bhopal, Ethical Hacking Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/cyber-security-expert-course-in-bhopal/" />
      
        <script type="application/ld+json">
    {JSON.stringify(cyberSecurityExpertSchema)}
  </script>
      </Head>
      <HeroSection
        backgroundURL='/CS2.png'
        course='Cyber Security'
        title='Masters Diploma in Cyber Defense & DevSecOps'
        headline='Master Cyber Defense. Automate Security. Protect Modern Infrastructure.'
        desc="Become an advanced Cyber Security professional by mastering enterprise networking, Linux, Windows Server, Cloud Security, DevOps, DevSecOps, Digital Forensics, Mobile & Wireless Security, Ethical Hacking, and Security Automation. Gain practical experience through real-world attack simulations, SOC operations, and cloud security projects."
        duration='12 Months'
        rating='4.8/5'
        syllabus_link='Cyber_Security_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Modern businesses need security built into every layer of their digital infrastructure. This program is designed to develop advanced cybersecurity professionals who can defend systems, identify sophisticated threats and integrate security practices into the DevOps lifecycle using modern Cyber Defense and DevSecOps techniques.
"
        course_img="/CS_Illus.png"
        courseName='Cyber Defense & DevSecOps'
        achieveItems={achieveItems}
      />
      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default CS2