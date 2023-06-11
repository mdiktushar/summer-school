import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [buttonName, setButtonName] = useState("Dark");

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      setButtonName("Light");
    } else {
      setTheme("light");
      setButtonName("Dark");
    }
  };

  const content = {
    changeTheme,
    buttonName,
  };

  return (
    <div data-theme={theme}>
      <ThemeContext.Provider value={content}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
