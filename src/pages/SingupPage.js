import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Singup from '../components/login/Singup'
import Footer from '../components/footer/Footer'

function SingupPage() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
      <Navbar />
      <Singup />
      <Footer />
    </>
  )
}

export default SingupPage