import React, { createContext, useContext, useState } from "react";

interface IthemeContext {
  isDark: boolean;
  toggle?: () => void;
}

const initialState = {
  isDark: false,
};

const themeContext = createContext<IthemeContext>(initialState);

interface Props {
  children: React.ReactElement;
}

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => {
    setIsDark((prevValue) => !prevValue);
  };
  return (
    <themeContext.Provider value={{ isDark, toggle }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);
