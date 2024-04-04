import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Footer'
import Header  from './Header'
import  Nav  from './Nav'
import React from 'react'
import Home  from './Home'
import { About } from './About'
import { Keynote } from './Keynote'
import CallforPaper from './CallforPaper'
import { ImportantDates } from './ImportantDates'
import { HowtoReach } from './HowtoReach'
import { Contactus } from './Contactus'
import { Conference } from './Conference'
import { Carousel } from './Carousel'



function App() {
  return (
    <>
    <div className="main">
      <Header/>
      <Nav/>  
      <Carousel></Carousel>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/keynote' element={<Keynote/>}/>
        <Route path='/cfp' element={<CallforPaper/>}/>
        <Route path='/confrence' element={<Conference/>}/>
        <Route path='/dates' element={<ImportantDates/>}/>
        <Route path='/reachus' element={<HowtoReach/>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes> 
      <Footer/>
    </div>
    </>
  )
}

export default App
