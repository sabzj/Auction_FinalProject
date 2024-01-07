import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [useTheme, setUseTheme] = useState(true);

  const changeTheme = () => {
    setUseTheme((old) => !old);
  };
  return (
    <ThemeContext.Provider value={{ useTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
