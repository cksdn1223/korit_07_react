import { createContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  setAuth: (isAuth: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuth: () => {},
});

export default AuthContext