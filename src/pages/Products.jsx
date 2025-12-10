import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/api";
import "./Products.css";

export default function Products(){
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  
  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>
      
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <Link to={`/products/${product.id}`} className="view-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}