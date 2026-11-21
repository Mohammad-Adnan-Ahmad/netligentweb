import React from 'react'
import { Head } from 'vite-react-ssg'
import LabHeroSection from '../../components/LabComponents/LabHeroSection'
import ProjectSection from '../../components/LabComponents/ProjectSection'

function LabPage() {
  return (
    <>
        <Head>
        <title>Lab by Netligent | IT Training Institute Bhopal</title>
        <meta name="description" content="Explore Netligent Technologies Lab featuring company projects, student projects built during training, hands-on cybersecurity labs, and practical IT innovation in Bhopal." />
        <meta name="keywords" content="Netligent Technologies Lab, student projects Bhopal, IT project lab Bhopal, cybersecurity lab Bhopal, student coding projects, hands-on IT training Bhopal, software development projects, IT innovation lab" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/netli-lab/" />
      </Head>

      <LabHeroSection/>
      {/* <ProjectSection/> */}
    </>
  )
}

export default LabPage