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
            <title>About Netligent Technologies | IT Training Institute Bhopal</title>
             <meta name="description" content="Learn about Netligent Technologies, an IT training institute in Bhopal focused on practical learning, industry skills, mentorship, certification and career support." />
        <meta name="keywords" content="about Netligent, Best IT Training Institute in Bhopal, Data Science training institue, AI training institute, Data Analytics training institue, software training company, placement institute" />
    {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/about" />
    </Helmet>
    
        <WhoWeAre/>
        <MissionVision/>
        <OurTeam/>
        <OurJourney/>
      
    </>
  )
}

export default AboutPage