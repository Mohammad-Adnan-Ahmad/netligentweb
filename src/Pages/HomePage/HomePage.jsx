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
        <title>Netligent Technologies | Best IT Training Institute in Bhopal</title>
        <meta name="description" content="Top IT courses with placement support." />
        <meta name="keywords" content="IT training, Best IT training institute in Bhopal, Best Data Science Course in Bhopal, python, java, Data Analytics, Machine Learning" />
      {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/" />
      </Helmet>

      <Hero/>
      <RecentPlacement/>
      <PersonalizedAttention/>
      <WhyIdeal/>
      <Certificate/>
      <Infrastructure/>
      <OurCourses/>
      <RealTraining/>
      <Reviews/>
      <FeedbackVideos/>
      <CareerCounsellors/>
      <PlacementProcess/>
    </>
  )
}

export default HomePage