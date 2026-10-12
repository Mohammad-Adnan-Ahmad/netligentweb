import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function JFD() {
  const achieveItems = [
    "Build modern and responsive full stack web applications.",
    "Develop robust back-end applications using Java.",
    "Work with databases, APIs and enterprise application architectures.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];
  return (
    <>
      <Helmet>
        <title>Java Full Stack Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Java Full Stack Web Development with Core Java, Advanced Java, Spring, databases, frontend technologies and real-world projects to become job-ready." />

        <meta name="keywords" content="full stack developer course in bhopal, full stack develper course in bhopal,
        full stack training in bhopal, Java Full Stack Course in Bhopal, Java Full Stack Web Development, Java Course, Spring Boot Course, Full Stack Development Course, Java Training, Spring Boot Training, Web Development Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal" />
      </Helmet>
      <HeroSection
        backgroundURL='/Java_Full_Stack.png'
        course='Java Full Stack Development'
        title='Java Full Stack Development with GenAI'
        headline='Become an Enterprise Full Stack Developer. Code. Build. Deploy.'
        desc='Learn Java, Spring Boot, Hibernate, MySQL, React.js, REST APIs, Git, and cloud deployment through practical projects. Build enterprise-level applications and prepare for high-paying software development careers.'
        duration='7-8 Months'
        rating='4.8/5'
        syllabus_link='Java_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Java continues to power some of the world's most scalable and enterprise-grade applications. This course is designed to transform you into a full stack developer who can create modern user interfaces, develop robust Java back-end applications and build secure, scalable web solutions from front end to back end.
"
        course_img="/JFD_Illus.png"
        courseName='Java Full Stack Web Development'
        achieveItems={achieveItems}
      />
      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default JFD