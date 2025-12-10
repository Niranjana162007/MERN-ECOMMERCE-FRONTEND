import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(){
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Space</h1>
          <p>Discover premium home decor that brings elegance and warmth to every corner of your home</p>
          <Link to="/products" className="hero-btn">Shop Now</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Welcome to Home Decor Store</h2>
          <p>We curate the finest collection of home decor items to help you create spaces that reflect your personality and style. From elegant wall frames to cozy cushions, every piece is selected to add character to your home.</p>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>Handpicked items crafted with excellence</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick shipping to your doorstep</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💯</div>
              <h3>100% Authentic</h3>
              <p>Genuine products with quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2>Inspiration Gallery</h2>
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400" alt="Living Room Decor" />
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400" alt="Bedroom Setup" />
            <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400" alt="Wall Decor" />
            <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400" alt="Lighting" />
          </div>
        </div>
      </section>
    </div>
  );
}