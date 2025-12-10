import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import MyOrders from "./pages/MyOrders";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        } />
        <Route path="*" element={<div style={{padding:20}} className="container card">Page not found</div>} />
      </Routes>
      <Footer />
    </>
  );
}
