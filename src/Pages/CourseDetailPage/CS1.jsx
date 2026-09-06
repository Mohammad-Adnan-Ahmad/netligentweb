import React from 'react'

import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import { Helmet } from 'react-helmet-async';

function CS1() {
   const achieveItems = [
  "Understand networks, systems and essential cybersecurity concepts.",
  "Secure systems and identify vulnerabilities using practical techniques.",
  "Perform security testing and ethical hacking using modern tools.",
  "Build a strong portfolio with real-world projects.",
  "Boost your career with in-demand data skills.",
];
  return (
   <>
     <Helmet>
               <title>Cyber Security Course in Bhopal | Netligent Technologies</title>
               <meta name="description" content="Build professional cybersecurity skills with networking, network security, CCNA, Linux, Windows Server and offensive security using Kali Linux through practical training." />
       
               <meta name="keywords" content="cyber security course in bhopal, cyber security in bhopal, best cyber security institute in bhopal, cyber security bhopal, best cyber security in bhopal, best institute for cyber security in bhopal, cyber security institute in bhopal, cyber security training in bhopal" />
               {/* ✅ Canonical URL */}
               <link rel="canonical" href="https://www.netligent.com/our-courses/cyber-security-course-in-bhopal" />
      </Helmet>
      <HeroSection
            backgroundURL = '/CS1.png'
          course = 'Professional Certificate in Cyber Security'
          title = 'Professional Certificate in Cyber Security'
          headline = 'Protect Systems. Secure Networks. Build a Career in Cyber Security.'
          desc = "Master the fundamentals of Cyber Security with hands-on training in Networking, Network Security, CCNA, Linux Administration, Windows Server, and Ethical Hacking using Kali Linux. Learn to identify vulnerabilities, secure enterprise infrastructure, and prepare for globally recognized cybersecurity careers."
          duration = '8 Months'
          rating = '4.9/5'
          syllabus_link = 'Cyber_Security_Broucher.pdf'
          
        />
        <CourseHighlights/>
         <AboutCourse
            about_desc="Cyber threats are evolving every day, and skilled security professionals are essential to protecting the digital world. This course is designed to build you into a security-ready professional who can understand networks, secure systems, identify vulnerabilities and apply offensive security techniques to defend against real-world cyber threats.
.
        "
            course_img = "/CS_Illus.png"
           courseName = 'Cyber Security'
           achieveItems = {achieveItems}
                       />
   </>
  )
}

export default CS1