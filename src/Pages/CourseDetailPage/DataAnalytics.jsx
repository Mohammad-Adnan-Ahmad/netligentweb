import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async'
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function DataAnalytics() {
  const achieveItems = [
    "Analyze complex data and uncover valuable insights.",
    "Create interactive dashboards and reports.",
    "Solve real-world business problems using data.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];

  return (
    <>
      <Helmet>
        <title>Data Analytics Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Data Analytics with Python, SQL, Excel, NumPy, Pandas, Matplotlib and Power BI. Gain practical skills through real-world projects and become job-ready for a career in data analytics." />
        
        <meta name="keywords" content="data analytics courses in bhopal, data analytics in bhopal, data analytics what companiescome to nit bhopal, eisystems bhopal data analytics, mba in data analytics bhopal, msc in data analytics in bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/data-analytics-course-in-bhopal" />
      </Helmet>

      <HeroSection
        backgroundURL='/DataAnalytics.png'
        course='Data Analytics'
        title='Data Analytics with Gen AI'
        headline='From Data to Decisions. From You to Industry Expert.'
        desc='Master data analysis, visualization, and decision-making using Excel, SQL, Python, Power BI and real-world projects. Build in-demand skills and kickstart your career in data.'
        duration='5-6 Months'
        rating='4.8/5'
        syllabus_link='DataAnalytics_Broucher.pdf'
      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Data is the new oil, and the ability to analyze it is the engine that drives every successful business. This course is designed to turn you into a data-savvy professional who can collect, clean, analyze and visualize data to make smart, impactful decisions."
        course_img="/DA_Illus.png"
        courseName='Data Analytics'
        achieveItems={achieveItems}
      />
      <RecentPlacement />
      <OurCourses badge='More Courses'/>
    </>
  )
}

export default DataAnalytics