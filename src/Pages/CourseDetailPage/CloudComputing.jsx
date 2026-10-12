import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';
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
  return (
    <>
      <Helmet>
        <title>Cloud Computing AWS Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn Cloud Computing with AWS and gain practical skills in cloud services, compute, storage, networking, security and deployment through hands-on projects." />

        <meta name="keywords" content="cloud computing courses in bhopal, cloud computing in bhopal, cloud computing training in bhopal, cloud computing certification in bhopal, cloud computing classes in bhopal, cloud computing course in bhopal, AWS Course in Bhopal, AWS Training in Bhopal, AWS Certification Course,AWS Cloud Course, Cloud Engineer Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/aws-training-in-bhopal" />
      </Helmet>
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