import React from 'react'
import Navbar from '../Header/Navbar'
import LandingPoster from '../Pages/LandingPoster'
import OurExperties from '../Pages/OurExperties'
import Mission from '../Pages/Mission'
import HowWeWork from '../Pages/HowWeWork'
import BigBanner from '../Pages/BigBanner'
import Testimonials from '../Pages/Testimonials'
import WhyChooseus from '../Pages/WhyChooseus'
import Footer from '../Footer/Footer'

function Main() {
  return (
   <>
     <Navbar/>
     <LandingPoster/>
     <OurExperties/>
     <Mission/>
     <HowWeWork/>
     <BigBanner/>
     <Testimonials/>
     <WhyChooseus/>
     <Footer/>
   </>
  )
}

export default Main