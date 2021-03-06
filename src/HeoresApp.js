import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRoute } from "./routes/AppRoute";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeoresApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRoute />;
    </AuthContext.Provider>
  );
};
