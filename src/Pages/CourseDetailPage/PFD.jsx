import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';

function PFD() {
  const achieveItems = [
    "Build responsive and interactive web applications from scratch.",
    "Develop powerful back-end applications using Python.",
    "Work with databases, APIs and complete full stack architectures.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];
  return (
    <>
      <Helmet>
        <title>Python Full Stack Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Python Full Stack Web Development with Python, Django, databases, HTML, CSS, JavaScript and modern web development through real-world projects." />

        <meta name="keywords" content="full stack developer course in bhopal, full stack develper course in bhopal,
full stack training in bhopal, Python Full Stack Course in Bhopal, Python Full Stack Web Development, Python Course, Django Course, Full Stack Development Course, Python Training, Django Training, Web Development Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/python-full-stack-developer-course-in-bhopal" />
      </Helmet>
      <HeroSection
        backgroundURL = '/Python_Full_Stack.png'
        course='Python Full Stack Development'
        title='Python Full Stack Development with GenAI'
        headline='From Beginner to Full Stack Developer. Build Modern Web Applications.'
        desc='Master front-end and back-end web development using HTML, CSS, JavaScript, React.js, Python, Django, MySQL, REST APIs, and real-world projects. Become a job-ready Full Stack Developer with industry-focused training.'
        duration='7-8 Months'
        rating='4.9/5'
        syllabus_link='Python_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="The web powers businesses, products and digital experiences across the world, and skilled developers are at the heart of it all. This course is designed to turn you into a job-ready full stack developer who can build responsive front-end interfaces, powerful Python back-end applications and complete, database-driven web solutions."
        course_img = "/PFD_Illus.png"
        courseName='Python Full Stack Web Development'
        achieveItems={achieveItems}
      />
    </>
  )
}

export default PFD