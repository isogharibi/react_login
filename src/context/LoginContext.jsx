import React, { createContext, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [Login, SetLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ Login, SetLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
