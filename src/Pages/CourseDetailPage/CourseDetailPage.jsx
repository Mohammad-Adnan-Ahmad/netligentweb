import React from 'react'
import { useParams } from "react-router-dom";
import HeroSection from '../../components/CourseDetailComponent/HeroSection';
function CourseDetailPage() {
    const { courseName } = useParams();
  return (
    <>
    <HeroSection/>
    </>
  )
}

export default CourseDetailPage