import React, { ReactNode, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const login = async (token: string) => {
    localStorage.setItem("auth_token", token);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
  };

  const value = {
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
