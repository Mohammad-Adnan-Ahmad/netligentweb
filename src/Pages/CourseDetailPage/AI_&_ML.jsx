import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function AIML() {
  const achieveItems = [
    "Understand core concepts of Artificial Intelligence and Machine Learning.",
    "Build and train machine learning models for practical problems.",
    "Apply AI techniques to automate and solve real-world challenges.",
    "Build a strong portfolio with hands-on AI & ML projects.",
    "Boost your career with in-demand skills.",
  ];
  return (
    <>
      <Helmet>
        <title>AI & ML Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Master AI and Machine Learning fundamentals with Python, data preprocessing, supervised and unsupervised learning, model evaluation and real-world projects." />

        <meta name="keywords" content="ai ml course in bhopal, ai ml training in bhopal, companies into ai ml training in bhopal, ai ml college in bhopal, ai ml in bhopal, ai ml maters course fee bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/al-ml-course-in-bhopal" />
      </Helmet>

      <HeroSection
        backgroundURL='/AIML.png'
        course='AI & ML'
        title='AI & Machine Learning'
        headline='Build Intelligent Systems That Learn, Predict & Innovate.'
        desc='Master Artificial Intelligence and Machine Learning using Python, TensorFlow, Scikit-learn, Deep Learning, NLP, and Computer Vision. Build smart applications through hands-on projects and become an AI professional.'
        duration='8-9 Months'
        rating='4.8/5'
        syllabus_link='DataScience_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Artificial Intelligence is transforming the way we live, work and solve complex problems. This course is designed to build your strong foundation in AI and Machine Learning, helping you understand data, train intelligent models and develop solutions that can learn, predict and automate real-world tasks."
        course_img="/AIML_Illus.png"
        courseName='AI & ML'
        achieveItems={achieveItems}
      />

      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default AIML