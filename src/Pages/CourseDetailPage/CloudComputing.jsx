import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function CloudComputing() {
  const achieveItems = [
    "Understand and work with essential AWS cloud services.",
    "Deploy, manage and scale applications on the AWS cloud.",
    "Build secure, reliable and cost-effective cloud solutions.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];


  const awsCourseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.netligent.com/our-courses/aws-training-in-bhopal/#course",
        "name": "Cloud Computing (AWS)",
        "description": "Learn Cloud Computing with Amazon Web Services (AWS) through practical, hands-on training. Understand cloud computing fundamentals, AWS architecture, EC2, S3, IAM, VPC, RDS, load balancing, auto scaling, serverless computing, cloud security, and application deployment. Build practical cloud skills through real-world AWS projects.",
        "url": "https://www.netligent.com/our-courses/aws-training-in-bhopal/",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.netligent.com/#organization",
          "name": "Netligent Technologies",
          "url": "https://www.netligent.com/"
        },
        "inLanguage": "en",
        "educationalLevel": "Beginner to Advanced",
        "about": [
          "Cloud Computing",
          "Amazon Web Services",
          "AWS Fundamentals",
          "Cloud Architecture",
          "AWS EC2",
          "AWS S3",
          "AWS IAM",
          "Amazon VPC",
          "AWS RDS",
          "AWS Route 53",
          "Elastic Load Balancing",
          "Auto Scaling",
          "AWS Lambda",
          "Serverless Computing",
          "Cloud Networking",
          "Cloud Security",
          "AWS CloudWatch",
          "Cloud Storage",
          "Cloud Database Management",
          "Application Deployment",
          "Cloud Infrastructure Management",
          "Real-World AWS Projects"
        ],
        "hasPart": {
          "@id": "https://www.netligent.com/our-courses/aws-training-in-bhopal/#curriculum"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.netligent.com/our-courses/aws-training-in-bhopal/#curriculum",
        "name": "Cloud Computing and AWS Course Curriculum",
        "numberOfItems": 7,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Cloud Computing Fundamentals and AWS Introduction"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AWS Compute Services: EC2 and Auto Scaling"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AWS Storage Services: S3 and Cloud Storage"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "AWS Networking: VPC, Subnets and Route 53"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "AWS Identity, Access Management and Cloud Security"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "AWS Databases, Lambda and Serverless Computing"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Cloud Monitoring, Application Deployment and Practical AWS Projects"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Cloud Computing AWS Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Cloud Computing with AWS and gain practical skills in cloud services, compute, storage, networking, security and deployment through hands-on projects." />

        <meta name="keywords" content="cloud computing courses in bhopal, cloud computing in bhopal, cloud computing training in bhopal, cloud computing certification in bhopal, cloud computing classes in bhopal, cloud computing course in bhopal, AWS Course in Bhopal, AWS Training in Bhopal, AWS Certification Course,AWS Cloud Course, Cloud Engineer Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/aws-training-in-bhopal/" />
        <script type="application/ld+json">
          {JSON.stringify(awsCourseSchema)}
        </script>
      </Head>
      <HeroSection
        backgroundURL='/Cloud_Computing.png'
        course='AWS'
        title='Cloud Computing (AWS)'
        headline="Build, Deploy & Scale Applications on the World's Leading Cloud Platform."
        desc="Master Amazon Web Services (AWS) and gain practical experience in cloud architecture, virtualization, storage, networking, security, databases, serverless computing, and deployment. Learn to design, manage, and scale secure cloud solutions with real-world AWS projects."
        duration='6 Months'
        rating='4.9/5'
        syllabus_link=''

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Cloud computing has become the backbone of modern digital businesses, powering applications, data and services at global scale. This course is designed to make you cloud-ready by building practical skills in AWS, helping you deploy, manage and scale secure, reliable and cost-effective cloud solutions."
        course_img="/CloudComputing_Illus.png"
        courseName='Cloud Computing (AWS)'
        achieveItems={achieveItems}
      />

      <RecentPlacement />
      <OurCourses badge='More Courses' />
    </>
  )
}

export default CloudComputing