import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }){
  return (
    <div className="card">
      <img className="product-image" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="small">{product.description}</p>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:8}}>
        <div>
          <div className="price">₹{product.price}</div>
        </div>
        <div>
          <Link to={`/products/${product.id}`} className="btn secondary" style={{marginRight:8}}>View</Link>
          <button className="btn" onClick={()=>onAdd(product)}>Add</button>
        </div>
      </div>
    </div>
  );
}
