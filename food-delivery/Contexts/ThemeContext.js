// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: '#000000',
    backgroundColor: '#FFFFFF',
  });

  const updateTheme = (newTheme) => setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => {
  const { updateTheme } = useTheme();
  return updateTheme;
};
