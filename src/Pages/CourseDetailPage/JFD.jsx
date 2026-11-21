import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function JFD() {
  const achieveItems = [
    "Build modern and responsive full stack web applications.",
    "Develop robust back-end applications using Java.",
    "Work with databases, APIs and enterprise application architectures.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];


  const javaFullStackSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal/#course",
        "name": "Java Full Stack Developer Course",
        "description": "Become a Java Full Stack Developer with practical training in Core Java, Advanced Java, Object-Oriented Programming, HTML, CSS, JavaScript, Spring Boot, Hibernate, REST API development, SQL databases, and full-stack web application development. Build real-world projects and develop industry-ready skills for a career in Java full stack development.",
        "url": "https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal/",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.netligent.com/#organization",
          "name": "Netligent Technologies",
          "url": "https://www.netligent.com/"
        },
        "inLanguage": "en",
        "educationalLevel": "Beginner to Advanced",
        "about": [
          "Java Programming",
          "Core Java",
          "Advanced Java",
          "Object-Oriented Programming",
          "Data Structures and Algorithms",
          "Exception Handling",
          "Collections Framework",
          "JDBC",
          "Servlets and JSP",
          "HTML5",
          "CSS3",
          "JavaScript",
          "Frontend Development",
          "Spring Framework",
          "Spring Boot",
          "Hibernate",
          "JPA",
          "REST API Development",
          "MySQL",
          "Database Management",
          "Git and GitHub",
          "Full Stack Web Development",
          "Real-World Java Full Stack Projects"
        ],
        "hasPart": {
          "@id": "https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal/#curriculum"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal/#curriculum",
        "name": "Java Full Stack Development with GenAI",
        "numberOfItems": 7,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Core Java and Object-Oriented Programming"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Advanced Java, JDBC, Servlets and JSP"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Frontend Development with HTML, CSS and JavaScript"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Database Management with SQL and MySQL"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Backend Development with Spring and Spring Boot"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Hibernate, JPA and REST API Development"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Full Stack Integration and Real-World Projects"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Java Full Stack Development Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Java Full Stack Web Development with Core Java, Advanced Java, Spring, databases, frontend technologies and real-world projects to become job-ready." />

        <meta name="keywords" content="full stack developer course in bhopal, full stack develper course in bhopal,
        full stack training in bhopal, Java Full Stack Course in Bhopal, Java Full Stack Web Development, Java Course, Spring Boot Course, Full Stack Development Course, Java Training, Spring Boot Training, Web Development Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/java-full-stack-developer-course-in-bhopal/" />
        <script type="application/ld+json">
          {JSON.stringify(javaFullStackSchema)}
        </script>
      </Head>
      <HeroSection
        backgroundURL='/Java_Full_Stack.png'
        course='Java Full Stack Development'
        title='Java Full Stack Development with GenAI'
        headline='Become an Enterprise Full Stack Developer. Code. Build. Deploy.'
        desc='Learn Java, Spring Boot, Hibernate, MySQL, React.js, REST APIs, Git, and cloud deployment through practical projects. Build enterprise-level applications and prepare for high-paying software development careers.'
        duration='7-8 Months'
        rating='4.8/5'
        syllabus_link='Java_FullStack_Broucher.pdf'

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Java continues to power some of the world's most scalable and enterprise-grade applications. This course is designed to transform you into a full stack developer who can create modern user interfaces, develop robust Java back-end applications and build secure, scalable web solutions from front end to back end.
"
        course_img="/JFD_Illus.png"
        courseName='Java Full Stack Web Development'
        achieveItems={achieveItems}
      />
      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default JFD