import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}
