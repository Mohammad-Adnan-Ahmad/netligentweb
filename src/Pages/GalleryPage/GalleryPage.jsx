import React from 'react'
import Infrastructure from '../../components/HomeComponents/Infrastructure'
import FeedbackVideos from '../../components/HomeComponents/Feedbackvideos'
import { Head } from "vite-react-ssg";
function GalleryPage() {
  return (
    <>

      <Head>
        <title>Gallery Netligent Technologies | IT Training Institute Bhopal</title>
        <meta name="description" content="Explore the Netligent Technologies gallery featuring student projects, IT training sessions, workshops, events, and campus activities at our institute in Bhopal." />
        <meta name="keywords" content="Best IT Training Institute in Bhopal, Netligent Technologies, student projects Bhopal, IT workshops Bhopal, coding classes Bhopal, student activities, training institute photos Bhopal" />
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.netligent.com/gallery/" />
      </Head>
      <Infrastructure />
      <FeedbackVideos />
    </>
  )
}

export default GalleryPage