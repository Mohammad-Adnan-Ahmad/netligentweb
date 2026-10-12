import React from 'react'
import { Helmet } from 'react-helmet-async'

import HeroSection from '../../components/HomeComponents/HeroSection'
import RecentPlacement from '../../components/HomeComponents/RecentPlacement'
import MainHeading from '../../components/HomeComponents/MainHeading'
import Hero from '../../components/HomeComponents/Hero'
import Reviews from '../../components/HomeComponents/Reviews'
import Certificate from '../../components/HomeComponents/Certificate'
import PersonalizedAttention from '../../components/HomeComponents/PersonalizedAttention'
import RealTraining from '../../components/HomeComponents/RealTraining'
import OurCourses from '../../components/HomeComponents/OurCourses'
import WhyIdeal from '../../components/HomeComponents/WhyIdeal'
import CareerCounsellors from '../../components/HomeComponents/CareerCounselor'
import PlacementProcess from '../../components/HomeComponents/PlacementProcess'
import FeedbackVideos from '../../components/HomeComponents/Feedbackvideos'
import Infrastructure from '../../components/HomeComponents/Infrastructure'

function HomePage() {

  return (
    <>
      <Helmet>
        <title>Best IT Training Institute in Bhopal | Netligent Technologies</title>
        <meta name="Join Netligent Technologies, a leading IT training institute in Bhopal offering Data Science, Data Analytics, AI, Cyber Security, Full Stack and DevOps courses.

" />
        <meta name="keywords" content="IT Training Institute in Bhopal, IT Courses in Bhopal, IT Training & Placement Institute in Bhopal, Software Training Institute in Bhopal, Best IT Training Institute in Bhopal, Job-Oriented IT Courses in Bhopal, IT Courses with Placement in Bhopal, Programming Courses in Bhopal, Professional IT Training in Bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/" />
      </Helmet>

      <Hero />
      <RecentPlacement />
      <PersonalizedAttention />
      <WhyIdeal />
      <Certificate />
      <Infrastructure />
      <OurCourses badge='Learn. Practice. Get Hired.' />
      <RealTraining />
      <Reviews />
      <FeedbackVideos />
      <CareerCounsellors />
      <PlacementProcess />
    </>
  )
}

export default HomePage