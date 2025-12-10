import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🏠 Home Decor Store</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
  );
}
