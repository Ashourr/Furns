import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Favorite from '../components/favorite/Favorite'

function FavoritePage() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
    <Navbar />
    <Favorite />
    <Footer />
    </>
  )
}

export default FavoritePage