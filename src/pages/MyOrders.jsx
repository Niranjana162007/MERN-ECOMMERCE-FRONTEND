import React from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../data/api";
import { useAuth } from "../contexts/AuthContext";
import "./MyOrders.css";

export default function MyOrders() {
  const { user } = useAuth();
  const allOrders = getOrders();
  const userOrders = allOrders.filter(order => order.user === user?.name);

  if (!user) {
    return (
      <div className="orders-page">
        <div className="container">
          <div className="card">
            <h2>Please Login</h2>
            <p>You need to login to view your orders.</p>
            <Link to="/login" className="btn">Login</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="container">
        <h1 className="orders-title">My Orders</h1>
        
        {userOrders.length === 0 ? (
          <div className="no-orders">
            <div className="card">
              <h3>No Orders Yet</h3>
              <p>You haven't placed any orders yet. Start shopping to see your orders here!</p>
              <Link to="/products" className="btn">Shop Now</Link>
            </div>
          </div>
        ) : (
          <div className="orders-list">
            {userOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-image">
                  <img src={order.product.image} alt={order.product.name} />
                </div>
                <div className="order-details">
                  <h3>{order.product.name}</h3>
                  <p className="order-category">{order.product.category}</p>
                  <p className="order-description">{order.product.description}</p>
                  <div className="order-meta">
                    <span className="order-price">₹{order.product.price}</span>
                    <span className="order-date">Ordered on {order.date}</span>
                    <span className="order-status">{order.status}</span>
                  </div>
                </div>
                <div className="order-actions">
                  <Link to={`/products/${order.product.id}`} className="btn secondary">
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}