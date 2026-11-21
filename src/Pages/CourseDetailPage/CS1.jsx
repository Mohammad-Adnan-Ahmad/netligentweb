import React from 'react'

import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function CS1() {
  const achieveItems = [
    "Understand networks, systems and essential cybersecurity concepts.",
    "Secure systems and identify vulnerabilities using practical techniques.",
    "Perform security testing and ethical hacking using modern tools.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];

  
const cyberSecuritySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.netligent.com/our-courses/cyber-security-course-in-bhopal/#course",
      "name": "Professional Certificate in Cyber Security",
      "description": "Learn Professional Cyber Security through practical, hands-on training in cybersecurity fundamentals, networking, Linux, ethical hacking, network security, vulnerability assessment, penetration testing, web application security, and security tools. Develop practical skills to identify vulnerabilities, understand cyber threats, and protect digital systems through real-world projects.",
      "url": "https://www.netligent.com/our-courses/cyber-security-course-in-bhopal/",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://www.netligent.com/#organization",
        "name": "Netligent Technologies",
        "url": "https://www.netligent.com/"
      },
      "inLanguage": "en",
      "educationalLevel": "Beginner to Advanced",
      "about": [
        "Cyber Security",
        "Information Security",
        "Computer Networking",
        "Network Security",
        "Linux Fundamentals",
        "Ethical Hacking",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Threat Analysis",
        "Web Application Security",
        "OWASP Top 10",
        "Operating System Security",
        "Cryptography",
        "Malware Analysis",
        "Digital Forensics",
        "Security Auditing",
        "Incident Response",
        "Security Tools",
        "Cyber Threat Detection",
        "Practical Cyber Security Projects"
      ],
      "hasPart": {
        "@id": "https://www.netligent.com/our-courses/cyber-security-course-in-bhopal/#curriculum"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.netligent.com/our-courses/cyber-security-course-in-bhopal/#curriculum",
      "name": "Professional Cyber Security Course Curriculum",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Cyber Security Fundamentals and Computer Networking"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Linux Fundamentals and Operating System Security"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ethical Hacking and Information Gathering"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Vulnerability Assessment and Penetration Testing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Network Security and Web Application Security"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "OWASP Top 10, Cryptography and Security Analysis"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Incident Response, Digital Forensics and Practical Projects"
        }
      ]
    }
  ]
};

  return (
    <>
      <Head>
        <title>Cyber Security Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Build professional cybersecurity skills with networking, network security, CCNA, Linux, Windows Server and offensive security using Kali Linux through practical training." />

        <meta name="keywords" content="cyber security course in bhopal, cyber security in bhopal, best cyber security institute in bhopal, cyber security bhopal, best cyber security in bhopal, best institute for cyber security in bhopal, cyber security institute in bhopal, cyber security training in bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/cyber-security-course-in-bhopal/" />
      
        <script type="application/ld+json">
    {JSON.stringify(cyberSecuritySchema)}
  </script>
      
      </Head>
      <HeroSection
        backgroundURL='/CS1.png'
        course='Professional Certificate in Cyber Security'
        title='Professional Certificate in Cyber Security'
        headline='Protect Systems. Secure Networks. Build a Career in Cyber Security.'
        desc="Master the fundamentals of Cyber Security with hands-on training in Networking, Network Security, CCNA, Linux Administration, Windows Server, and Ethical Hacking using Kali Linux. Learn to identify vulnerabilities, secure enterprise infrastructure, and prepare for globally recognized cybersecurity careers."
        duration='8 Months'
        rating='4.9/5'
        syllabus_link='Cyber_Security_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Cyber threats are evolving every day, and skilled security professionals are essential to protecting the digital world. This course is designed to build you into a security-ready professional who can understand networks, secure systems, identify vulnerabilities and apply offensive security techniques to defend against real-world cyber threats.
.
        "
        course_img="/CS_Illus.png"
        courseName='Cyber Security'
        achieveItems={achieveItems}
      />

      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default CS1