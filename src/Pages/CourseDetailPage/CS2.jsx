import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';
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
  return (
    <>
      <Helmet>
        <title>Professional Cyber Security Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Master advanced Cyber Defense and DevSecOps with practical cybersecurity, offensive security, secure development, security automation and real-world projects." />

        <meta name="keywords" content="cyber security course in bhopal, cyber security in bhopal, best cyber security institute in bhopal, cyber security bhopal, best cyber security in bhopal, best institute for cyber security in bhopal, cyber security institute in bhopal, cyber security training in bhopal, Ethical Hacking Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/professional-cyber-security-course-in-bhopal" />
      </Helmet>
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