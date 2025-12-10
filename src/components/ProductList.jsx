import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }){
  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard product={p} key={p.id} onAdd={onAdd} />
      ))}
    </div>
  );
}
