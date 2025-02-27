import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProdcutPage from "./pages/ProdcutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import FavoritePage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/prodcut" element={<ProdcutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingupPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
