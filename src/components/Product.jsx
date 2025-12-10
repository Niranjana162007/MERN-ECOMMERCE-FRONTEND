import { useParams, Link } from "react-router-dom";
import { products } from "../utils/api";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/products" className="back-btn">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">₹{product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <Link to="/products" className="back-link">← Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
