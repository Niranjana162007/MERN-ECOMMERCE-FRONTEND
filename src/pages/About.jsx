import React from "react";
import "./About.css";

export default function About(){
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Artful Abode</h1>
          <p>Transforming spaces with curated elegance</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            
            <p>Founded with a passion for beautiful living spaces, Artful Abode has been helping customers transform their homes into personal sanctuaries since our inception.</p>
            
            <p>We believe that every home tells a story, and our carefully curated collection of decor items helps you write yours with style and sophistication.</p>
            
            <p>From elegant wall frames to cozy cushions, from ambient lighting to artistic accents, we source only the finest pieces that combine quality craftsmanship with timeless design.</p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            
            <p>To make beautiful, high-quality home decor accessible to everyone, helping create spaces that reflect individual personality and style.</p>
            
            <p>We are committed to providing exceptional customer service, authentic products, and inspiring design solutions that enhance the way you live.</p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            
            <div className="features-list">
              <div className="feature-item">
                <h3>✨ Curated Collection</h3>
                <p>Every item is handpicked by our design experts for quality and style.</p>
              </div>
              
              <div className="feature-item">
                <h3>🚚 Fast Delivery</h3>
                <p>Quick and secure shipping to bring your vision to life faster.</p>
              </div>
              
              <div className="feature-item">
                <h3>💯 Quality Guarantee</h3>
                <p>100% authentic products with comprehensive quality assurance.</p>
              </div>
              
              <div className="feature-item">
                <h3>🎨 Design Inspiration</h3>
                <p>Expert styling tips and inspiration to help you create your perfect space.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}