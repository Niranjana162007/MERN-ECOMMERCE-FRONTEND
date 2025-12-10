import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Space</h1>
          <p>Discover premium home decor that brings elegance to every corner</p>
          <Link to="/products" className="hero-btn">Shop Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Premium Quality</h3>
          <p>Handpicked items crafted with excellence</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Quick and secure shipping to your doorstep</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💯</div>
          <h3>100% Authentic</h3>
          <p>Genuine products with quality guarantee</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>Welcome to Home Decor Store</h2>
          <p>We curate the finest collection of home decor items to help you create spaces that reflect your personality and style. From elegant wall frames to cozy cushions, every piece is selected to add warmth and character to your home.</p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500" alt="Living Room" />
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500" alt="Bedroom" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400" alt="Wall Decor" />
            <h3>Wall Decor</h3>
          </div>
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400" alt="Lighting" />
            <h3>Lighting</h3>
          </div>
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400" alt="Plants" />
            <h3>Plants</h3>
          </div>
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" alt="Furniture" />
            <h3>Furniture</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
