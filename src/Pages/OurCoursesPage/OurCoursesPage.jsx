import React from 'react'
import { Helmet } from 'react-helmet-async'
import CourseHero from '../../components/OurCourseComponent/CourseHero'
import AllCourses from '../../components/OurCourseComponent/AllCourses'
import CoursesCTA from '../../components/OurCourseComponent/CoursesCTA'

function OurCoursesPage() {
  return (
    <>
          <Helmet>
            <title>Data Science, AI, Full Stack & Cyber Security Courses | Netligent Technologies</title>
            <meta name="description" content="Explore our IT courses including Data Science, Data Analytics, AI ML, Full-Stack Development, Cyber Security, and more with hands-on training and 100% placement support." />
            <meta name="keywords" content="IT training, Best IT training institute in Bhopal, Best Data Science Course in Bhopal, data analytics courses in bhopal, data science course in bhopal, full stack developer course in bhopal, aws training in bhopal, cloud computing courses in bhopal, cyber security course in bhopal, best python coaching in bhopal, best java coaching in bhopal" />
          {/* ✅ Canonical URL */}
          <link rel="canonical" href="https://www.netligent.com/our-courses" />
          </Helmet>

        <CourseHero/>
        <div id='course_section'>
          <AllCourses/>
        </div>
        
        <CoursesCTA/>
    </>
  )
}

export default OurCoursesPage