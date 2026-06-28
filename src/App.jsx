import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './components/Header/Navbar'
import MainHeading from './components/HomeComponents/MainHeading'
import CustomCursor from './components/Others/CustomCursor'
import SmoothScroll from './components/Others/SmoothScroll'
import Footer from './components/Footer/Footer'
import AboutPage from './Pages/AboutPage/AboutPage'
import OurCoursesPage from './Pages/OurCoursesPage/OurCoursesPage'


function Routers(){
  return(
    <>
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/our-courses' element={<OurCoursesPage/>}/>
        </Routes>
      
    </>
  )
}


function App() {
  return (
    <>
    <SmoothScroll/>
    <CustomCursor/>
    <MainHeading/>
    <Navbar/>
    <Routers/>
    <Footer/>
    </>
    
  )
}

export default App