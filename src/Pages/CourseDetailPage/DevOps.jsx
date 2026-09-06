import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
import { Helmet } from 'react-helmet-async';

function DevOps() {
  const achieveItems = [
    "Automate application development, testing and deployment workflows.",
    "Manage cloud infrastructure and applications using AWS.",
    "Implement CI/CD pipelines for faster and reliable software delivery.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];
  return (
    <>
      <Helmet>
        <title>AWS DevOps Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn AWS DevOps with cloud infrastructure, CI/CD, automation, deployment, monitoring and DevOps tools through practical hands-on training and real-world projects." />

        <meta name="keywords" content="DevOps Course in Bhopal, DevOps Training, DevOps Course, DevOps Certification, CI CD Course, Cloud DevOps, DevOps Training Institute in Bhopal, Cloud DevOps Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/devops-training-in-bhopal" />
      </Helmet>
      <HeroSection
        backgroundURL = '/DevOps.png'
        course='AWS DevOps'
        title='AWS DevOps'
        headline="Automate. Deploy. Scale. Master Modern DevOps on AWS."
        desc="Become a DevOps Engineer by mastering CI/CD pipelines, Infrastructure as Code, Docker, Kubernetes, Jenkins, Git, Terraform, Ansible, monitoring, logging, and AWS DevOps services. Gain real-world experience by building automated deployment pipelines and cloud-native applications."
        duration='6 Months'
        rating='4.9/5'
        syllabus_link=''

      />
      <CourseHighlights />
      <AboutCourse
        about_desc="Modern software demands speed, reliability and continuous innovation, and DevOps brings development and operations together to achieve it. This course is designed to build you into an AWS DevOps professional who can automate workflows, manage cloud infrastructure, streamline deployments and deliver reliable applications faster."
        course_img = "/AWSDevOps.png"
        courseName='AWS DevOps'
        achieveItems={achieveItems}
      />
    </>
  )
}

export default DevOps