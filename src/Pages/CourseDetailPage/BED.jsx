import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';

function BED() {
  const achieveItems = [
    "Build powerful and scalable server-side applications.",
    "Develop APIs and connect applications with databases.",
    "Use AI tools to improve coding, debugging and development workflows.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];
  return (
    <>
      <Helmet>
        <title>Backend Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Back-End Development with AI using server-side programming, APIs, databases, authentication and AI-powered development tools through practical real-world projects." />

        <meta name="keywords" content="Backend Development Course in Bhopal, Backend Development with AI, Backend Developer Course, API Development Course,  Backend Training, AI Development Course, Web Development Training in Bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/backend-developer-course-in-bhopal" />
      </Helmet>
      <HeroSection
        backgroundURL = '/BE.png'
        course='Back-End Development'
        title='Back-End Development with GenAI'
        headline='Power the Web with Scalable Servers and APIs.'
        desc="Learn Python Django, Java Spring Boot, REST APIs, Authentication, MySQL, Cloud Deployment, and backend architecture through hands-on industry projects."
        duration='5-6 Months'
        rating='4.6/5'
        syllabus_link='Java_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Behind every powerful web application is a reliable and intelligent back-end system. This course is designed to build you into a modern back-end developer who can create APIs, manage databases, develop secure server-side applications and use AI tools to build faster, smarter and more scalable solutions."
        course_img = "/BE_Illus.png"
        courseName='Back-End Development'
        achieveItems={achieveItems}
      />
    </>
  )
}

export default BED