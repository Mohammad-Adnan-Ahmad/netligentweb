import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './components/Header/Navbar'
import MainHeading from './components/HomeComponents/MainHeading'
import CustomCursor from './components/Others/CustomCursor'
import SmoothScroll from './components/Others/SmoothScroll'
import Footer from './components/Footer/Footer'


function Routers(){
  return(
    <>
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
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