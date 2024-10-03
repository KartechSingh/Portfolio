import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Follow from './Components/Follow'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';





function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen sm:w-full bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Follow/>
      
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
