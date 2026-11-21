import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'
import Curriculum from '../../components/CourseDetailComponent/Curriculum';

function DataScience() {
  const achieveItems = [
    " Analyze complex datasets and uncover meaningful insights.",
    'Build machine learning models for real-world problems.',
    "Create intelligent solutions using Generative AI.",
    "Develop a strong portfolio with data and AI projects.",
    "Boost your career with in-demand skills.",
  ];

  
const dataScienceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.netligent.com/our-courses/data-science-course-in-bhopal/#course",
      "name": "Data Science with Gen AI",
      "description": "Learn Data Science with Python, statistics, data analysis, data visualization, machine learning, and real-world projects. Develop practical skills to extract insights from data and build predictive models.",
      "url": "https://www.netligent.com/our-courses/data-science-course-in-bhopal/",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://www.netligent.com/#organization",
        "name": "Netligent Technologies",
        "url": "https://www.netligent.com/"
      },
      "inLanguage": "en",
      "educationalLevel": "Beginner to Advanced",
      "about": [
        "Data Science",
        "Python Programming",
        "Statistics",
        "Probability",
        "NumPy",
        "Pandas",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Data Visualization",
        "Matplotlib",
        "Seaborn",
        "Machine Learning",
        "Regression",
        "Classification",
        "Model Evaluation",
        "Real-World Data Science Projects"
      ],
      "hasPart": {
        "@id": "https://www.netligent.com/our-courses/data-science-course-in-bhopal/#curriculum"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.netligent.com/our-courses/data-science-course-in-bhopal/#curriculum",
      "name": "Data Science Course Curriculum",
      "numberOfItems": 5,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Python Programming and Libraries"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Statistics and Probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Data Cleaning and Exploratory Data Analysis"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Data Visualization and Data Analysis"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Machine Learning and Real-World Projects"
        }
      ]
    }
  ]
};

  return (
    <>
      <Head>
        <title>Data Science Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Data Science with Generative AI using Python, data analysis, machine learning, AI tools and real-world projects. Build industry-ready skills and boost your career." />

        <meta name="keywords" content="data science course in bhopal, data science training in bhopal, companies into data science training in bhopal, data science college in bhopal, data science in bhopal, data science maters course fee bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/data-science-course-in-bhopal/" />
       {/* Data Analytics Course Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(dataScienceSchema)}
        </script>
      </Head>

      <HeroSection
        backgroundURL='/DataScience.png'
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
        course_img="/DS_Illus.png"
        courseName='Data Science'
        achieveItems={achieveItems}
      />
      <Curriculum/>
      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default DataScience