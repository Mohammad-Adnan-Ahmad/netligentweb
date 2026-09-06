import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';

function DataScience() {
  const achieveItems = [
    " Analyze complex datasets and uncover meaningful insights.",
    'Build machine learning models for real-world problems.',
    "Create intelligent solutions using Generative AI.",
    "Develop a strong portfolio with data and AI projects.",
    "Boost your career with in-demand skills.",
  ];
  return (
    <>
      <Helmet>
        <title>Data Science Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Data Science with Generative AI using Python, data analysis, machine learning, AI tools and real-world projects. Build industry-ready skills and boost your career." />

        <meta name="keywords" content="data science course in bhopal, data science training in bhopal, companies into data science training in bhopal, data science college in bhopal, data science in bhopal, data science maters course fee bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/data-science-course-in-bhopal" />
      </Helmet>

      <HeroSection
        backgroundURL = '/DataScience.png'
        course='Data Science'
        title='Data Science with Gen AI'
        headline='Transform Raw Data into Intelligent Business Solutions.'
        desc='Master Data Science with Python, Statistics, Machine Learning, SQL, Data Visualization, and real-world projects. Learn how to collect, analyze, model, and interpret data to solve complex business problems and build a successful career in data.'
        duration='7-8 Months'
        rating='4.9/5'
        syllabus_link='DataScience_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Data is everywhere, and the ability to turn it into intelligent solutions is driving the future of technology. This course is designed to transform you into a data-driven professional who can analyze data, build machine learning models and leverage Generative AI to create smart, impactful solutions."
        course_img = "/DS_Illus.png"
        courseName='Data Science'
        achieveItems={achieveItems}
      />
    </>
  )
}

export default DataScience