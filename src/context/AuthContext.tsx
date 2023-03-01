import React, { useState, createContext, ReactElement } from "react";
import { UserDetails } from "../models/user.model";

type Props = {
  children: ReactElement;
};

type ContextType = {
  auth?: UserDetails;
  login: (userData: UserDetails) => void;
  logout: () => void;
};

export const AuthContext = createContext<ContextType>({
  auth: undefined,
  login: userData => {},
  logout: () => {},
});

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<UserDetails | undefined>(undefined);

  const login = (userData: UserDetails) => {
    setAuth(userData);
  };
  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return <AuthContext.Provider value={{...valueContext}}>{children}</AuthContext.Provider>;
}
