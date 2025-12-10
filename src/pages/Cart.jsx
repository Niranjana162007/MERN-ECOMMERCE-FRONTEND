import React from "react";
import { useCart } from "../contexts/CartContext";

export default function Cart(){
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="card">
          <h3>Your cart is empty</h3>
          <p className="small">Add some lovely items from products page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Cart</h2>
      <div style={{display:"grid", gap:12}}>
        {cart.map(item => (
          <div key={item.id} className="card" style={{display:"flex", gap:12, alignItems:"center"}}>
            <img src={item.image} alt={item.title} style={{width:120, height:80, objectFit:"cover", borderRadius:8}} />
            <div style={{flex:1}}>
              <h3 style={{margin:0}}>{item.title}</h3>
              <p className="small">₹{item.price} x {item.qty} = <strong>₹{item.price * item.qty}</strong></p>
              <div style={{display:"flex", gap:8, marginTop:8}}>
                <button className="btn secondary" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <div className="form" style={{width:80, padding:6, display:"flex", justifyContent:"center", alignItems:"center"}}>{item.qty}</div>
                <button className="btn secondary" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                <button className="btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:18}} className="card">
        <h3>Summary</h3>
        <p className="small">Total: <strong>₹{total}</strong></p>
        <div style={{display:"flex", gap:12}}>
          <button className="btn" onClick={() => alert("Mock checkout — thank you!")}>Checkout</button>
          <button className="btn secondary" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}
