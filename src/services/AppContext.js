import React, { createContext, useState } from "react";
import { useContext } from "react";
const AppContext = createContext();
export const usethemeContext = () => {
  return useContext(AppContext);
};
export const ContextWrapper = ({ children }) => {
  const [themeColor, setThemeColor] = useState(false);
  const data = {
    themeColor,
    setThemeColor,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
