import React from 'react'
import { Helmet } from 'react-helmet-async'
import WhoWeAre from '../../components/AboutComponents/WhoWeAre'
import MissionVision from '../../components/AboutComponents/MissionVision'
import OurTeam from '../../components/AboutComponents/OurTeam'
import OurJourney from '../../components/AboutComponents/OurJourney'


function AboutPage() {
  return (
    <>
    <Helmet>
            <title>About - Netligent Technologies</title>
             <meta name="description" content="Learn about Netligent, a leading IT training institute offering job-oriented courses with placement support and real-time projects." />
        <meta name="keywords" content="about Netligent, Best IT Training Institute in Bhopal, Data Science training institue, AI training institute, Data Analytics training institue, software training company, placement institute" />
    </Helmet>
    
        <WhoWeAre/>
        <MissionVision/>
        <OurTeam/>
        <OurJourney/>
      
    </>
  )
}

export default AboutPage