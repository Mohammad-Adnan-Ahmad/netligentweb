import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async'
import { Head } from "vite-react-ssg";
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

  // Data Analytics Course Schema
  const dataAnalyticsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.netligent.com/our-courses/data-analytics-course-in-bhopal/#course",
        "name": "Data Analytics with Gen AI",
        "description": "Learn data analytics using Python, Pandas, NumPy, Excel, SQL, data visualization, Power BI and Generative AI through practical projects.",
        "url": "https://www.netligent.com/our-courses/data-analytics-course-in-bhopal/",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.netligent.com/#organization",
          "name": "Netligent Technologies",
          "url": "https://www.netligent.com/"
        },
        "inLanguage": "en",
        "educationalLevel": "Beginner to Advanced",
        "about": [
          "Data Analytics",
          "Python",
          "Pandas",
          "NumPy",
          "Microsoft Excel",
          "SQL",
          "Data Cleaning",
          "Data Visualization",
          "Power BI",
          "Generative AI"
        ],
        "timeRequired": "P6M",
        "hasPart": {
          "@id": "https://www.netligent.com/our-courses/data-analytics-course-in-bhopal/#curriculum"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.netligent.com/our-courses/data-analytics-course-in-bhopal/#curriculum",
        "name": "Data Analytics Course Curriculum",
        "numberOfItems": 4,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Python, Pandas and NumPy"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Data Cleaning and Data Visualization"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Excel, SQL and Advanced Analytics"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Power BI and Dashboard Creation"
          }
        ]
      }
    ]
  };
  return (
    <>
      <Head>
        <title>Data Analytics Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Data Analytics with Python, SQL, Excel, NumPy, Pandas, Matplotlib and Power BI. Gain practical skills through real-world projects and become job-ready for a career in data analytics." />

        <meta name="keywords" content="data analytics courses in bhopal, data analytics in bhopal, data analytics what companiescome to nit bhopal, eisystems bhopal data analytics, mba in data analytics bhopal, msc in data analytics in bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/data-analytics-course-in-bhopal/" />
      
        {/* Data Analytics Course Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(dataAnalyticsSchema)}
        </script>
      
      </Head>

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
      <OurCourses badge='More Courses' />
    </>
  )
}

export default DataAnalytics