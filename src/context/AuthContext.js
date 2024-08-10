// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))

  console.log("Token from localStorage:", token);
  useEffect(() => {
    if (token) {
      try {
        setUser(true); 
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [token]);
  
  useEffect(() => {
    console.log("User UE@", user);
  }, [user])
  

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
