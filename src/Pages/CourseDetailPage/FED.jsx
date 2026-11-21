import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
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
  
const frontendDeveloperSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://www.netligent.com/our-courses/frontend-developer-course-in-bhopal/#course",
      "name": "Front-End Development with GenAI",
      "description": "Become a professional Frontend Developer with practical training in HTML5, CSS3, JavaScript, responsive web design, Bootstrap, Tailwind CSS, React.js, React Hooks, API integration, and modern frontend development. Build interactive, responsive websites and real-world web applications while developing industry-ready frontend development skills.",
      "url": "https://www.netligent.com/our-courses/frontend-developer-course-in-bhopal/",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://www.netligent.com/#organization",
        "name": "Netligent Technologies",
        "url": "https://www.netligent.com/"
      },
      "inLanguage": "en",
      "educationalLevel": "Beginner to Advanced",
      "about": [
        "Frontend Development",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design",
        "Flexbox",
        "CSS Grid",
        "Bootstrap",
        "Tailwind CSS",
        "DOM Manipulation",
        "JavaScript ES6+",
        "Asynchronous JavaScript",
        "React.js",
        "React Components",
        "React Hooks",
        "React Router",
        "State Management",
        "REST API Integration",
        "JSON",
        "Git and GitHub",
        "Web Performance Optimization",
        "Frontend Web Application Development",
        "Real-World Frontend Projects"
      ],
      "hasPart": {
        "@id": "https://www.netligent.com/our-courses/frontend-developer-course-in-bhopal/#curriculum"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.netligent.com/our-courses/frontend-developer-course-in-bhopal/#curriculum",
      "name": "Frontend Developer Course Curriculum",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "HTML5 Fundamentals and Semantic Web Development"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "CSS3, Flexbox, Grid and Responsive Web Design"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bootstrap and Tailwind CSS"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "JavaScript Fundamentals, ES6+ and DOM Manipulation"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Advanced JavaScript and Asynchronous Programming"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "React.js, Components, Hooks and React Router"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "API Integration, Git, GitHub and Real-World Projects"
        }
      ]
    }
  ]
};

  return (
    <>
      <Head>
        <title>Frontend Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn modern Front-End Development with AI using HTML, CSS, JavaScript, React and AI-powered development tools. Build responsive websites and real-world projects." />

        <meta name="keywords" content="frontend developer course in bhopal,
            frontend training in bhopal, React Course in Bhopal, Web Development Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal/" />
        <script type="application/ld+json">
    {JSON.stringify(frontendDeveloperSchema)}
  </script>

      </Head>
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