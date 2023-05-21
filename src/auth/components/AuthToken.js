import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  setToken: (token) => {token = token},
});

export default AuthContext;