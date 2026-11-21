import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function BED() {
  const achieveItems = [
    "Build powerful and scalable server-side applications.",
    "Develop APIs and connect applications with databases.",
    "Use AI tools to improve coding, debugging and development workflows.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];

  const backendDeveloperSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.netligent.com/our-courses/backend-developer-course-in-bhopal/#course",
        "name": "Back-End Development with GenAI",
        "description": "Become a professional Backend Developer with practical training in server-side programming, JavaScript, Node.js, Express.js, REST API development, database management, authentication, authorization, and backend application development. Learn to build secure, scalable, and efficient backend systems through hands-on exercises and real-world projects.",
        "url": "https://www.netligent.com/our-courses/backend-developer-course-in-bhopal/",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.netligent.com/#organization",
          "name": "Netligent Technologies",
          "url": "https://www.netligent.com/"
        },
        "inLanguage": "en",
        "educationalLevel": "Beginner to Advanced",
        "about": [
          "Backend Development",
          "Server-Side Programming",
          "JavaScript",
          "Node.js",
          "Express.js",
          "REST API Development",
          "API Design",
          "MongoDB",
          "MySQL",
          "Database Management",
          "CRUD Operations",
          "Authentication",
          "Authorization",
          "JWT",
          "Password Hashing",
          "Middleware",
          "Error Handling",
          "File Uploads",
          "API Security",
          "Git and GitHub",
          "Backend Architecture",
          "Application Deployment",
          "Real-World Backend Projects"
        ],
        "hasPart": {
          "@id": "https://www.netligent.com/our-courses/backend-developer-course-in-bhopal/#curriculum"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.netligent.com/our-courses/backend-developer-course-in-bhopal/#curriculum",
        "name": "Backend Developer Course Curriculum",
        "numberOfItems": 7,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "JavaScript Fundamentals and Advanced JavaScript"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Node.js Fundamentals and Server-Side Development"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Express.js and Backend Application Development"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Database Management with MongoDB and MySQL"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "REST API Development and Integration"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Authentication, Authorization and Backend Security"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Git, Deployment and Real-World Backend Projects"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Backend Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Back-End Development with AI using server-side programming, APIs, databases, authentication and AI-powered development tools through practical real-world projects." />

        <meta name="keywords" content="Backend Development Course in Bhopal, Backend Development with AI, Backend Developer Course, API Development Course,  Backend Training, AI Development Course, Web Development Training in Bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/backend-developer-course-in-bhopal/" />

        <script type="application/ld+json">
          {JSON.stringify(backendDeveloperSchema)}
        </script>
      </Head>
      <HeroSection
        backgroundURL='/BE.png'
        course='Back-End Development'
        title='Back-End Development with GenAI'
        headline='Power the Web with Scalable Servers and APIs.'
        desc="Learn Python Django, Java Spring Boot, REST APIs, Authentication, MySQL, Cloud Deployment, and backend architecture through hands-on industry projects."
        duration='5-6 Months'
        rating='4.6/5'
        syllabus_link='Java_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Behind every powerful web application is a reliable and intelligent back-end system. This course is designed to build you into a modern back-end developer who can create APIs, manage databases, develop secure server-side applications and use AI tools to build faster, smarter and more scalable solutions."
        course_img="/BE_Illus.png"
        courseName='Back-End Development'
        achieveItems={achieveItems}
      />
      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default BED