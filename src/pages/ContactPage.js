import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function ContactPage() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage