import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function FED() {
  const achieveItems = [
    "Build responsive and interactive websites and user interfaces.",
    "Create modern web experiences using front-end technologies.",
    "Use AI tools to write, optimize and improve your code.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];
  return (
    <>
      <Helmet>
        <title>Frontend Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn modern Front-End Development with AI using HTML, CSS, JavaScript, React and AI-powered development tools. Build responsive websites and real-world projects." />

        <meta name="keywords" content="frontend developer course in bhopal,
            frontend training in bhopal, React Course in Bhopal, Web Development Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal" />
      </Helmet>
      <HeroSection
        backgroundURL='/FE.png'
        course='Front-End Development'
        title='Front-End Development with GenAI'
        headline='Design Beautiful Interfaces. Create Amazing User Experiences.'
        desc="Master HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, React.js, Next.js, Git, and responsive web design. Build fast, interactive, and modern websites used by today's leading companies."
        duration='5-6 Months'
        rating='4.7/5'
        syllabus_link='Java_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Every great digital experience begins with an engaging and responsive interface. This course is designed to turn you into a modern front-end developer who can build interactive websites, create responsive user experiences and leverage AI tools to code faster, solve problems smarter and bring creative ideas to life."
        course_img="/FE_Illus.png"
        courseName='Front-End Development'
        achieveItems={achieveItems}
      />

      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default FED