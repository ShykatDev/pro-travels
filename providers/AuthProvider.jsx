"use client";

import { AuthContext } from "@/context";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
