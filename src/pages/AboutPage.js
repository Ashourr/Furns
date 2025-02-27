import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'

function AboutPage() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
    <Navbar />
    <About />
    <Footer />
    </>
  )
}

export default AboutPage