import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
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


 
const aiMlSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.netligent.com/our-courses/ai-ml-course-in-bhopal/#course",
      "name": "Artificial Intelligence, Machine Learning & Generative AI Course",
      "description": "Learn Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, AI Agents, and Retrieval-Augmented Generation (RAG) with practical, hands-on training. Develop skills in Python, neural networks, large language models (LLMs), prompt engineering, AI agent development, RAG pipelines, and real-world AI projects.",
      "url": "https://www.netligent.com/our-courses/ai-ml-course-in-bhopal/",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://www.netligent.com/#organization",
        "name": "Netligent Technologies",
        "url": "https://www.netligent.com/"
      },
      "inLanguage": "en",
      "educationalLevel": "Beginner to Advanced",
      "about": [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Python Programming",
        "NumPy",
        "Pandas",
        "Statistics and Probability",
        "Data Preprocessing",
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression",
        "Classification",
        "Neural Networks",
        "Natural Language Processing",
        "Generative AI",
        "Large Language Models",
        "Prompt Engineering",
        "AI Agents",
        "Agentic AI",
        "Retrieval-Augmented Generation",
        "Vector Databases",
        "Embeddings",
        "RAG Pipelines",
        "AI Application Development",
        "Real-World AI Projects"
      ],
      "hasPart": {
        "@id": "https://www.netligent.com/our-courses/ai-ml-course-in-bhopal/#curriculum"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.netligent.com/our-courses/ai-ml-course-in-bhopal/#curriculum",
      "name": "AI, Machine Learning, Deep Learning and Generative AI Course Curriculum",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Python Programming, Statistics and Data Science Libraries"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Machine Learning: Supervised and Unsupervised Learning"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Deep Learning, Neural Networks and Model Development"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Natural Language Processing and Large Language Models"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Generative AI and Prompt Engineering"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "AI Agents, Agentic AI and RAG (Retrieval-Augmented Generation)"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Practical AI Applications and Real-World Projects"
        }
      ]
    }
  ]
};


  return (
    <>
      <Head>
        <title>AI & ML Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Master AI and Machine Learning fundamentals with Python, data preprocessing, supervised and unsupervised learning, model evaluation and real-world projects." />

        <meta name="keywords" content="ai ml course in bhopal, ai ml training in bhopal, companies into ai ml training in bhopal, ai ml college in bhopal, ai ml in bhopal, ai ml maters course fee bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/ai-ml-course-in-bhopal/" />
        <script type="application/ld+json">
          {JSON.stringify(aiMlSchema)}
        </script>
      </Head>

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