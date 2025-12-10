import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e){
    e.preventDefault();
    const res = login({ email, password });
    if (!res.ok) {
      setError(res.message || "Login failed");
      return;
    }
    navigate(from, { replace: true });
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <p>Use any email and password (mock login)</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email"
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password:</label>
              <input 
                type="password"
                value={password} 
                onChange={e=>setPassword(e.target.value)} 
                placeholder="Enter your password" 
                required
              />
            </div>
            
            <button className="login-btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}