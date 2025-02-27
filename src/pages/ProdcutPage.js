import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Product from '../components/prodcut/Product'
import Footer from '../components/footer/Footer'

function ProdcutPage() {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  )
}

export default ProdcutPage