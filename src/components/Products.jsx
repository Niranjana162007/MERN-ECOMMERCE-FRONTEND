import { Link } from "react-router-dom";
import { products } from "../utils/api";
import "./Products.css";

export default function Products() {
  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
