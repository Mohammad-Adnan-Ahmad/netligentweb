import React from 'react'
import { Helmet } from 'react-helmet-async'
import CourseHero from '../../components/OurCourseComponent/CourseHero'
import AllCourses from '../../components/OurCourseComponent/AllCourses'
import CoursesCTA from '../../components/OurCourseComponent/CoursesCTA'

function OurCoursesPage() {
  return (
    <>
          <Helmet>
            <title>Our Courses | Data Science, Data Analytics, AI & ML, Web Development, Cyber Security, DevOps.</title>
            <meta name="description" content="Explore our IT courses including Data Science, Data Analytics, AI ML, Full-Stack Development, Cyber Security, and more with hands-on training and 100% placement support." />
            <meta name="keywords" content="IT training, Best IT training institute in Bhopal, Best Data Science Course in Bhopal, data analytics courses in bhopal, data science course in bhopal, full stack developer course in bhopal, aws training in bhopal, cloud computing courses in bhopal, cyber security course in bhopal, best python coaching in bhopal, best java coaching in bhopal" />
          </Helmet>

        <CourseHero/>
        <AllCourses/>
        <CoursesCTA/>
    </>
  )
}

export default OurCoursesPage