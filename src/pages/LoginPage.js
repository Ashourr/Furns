import React, { useEffect } from 'react'
import Login from '../components/login/Login'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function LoginPage() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  )
}

export default LoginPage