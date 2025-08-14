import React, { createContext, useState, useContext, useEffect } from "react";
import { login as apiLogin } from "../api/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // To check initial session status

  useEffect(() => {
    // Simulate checking for an existing session on app load
    const user = sessionStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const user = await apiLogin(username, password);
    setCurrentUser(user);
    sessionStorage.setItem("currentUser", JSON.stringify(user)); // Persist session
    return user;
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("currentUser");
  };

  const value = { currentUser, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to easily use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
