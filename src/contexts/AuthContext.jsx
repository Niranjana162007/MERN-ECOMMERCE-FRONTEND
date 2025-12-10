import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  function login({ email, password }) {
    // Mock login: accept any non-empty email/password
    if (!email || !password) return { ok: false, message: "Provide email and password" };
    const token = "mock-token-" + Date.now();
    const u = { email, token, name: email.split("@")[0] || "User" };
    setUser(u);
    return { ok: true };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  return useContext(AuthContext);
}
