import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products, addOrder } from "../data/api";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import "./ProductDetail.css";

export default function ProductDetail(){
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const product = products.find(p => p.id === parseInt(id));

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/products/${id}` } } });
      return;
    }
    addOrder(product, user);
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="card">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {orderPlaced && (
        <div className="order-success">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <div className="success-text">
              <h3>Order Placed Successfully!</h3>
              <p>Thank you for your purchase, {user?.name}!</p>
            </div>
          </div>
        </div>
      )}
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <div className="price">₹{product.price}</div>
          <p>{product.description}</p>
          <div className="product-actions">
            <button className="btn buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
            <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to="/products" className="back-link">← Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
