import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function PFD() {
  const achieveItems = [
    "Build responsive and interactive web applications from scratch.",
    "Develop powerful back-end applications using Python.",
    "Work with databases, APIs and complete full stack architectures.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];

  
const pythonFullStackSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.netligent.com/our-courses/python-full-stack-developer-course-in-bhopal/#course",
      "name": "Python Full Stack Development with GenAI",
      "description": "Become a Python Full Stack Developer with practical training in Python programming, HTML, CSS, JavaScript, frontend development, Django, backend development, REST APIs, SQL databases, and full-stack web application development. Build real-world projects and develop industry-ready skills for a career in full-stack development.",
      "url": "https://www.netligent.com/our-courses/python-full-stack-developer-course-in-bhopal/",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://www.netligent.com/#organization",
        "name": "Netligent Technologies",
        "url": "https://www.netligent.com/"
      },
      "inLanguage": "en",
      "educationalLevel": "Beginner to Advanced",
      "about": [
        "Python Programming",
        "Object-Oriented Programming",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Frontend Development",
        "Responsive Web Design",
        "Bootstrap",
        "Python Backend Development",
        "Django Framework",
        "Django REST Framework",
        "REST API Development",
        "MySQL",
        "Database Management",
        "CRUD Operations",
        "Full Stack Web Development",
        "Git and GitHub",
        "Web Application Development",
        "Authentication and Authorization",
        "Real-World Python Full Stack Projects"
      ],
      "hasPart": {
        "@id": "https://www.netligent.com/our-courses/python-full-stack-developer-course-in-bhopal/#curriculum"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.netligent.com/our-courses/python-full-stack-developer-course-in-bhopal/#curriculum",
      "name": "Python Full Stack Developer Course Curriculum",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Python Programming and Object-Oriented Programming"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Frontend Development with HTML, CSS, JavaScript and Bootstrap"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Python Backend Development with Django"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Database Management with SQL and MySQL"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "REST API Development with Django REST Framework"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Full Stack Integration, Authentication and Git/GitHub"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Real-World Full Stack Projects and Deployment"
        }
      ]
    }
  ]
};

  return (
    <>
      <Head>
        <title>Python Full Stack Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Python Full Stack Web Development with Python, Django, databases, HTML, CSS, JavaScript and modern web development through real-world projects." />

        <meta name="keywords" content="full stack developer course in bhopal, full stack develper course in bhopal,
full stack training in bhopal, Python Full Stack Course in Bhopal, Python Full Stack Web Development, Python Course, Django Course, Full Stack Development Course, Python Training, Django Training, Web Development Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/python-full-stack-developer-course-in-bhopal/" />
      
      <script type="application/ld+json">
    {JSON.stringify(pythonFullStackSchema)}
  </script>
      </Head>
      <HeroSection
        backgroundURL='/Python_Full_Stack.png'
        course='Python Full Stack Development'
        title='Python Full Stack Development with GenAI'
        headline='From Beginner to Full Stack Developer. Build Modern Web Applications.'
        desc='Master front-end and back-end web development using HTML, CSS, JavaScript, React.js, Python, Django, MySQL, REST APIs, and real-world projects. Become a job-ready Full Stack Developer with industry-focused training.'
        duration='7-8 Months'
        rating='4.9/5'
        syllabus_link='Python_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="The web powers businesses, products and digital experiences across the world, and skilled developers are at the heart of it all. This course is designed to turn you into a job-ready full stack developer who can build responsive front-end interfaces, powerful Python back-end applications and complete, database-driven web solutions."
        course_img="/PFD_Illus.png"
        courseName='Python Full Stack Web Development'
        achieveItems={achieveItems}
      />

      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default PFD