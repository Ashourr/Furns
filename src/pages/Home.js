import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Heder from '../components/heder/Heder'
import SliderHome from '../components/slider/SliderHome'
import About from '../components/about/About'
import Product from '../components/prodcut/Product'
import Offer from '../components/offer/Offer'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function Home() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
      <Navbar />
      <Heder />
      <SliderHome />
      <About />
      <Product />
      <Offer />
      <Contact />
      <Footer />
    </>
  )
}

export default Home