import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import "./Navbar.css";

export default function Navbar(){
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar container">
      <div className="nav-left">
        <div className="brand"><Link to="/" style={{color:"white", textDecoration:"none"}}>🏠 Artful Abode</Link></div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          {user && <Link to="/orders">My Orders</Link>}
        </div>
      </div>

      <div className="controls">
        <Link to="/cart" className="btn secondary" style={{background:"transparent", color:"white"}}>
          Cart <span className="cart-count">{cart.length}</span>
        </Link>

        {user ? (
          <>
            <div style={{color:"white", fontWeight:700}}>{user.name}</div>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn">Login</Link>
        )}
      </div>
    </nav>
  );
}
