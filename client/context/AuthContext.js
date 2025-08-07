"use client"
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode"; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = (token) => {
    localStorage.setItem("jwt", token);
    const decoded = jwtDecode(token); 
    setUser(decoded);
    router.push("/kalendarz");
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
