import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🏠 Artful Abode</h3>
          <p>Transform your space with our curated collection of premium home decor items.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 info@homedecorstore.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Artful Abode. All rights reserved.</p>
      </div>
    </footer>
  );
}