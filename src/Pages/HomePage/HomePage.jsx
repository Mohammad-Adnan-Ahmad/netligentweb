import React from 'react'
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