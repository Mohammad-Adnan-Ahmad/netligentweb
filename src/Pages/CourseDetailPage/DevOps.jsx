import React from 'react'
import HeroSection from '../../components/CourseDetailComponent/HeroSection'
import CourseHighlights from '../../components/CourseDetailComponent/Coursehighlights'
import AboutCourse from '../../components/CourseDetailComponent/AboutCourse'
// import { Helmet } from 'react-helmet-async';
import { Head } from "vite-react-ssg";
import OurCourses from '../../components/HomeComponents/OurCourses'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'

function DevOps() {
  const achieveItems = [
    "Automate application development, testing and deployment workflows.",
    "Manage cloud infrastructure and applications using AWS.",
    "Implement CI/CD pipelines for faster and reliable software delivery.",
    "Build a strong portfolio with real-world projects.",
    "Boost your career with in-demand data skills.",
  ];


  const awsDevOpsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.netligent.com/our-courses/devops-training-in-bhopal/#course",
        "name": "AWS DevOps",
        "description": "Learn AWS DevOps through practical, hands-on training in cloud computing, Linux administration, Git, continuous integration and continuous delivery (CI/CD), Jenkins, Docker, Kubernetes, Terraform, AWS infrastructure management, monitoring, and deployment automation. Develop the skills to automate software delivery, manage cloud infrastructure, and deploy scalable applications through real-world DevOps projects.",
        "url": "https://www.netligent.com/our-courses/devops-training-in-bhopal/",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.netligent.com/#organization",
          "name": "Netligent Technologies",
          "url": "https://www.netligent.com/"
        },
        "inLanguage": "en",
        "educationalLevel": "Beginner to Advanced",
        "about": [
          "AWS DevOps",
          "DevOps Fundamentals",
          "Cloud Computing",
          "Amazon Web Services",
          "Linux Administration",
          "Shell Scripting",
          "Git and GitHub",
          "Continuous Integration",
          "Continuous Delivery",
          "CI/CD Pipelines",
          "Jenkins",
          "Docker",
          "Containerization",
          "Kubernetes",
          "Infrastructure as Code",
          "Terraform",
          "AWS EC2",
          "AWS S3",
          "AWS IAM",
          "AWS VPC",
          "AWS CodePipeline",
          "AWS CodeBuild",
          "AWS CodeDeploy",
          "Cloud Monitoring",
          "Application Deployment Automation",
          "Infrastructure Automation",
          "Real-World DevOps Projects"
        ],
        "hasPart": {
          "@id": "https://www.netligent.com/our-courses/devops-training-in-bhopal/#curriculum"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.netligent.com/our-courses/devops-training-in-bhopal/#curriculum",
        "name": "AWS DevOps Course Curriculum",
        "numberOfItems": 7,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "DevOps Fundamentals, Linux Administration and Shell Scripting"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Version Control with Git and GitHub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AWS Cloud Services and Infrastructure Management"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "CI/CD Pipelines with Jenkins and AWS DevOps Services"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Docker, Containerization and Kubernetes"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Infrastructure as Code with Terraform"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Monitoring, Deployment Automation and Real-World DevOps Projects"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>AWS DevOps Course in Bhopal | Netligent Technologies</title>
        <meta name="description" content="Learn AWS DevOps with cloud infrastructure, CI/CD, automation, deployment, monitoring and DevOps tools through practical hands-on training and real-world projects." />

        <meta name="keywords" content="DevOps Course in Bhopal, DevOps Training, DevOps Course, DevOps Certification, CI CD Course, Cloud DevOps, DevOps Training Institute in Bhopal, Cloud DevOps Course" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/our-courses/devops-training-in-bhopal/" />
        <script type="application/ld+json">
          {JSON.stringify(awsDevOpsSchema)}
        </script>

      </Head>
      <HeroSection
        backgroundURL='/DevOps.png'
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
        course_img="/AWSDevOps.png"
        courseName='AWS DevOps'
        achieveItems={achieveItems}
      />
    </>
  )
}

export default DevOps