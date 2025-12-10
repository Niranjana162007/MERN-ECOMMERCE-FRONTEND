import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, qty = 1) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      } else {
        return [...prev, { ...product, qty }];
      }
    });
  }

  function removeFromCart(productId) {
    setCart(prev => prev.filter(p => p.id !== productId));
  }

  function updateQty(productId, qty) {
    setCart(prev => prev.map(p => p.id === productId ? { ...p, qty: Math.max(1, qty) } : p));
  }

  function clearCart(){
    setCart([]);
  }

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  return useContext(CartContext);
}
