import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Cart from "../components/cart/Cart";

function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
      <Navbar />
      <Cart />
      <Footer />
    </>
  );
}

export default CartPage;
